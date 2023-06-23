/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { Params } from "./models";
import { Timestamp } from "../../../google/protobuf/timestamp";
import {
  Long,
  isSet,
  DeepPartial,
  Exact,
  fromJsonTimestamp,
  fromTimestamp,
} from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.reports.v1";
/** MsgCreateReport represents the message to be used to create a report */
export interface MsgCreateReport {
  /** Id of the subspace for which the report should be stored */
  subspaceId: Long;
  /** Id of the reason this report has been created for */
  reasonsIds: number[];
  /** (optional) Message attached to this report */
  message: string;
  /** Address of the reporter */
  reporter: string;
  /** Target of the report */
  target?: Any;
}
/** MsgCreateReportResponse represents the Msg/CreateReport response type */
export interface MsgCreateReportResponse {
  /** Id of the newly created report */
  reportId: Long;
  /** Time in which the report was created */
  creationDate?: Timestamp;
}
/** MsgDeleteReport represents the message to be used when deleting a report */
export interface MsgDeleteReport {
  /** Id of the subspace that contains the report to be deleted */
  subspaceId: Long;
  /** Id of the report to be deleted */
  reportId: Long;
  /** Address of the user deleting the report */
  signer: string;
}
/** MsgDeleteReportResponse represents the Msg/DeleteReport response type */
export interface MsgDeleteReportResponse {}
/**
 * MsgSupportStandardReason represents the message to be used when wanting to
 * support one reason from the module params
 */
export interface MsgSupportStandardReason {
  /** Id of the subspace for which to support the reason */
  subspaceId: Long;
  /** Id of the reason that should be supported */
  standardReasonId: number;
  /** Address of the user signing the message */
  signer: string;
}
/**
 * MsgSupportStandardReasonResponse represents the Msg/SupportStandardReason
 * response type
 */
export interface MsgSupportStandardReasonResponse {
  /** Id of the newly added reason */
  reasonsIds: number;
}
/**
 * MsgAddReason represents the message to be used when adding a new supported
 * reason
 */
export interface MsgAddReason {
  /** Id of the subspace for which to add the reason */
  subspaceId: Long;
  /** Title of the reason */
  title: string;
  /** (optional) Extended description of the reason and the cases it applies to */
  description: string;
  /** Address of the user adding the supported reason */
  signer: string;
}
/** MsgAddReasonResponse represents the Msg/AddReason response type */
export interface MsgAddReasonResponse {
  /** Id of the newly supported reason */
  reasonId: number;
}
/**
 * MsgRemoveReason represents the message to be used when removing an exiting
 * reporting reason
 */
export interface MsgRemoveReason {
  /** Id of the subspace from which to remove the reason */
  subspaceId: Long;
  /** Id of the reason to be deleted */
  reasonId: number;
  /** Address of the user adding the supported reason */
  signer: string;
}
/** MsgRemoveReasonResponse represents the Msg/RemoveReason response type */
export interface MsgRemoveReasonResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: Desmos 5.0.0
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: Desmos 5.0.0
 */
export interface MsgUpdateParamsResponse {}
function createBaseMsgCreateReport(): MsgCreateReport {
  return {
    subspaceId: Long.UZERO,
    reasonsIds: [],
    message: "",
    reporter: "",
    target: undefined,
  };
}
export const MsgCreateReport = {
  encode(
    message: MsgCreateReport,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    writer.uint32(18).fork();
    for (const v of message.reasonsIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.reporter !== "") {
      writer.uint32(34).string(message.reporter);
    }
    if (message.target !== undefined) {
      Any.encode(message.target, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.reasonsIds.push(reader.uint32());
            }
          } else {
            message.reasonsIds.push(reader.uint32());
          }
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.reporter = reader.string();
          break;
        case 5:
          message.target = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateReport {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      reasonsIds: Array.isArray(object?.reasonsIds)
        ? object.reasonsIds.map((e: any) => Number(e))
        : [],
      message: isSet(object.message) ? String(object.message) : "",
      reporter: isSet(object.reporter) ? String(object.reporter) : "",
      target: isSet(object.target) ? Any.fromJSON(object.target) : undefined,
    };
  },
  toJSON(message: MsgCreateReport): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    if (message.reasonsIds) {
      obj.reasonsIds = message.reasonsIds.map((e) => Math.round(e));
    } else {
      obj.reasonsIds = [];
    }
    message.message !== undefined && (obj.message = message.message);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    message.target !== undefined &&
      (obj.target = message.target ? Any.toJSON(message.target) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateReport>, I>>(
    object: I
  ): MsgCreateReport {
    const message = createBaseMsgCreateReport();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.reasonsIds = object.reasonsIds?.map((e) => e) || [];
    message.message = object.message ?? "";
    message.reporter = object.reporter ?? "";
    message.target =
      object.target !== undefined && object.target !== null
        ? Any.fromPartial(object.target)
        : undefined;
    return message;
  },
};
function createBaseMsgCreateReportResponse(): MsgCreateReportResponse {
  return {
    reportId: Long.UZERO,
    creationDate: undefined,
  };
}
export const MsgCreateReportResponse = {
  encode(
    message: MsgCreateReportResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.reportId.isZero()) {
      writer.uint32(8).uint64(message.reportId);
    }
    if (message.creationDate !== undefined) {
      Timestamp.encode(message.creationDate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reportId = reader.uint64() as Long;
          break;
        case 2:
          message.creationDate = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateReportResponse {
    return {
      reportId: isSet(object.reportId)
        ? Long.fromValue(object.reportId)
        : Long.UZERO,
      creationDate: isSet(object.creationDate)
        ? fromJsonTimestamp(object.creationDate)
        : undefined,
    };
  },
  toJSON(message: MsgCreateReportResponse): unknown {
    const obj: any = {};
    message.reportId !== undefined &&
      (obj.reportId = (message.reportId || Long.UZERO).toString());
    message.creationDate !== undefined &&
      (obj.creationDate = fromTimestamp(message.creationDate).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateReportResponse>, I>>(
    object: I
  ): MsgCreateReportResponse {
    const message = createBaseMsgCreateReportResponse();
    message.reportId =
      object.reportId !== undefined && object.reportId !== null
        ? Long.fromValue(object.reportId)
        : Long.UZERO;
    message.creationDate =
      object.creationDate !== undefined && object.creationDate !== null
        ? Timestamp.fromPartial(object.creationDate)
        : undefined;
    return message;
  },
};
function createBaseMsgDeleteReport(): MsgDeleteReport {
  return {
    subspaceId: Long.UZERO,
    reportId: Long.UZERO,
    signer: "",
  };
}
export const MsgDeleteReport = {
  encode(
    message: MsgDeleteReport,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.reportId.isZero()) {
      writer.uint32(16).uint64(message.reportId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.reportId = reader.uint64() as Long;
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteReport {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      reportId: isSet(object.reportId)
        ? Long.fromValue(object.reportId)
        : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgDeleteReport): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.reportId !== undefined &&
      (obj.reportId = (message.reportId || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteReport>, I>>(
    object: I
  ): MsgDeleteReport {
    const message = createBaseMsgDeleteReport();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.reportId =
      object.reportId !== undefined && object.reportId !== null
        ? Long.fromValue(object.reportId)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgDeleteReportResponse(): MsgDeleteReportResponse {
  return {};
}
export const MsgDeleteReportResponse = {
  encode(
    _: MsgDeleteReportResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteReportResponse {
    return {};
  },
  toJSON(_: MsgDeleteReportResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteReportResponse>, I>>(
    _: I
  ): MsgDeleteReportResponse {
    const message = createBaseMsgDeleteReportResponse();
    return message;
  },
};
function createBaseMsgSupportStandardReason(): MsgSupportStandardReason {
  return {
    subspaceId: Long.UZERO,
    standardReasonId: 0,
    signer: "",
  };
}
export const MsgSupportStandardReason = {
  encode(
    message: MsgSupportStandardReason,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.standardReasonId !== 0) {
      writer.uint32(16).uint32(message.standardReasonId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSupportStandardReason {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSupportStandardReason();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.standardReasonId = reader.uint32();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSupportStandardReason {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      standardReasonId: isSet(object.standardReasonId)
        ? Number(object.standardReasonId)
        : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgSupportStandardReason): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.standardReasonId !== undefined &&
      (obj.standardReasonId = Math.round(message.standardReasonId));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSupportStandardReason>, I>>(
    object: I
  ): MsgSupportStandardReason {
    const message = createBaseMsgSupportStandardReason();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.standardReasonId = object.standardReasonId ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgSupportStandardReasonResponse(): MsgSupportStandardReasonResponse {
  return {
    reasonsIds: 0,
  };
}
export const MsgSupportStandardReasonResponse = {
  encode(
    message: MsgSupportStandardReasonResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reasonsIds !== 0) {
      writer.uint32(8).uint32(message.reasonsIds);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSupportStandardReasonResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSupportStandardReasonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reasonsIds = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSupportStandardReasonResponse {
    return {
      reasonsIds: isSet(object.reasonsIds) ? Number(object.reasonsIds) : 0,
    };
  },
  toJSON(message: MsgSupportStandardReasonResponse): unknown {
    const obj: any = {};
    message.reasonsIds !== undefined &&
      (obj.reasonsIds = Math.round(message.reasonsIds));
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgSupportStandardReasonResponse>, I>
  >(object: I): MsgSupportStandardReasonResponse {
    const message = createBaseMsgSupportStandardReasonResponse();
    message.reasonsIds = object.reasonsIds ?? 0;
    return message;
  },
};
function createBaseMsgAddReason(): MsgAddReason {
  return {
    subspaceId: Long.UZERO,
    title: "",
    description: "",
    signer: "",
  };
}
export const MsgAddReason = {
  encode(
    message: MsgAddReason,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddReason {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddReason();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddReason {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgAddReason): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddReason>, I>>(
    object: I
  ): MsgAddReason {
    const message = createBaseMsgAddReason();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgAddReasonResponse(): MsgAddReasonResponse {
  return {
    reasonId: 0,
  };
}
export const MsgAddReasonResponse = {
  encode(
    message: MsgAddReasonResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reasonId !== 0) {
      writer.uint32(8).uint32(message.reasonId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddReasonResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddReasonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reasonId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddReasonResponse {
    return {
      reasonId: isSet(object.reasonId) ? Number(object.reasonId) : 0,
    };
  },
  toJSON(message: MsgAddReasonResponse): unknown {
    const obj: any = {};
    message.reasonId !== undefined &&
      (obj.reasonId = Math.round(message.reasonId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddReasonResponse>, I>>(
    object: I
  ): MsgAddReasonResponse {
    const message = createBaseMsgAddReasonResponse();
    message.reasonId = object.reasonId ?? 0;
    return message;
  },
};
function createBaseMsgRemoveReason(): MsgRemoveReason {
  return {
    subspaceId: Long.UZERO,
    reasonId: 0,
    signer: "",
  };
}
export const MsgRemoveReason = {
  encode(
    message: MsgRemoveReason,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.reasonId !== 0) {
      writer.uint32(16).uint32(message.reasonId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveReason {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveReason();
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
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveReason {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      reasonId: isSet(object.reasonId) ? Number(object.reasonId) : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgRemoveReason): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.reasonId !== undefined &&
      (obj.reasonId = Math.round(message.reasonId));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveReason>, I>>(
    object: I
  ): MsgRemoveReason {
    const message = createBaseMsgRemoveReason();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.reasonId = object.reasonId ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgRemoveReasonResponse(): MsgRemoveReasonResponse {
  return {};
}
export const MsgRemoveReasonResponse = {
  encode(
    _: MsgRemoveReasonResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveReasonResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveReasonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRemoveReasonResponse {
    return {};
  },
  toJSON(_: MsgRemoveReasonResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveReasonResponse>, I>>(
    _: I
  ): MsgRemoveReasonResponse {
    const message = createBaseMsgRemoveReasonResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined,
  };
}
export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    _: I
  ): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
