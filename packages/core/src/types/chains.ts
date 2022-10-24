/**
 * The currency that is supported on the chain natively.
 */
export interface Currency {
  readonly coinDenom: string;
  readonly coinMinimalDenom: string;
  readonly coinDecimals: number;
  /**
   * This is used to fetch asset's fiat value from coingecko.
   * You can get id from https://api.coingecko.com/api/v3/coins/list.
   */
  readonly coinGeckoId?: string;
  readonly coinImageUrl?: string;
}

/**
 * Contains the data to be used when deriving addresses.
 */
export interface BIP44 {
  readonly coinType: number;
}

/**
 * Informations regarding a chain.
 */
export interface ChainInfo {
  /**
   * Human readable name of the chain.
   */
  readonly chainName: string;

  /**
   * URL used to perform RPC requests
   */
  readonly rpcUrl: string;

  /**
   * URL used to perform REST API requests.
   */
  readonly restUrl: string;

  /**
   * BIP44 configuration for the chain.
   */
  readonly bip44: BIP44;

  /**
   * This indicates the type of coin that can be used for stake.
   * You can get actual currency information from Currencies.
   */
  readonly stakeCurrency: Currency;

  /**
   * Lists of all supported currencies inside the chain.
   */
  readonly currencies: Currency[];

  /**
   * This indicates which coin or token can be used for fee to send transaction.
   * You can get actual currency information from Currencies.
   */
  readonly feeCurrencies: Currency[];
}

export const DesmosBip44 = {
  coinType: 852,
};

export const DesmosBech32Config = {
  bech32PrefixAccAddr: "desmos",
  bech32PrefixAccPub: "desmospub",
  bech32PrefixValAddr: "desmosvaloper",
  bech32PrefixValPub: "desmosvaloperpub",
  bech32PrefixConsAddr: "desmosvalcons",
  bech32PrefixConsPub: "desmosvalconspub",
};

export const DesmosGasPriceStep = {
  low: 0.01,
  average: 0.03,
  high: 0.05,
};

export const DesmosMainnet: ChainInfo = {
  chainName: "Desmos Mainnet",
  rpcUrl: "https://rpc.mainnet.desmos.network",
  restUrl: "https://api.mainnet.desmos.network",
  bip44: DesmosBip44,
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
      coinDenom: "DSM",
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
};

export const DesmosTestnet: ChainInfo = {
  chainName: "Desmos Testnet",
  rpcUrl: "https://rpc.morpheus.desmos.network",
  restUrl: "https://lcd.morpheus.desmos.network",
  bip44: DesmosBip44,
  currencies: [
    {
      coinDenom: "Daric",
      coinMinimalDenom: "udaric",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "Daric",
      coinMinimalDenom: "udaric",
      coinDecimals: 6,
    },
  ],
  stakeCurrency: {
    coinDenom: "Daric",
    coinMinimalDenom: "udaric",
    coinDecimals: 6,
  },
};

export const DesmosChains: Record<string, ChainInfo> = {
  testnet: DesmosTestnet,
  mainnet: DesmosMainnet,
};

export async function getChainId(chain: ChainInfo): Promise<string> {
  const res = await fetch(`${chain.rpcUrl}/status`);
  const data = await res.json();
  return data.result.node_info.network;
}
