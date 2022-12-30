---
sidebar_label: "Initialize"
---

# DesmJS

## Installation

This package provides the `DesmsoClient` class together with other utilities that can be used to interact with chain.  

To install desmjs run the following command:

```shell
yarn add @desmoslabs/desmjs @desmoslabs/desmjs-types
```

## Instantiating the DesmosClient

To instantiate the client you have two options:

1. [`connect`](docs/api/classes/desmoslabs_desmjs.DesmosClient.md#connect) if you need to just fetch data from the chain; 
2. [`connectWithSigner`](docs/api/classes/desmoslabs_desmjs.DesmosClient.md#connectwithsigner) if you need to perform operations.

The RPC endpoints required from `connect` and `connectWithSigner` can be found here:

* [Mainnet](https://github.com/desmos-labs/mainnet#endpoints)
* [Testnet](https://github.com/desmos-labs/morpheus/tree/main/morpheus-apollo-3#endpoints)

### Instantiating with connect

Here an example that uses the `connect` method to connect to the Desmos mainnet:

```js
import { DesmosClient } from "@desmoslabs/desmjs"

const client = DesmosClient.connect('https://rpc.mainnet.desmos.network');
```

### Instantiating with connectWithSigner

Here an example that uses `connectWithSigner` method to connect to the Desmos mainnet:

```js
import { DesmosClient, GasPrice, OfflineSignerAdapter, SigningMode } from "@desmoslabs/desmjs"

const mnemonic = "" // Replace with your mnemonic
// To sign tx in amino mode use SigningMode.AMINO
const signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);

const client = DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});
```

