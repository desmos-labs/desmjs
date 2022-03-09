import {
  AccountData,
  decodePubkey,
  DirectSignResponse,
} from "@cosmjs/proto-signing";
import { IInternalEvent } from "@walletconnect/types";
import WalletConnectClient from "@walletconnect/client";
import { stringifySignDocValues } from "cosmos-wallet";
import { Buffer } from "buffer";
import { AuthInfo, SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { AminoSignResponse, StdSignDoc } from "@cosmjs/amino";
import { fromBase64 } from "@cosmjs/encoding";
import { assert } from "@cosmjs/utils";
import { Signer, SignerStatus, SigningMode } from "@desmoslabs/desmjs";

export interface WalletConnectSignerOptions {
  signingMode: SigningMode;
}

/**
 * Signer that use the WalletConnect protocol to sign a transaction.
 */
export class WalletConnectSigner extends Signer {
  public readonly signingMode: SigningMode = SigningMode.AMINO;

  private readonly client: WalletConnectClient;

  private accountData: AccountData | undefined;

  constructor(
    walletConnectClient: WalletConnectClient,
    options: WalletConnectSignerOptions
  ) {
    super(SignerStatus.NotConnected);
    this.signingMode = options.signingMode;
    this.client = walletConnectClient;

    // If the client is already connected, populate the data
    if (this.client.connected) {
      this.populateSessionDependedFields(this.client);
      this.updateStatus(SignerStatus.Connected);
    }
  }

  /**
   * Callback called when a client terminates a wallet connect session.
   */
  private async onDisconnect() {
    await this.disconnect();
  }

  private populateSessionDependedFields({ accounts }: { accounts: string[] }) {
    this.accountData = {
      address: accounts[0],
      algo: "secp256k1",
      pubkey: Uint8Array.from([0x02, ...new Array(32).fill(0)]),
    };
  }

  /**
   * Subscribes to all the WalletConnect events.
   * @private
   */
  private subscribeToEvents() {
    // Subscribe to the connect event
    this.client.on("connect", (error: any, payload: IInternalEvent) => {
      if (error) {
        console.log("connect error", error);
        this.updateStatus(SignerStatus.NotConnected);
        return;
      }

      this.populateSessionDependedFields(payload.params[0]);
      this.updateStatus(SignerStatus.Connected);
    });

    // Subscribe to the session update event
    this.client.on("session_update", (error, payload) => {
      if (error) {
        console.error("session_update error", error);
        return;
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

    this.subscribeToEvents();

    // Check if the client is connected
    if (this.client.connected) {
      this.populateSessionDependedFields(this.client);
      this.updateStatus(SignerStatus.Connected);
      return;
    }

    // Create the WalletConnect session
    this.updateStatus(SignerStatus.Connecting);
    await this.client.createSession();
  }

  /**
   * Implements Signer.
   */
  async disconnect(): Promise<void> {
    if (this.status !== SignerStatus.Connected) {
      return;
    }

    this.updateStatus(SignerStatus.Disconnecting);
    this.client.off("session_update");
    this.client.off("disconnect");
    await this.client.killSession();
    this.accountData = undefined;
    this.updateStatus(SignerStatus.NotConnected);
  }

  /**
   * Implements Signer.
   *
   * NOTE: The returned AccountData will contain an empty public key and a default algorithm set to "secp256k1".
   * This is because WalletConnect does not return the public key nor the algorithm used after the connection.
   */
  async getCurrentAccount(): Promise<AccountData | undefined> {
    return this.accountData;
  }

  /**
   * Implements Signer.
   *
   * NOTE: This method might never return anything if the wallet is currently closed, due to the fact that all
   * WalletConnect requests are asynchronous and complete only when the associated wallet is opened.
   * If you want to get the currently used account, use `getCurrentAccount` instead.
   */
  async getAccounts(): Promise<readonly AccountData[]> {
    this.assertConnected();

    const result = await this.client.sendCustomRequest({
      jsonrpc: "2.0",
      method: "cosmos_getAccounts",
      params: [],
    });

    return result.map((accountData: any) => {
      return {
        address: accountData.address,
        algo: accountData.algo,
        pubkey: fromBase64(accountData.pubkey),
      };
    });
  }

  /**
   * Implements OfflineDirectSigner.
   */
  async signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> {
    this.assertConnected();
    assert(this.accountData);

    const params = {
      signerAddress,
      signDoc: stringifySignDocValues(signDoc),
    };

    const result = await this.client!.sendCustomRequest({
      jsonrpc: "2.0",
      method: "cosmos_signDirect",
      params: [params],
    });

    const authInfoBytes = Uint8Array.from(
      Buffer.from(result.authInfoBytes, "hex")
    );
    const resultSignDoc = SignDoc.fromPartial({
      bodyBytes: Uint8Array.from(Buffer.from(result.bodyBytes, "hex")),
      authInfoBytes,
      chainId: signDoc.chainId,
      accountNumber: signDoc.accountNumber,
    });

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
      },
    };
  }

  /**
   * Implements OfflineDirectSigner.
   */
  async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    this.assertConnected();
    assert(this.accountData);

    const params = {
      signerAddress,
      signDoc,
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
        pub_key: result.pub_key,
      },
    } as AminoSignResponse;
  }
}
