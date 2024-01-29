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
  backdrop?: {
    className?: string;
    style?: CSSProperties;
    disableDefaultStyle?: boolean;
  };
  modalContainer?: {
    className?: string;
    style?: CSSProperties;
    disableDefaultStyle?: boolean;
  };
  modalHeader?: {
    className?: string;
    style?: CSSProperties;
    disableDefaultStyle?: boolean;
    text?: string;
  };
  qrCodeContainer?: {
    className?: string;
    style?: CSSProperties;
  };
  qrCodeSize?: number;
  appButtonContainer?: {
    className?: string;
    style?: CSSProperties;
    disableDefaultStyle?: boolean;
  };
  appButton?: {
    className?: string;
    style?: CSSProperties;
    text?: string;
    disableDefaultStyle?: boolean;
  };
};

interface ModalProps {
  /**
   * Uri that will be displayed.
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
                style={
                  uiOptions?.qrCodeContainer?.style ?? styles.buttonContainer
                }
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
