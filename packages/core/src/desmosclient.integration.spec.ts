import { fromBase64, fromUtf8, toHex } from "@cosmjs/encoding";
import { Profile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_profile";
import { MsgSendEncodeObject, SignerData, StdFee } from "@cosmjs/stargate";
import { AuthInfo, SignDoc, TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
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
import Long from "long";
import { sleep } from "@cosmjs/utils";
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
  MsgAddReactionEncodeObject,
  MsgAddReasonEncodeObject,
  MsgAddRegisteredReactionEncodeObject,
  MsgAuthenticateEncodeObject,
  MsgCreatePostEncodeObject,
  MsgCreateReportEncodeObject,
  MsgCreateSubspaceEncodeObject,
  MsgLinkChainAccountEncodeObject,
  MsgMultiSendEncodeObject,
  MsgSaveProfileEncodeObject,
} from "./encodeobjects";
import {
  bech32AddressToAny,
  singleSignatureToAny,
} from "./aminomessages/profiles";
import { postTargetToAny } from "./aminomessages/reports";
import { registeredReactionValueToAny } from "./aminomessages/reactions";
import {
  DoNotModify,
  MsgAddReactionTypeUrl,
  MsgAddReasonTypeUrl,
  MsgAddRegisteredReactionTypeUrl,
  MsgCreatePostTypeUrl,
  MsgCreateReportTypeUrl,
  MsgCreateSubspaceTypeUrl,
  MsgMultiSendTypeUrl,
  MsgSaveProfileTypeUrl,
} from "./const";
import MsgAuthenticateTypeUrl from "./const/desmjs";

describe("DesmosClient", () => {
  jest.setTimeout(60 * 1000);

  /**
   * Builds a Signer and DesmosClient instance based on a test mnemonic.
   * The returned signer will sign transactions using the AMINO signing mode.
   */
  async function getAminoSignerAndClient(): Promise<[Signer, DesmosClient]> {
    const signer = await OfflineSignerAdapter.fromMnemonic(
      SigningMode.AMINO,
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

  /**
   * Builds a Signer and DesmosClient instance based on a test mnemonic.
   * The returned signer will sign transactions using the DIRECT signing mode.
   */
  async function getDirectSignerAndClient(): Promise<[Signer, DesmosClient]> {
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

  async function pollTx(client: DesmosClient, txHash: string): Promise<void> {
    let timedOut = false;
    const txPollTimeout = setTimeout(() => {
      timedOut = true;
    }, 60000);

    while (!timedOut) {
      const tx = await client.getTx(txHash);
      if (tx !== null) {
        clearTimeout(txPollTimeout);
        return;
      }
      await sleep(3000);
    }

    throw new Error(`Timed out waiting for tx ${txHash}`);
  }

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

    it("test MsgLinkChainAccount", async () => {
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
        { fee: { amount: [], gas: "0" }, memo: profileAddress }
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

      const result = await profileClient.signTx(profileAddress, [msg]);
      expect(result.txRaw.signatures).toHaveLength(1);
    });

    it("test MsgMultiSend", async () => {
      const [signer, client] = await getAminoSignerAndClient();
      const { address } = (await signer.getAccounts())[0];

      const msg: MsgMultiSendEncodeObject = {
        typeUrl: MsgMultiSendTypeUrl,
        value: {
          inputs: [
            {
              address,
              coins: [
                {
                  amount: "2000",
                  denom: defaultGasPrice.denom,
                },
              ],
            },
          ],
          outputs: [
            {
              address,
              coins: [
                {
                  amount: "1000",
                  denom: defaultGasPrice.denom,
                },
              ],
            },
            {
              address: "desmos1fjuwp09jt6nq0jxasanze6p968unwtkgzzptad",
              coins: [
                {
                  amount: "1000",
                  denom: defaultGasPrice.denom,
                },
              ],
            },
          ],
        },
      };

      const signedTx = await client.signTx(address, [msg]);
      const txBytes = TxRaw.encode(signedTx.txRaw).finish();
      const broadcastTx = await client.broadcastTx(txBytes);
      expect(broadcastTx.code).toBe(0);
    });

    it("test MsgCreatePost", async () => {
      const [signer, client] = await getAminoSignerAndClient();
      const { address } = (await signer.getAccounts())[0];

      // Create a profile (required to create a post)
      const msgSaveProfile: MsgSaveProfileEncodeObject = {
        typeUrl: MsgSaveProfileTypeUrl,
        value: {
          dtag: "TestUser",
          nickname: "Test user",
          bio: DoNotModify,
          profilePicture: DoNotModify,
          coverPicture: DoNotModify,
          creator: address,
        },
      };
      await client.signAndBroadcast(address, [msgSaveProfile], "auto");
      await sleep(5000);

      // Create a subspace
      // Ignore any error if the subspace already exists
      const msgCreateSubspace: MsgCreateSubspaceEncodeObject = {
        typeUrl: MsgCreateSubspaceTypeUrl,
        value: {
          name: "Test Subspace",
          description: "Test subspaces",
          treasury: "",
          owner: address,
          creator: address,
        },
      };
      await client.signAndBroadcast(address, [msgCreateSubspace], "auto");
      await sleep(5000);

      // Create a first post
      const msgCreatePost: MsgCreatePostEncodeObject = {
        typeUrl: MsgCreatePostTypeUrl,
        value: {
          subspaceId: Long.fromNumber(1),
          sectionId: 0,
          externalId: "",
          text: "This is a test post",
          entities: {
            hashtags: [],
            mentions: [],
            urls: [
              {
                displayUrl: "IPFS",
                start: Long.fromNumber(4),
                end: Long.fromNumber(5),
                url: "http://scripta.network/logo.svg",
              },
            ],
          },
          tags: [],
          attachments: [],
          author: address,
          conversationId: Long.fromNumber(0),
          replySettings: 1,
          referencedPosts: [],
        },
      };
      await client.signAndBroadcast(address, [msgCreatePost], "auto");
      await sleep(5000);

      // Create a post
      const msg: MsgCreatePostEncodeObject = {
        typeUrl: MsgCreatePostTypeUrl,
        value: {
          subspaceId: Long.fromNumber(1),
          sectionId: 0,
          externalId: "",
          text: "This is a test post",
          entities: {
            hashtags: [],
            mentions: [],
            urls: [
              {
                displayUrl: "IPFS",
                start: Long.fromNumber(4),
                end: Long.fromNumber(5),
                url: "http://scripta.network/logo.svg",
              },
            ],
          },
          tags: [],
          attachments: [],
          author: address,
          conversationId: Long.fromNumber(0),
          replySettings: 1,
          referencedPosts: [
            {
              position: Long.fromNumber(0),
              postId: Long.fromNumber(1),
              type: 1,
            },
          ],
        },
      };
      const result = await client.signAndBroadcast(address, [msg], "auto");
      expect(result.code).toBe(0);
    });

    it("test MsgCreateReport", async () => {
      const [signer, client] = await getAminoSignerAndClient();
      const { address } = (await signer.getAccounts())[0];

      // Create a report reason
      const msgAddReasons: MsgAddReasonEncodeObject = {
        typeUrl: MsgAddReasonTypeUrl,
        value: {
          signer: address,
          subspaceId: Long.fromNumber(1),
          description: "Test reason",
          title: "Test reason",
        },
      };
      await client.signAndBroadcast(address, [msgAddReasons], "auto");
      await sleep(5000);

      // report a post
      const msgCreateReport: MsgCreateReportEncodeObject = {
        typeUrl: MsgCreateReportTypeUrl,
        value: {
          subspaceId: Long.fromNumber(1),
          message: "This is a test report",
          reasonsIds: [1],
          reporter: address,
          target: postTargetToAny({
            postId: Long.fromNumber(1),
          }),
        },
      };
      await client.signAndBroadcast(address, [msgCreateReport], "auto");
      await sleep(5000);
    });

    it("test MsgAddReaction", async () => {
      const [signer, client] = await getAminoSignerAndClient();
      const { address } = (await signer.getAccounts())[0];

      // Create a registered reaction for the subspace
      const msgRegisterReaction: MsgAddRegisteredReactionEncodeObject = {
        typeUrl: MsgAddRegisteredReactionTypeUrl,
        value: {
          user: address,
          subspaceId: Long.fromNumber(1),
          displayValue: "like",
          shorthandCode: "like",
        },
      };
      await client.signAndBroadcast(address, [msgRegisterReaction], "auto");
      await sleep(5000);

      // React to a post
      const msgAddReaction: MsgAddReactionEncodeObject = {
        typeUrl: MsgAddReactionTypeUrl,
        value: {
          subspaceId: Long.fromNumber(1),
          postId: Long.fromNumber(1),
          user: address,
          value: registeredReactionValueToAny({
            registeredReactionId: 1,
          }),
        },
      };
      await client.signAndBroadcast(address, [msgAddReaction], "auto");
      await sleep(5000);
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
        client.signTx(testUser1.address0, msgs, {
          fee,
          signerData,
        })
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
        client.signTx(testUser1.address0, msgs, {
          signerData,
        })
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
        client.signTx(testUser1.address0, msgs, { fee })
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
        "https://i.imgur.com/X2aK5Bq.jpeg"
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
        "auto"
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
        "auto"
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
      const response = await client.broadcastTxSync(signResult.txRaw);
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
      await client.broadcastTxBlock(signResult.txRaw);
    });
  });
});
