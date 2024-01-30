"use client";

import {
  DesmosClient,
  GasPrice,
  Signer,
  SignerStatus,
  SigningMode,
} from "@desmoslabs/desmjs";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { WalletConnectSigner } from "@desmoslabs/desmjs-walletconnect-v2";
import { SessionTypes } from "@walletconnect/types";
import { useWalletConnectContext } from "./walletconnect";

/**
 * Interface that represents the global desmos state.
 */
interface DesmosState {
  client?: DesmosClient;
  signer?: Signer;
  signerStatus: SignerStatus;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

// @ts-ignore
const initialState: DesmosState = {};
const DesmosContent = createContext<DesmosState>(initialState);

interface Props {
  chainEndpoint: string;
  children?: React.ReactNode;
}

export const DesmosContextProvider: React.FC<Props> = ({
  chainEndpoint,
  children,
}) => {
  const { signClient } = useWalletConnectContext();
  const [signerStatus, setSignerStatus] = useState(SignerStatus.NotConnected);
  const [signer, setSigner] = useState<Signer | undefined>();
  const [client, setDesmosClient] = useState<DesmosClient | undefined>();

  // Effect to update the signer status
  useEffect(() => {
    if (signer !== undefined) {
      setSignerStatus(signer.status);
      signer.addStatusListener(setSignerStatus);
      return () => {
        signer.removeStatusListener(setSignerStatus);
        setSignerStatus(SignerStatus.NotConnected);
      };
    }

    return undefined;
  }, [signer]);

  const connect = useCallback(
    async (session?: SessionTypes.Struct) => {
      if (signClient !== undefined) {
        const newSigner = new WalletConnectSigner(signClient, {
          chain: "desmos:desmos-mainnet",
          signingMode: SigningMode.AMINO,
        });

        setSigner((oldSigner) => {
          if (oldSigner !== undefined) {
            oldSigner.disconnect();
          }
          return newSigner;
        });

        // A Session has been provided, connect to the provided session.
        if (session !== undefined) {
          await newSigner.connectToSession(session);
        } else {
          await newSigner.connect();
        }
        // Initialize the client with the new signer.
        const desmosClient = await DesmosClient.connectWithSigner(
          chainEndpoint,
          newSigner,
          {
            gasPrice: GasPrice.fromString("0.2udaric"),
          },
        );
        setDesmosClient(desmosClient);
      } else {
        throw new Error(
          "can't connect, WalletConnect SignClient not initialized",
        );
      }
    },
    [signClient, chainEndpoint],
  );

  const disconnect = useCallback(async () => {
    if (signer !== undefined) {
      signer.disconnect();
    }
    setDesmosClient(undefined);
    setSigner(undefined);
  }, [signer]);

  useEffect(() => {
    if (signClient !== undefined && signClient.session.values.length > 0) {
      const session = signClient.session.values[0];
      console.log("Reloading signer from session...", session);
      connect(session);
    }
  }, [signClient, connect]);

  return (
    <DesmosContent.Provider
      value={{
        client,
        signer,
        signerStatus,
        connect,
        disconnect,
      }}
    >
      {children}
    </DesmosContent.Provider>
  );
};

export function useDesmosContext(): DesmosState {
  return useContext(DesmosContent);
}
