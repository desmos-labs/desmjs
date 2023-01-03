---
sidebar_label: "Usage"
---

# Usage KeplrSigner

Here you can find how to create an instance of [`KeplrSigner`](../../api/classes/desmoslabs_desmjs_keplr.KeplrSigner.md).

## Initialize KeplrSigner

Here an example of code that showcase how to initialize the `KeplrSinger`:

```ts
import { DesmosChains, SigningMode } from "@desmoslabs/desmjs";
import { KeplrSigner } from "@desmoslabs/desmjs-keplr";


// Check if the user have the keplr extension installed.
if (window.keplr === undefined) {
  throw new Error("please install the keplr web extension");
}

// Build the keplr signer
const signer = new KeplrSigner(window.keplr, {
  signingMode: SigningMode.DIRECT,
  // Use DesmosChains.mainnet for mainnet.
  chainInfo: DesmosChains.testnet,
});

// Connect to the signer
await signer.connect();
```

## Use the signer

After the signer is connected you can construct a [`DesmosClient`](../../api/classes/desmoslabs_desmjs.DesmosClient.md)
with the [`connectWithSigner`](../../api/classes/desmoslabs_desmjs.DesmosClient.md#connectwithsigner) function and
start to perform [transactions](../core/03-perform-transactions.md).

```js
import { DesmosClient, DesmosChains, SigningMode, GasPrice } from "@desmoslabs/desmjs";
import { KeplrSigner } from "@desmoslabs/desmjs-keplr";


// Check if the user have the keplr extension installed.
if (window.keplr === undefined) {
  throw new Error("please install the keplr web extension");
}

// Build the keplr signer
const signer = new KeplrSigner(window.keplr, {
  signingMode: SigningMode.DIRECT,
  // Use DesmosChains.testnet for testnet.
  chainInfo: DesmosChains.mainnet,
});

// Connect to the signer
await signer.connect();

const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

// Use the client to perform operations...
```

## Terminate session

When you have finished to perform the operations or if the user want to disconnect from your app you can
call the [`disconnect`](../../api/classes/desmoslabs_desmjs_keplr.KeplrSigner.md#disconnect) method 
to terminate the session.
