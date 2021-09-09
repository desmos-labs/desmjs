import {useEffect, useState} from "react";
import {useSdkContext} from "../context";
import {SignerStatus} from "../signercontroller";

/**
 * Hook to observe signer's the connection status.
 * @returns A stateful variable that provide the connection status of the signer managed from the sdk.
 */
export function useSignerStatus(): SignerStatus {
    const sdkContext = useSdkContext();
    const [signerStatus, setSignerStatus] = useState(sdkContext.signerController.signerStatus);

    useEffect(() => {
        const observer = (newState: SignerStatus) => {
            setSignerStatus(newState);
        };

        sdkContext.signerController.addSignerStatusObserver(observer);

        return () => {
            sdkContext.signerController.removeSignerStatusObserver(observer);
        }
    }, [sdkContext.signerController]);

    return signerStatus;
}