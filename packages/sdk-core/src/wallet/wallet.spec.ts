import {MnemonicSigner} from "../signers";
import {DesmosWallet} from "./wallet";
import {coin, StdFee } from "@cosmjs/stargate";

describe("Wallet Test", () => {

    jest.setTimeout(20000);

    const TEST_MNEMONIC = "hour harbor fame unaware bunker junk garment decrease federal vicious island smile warrior fame right suit portion skate analyst multiply magnet medal fresh sweet";
    const CHAIN_RPC = "https://rpc.morpheus.desmos.network";

    it("Test profile update", async () => {
        const signer = await MnemonicSigner.fromMnemonic(TEST_MNEMONIC);
        const wallet = new DesmosWallet(signer);

        await wallet.connect(CHAIN_RPC);

        const fee: StdFee = {
            gas: '200000',
            amount: [coin(500, 'udaric')],
        }

        await wallet.saveProfile({
            dtag: "ares_1"
        }, fee)
    })

})