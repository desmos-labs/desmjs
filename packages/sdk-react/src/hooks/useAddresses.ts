import {useSdkContext} from "../context";
import {Signer} from "../types";

/**
 * Hook to get the addresses from the current connected signer.
 * @returns Returns the list of the addresses of the current connected signer or undefined if the
 * signer is not connected.
 */
export function useAddresses(): string[] | undefined {
    const {addresses} = useSdkContext();
    return addresses;
}