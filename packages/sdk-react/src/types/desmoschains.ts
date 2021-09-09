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
    coinDenom: string
}

export const Desmoschains: Record<string, ChainInfo> = {
    "morpheus-apollo-2": {
        chainId: "morpheus-apollo-2",
        rpcUrl: "https://rpc.morpheus.desmos.network",
        coinDenom: "udaric",
    },
    "desmos-mainnet": {
        chainId: "desmos-mainnet",
        rpcUrl: "https://rpc.mainnet.desmos.network",
        coinDenom: "udsm",
    }
}