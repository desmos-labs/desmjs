import { AccountData, DirectSignResponse } from "@cosmjs/proto-signing";
import { SessionTypes } from "@walletconnect/types";
import WalletConnectClient from "@walletconnect/sign-client";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { AminoSignResponse, StdSignDoc } from "@cosmjs/amino";
import { assert } from "@cosmjs/utils";
import { Signer, SignerStatus, SigningMode } from "@desmoslabs/desmjs";
import { SignClientTypes } from "@walletconnect/types/dist/types/sign-client/client";
import { getSdkError } from "@walletconnect/utils";
import DPMWalletConnectModal from "@desmoslabs/desmjs-walletconnect-qrcode-modal";
import { CosmosRPCMethods, QrCodeModalController } from "./types";
import {
  rpcCosmosGetAccounts,
  rpcCosmosSignAmino,
  rpcCosmosSignDirect,
} from "./rpcrequests";
import WalletConnectSessionCache from "./sessioncache";

export interface WalletConnectSignerOptions {
  signingMode: SigningMode;
  // The chains to which the client can connect.
  // Can be: desmos:desmos-mainnet or desmos:morpheus-apollo-4.
  chain: string;
  /**
   * Optional modal controller that will be used to
   * display a QR that once scanned will
   * initiate the WalletConnect session.
   * If not provided, will be used the one provided from
   * the `@desmjs/desmjs-walletconnect-qrcode-modal` package.
   */
  qrCodeModalController?: QrCodeModalController;
  /**
   * Optional object that will be used to cache the sessions
   * in a non-volatile storage. If not provided,
   * the global `localStorage` instance will be used.
   * NOTE: This is intended to be used in environments where the `localStorage`
   * instance is undefined, like in Node or React Native applications.
   */
  sessionsCacheStorage?: LocalStorageI;
}

/**
 * Signer that use the WalletConnect protocol to sign a transaction.
 */
export class WalletConnectSigner extends Signer {
  public signingMode: SigningMode = SigningMode.AMINO;

  private readonly client: WalletConnectClient;

  private chain: string;

  private accountData: AccountData | undefined;

  private walletConnectSession: SessionTypes.Struct | undefined;

  private readonly qrCodeModalController: QrCodeModalController;

  private readonly sessionsCache;

  private readonly sessionDeleteListener = (
    event: SignClientTypes.EventArguments["session_delete"],
  ) => {
    this.updateStatus(SignerStatus.Disconnecting);
    this.unsubscribeEvents();
    this.clearSessionDependentResources(event.topic);
    this.updateStatus(SignerStatus.NotConnected);
  };

  constructor(
    client: WalletConnectClient,
    options: WalletConnectSignerOptions,
  ) {
    super(SignerStatus.NotConnected);
    this.signingMode = options.signingMode;
    this.client = client;
    this.chain = options.chain;
    this.sessionsCache = new WalletConnectSessionCache(
      options.sessionsCacheStorage ?? localStorage,
    );
    if (options.qrCodeModalController) {
      this.qrCodeModalController = options.qrCodeModalController;
    } else {
      this.qrCodeModalController = new DPMWalletConnectModal();
    }
  }

  /**
   * Subscribes to all the WalletConnect events.
   * @private
   */
  private subscribeToEvents() {
    // Subscript to disconnect session
    this.client.on("session_delete", this.sessionDeleteListener);
  }

  /**
   * Unsubscribe all the WalletConnect events.
   * @private
   */
  private unsubscribeEvents() {
    this.client.off("session_delete", this.sessionDeleteListener);
  }

  /**
   * Release all the resources related to the current session.
   * @param sessionTopic - Topic of the WalletConnect session.
   * @private
   */
  private clearSessionDependentResources(sessionTopic: string) {
    this.walletConnectSession = undefined;
    this.accountData = undefined;
    this.sessionsCache.removeAccountData(sessionTopic);
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

    const desmosNamespace = session.namespaces.desmos;
    const desmosRequiredNamespace = session.requiredNamespaces.desmos;

    if (
      desmosNamespace === undefined ||
      desmosRequiredNamespace === undefined
    ) {
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error("can't find desmos namespace in the provided session");
    }

    if (desmosNamespace.methods.indexOf(CosmosRPCMethods.GetAccounts) === -1) {
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error(
        `can't find ${CosmosRPCMethods.GetAccounts} in the desmos namespace authorized methods`,
      );
    }

    let signingMode: SigningMode;
    if (desmosNamespace.methods.indexOf(CosmosRPCMethods.SignDirect) >= 0) {
      signingMode = SigningMode.DIRECT;
    } else if (
      desmosNamespace.methods.indexOf(CosmosRPCMethods.SignAmino) >= 0
    ) {
      signingMode = SigningMode.AMINO;
    } else {
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error(
        `can't find ${CosmosRPCMethods.SignDirect} or ${CosmosRPCMethods.SignAmino} in the desmos namespace authorized methods`,
      );
    }

    const chain = desmosRequiredNamespace.chains?.at(0);
    if (chain === undefined) {
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error("Can't find the chain in the desmos required namespaces");
    }

    // Try to get the account data from the cache.
    const cachedAccountData = this.sessionsCache.getAccountData(session.topic);

    if (cachedAccountData !== undefined && cachedAccountData.length > 0) {
      [this.accountData] = cachedAccountData;
    } else {
      // We don't have the account data in the cache. Get it from the remote wallet.
      this.accountData = await rpcCosmosGetAccounts(
        this.client,
        session,
        chain,
      ).then((accounts) => {
        if (accounts.length > 0) {
          // Cache the account data associated to the session.
          this.sessionsCache.addAccountData(session.topic, accounts);
          return accounts[0];
        }
        this.updateStatus(SignerStatus.NotConnected);
        throw new Error("Can't get accounts from the remote wallet");
      });
    }

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
        methods,
        chains: [this.chain],
        events: [],
      },
    };

    let uri: string | undefined;
    let approval: () => Promise<SessionTypes.Struct>;

    try {
      const connectResponse = await this.client.connect({
        requiredNamespaces: namespaces,
      });
      uri = connectResponse.uri;
      approval = connectResponse.approval;
    } catch (e) {
      this.qrCodeModalController.close();
      this.updateStatus(SignerStatus.NotConnected);
      throw e;
    }

    if (uri) {
      this.qrCodeModalController.open(uri, () => {
        this.updateStatus(SignerStatus.NotConnected);
      });
    } else {
      this.qrCodeModalController.close();
      this.updateStatus(SignerStatus.NotConnected);
      throw new Error("can't get connection uri");
    }

    try {
      this.walletConnectSession = await approval();
      const sessionTopic = this.walletConnectSession.topic;
      // Now it's connected, ask the client the information about the current account.
      this.accountData = await rpcCosmosGetAccounts(
        this.client,
        this.walletConnectSession,
        this.chain,
      ).then((accounts) => {
        if (accounts.length > 0) {
          this.sessionsCache.addAccountData(sessionTopic, accounts);
          return accounts[0];
        }
        throw new Error("can't get accounts from the remote wallet");
      });
    } catch (e) {
      if (this.walletConnectSession !== undefined) {
        await this.client.disconnect({
          topic: this.walletConnectSession.topic,
          reason: getSdkError("USER_DISCONNECTED"),
        });
      }
      this.walletConnectSession = undefined;
      this.qrCodeModalController.close();
      this.updateStatus(SignerStatus.NotConnected);
      throw e;
    }

    this.qrCodeModalController.close();
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
    this.unsubscribeEvents();

    const sessionTopic = this.walletConnectSession!.topic;
    try {
      await this.client.disconnect({
        topic: this.walletConnectSession!.topic,
        reason: getSdkError("USER_DISCONNECTED"),
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("WalletConnectSigner.disconnect", e);
      throw e;
    } finally {
      this.clearSessionDependentResources(sessionTopic);
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

    return (
      this.sessionsCache.getAccountData(this.walletConnectSession!.topic) ?? []
    );
  }

  /**
   * Implements OfflineDirectSigner.
   */
  async signDirect(
    signerAddress: string,
    signDoc: SignDoc,
  ): Promise<DirectSignResponse> {
    this.assertConnected();
    assert(this.accountData);

    const result = await rpcCosmosSignDirect(
      this.client,
      this.walletConnectSession!,
      this.chain,
      signerAddress,
      signDoc,
    );

    return {
      signed: signDoc,
      signature: result.signature,
    };
  }

  /**
   * Implements OfflineDirectSigner.
   */
  async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc,
  ): Promise<AminoSignResponse> {
    this.assertConnected();
    assert(this.accountData);

    const result = await rpcCosmosSignAmino(
      this.client,
      this.walletConnectSession!,
      this.chain,
      signerAddress,
      signDoc,
    );

    return {
      signed: signDoc,
      signature: result.signature,
    } as AminoSignResponse;
  }
}
