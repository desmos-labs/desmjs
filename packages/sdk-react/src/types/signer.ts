import {WalletConnectSigner as SdkWalletConnectSigner} from "@desmos-labs/sdk-core";
import {OfflineSigner} from "@cosmjs/proto-signing";

/**
 * Enums that represents the supported signer.
 */
export enum SignerType {
    Mnemonic,
    WalletConnect,
}

/**
 * Interface that represents a signer generated from the
 * user recovery passphrase.
 */
export interface MnemonicSigner {
    type: SignerType.Mnemonic,
    signer: OfflineSigner,
}

/**
 * Interface that represents a signer that use the
 * Wallet Connect protocol.
 */
export interface WalletConnectSigner {
    type: SignerType.WalletConnect,
    signer: SdkWalletConnectSigner,
}

/**
 * Type that represents all the supported signers.
 */
export type Signer = MnemonicSigner | WalletConnectSigner;
