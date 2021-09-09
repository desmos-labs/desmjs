import {ConnectToSigner} from "../signercontroller";
import {useSdkContext} from "../context";
import {useCallback, useState} from "react";

/**
 * Hook to connect to a signer.
 * @returns Returns an object that contains a function to initiate the connection to the signer,
 * a stateful variable that signal if the connection has been successfully and a stateful variable
 * that reports the error cause on failure.
 */
export function useConnectSigner() {
    const {signerController} = useSdkContext();
    const [connected, setConnected] = useState(false);
    const [connectError, setError] = useState<Error | undefined>(undefined);

    const connect = useCallback(async (connectAction: ConnectToSigner) => {
        setConnected(false);
        setError(undefined);
        try {
            await signerController.connect(connectAction);
            setConnected(true);
        } catch (e) {
            setError(e);
        }
    }, [signerController]);

    return {
        connect,
        connected,
        connectError,
    }
}