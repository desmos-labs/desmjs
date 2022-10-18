import { fromBase64, fromUtf8 } from "@cosmjs/encoding";
import { Profile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_profile";
import { MsgSendEncodeObject } from "@cosmjs/stargate";
import { AuthInfo, SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { DesmosClient } from "./desmosclient";
import { OfflineSignerAdapter, SigningMode } from "./signers";
import {
  defaultGasPrice,
  TEST_CHAIN_URL,
  testUser1,
  testUser2,
} from "./testutils";

async function getTestContractAddress(client: DesmosClient): Promise<string> {
  const contracts = await client.getContracts(1);
  return contracts[0];
}

describe("DesmosClient", () => {
  jest.setTimeout(30000);

  describe("Transaction signing", () => {
    it("test estimate fees", async () => {
      const signer = await OfflineSignerAdapter.fromMnemonic(
        SigningMode.DIRECT,
        testUser1.mnemonic
      );
      const client = await DesmosClient.connectWithSigner(
        TEST_CHAIN_URL,
        signer,
        {
          gasPrice: defaultGasPrice,
          gasAdjustment: 1.2,
        }
      );

      const accounts = await signer.getAccounts();
      const { address } = accounts[0];
      const msg: MsgSendEncodeObject = {
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
      const response = await client.signTx(address, [msg], "auto", "Test memo");
      const signDoc = response.signDoc as SignDoc;
      const authInfo = AuthInfo.decode(signDoc.authInfoBytes);
      expect(authInfo.fee?.gasLimit).toBeDefined();
      expect(authInfo.fee?.amount).toHaveLength(1);
    });
  });

  describe("Cosmwasm", () => {
    it("test getCodes", async () => {
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

      const codes = await client.getCodes();
      expect(codes.length).toBe(1);
    });

    it("test getCodeDetails", async () => {
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

      const codes = await client.getCodes();
      expect(codes.length).toBe(1);

      await client.getCodeDetails(codes[0].id);
    });

    it("test getContracts", async () => {
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

      // Gets the list of instantiated contracts
      const contracts = await client.getContracts(1);
      // Should be at least the one instantiated during the chain setup
      expect(contracts.length).toBeGreaterThan(0);

      await client.getContract(contracts[0]);
    });

    it("test getContractCodeHistory", async () => {
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

      // Gets the list of instantiated contracts
      const contracts = await client.getContracts(1);
      // Should be at least the one instantiated during the chain setup
      expect(contracts.length).toBeGreaterThan(0);

      await client.getContractCodeHistory(contracts[0]);
    });

    it("test queryContractSmart", async () => {
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

      await client.instantiate(
        testUser1.address0,
        1,
        {},
        "test-contract-init",
        "auto"
      );
    });

    it("test updateAdmin", async () => {
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
