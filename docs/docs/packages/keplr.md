---
sidebar_label: "DesmJS Keplr"
id: "desmsj-keplr"
sidebar_position: 2
---

# DesmJS Keplr

This package provides a `Signer` capable of sign transactions using the
[Keplr web extension](https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en).

## Installation

To install the package run the following command:

```shell
yarn add @desmoslabs/desmjs-keplr
```

## Usage

### Building a `DesmosClient` instance using `KeplrSigner`

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

### Disconnecting

When you have finished to perform the operations, or if the user wants to disconnect from your app, you can
call the [`disconnect`](../api/classes/desmoslabs_desmjs_keplr.KeplrSigner.md#disconnect) method
to terminate the session.
