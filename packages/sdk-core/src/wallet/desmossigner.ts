import {OfflineAminoSigner} from "@cosmjs/amino";
import {OfflineDirectSigner} from "@cosmjs/proto-signing";


export enum SignMode {
    Amino,
    Direct,
}

export interface DesmosSigner extends OfflineAminoSigner, OfflineDirectSigner {

    /**
     * Sets the method to use when signing a transaction with this signer.
     * @param mode - The sign mode that will be used.
     */
    setSignMode(mode: SignMode): void,

    /**
     * Gets the method that should be used to sign a transaction.
     */
    signMode(): SignMode,

    /**
     * Tells if the signer is currently able to sign a transaction.
     */
    isConnected(): boolean,

}