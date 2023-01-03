---
sidebar_label: "Usage"
---

# Web3Auth Web Signer

Here you can find how to create an instance of
[`PrivateKeySigner`](docs/api/classes/desmoslabs_desmjs.PrivateKeySigner.md) that obtain the private key
through [Web3Auth](https://web3auth.io/docs/sdk/web/modal/initialize) with
[`Web3AuthKeyProvider`](docs/api/classes/desmoslabs_desmjs_web3auth_web.Web3AuthPrivateKeyProvider.md).

## Initialize OpenLoginAdapter

To support the login with different method, we use the `OpenLoginAdapter` plugin.
Here is an example that showcase how to initialize it:

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

## Initialize the Signer

With the `OpenloginAdapter` instance you can now instantiate a `Signer` capable of sign transactions
with the private key obtained from `Web3Auth`.
Here is an example that showcase how to create it:

```ts
import { SigningMode } from "@desmoslabs/desmjs";
import { web3AuthSigner } from "@desmoslabs/desmjs-web3auth-web";


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
```


## Use the signer

After the signer is connected you can construct a [`DesmosClient`](docs/api/classes/desmoslabs_desmjs.DesmosClient.md)
with the [`connectWithSigner`](docs/api/classes/desmoslabs_desmjs.DesmosClient.md#connectwithsigner) function and
start to perform [transactions](docs/02-desmjs/03-perform-transactions.md).

```js
import { SigningMode, DesmosClient, GasPrice } from "@desmoslabs/desmjs";
import { web3AuthSigner } from "@desmoslabs/desmjs-web3auth-web";


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

## Terminate session

When you have finished to perform the operations or if the user want to disconnect from your app you can
call the [`disconnect`](docs/api/classes/desmoslabs_desmjs.Signer.md#disconnect) method
to terminate the session.
