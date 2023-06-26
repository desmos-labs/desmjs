/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Timestamp, TimestampAmino } from "../../../google/protobuf/timestamp";
import {
  Long,
  isSet,
  fromJsonTimestamp,
  fromTimestamp,
  DeepPartial,
  Exact,
} from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.reports.v1";
/** Report contains the data of a generic report */
export interface Report {
  /** Id of the subspace for which the report has been created */
  subspaceId: Long;
  /** Id of the report */
  id: Long;
  /** Id of the reason this report has been created for */
  reasonsIds: number[];
  /** (optional) Message attached to this report */
  message: string;
  /** Address of the reporter */
  reporter: string;
  /** Target of the report */
  target?: Any;
  /** Time in which the report was created */
  creationDate?: Timestamp;
}
export interface ReportProtoMsg {
  typeUrl: "/desmos.reports.v1.Report";
  value: Uint8Array;
}
/** Report contains the data of a generic report */
export interface ReportAmino {
  /** Id of the subspace for which the report has been created */
  subspace_id: string;
  /** Id of the report */
  id: string;
  /** Id of the reason this report has been created for */
  reasons_ids: number[];
  /** (optional) Message attached to this report */
  message: string;
  /** Address of the reporter */
  reporter: string;
  /** Target of the report */
  target?: AnyAmino;
  /** Time in which the report was created */
  creation_date?: TimestampAmino;
}
export interface ReportAminoMsg {
  type: "/desmos.reports.v1.Report";
  value: ReportAmino;
}
/** UserTarget contains the data of a report about a user */
export interface UserTarget {
  /** Address of the reported user */
  user: string;
}
export interface UserTargetProtoMsg {
  typeUrl: "/desmos.reports.v1.UserTarget";
  value: Uint8Array;
}
/** UserTarget contains the data of a report about a user */
export interface UserTargetAmino {
  /** Address of the reported user */
  user: string;
}
export interface UserTargetAminoMsg {
  type: "/desmos.reports.v1.UserTarget";
  value: UserTargetAmino;
}
/** PostTarget contains the data of a report about a post */
export interface PostTarget {
  /** Id of the reported post */
  postId: Long;
}
export interface PostTargetProtoMsg {
  typeUrl: "/desmos.reports.v1.PostTarget";
  value: Uint8Array;
}
/** PostTarget contains the data of a report about a post */
export interface PostTargetAmino {
  /** Id of the reported post */
  post_id: string;
}
export interface PostTargetAminoMsg {
  type: "/desmos.reports.v1.PostTarget";
  value: PostTargetAmino;
}
/** Reason contains the data about a reporting reason */
export interface Reason {
  /** Id of the subspace for which this reason is valid */
  subspaceId: Long;
  /** Id of the reason inside the subspace */
  id: number;
  /** Title of the reason */
  title: string;
  /** (optional) Extended description of the reason and the cases it applies to */
  description: string;
}
export interface ReasonProtoMsg {
  typeUrl: "/desmos.reports.v1.Reason";
  value: Uint8Array;
}
/** Reason contains the data about a reporting reason */
export interface ReasonAmino {
  /** Id of the subspace for which this reason is valid */
  subspace_id: string;
  /** Id of the reason inside the subspace */
  id: number;
  /** Title of the reason */
  title: string;
  /** (optional) Extended description of the reason and the cases it applies to */
  description: string;
}
export interface ReasonAminoMsg {
  type: "/desmos.reports.v1.Reason";
  value: ReasonAmino;
}
/** Params contains the module parameters */
export interface Params {
  /**
   * List of available reasons from which new subspaces can pick their default
   * ones
   */
  standardReasons: StandardReason[];
}
export interface ParamsProtoMsg {
  typeUrl: "/desmos.reports.v1.Params";
  value: Uint8Array;
}
/** Params contains the module parameters */
export interface ParamsAmino {
  /**
   * List of available reasons from which new subspaces can pick their default
   * ones
   */
  standard_reasons: StandardReasonAmino[];
}
export interface ParamsAminoMsg {
  type: "/desmos.reports.v1.Params";
  value: ParamsAmino;
}
/**
 * StandardReason contains the data of a standard reason that can be picked and
 * used from different subspaces
 */
export interface StandardReason {
  /** Id of the reason inside the subspace */
  id: number;
  /** Title of the reason */
  title: string;
  /** (optional) Extended description of the reason and the cases it applies to */
  description: string;
}
export interface StandardReasonProtoMsg {
  typeUrl: "/desmos.reports.v1.StandardReason";
  value: Uint8Array;
}
/**
 * StandardReason contains the data of a standard reason that can be picked and
 * used from different subspaces
 */
export interface StandardReasonAmino {
  /** Id of the reason inside the subspace */
  id: number;
  /** Title of the reason */
  title: string;
  /** (optional) Extended description of the reason and the cases it applies to */
  description: string;
}
export interface StandardReasonAminoMsg {
  type: "/desmos.reports.v1.StandardReason";
  value: StandardReasonAmino;
}
function createBaseReport(): Report {
  return {
    subspaceId: Long.UZERO,
    id: Long.UZERO,
    reasonsIds: [],
    message: "",
    reporter: "",
    target: undefined,
    creationDate: undefined,
  };
}
export const Report = {
  encode(
    message: Report,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    writer.uint32(26).fork();
    for (const v of message.reasonsIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    if (message.reporter !== "") {
      writer.uint32(42).string(message.reporter);
    }
    if (message.target !== undefined) {
      Any.encode(message.target, writer.uint32(50).fork()).ldelim();
    }
    if (message.creationDate !== undefined) {
      Timestamp.encode(message.creationDate, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Report {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.reasonsIds.push(reader.uint32());
            }
          } else {
            message.reasonsIds.push(reader.uint32());
          }
          break;
        case 4:
          message.message = reader.string();
          break;
        case 5:
          message.reporter = reader.string();
          break;
        case 6:
          message.target = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.creationDate = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Report {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      reasonsIds: Array.isArray(object?.reasonsIds)
        ? object.reasonsIds.map((e: any) => Number(e))
        : [],
      message: isSet(object.message) ? String(object.message) : "",
      reporter: isSet(object.reporter) ? String(object.reporter) : "",
      target: isSet(object.target) ? Any.fromJSON(object.target) : undefined,
      creationDate: isSet(object.creationDate)
        ? fromJsonTimestamp(object.creationDate)
        : undefined,
    };
  },
  toJSON(message: Report): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    if (message.reasonsIds) {
      obj.reasonsIds = message.reasonsIds.map((e) => Math.round(e));
    } else {
      obj.reasonsIds = [];
    }
    message.message !== undefined && (obj.message = message.message);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    message.target !== undefined &&
      (obj.target = message.target ? Any.toJSON(message.target) : undefined);
    message.creationDate !== undefined &&
      (obj.creationDate = fromTimestamp(message.creationDate).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Report>, I>>(object: I): Report {
    const message = createBaseReport();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.reasonsIds = object.reasonsIds?.map((e) => e) || [];
    message.message = object.message ?? "";
    message.reporter = object.reporter ?? "";
    message.target =
      object.target !== undefined && object.target !== null
        ? Any.fromPartial(object.target)
        : undefined;
    message.creationDate =
      object.creationDate !== undefined && object.creationDate !== null
        ? Timestamp.fromPartial(object.creationDate)
        : undefined;
    return message;
  },
  fromAmino(object: ReportAmino): Report {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      id: Long.fromString(object.id),
      reasonsIds: Array.isArray(object?.reasons_ids)
        ? object.reasons_ids.map((e: any) => e)
        : [],
      message: object.message,
      reporter: object.reporter,
      target: object?.target ? Any.fromAmino(object.target) : undefined,
      creationDate: object?.creation_date
        ? Timestamp.fromAmino(object.creation_date)
        : undefined,
    };
  },
  toAmino(message: Report): ReportAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.id = message.id ? message.id.toString() : undefined;
    if (message.reasonsIds) {
      obj.reasons_ids = message.reasonsIds.map((e) => e);
    } else {
      obj.reasons_ids = [];
    }
    obj.message = message.message;
    obj.reporter = message.reporter;
    obj.target = message.target ? Any.toAmino(message.target) : undefined;
    obj.creation_date = message.creationDate
      ? Timestamp.toAmino(message.creationDate)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ReportAminoMsg): Report {
    return Report.fromAmino(object.value);
  },
  fromProtoMsg(message: ReportProtoMsg): Report {
    return Report.decode(message.value);
  },
  toProto(message: Report): Uint8Array {
    return Report.encode(message).finish();
  },
  toProtoMsg(message: Report): ReportProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.Report",
      value: Report.encode(message).finish(),
    };
  },
};
function createBaseUserTarget(): UserTarget {
  return {
    user: "",
  };
}
export const UserTarget = {
  encode(
    message: UserTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UserTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserTarget {
    return {
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: UserTarget): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserTarget>, I>>(
    object: I
  ): UserTarget {
    const message = createBaseUserTarget();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: UserTargetAmino): UserTarget {
    return {
      user: object.user,
    };
  },
  toAmino(message: UserTarget): UserTargetAmino {
    const obj: any = {};
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(object: UserTargetAminoMsg): UserTarget {
    return UserTarget.fromAmino(object.value);
  },
  fromProtoMsg(message: UserTargetProtoMsg): UserTarget {
    return UserTarget.decode(message.value);
  },
  toProto(message: UserTarget): Uint8Array {
    return UserTarget.encode(message).finish();
  },
  toProtoMsg(message: UserTarget): UserTargetProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.UserTarget",
      value: UserTarget.encode(message).finish(),
    };
  },
};
function createBasePostTarget(): PostTarget {
  return {
    postId: Long.UZERO,
  };
}
export const PostTarget = {
  encode(
    message: PostTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.postId.isZero()) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PostTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PostTarget {
    return {
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
    };
  },
  toJSON(message: PostTarget): unknown {
    const obj: any = {};
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PostTarget>, I>>(
    object: I
  ): PostTarget {
    const message = createBasePostTarget();
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: PostTargetAmino): PostTarget {
    return {
      postId: Long.fromString(object.post_id),
    };
  },
  toAmino(message: PostTarget): PostTargetAmino {
    const obj: any = {};
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PostTargetAminoMsg): PostTarget {
    return PostTarget.fromAmino(object.value);
  },
  fromProtoMsg(message: PostTargetProtoMsg): PostTarget {
    return PostTarget.decode(message.value);
  },
  toProto(message: PostTarget): Uint8Array {
    return PostTarget.encode(message).finish();
  },
  toProtoMsg(message: PostTarget): PostTargetProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.PostTarget",
      value: PostTarget.encode(message).finish(),
    };
  },
};
function createBaseReason(): Reason {
  return {
    subspaceId: Long.UZERO,
    id: 0,
    title: "",
    description: "",
  };
}
export const Reason = {
  encode(
    message: Reason,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Reason {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReason();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Reason {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      id: isSet(object.id) ? Number(object.id) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },
  toJSON(message: Reason): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Reason>, I>>(object: I): Reason {
    const message = createBaseReason();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.id = object.id ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: ReasonAmino): Reason {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      id: object.id,
      title: object.title,
      description: object.description,
    };
  },
  toAmino(message: Reason): ReasonAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.id = message.id;
    obj.title = message.title;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: ReasonAminoMsg): Reason {
    return Reason.fromAmino(object.value);
  },
  fromProtoMsg(message: ReasonProtoMsg): Reason {
    return Reason.decode(message.value);
  },
  toProto(message: Reason): Uint8Array {
    return Reason.encode(message).finish();
  },
  toProtoMsg(message: Reason): ReasonProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.Reason",
      value: Reason.encode(message).finish(),
    };
  },
};
function createBaseParams(): Params {
  return {
    standardReasons: [],
  };
}
export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.standardReasons) {
      StandardReason.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.standardReasons.push(
            StandardReason.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      standardReasons: Array.isArray(object?.standardReasons)
        ? object.standardReasons.map((e: any) => StandardReason.fromJSON(e))
        : [],
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.standardReasons) {
      obj.standardReasons = message.standardReasons.map((e) =>
        e ? StandardReason.toJSON(e) : undefined
      );
    } else {
      obj.standardReasons = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.standardReasons =
      object.standardReasons?.map((e) => StandardReason.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      standardReasons: Array.isArray(object?.standard_reasons)
        ? object.standard_reasons.map((e: any) => StandardReason.fromAmino(e))
        : [],
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.standardReasons) {
      obj.standard_reasons = message.standardReasons.map((e) =>
        e ? StandardReason.toAmino(e) : undefined
      );
    } else {
      obj.standard_reasons = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.Params",
      value: Params.encode(message).finish(),
    };
  },
};
function createBaseStandardReason(): StandardReason {
  return {
    id: 0,
    title: "",
    description: "",
  };
}
export const StandardReason = {
  encode(
    message: StandardReason,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StandardReason {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStandardReason();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StandardReason {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },
  toJSON(message: StandardReason): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StandardReason>, I>>(
    object: I
  ): StandardReason {
    const message = createBaseStandardReason();
    message.id = object.id ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: StandardReasonAmino): StandardReason {
    return {
      id: object.id,
      title: object.title,
      description: object.description,
    };
  },
  toAmino(message: StandardReason): StandardReasonAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.title = message.title;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: StandardReasonAminoMsg): StandardReason {
    return StandardReason.fromAmino(object.value);
  },
  fromProtoMsg(message: StandardReasonProtoMsg): StandardReason {
    return StandardReason.decode(message.value);
  },
  toProto(message: StandardReason): Uint8Array {
    return StandardReason.encode(message).finish();
  },
  toProtoMsg(message: StandardReason): StandardReasonProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.StandardReason",
      value: StandardReason.encode(message).finish(),
    };
  },
};
