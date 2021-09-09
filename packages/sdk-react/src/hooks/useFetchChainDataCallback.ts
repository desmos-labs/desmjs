import {DependencyList, useCallback, useState} from "react";
import {DesmosClient} from "@desmos-labs/sdk-core";
import {ChainOperationStatus} from "../types";
import {useDesmosClient} from "./useDesmosClient";

/**
 * Hook to create a function that fetch data from the chain.
 * @param cb: Function that perform the fetching operation.
 * @param deps: If present, the memoized fetch function will be recreated if the values in the list have changed.
 * @returns Returns an object that provides a stateful variable to monitor the operation status,
 * the value fetched from the chain and a stateful variable that reports the error cause on failure.
 */
export function useFetchChainDataCallback<V>(cb: (client: DesmosClient) => Promise<V>, deps: DependencyList = []) {
    const client = useDesmosClient();
    const [status, setStatus] = useState<ChainOperationStatus>(ChainOperationStatus.Pending);
    const [value, setValue] = useState<V | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetch = useCallback(() => {
        client.connect().then(async () => {
            return await cb(client);
        }).then(v => {
            setValue(v);
            setStatus(ChainOperationStatus.Success);
        }).catch(e => {
            setError(e.toString());
            setStatus(ChainOperationStatus.Failed);
        });
    }, [client, ...deps]);

    return {
        fetch,
        status,
        value,
        error,
    }
}