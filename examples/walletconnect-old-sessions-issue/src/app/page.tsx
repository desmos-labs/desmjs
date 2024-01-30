"use client"

import { SignClient, WalletConnectSigner } from "@desmoslabs/desmjs-walletconnect-v2";
import { SigningMode } from "@desmoslabs/desmjs";
import { useState } from "react";

export default function Home() {
  const [signer, setSigner] = useState<WalletConnectSigner | null>(null);

  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;

  const connect = async () => {
    const client = await SignClient.init({
      projectId,
    });

    const signer = new WalletConnectSigner(client, {
      // Id of the chain you are connecting to
      chain: "desmos:desmos-mainnet",
      // Signer sign mode
      signingMode: SigningMode.DIRECT,
    });

    if (signer.isConnected) {
      console.log("Already connected")
      return
    }

    await signer!.connect();
    console.log("Connected");

    setSigner(signer);
  }

  async function getSession() {
    const client = await SignClient.init({
      projectId,
    });
    console.log(client.session.values);
  }

  async function reconnect() {
    const client = await SignClient.init({
      projectId,
    });

    const signer = new WalletConnectSigner(client, {
      // Id of the chain you are connecting to
      chain: "desmos:desmos-mainnet",
      // Signer sign mode
      signingMode: SigningMode.DIRECT,
    });

    if (signer.isConnected) {
      console.log("Already connected")
      return
    }

    console.log(client.session.values);
    await signer.connectToSession(client.session.values[client.session.values.length - 1]!);
    console.log("Connected to session");
    setSigner(signer);
  }

  const disconnect = async () => {
    if(signer) {
      await signer!.disconnect();
      console.log("Disconnected");
    }
  }

  return (
    <main>
      <h1>Hello</h1>
      <button onClick={connect}>Connect</button>
      <br />
      <button onClick={getSession}>Print sessions</button>
      <br />
      <button onClick={reconnect}>Reconnect</button>
      <br />
      <button onClick={disconnect}>Disconnect</button>
    </main>
  );
}
