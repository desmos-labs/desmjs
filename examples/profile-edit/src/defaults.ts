export const DEFAULT_RELAY_PROVIDER = "wss://relay.walletconnect.org";
export const LOCAL_RELAY_PROVIDER = "ws://localhost:9999";

export const WCOptions = {
    metadata: {
        url: "http://localhost:3000",
        description: "Desmos SDK Demo",
        icons: [],
        name: "Desmos SDK Demo",
    },
    logger: "debug",
    relayProvider: DEFAULT_RELAY_PROVIDER,
}