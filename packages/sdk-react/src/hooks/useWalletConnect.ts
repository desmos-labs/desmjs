import WalletConnectClient from "@walletconnect/client";
import {useEffect, useState} from "react";
import {SessionTypes} from "@walletconnect/types";
import {ClientOptions} from "@walletconnect/types/dist/cjs/client";
import {WalletConnect} from "@desmos-labs/sdk-core";

/**
 * Hook to initialize a WalletConnect client.
 */
export function useWalletConnect(options: ClientOptions) {

    const [walletConnect, setWalletConnect] = useState<WalletConnect | undefined>();
    const [error, setError] = useState<string | undefined>();
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        const asyncTask = async () => {
            try {
                const client = await WalletConnectClient.init(options);
                let session: SessionTypes.Settled | undefined = undefined;
                if (client.session.topics.length > 0) {
                    session = await client.session.get(client.session.topics[0]);
                }
                setWalletConnect({
                    client,
                    session
                });
                setInitialized(true);
            } catch (e: any) {
                setError(e.toString());
            }
        }
        asyncTask();
    }, []);

    return {
        walletConnect,
        initialized,
        error
    }
}