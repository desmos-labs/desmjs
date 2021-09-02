import {DirectSigner} from "../signers";
import {AccountData, DirectSignResponse, OfflineDirectSigner} from "@cosmjs/proto-signing";
import {SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";

/**
 * Adapter to make our DirectSigner compatible with the cosmjs signer.
 */
export class OfflineSignerAdapter implements OfflineDirectSigner {

    private readonly signer: DirectSigner

    constructor(signer: DirectSigner) {
        this.signer = signer;
    }

    getAccounts(): Promise<readonly AccountData[]> {
        return this.signer.getAccountData().then(d => [d]);
    }

    signDirect(_: string, signDoc: SignDoc): Promise<DirectSignResponse> {
        return this.signer.signDirect(signDoc);
    }

}