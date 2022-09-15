import { AccountData, DirectSignResponse } from "@cosmjs/proto-signing";
import {
  ChainInfo,
  Keplr,
  Window as KeplrWindow,
  KeplrSignOptions,
} from "@keplr-wallet/types";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { AminoSignResponse, StdSignDoc, Algo } from "@cosmjs/amino";
import { assert } from "@cosmjs/utils";
import { Signer, SignerStatus, SigningMode } from "@desmoslabs/desmjs";
import { DesmosMainnet } from "./chains";

// Add KeplrWindow types to the global Window interface
declare global {
  interface Window extends KeplrWindow { }
}

export interface KeplrSignerOptions {
  signingMode: SigningMode;
  chainInfo: ChainInfo;
  signOptions: KeplrSignOptions;
}

/**
 * Signer that use Keplr to sign a transaction.
 */
export class KeplrSigner extends Signer {
  public readonly signingMode: SigningMode = SigningMode.DIRECT;

  private readonly client: Keplr;

  private accountData: AccountData | undefined;

  private chainInfo: ChainInfo = DesmosMainnet;

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
    window.addEventListener("keplr_keystorechange", () =>
      this.handleKeyStoreChange()
    );
  }

  /**
   * Unsubscribes from Keplr events.
   * @private
   */
  private unsubscribeFromEvents() {
    // Unsubscribe from the Keplr Storage event
    window.removeEventListener("keplr_keystorechange", () =>
      this.handleKeyStoreChange()
    );
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
   * Implements Signer.
   */
  async connect(): Promise<void> {
    if (this.status !== SignerStatus.NotConnected && this.accountData) {
      return;
    }
    this.updateStatus(SignerStatus.Connecting);
    // prompt the Keplr Desmos network configuration
    await KeplrSigner.setupChainNetwork(this.chainInfo);
    const account = await this.client.getKey(this.chainInfo.chainId);
    this.accountData = {
      address: account.bech32Address,
      algo: <Algo>account.algo,
      pubkey: account.pubKey,
    };

    this.subscribeToEvents();

    // Connect Keplr client to the current chainId
    await this.client.enable(this.chainInfo.chainId);

    this.updateStatus(SignerStatus.Connected);
  }

  /**
   * Implements Signer.
   */
  async disconnect(): Promise<void> {
    if (this.status !== SignerStatus.Connected) {
      return Promise.resolve();
    }

    this.updateStatus(SignerStatus.Disconnecting);
    this.accountData = undefined;
    this.unsubscribeFromEvents();
    this.updateStatus(SignerStatus.NotConnected);
    return Promise.resolve();
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
    const result = await this.client!.getKey(this.chainInfo.chainId);
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
    const signResponse = await this.client.signDirect(
      this.chainInfo.chainId,
      signerAddress,
      signDoc
    );
    return signResponse;
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
    const signResponse = await this.client.signAmino(
      this.chainInfo.chainId,
      signerAddress,
      signDoc
    );
    return signResponse;
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
  public async switchChainNetwork(chainInfo: ChainInfo): Promise<void> {
    assert(window.keplr);
    await this.disconnect();
    this.chainInfo = chainInfo;
    this.connect();
  }

  /**
   * Get the current ChainInfo.
   */
  public getCurrentChainInfo(): ChainInfo {
    return this.chainInfo;
  }
}
