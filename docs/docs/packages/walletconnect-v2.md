---
sidebar_label: "DesmJS WalletConnect v2"
id: "desmsj-walletconnect-v2"
sidebar_position: 3
---

# DesmJS WalletConnect v2

This package provides a `Signer` capable of sign transactions through [WalletConnect v2](https://walletconnect.org).

:::caution Verify client implementation  
This package assumes that the other client implements the following RPC methods:
* `cosmos_signAmino`: Sign a amino encoded transaction
* `cosmos_signDirect`: Sign a protobuf encoded transaction
* `cosmos_getAccountData`: Gets the details of the account
:::

## Installation

To install the package run the following command:

```shell
yarn add @desmoslabs/desmjs-walletconnect-v2 @walletconnect/types
```

## Usage
### Initializing a WalletConnect `SignClient` instance

Before creating the [`WalletConnectSigner`](../api/classes/desmoslabs_desmjs_walletconnect.WalletConnectSigner.md)
you must create an instance of the WalletConnect `SignClient`.  

To initialize a `SignClient` instance you need a [project id](https://docs.walletconnect.com/2.0/cloud/relay) that
can be obtained from the [WalletConnect website](https://walletconnect.com).

```ts
import { SignClient } from "@desmoslabs/desmjs-walletconnect-v2";

const signClient = await SignClient.init({
  projectId: "<YOUR_PROJECT_ID>",
  metadata: {
    name: "Example Dapp",
    description: "Example Dapp",
    url: "#",
    icons: ["https://walletconnect.com/walletconnect-logo.png"],
  },
});
```

## Building a `DesmosClient` using `WalletConnectSigner`

```js
import { WalletConnectSigner, QRCodeModal } from "@desmoslabs/desmjs-walletconnect-v2";

const signer = new WalletConnectSigner(signClient, {
  // Id of the chain you are connecting to
  chain: "desmos:desmos-mainnet",
  // Signer sign mode
  signingMode: SigningMode.DIRECT,
  // Controller used to display the QR Code that can be scanned from a wallet 
  qrCodeModalController: QRCodeModal,
});

const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

// Use the client to perform operations...
```

### Connecting to a client
After you have initialized the signer you can create a new session or reconnect to a previously established
connection.

:::tip Custom QR code modal   
If your application needs a custom UI to show the QR code you can see how to customize it
[here](#customize-qr-modal).
:::

#### Creating a new connection

To create a new connection you can call the
[`connect`](../api/classes/desmoslabs_desmjs_walletconnect_v2.WalletConnectSigner.md#connect) method.  
This will show to the user a QR code that can be scanned from a wallet to connect to your DApp.

```js
await signer.connect();
```

#### Reconnecting to a session

To reconnect to a previously established session, you can call the
[`connectToSession`](../api/classes/desmoslabs_desmjs_walletconnect_v2.WalletConnectSigner.md#connecttosession)
method.

```js
import { WalletConnectSigner, SignClient } from "@desmoslabs/desmjs-walletconnect-v2";

const signClient: SignClient; // Your initialized SignClient
const signer: WalletConnectSigner; // Your initialized Signer

// Get sessions from WalletConnect SignClient
const sessions = signClient.session.values;

// Reconnect to the first one
await signer.connectToSession(sessions[0]);
```

### Disconnecting

When you have finished to perform the operations, or if the user wants to disconnect from your app, you can
call the [`disconnect`](../api/classes/desmoslabs_desmjs_walletconnect_v2.SignClient.md#disconnect) method
to terminate the session.

## Customize the QR code modal

To customize the UI that present the QR code to the user, you can create an object that implements the
[`QrCodeModalController`](../api/interfaces/desmoslabs_desmjs_walletconnect_v2.QrCodeModalController.md)
interface.

```ts
import { QrCodeModalController } from "@desmoslabs/desmjs-walletconnect-v2";

const customController: QrCodeModalController = {
  open(uri: string, onCloseCb: () => void) {
    // Show the QR code to the user.
    // uri - Uri to be displayed as QR Code
    // onCloseCb - callback to be called when the ui is closed.
  },
  close() {
    // Close the QR code ui.
  },
};
```

With the custom `QrCodeModalController`, now you can pass it as `qrCodeController` inside the `options` field of
[`WalletConnectSigner`](../api/classes/desmoslabs_desmjs_walletconnect_v2.WalletConnectSigner.md#constructor).

```ts
import { WalletConnectSigner } from "@desmoslabs/desmjs-walletconnect-v2";
import { QrCodeModalController } from "@desmoslabs/desmjs-walletconnect-v2";

const customController: QrCodeModalController = {
  open(uri: string, onCloseCb: () => void) {
    // Show the QR code to the user.
    // uri - Uri to be displayed as QR Code
    // onCloseCb - callback to be called when the ui is closed.
  },
  close() {
    // Close the QR code ui.
  },
};

const signer = new WalletConnectSigner(signClient, {
  // Id of the chain you are connecting to
  chain: "desmos:desmos-mainnet",
  // Signer sign mode
  signingMode: SigningMode.DIRECT,
  // Controller used to display the QR Code that can be scanned from a wallet 
  qrCodeModalController: customController,
});
```
