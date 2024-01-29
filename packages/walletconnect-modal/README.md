# @desmoslabs/desmjs-walletconnect-modal

[![npm version](https://img.shields.io/npm/v/@desmoslabs/desmjs-walletconnect-modal.svg)](https://www.npmjs.com/package/@desmoslabs/desmjs-walletconnect-modal)

This package contains the `DPMWalletConnectModal` that is used inside 
[@desmoslabs/desmjs-walletconnect-v2](https://www.npmjs.com/package/@desmoslabs/desmjs-walletconnect-v2) 
to display a QR code to initialize a WalletConnect session or to trigger the opening of the DPM app on the mobile device. 

## Trigger DPM app open

This package provides logic that doesn't display the QR code on mobile devices but instead 
shows a button that, once pressed, will open the DPM app on the mobile device. 
To do so, this package will generate the following URIs based on the mobile device OS:

* Android: `intent://wcV2?uri=$WC_URI&isMobile=true#Intent;package=network.desmos.dpm.debug;scheme=dpm;end;`
* iOS: `dpm://wcV2?uri=$WC_URI&isMobile=true`

The generated URI has two query parameters:

* `uri`: The URL-encoded WalletConnect URI to start the new session.
* `isMobile`: To instruct DPM that the session start has been triggered from the device.
