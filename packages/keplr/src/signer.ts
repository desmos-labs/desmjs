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

declare global {
  interface Window extends KeplrWindow {}
}

export interface KeplrSignerOptions {
  signingMode: SigningMode;
  chainInfo: ChainInfo;
  signOptions: KeplrSignOptions;
}

export const DesmosMainnet: ChainInfo = {
  chainId: "desmos-mainnet",
  chainName: "Desmos",
  rpc: "https://rpc.mainnet.desmos.network",
  rest: "https://api.mainnet.desmos.network",
  bip44: {
    coinType: 852,
  },
  bech32Config: {
    bech32PrefixAccAddr: "desmos",
    bech32PrefixAccPub: "desmospub",
    bech32PrefixValAddr: "desmosvaloper",
    bech32PrefixValPub: "desmosvaloperpub",
    bech32PrefixConsAddr: "desmosvalcons",
    bech32PrefixConsPub: "desmosvalconspub",
  },
  currencies: [
    {
      coinDenom: "DSM",
      coinMinimalDenom: "udsm",
      coinDecimals: 6,
      coinGeckoId: "desmos",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "udsm",
      coinMinimalDenom: "udsm",
      coinDecimals: 6,
      coinGeckoId: "desmos",
    },
  ],
  stakeCurrency: {
    coinDenom: "DSM",
    coinMinimalDenom: "udsm",
    coinDecimals: 6,
    coinGeckoId: "desmos",
  },
  gasPriceStep: {
    low: 0.01,
    average: 0.03,
    high: 0.05,
  },
  features: ["no-legacy-stdTx"],
};

export const DesmosTestnet: ChainInfo = {
  chainId: "morpheus-apollo-2",
  chainName: "Desmos Testnet",
  rpc: "https://rpc.morpheus.desmos.network",
  rest: "https://lcd.morpheus.desmos.network",
  bip44: {
    coinType: 852,
  },
  bech32Config: {
    bech32PrefixAccAddr: "desmos",
    bech32PrefixAccPub: "desmospub",
    bech32PrefixValAddr: "desmosvaloper",
    bech32PrefixValPub: "desmosvaloperpub",
    bech32PrefixConsAddr: "desmosvalcons",
    bech32PrefixConsPub: "desmosvalconspub",
  },
  currencies: [
    {
      coinDenom: "DARIC",
      coinMinimalDenom: "udaric",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "udaric",
      coinMinimalDenom: "udaric",
      coinDecimals: 6,
    },
  ],
  stakeCurrency: {
    coinDenom: "DARIC",
    coinMinimalDenom: "udaric",
    coinDecimals: 6,
  },
  gasPriceStep: {
    low: 0.01,
    average: 0.03,
    high: 0.05,
  },
};

/**
 * Signer that use Keplr to sign a transaction.
 */
export class KeplrSigner extends Signer {
  public readonly chainInfo: ChainInfo = DesmosMainnet;

  public readonly signingMode: SigningMode = SigningMode.DIRECT;

  private readonly client: Keplr;

  private accountData: AccountData | undefined;

  constructor(keplrClient: Keplr, options: KeplrSignerOptions) {
    super(SignerStatus.NotConnected);
    this.signingMode = options.signingMode;
    this.chainInfo = options.chainInfo;
    this.client = keplrClient;
  }

  /**
   * Subscribes to all the Keplr events.
   * @private
   */
  private subscribeToEvents() {
    // Subscribe to the Keplr Storage event
    window.addEventListener("keplr_keystorechange", async () => {
      // disconnect from the current wallet
      await this.disconnect();

      // connect to the new wallet
      await this.connect();
    });
  }

  /**
   * Implements Signer.
   */
  async connect(): Promise<void> {
    if (this.status !== SignerStatus.NotConnected) {
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
  disconnect(): Promise<void> {
    if (this.status !== SignerStatus.Connected) {
      return Promise.resolve();
    }

    this.updateStatus(SignerStatus.Disconnecting);
    this.accountData = undefined;
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

  public static async setupChainNetwork(chainInfo: ChainInfo): Promise<void> {
    assert(window.keplr);
    await window.keplr.experimentalSuggestChain(chainInfo);
  }
}
