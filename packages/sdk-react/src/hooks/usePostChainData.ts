import {DependencyList, useCallback, useState} from "react";
import {DesmosClient} from "@desmoslabs/sdk-core";
import {ChainOperationStatus} from "../types";
import {useDesmosClient} from "./useDesmosClient";
import {useSigner} from "./useSigner";

/**
 * Hook to post data to the chain.
 * @param cb: Function that perform the post operation.
 * @param deps: If present, the memoized exec function will be recreated if the values in the list have changed.
 * @returns Returns an object that provides a function to execute the operation,
 * a stateful variable to monitor the operation status,
 * the value returned from the post operation and a stateful variable that reports the error cause on failure.
 */
export function usePostChainData<V>(cb: (client: DesmosClient) => Promise<V>, deps: DependencyList = []) {
    const client = useDesmosClient();
    const signer = useSigner();
    const [status, setStatus] = useState<ChainOperationStatus>(ChainOperationStatus.Idle);
    const [value, setValue] = useState<V | null>(null);
    const [error, setError] = useState<string | null>(null);

    const exec = useCallback(() => {
        if (signer === undefined) {
            setError("Signer not connected");
            setStatus(ChainOperationStatus.Failed);
            return;
        }

        client.setSigner(signer.signer);
        setStatus(ChainOperationStatus.Pending);
        setValue(null);
        setError(null);
        client.connect().then(async () => {
            return cb(client);
        }).then(v => {
            setValue(v);
            setStatus(ChainOperationStatus.Success);
        }).catch(e => {
            setError(e.toString());
            setStatus(ChainOperationStatus.Failed);
        });
    }, [client, signer, ...deps])

    return {
        exec,
        status,
        value,
        error,
    }
}