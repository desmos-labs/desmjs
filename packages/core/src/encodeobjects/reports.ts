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
  readonly value: Partial<MsgCreateReport>;
}

export interface MsgMsgDeleteReportEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.AminoMsgDeleteReport";
  readonly value: Partial<MsgDeleteReport>;
}

export interface MsgMsgSupportStandardReasonEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.AminoMsgSupportStandardReason";
  readonly value: Partial<MsgSupportStandardReason>;
}

export interface MsgMsgAddReasonEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.AminoMsgAddReason";
  readonly value: Partial<MsgAddReason>;
}

export interface MsgMsgRemoveReasonEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reports.v1.AminoMsgRemoveReason";
  readonly value: Partial<MsgRemoveReason>;
}
