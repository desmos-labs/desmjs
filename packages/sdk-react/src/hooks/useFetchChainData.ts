import {DependencyList, useEffect} from "react";
import {DesmosClient} from "@desmos-labs/sdk-core";
import {useFetchChainDataCallback} from "./useFetchChainDataCallback";

/**
 * Hook to fetch data from the chain.
 * @param cb: Function that perform the fetching operation.
 * @param deps: If present, the fetch operation will be re executed if the values in the list change.
 * @returns Returns an object that provides a stateful variable to monitor the operation status,
 * the value fetched from the chain and a stateful variable that reports the error cause on failure.
 */
export function useFetchChainData<V>(cb: (client: DesmosClient) => Promise<V>, deps: DependencyList = []) {
    const {fetch, status, value, error} = useFetchChainDataCallback(cb, deps);

    useEffect(() => {
        fetch();
    }, [fetch()]);

    return {
        status,
        value,
        error,
    }
}