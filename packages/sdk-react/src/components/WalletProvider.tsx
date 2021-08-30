import {ReactNode, useMemo} from "react";
import {DesmosWallet, WalletConnect, Wallet} from "@desmos-labs/sdk-core";
import {WalletContext} from "../hooks";

export type Props = {
    walletConnect: WalletConnect
    children: ReactNode | undefined
}

/**
 * Component that provides a DesmosWallet instance to the child components.
 */
export function WalletProvider(props: Props): JSX.Element {

    const wallet = useMemo<DesmosWallet>(() => {
        return new Wallet(props.walletConnect);
    }, [props.walletConnect]);

    return <WalletContext.Provider value={wallet}>
        {props.children}
    </WalletContext.Provider>
}