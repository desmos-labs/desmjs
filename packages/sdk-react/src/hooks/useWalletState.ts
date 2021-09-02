import {DesmosWallet, WalletStatus, WalletEvent} from "@desmos-labs/sdk-core";
import {useEffect, useState} from "react";

/**
 * Hook to observe the wallet status.
 * @param wallet - Instance of the wallet of interest.
 * @returns A stateful variable that provide the connection status of the provided wallet.
 */
export function useWalletState(wallet: DesmosWallet): WalletStatus {
    const [status, setWalletStatus] = useState(wallet.status);

    useEffect(() => {
        wallet.on(WalletEvent.ON_STATUS_CHANGE, setWalletStatus);
        return () => {
            wallet.removeListener(WalletEvent.ON_STATUS_CHANGE, setWalletStatus);
        }
    }, [])

    return status;
}