import {AccountData, EncodeObject} from "@cosmjs/proto-signing";
import {
    BroadcastTxResponse,
    SigningStargateClient,
    StdFee
} from "@cosmjs/stargate";
import EventEmitter from "events";
import {TxRaw} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {DirectSigner, SignerStatus} from "../signers";
import {SigningDesmosClient} from "./chain-client";
import {OfflineSignerAdapter} from "./cosmjs-adapter";
import {WalletNotConnected} from "./errors";

/**
 * Events that can be fired from a DesmosWallet
 */
export enum WalletEvent {
    ON_STATUS_CHANGE = "on_status_change"
}

export type EventListener = (e: WalletStatus) => void;

/**
 * Enum that represents the wallet connection status.
 */
export enum WalletStatus {
    NOT_CONNECTED = "not_connected",
    CONNECTING = "connecting",
    CONNECTED = "connected",
    DISCONNECTING = "disconnecting",
}

/**
 * Abstract class that represents a wallet capable of interact with the Desmos chain.
 */
export class DesmosWallet {

    private eventEmitter: EventEmitter;
    private _status: WalletStatus;
    private readonly signer: DirectSigner;
    private accountData: AccountData | undefined;
    private client: SigningStargateClient | undefined;

    constructor(signer: DirectSigner) {
        this.eventEmitter = new EventEmitter();
        this._status = WalletStatus.NOT_CONNECTED;
        this.signer = signer;
    }

    private readonly statusObserver = (s: SignerStatus) => {
        // Disconnect if the signer has disconnected.
        if (s === SignerStatus.NOT_CONNECTED) {
            this.disconnect();
            this.signer.removeStatusListener(this.statusObserver);
        }
    }

    /**
     * Subscribe to one of the wallet events.
     * @param event - Name of the event to observe.
     * @param listener - Callback that will be called.
     */
    on(event: WalletEvent, listener: EventListener) {
        this.eventEmitter.on(event.toString(), listener);
    }

    /**
     * Unsubscribe from an event.
     * @param event - Name of the event.
     * @param listener - The listener callback to remove.
     */
    removeListener(event: WalletEvent, listener: EventListener) {
        this.eventEmitter.removeListener(event.toString(), listener);
    }

    /**
     * Emit an event and notify all the observers.
     * @param event - The event that has occurred.
     * @param value - The value associated to that event.
     * @protected
     */
    protected emit(event: WalletEvent, value: any) {
        this.eventEmitter.emit(event.toString(), value);
    }

    /**
     * Gets the current wallet status.
     */
    get status(): WalletStatus {
        return this._status;
    }

    /**
     * Updates the wallet status and notify the observers that the status has changed.
     * @param newStatus - The new wallet status.
     * @protected
     */
    private set status(newStatus: WalletStatus) {
        this._status = newStatus;
        this.emit(WalletEvent.ON_STATUS_CHANGE, newStatus);
    }

    /**
     * Connects to the wallet.
     */
    async connect(chainRpc: string): Promise<void> {
        if (this.status === WalletStatus.NOT_CONNECTED) {
            this.status = WalletStatus.CONNECTING;
            if (this.signer.status === SignerStatus.NOT_CONNECTED) {
                try {
                    await this.signer.connect();
                } catch (e) {
                    this.status = WalletStatus.NOT_CONNECTED;
                    throw new Error("Error while connecting to the signer: " + e.toString());
                }
            }

            try {
                this.accountData = await this.signer.getAccountData();
            } catch (e) {
                this.status = WalletStatus.NOT_CONNECTED;
                throw new Error("Error while obtaining account data from signer: " + e.toString())
            }

            try {
                this.client = await SigningDesmosClient.withSigner(chainRpc, new OfflineSignerAdapter(this.signer));
            } catch (e) {
                this.status = WalletStatus.NOT_CONNECTED;
                throw new Error("Error while connecting to the chain: " + e.toString())
            }

            this.status = WalletStatus.CONNECTED;
        }
    }

    /**
     * Disconnects from the wallet.
     */
    async disconnect(): Promise<void> {
        if (this.status === WalletStatus.CONNECTED) {
            this.status = WalletStatus.DISCONNECTING;
            if (this.signer.status === SignerStatus.CONNECTED) {
                try {
                    await this.signer.disconnect();
                } catch (e) {
                }
            }
            this.client?.disconnect();
            this.client = undefined;
            this.accountData = undefined;
            this.status = WalletStatus.NOT_CONNECTED;
        }
    }

    /**
     * Sign a transaction using the cosmos' SIGN_MODE_DIRECT.
     * @param messages - The tx messages.
     * @param fee - The tx fee.
     * @param memo - An optional message that will be included into the transaction.
     */
    async signDirect(messages: readonly EncodeObject[], fee: StdFee, memo?: string): Promise<TxRaw> {
        if (this.status !== WalletStatus.CONNECTED) {
            throw new WalletNotConnected();
        }

        return this.client!.sign(this.accountData!.address, messages,  fee, memo ?? "");
    }

    /**
     * Broadcasts a signed transaction to the network and monitors its inclusion in a block.
     * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure), an error is thrown.
     * If the transaction is not included in a block before the provided timeout, this errors with a TimeoutError.
     * If the transaction is included in a block, a BroadcastTxResponse is returned.
     * The caller then usually needs to check for execution success or failure.
     * @param tx - The signed transaction to broadcast.
     * @param timeoutMs - Amount of ms to wait for the transaction to be included into a block.
     * @param pollIntervalMs - frequency with which it is checked whether the transaction has been included in the block.
     */
    broadcastTx(tx: TxRaw, timeoutMs?: number, pollIntervalMs?: number): Promise<BroadcastTxResponse> {
        if (this.status !== WalletStatus.CONNECTED) {
            throw new WalletNotConnected();
        }

        const bytes = TxRaw.encode(tx).finish();
        return this.client!.broadcastTx(bytes, timeoutMs, pollIntervalMs);
    }
}
