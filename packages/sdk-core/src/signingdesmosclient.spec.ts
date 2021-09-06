import {
    aminoSignerFromMnemonic,
    DefaultFees,
    desmosClientFromMnemonic, signerFromMnemonic, TEST_CHAIN_URL,
    testUser1, testUser2,
} from "./testutils.spec";
import {SigningDesmosClient} from "./signingdesmosclient";

describe("SigningDesmosClient", () => {

    jest.setTimeout(30000);

    describe("Signer update", () => {
        it("set direct signer", async () => {
            const client = SigningDesmosClient.withoutSigner(TEST_CHAIN_URL);
            await client.connect();
            client.setSigner(await signerFromMnemonic(testUser1.mnemonic));

            await client.saveProfile(testUser1.address0, {
                dtag: "direct"
            }, DefaultFees.SaveProfile);
        });

        it("set amino signer", async () => {
            const client = SigningDesmosClient.withoutSigner(TEST_CHAIN_URL);
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

})