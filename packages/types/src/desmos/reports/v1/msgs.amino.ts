/* eslint-disable */
import {
  MsgCreateReport,
  MsgDeleteReport,
  MsgSupportStandardReason,
  MsgAddReason,
  MsgRemoveReason,
  MsgUpdateParams,
} from "./msgs";
export const AminoConverter = {
  "/desmos.reports.v1.MsgCreateReport": {
    aminoType: "desmos/MsgCreateReport",
    toAmino: MsgCreateReport.toAmino,
    fromAmino: MsgCreateReport.fromAmino,
  },
  "/desmos.reports.v1.MsgDeleteReport": {
    aminoType: "desmos/MsgDeleteReport",
    toAmino: MsgDeleteReport.toAmino,
    fromAmino: MsgDeleteReport.fromAmino,
  },
  "/desmos.reports.v1.MsgSupportStandardReason": {
    aminoType: "desmos/MsgSupportStandardReason",
    toAmino: MsgSupportStandardReason.toAmino,
    fromAmino: MsgSupportStandardReason.fromAmino,
  },
  "/desmos.reports.v1.MsgAddReason": {
    aminoType: "desmos/MsgAddReason",
    toAmino: MsgAddReason.toAmino,
    fromAmino: MsgAddReason.fromAmino,
  },
  "/desmos.reports.v1.MsgRemoveReason": {
    aminoType: "desmos/MsgRemoveReason",
    toAmino: MsgRemoveReason.toAmino,
    fromAmino: MsgRemoveReason.fromAmino,
  },
  "/desmos.reports.v1.MsgUpdateParams": {
    aminoType: "desmos/x/reports/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
};
