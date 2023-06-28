/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgCreateReport,
  MsgDeleteReport,
  MsgSupportStandardReason,
  MsgAddReason,
  MsgRemoveReason,
  MsgUpdateParams,
} from "./msgs";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.reports.v1.MsgCreateReport", MsgCreateReport],
  ["/desmos.reports.v1.MsgDeleteReport", MsgDeleteReport],
  ["/desmos.reports.v1.MsgSupportStandardReason", MsgSupportStandardReason],
  ["/desmos.reports.v1.MsgAddReason", MsgAddReason],
  ["/desmos.reports.v1.MsgRemoveReason", MsgRemoveReason],
  ["/desmos.reports.v1.MsgUpdateParams", MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createReport(value: MsgCreateReport) {
      return {
        typeUrl: "/desmos.reports.v1.MsgCreateReport",
        value: MsgCreateReport.encode(value).finish(),
      };
    },
    deleteReport(value: MsgDeleteReport) {
      return {
        typeUrl: "/desmos.reports.v1.MsgDeleteReport",
        value: MsgDeleteReport.encode(value).finish(),
      };
    },
    supportStandardReason(value: MsgSupportStandardReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgSupportStandardReason",
        value: MsgSupportStandardReason.encode(value).finish(),
      };
    },
    addReason(value: MsgAddReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgAddReason",
        value: MsgAddReason.encode(value).finish(),
      };
    },
    removeReason(value: MsgRemoveReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgRemoveReason",
        value: MsgRemoveReason.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.reports.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    createReport(value: MsgCreateReport) {
      return {
        typeUrl: "/desmos.reports.v1.MsgCreateReport",
        value,
      };
    },
    deleteReport(value: MsgDeleteReport) {
      return {
        typeUrl: "/desmos.reports.v1.MsgDeleteReport",
        value,
      };
    },
    supportStandardReason(value: MsgSupportStandardReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgSupportStandardReason",
        value,
      };
    },
    addReason(value: MsgAddReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgAddReason",
        value,
      };
    },
    removeReason(value: MsgRemoveReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgRemoveReason",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.reports.v1.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    createReport(value: MsgCreateReport) {
      return {
        typeUrl: "/desmos.reports.v1.MsgCreateReport",
        value: MsgCreateReport.toJSON(value),
      };
    },
    deleteReport(value: MsgDeleteReport) {
      return {
        typeUrl: "/desmos.reports.v1.MsgDeleteReport",
        value: MsgDeleteReport.toJSON(value),
      };
    },
    supportStandardReason(value: MsgSupportStandardReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgSupportStandardReason",
        value: MsgSupportStandardReason.toJSON(value),
      };
    },
    addReason(value: MsgAddReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgAddReason",
        value: MsgAddReason.toJSON(value),
      };
    },
    removeReason(value: MsgRemoveReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgRemoveReason",
        value: MsgRemoveReason.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.reports.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    createReport(value: any) {
      return {
        typeUrl: "/desmos.reports.v1.MsgCreateReport",
        value: MsgCreateReport.fromJSON(value),
      };
    },
    deleteReport(value: any) {
      return {
        typeUrl: "/desmos.reports.v1.MsgDeleteReport",
        value: MsgDeleteReport.fromJSON(value),
      };
    },
    supportStandardReason(value: any) {
      return {
        typeUrl: "/desmos.reports.v1.MsgSupportStandardReason",
        value: MsgSupportStandardReason.fromJSON(value),
      };
    },
    addReason(value: any) {
      return {
        typeUrl: "/desmos.reports.v1.MsgAddReason",
        value: MsgAddReason.fromJSON(value),
      };
    },
    removeReason(value: any) {
      return {
        typeUrl: "/desmos.reports.v1.MsgRemoveReason",
        value: MsgRemoveReason.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/desmos.reports.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    createReport(value: MsgCreateReport) {
      return {
        typeUrl: "/desmos.reports.v1.MsgCreateReport",
        value: MsgCreateReport.fromPartial(value),
      };
    },
    deleteReport(value: MsgDeleteReport) {
      return {
        typeUrl: "/desmos.reports.v1.MsgDeleteReport",
        value: MsgDeleteReport.fromPartial(value),
      };
    },
    supportStandardReason(value: MsgSupportStandardReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgSupportStandardReason",
        value: MsgSupportStandardReason.fromPartial(value),
      };
    },
    addReason(value: MsgAddReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgAddReason",
        value: MsgAddReason.fromPartial(value),
      };
    },
    removeReason(value: MsgRemoveReason) {
      return {
        typeUrl: "/desmos.reports.v1.MsgRemoveReason",
        value: MsgRemoveReason.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.reports.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
