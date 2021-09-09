import {useSdkContext} from "../context";
import {ChainInfo} from "../types";

/**
 * Hook to get the current select chain informations.
 */
export function useCurrentChainInfo(): ChainInfo {
    const {currentChain} = useSdkContext();
    return currentChain;
}