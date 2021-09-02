import {SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {AccountData, DirectSignResponse} from "@cosmjs/proto-signing";

export enum SignerStatus {
    NOT_CONNECTED = "not_connected",
    CONNECTING = "connecting",
    CONNECTED = "connected",
    DISCONNECTING = "disconnecting",
}

export type SignerStatusObserver = (status: SignerStatus) => void;

/**
 * Class that represents a signer capable that sign the transaction using the Cosmos SIGN_MODE_DIRECT.
 */
export abstract class DirectSigner {

    private _status: SignerStatus
    private observers: SignerStatusObserver[] = [];

    /**
     *
     * @param status - Initial signer status.
     * @protected
     */
    protected constructor(status: SignerStatus) {
        this._status = status;
    }

    /**
     * Updates the signer status and notify the observers.
     * @param newStatus - The new signer status.
     * @protected
     */
    protected updateStatus(newStatus: SignerStatus) {
        this._status = newStatus;
        this.observers.forEach(o => o(newStatus));
    }

    /**
     * Gets the current signer status.
     */
    get status(): SignerStatus {
        return this._status;
    }

    /**
     * Adds an observer that will be called each time the signer change state.
     * @param observer - The observer that will be called.
     */
    addStatusListener(observer: SignerStatusObserver) {
        this.observers.push(observer);
    }

    /**
     * Remove an observer so that will not be called when the status change.
     * @param observer - The observer to remove.
     */
    removeStatusListener(observer: SignerStatusObserver) {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers = this.observers.splice(index, 1);
        }
    }

    /**
     * Connects to the signer.
     * If the signer is already connect no actions will be performed.
     */
    abstract connect(): Promise<void>;

    /**
     * Disconnects from the signer.
     * If the signer is already disconnect no actions will be performed.
     */
    abstract disconnect(): Promise<void>;

    /**
     * Sign the provided document.
     * If the signer is not connect will be raised `SignerNotConnected` exception.
     * @param signDoc - The document to sign.
     */
    abstract signDirect(signDoc: SignDoc): Promise<DirectSignResponse>;

    /**
     * Gets the informations regarding the us
     */
    abstract getAccountData(): Promise<AccountData>;
}

export class SignerNotConnected extends Error {

    constructor() {
        super("Signer not connected");
    }

}