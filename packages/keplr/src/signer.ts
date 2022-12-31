import { AccountData, DirectSignResponse } from "@cosmjs/proto-signing";
import { ChainInfo, Keplr, Window as KeplrWindow } from "@keplr-wallet/types";
import {
  ChainInfo as DesmJSChainInfo,
  DesmosMainnet,
  Signer,
  SignerStatus,
  SigningMode,
} from "@desmoslabs/desmjs";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Algo, AminoSignResponse, StdSignDoc } from "@cosmjs/amino";
import { assert } from "@cosmjs/utils";
import { setupChainInfo } from "./chains";

// Add KeplrWindow types to the global Window interface
declare global {
  interface Window extends KeplrWindow {}
}

export interface KeplrSignerOptions {
  signingMode: SigningMode;
  chainInfo: DesmJSChainInfo;
}

/**
 * Signer that use Keplr to sign a transaction.
 */
export class KeplrSigner extends Signer {
  public readonly signingMode: SigningMode = SigningMode.DIRECT;

  private readonly client: Keplr;

  private accountData: AccountData | undefined;

  private chainInfo: DesmJSChainInfo = DesmosMainnet;

  private keplrChainInfo: ChainInfo | undefined;

  private readonly onKeystoreChange = () => {
    this.handleKeyStoreChange();
  };

  constructor(keplrClient: Keplr, options: KeplrSignerOptions) {
    super(SignerStatus.NotConnected);
    this.signingMode = options.signingMode;
    this.chainInfo = options.chainInfo;
    this.client = keplrClient;
  }

  /**
   * Subscribes to Keplr events.
   * @private
   */
  private subscribeToEvents() {
    // Subscribe to the Keplr Storage event
    window.addEventListener("keplr_keystorechange", this.onKeystoreChange);
  }

  /**
   * Unsubscribes from Keplr events.
   * @private
   */
  private unsubscribeFromEvents() {
    // Unsubscribe from the Keplr Storage event
    window.removeEventListener("keplr_keystorechange", this.onKeystoreChange);
  }

  /**
   * Handle the Keplr keystore change event.
   */
  private async handleKeyStoreChange() {
    // disconnect from the current wallet
    await this.disconnect();

    // connect to the new wallet
    await this.connect();
  }

  /**
   * Returns the Keplr ChainInfo instance to be used.
   * @private
   */
  private async getChainInfo(): Promise<ChainInfo> {
    if (!this.keplrChainInfo) {
      this.keplrChainInfo = await setupChainInfo(this.chainInfo);
    }
    return this.keplrChainInfo;
  }

  /**
   * Implements Signer.
   */
  async connect(): Promise<void> {
    if (this.status !== SignerStatus.NotConnected && this.accountData) {
      return;
    }
    this.updateStatus(SignerStatus.Connecting);

    // Get the chain info
    const chainInfo = await this.getChainInfo();

    // Prompt the Keplr Desmos network configuration
    await KeplrSigner.setupChainNetwork(chainInfo);
    const account = await this.client.getKey(chainInfo.chainId);
    this.accountData = {
      address: account.bech32Address,
      algo: <Algo>account.algo,
      pubkey: account.pubKey,
    };

    this.subscribeToEvents();

    // Connect Keplr client to the current chainId
    await this.client.enable(chainInfo.chainId);

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
    this.accountData = undefined;
    this.unsubscribeFromEvents();
    this.updateStatus(SignerStatus.NotConnected);
  }

  /**
   * Implements Signer.
   */
  async getCurrentAccount(): Promise<AccountData | undefined> {
    return this.accountData;
  }

  /**
   * Implements Signer.
   *
   */
  async getAccounts(): Promise<readonly AccountData[]> {
    this.assertConnected();

    // Get the chain info
    const chainInfo = await this.getChainInfo();

    const result = await this.client!.getKey(chainInfo.chainId);
    return [
      {
        address: result.bech32Address,
        algo: <Algo>result.algo,
        pubkey: result.pubKey,
      },
    ];
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
    const chainInfo = await this.getChainInfo();
    return this.client.signDirect(chainInfo.chainId, signerAddress, signDoc);
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
    const chainInfo = await this.getChainInfo();
    return this.client.signAmino(chainInfo.chainId, signerAddress, signDoc);
  }

  /**
   * Prompt a new Keplr Chain configuration.
   * @param chainInfo new chain configuration
   */
  public static async setupChainNetwork(chainInfo: ChainInfo): Promise<void> {
    assert(window.keplr);
    await window.keplr.experimentalSuggestChain(chainInfo);
  }

  /**
   * Switch to the given ChainInfo.
   * @param chainInfo chain configuration
   */
  public async switchChainNetwork(chainInfo: DesmJSChainInfo): Promise<void> {
    assert(window.keplr);
    await this.disconnect();

    // Reset the chain info
    this.chainInfo = chainInfo;
    this.keplrChainInfo = undefined;

    return this.connect();
  }

  /**
   * Get the current Desmos ChainInfo.
   */
  public getCurrentChainNetwork(): DesmJSChainInfo {
    return this.chainInfo;
  }

  /**
   * Get the current Keplr ChainInfo.
   * NOTE: This can be undefined if the client has not connected yet.
   */
  public getCurrentChainInfo(): ChainInfo | undefined {
    return this.keplrChainInfo;
  }
}
