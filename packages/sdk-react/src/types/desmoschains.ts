export interface DenomUnit {
    /**
     * The coin denomination.
     */
    denom: string,
    /**
     * Exponent to the base chain coin denom.
     * For example the exponent for DMS is 6 since 1 DSM = 1 * 10 ^ 6 udsm.
     */
    exponent: number,
}

/**
 * Informations regarding a chain.
 */
export interface ChainInfo {
    /**
     * Url used to perform the rpc requests
     */
    rpcUrl: string,
    /**
     * The chain id
     */
    chainId: string,
    /**
     * Denom of the chain's coin.
     */
    coinDenom: string,
    /**
     * List of denoms that can be displayed to the user.
     */
    denomUnits: DenomUnit[],
}

export const Desmoschains: Record<string, ChainInfo> = {
    "morpheus-apollo-2": {
        chainId: "morpheus-apollo-2",
        rpcUrl: "https://rpc.morpheus.desmos.network",
        coinDenom: "udaric",
        denomUnits: [
            { denom: "udaric", exponent: 0 },
            { denom: "daric", exponent: 6 },
        ]
    },
    "desmos-mainnet": {
        chainId: "desmos-mainnet",
        rpcUrl: "https://rpc.mainnet.desmos.network",
        coinDenom: "udsm",
        denomUnits: [
            { denom: "udsm", exponent: 0 },
            { denom: "dsm", exponent: 6 },
        ]
    }
}