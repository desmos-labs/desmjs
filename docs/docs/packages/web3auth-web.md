---
sidebar_label: "DesmJS Web3Auth Web"
id: "desmsj-web3auth-web"
sidebar_position: 4
---

# DesmJS Web3Auth Web

This package provides a `Signer` capable of sign transactions with the private
key provided from [Web3Auth](https://web3auth.io).

:::caution React Web package
This package should be used inside React Web projects. If you want to use the same functionalities inside a
React Native app, use [DesmJS Web3Auth Mobile](./web3auth-mobile.mdx) instead.
:::

## Installation

To install the package, you can run the following command:

```shell
yarn add @desmoslabs/desmjs-web3auth-web @web3auth/modal @web3auth/openlogin-adapter @web3auth/ui
```

## Setup

### Get Web3Auth client id

After setting up the project you need to get a Web3Auth client id, you can find how to
get one in the [Web3Auth docs](https://web3auth.io/docs/developer-dashboard/get-client-id).

## Usage

### Initializing `OpenLoginAdapter`

To support the login with different methods, we use the `OpenLoginAdapter` plugin:

```ts
import {OpenloginAdapter} from "@web3auth/openlogin-adapter";

const openloginAdapter = new OpenloginAdapter({
  adapterSettings: {
    network: "cyan",
    uxMode: "popup",
    whiteLabel: {
      name: "Desmos DApp example",
      defaultLanguage: "en",
      dark: true // whether to enable dark mode. defaultValue: false
    }
  }
});
```

### Building a `DesmosClient` instance using `Web3AuthSigner`

With the `OpenloginAdapter` instance, you can now instantiate a `Signer` capable of sign transactions
with the private key obtained from `Web3Auth`. Once you have the `Signer` instance, you can use that to build
a `DesmosClient` instance.

```ts
import {SigningMode} from "@desmoslabs/desmjs";
import {web3AuthSigner} from "@desmoslabs/desmjs-web3auth-web";

const signer = web3AuthSigner(SigningMode.DIRECT, {
  authMode: "DAPP",
  clientId: "YOUR WEB3AUTH CLIENT ID",
  chainConfig: {
    chainNamespace: "other",
    blockExplorer: "https://bigdipper.live/desmos",
    displayName: "Desmos",
    chainId: "desmos-mainnet",
    ticker: "DSM",
    tickerName: "Desmos"
  }
}, {
  adapters: [openloginAdapter],
});

await signer.connect();

const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm")
});

// Use the client to perform operations...
```

### Disconnecting

When you have finished to perform the operations, or if the user wants to disconnect from your app, you can
call the [`disconnect`](../api/classes/desmoslabs_desmjs_keplr.KeplrSigner.md#disconnect) method
to terminate the session.
