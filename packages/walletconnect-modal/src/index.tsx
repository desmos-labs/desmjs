import React from "react";
import ReactDom from "react-dom";
import Modal from "./modal";

export default class WalletConnectModal {
  open(uri: string, cb: () => void) {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "desmjs-walletconnect-qrcode-modal");
    document.body.appendChild(wrapper);

    ReactDom.render(
      <Modal
        uri={uri}
        onClose={() => {
          this.close();
          cb();
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
