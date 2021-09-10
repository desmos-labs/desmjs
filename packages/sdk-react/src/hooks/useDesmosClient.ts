import {DesmosClient} from "@desmoslabs/sdk-core";
import {useEffect, useMemo} from "react";
import {useCurrentChainInfo} from "./useCurrentChainInfo";

/**
 * Hook to get a DesmosClient to interact with the current selected chain.
 * @returns Returns a disconnected client to interact with the chain, the client instnace will be
 * reinitialized if the current selected chain changes.
 */
export function useDesmosClient() {
    const currentChain = useCurrentChainInfo();

    // Creates the client from the chain rpc
    const client = useMemo(() => {
        return DesmosClient.withoutSigner(currentChain.rpcUrl);
    }, [currentChain.rpcUrl]);

    // Hook to release the client resources when the client changes.
    useEffect(() => {
        return () => {
            client.disconnect();
        }
    }, [client]);

    return client;
}