import React, {useContext} from "react";
import {DesmosWallet} from "@desmos-labs/sdk-core";

export const WalletContext = React.createContext<DesmosWallet | null>(null);

/**
 * Hook to access the DesmosWallet instance provided from the WalletProvider component.
 */
export function useWallet(): DesmosWallet {
    const wallet = useContext(WalletContext)!!;
    if (wallet === null) {
        throw new Error("The wallet instance is null. make sure that the <WalletProvider> component has benn added!");
    }

    return wallet;
}