import {coin, StdFee } from "@cosmjs/stargate";
import {SigningDesmosClient} from "./signingdesmosclient";
import {stringToPath} from "@cosmjs/crypto";
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";

describe("Wallet Test", () => {

    jest.setTimeout(20000);

    const TEST_MNEMONIC = "hour harbor fame unaware bunker junk garment decrease federal vicious island smile warrior fame right suit portion skate analyst multiply magnet medal fresh sweet";
    const CHAIN_RPC = "https://rpc.morpheus.desmos.network";

    it("Test profile update", async () => {
        const signer = await DirectSecp256k1HdWallet.fromMnemonic(TEST_MNEMONIC, {
            hdPaths: [stringToPath("m/44'/852'/0'/0/0")],
            prefix: "desmos"
        });

        const client = new SigningDesmosClient(CHAIN_RPC, signer);
        await client.connect();

        const creator = await client.getSignerAddress();

        const fee: StdFee = {
            gas: '200000',
            amount: [coin(500, 'udaric')],
        }

        await client.saveProfile(creator, {
            dtag: "ares_1"
        }, fee)
    })

})