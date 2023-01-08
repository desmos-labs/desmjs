import { fromBase64, fromUtf8, toHex } from "@cosmjs/encoding";
import { Profile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_profile";
import { MsgSendEncodeObject, SignerData, StdFee } from "@cosmjs/stargate";
import { AuthInfo, SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {
  Bech32Address,
  ChainConfig,
  Proof,
  SignatureValueType,
  SingleSignature,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_chain_links";
import { Any } from "@desmoslabs/desmjs-types/google/protobuf/any";
import { MsgLinkChainAccount } from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_chain_links";
import { MsgSaveProfile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";
import { EncodeObject } from "@cosmjs/proto-signing";
import { DesmosClient } from "./desmosclient";
import { OfflineSignerAdapter, Signer, SigningMode } from "./signers";
import {
  defaultGasPrice,
  TEST_CHAIN_URL,
  testUser1,
  testUser2,
} from "./testutils";
import {
  getPubKeyBytes,
  getPubKeyRawBytes,
  getSignatureBytes,
  getSignedBytes,
  SignatureResult,
} from "./signatureresult";
import {
  MsgAuthenticateEncodeObject,
  MsgLinkChainAccountEncodeObject,
  MsgSaveProfileEncodeObject,
} from "./encodeobjects";
import {
  bech32AddressToAny,
  singleSignatureToAny,
} from "./aminomessages/profiles";

describe("DesmosClient", () => {
  jest.setTimeout(30000);

  /**
   * Builds a Signer and DesmosClient instance based on a test mnemonic.
   */
  async function getSignerAndClient(): Promise<[Signer, DesmosClient]> {
    const signer = await OfflineSignerAdapter.fromMnemonic(
      SigningMode.DIRECT,
      testUser1.mnemonic
    );
    const client = await DesmosClient.connectWithSigner(
      TEST_CHAIN_URL,
      signer,
      {
        gasPrice: defaultGasPrice,
      }
    );
    return [signer, client];
  }

  describe("SignatureResult utils", () => {
    async function getSignatureResult(): Promise<SignatureResult> {
      const [signer, client] = await getSignerAndClient();
      const accounts = await signer.getAccounts();
      const { address } = accounts[0];
      const msg: MsgAuthenticateEncodeObject = {
        typeUrl: "/desmjs.v1.MsgAuthenticate",
        value: {
          user: address,
          nonce: Uint8Array.of(),
        },
      };

      return client.signTx(address, [msg], {
        gas: "0",
        amount: [],
      });
    }

    it("test getPubKeyRawBytes", async () => {
      const result = await getSignatureResult();
      const rawPubKeyBytes = getPubKeyRawBytes(result);
      expect(rawPubKeyBytes.length).toBe(33);
    });

    it("test getPubKeyBytes", async () => {
      const result = await getSignatureResult();
      const pubKeyBytes = getPubKeyBytes(result);
      expect(pubKeyBytes).not.toBeNull();
    });
  });

  describe("Transaction signing", () => {
    /**
     * Builds a new Signer, DesmosClient and custom message that can be used for test purposes.
     */
    async function buildTestMsg(): Promise<
      [Signer, DesmosClient, EncodeObject]
    > {
      const [signer, client] = await getSignerAndClient();

      const accounts = await signer.getAccounts();
      const { address } = accounts[0];
      const msgSend: MsgSendEncodeObject = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: address,
          toAddress: "desmos182pjjr3lexdpxszz3dn56xur7zs0xzj0akmkag",
          amount: [
            {
              amount: "1000",
              denom: defaultGasPrice.denom,
            },
          ],
        },
      };
      return [signer, client, msgSend];
    }

    it("test custom fees", async () => {
      const [signer, client, msg] = await buildTestMsg();
      const { address } = (await signer.getAccounts())[0];

      const fee: StdFee = {
        gas: "200000",
        amount: [
          {
            amount: "10000",
            denom: defaultGasPrice.denom,
          },
        ],
      };

      const response = await client.signTx(address, [msg], fee, "Test memo");

      const signDoc = response.signDoc as SignDoc;
      const authInfo = AuthInfo.decode(signDoc.authInfoBytes);
      expect(authInfo.fee?.gasLimit).toBeDefined();
      expect(authInfo.fee?.amount).toHaveLength(1);
    });

    it("test estimate fees", async () => {
      const [signer, client, msg] = await buildTestMsg();
      const { address } = (await signer.getAccounts())[0];

      const response = await client.signTx(address, [msg], "auto", "Test memo");

      const signDoc = response.signDoc as SignDoc;
      const authInfo = AuthInfo.decode(signDoc.authInfoBytes);
      expect(authInfo.fee?.gasLimit).toBeDefined();
      expect(authInfo.fee?.amount).toHaveLength(1);
    });

    it("test chain connection", async () => {
      // Setup the client associated to the external wallet
      const externalSigner = await OfflineSignerAdapter.fromMnemonic(
        SigningMode.AMINO,
        testUser2.mnemonic
      );
      const externalClient = await DesmosClient.connectWithSigner(
        TEST_CHAIN_URL,
        externalSigner,
        {
          gasPrice: defaultGasPrice,
          gasAdjustment: 1.2,
        }
      );
      const externalAccounts = await externalSigner.getAccounts();
      const externalAddress = externalAccounts[0].address;

      // Setup the client associated to the Desmos profile
      const profileSigner = await OfflineSignerAdapter.fromMnemonic(
        SigningMode.DIRECT,
        testUser1.mnemonic
      );
      const profileClient = await DesmosClient.connectWithSigner(
        TEST_CHAIN_URL,
        profileSigner,
        {
          gasPrice: defaultGasPrice,
          gasAdjustment: 1.2,
        }
      );
      const profileAccounts = await profileSigner.getAccounts();
      const profileAddress = profileAccounts[0].address;

      // Create a profile (required to simulate the transaction properly)
      const msgSaveProfile: MsgSaveProfileEncodeObject = {
        typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
        value: MsgSaveProfile.fromPartial({
          dtag: "JohnDoe",
          creator: profileAddress,
        }),
      };
      const saveProfileResult = await profileClient.signAndBroadcast(
        profileAddress,
        [msgSaveProfile],
        "auto"
      );
      expect(saveProfileResult.code).toBe(0);

      // Sign a dummy tx that includes the Desmos profile address within its memo, using the external account
      const dummySignatureResult = await externalClient.signTx(
        externalAddress,
        [],
        { amount: [], gas: "0" },
        profileAddress
      );

      // Build the chain config
      const chainConfig: ChainConfig = {
        name: "desmos",
      };

      // Build the address data
      const chainAddress: Any = bech32AddressToAny(
        Bech32Address.fromPartial({
          value: externalAddress,
          prefix: "desmos",
        })
      );

      // Build the signature
      const signature: SingleSignature = SingleSignature.fromPartial({
        valueType: SignatureValueType.SIGNATURE_VALUE_TYPE_COSMOS_AMINO, // Proper signature type
        signature: getSignatureBytes(dummySignatureResult),
      });

      // Build the proof
      const proof: Proof = Proof.fromPartial({
        pubKey: dummySignatureResult.pubKey,
        signature: singleSignatureToAny(signature),
        plainText: toHex(getSignedBytes(dummySignatureResult)),
      });

      // Create the message to link the chain account
      const msg: MsgLinkChainAccountEncodeObject = {
        typeUrl: "/desmos.profiles.v3.MsgLinkChainAccount",
        value: MsgLinkChainAccount.fromPartial({
          chainConfig,
          chainAddress,
          proof,
          signer: profileAddress,
        }),
      };

      const result = await profileClient.signTx(profileAddress, [msg], "auto");
      expect(result.txRaw.signatures).toHaveLength(1);
    });
  });

  describe("Offline client", () => {
    it("test offline client signs transaction properly", async () => {
      const signer = await OfflineSignerAdapter.fromMnemonic(
        SigningMode.DIRECT,
        testUser1.mnemonic
      );

      const client = await DesmosClient.offline(signer);

      const msgs: EncodeObject[] = [];
      const fee: StdFee = {
        gas: "0",
        amount: [],
      };
      const signerData: SignerData = {
        accountNumber: 0,
        chainId: "test-chain",
        sequence: 0,
      };

      await expect(
        client.signTx(testUser1.address0, msgs, fee, undefined, signerData)
      ).resolves.toBeDefined();
    });

    it("test offline client throws error with fee === auto", async () => {
      const signer = await OfflineSignerAdapter.fromMnemonic(
        SigningMode.DIRECT,
        testUser1.mnemonic
      );

      const client = await DesmosClient.offline(signer);

      const msgs: EncodeObject[] = [];
      const signerData: SignerData = {
        accountNumber: 0,
        chainId: "test-chain",
        sequence: 0,
      };

      await expect(
        client.signTx(testUser1.address0, msgs, "auto", undefined, signerData)
      ).rejects.toHaveProperty(
        "message",
        "can't sign transaction in offline mode with fee === auto"
      );
    });

    it("test offline client signTx throws error without signerData", async () => {
      const signer = await OfflineSignerAdapter.fromMnemonic(
        SigningMode.DIRECT,
        testUser1.mnemonic
      );

      const client = await DesmosClient.offline(signer);

      const msgs: EncodeObject[] = [];
      const fee: StdFee = {
        gas: "0",
        amount: [],
      };

      await expect(
        client.signTx(testUser1.address0, msgs, fee)
      ).rejects.toHaveProperty(
        "message",
        "can't sign transaction in offline mode without explicitSignerData"
      );
    });
  });

  describe("CosmWasm", () => {
    async function getTestContractAddress(
      client: DesmosClient
    ): Promise<string> {
      const contracts = await client.getContracts(1);
      return contracts[0];
    }

    it("test getCodes", async () => {
      const [, client] = await getSignerAndClient();

      const codes = await client.getCodes();
      expect(codes.length).toBe(1);
    });

    it("test getCodeDetails", async () => {
      const [, client] = await getSignerAndClient();

      const codes = await client.getCodes();
      expect(codes.length).toBe(1);

      await client.getCodeDetails(codes[0].id);
    });

    it("test getContracts", async () => {
      const [, client] = await getSignerAndClient();

      // Get contract codes
      const codes = await client.getCodes();
      expect(codes.length).toBe(1);
      const contractCode = codes[0];

      // Gets the list of instantiated contracts
      const contracts = await client.getContracts(contractCode.id);
      // Should be at least the one instantiated during the chain setup
      expect(contracts.length).toBeGreaterThan(0);
    });

    it("test getContract", async () => {
      const [, client] = await getSignerAndClient();

      // Gets the list of instantiated contracts
      const contracts = await client.getContracts(1);
      // Should be at least the one instantiated during the chain setup
      expect(contracts.length).toBeGreaterThan(0);

      await client.getContract(contracts[0]);
    });

    it("test getContractCodeHistory", async () => {
      const [, client] = await getSignerAndClient();

      // Gets the list of instantiated contracts
      const contracts = await client.getContracts(1);
      // Should be at least the one instantiated during the chain setup
      expect(contracts.length).toBeGreaterThan(0);

      await client.getContractCodeHistory(contracts[0]);
    });

    it("test queryContractSmart", async () => {
      const [, client] = await getSignerAndClient();

      const testContract = await getTestContractAddress(client);

      const response = await client.queryContractSmart(testContract, {
        desmos_chain: {
          request: {
            custom: {
              profiles: {
                profile: {
                  user: testContract,
                },
              },
            },
          },
        },
      });
      // Expect to have some data
      expect(response.data).toBeDefined();

      // Parse the received json
      const receivedJson = JSON.parse(fromUtf8(fromBase64(response.data)));
      // Expect a profile to be defined
      expect(receivedJson.profile).toBeDefined();

      const profile = receivedJson.profile as Profile;

      expect(profile.dtag).toBe("test_profile");
      expect(profile.nickname).toBe("contract_nick");
      expect(profile.bio).toBe("test_bio");
      expect(profile.pictures?.profile).toBe(
        "https://i.imgur.com/X2aK5Bq.jpeg"
      );
      expect(profile.pictures?.cover).toBe("https://i.imgur.com/X2aK5Bq.jpeg");
    });

    it("test initialize", async () => {
      const [, client] = await getSignerAndClient();

      await client.instantiate(
        testUser1.address0,
        1,
        {},
        "test-contract-init",
        "auto"
      );
    });

    it("test updateAdmin", async () => {
      const [, client] = await getSignerAndClient();

      const response = await client.instantiate(
        testUser1.address0,
        1,
        {},
        "test-contract-init",
        "auto",
        {
          admin: testUser1.address0,
        }
      );

      await client.updateAdmin(
        testUser1.address0,
        response.contractAddress,
        testUser2.address0,
        "auto"
      );
    });

    it("test clearAdmin", async () => {
      const signer = await OfflineSignerAdapter.fromMnemonic(
        SigningMode.DIRECT,
        testUser1.mnemonic
      );
      const client = await DesmosClient.connectWithSigner(
        TEST_CHAIN_URL,
        signer,
        {
          gasPrice: defaultGasPrice,
        }
      );

      const response = await client.instantiate(
        testUser1.address0,
        1,
        {},
        "test-contract-init",
        "auto",
        {
          admin: testUser1.address0,
        }
      );

      await client.clearAdmin(
        testUser1.address0,
        response.contractAddress,
        "auto"
      );
    });

    it("test execute", async () => {
      const [, client] = await getSignerAndClient();

      const testContract = await getTestContractAddress(client);

      await client.execute(
        testUser1.address0,
        testContract,
        {
          desmos_messages: {
            msgs: [
              {
                custom: {
                  profiles: {
                    save_profile: {
                      dtag: "[do-not-modify]",
                      bio: "[do-not-modify]",
                      profile_picture: "[do-not-modify]",
                      cover_picture: "[do-not-modify]",
                      nickname: "[do-not-modify]",
                      creator: testContract,
                    },
                  },
                },
              },
            ],
          },
        },
        "auto"
      );
    });
  });
});
