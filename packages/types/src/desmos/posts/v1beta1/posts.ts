/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Poll } from "../../../desmos/posts/v1beta1/polls";
import { Timestamp } from "../../../google/protobuf/timestamp";

/** CommentsState contains all the possible comments states */
export enum CommentsState {
  /** COMMENTS_STATE_UNSPECIFIED - COMMENTS_STATE_UNSPECIFIED */
  COMMENTS_STATE_UNSPECIFIED = 0,
  /** COMMENTS_STATE_ALLOWED - COMMENT_STATE_ALLOWED tells that's possible to comment a post */
  COMMENTS_STATE_ALLOWED = 1,
  /** COMMENTS_STATE_BLOCKED - COMMENT_STATE_BLOCKED tells that's not possible to comment a post */
  COMMENTS_STATE_BLOCKED = 2,
  UNRECOGNIZED = -1,
}

export function commentsStateFromJSON(object: any): CommentsState {
  switch (object) {
    case 0:
    case "COMMENTS_STATE_UNSPECIFIED":
      return CommentsState.COMMENTS_STATE_UNSPECIFIED;
    case 1:
    case "COMMENTS_STATE_ALLOWED":
      return CommentsState.COMMENTS_STATE_ALLOWED;
    case 2:
    case "COMMENTS_STATE_BLOCKED":
      return CommentsState.COMMENTS_STATE_BLOCKED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CommentsState.UNRECOGNIZED;
  }
}

export function commentsStateToJSON(object: CommentsState): string {
  switch (object) {
    case CommentsState.COMMENTS_STATE_UNSPECIFIED:
      return "COMMENTS_STATE_UNSPECIFIED";
    case CommentsState.COMMENTS_STATE_ALLOWED:
      return "COMMENTS_STATE_ALLOWED";
    case CommentsState.COMMENTS_STATE_BLOCKED:
      return "COMMENTS_STATE_BLOCKED";
    default:
      return "UNKNOWN";
  }
}

/** Post contains all the data of a Desmos post */
export interface Post {
  postId: string;
  parentId: string;
  message: string;
  created?: Date;
  lastEdited?: Date;
  commentsState: CommentsState;
  subspace: string;
  additionalAttributes: Attribute[];
  creator: string;
  attachments: Attachment[];
  poll?: Poll;
}

/**
 * Attachment contains the information representing any type of file provided
 * with a post. This file can be an image or a multimedia file (vocals, video,
 * documents, etc.).
 */
export interface Attachment {
  uri: string;
  mimeType: string;
  tags: string[];
}

/**
 * Attribute represents a Posts' optional data entry and allows for
 * custom Amino and JSON serialization and deserialization.
 */
export interface Attribute {
  key: string;
  value: string;
}

function createBasePost(): Post {
  return {
    postId: "",
    parentId: "",
    message: "",
    created: undefined,
    lastEdited: undefined,
    commentsState: 0,
    subspace: "",
    additionalAttributes: [],
    creator: "",
    attachments: [],
    poll: undefined,
  };
}

export const Post = {
  encode(message: Post, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.parentId !== "") {
      writer.uint32(18).string(message.parentId);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.created !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.lastEdited !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastEdited),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.commentsState !== 0) {
      writer.uint32(48).int32(message.commentsState);
    }
    if (message.subspace !== "") {
      writer.uint32(58).string(message.subspace);
    }
    for (const v of message.additionalAttributes) {
      Attribute.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(74).string(message.creator);
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.poll !== undefined) {
      Poll.encode(message.poll, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Post {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        case 2:
          message.parentId = reader.string();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.created = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.lastEdited = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.commentsState = reader.int32() as any;
          break;
        case 7:
          message.subspace = reader.string();
          break;
        case 8:
          message.additionalAttributes.push(
            Attribute.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.creator = reader.string();
          break;
        case 10:
          message.attachments.push(Attachment.decode(reader, reader.uint32()));
          break;
        case 11:
          message.poll = Poll.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Post {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      parentId: isSet(object.parentId) ? String(object.parentId) : "",
      message: isSet(object.message) ? String(object.message) : "",
      created: isSet(object.created)
        ? fromJsonTimestamp(object.created)
        : undefined,
      lastEdited: isSet(object.lastEdited)
        ? fromJsonTimestamp(object.lastEdited)
        : undefined,
      commentsState: isSet(object.commentsState)
        ? commentsStateFromJSON(object.commentsState)
        : 0,
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      additionalAttributes: Array.isArray(object?.additionalAttributes)
        ? object.additionalAttributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      creator: isSet(object.creator) ? String(object.creator) : "",
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Attachment.fromJSON(e))
        : [],
      poll: isSet(object.poll) ? Poll.fromJSON(object.poll) : undefined,
    };
  },

  toJSON(message: Post): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.message !== undefined && (obj.message = message.message);
    message.created !== undefined &&
      (obj.created = message.created.toISOString());
    message.lastEdited !== undefined &&
      (obj.lastEdited = message.lastEdited.toISOString());
    message.commentsState !== undefined &&
      (obj.commentsState = commentsStateToJSON(message.commentsState));
    message.subspace !== undefined && (obj.subspace = message.subspace);
    if (message.additionalAttributes) {
      obj.additionalAttributes = message.additionalAttributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.additionalAttributes = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Attachment.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    message.poll !== undefined &&
      (obj.poll = message.poll ? Poll.toJSON(message.poll) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Post>, I>>(object: I): Post {
    const message = createBasePost();
    message.postId = object.postId ?? "";
    message.parentId = object.parentId ?? "";
    message.message = object.message ?? "";
    message.created = object.created ?? undefined;
    message.lastEdited = object.lastEdited ?? undefined;
    message.commentsState = object.commentsState ?? 0;
    message.subspace = object.subspace ?? "";
    message.additionalAttributes =
      object.additionalAttributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.creator = object.creator ?? "";
    message.attachments =
      object.attachments?.map((e) => Attachment.fromPartial(e)) || [];
    message.poll =
      object.poll !== undefined && object.poll !== null
        ? Poll.fromPartial(object.poll)
        : undefined;
    return message;
  },
};

function createBaseAttachment(): Attachment {
  return { uri: "", mimeType: "", tags: [] };
}

export const Attachment = {
  encode(
    message: Attachment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.mimeType !== "") {
      writer.uint32(18).string(message.mimeType);
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        case 2:
          message.mimeType = reader.string();
          break;
        case 3:
          message.tags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attachment {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      mimeType: isSet(object.mimeType) ? String(object.mimeType) : "",
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Attachment): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.mimeType !== undefined && (obj.mimeType = message.mimeType);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attachment>, I>>(
    object: I
  ): Attachment {
    const message = createBaseAttachment();
    message.uri = object.uri ?? "";
    message.mimeType = object.mimeType ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseAttribute(): Attribute {
  return { key: "", value: "" };
}

export const Attribute = {
  encode(
    message: Attribute,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(
    object: I
  ): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
