import { GasPrice } from "@cosmjs/stargate";

export interface DenomUnit {
  /**
   * The coin denomination.
   */
  readonly denom: string;

  /**
   * Exponent to the base chain coin denom.
   * For example the exponent for DMS is 6 since 1 DSM = 1 * 10 ^ 6 udsm.
   */
  readonly exponent: number;
}

/**
 * Informations regarding a chain.
 */
export interface ChainInfo {
  /**
   * Url used to perform the rpc requests
   */
  readonly rpcUrl: string;

  /**
   * ID of the chain
   */
  readonly chainId: string;

  /**
   * Gas price to be used when sending transactions to this chain.
   */
  readonly gasPrice: GasPrice;

  /**
   * Denom of the token used for staking
   */
  readonly stakingDenom: string;

  /**
   * List of denoms that can be displayed to the user
   */
  readonly denomUnits: DenomUnit[];
}

export const MorpheusApollo2: ChainInfo = {
  chainId: "morpheus-apollo-2",
  rpcUrl: "https://rpc.morpheus.desmos.network",
  gasPrice: GasPrice.fromString("0.01udaric"),
  stakingDenom: "udaric",
  denomUnits: [
    { denom: "udaric", exponent: 0 },
    { denom: "daric", exponent: 6 },
  ],
};

export const DesmosMainnet: ChainInfo = {
  chainId: "desmos-mainnet",
  rpcUrl: "https://rpc.mainnet.desmos.network",
  gasPrice: GasPrice.fromString("0.01udsm"),
  stakingDenom: "udsm",
  denomUnits: [
    { denom: "udsm", exponent: 0 },
    { denom: "dsm", exponent: 6 },
  ],
};

export const DesmosChains: Record<string, ChainInfo> = {
  testnet: MorpheusApollo2,
  mainnet: DesmosMainnet,
};
