import React from "react";
import ReactDom from "react-dom";
import Modal from "./modal";

export default class WalletConnectModal {
  /**
   *  Function to open the modal and display the QR code
   *  that the user need to scan in order to start the
   *  WalletConnect session.
   *  @param uri - The URI to start the WalletConnect session.
   *  @param onClose - The callback that will be called if the user closes the modal.
   */
  open(uri: string, onClose: () => void) {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "desmjs-walletconnect-qrcode-modal");
    document.body.appendChild(wrapper);

    ReactDom.render(
      <Modal
        uri={uri}
        onClose={() => {
          this.close();
          onClose();
        }}
      />,
      wrapper,
    );
  }

  close() {
    const wrapper = document.getElementById(
      "desmjs-walletconnect-qrcode-modal",
    );
    if (wrapper) {
      document.body.removeChild(wrapper);
    }
  }
}
