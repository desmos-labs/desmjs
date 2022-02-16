import {AccountData, decodePubkey, DirectSignResponse} from "@cosmjs/proto-signing";
import {IInternalEvent} from "@walletconnect/types";
import WalletConnectClient from "@walletconnect/client";
import {stringifySignDocValues} from "cosmos-wallet";
import {Buffer} from "buffer";
import {AuthInfo, SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {Signer, SignerStatus, SigningMode} from "src/signers/signer";
import {AminoSignResponse, StdSignDoc} from "@cosmjs/amino";
import {fromBase64} from "@cosmjs/encoding";
import {assert} from "@cosmjs/utils";

export interface WalletConnectSignerOptions {
  signingMode: SigningMode;
}

/**
 * Signer that use the WalletConnect protocol to sign a transaction.
 */
export class WalletConnectSigner extends Signer {
  public readonly signingMode: SigningMode = SigningMode.AMINO;
  private client: WalletConnectClient | undefined;
  private chainId: number | undefined
  private accountData: AccountData | undefined;

  constructor(walletConnectClient: WalletConnectClient, options: WalletConnectSignerOptions) {
    super(SignerStatus.NotConnected);
    this.signingMode = options.signingMode;
    this.client = walletConnectClient;
  }

  /**
   * Callback called when a client terminates a wallet connect session.
   */
  private readonly onDisconnect = () => {
    this.disconnect();
  }

  private populateSessionDependedFields({accounts, chainId}: { accounts: string[], chainId: number }) {
    this.chainId = chainId;
    this.accountData = {
      address: accounts[chainId],
      algo: "secp256k1",
      pubkey: Uint8Array.from([0x02, ...(new Array(32).fill(0))]),
    }
  }

  /**
   * Subscribes to all the WalletConnect events.
   * @private
   */
  private subscribeToEvents() {
    assert(this.client);

    // Subscribe to the connect event
    this.client.on("connect", (error: any, payload: IInternalEvent) => {
      this.client?.off("connect");
      if (error) {
        console.log("connect error", error);
        this.updateStatus(SignerStatus.NotConnected);
        this.client = undefined;
        return
      }

      this.populateSessionDependedFields(payload.params[0]);
      this.updateStatus(SignerStatus.Connected);
    });

    // Subscribe to the session update event
    this.client.on("session_update", (error, payload) => {
      if (error) {
        console.error("session_update error", error);
        return
      }

      this.populateSessionDependedFields(payload.params[0]);
    });

    // Subscribe to the disconnect event
    this.client.on("disconnect", this.onDisconnect);
  }

  /**
   * Implements Signer.
   */
  async connect(): Promise<void> {
    if (this.status !== SignerStatus.NotConnected) {
      return;
    }

    assert(this.client);
    this.subscribeToEvents();

    // Check if the client is connected
    if (this.client.connected) {
      this.populateSessionDependedFields(this.client);
      this.updateStatus(SignerStatus.Connected);
      return;
    }

    // Create the WalletConnect session
    this.updateStatus(SignerStatus.Connecting);
    this.client.createSession();
  }

  /**
   * Implements Signer.
   */
  async disconnect(): Promise<void> {
    if (this.status !== SignerStatus.Connected) {
      return;
    }

    this.updateStatus(SignerStatus.Disconnecting);
    this.client?.off("session_update");
    this.client?.off("disconnect");
    this.client?.killSession();
    this.client = undefined;
    this.chainId = undefined;
    this.accountData = undefined;
    this.updateStatus(SignerStatus.NotConnected);
  }

  /**
   * Implements Signer.
   */
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

  /**
   * Implements OfflineDirectSigner.
   */
  async signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
    this.assertConnected();
    assert(this.accountData);

    const params = {
      signerAddress: this.accountData.address,
      signDoc: stringifySignDocValues(signDoc),
    };

    const result = await this.client!.sendCustomRequest({
      jsonrpc: "2.0",
      method: "cosmos_signDirect",
      params: [params],
    });

    const authInfoBytes = Uint8Array.from(Buffer.from(result.authInfoBytes, "hex"));
    const resultSignDoc = SignDoc.fromPartial({
      bodyBytes: Uint8Array.from(Buffer.from(result.bodyBytes, "hex")),
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

  /**
   * Implements OfflineDirectSigner.
   */
  async signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
    this.assertConnected();
    assert(this.accountData);

    const params = {
      signerAddress: this.accountData.address,
      signDoc: signDoc,
    };

    const result = await this.client!.sendCustomRequest({
      jsonrpc: "2.0",
      method: "cosmos_signAmino",
      params: [params],
    });

    return {
      signed: signDoc,
      signature: {
        signature: result.signature,
        pub_key: result.pub_key
      }
    } as AminoSignResponse;
  }
}