/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/**
 * MsgCreateRelationship represents a message to create a relationship
 * between two users on a specific subspace.
 */
export interface MsgCreateRelationship {
  sender: string;
  receiver: string;
  subspace: string;
}

/**
 * MsgCreateRelationshipResponse defines the Msg/CreateRelationship response
 * type.
 */
export interface MsgCreateRelationshipResponse {}

/**
 * MsgDeleteRelationship represents a message to delete the relationship
 * between two users.
 */
export interface MsgDeleteRelationship {
  user: string;
  counterparty: string;
  subspace: string;
}

/**
 * MsgDeleteRelationshipResponse defines the Msg/DeleteRelationship response
 * type.
 */
export interface MsgDeleteRelationshipResponse {}

/**
 * MsgBlockUser represents a message to block another user specifying an
 * optional reason.
 */
export interface MsgBlockUser {
  blocker: string;
  blocked: string;
  reason: string;
  subspace: string;
}

/** MsgBlockUserResponse defines the Msg/BlockUser response type. */
export interface MsgBlockUserResponse {}

/** MsgUnblockUser represents a message to unblock a previously blocked user. */
export interface MsgUnblockUser {
  blocker: string;
  blocked: string;
  subspace: string;
}

/** MsgUnblockUserResponse defines the Msg/UnblockUser response type. */
export interface MsgUnblockUserResponse {}

function createBaseMsgCreateRelationship(): MsgCreateRelationship {
  return { sender: "", receiver: "", subspace: "" };
}

export const MsgCreateRelationship = {
  encode(
    message: MsgCreateRelationship,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.subspace !== "") {
      writer.uint32(26).string(message.subspace);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateRelationship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRelationship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
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

  fromJSON(object: any): MsgCreateRelationship {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
    };
  },

  toJSON(message: MsgCreateRelationship): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.subspace !== undefined && (obj.subspace = message.subspace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRelationship>, I>>(
    object: I
  ): MsgCreateRelationship {
    const message = createBaseMsgCreateRelationship();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.subspace = object.subspace ?? "";
    return message;
  },
};

function createBaseMsgCreateRelationshipResponse(): MsgCreateRelationshipResponse {
  return {};
}

export const MsgCreateRelationshipResponse = {
  encode(
    _: MsgCreateRelationshipResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateRelationshipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRelationshipResponse();
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

  fromJSON(_: any): MsgCreateRelationshipResponse {
    return {};
  },

  toJSON(_: MsgCreateRelationshipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRelationshipResponse>, I>>(
    _: I
  ): MsgCreateRelationshipResponse {
    const message = createBaseMsgCreateRelationshipResponse();
    return message;
  },
};

function createBaseMsgDeleteRelationship(): MsgDeleteRelationship {
  return { user: "", counterparty: "", subspace: "" };
}

export const MsgDeleteRelationship = {
  encode(
    message: MsgDeleteRelationship,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.counterparty !== "") {
      writer.uint32(18).string(message.counterparty);
    }
    if (message.subspace !== "") {
      writer.uint32(26).string(message.subspace);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteRelationship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRelationship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.counterparty = reader.string();
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

  fromJSON(object: any): MsgDeleteRelationship {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      counterparty: isSet(object.counterparty)
        ? String(object.counterparty)
        : "",
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
    };
  },

  toJSON(message: MsgDeleteRelationship): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty);
    message.subspace !== undefined && (obj.subspace = message.subspace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteRelationship>, I>>(
    object: I
  ): MsgDeleteRelationship {
    const message = createBaseMsgDeleteRelationship();
    message.user = object.user ?? "";
    message.counterparty = object.counterparty ?? "";
    message.subspace = object.subspace ?? "";
    return message;
  },
};

function createBaseMsgDeleteRelationshipResponse(): MsgDeleteRelationshipResponse {
  return {};
}

export const MsgDeleteRelationshipResponse = {
  encode(
    _: MsgDeleteRelationshipResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteRelationshipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRelationshipResponse();
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

  fromJSON(_: any): MsgDeleteRelationshipResponse {
    return {};
  },

  toJSON(_: MsgDeleteRelationshipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteRelationshipResponse>, I>>(
    _: I
  ): MsgDeleteRelationshipResponse {
    const message = createBaseMsgDeleteRelationshipResponse();
    return message;
  },
};

function createBaseMsgBlockUser(): MsgBlockUser {
  return { blocker: "", blocked: "", reason: "", subspace: "" };
}

export const MsgBlockUser = {
  encode(
    message: MsgBlockUser,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockUser();
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

  fromJSON(object: any): MsgBlockUser {
    return {
      blocker: isSet(object.blocker) ? String(object.blocker) : "",
      blocked: isSet(object.blocked) ? String(object.blocked) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
    };
  },

  toJSON(message: MsgBlockUser): unknown {
    const obj: any = {};
    message.blocker !== undefined && (obj.blocker = message.blocker);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    message.reason !== undefined && (obj.reason = message.reason);
    message.subspace !== undefined && (obj.subspace = message.subspace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBlockUser>, I>>(
    object: I
  ): MsgBlockUser {
    const message = createBaseMsgBlockUser();
    message.blocker = object.blocker ?? "";
    message.blocked = object.blocked ?? "";
    message.reason = object.reason ?? "";
    message.subspace = object.subspace ?? "";
    return message;
  },
};

function createBaseMsgBlockUserResponse(): MsgBlockUserResponse {
  return {};
}

export const MsgBlockUserResponse = {
  encode(
    _: MsgBlockUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBlockUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockUserResponse();
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

  fromJSON(_: any): MsgBlockUserResponse {
    return {};
  },

  toJSON(_: MsgBlockUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBlockUserResponse>, I>>(
    _: I
  ): MsgBlockUserResponse {
    const message = createBaseMsgBlockUserResponse();
    return message;
  },
};

function createBaseMsgUnblockUser(): MsgUnblockUser {
  return { blocker: "", blocked: "", subspace: "" };
}

export const MsgUnblockUser = {
  encode(
    message: MsgUnblockUser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blocker !== "") {
      writer.uint32(10).string(message.blocker);
    }
    if (message.blocked !== "") {
      writer.uint32(18).string(message.blocked);
    }
    if (message.subspace !== "") {
      writer.uint32(34).string(message.subspace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblockUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnblockUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocker = reader.string();
          break;
        case 2:
          message.blocked = reader.string();
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

  fromJSON(object: any): MsgUnblockUser {
    return {
      blocker: isSet(object.blocker) ? String(object.blocker) : "",
      blocked: isSet(object.blocked) ? String(object.blocked) : "",
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
    };
  },

  toJSON(message: MsgUnblockUser): unknown {
    const obj: any = {};
    message.blocker !== undefined && (obj.blocker = message.blocker);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    message.subspace !== undefined && (obj.subspace = message.subspace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnblockUser>, I>>(
    object: I
  ): MsgUnblockUser {
    const message = createBaseMsgUnblockUser();
    message.blocker = object.blocker ?? "";
    message.blocked = object.blocked ?? "";
    message.subspace = object.subspace ?? "";
    return message;
  },
};

function createBaseMsgUnblockUserResponse(): MsgUnblockUserResponse {
  return {};
}

export const MsgUnblockUserResponse = {
  encode(
    _: MsgUnblockUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnblockUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnblockUserResponse();
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

  fromJSON(_: any): MsgUnblockUserResponse {
    return {};
  },

  toJSON(_: MsgUnblockUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnblockUserResponse>, I>>(
    _: I
  ): MsgUnblockUserResponse {
    const message = createBaseMsgUnblockUserResponse();
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
