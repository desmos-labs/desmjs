import {
    aminoSignerFromMnemonic, CosmosHdPath,
    DefaultFees,
    desmosClientFromMnemonic, signerFromMnemonic, TEST_CHAIN_URL,
    testUser1, testUser2,
} from "./testutils.spec";
import {DesmosClient} from "./desmosclient";
import {serializeSignDoc} from "@cosmjs/amino";
import {MsgLinkChainAccountEncodeObject, MsgUnlinkChainAccountEncodeObject} from "./encodeobjects";
import {Bech32Address, Proof} from "@desmoslabs/proto/desmos/profiles/v1beta1/models_chain_links";
import {fromBase64, toHex} from "@cosmjs/encoding";
import { Any } from "cosmjs-types/google/protobuf/any";
import {PubKey} from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import {assertIsBroadcastTxSuccess} from "@cosmjs/stargate";

describe("SigningDesmosClient", () => {

    jest.setTimeout(30000);

    describe("Signer update", () => {
        it("set direct signer", async () => {
            const client = DesmosClient.withoutSigner(TEST_CHAIN_URL);
            await client.connect();
            client.setSigner(await signerFromMnemonic(testUser1.mnemonic));

            await client.saveProfile(testUser1.address0, {
                dtag: "direct"
            }, DefaultFees.SaveProfile);
        });

        it("set amino signer", async () => {
            const client = DesmosClient.withoutSigner(TEST_CHAIN_URL);
            await client.connect();
            client.setSigner(await aminoSignerFromMnemonic(testUser1.mnemonic));

            await client.saveProfile(testUser1.address0, {
                dtag: "amino"
            }, DefaultFees.SaveProfile);
        });
    })

    describe("Profiles operations", () => {
        it("Save", async () => {
            const testUser1Client = await desmosClientFromMnemonic(testUser1.mnemonic);

            await testUser1Client.saveProfile(testUser1.address0, {
                dtag: testUser1.dtag
            }, DefaultFees.SaveProfile);
        })

        it("Delete", async () => {
            const testUser1Client = await desmosClientFromMnemonic(testUser1.mnemonic);

            await testUser1Client.saveProfile(testUser1.address0, {
                dtag: testUser1.dtag,
                nickname: "user1"
            }, DefaultFees.SaveProfile);

            await testUser1Client.deleteProfile(testUser1.address0, DefaultFees.DeleteProfile);

            let profile = await testUser1Client.getProfile(testUser1.address0);
            expect(profile).toBe(null);
            profile = await testUser1Client.getProfile(testUser1.dtag);
            expect(profile).toBe(null);
        })
    })

    describe("DTag operations", () => {
        it("Transfer", async () => {
            const testUser1Client = await desmosClientFromMnemonic(testUser1.mnemonic);
            const testUser2Client = await desmosClientFromMnemonic(testUser2.mnemonic);

            await testUser1Client.saveProfile(testUser1.address0, {
                dtag: testUser1.dtag,
                nickname: "user1"
            }, DefaultFees.SaveProfile);

            await testUser2Client.saveProfile(testUser2.address0, {
                dtag: testUser2.dtag,
                nickname: "user2"
            }, DefaultFees.SaveProfile);

            await testUser1Client.requestDtagTransfer(testUser1.address0, testUser2.address0, DefaultFees.DTagTransfer);
            let requests = await testUser1Client.queryDtagTransferRequests(testUser2.address0).then(r => r.requests);
            expect(requests.length).toBe(1);
            expect(requests[0].sender).toBe(testUser1.address0);
            expect(requests[0].receiver).toBe(testUser2.address0);

            await testUser2Client.acceptDtagTransferRequest("new_dtag", testUser2.address0,
                testUser1.address0, DefaultFees.AcceptDTag);

            const profile = await testUser1Client.getProfile(testUser1.address0);
            expect(profile?.dtag).toBe(testUser2.dtag);
        });

        it("Refuse", async () => {
            const testUser1Client = await desmosClientFromMnemonic(testUser1.mnemonic);
            const testUser2Client = await desmosClientFromMnemonic(testUser2.mnemonic);

            await testUser1Client.saveProfile(testUser1.address0, {
                dtag: testUser1.dtag,
                nickname: "user1"
            }, DefaultFees.SaveProfile);

            await testUser2Client.saveProfile(testUser2.address0, {
                dtag: testUser2.dtag,
                nickname: "user2"
            }, DefaultFees.SaveProfile);

            await testUser1Client.requestDtagTransfer(testUser1.address0, testUser2.address0, DefaultFees.DTagTransfer);
            await testUser2Client.refuseDtagTransferRequest(testUser2.address0, testUser1.address0, DefaultFees.RefuseDTagTransfer);

            let requests = await testUser1Client.queryDtagTransferRequests(testUser2.address0).then(r => r.requests);
            expect(requests.length).toBe(0);
        });

        it("Cancel", async () => {
            const testUser1Client = await desmosClientFromMnemonic(testUser1.mnemonic);
            const testUser2Client = await desmosClientFromMnemonic(testUser2.mnemonic);

            await testUser1Client.saveProfile(testUser1.address0, {
                dtag: testUser1.dtag,
                nickname: "user1"
            }, DefaultFees.SaveProfile);

            await testUser2Client.saveProfile(testUser2.address0, {
                dtag: testUser2.dtag,
                nickname: "user2"
            }, DefaultFees.SaveProfile);

            await testUser1Client.requestDtagTransfer(testUser1.address0, testUser2.address0, DefaultFees.DTagTransfer);
            await testUser1Client.cancelDtagTransferRequest(testUser1.address0, testUser2.address0, DefaultFees.CancelDTagTransfer);

            let requests = await testUser1Client.queryDtagTransferRequests(testUser2.address0).then(r => r.requests);
            expect(requests.length).toBe(0);
        });
    })

    describe("Amino signer", () => {

        it("Create profile", async () => {
            const client = DesmosClient.withoutSigner(TEST_CHAIN_URL);
            await client.connect();
            client.setSigner(await aminoSignerFromMnemonic(testUser1.mnemonic));

            await client.saveProfile(testUser1.address0, {
                dtag: "amino"
            }, DefaultFees.SaveProfile);
        });

        it("Chain link", async () => {
            const externalChainSigner = await aminoSignerFromMnemonic(testUser1.mnemonic, [CosmosHdPath], "cosmos");
            const accounts = await externalChainSigner.getAccounts();
            const signed = await externalChainSigner.signAmino(accounts[0].address, {
                fee: {
                    gas: "0",
                    amount: []
                },
                memo: testUser1.address0,
                account_number: "0",
                sequence: "0",
                msgs: [],
                chain_id: ""
            });
            const serializedProof = serializeSignDoc(signed.signed);

            const client = DesmosClient.withoutSigner(TEST_CHAIN_URL);
            await client.connect();
            client.setSigner(await aminoSignerFromMnemonic(testUser1.mnemonic));

            // Create profile
            await client.saveProfile(testUser1.address0, {
                dtag: "testdtag",
            }, DefaultFees.SaveProfile);

            // Link cosmos address
            const response = await client.signAndBroadcast(testUser1.address0, [{
                typeUrl: "/desmos.profiles.v1beta1.MsgLinkChainAccount",
                value: {
                    signer: testUser1.address0,
                    proof: Proof.fromPartial({
                        signature: toHex(fromBase64(signed.signature.signature)),
                        plainText: toHex(serializedProof),
                        pubKey: Any.fromPartial({
                            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                            value: PubKey.encode(PubKey.fromPartial({
                                key: accounts[0].pubkey,
                            })).finish(),
                        })
                    }),
                    chainConfig: {
                        name: "cosmos",
                    },
                    chainAddress: {
                        typeUrl: "/desmos.profiles.v1beta1.Bech32Address",
                        value: Bech32Address.encode(Bech32Address.fromPartial({
                            value: accounts[0].address,
                            prefix: "cosmos"
                        })).finish(),
                    }
                }
            } as MsgLinkChainAccountEncodeObject], DefaultFees.SaveProfile);
            assertIsBroadcastTxSuccess(response);

            // Unlink cosmos address
            const unlinkResponse = await client.signAndBroadcast(testUser1.address0, [{
                typeUrl: "/desmos.profiles.v1beta1.MsgUnlinkChainAccount",
                value: {
                    chainName: "cosmos",
                    target: accounts[0].address,
                    owner: testUser1.address0,
                }
            } as MsgUnlinkChainAccountEncodeObject], DefaultFees.SaveProfile);
            assertIsBroadcastTxSuccess(unlinkResponse);
        })
    })

})