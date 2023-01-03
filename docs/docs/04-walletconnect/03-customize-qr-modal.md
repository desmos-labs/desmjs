---
sidebar_label: "Customize QR Code UI"
---

# Customize The QR Code UI

To customize the UI that present the QR code to the user, you can create an object that implements the
[`QrCodeModalController`](docs/api/interfaces/desmoslabs_desmjs_walletconnect_v2.QrCodeModalController.md)
interface.

```js
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
[`WalletConnectSigner`](docs/api/classes/desmoslabs_desmjs_walletconnect_v2.WalletConnectSigner.md#constructor).

```js
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
