import {DesmosWallet, WalletStatus} from "@desmos-labs/sdk-core";
import {useEffect, useState} from "react";

/**
 * Hook to observe the wallet status.
 * @param wallet - Instance of the wallet of interest.
 * @returns A stateful variable that provide the connection status of the provided wallet.
 */
export function useWalletState(wallet: DesmosWallet): WalletStatus {
    const [status, setWalletStatus] = useState(wallet.status);

    useEffect(() => {
        wallet.on("on_status_change", setWalletStatus);
        return () => {
            wallet.removeListener("on_status_change", setWalletStatus);
        }
    }, [])

    return status;
}