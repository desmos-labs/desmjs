import {useSdkContext} from "../context";

/**
 * Hook to change the chain information currently in use.
 * @param chainId - Id of the chain of interest.
 */
export function useSetCurrentChain(chainId: string) {
    const {setCurrentChainId} = useSdkContext();
    return setCurrentChainId;
}