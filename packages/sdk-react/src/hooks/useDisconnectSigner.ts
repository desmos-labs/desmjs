import {useSdkContext} from "../context";
import {useCallback, useState} from "react";

/**
 * Hook to disconnect the current signer.
 * @returns Returns an object that provides a function to disconnect the current signer,
 * a stateful variable that indicates if the disconnection has been successfully and a
 * stateful variable that reports the error cause on failure.
 */
export function useDisconnectSigner() {
    const {signerController} = useSdkContext();
    const [disconnected, setDisconnected] = useState(false);
    const [disconnectError, setError] = useState<Error | undefined>(undefined);

    const disconnect = useCallback(async () => {
        setDisconnected(false);
        setError(undefined);
        try {
            await signerController.disconnect();
            setDisconnected(true);
        } catch (e) {
            setError(new Error(e.toString()));
        }
    }, [signerController]);

    return {
        disconnect,
        disconnected,
        disconnectError,
    }
}