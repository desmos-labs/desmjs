import {AccountData, decodePubkey, DirectSignResponse} from "@cosmjs/proto-signing";
import {PairingTypes, SessionTypes} from "@walletconnect/types";
import WalletConnectClient, {CLIENT_EVENTS} from "@walletconnect/client";
import {stringifySignDocValues} from "cosmos-wallet";
import {Buffer} from "buffer";
import {AuthInfo, SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import QRCodeModal from "@walletconnect/qrcode-modal";
import {ERROR} from "@walletconnect/utils";
import {DirectSigner, SignerStatus, SignerNotConnected} from "./DirectSigner";
import {WalletConnect} from "../types";


export class WalletConnectSigner extends DirectSigner {

    private readonly client: WalletConnectClient
    private session: SessionTypes.Created | undefined
    private bech32Address: string | undefined
    private chainAndNamespace: string | undefined
    private accountData: AccountData | undefined;

    constructor({client, session}: WalletConnect) {
        super(session === undefined ? SignerStatus.NOT_CONNECTED : SignerStatus.CONNECTED);
        this.client = client;

        this.session = session;
        if (session !== undefined) {
            this.populateSessionDependedFields(session);
        }
    }

    /**
     * Callback called when a client terminates a wallet connect session.
     * @param session
     */
    private readonly onSessionDeleted = async (session: SessionTypes.Settled) => {
        if (session.topic !== this.session?.topic)
            return;

        this.session = undefined;
        this.disconnect();
    }

    private populateSessionDependedFields(session: SessionTypes.Settled) {
        const [namespace, chainId, address] = session.state.accounts[0].split(":");

        if (address === undefined) {
            throw new Error("Can't get address from the settled session");
        }

        this.bech32Address = address;
        this.chainAndNamespace = `${namespace}:${chainId}`;
        this.accountData = {
            address: address,
            algo: "secp256k1",
            pubkey: Uint8Array.from([0x02, ...(new Array(32).fill(0))]),
        }

    }

    override async connect(): Promise<void> {
        if (this.status !== SignerStatus.NOT_CONNECTED) {
            return;
        }

        this.updateStatus(SignerStatus.CONNECTING);
        return new Promise(async (resolve, reject) => {
            let rejected = false;

            const onProposal = async (proposal: PairingTypes.Proposal) => {
                const {uri} = proposal.signal.params;
                QRCodeModal.open(uri, () => {
                    rejected = true;
                    this.client.removeListener(CLIENT_EVENTS.pairing.proposal, onProposal);
                    this.updateStatus(SignerStatus.NOT_CONNECTED);
                    reject(new Error("Connection terminated from the user"));
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
                this.updateStatus(SignerStatus.NOT_CONNECTED);
                throw e;
            });

            if (!rejected) {
                this.client.removeListener(CLIENT_EVENTS.pairing.proposal, onProposal);
                QRCodeModal.close();
                this.session = session;
                this.populateSessionDependedFields(session);
                this.client.on(CLIENT_EVENTS.session.deleted, this.onSessionDeleted);
                this.updateStatus(SignerStatus.CONNECTED);
                resolve();
            }
        });
    }

    override async disconnect(): Promise<void> {
        if (this.status !== SignerStatus.CONNECTED) {
            return;
        }

        this.updateStatus(SignerStatus.DISCONNECTING);
        this.client.removeListener(CLIENT_EVENTS.session.deleted, this.onSessionDeleted);

        if (this.session !== undefined) {
            await this.client.disconnect({
                topic: this.session.topic,
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

        this.bech32Address = undefined;
        this.chainAndNamespace = undefined;
        this.accountData = undefined;
        this.updateStatus(SignerStatus.NOT_CONNECTED);
    }

    async getAccountData(): Promise<AccountData> {
        if (this.status !== SignerStatus.CONNECTED) {
            throw new SignerNotConnected()
        }

        return this.accountData!;
    }

    async signDirect(signDoc: SignDoc): Promise<DirectSignResponse> {
        if (this.status !== SignerStatus.CONNECTED) {
            throw new SignerNotConnected()
        }

        const params = {
            signerAddress: this.bech32Address,
            signDoc: stringifySignDocValues(signDoc),
        };

        const result = await this.client.request({
            topic: this.session!.topic,
            chainId: this.chainAndNamespace,
            request: {
                method: "cosmos_signDirect",
                params,
            },
        });

        const authInfoBytes = Uint8Array.from(Buffer.from(result.signed.authInfoBytes, "hex"));
        const resultSignDoc = SignDoc.fromPartial({
            bodyBytes:  Uint8Array.from(Buffer.from(result.signed.bodyBytes, "hex")),
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
                signature: Buffer.from(result.signature.signature, "hex").toString("base64"),
                pub_key: pubKey,
            }
        }
    }

}