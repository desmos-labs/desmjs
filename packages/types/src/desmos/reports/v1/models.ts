/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
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
/** UserTarget contains the data of a report about a user */

export interface UserTarget {
  /** Address of the reported user */
  user: string;
}
/** PostTarget contains the data of a report about a post */

export interface PostTarget {
  /** Id of the reported post */
  postId: Long;
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
/** Params contains the module parameters */

export interface Params {
  /**
   * List of available reasons from which new subspaces can pick their default
   * ones
   */
  standardReasons: StandardReason[];
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
};
