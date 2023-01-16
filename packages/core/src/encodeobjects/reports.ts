import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgAddReason,
  MsgCreateReport,
  MsgDeleteReport,
  MsgRemoveReason,
  MsgSupportStandardReason,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/msgs";
import {
  MsgAddReasonTypeUrl,
  MsgCreateReportTypeUrl,
  MsgDeleteReportTypeUrl,
  MsgRemoveReasonTypeUrl,
  MsgSupportStandardReasonTypeUrl,
} from "../const";

export interface MsgCreateReportEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgCreateReportTypeUrl;
  readonly value: MsgCreateReport;
}

export function isMsgCreateReportEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreateReportEncodeObject {
  return (
    (encodeObject as MsgCreateReportEncodeObject).typeUrl ===
    MsgCreateReportTypeUrl
  );
}

export interface MsgDeleteReportEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgDeleteReportTypeUrl;
  readonly value: MsgDeleteReport;
}

export function isMsgDeleteReportEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteReportEncodeObject {
  return (
    (encodeObject as MsgDeleteReportEncodeObject).typeUrl ===
    MsgDeleteReportTypeUrl
  );
}

export interface MsgSupportStandardReasonEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgSupportStandardReasonTypeUrl;
  readonly value: MsgSupportStandardReason;
}

export function isMsgSupportStandardReasonEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgSupportStandardReasonEncodeObject {
  return (
    (encodeObject as MsgSupportStandardReasonEncodeObject).typeUrl ===
    MsgSupportStandardReasonTypeUrl
  );
}

export interface MsgAddReasonEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgAddReasonTypeUrl;
  readonly value: MsgAddReason;
}

export function isMsgAddReasonEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAddReasonEncodeObject {
  return (
    (encodeObject as MsgAddReasonEncodeObject).typeUrl === MsgAddReasonTypeUrl
  );
}

export interface MsgRemoveReasonEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgRemoveReasonTypeUrl;
  readonly value: MsgRemoveReason;
}

export function isMsgRemoveReasonEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgRemoveReasonEncodeObject {
  return (
    (encodeObject as MsgRemoveReasonEncodeObject).typeUrl ===
    MsgRemoveReasonTypeUrl
  );
}
