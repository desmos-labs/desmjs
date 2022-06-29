import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgAddReason,
  MsgCreateReport,
  MsgDeleteReport,
  MsgRemoveReason,
  MsgSupportStandardReason,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/msgs";

export const reportsRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.reports.v1.AminoMsgCreateReport", MsgCreateReport],
  ["/desmos.reports.v1.AminoMsgDeleteReport", MsgDeleteReport],
  [
    "/desmos.reports.v1.AminoMsgSupportStandardReason",
    MsgSupportStandardReason,
  ],
  ["/desmos.reports.v1.AminoMsgAddReason", MsgAddReason],
  ["/desmos.reports.v1.AminoMsgRemoveReason", MsgRemoveReason],
];

export default reportsRegistryTypes;
