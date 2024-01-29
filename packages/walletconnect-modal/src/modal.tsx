/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {
  CSSProperties,
  FunctionComponent,
  useMemo,
  useState,
} from "react";
import QRCode from "qrcode.react";
import { isAndroid, isMobile, mergeStyles } from "./utils";

export type ModalUIOptions = {
  /**
   * Options to customize the modal backdrop.
   */
  backdrop?: {
    /**
     * Class that will be set to the backdrop.
     */
    className?: string;
    /**
     * Style to apply to the backdrop.
     */
    style?: CSSProperties;
    /**
     * If `true` disables the default backdrop style.
     */
    disableDefaultStyle?: boolean;
  };
  /**
   * Options to customize the popup container.
   */
  modalContainer?: {
    /**
     * Class that will be set to the modal container.
     */
    className?: string;
    /**
     * Style to apply to the modal container.
     */
    style?: CSSProperties;
    /**
     * If `true` disables the default modal container style.
     */
    disableDefaultStyle?: boolean;
  };
  /**
   * Options to customize the modal header.
   */
  modalHeader?: {
    /**
     * Class that will be set to the modal header.
     */
    className?: string;
    /**
     * Style to apply to the modal header.
     */
    style?: CSSProperties;
    /**
     * If `true` disables the default modal header style.
     */
    disableDefaultStyle?: boolean;
    /**
     * Text that will be displayed in the modal header.
     */
    text?: string;
  };
  /**
   * Options to customize the QR code container
   * that is displayed to desktop users.
   */
  qrCodeContainer?: {
    /**
     * Class that will be set to the QR code container.
     */
    className?: string;
    /**
     * Style to apply to the QR code container together with the default style.
     */
    style?: CSSProperties;
    /**
     * If `true` disables the default QR code container style.
     */
    disableDefaultStyle?: boolean;
  };
  /**
   * Options to customize the size of the QR code that is
   * displayed to desktop users.
   */
  qrCodeSize?: number;
  /**
   * Options to customize the container of the button to redirect the
   * user to the mobile app.
   * This container is only displayed to mobile users.
   */
  appButtonContainer?: {
    /**
     * CSS class that will be set to the app button container.
     */
    className?: string;
    /**
     * Style to apply to the app button container.
     */
    style?: CSSProperties;
    /**
     * If `true` disables the default app button container style.
     */
    disableDefaultStyle?: boolean;
  };
  /**
   * Options to customize the button to redirect the user to the mobile app.
   * This button is only displayed to mobile users.
   */
  appButton?: {
    /**
     * CSS class that will be set to the app button.
     */
    className?: string;
    /**
     * Style to apply to the app button.
     */
    style?: CSSProperties;
    /**
     * Text to display in the app button.
     */
    text?: string;
    /**
     * If `true` disables the default app button style.
     */
    disableDefaultStyle?: boolean;
  };
};

interface ModalProps {
  /**
   * Uri to start the WalletConnect session.
   */
  uri: string;
  /**
   * Callback called if the user closes the modal.
   */
  onClose: () => void;
  /**
   * Option to customize the modal.
   */
  uiOptions?: ModalUIOptions;
  /**
   * Custom function that the user can provide
   * to generate the url to open the app.
   */
  appUrlGenerator?: (uri: string, isAndroid: boolean) => string;
}

/**
 * Modal that allows a user to initiate a WalletConnect session through
 * DPM.
 * This modal will show a QR code that can be scanned from the DPM mobile app
 * by desktop users; otherwise, it will show a popup with a button to perform the login
 * through the DPM mobile app.
 */
const Modal: FunctionComponent<ModalProps> = ({
  uiOptions,
  uri,
  onClose,
  appUrlGenerator,
}) => {
  const [checkMobile] = useState(() => isMobile());
  const [checkAndroid] = useState(() => isAndroid());

  const navigateToAppURL = useMemo(() => {
    if (checkMobile) {
      if (checkAndroid) {
        return appUrlGenerator
          ? appUrlGenerator(uri, true)
          : `intent://wcV2?uri=${encodeURIComponent(uri)}&isMobile=true#Intent;package=network.desmos.dpm.debug;scheme=dpm;end;`;
      }
      return appUrlGenerator
        ? appUrlGenerator(uri, false)
        : `dpm://wcV2?uri=${encodeURIComponent(uri)}&isMobile=true`;
    }

    return undefined;
  }, [checkAndroid, checkMobile, uri]);

  return (
    <React.Fragment>
      <div
        className={uiOptions?.backdrop?.className}
        style={mergeStyles(
          styles.backdrop,
          uiOptions?.backdrop?.style,
          uiOptions?.backdrop?.disableDefaultStyle,
        )}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          onClose();
        }}
      >
        <div
          className={uiOptions?.modalContainer?.className}
          style={mergeStyles(
            styles.modalContainer,
            uiOptions?.modalContainer?.style,
            uiOptions?.modalContainer?.disableDefaultStyle,
          )}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {!checkMobile ? (
            /* Content displayed when the user is on desktop. */
            <React.Fragment>
              <h3
                className={uiOptions?.modalHeader?.className}
                style={mergeStyles(
                  styles.modalHeader,
                  uiOptions?.modalHeader?.style,
                  uiOptions?.modalHeader?.disableDefaultStyle,
                )}
              >
                {uiOptions?.modalHeader?.text || "Scan with DPM"}
              </h3>
              <div
                className={uiOptions?.qrCodeContainer?.className}
                style={mergeStyles(
                  styles.qrCodeContainer,
                  uiOptions?.qrCodeContainer?.style,
                  uiOptions?.qrCodeContainer?.disableDefaultStyle,
                )}
              >
                <QRCode size={uiOptions?.qrCodeSize || 500} value={uri} />
              </div>
            </React.Fragment>
          ) : (
            /* Content displayed when the user is on mobile. */
            <React.Fragment>
              <h3
                className={uiOptions?.modalHeader?.className}
                style={mergeStyles(
                  styles.modalHeader,
                  uiOptions?.modalHeader?.style,
                  uiOptions?.modalHeader?.disableDefaultStyle,
                )}
              >
                {uiOptions?.modalHeader?.text ?? "Login with DPM"}
              </h3>
              <div
                className={uiOptions?.appButtonContainer?.className}
                style={mergeStyles(
                  styles.appButtonContainer,
                  uiOptions?.appButtonContainer?.style,
                  uiOptions?.appButtonContainer?.disableDefaultStyle,
                )}
              >
                <button
                  className={uiOptions?.appButton?.className}
                  style={mergeStyles(
                    styles.appButton,
                    uiOptions?.appButton?.style,
                    uiOptions?.appButton?.disableDefaultStyle,
                  )}
                  onClick={() => {
                    if (navigateToAppURL) {
                      window.location.href = navigateToAppURL;
                    }
                  }}
                >
                  {uiOptions?.appButton?.text ?? "Open DPM"}
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

const styles: Record<string, CSSProperties> = {
  backdrop: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fdfdfe",
  },
  modalHeader: {
    fontSize: 20,
    margin: 0,
    marginBottom: 10,
    color: "#ff6c3e",
  },
  qrCodeContainer: {},
  appButtonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  appButton: {
    margin: 0,
    padding: 0,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#ff6c3e",
    color: "#fdfdfe",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#ff6c3e",
  },
};

export default Modal;
