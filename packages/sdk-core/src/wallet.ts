import {EncodeObject} from "@cosmjs/proto-signing";
import {BroadcastTxResponse, StdFee} from "@cosmjs/stargate";
import EventEmitter from "events";
import {TxRaw} from "cosmjs-types/cosmos/tx/v1beta1/tx";

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
export abstract class DesmosWallet {

    private eventEmitter: EventEmitter;

    protected constructor() {
        this.eventEmitter = new EventEmitter();
    }

    /**
     * Function that provides the wallet bech32 address.
     * @throws Error if the wallet is not connected.
     */
    abstract get address(): string

    /**
     * Gets the current wallet status.
     */
    abstract get status(): WalletStatus

    /**
     * Connects to the wallet.
     */
    abstract connect(): Promise<void>

    /**
     * Disconnects from the wallet.
     */
    abstract disconnect(): Promise<void>

    /**
     * Sign a transaction using the cosmos' SIGN_MODE_DIRECT.
     * @param messages - The tx messages.
     * @param fee - The tx fee.
     * @param memo - An optional message that will be included into the transaction.
     */
    abstract signDirect(messages: readonly EncodeObject[], fee: StdFee, memo?: string): Promise<TxRaw>

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
    abstract broadcastTx(tx: TxRaw, timeoutMs?: number, pollIntervalMs?: number): Promise<BroadcastTxResponse>

    /**
     * Sign the provided messages and broadcasts the transaction to the chain.
     * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure), an error is thrown.
     * If the transaction is not included in a block before the provided timeout, this errors with a TimeoutError.
     * If the transaction is included in a block, a BroadcastTxResponse is returned.
     * The caller then usually needs to check for execution success or failure.
     * @param messages - The tx messages.
     * @param fee - The tx fee.
     * @param memo - An optional message that will be included into the transaction.
     */
    async signAndBroadcast(messages: readonly EncodeObject[], fee: StdFee, memo?: string): Promise<BroadcastTxResponse> {
        const signedTx = await this.signDirect(messages, fee, memo);
        return this.broadcastTx(signedTx);
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
}