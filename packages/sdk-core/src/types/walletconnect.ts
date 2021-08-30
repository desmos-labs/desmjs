import WalletConnectClient from "@walletconnect/client";
import {SessionTypes} from "@walletconnect/types";

export interface WalletConnect {
    client: WalletConnectClient,
    session?: SessionTypes.Settled
}