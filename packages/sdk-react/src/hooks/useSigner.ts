import {useSdkContext} from "../context";
import {Signer} from "../types";

/**
 * Hook to get the current connected signer.
 * @returns Returns the connected signer or undefined if the singer is not connected.
 */
export function useSigner(): Signer | undefined {
    const {signer} = useSdkContext();
    return signer;
}