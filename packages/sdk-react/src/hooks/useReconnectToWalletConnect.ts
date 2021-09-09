import {useSdkContext} from "../context";
import {useEffect} from "react";
import {SignerType} from "../types";
import {ClientOptions} from "@walletconnect/types/dist/cjs/client";
import {QrCodeController} from "@desmos-labs/sdk-core";

/**
 * Hook to reconnect to a Wallet Connect signer if is available a previously settled session.
 */
export function useReconnectToWalletConnect(options: ClientOptions, qrCodeController: QrCodeController) {
    const {signerController} = useSdkContext();

    useEffect(() => {
        const reconnect = async () => {
            try {
                await signerController.connect({
                    type: SignerType.WalletConnect,
                    options,
                    qrCodeController,
                    restoreSession: true,
                });
            } catch (e) {
                if (e.toString().indexOf("No session available") === -1) {
                    throw e;
                }
            }
        }
        reconnect();
    }, [signerController]);
}