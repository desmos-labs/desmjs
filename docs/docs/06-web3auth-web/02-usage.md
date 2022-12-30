---
sidebar_label: "Usage"
---

# Web3Auth Web Signer

Here you can find how to create an instance of
[`PrivateKeySigner`](docs/api/classes/desmoslabs_desmjs.PrivateKeySigner.md) that obtain the private key
through [Web3Auth](https://web3auth.io/docs/sdk/web/modal/initialize) with
[`Web3AuthKeyProvider`](docs/api/classes/desmoslabs_desmjs_web3auth_web.Web3AuthPrivateKeyProvider.md).

## Initialize OpenLoginAdapter

To support the login with different method we use the `OpenLoginAdapter` plugin.
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
