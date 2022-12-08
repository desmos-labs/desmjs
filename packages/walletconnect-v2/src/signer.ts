import {AccountData, DirectSignResponse,} from "@cosmjs/proto-signing";
import {SessionTypes} from "@walletconnect/types";
import WalletConnectClient from "@walletconnect/sign-client";
import {SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {AminoSignResponse, StdSignDoc} from "@cosmjs/amino";
import {assert} from "@cosmjs/utils";
import {Signer, SignerStatus, SigningMode} from "@desmoslabs/desmjs";
import QRCodeModal from "@walletconnect/qrcode-modal";
import {SignClientTypes} from "@walletconnect/types/dist/types/sign-client/client";
import {getSdkError} from "@walletconnect/utils";
import {CosmosRPCMethods,} from "./types";
import {rpcCosmosGetAccounts, rpcCosmosSignAmino, rpcCosmosSignDirect} from "./rpcrequests";

export interface QrCodeModalController {
  open(uri: string, onCloseCb: () => void): void,

  close(): void,
}

export interface WalletConnectSignerOptions {
  signingMode: SigningMode;
  // The chains to which the client can connect.
  // Can be: desmos:desmos-mainnet or desmos:morpheus-apollo-4.
  chain: string,
  qrCodeModalController?: QrCodeModalController
}

/**
 * Signer that use the WalletConnect protocol to sign a transaction.
 */
export class WalletConnectSigner extends Signer {
  public signingMode: SigningMode = SigningMode.AMINO;

  private readonly client: WalletConnectClient;

  private chain: string;

  private accountData: AccountData | undefined;

  private walletConnectSession: SessionTypes.Struct | undefined

  private readonly qrCodeModalController: QrCodeModalController

  private readonly sessionUpdateListener = (params: SignClientTypes.EventArguments["session_update"]) => {
    console.log("WalletConnectSigner.sessionUpdateListener", params);
  }

  private readonly sessionDeleteListener = (params: SignClientTypes.EventArguments["session_delete"]) => {
    console.log("WalletConnectSigner.sessionDeleteListener", params);
    this.updateStatus(SignerStatus.Disconnecting);
    this.clearSessionDependentResources();
    this.updateStatus(SignerStatus.NotConnected);
  }

  constructor(
    client: WalletConnectClient,
    options: WalletConnectSignerOptions
  ) {
    super(SignerStatus.NotConnected);
    this.signingMode = options.signingMode;
    this.client = client;
    this.chain = options.chain;
    this.qrCodeModalController = options.qrCodeModalController ?? QRCodeModal;
  }

  /**
   * Subscribes to all the WalletConnect events.
   * @private
   */
  private subscribeToEvents() {
    // Subscribe to the session update event
    this.client.on("session_update", this.sessionUpdateListener);
    // Subscript to disconnect session
    this.client.on("session_delete", this.sessionDeleteListener);
  }

  /**
   * Unsubscribe all the WalletConnect events.
   * @private
   */
  private unsubscribeEvents() {
    this.client.off("session_update", this.sessionDeleteListener);
    this.client.off("session_delete", this.sessionDeleteListener);
  }

  /**
   * Release all the resources related to the current session.
   * @private
   */
  private clearSessionDependentResources() {
    this.walletConnectSession = undefined;
    this.accountData = undefined;
  }

  /**
   * Connect the signer to a previously established session.
   * This can be called only if the signer is not connected.
   * @param session - The previously established session.
   */
  async connectToSession(session: SessionTypes.Struct): Promise<void> {
    if (this.status !== SignerStatus.NotConnected) {
      return;
    }

    this.updateStatus(SignerStatus.Connecting);

    const desmosNamespace = session.namespaces['desmos'];
    const desmosRequiredNamespace = session.requiredNamespaces['desmos'];

    if (desmosNamespace === undefined || desmosRequiredNamespace === undefined) {
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error("can't find desmos namespace in the provided session");
    }

    if (desmosNamespace.methods.indexOf(CosmosRPCMethods.GetAccounts) === -1) {
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error(`can't find ${CosmosRPCMethods.GetAccounts} in the desmos namespace authorized methods`);
    }

    let signingMode: SigningMode;
    if (desmosNamespace.methods.indexOf(CosmosRPCMethods.SignDirect) >= 0) {
      signingMode = SigningMode.DIRECT
    } else if (desmosNamespace.methods.indexOf(CosmosRPCMethods.SignAmino) >= 0) {
      signingMode = SigningMode.AMINO;
    } else {
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error(`can't find ${CosmosRPCMethods.SignDirect} or ${CosmosRPCMethods.SignAmino} in the desmos namespace authorized methods`);
    }

    const chain = desmosRequiredNamespace.chains[0];
    if (chain === undefined) {
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error("Can't find the chain in the desmos required namespaces");
    }

    // Fetch the current account
    this.accountData = await rpcCosmosGetAccounts(this.client, session, chain)
      .then(accounts => {
        if (accounts.length > 0) {
          return accounts[0];
        } else {
          this.updateStatus(SignerStatus.NotConnected);
          throw new Error("Can't get accounts from the remote wallet");
        }
      })

    this.walletConnectSession = session;
    this.subscribeToEvents();

    this.signingMode = signingMode;
    this.chain = chain;
    this.updateStatus(SignerStatus.Connected);
  }

  /**
   * Implements Signer.
   */
  async connect(): Promise<void> {
    if (this.status !== SignerStatus.NotConnected) {
      return;
    }

    this.updateStatus(SignerStatus.Connecting);

    const methods = [CosmosRPCMethods.GetAccounts];
    if (this.signingMode === SigningMode.AMINO) {
      methods.push(CosmosRPCMethods.SignAmino);
    } else if (this.signingMode === SigningMode.DIRECT) {
      methods.push(CosmosRPCMethods.SignDirect);
    } else {
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error(`Unknown sign mode ${this.signingMode}`);
    }

    const namespaces = {
      desmos: {
        methods: methods,
        chains: [this.chain],
        events: []
      }
    }

    let uri: string | undefined;
    let approval: () => Promise<SessionTypes.Struct>

    try {
      const connectResponse = await this.client.connect({requiredNamespaces: namespaces});
      uri = connectResponse.uri;
      approval = connectResponse.approval;
    } catch (e) {
      this.qrCodeModalController.close();
      this.updateStatus(SignerStatus.NotConnected);
      throw e;
    }

    if (uri) {
      this.qrCodeModalController.open(uri, () => {});
    } else {
      this.qrCodeModalController.close();
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error("can't get connection uri");
    }

    try {
      this.walletConnectSession = await approval();
      // Now it's connected, ask the client the information about the current account.
      this.accountData = await rpcCosmosGetAccounts(this.client, this.walletConnectSession, this.chain)
        .then(accounts => {
          if (accounts.length > 0) {
            return accounts[0]
          } else {
            throw new Error("can't get accounts from the remote wallet");
          }
        })
    } catch (e) {
      if (this.walletConnectSession !== undefined) {
        await this.client.disconnect({
          topic: this.walletConnectSession.topic,
          reason: getSdkError("USER_DISCONNECTED")
        })
      }
      this.walletConnectSession = undefined;
      this.qrCodeModalController.close();
      this.updateStatus(SignerStatus.NotConnected);
      throw e
    }

    this.subscribeToEvents();
    this.updateStatus(SignerStatus.Connected);
  }

  /**
   * Implements Signer.
   */
  async disconnect(): Promise<void> {
    if (this.status !== SignerStatus.Connected) {
      return;
    }

    this.updateStatus(SignerStatus.Disconnecting);
    try {
      this.unsubscribeEvents();

      await this.client.disconnect({
        topic: this.walletConnectSession!.topic,
        reason: getSdkError("USER_DISCONNECTED")
      });
    } catch (e) {
      console.error("WalletConnectSigner.disconnect", e);
      throw e;
    } finally {
      this.clearSessionDependentResources();
      this.updateStatus(SignerStatus.NotConnected);
    }
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

    return rpcCosmosGetAccounts(this.client, this.walletConnectSession!, this.chain);
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

    const result = await rpcCosmosSignDirect(this.client, this.walletConnectSession!, this.chain, signerAddress, signDoc);

    return {
      signed: signDoc,
      signature: result.signature
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

    const result = await rpcCosmosSignAmino(this.client, this.walletConnectSession!, this.chain, signerAddress, signDoc);

    return {
      signed: signDoc,
      signature: result.signature,
    } as AminoSignResponse;
  }
}
