import React from "react";
import ReactDom from "react-dom";
import Modal, { ModalUIOptions } from "./modal";

export interface DPMWalletConnectModalOptions {
  /**
   * Option to customize the modal.
   */
  readonly uiOptions?: ModalUIOptions;
  /**
   * Option to customize the URL that is generated to trigger the
   * mobile app open when the user visit the site trough a mobile device.
   */
  readonly appUrlGenerator?: (uri: string, isMobile: boolean) => string;
}

export default class DPMWalletConnectModal {
  private readonly options: DPMWalletConnectModalOptions | undefined;

  /**
   * Constructor for the DPMWalletConnectModal.
   * @param options - Options to customize the DPMWalletConnectModal.
   */
  constructor(options?: DPMWalletConnectModalOptions) {
    this.options = options;
  }

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
        uiOptions={this.options?.uiOptions}
        appUrlGenerator={this.options?.appUrlGenerator}
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
