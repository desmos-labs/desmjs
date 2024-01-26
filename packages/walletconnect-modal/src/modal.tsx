/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useMemo,
  useState,
} from "react";
import QRCode from "qrcode.react";
import { isAndroid, isMobile } from "./utils";

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
  };
  appButton?: {
    className?: string;
    style?: CSSProperties;
    text?: string;
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

  useEffect(() => {
    // Try opening the app without interaction.
    if (navigateToAppURL) {
      window.location.href = navigateToAppURL;
    }
  }, [navigateToAppURL]);

  return (
    <React.Fragment>
      <div
        className={uiOptions?.backdrop?.className}
        style={{
          ...(uiOptions?.backdrop?.disableDefaultStyle ? {} : styles.backdrop),
          ...uiOptions?.backdrop?.style,
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          onClose();
        }}
      >
        <div
          className={uiOptions?.modalContainer?.className}
          style={{
            ...(uiOptions?.modalContainer?.disableDefaultStyle
              ? {}
              : styles.modalContainer),
            ...uiOptions?.modalContainer?.style,
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {!checkMobile ? (
            <React.Fragment>
              <h3
                className={uiOptions?.modalHeader?.className}
                style={{
                  ...(uiOptions?.modalHeader?.disableDefaultStyle ? {} : {}),
                  ...uiOptions?.modalHeader?.style,
                }}
              >
                {uiOptions?.modalHeader?.text || "Scan QR Code"}
              </h3>
              <div
                className={uiOptions?.qrCodeContainer?.className}
                style={uiOptions?.qrCodeContainer?.style}
              >
                <QRCode size={uiOptions?.qrCodeSize || 500} value={uri} />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h3
                className={uiOptions?.modalHeader?.className}
                style={{
                  ...(uiOptions?.modalHeader?.disableDefaultStyle
                    ? {}
                    : styles.modalHeader),
                  ...uiOptions?.modalHeader?.style,
                }}
              >
                {uiOptions?.modalHeader?.text ?? "Open App"}
              </h3>
              <div
                className={uiOptions?.appButtonContainer?.className}
                style={uiOptions?.appButtonContainer?.style}
              >
                <button
                  className={uiOptions?.appButton?.className}
                  style={uiOptions?.appButton?.style}
                  onClick={() => {
                    if (navigateToAppURL) {
                      window.location.href = navigateToAppURL;
                    }
                  }}
                >
                  {uiOptions?.appButton?.text ?? "Open App"}
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
    backgroundColor: "#DDDDDD",
  },
  modalHeader: {
    fontSize: 20,
    margin: 0,
    marginBottom: 10,
  },
};

export default Modal;
