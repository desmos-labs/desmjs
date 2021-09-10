import {Signer, SignerType} from "./types";
import {ClientOptions} from "@walletconnect/types/dist/cjs/client";
import WalletConnectClient from "@walletconnect/client";
import {SessionTypes} from "@walletconnect/types";
import {WalletConnectSigner} from "@desmoslabs/sdk-core";
import {AccountData, DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import {ConnectableSignerStatus, QrCodeController} from "@desmoslabs/sdk-core";

/**
 * Enum that represents the current signer status.
 */
export enum SignerStatus {
    NotConnected,
    Connected,
    Connecting,
    Disconnecting,
}

/**
 * Parameters to tells the controller to connect to a signer
 * derived from the user's recovery passphrase.
 */
export interface ConnectToMnemonicSigner {
    type: SignerType.Mnemonic,
    mnemonic: string,
}

/**
 * Parameters to tell the controller to connect to a signer
 * that use the WalletConnect protocol.
 */
export interface ConnectToWalletConnectSigner {
    type: SignerType.WalletConnect,
    options: ClientOptions,
    qrCodeController: QrCodeController,
    restoreSession?: boolean,
}

/**
 * Types that represents all the supported signers from the controller.
 */
export type ConnectToSigner = ConnectToMnemonicSigner | ConnectToWalletConnectSigner;


/**
 * Controller to manage the various signer supported from the sdk.
 */
export class SignerController {

    private _signer: Signer | undefined;
    private _signerStatus: SignerStatus;
    private _accounts: readonly AccountData[] | undefined;
    private readonly statusObservers: ((status: SignerStatus) => void)[] = []

    /**
     * internal observer to observe the state change of the sdk connectable signer.
     */
    private connectableSignerObserver = (status: ConnectableSignerStatus) => {
        switch (status) {
            case ConnectableSignerStatus.Disconnecting:
                this.updateSignerStatus(SignerStatus.Disconnecting);
                this.disconnect();
                break;
        }
    }

    constructor() {
        this.statusObservers = [];
        this._signerStatus = SignerStatus.NotConnected;
    }

    /**
     * Utility function to update the internal signer status and notify all the
     * observers of the new status.
     * @param newStatus - The new signer status.
     * @private
     */
    private updateSignerStatus(newStatus: SignerStatus) {
        if (newStatus !== this._signerStatus) {
            this._signerStatus = newStatus;
            this.statusObservers.forEach(o => o(newStatus))
        }
    }

    /**
     * Connect to a signer.
     * @param params - Parameter to connect to the requested signer.
     */
    async connect(params: ConnectToSigner): Promise<Signer> {
        if (this._signer !== undefined) {
            if (this._signer.type === params.type) {
                return this._signer;
            }

            await this.disconnect();
        }

        this.updateSignerStatus(SignerStatus.Connecting);

        switch (params.type) {
            case SignerType.WalletConnect:
                const client = await WalletConnectClient.init(params.options);
                let session: SessionTypes.Settled | undefined = undefined;
                let sessions = client.session.values;
                if (sessions.length > 0) {
                    session = sessions[0];
                }

                if (params.restoreSession === true && session === undefined) {
                    this.updateSignerStatus(SignerStatus.NotConnected);
                    throw new Error("Can't restore the wallet connect session. No session available");
                }

                const walletConnectSigner = new WalletConnectSigner({client, session}, params.qrCodeController);
                try {
                    await walletConnectSigner.connect();
                    walletConnectSigner.addStatusListener(this.connectableSignerObserver);
                    this._signer = {
                        type: SignerType.WalletConnect,
                        signer: walletConnectSigner
                    }
                } catch (e) {
                    this.updateSignerStatus(SignerStatus.NotConnected);
                    throw e;
                }
                break;

            case SignerType.Mnemonic:
                const cosmJsSigner = await DirectSecp256k1HdWallet.fromMnemonic(params.mnemonic);
                const mnemonicSigner: Signer = {
                    type: SignerType.Mnemonic,
                    signer: cosmJsSigner,
                }
                this._signer = mnemonicSigner;
                break;

            default:
                throw new Error("Can't connect unsupported signer type");
        }

        this._accounts = await this._signer.signer.getAccounts();
        this.updateSignerStatus(SignerStatus.Connected);
        return this._signer;
    }

    /**
     * Disconnects from the current signer.
     */
    async disconnect(): Promise<void> {
        if (this._signer !== undefined) {
            this.updateSignerStatus(SignerStatus.Disconnecting);
            switch (this._signer.type) {
                case SignerType.Mnemonic:
                    // Nothing to do.
                    break

                case SignerType.WalletConnect:
                    this._signer.signer.removeStatusListener(this.connectableSignerObserver);
                    await this._signer.signer.disconnect().catch(_ => {});
                    break
            }
            this._signer = undefined
            this._accounts = undefined;
            this.updateSignerStatus(SignerStatus.NotConnected);
        }
    }

    /**
     * Gets the current signer.
     */
    get signer(): Signer | undefined {
        return this._signer
    }

    /**
     * Gets the current signer status.
     */
    get signerStatus(): SignerStatus {
        return this._signerStatus;
    }

    /**
     * Gets the accounts of the current connected signer.
     */
    get accountData(): readonly AccountData[] | undefined {
        return this._accounts;
    }

    /**
     * Adds an observer that will be notified when the signer status changes.
     * @param observer - Observer that will be notified.
     */
    addSignerStatusObserver(observer: (status: SignerStatus) => void) {
        this.statusObservers.push(observer);
    }

    /**
     * Unsubscribes from the signer status changes.
     * @param observer - The observer to unsubscribe.
     */
    removeSignerStatusObserver(observer: (status: SignerStatus) => void) {
        const index = this.statusObservers.indexOf(observer);
        if (index >= 0) {
            this.statusObservers.splice(index, 1);
        }
    }

}