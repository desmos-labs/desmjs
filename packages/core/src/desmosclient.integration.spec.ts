/* eslint-disable */
import { fromBase64, fromUtf8 } from "@cosmjs/encoding";
import { Profile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_profile";
import {
  assertIsDeliverTxSuccess,
  MsgSendEncodeObject,
  QueryClient,
  setupFeegrantExtension,
  SignerData,
  StdFee,
} from "@cosmjs/stargate";
import { AuthInfo, SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { EncodeObject } from "@cosmjs/proto-signing";
import { DesmosClient } from "./desmosclient";
import { OfflineSignerAdapter, Signer, SigningMode } from "./signers";
import {
  assertTxSuccess,
  defaultGasPrice,
  getDirectSignerAndClient,
  pollTx,
  TEST_CHAIN_URL,
  testUser1,
  testUser2,
} from "./testutils";
import {
  getPubKeyBytes,
  getPubKeyRawBytes,
  SignatureResult,
} from "./signatureresult";
import {
  MsgAuthenticateEncodeObject,
  MsgAuthenticateTypeUrl,
} from "./modules/desmjs/v1";
import {
  MsgSaveProfileEncodeObject,
  MsgSaveProfileTypeUrl,
} from "./modules/profiles/v3";
import { MsgGrantAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";
import { BasicAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/feegrant";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

describe("DesmosClient", () => {
  jest.setTimeout(60 * 1000);

  describe("SignatureResult utils", () => {
    async function getSignatureResult(): Promise<SignatureResult> {
      const [signer, client] = await getDirectSignerAndClient();
      const accounts = await signer.getAccounts();
      const { address } = accounts[0];
      const msg: MsgAuthenticateEncodeObject = {
        typeUrl: MsgAuthenticateTypeUrl,
        value: {
          user: address,
          nonce: Uint8Array.of(),
        },
      };

      return client.signTx(address, [msg], {
        fee: {
          gas: "0",
          amount: [],
        },
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

  describe("Gas estimation", () => {
    it("simulating with fee granter works properly", async () => {
      // Build the granter signer and client (to give the fee grant allowance)
      const [granterSigner, granterClient] = await getDirectSignerAndClient(
        testUser1.mnemonic,
      );
      const { address: granter } = (await granterSigner.getAccounts())[0];

      // Build the grantee signer and client (to simulate the transaction later on)
      const [granteeSigner, granteeClient] = await getDirectSignerAndClient(
        testUser2.mnemonic,
      );
      const { address: grantee } = (await granteeSigner.getAccounts())[0];

      // Check whether the fee allowance already exists or not
      let allowanceExists: boolean;
      try {
        const tmClient = await Tendermint34Client.connect(TEST_CHAIN_URL);
        const queryClient = QueryClient.withExtensions(
          tmClient,
          setupFeegrantExtension,
        );
        const _existingAllowance = await queryClient.feegrant.allowance(
          granter,
          grantee,
        );
        allowanceExists = true;
      } catch {
        allowanceExists = false;
      }

      if (!allowanceExists) {
        // Create the feegrant allowance
        const allowance: Any = {
          typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
          value: Uint8Array.from(
            BasicAllowance.encode({
              spendLimit: [
                {
                  denom: "stake",
                  amount: "100000000",
                },
              ],
            }).finish(),
          ),
        };
        const grantMsg = {
          typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
          value: MsgGrantAllowance.fromPartial({
            granter: granter,
            grantee: grantee,
            allowance: allowance,
          }),
        };
        const fee = 1.5;
        const grantResult = await granterClient.signAndBroadcast(
          granter,
          [grantMsg],
          fee,
          "Create allowance",
        );
        assertIsDeliverTxSuccess(grantResult);
      }

      // Try simulating the transaction without using the fee allowance
      const result = await granteeClient.estimateTxGas(grantee, [
        {
          typeUrl: MsgSaveProfileTypeUrl,
          value: {
            dtag: "TestUser",
            creator: grantee,
          },
        } as MsgSaveProfileEncodeObject,
      ]);
      expect(result).toBeGreaterThan(0);

      // Try simulating the transaction using the fee allowance
      const feeGranterResult = await granteeClient.estimateTxGas(
        grantee,
        [
          {
            typeUrl: MsgSaveProfileTypeUrl,
            value: {
              dtag: "TestUser",
              creator: grantee,
            },
          } as MsgSaveProfileEncodeObject,
        ],
        {
          feeGranter: granter,
        },
      );
      expect(feeGranterResult).toBeGreaterThan(0);

      // Make sure the two gas estimates are different (since the usage of the fee granter involves more gas)
      expect(feeGranterResult).not.toBe(result);
    });
  });

  describe("Transaction signing", () => {
    /**
     * Builds a new Signer, DesmosClient and custom message that can be used for test purposes.
     */
    async function buildTestMsg(): Promise<
      [Signer, DesmosClient, EncodeObject]
    > {
      const [signer, client] = await getDirectSignerAndClient();

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

      const response = await client.signTx(address, [msg], {
        fee,
        memo: "Test memo",
      });

      const signDoc = response.signDoc as SignDoc;
      const authInfo = AuthInfo.decode(signDoc.authInfoBytes);
      expect(authInfo.fee?.gasLimit).toBeDefined();
      expect(authInfo.fee?.amount).toHaveLength(1);
    });

    it("test estimate fees", async () => {
      const [signer, client, msg] = await buildTestMsg();
      const { address } = (await signer.getAccounts())[0];

      const response = await client.signTx(address, [msg], {
        memo: "Test memo",
      });

      const signDoc = response.signDoc as SignDoc;
      const authInfo = AuthInfo.decode(signDoc.authInfoBytes);
      expect(authInfo.fee?.gasLimit).toBeDefined();
      expect(authInfo.fee?.amount).toHaveLength(1);
    });
  });

  describe("Offline client", () => {
    it("test offline client signs transaction properly", async () => {
      const signer = await OfflineSignerAdapter.fromMnemonic(
        SigningMode.DIRECT,
        testUser1.mnemonic,
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
        client.signTx(testUser1.address0, msgs, {
          fee,
          signerData,
        }),
      ).resolves.toBeDefined();
    });

    it("test offline client throws error with fee === auto", async () => {
      const signer = await OfflineSignerAdapter.fromMnemonic(
        SigningMode.DIRECT,
        testUser1.mnemonic,
      );

      const client = await DesmosClient.offline(signer);

      const msgs: EncodeObject[] = [];
      const signerData: SignerData = {
        accountNumber: 0,
        chainId: "test-chain",
        sequence: 0,
      };

      await expect(
        client.signTx(testUser1.address0, msgs, {
          signerData,
        }),
      ).rejects.toHaveProperty(
        "message",
        "can't sign transaction in offline mode with fee === auto",
      );
    });

    it("test offline client signTx throws error without signerData", async () => {
      const signer = await OfflineSignerAdapter.fromMnemonic(
        SigningMode.DIRECT,
        testUser1.mnemonic,
      );

      const client = await DesmosClient.offline(signer);

      const msgs: EncodeObject[] = [];
      const fee: StdFee = {
        gas: "0",
        amount: [],
      };

      await expect(
        client.signTx(testUser1.address0, msgs, { fee }),
      ).rejects.toHaveProperty(
        "message",
        "can't sign transaction in offline mode without explicitSignerData",
      );
    });
  });

  describe("CosmWasm", () => {
    async function getTestContractAddress(
      client: DesmosClient,
    ): Promise<string> {
      const contracts = await client.getContracts(1);
      return contracts[0];
    }

    it("test getCodes", async () => {
      const [, client] = await getDirectSignerAndClient();

      const codes = await client.getCodes();
      expect(codes.length).toBe(1);
    });

    it("test getCodeDetails", async () => {
      const [, client] = await getDirectSignerAndClient();

      const codes = await client.getCodes();
      expect(codes.length).toBe(1);

      await client.getCodeDetails(codes[0].id);
    });

    it("test getContracts", async () => {
      const [, client] = await getDirectSignerAndClient();

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
      const [, client] = await getDirectSignerAndClient();

      // Gets the list of instantiated contracts
      const contracts = await client.getContracts(1);
      // Should be at least the one instantiated during the chain setup
      expect(contracts.length).toBeGreaterThan(0);

      await client.getContract(contracts[0]);
    });

    it("test getContractCodeHistory", async () => {
      const [, client] = await getDirectSignerAndClient();

      // Gets the list of instantiated contracts
      const contracts = await client.getContracts(1);
      // Should be at least the one instantiated during the chain setup
      expect(contracts.length).toBeGreaterThan(0);

      await client.getContractCodeHistory(contracts[0]);
    });

    it("test queryContractSmart", async () => {
      const [, client] = await getDirectSignerAndClient();

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
        "https://i.imgur.com/X2aK5Bq.jpeg",
      );
      expect(profile.pictures?.cover).toBe("https://i.imgur.com/X2aK5Bq.jpeg");
    });

    it("test initialize", async () => {
      const [, client] = await getDirectSignerAndClient();

      await client.instantiate(
        testUser1.address0,
        1,
        {},
        "test-contract-init",
        "auto",
      );
    });

    it("test updateAdmin", async () => {
      const [, client] = await getDirectSignerAndClient();

      const response = await client.instantiate(
        testUser1.address0,
        1,
        {},
        "test-contract-init",
        "auto",
        {
          admin: testUser1.address0,
        },
      );

      await client.updateAdmin(
        testUser1.address0,
        response.contractAddress,
        testUser2.address0,
        "auto",
      );
    });

    it("test clearAdmin", async () => {
      const [, client] = await getDirectSignerAndClient();

      const response = await client.instantiate(
        testUser1.address0,
        1,
        {},
        "test-contract-init",
        "auto",
        {
          admin: testUser1.address0,
        },
      );

      await client.clearAdmin(
        testUser1.address0,
        response.contractAddress,
        "auto",
      );
    });

    it("test execute", async () => {
      const [, client] = await getDirectSignerAndClient();

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
        "auto",
      );
    });
  });

  describe("Broadcast tx", () => {
    it("test broadcast tx async", async () => {
      const [signer, client] = await getDirectSignerAndClient();
      const { address } = (await signer.getAccounts())[0];

      const signResult = await client.signTx(address, [
        {
          typeUrl: MsgSaveProfileTypeUrl,
          value: {
            dtag: "test_async",
            creator: address,
          },
        } as MsgSaveProfileEncodeObject,
      ]);
      const response = await client.broadcastTxAsync(signResult.txRaw);
      await pollTx(client, response.hash);
    });

    it("test broadcast tx sync", async () => {
      const [signer, client] = await getDirectSignerAndClient();
      const { address } = (await signer.getAccounts())[0];

      const signResult = await client.signTx(address, [
        {
          typeUrl: MsgSaveProfileTypeUrl,
          value: {
            dtag: "test_sync",
            creator: address,
          },
        } as MsgSaveProfileEncodeObject,
      ]);
      const response = await client.broadcastTxRawSync(signResult.txRaw);
      await pollTx(client, response.hash);
    });

    it("test broadcast tx block", async () => {
      const [signer, client] = await getDirectSignerAndClient();
      const { address } = (await signer.getAccounts())[0];

      const signResult = await client.signTx(address, [
        {
          typeUrl: MsgSaveProfileTypeUrl,
          value: {
            dtag: "test_sync",
            creator: address,
          },
        } as MsgSaveProfileEncodeObject,
      ]);
      const response = await client.broadcastTxBlock(signResult.txRaw);
      assertTxSuccess(response);
    });
  });
});
