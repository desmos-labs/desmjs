/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/**
 * RegisteredReaction represents a registered reaction that can be referenced
 * by its shortCode inside post reactions
 */
export interface RegisteredReaction {
  shortCode: string;
  value: string;
  subspace: string;
  creator: string;
}

/** PostReaction is a struct of a user reaction to a post */
export interface PostReaction {
  postId: string;
  shortCode: string;
  value: string;
  owner: string;
}

function createBaseRegisteredReaction(): RegisteredReaction {
  return { shortCode: "", value: "", subspace: "", creator: "" };
}

export const RegisteredReaction = {
  encode(
    message: RegisteredReaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.shortCode !== "") {
      writer.uint32(10).string(message.shortCode);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.subspace !== "") {
      writer.uint32(26).string(message.subspace);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shortCode = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.subspace = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisteredReaction {
    return {
      shortCode: isSet(object.shortCode) ? String(object.shortCode) : "",
      value: isSet(object.value) ? String(object.value) : "",
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: RegisteredReaction): unknown {
    const obj: any = {};
    message.shortCode !== undefined && (obj.shortCode = message.shortCode);
    message.value !== undefined && (obj.value = message.value);
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisteredReaction>, I>>(
    object: I
  ): RegisteredReaction {
    const message = createBaseRegisteredReaction();
    message.shortCode = object.shortCode ?? "";
    message.value = object.value ?? "";
    message.subspace = object.subspace ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBasePostReaction(): PostReaction {
  return { postId: "", shortCode: "", value: "", owner: "" };
}

export const PostReaction = {
  encode(
    message: PostReaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.shortCode !== "") {
      writer.uint32(18).string(message.shortCode);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        case 2:
          message.shortCode = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostReaction {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      shortCode: isSet(object.shortCode) ? String(object.shortCode) : "",
      value: isSet(object.value) ? String(object.value) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: PostReaction): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.shortCode !== undefined && (obj.shortCode = message.shortCode);
    message.value !== undefined && (obj.value = message.value);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostReaction>, I>>(
    object: I
  ): PostReaction {
    const message = createBasePostReaction();
    message.postId = object.postId ?? "";
    message.shortCode = object.shortCode ?? "";
    message.value = object.value ?? "";
    message.owner = object.owner ?? "";
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
