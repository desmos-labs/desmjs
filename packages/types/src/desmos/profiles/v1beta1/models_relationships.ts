/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/**
 * Relationship is the struct of a relationship.
 * It represent the concept of "follow" of traditional social networks.
 */
export interface Relationship {
  creator: string;
  recipient: string;
  subspace: string;
}

/**
 * UserBlock represents the fact that the Blocker has blocked the given Blocked
 * user.
 */
export interface UserBlock {
  /** Blocker represents the address of the user blocking another one */
  blocker: string;
  /** Blocked represents the address of the blocked user */
  blocked: string;
  /** Reason represents the optional reason the user has been blocked for. */
  reason: string;
  /**
   * Subspace contains the ID of the subspace inside which the user should be
   * blocked
   */
  subspace: string;
}

function createBaseRelationship(): Relationship {
  return { creator: "", recipient: "", subspace: "" };
}

export const Relationship = {
  encode(
    message: Relationship,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.subspace !== "") {
      writer.uint32(26).string(message.subspace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Relationship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.subspace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Relationship {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
    };
  },

  toJSON(message: Relationship): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.subspace !== undefined && (obj.subspace = message.subspace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Relationship>, I>>(
    object: I
  ): Relationship {
    const message = createBaseRelationship();
    message.creator = object.creator ?? "";
    message.recipient = object.recipient ?? "";
    message.subspace = object.subspace ?? "";
    return message;
  },
};

function createBaseUserBlock(): UserBlock {
  return { blocker: "", blocked: "", reason: "", subspace: "" };
}

export const UserBlock = {
  encode(
    message: UserBlock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blocker !== "") {
      writer.uint32(10).string(message.blocker);
    }
    if (message.blocked !== "") {
      writer.uint32(18).string(message.blocked);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (message.subspace !== "") {
      writer.uint32(34).string(message.subspace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocker = reader.string();
          break;
        case 2:
          message.blocked = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.subspace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserBlock {
    return {
      blocker: isSet(object.blocker) ? String(object.blocker) : "",
      blocked: isSet(object.blocked) ? String(object.blocked) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
    };
  },

  toJSON(message: UserBlock): unknown {
    const obj: any = {};
    message.blocker !== undefined && (obj.blocker = message.blocker);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    message.reason !== undefined && (obj.reason = message.reason);
    message.subspace !== undefined && (obj.subspace = message.subspace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserBlock>, I>>(
    object: I
  ): UserBlock {
    const message = createBaseUserBlock();
    message.blocker = object.blocker ?? "";
    message.blocked = object.blocked ?? "";
    message.reason = object.reason ?? "";
    message.subspace = object.subspace ?? "";
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
