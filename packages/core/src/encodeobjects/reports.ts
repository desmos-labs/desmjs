import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgAddReason,
  MsgCreateReport,
  MsgDeleteReport,
  MsgRemoveReason,
  MsgSupportStandardReason,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/msgs";

export interface MsgCreateReportEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.MsgCreateReport";
  readonly value: MsgCreateReport;
}

export function isMsgCreateReportEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreateReportEncodeObject {
  return (
    (encodeObject as MsgCreateReportEncodeObject).typeUrl ===
    "/desmos.reports.v1.MsgCreateReport"
  );
}

export interface MsgDeleteReportEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.MsgDeleteReport";
  readonly value: MsgDeleteReport;
}

export function isMsgDeleteReportEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteReportEncodeObject {
  return (
    (encodeObject as MsgDeleteReportEncodeObject).typeUrl ===
    "/desmos.reports.v1.MsgDeleteReport"
  );
}

export interface MsgSupportStandardReasonEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.MsgSupportStandardReason";
  readonly value: MsgSupportStandardReason;
}

export function isMsgSupportStandardReasonEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgSupportStandardReasonEncodeObject {
  return (
    (encodeObject as MsgSupportStandardReasonEncodeObject).typeUrl ===
    "/desmos.reports.v1.MsgSupportStandardReason"
  );
}

export interface MsgAddReasonEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.MsgAddReason";
  readonly value: MsgAddReason;
}

export function isMsgAddReasonEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAddReasonEncodeObject {
  return (
    (encodeObject as MsgAddReasonEncodeObject).typeUrl ===
    "/desmos.reports.v1.MsgAddReason"
  );
}

export interface MsgRemoveReasonEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.MsgRemoveReason";
  readonly value: MsgRemoveReason;
}

export function isMsgRemoveReasonEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgRemoveReasonEncodeObject {
  return (
    (encodeObject as MsgRemoveReasonEncodeObject).typeUrl ===
    "/desmos.reports.v1.MsgRemoveReason"
  );
}
