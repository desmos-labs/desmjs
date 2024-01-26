import SignClient from "@walletconnect/sign-client";
import React, { createContext, useContext, useEffect, useState } from "react";
import WalletConnectClient from "@walletconnect/sign-client";

interface WalletConnectContext {
  signClient?: SignClient;
}

// @ts-ignore
const initialState: WalletConnectContext = {};
const walletConnectContext = createContext<WalletConnectContext>(initialState);

interface Props {
  children?: React.ReactNode;
}

export const WalletConnectContextProvider: React.FC<Props> = ({ children }) => {
  const [signClient, setSignClient] = useState<SignClient | undefined>();

  // Effect to connect to the provided chain endpoint
  useEffect(() => {
    (async () => {
      console.log("Initializing WalletConnect SignClient...");
      try {
        const client = await WalletConnectClient.init({
          projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
        });
        console.log("WalletConnect SignClient initialized!");
        console.log("WalletConnect sessions", client.session.values);
        setSignClient(client);
      } catch (e) {
        console.error("WalletConnect SignClient error", e);
      }
    })();
  }, []);

  return (
    <walletConnectContext.Provider
      value={{
        signClient,
      }}
    >
      {children}
    </walletConnectContext.Provider>
  );
};

export function useWalletConnectContext(): WalletConnectContext {
  return useContext(walletConnectContext);
}
