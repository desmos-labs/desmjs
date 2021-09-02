import {ReactNode, useMemo} from "react";
import {DesmosWallet, DirectSigner} from "@desmos-labs/sdk-core";
import {WalletContext} from "../hooks";

export type Props = {
    signer: DirectSigner
    children: ReactNode | undefined
}

/**
 * Component that provides a DesmosWallet instance to the child components.
 */
export function WalletProvider(props: Props): JSX.Element {

    const wallet = useMemo<DesmosWallet>(() => {
        return new DesmosWallet(props.signer);
    }, [props.signer]);

    return <WalletContext.Provider value={wallet}>
        {props.children}
    </WalletContext.Provider>
}