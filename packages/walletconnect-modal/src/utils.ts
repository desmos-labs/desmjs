import {
  detect,
  BrowserInfo,
  BotInfo,
  NodeInfo,
  SearchBotDeviceInfo,
  ReactNativeInfo,
} from "detect-browser";
import { CSSProperties } from "react";

function detectEnv(
  userAgent?: string,
):
  | BrowserInfo
  | BotInfo
  | NodeInfo
  | SearchBotDeviceInfo
  | ReactNativeInfo
  | null {
  return detect(userAgent);
}

function detectOS() {
  const env = detectEnv();
  return env && env.os ? env.os : undefined;
}

/**
 * Utility function to detect if the current device is an Android device.
 */
export function isAndroid(): boolean {
  const os = detectOS();
  return os ? os.toLowerCase().includes("android") : false;
}

/**
 * Utility function to detect if the current device is an iOS device.
 */
function isIOS(): boolean {
  const os = detectOS();
  return os
    ? os.toLowerCase().includes("ios") ||
        (os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
    : false;
}

/**
 * Utility function to detect if the current device is a mobile device.
 */
export function isMobile(): boolean {
  const os = detectOS();
  return os ? isAndroid() || isIOS() : false;
}

/**
 * Utility function that merges a default style with a custom one.
 * @param defaultStyle - The default style.
 * @param customStyle - The custom style.
 * @param disableDefaultStyle - Whether to disable the default style.
 */
export function mergeStyles(
  defaultStyle: CSSProperties,
  customStyle?: CSSProperties,
  disableDefaultStyle?: boolean,
) {
  return { ...(disableDefaultStyle ? {} : defaultStyle), ...customStyle };
}
