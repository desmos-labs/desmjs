import {AccountData, decodePubkey, DirectSignResponse, OfflineDirectSigner} from "@cosmjs/proto-signing";
import {SessionTypes} from "@walletconnect/types";
import WalletConnectClient from "@walletconnect/client";
import {stringifySignDocValues} from "cosmos-wallet";
import {Buffer} from "buffer";
import {AuthInfo, SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";

/**
 * Class that implements the cosmjs direct signer over WalletConnect.
 */
export class WalletConnectSigner implements OfflineDirectSigner {

    private readonly client: WalletConnectClient
    private readonly session: SessionTypes.Created
    private readonly bech32Address: string
    private readonly chainAndNamespace: string
    private readonly accountData: AccountData

    constructor(client: WalletConnectClient, session: SessionTypes.Created) {
        const [namespace, chainId, address] = session.state.accounts[0].split(":");
        this.client = client;
        this.session = session;
        this.bech32Address = address;
        this.chainAndNamespace = `${namespace}:${chainId}`;

        this.accountData = {
            address: this.bech32Address,
            algo: "secp256k1",
            pubkey: Uint8Array.from([0x02, ...(new Array(32).fill(0))]),
        }
    }

    async getAccounts(): Promise<readonly AccountData[]> {
        return Promise.resolve([this.accountData]);
    }

    async signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
        if (signerAddress !== this.bech32Address) {
            throw new Error(`Invalid signerAddress: ${signerAddress}`);
        }

        const params = {
            signerAddress: this.bech32Address,
            signDoc: stringifySignDocValues(signDoc),
        };

        const result = await this.client.request({
            topic: this.session.topic,
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