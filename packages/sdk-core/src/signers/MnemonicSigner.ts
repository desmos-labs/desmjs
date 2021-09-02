import {DirectSigner, SignerStatus} from "./DirectSigner";
import {AccountData, DirectSecp256k1HdWallet, DirectSignResponse, OfflineDirectSigner} from "@cosmjs/proto-signing";
import {stringToPath} from "@cosmjs/crypto";
import {SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";

export class MnemonicSigner extends DirectSigner {

    private signer: OfflineDirectSigner;
    private accountData: AccountData | undefined;

    private constructor(signer: OfflineDirectSigner) {
        super(SignerStatus.NOT_CONNECTED);
        this.signer = signer;
    }

    static async fromMnemonic(mnemonic: string): Promise<MnemonicSigner> {
        const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
            hdPaths: [stringToPath("m/44'/852'/0'/0/0")],
            prefix: "desmos"
        });

        return new MnemonicSigner(signer);
    }

    async connect(): Promise<void> {
        if (this.status === SignerStatus.NOT_CONNECTED) {
            this.updateStatus(SignerStatus.CONNECTING);
            this.accountData = (await this.signer.getAccounts())[0]
            this.updateStatus(SignerStatus.CONNECTED);
        }
    }

    async disconnect(): Promise<void> {
        if (this.status === SignerStatus.CONNECTED) {
            this.updateStatus(SignerStatus.DISCONNECTING);
            this.accountData = undefined
            this.updateStatus(SignerStatus.NOT_CONNECTED);
        }
    }

    async getAccountData(): Promise<AccountData> {
        return this.accountData!;
    }

    signDirect(signDoc: SignDoc): Promise<DirectSignResponse> {
        return this.signer.signDirect(this.accountData?.address!, signDoc);
    }


}