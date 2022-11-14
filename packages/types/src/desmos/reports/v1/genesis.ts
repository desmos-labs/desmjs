/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params, Reason, Report } from "./models";

/** GenesisState defines the reports module's genesis state. */
export interface GenesisState {
  subspacesData: SubspaceDataEntry[];
  reasons: Reason[];
  reports: Report[];
  params?: Params;
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

function createBaseGenesisState(): GenesisState {
  return { subspacesData: [], reasons: [], reports: [], params: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
          message.subspacesData.push(SubspaceDataEntry.decode(reader, reader.uint32()));
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
      reasons: Array.isArray(object?.reasons) ? object.reasons.map((e: any) => Reason.fromJSON(e)) : [],
      reports: Array.isArray(object?.reports) ? object.reports.map((e: any) => Report.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.subspacesData) {
      obj.subspacesData = message.subspacesData.map((e) => e ? SubspaceDataEntry.toJSON(e) : undefined);
    } else {
      obj.subspacesData = [];
    }
    if (message.reasons) {
      obj.reasons = message.reasons.map((e) => e ? Reason.toJSON(e) : undefined);
    } else {
      obj.reasons = [];
    }
    if (message.reports) {
      obj.reports = message.reports.map((e) => e ? Report.toJSON(e) : undefined);
    } else {
      obj.reports = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.subspacesData = object.subspacesData?.map((e) => SubspaceDataEntry.fromPartial(e)) || [];
    message.reasons = object.reasons?.map((e) => Reason.fromPartial(e)) || [];
    message.reports = object.reports?.map((e) => Report.fromPartial(e)) || [];
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseSubspaceDataEntry(): SubspaceDataEntry {
  return { subspaceId: Long.UZERO, reasonId: 0, reportId: Long.UZERO };
}

export const SubspaceDataEntry = {
  encode(message: SubspaceDataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      subspaceId: isSet(object.subspaceId) ? Long.fromValue(object.subspaceId) : Long.UZERO,
      reasonId: isSet(object.reasonId) ? Number(object.reasonId) : 0,
      reportId: isSet(object.reportId) ? Long.fromValue(object.reportId) : Long.UZERO,
    };
  },

  toJSON(message: SubspaceDataEntry): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.reasonId !== undefined && (obj.reasonId = Math.round(message.reasonId));
    message.reportId !== undefined && (obj.reportId = (message.reportId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubspaceDataEntry>, I>>(object: I): SubspaceDataEntry {
    const message = createBaseSubspaceDataEntry();
    message.subspaceId = (object.subspaceId !== undefined && object.subspaceId !== null)
      ? Long.fromValue(object.subspaceId)
      : Long.UZERO;
    message.reasonId = object.reasonId ?? 0;
    message.reportId = (object.reportId !== undefined && object.reportId !== null)
      ? Long.fromValue(object.reportId)
      : Long.UZERO;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
