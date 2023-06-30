import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgAddReason,
  MsgCreateReport,
  MsgDeleteReport,
  MsgRemoveReason,
  MsgSupportStandardReason,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/msgs";
import {
  PostTarget,
  UserTarget,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/models";
import {
  MsgAddReasonTypeUrl,
  MsgCreateReportTypeUrl,
  MsgDeleteReportTypeUrl,
  MsgRemoveReasonTypeUrl,
  MsgSupportStandardReasonTypeUrl,
  PostTargetTypeUrl,
  UserTargetTypeUrl,
} from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  [UserTargetTypeUrl, UserTarget],
  [PostTargetTypeUrl, PostTarget],

  [MsgCreateReportTypeUrl, MsgCreateReport],
  [MsgDeleteReportTypeUrl, MsgDeleteReport],
  [MsgSupportStandardReasonTypeUrl, MsgSupportStandardReason],
  [MsgAddReasonTypeUrl, MsgAddReason],
  [MsgRemoveReasonTypeUrl, MsgRemoveReason],
];
