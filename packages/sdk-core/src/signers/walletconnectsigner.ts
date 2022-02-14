import {AccountData, decodePubkey, DirectSignResponse, OfflineDirectSigner} from "@cosmjs/proto-signing";
import {IInternalEvent, IWalletConnectOptions} from "@walletconnect/types";
import WalletConnectClient from "@walletconnect/client";
import {stringifySignDocValues} from "cosmos-wallet";
import {Buffer} from "buffer";
import {AuthInfo, SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {ConnectableSigner, ConnectableSignerStatus} from "./connectablesigner";
import {AminoSignResponse, OfflineAminoSigner, StdSignDoc} from "@cosmjs/amino";
import {fromBase64} from "@cosmjs/encoding";

/**
 * Controller to display the uri/Qr Code to initialize a Wallet Connect session.
 */
export interface QrCodeController {
    /**
     * Shows the uri/Qr Code to the user.
     * @param uri - The session uri.
     * @param onClose - Callback that will be called if the user close the view.
     */
    open(uri: string, onClose: () => void): void;

    /**
     * Close the view.
     */
    close(): void
}

/**
 * Signer that use the WalletConnect protocol to sign a transaction.
 * NOTE: This signer is not able to provide the user public key at the moment.
 */
export class WalletConnectSigner extends ConnectableSigner implements OfflineDirectSigner, OfflineAminoSigner {

    private readonly walletConnectOptions: IWalletConnectOptions;
    private readonly qrCodeController: QrCodeController;
    private client: WalletConnectClient | undefined;
    private bech32Address: string | undefined;
    private chainId: number | undefined
    private accountData: AccountData | undefined;
    private onPopupClose: (() => void) | undefined;

    constructor(walletConnectOptions: IWalletConnectOptions, qrCodeController: QrCodeController) {
        super(ConnectableSignerStatus.NotConnected);
        this.walletConnectOptions = walletConnectOptions;
        this.qrCodeController = {
            ...qrCodeController,
            open: ((uri, onClose) => {
                const newOnClose = (() => {
                    if (this.onPopupClose !== undefined) {
                        this.onPopupClose();
                    }
                    onClose();
                })
                qrCodeController.open(uri, newOnClose);
            })
        }
    }

    /**
     * Callback called when a client terminates a wallet connect session.
     */
    private readonly onDisconnect = () => {
        this.disconnect();
    }

    private populateSessionDependedFields({accounts, chainId}: { accounts: string[], chainId: number }) {
        this.chainId = chainId;
        this.bech32Address = accounts[0];
        this.accountData = {
            address: this.bech32Address!,
            algo: "secp256k1",
            pubkey: Uint8Array.from([0x02, ...(new Array(32).fill(0))]),
        }
    }

    private subscribeToEvents() {
        this.client!.on("session_update", (error, payload) => {
            if (error) {
                console.error("session_update error", error);
            } else {
                this.populateSessionDependedFields(payload.params[0]);
            }
        });

        this.client!.on("disconnect", this.onDisconnect);
    }

    async connect(): Promise<void> {
        if (this.status !== ConnectableSignerStatus.NotConnected) {
            return;
        }

        this.updateStatus(ConnectableSignerStatus.Connecting);

        this.client = new WalletConnectClient({
            ...this.walletConnectOptions,
            qrcodeModal: this.qrCodeController
        });
        this.subscribeToEvents();

        return new Promise(async (resolve, reject) => {
            this.onPopupClose = () => {
                reject(new Error("Connection terminated from the user"));
                this.onPopupClose = undefined;
            }
            if (this.client!.connected) {
                try {
                    this.populateSessionDependedFields(this.client!);
                    this.updateStatus(ConnectableSignerStatus.Connected);
                    resolve();
                } catch (ex) {
                    reject(ex);
                }
            } else {
                await this.client!.createSession();
                const onConnect = (error: any, payload: IInternalEvent) => {
                    this.client!.off("connect");
                    if(error) {
                        this.updateStatus(ConnectableSignerStatus.NotConnected);
                        this.client = undefined;
                        reject(error)
                    } else {
                        this.populateSessionDependedFields(payload.params[0]);
                        this.updateStatus(ConnectableSignerStatus.Connected);
                        resolve();
                    }
                }
                this.client!.on("connect", onConnect);
            }
        });
    }

    async disconnect(): Promise<void> {
        if (this.status !== ConnectableSignerStatus.Connected) {
            return;
        }

        this.updateStatus(ConnectableSignerStatus.Disconnecting);
        this.client!.off("session_update");
        this.client!.off("disconnect");
        this.client!.killSession();
        this.client = undefined;
        this.bech32Address = undefined;
        this.chainId = undefined;
        this.accountData = undefined;
        this.updateStatus(ConnectableSignerStatus.NotConnected);
    }

    async getAccounts(): Promise<readonly AccountData[]> {
        this.assertConnected();

        const result = await this.client!.sendCustomRequest({
            jsonrpc: "2.0",
            method: "cosmos_getAccounts",
            params: [],
        });

        return result.map((accountData: any) => {
            return {
                address: accountData.address,
                algo: accountData.algo,
                pubkey: fromBase64(accountData.pubkey),
            }
        })
    }

    async signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
        this.assertConnected();

        const params = {
            signerAddress: this.bech32Address,
            signDoc: stringifySignDocValues(signDoc),
        };

        const result = await this.client!.sendCustomRequest({
            jsonrpc: "2.0",
            method: "cosmos_signDirect",
            params: [params],
        });

        const authInfoBytes = Uint8Array.from(Buffer.from(result.authInfoBytes, "hex"));
        const resultSignDoc = SignDoc.fromPartial({
            bodyBytes:  Uint8Array.from(Buffer.from(result.bodyBytes, "hex")),
            authInfoBytes,
            chainId: signDoc.chainId,
            accountNumber: signDoc.accountNumber,
        })

        // Extract the public key from the response
        const authInfo = AuthInfo.decode(authInfoBytes);
        const pubKey = decodePubkey(authInfo.signerInfos[0].publicKey);
        if (pubKey === null) {
            throw new Error("The client didn't provide the public key");
        }

        return {
            signed: resultSignDoc,
            signature: {
                signature: Buffer.from(result.signature, "hex").toString("base64"),
                pub_key: pubKey,
            }
        }
    }

    async signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
        console.log("signAmino", signDoc);
        const params = {
            signerAddress: this.bech32Address,
            signDoc: signDoc,
        };

        const result = await this.client!.sendCustomRequest({
            jsonrpc: "2.0",
            method: "cosmos_signAmino",
            params: [params],
        });

        console.log("signAmino result", result);

        return {
            signed: signDoc,
            signature: {
                signature: result.signature,
                pub_key: result.pub_key
            }
        } as AminoSignResponse;
    }

}