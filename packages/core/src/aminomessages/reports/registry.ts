import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgAddReason,
  MsgCreateReport,
  MsgDeleteReport,
  MsgRemoveReason,
  MsgSupportStandardReason,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/msgs";

export const reportsRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.reports.v1.MsgCreateReport", MsgCreateReport],
  ["/desmos.reports.v1.MsgDeleteReport", MsgDeleteReport],
  [
    "/desmos.reports.v1.MsgSupportStandardReason",
    MsgSupportStandardReason,
  ],
  ["/desmos.reports.v1.MsgAddReason", MsgAddReason],
  ["/desmos.reports.v1.MsgRemoveReason", MsgRemoveReason],
];

export default reportsRegistryTypes;
