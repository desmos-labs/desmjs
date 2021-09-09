import {AccountData} from "@cosmjs/proto-signing";

export enum ConnectableSignerStatus {
    NotConnected,
    Connecting,
    Connected,
    Disconnecting,
}

export type ConnectableSignerObserver = (newStatus: ConnectableSignerStatus) => void;

/**
 * Class that represents a remote signer.
 */
export abstract class ConnectableSigner {

    private _status: ConnectableSignerStatus
    private observers: ConnectableSignerObserver[] = [];

    /**
     *
     * @param status - Initial signer status.
     * @protected
     */
    protected constructor(status: ConnectableSignerStatus) {
        this._status = status;
    }

    /**
     * Updates the signer status and notify the observers.
     * @param newStatus - The new signer status.
     * @protected
     */
    protected updateStatus(newStatus: ConnectableSignerStatus) {
        this._status = newStatus;
        this.observers.forEach(o => o(newStatus));
    }

    /**
     * Checks if the signer is connected and if not throws SignerNotConnected.
     * @protected
     */
    protected assertConnected() {
        if (this._status !== ConnectableSignerStatus.Connected) {
            throw new SignerNotConnected();
        }
    }

    /**
     * Gets the current signer status.
     */
    get status(): ConnectableSignerStatus {
        return this._status;
    }

    /**
     * Adds an observer that will be called each time the signer change state.
     * @param observer - The observer that will be called.
     */
    addStatusListener(observer: ConnectableSignerObserver) {
        this.observers.push(observer);
    }

    /**
     * Remove an observer so that will not be called when the status change.
     * @param observer - The observer to remove.
     */
    removeStatusListener(observer: ConnectableSignerObserver) {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
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
     * Gets all the account managed from the signer.
     */
    abstract getAccounts(): Promise<readonly AccountData[]>;

}

export class SignerNotConnected extends Error {

    constructor() {
        super("Signer not connected");
    }

}

/**
 * Checks if the provided object is an instance of ConnectableSigner.
 * @param signer - The object to check.
 * @returns Returns true if the provided object is an instance of ConnectableSigner, false otherwise.
 */
export function isConnectableSigner(signer: any | undefined): signer is ConnectableSigner {
    if (signer === undefined) {
        return false;
    }

    const castedSigner = signer as ConnectableSigner;
    return castedSigner.status !== undefined && castedSigner.connect !== undefined &&
        castedSigner.disconnect !== undefined && castedSigner.getAccounts !== undefined &&
        castedSigner.addStatusListener !== undefined && castedSigner.removeStatusListener !== undefined;
}