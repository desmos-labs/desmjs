import {DesmosWallet, WalletEvent, WalletStatus} from "../wallet";
import WalletConnectClient, {CLIENT_EVENTS} from "@walletconnect/client";
import {PairingTypes, SessionTypes} from "@walletconnect/types";
import QRCodeModal from "@walletconnect/qrcode-modal";
import {BroadcastTxResponse, SigningStargateClient, StdFee,} from "@cosmjs/stargate";
import {EncodeObject} from "@cosmjs/proto-signing";
import {WalletConnectSigner} from "./signer";
import {ERROR} from "@walletconnect/utils";
import {WalletConnect} from "../types";
import {TxRaw} from "cosmjs-types/cosmos/tx/v1beta1/tx";

const DEFAULT_CHAIN_RPC = "https://rpc.morpheus.desmos.network";

/**
 * Implementation of the DesmosWallet that signing the transaction with WalletConnect
 */
export class Wallet extends DesmosWallet {

    private _status: WalletStatus
    private readonly client: WalletConnectClient
    private session: SessionTypes.Settled | undefined
    private stargate: SigningStargateClient | undefined
    private _address: string | undefined
    /**
     * Callback that is called when a client terminates a wallet connect session.
     * @param session
     */
    private readonly onSessionDeleted = async (session: SessionTypes.Settled) => {
        if (session.topic !== this.session?.topic)
            return;
        this.updateStatus(WalletStatus.DISCONNECTING);
        this.session = undefined;
        await this.endConnections(false);
        this.updateStatus(WalletStatus.NOT_CONNECTED);
    }

    constructor({client, session}: WalletConnect) {
        super();
        this.client = client;
        this.session = session;
        if (session !== undefined) {
            this._status = WalletStatus.CONNECTED;
            this._address = session.state.accounts[0].split(":").pop();
            if (this._address === undefined) {
                throw new Error("Can't get address from the settled session");
            }
        }
        else {
            this._status = WalletStatus.NOT_CONNECTED;
        }
    }

    /**
     * Updates the wallet status.
     * @param newStatus -  The new wallet status.
     * @returns The old wallet status.
     * @private
     */
    private updateStatus(newStatus: WalletStatus): WalletStatus {
        const oldStatus = this._status;
        this._status = newStatus;
        this.emit(WalletEvent.ON_STATUS_CHANGE, newStatus);
        return oldStatus;
    }

    /**
     * Function that initialize the stargate client that will be used to interact with the chain
     * @param session - The WalletConnect session used to interact with the user's wallet
     * @private
     */
    private async initStargate(session: SessionTypes.Settled): Promise<void> {
        const signer = new WalletConnectSigner(this.client, session);
        this.stargate = await SigningStargateClient.connectWithSigner(DEFAULT_CHAIN_RPC, signer);
    }

    /**
     * Close the connection with the chain rpc server and the wallet connect client.
     * @param closeWalletConnect - Tell if the should also be closed the wallet connect session.
     * @private
     */
    private async endConnections(closeWalletConnect: boolean) {
        this.stargate?.disconnect();
        this.stargate = undefined;

        this.client.removeListener(CLIENT_EVENTS.session.deleted, this.onSessionDeleted);
        if (closeWalletConnect) {
            await this.client.disconnect({
                topic: this.session!.topic,
                reason: ERROR.USER_DISCONNECTED.format(),
            }).catch(console.error);
            this.session = undefined;
        }

        const pairings = [...this.client.pairing.values];
        for (let p of pairings) {
            await this.client.pairing.delete({
                topic: p.topic,
                reason: ERROR.USER_DISCONNECTED.format()
            }).catch(console.error);
        }
    }

    get address(): string {
        if (this.status !== WalletStatus.CONNECTED) {
            throw new Error("Can't get address of a non connected wallet");
        }
        return this._address!;
    };

    get status(): WalletStatus {
        return this._status;
    }

    connect(): Promise<void> {
        if (this._status !== WalletStatus.NOT_CONNECTED) {
            return Promise.resolve();
        }

        this.updateStatus(WalletStatus.CONNECTING);
        return new Promise(async (resolve, reject) => {
            let rejected = false;

            const onProposal = async (proposal: PairingTypes.Proposal) => {
                const {uri} = proposal.signal.params;
                QRCodeModal.open(uri, () => {
                    rejected = true;
                    this.client.removeListener(CLIENT_EVENTS.pairing.proposal, onProposal);
                    reject(new Error("Connection terminated from the user"));
                    this.updateStatus(WalletStatus.NOT_CONNECTED);
                });
            }

            this.client.on(CLIENT_EVENTS.pairing.proposal, onProposal);
            const session = await this.client.connect({
                metadata: this.client.metadata,
                permissions: {
                    blockchain: {
                        chains: ['desmos:morpheus-apollo-2']
                    },
                    jsonrpc: {
                        methods: ['cosmos_signDirect']
                    },
                },
            }).catch((e: any) => {
                this.client.removeListener(CLIENT_EVENTS.pairing.proposal, onProposal);
                QRCodeModal.close();
                reject(e);
                this.updateStatus(WalletStatus.NOT_CONNECTED);
                throw e;
            });

            if (!rejected) {
                this.client.removeListener(CLIENT_EVENTS.pairing.proposal, onProposal);
                QRCodeModal.close();
                this._address = session.state.accounts[0].split(":").pop();
                if (this._address === undefined) {
                    throw new Error("Can't get address from the settled session");
                }
                this.session = session;
                await this.initStargate(session);
                this.client.on(CLIENT_EVENTS.session.deleted, this.onSessionDeleted);
                resolve();
                this.updateStatus(WalletStatus.CONNECTED);
            }
        });
    }

    async disconnect(): Promise<void> {
        if (this.status !== WalletStatus.CONNECTED) {
            return Promise.resolve();
        }

        this.updateStatus(WalletStatus.DISCONNECTING);
        await this.endConnections(true);
        this.updateStatus(WalletStatus.NOT_CONNECTED);
    }

    async broadcastTx(tx: TxRaw, timeoutMs?: number, pollIntervalMs?: number): Promise<BroadcastTxResponse> {
        if (this.status !== WalletStatus.CONNECTED) {
            throw new Error("Wallet not connected!");
        }
        if (this.stargate === undefined) {
            await this.initStargate(this.session!);
        }

        const encoded = TxRaw.encode(tx).finish();
        return this.stargate!.broadcastTx(encoded, timeoutMs, pollIntervalMs);
    }

    async signDirect(messages: readonly EncodeObject[], fee: StdFee, memo?: string): Promise<TxRaw> {
        if (this.status !== WalletStatus.CONNECTED) {
            throw new Error("Wallet not connected!");
        }
        if (this.stargate === undefined) {
            await this.initStargate(this.session!);
        }

        return this.stargate!.sign(this.address, messages, fee, memo ?? "");
    }
}