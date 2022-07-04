import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgAddReason,
  MsgCreateReport,
  MsgDeleteReport,
  MsgRemoveReason,
  MsgSupportStandardReason,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/msgs";

export interface MsgMsgCreateReportEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.AminoMsgCreateReport";
  readonly value: MsgCreateReport;
}

export function isMsgMsgCreateReportEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgMsgCreateReportEncodeObject {
  return (
    (encodeObject as MsgMsgCreateReportEncodeObject).typeUrl ===
    "/desmos.reports.v1.AminoMsgCreateReport"
  );
}

export interface MsgMsgDeleteReportEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.AminoMsgDeleteReport";
  readonly value: MsgDeleteReport;
}

export function isMsgMsgDeleteReportEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgMsgDeleteReportEncodeObject {
  return (
    (encodeObject as MsgMsgDeleteReportEncodeObject).typeUrl ===
    "/desmos.reports.v1.AminoMsgDeleteReport"
  );
}

export interface MsgMsgSupportStandardReasonEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.AminoMsgSupportStandardReason";
  readonly value: MsgSupportStandardReason;
}

export function isMsgMsgSupportStandardReasonEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgMsgSupportStandardReasonEncodeObject {
  return (
    (encodeObject as MsgMsgSupportStandardReasonEncodeObject).typeUrl ===
    "/desmos.reports.v1.AminoMsgSupportStandardReason"
  );
}

export interface MsgMsgAddReasonEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.AminoMsgAddReason";
  readonly value: MsgAddReason;
}

export function isMsgMsgAddReasonEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgMsgAddReasonEncodeObject {
  return (
    (encodeObject as MsgMsgAddReasonEncodeObject).typeUrl ===
    "/desmos.reports.v1.AminoMsgAddReason"
  );
}

export interface MsgMsgRemoveReasonEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.AminoMsgRemoveReason";
  readonly value: MsgRemoveReason;
}

export function isMsgMsgRemoveReasonEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgMsgRemoveReasonEncodeObject {
  return (
    (encodeObject as MsgMsgRemoveReasonEncodeObject).typeUrl ===
    "/desmos.reports.v1.AminoMsgRemoveReason"
  );
}
