import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {SignerController, SignerStatus} from "../signercontroller";
import {ChainInfo, Desmoschains, Signer} from "../types";

/**
 * Interface that represents the global sdk state.
 */
interface SdkState {
    /**
     * Controller that manage the signers.
     */
    signerController: SignerController,
    /**
     * Record of all the chains informations that can be accessed from the application.
     */
    desmosChains: Record<string, ChainInfo>,
    /**
     * Id of the current chain is use.
     */
    currentChainId: string,
    /**
     * Function to change the current chain informations used from the application.
     */
    setCurrentChainId: React.Dispatch<React.SetStateAction<string>>,
    /**
     * Current chain informations.
     */
    currentChain: ChainInfo,
    /**
     * The current connected signer.
     */
    signer: Signer | undefined
    /**
     * The addresses of the current connected singer.
     */
    addresses: string[] | undefined
}

// @ts-ignore
const initialState: SdkState = {}
const SdkContext = createContext<SdkState>(initialState);


export type Props = {
    /**
     * Id of the chain to use.
     */
    chainId: string,
    /**
     * User defined chains configurations.
     */
    extraChains?: Record<string, ChainInfo>,
}

export const DesmosSdkProvider: React.FC<Props> = (props) =>  {

    const signerController = useMemo(() => {
        return new SignerController();
    }, []);

    // Record of all the chains exposed from the sdk.
    const desmosChains = useMemo(() => {
        return {
            ...Desmoschains,
            ...props.extraChains,
        }
    }, [props.extraChains]);

    // Gets the current chain from the current selected chain id
    const [currentChainId, setCurrentChainId] = useState(props.chainId);
    const currentChain = desmosChains[currentChainId];
    if (currentChain === undefined) {
        throw new Error(`Can't find chain with id ${currentChainId}`);
    }

    const [signer, setSigner] = useState<Signer | undefined>(signerController.signer);
    const [addresses, setAddresses] = useState<string []| undefined>(undefined);

    useEffect(() => {
        // Callback to update the sdk context with the connected signer ad the addresses obtained from it.
        const onStatusChanged = (status: SignerStatus) => {
            if (status === SignerStatus.Connected) {
                setSigner(signerController.signer);
                setAddresses(signerController.accountData?.map(accountData => accountData.address));
            } else {
                setSigner(undefined);
                setAddresses(undefined);
            }
        }

        signerController.addSignerStatusObserver(onStatusChanged);
        return () => {
            signerController.removeSignerStatusObserver(onStatusChanged);
        }
    }, [signerController])

    return <SdkContext.Provider value={{
        signerController,
        desmosChains,
        currentChainId,
        setCurrentChainId,
        currentChain,
        signer,
        addresses,
    }}>
        {props.children}
    </SdkContext.Provider>
}

export function useSdkContext(): SdkState {
    return useContext(SdkContext);
}