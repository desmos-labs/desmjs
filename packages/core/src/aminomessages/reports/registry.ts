import { GeneratedType } from "@cosmjs/proto-signing";
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
} from "../../const";

export const reportsRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  [MsgCreateReportTypeUrl, MsgCreateReport],
  [MsgDeleteReportTypeUrl, MsgDeleteReport],
  [MsgSupportStandardReasonTypeUrl, MsgSupportStandardReason],
  [MsgAddReasonTypeUrl, MsgAddReason],
  [MsgRemoveReasonTypeUrl, MsgRemoveReason],
];

export default reportsRegistryTypes;
