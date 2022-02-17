export interface DenomUnit {
  /**
   * The coin denomination.
   */
  denom: string;
  /**
   * Exponent to the base chain coin denom.
   * For example the exponent for DMS is 6 since 1 DSM = 1 * 10 ^ 6 udsm.
   */
  exponent: number;
}

/**
 * Informations regarding a chain.
 */
export interface ChainInfo {
  /**
   * Url used to perform the rpc requests
   */
  rpcUrl: string;
  /**
   * The chain id
   */
  chainId: string;
  /**
   * Denom of the chain's coin.
   */
  coinDenom: string;
  /**
   * List of denoms that can be displayed to the user.
   */
  denomUnits: DenomUnit[];
}

export const TestnetDenomUnits: DenomUnit[] = [
  { denom: "udaric", exponent: 0 },
  { denom: "daric", exponent: 6 },
];

export const DesmosTestnet: ChainInfo = {
  chainId: "morpheus-apollo-2",
  rpcUrl: "https://rpc.morpheus.desmos.network",
  coinDenom: "udaric",
  denomUnits: TestnetDenomUnits,
};

export const MainnetDenomUnits: DenomUnit[] = [
  { denom: "udsm", exponent: 0 },
  { denom: "dsm", exponent: 6 },
];

export const DesmosMainnet: ChainInfo = {
  chainId: "desmos-mainnet",
  rpcUrl: "https://rpc.mainnet.desmos.network",
  coinDenom: "udsm",
  denomUnits: MainnetDenomUnits,
};

export const DesmosChains: Record<string, ChainInfo> = {
  testnet: DesmosTestnet,
  mainnet: DesmosMainnet,
};
