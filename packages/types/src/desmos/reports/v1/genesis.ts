/* eslint-disable */
import {
  Reason,
  ReasonAmino,
  Report,
  ReportAmino,
  Params,
  ParamsAmino,
} from "./models";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.reports.v1";
/** GenesisState defines the reports module's genesis state. */
export interface GenesisState {
  subspacesData: SubspaceDataEntry[];
  reasons: Reason[];
  reports: Report[];
  params?: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/desmos.reports.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the reports module's genesis state. */
export interface GenesisStateAmino {
  subspaces_data: SubspaceDataEntryAmino[];
  reasons: ReasonAmino[];
  reports: ReportAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/desmos.reports.v1.GenesisState";
  value: GenesisStateAmino;
}
/** SubspaceDataEntry contains the data related to a single subspace */
export interface SubspaceDataEntry {
  /** Id of the subspace to which the data relates */
  subspaceId: Long;
  /** Id of the next reason inside the subspace */
  reasonId: number;
  /** Id of the next report inside the subspace */
  reportId: Long;
}
export interface SubspaceDataEntryProtoMsg {
  typeUrl: "/desmos.reports.v1.SubspaceDataEntry";
  value: Uint8Array;
}
/** SubspaceDataEntry contains the data related to a single subspace */
export interface SubspaceDataEntryAmino {
  /** Id of the subspace to which the data relates */
  subspace_id: string;
  /** Id of the next reason inside the subspace */
  reason_id: number;
  /** Id of the next report inside the subspace */
  report_id: string;
}
export interface SubspaceDataEntryAminoMsg {
  type: "/desmos.reports.v1.SubspaceDataEntry";
  value: SubspaceDataEntryAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    subspacesData: [],
    reasons: [],
    reports: [],
    params: undefined,
  };
}
export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subspacesData) {
      SubspaceDataEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.reasons) {
      Reason.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspacesData.push(
            SubspaceDataEntry.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.reasons.push(Reason.decode(reader, reader.uint32()));
          break;
        case 3:
          message.reports.push(Report.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      subspacesData: Array.isArray(object?.subspacesData)
        ? object.subspacesData.map((e: any) => SubspaceDataEntry.fromJSON(e))
        : [],
      reasons: Array.isArray(object?.reasons)
        ? object.reasons.map((e: any) => Reason.fromJSON(e))
        : [],
      reports: Array.isArray(object?.reports)
        ? object.reports.map((e: any) => Report.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.subspacesData) {
      obj.subspacesData = message.subspacesData.map((e) =>
        e ? SubspaceDataEntry.toJSON(e) : undefined
      );
    } else {
      obj.subspacesData = [];
    }
    if (message.reasons) {
      obj.reasons = message.reasons.map((e) =>
        e ? Reason.toJSON(e) : undefined
      );
    } else {
      obj.reasons = [];
    }
    if (message.reports) {
      obj.reports = message.reports.map((e) =>
        e ? Report.toJSON(e) : undefined
      );
    } else {
      obj.reports = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.subspacesData =
      object.subspacesData?.map((e) => SubspaceDataEntry.fromPartial(e)) || [];
    message.reasons = object.reasons?.map((e) => Reason.fromPartial(e)) || [];
    message.reports = object.reports?.map((e) => Report.fromPartial(e)) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      subspacesData: Array.isArray(object?.subspaces_data)
        ? object.subspaces_data.map((e: any) => SubspaceDataEntry.fromAmino(e))
        : [],
      reasons: Array.isArray(object?.reasons)
        ? object.reasons.map((e: any) => Reason.fromAmino(e))
        : [],
      reports: Array.isArray(object?.reports)
        ? object.reports.map((e: any) => Report.fromAmino(e))
        : [],
      params: object?.params ? Params.fromAmino(object.params) : undefined,
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.subspacesData) {
      obj.subspaces_data = message.subspacesData.map((e) =>
        e ? SubspaceDataEntry.toAmino(e) : undefined
      );
    } else {
      obj.subspaces_data = [];
    }
    if (message.reasons) {
      obj.reasons = message.reasons.map((e) =>
        e ? Reason.toAmino(e) : undefined
      );
    } else {
      obj.reasons = [];
    }
    if (message.reports) {
      obj.reports = message.reports.map((e) =>
        e ? Report.toAmino(e) : undefined
      );
    } else {
      obj.reports = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.GenesisState",
      value: GenesisState.encode(message).finish(),
    };
  },
};
function createBaseSubspaceDataEntry(): SubspaceDataEntry {
  return {
    subspaceId: Long.UZERO,
    reasonId: 0,
    reportId: Long.UZERO,
  };
}
export const SubspaceDataEntry = {
  encode(
    message: SubspaceDataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.reasonId !== 0) {
      writer.uint32(16).uint32(message.reasonId);
    }
    if (!message.reportId.isZero()) {
      writer.uint32(24).uint64(message.reportId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SubspaceDataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubspaceDataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.reasonId = reader.uint32();
          break;
        case 3:
          message.reportId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubspaceDataEntry {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      reasonId: isSet(object.reasonId) ? Number(object.reasonId) : 0,
      reportId: isSet(object.reportId)
        ? Long.fromValue(object.reportId)
        : Long.UZERO,
    };
  },
  toJSON(message: SubspaceDataEntry): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.reasonId !== undefined &&
      (obj.reasonId = Math.round(message.reasonId));
    message.reportId !== undefined &&
      (obj.reportId = (message.reportId || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SubspaceDataEntry>, I>>(
    object: I
  ): SubspaceDataEntry {
    const message = createBaseSubspaceDataEntry();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.reasonId = object.reasonId ?? 0;
    message.reportId =
      object.reportId !== undefined && object.reportId !== null
        ? Long.fromValue(object.reportId)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: SubspaceDataEntryAmino): SubspaceDataEntry {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      reasonId: object.reason_id,
      reportId: Long.fromString(object.report_id),
    };
  },
  toAmino(message: SubspaceDataEntry): SubspaceDataEntryAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.reason_id = message.reasonId;
    obj.report_id = message.reportId ? message.reportId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SubspaceDataEntryAminoMsg): SubspaceDataEntry {
    return SubspaceDataEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: SubspaceDataEntryProtoMsg): SubspaceDataEntry {
    return SubspaceDataEntry.decode(message.value);
  },
  toProto(message: SubspaceDataEntry): Uint8Array {
    return SubspaceDataEntry.encode(message).finish();
  },
  toProtoMsg(message: SubspaceDataEntry): SubspaceDataEntryProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.SubspaceDataEntry",
      value: SubspaceDataEntry.encode(message).finish(),
    };
  },
};
