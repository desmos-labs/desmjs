/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/**
 * MsgCreateRelationship represents a message to create a relationship
 * between two users on a specific subspace.
 */
export interface MsgCreateRelationship {
  /** User creating the relationship */
  signer: string;
  /** Counterparty of the relationship (i.e. user to be followed) */
  counterparty: string;
  /** Subspace id inside which the relationship will be valid */
  subspaceId: Long;
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
  /** User that created the relationship */
  signer: string;
  /** Counterparty of the relationship that should be deleted */
  counterparty: string;
  /** Id of the subspace inside which the relationship to delete exists */
  subspaceId: Long;
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
  /** Address of the user blocking the other user */
  blocker: string;
  /** Address of the user that should be blocked */
  blocked: string;
  /** (optional) Reason why the user has been blocked */
  reason: string;
  /** Id of the subspace inside which the user should be blocked */
  subspaceId: Long;
}

/** MsgBlockUserResponse defines the Msg/BlockUser response type. */
export interface MsgBlockUserResponse {}

/** MsgUnblockUser represents a message to unblock a previously blocked user. */
export interface MsgUnblockUser {
  /** Address of the user that blocked another user */
  blocker: string;
  /** Address of the user that should be unblocked */
  blocked: string;
  /** Id of the subspace inside which the user should be unblocked */
  subspaceId: Long;
}

/** MsgUnblockUserResponse defines the Msg/UnblockUser response type. */
export interface MsgUnblockUserResponse {}

function createBaseMsgCreateRelationship(): MsgCreateRelationship {
  return { signer: "", counterparty: "", subspaceId: Long.UZERO };
}

export const MsgCreateRelationship = {
  encode(
    message: MsgCreateRelationship,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.counterparty !== "") {
      writer.uint32(18).string(message.counterparty);
    }
    if (!message.subspaceId.isZero()) {
      writer.uint32(24).uint64(message.subspaceId);
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
          message.signer = reader.string();
          break;
        case 2:
          message.counterparty = reader.string();
          break;
        case 3:
          message.subspaceId = reader.uint64() as Long;
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
      signer: isSet(object.signer) ? String(object.signer) : "",
      counterparty: isSet(object.counterparty)
        ? String(object.counterparty)
        : "",
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateRelationship): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty);
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRelationship>, I>>(
    object: I
  ): MsgCreateRelationship {
    const message = createBaseMsgCreateRelationship();
    message.signer = object.signer ?? "";
    message.counterparty = object.counterparty ?? "";
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
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
  return { signer: "", counterparty: "", subspaceId: Long.UZERO };
}

export const MsgDeleteRelationship = {
  encode(
    message: MsgDeleteRelationship,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.counterparty !== "") {
      writer.uint32(18).string(message.counterparty);
    }
    if (!message.subspaceId.isZero()) {
      writer.uint32(24).uint64(message.subspaceId);
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
          message.signer = reader.string();
          break;
        case 2:
          message.counterparty = reader.string();
          break;
        case 3:
          message.subspaceId = reader.uint64() as Long;
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
      signer: isSet(object.signer) ? String(object.signer) : "",
      counterparty: isSet(object.counterparty)
        ? String(object.counterparty)
        : "",
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgDeleteRelationship): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty);
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteRelationship>, I>>(
    object: I
  ): MsgDeleteRelationship {
    const message = createBaseMsgDeleteRelationship();
    message.signer = object.signer ?? "";
    message.counterparty = object.counterparty ?? "";
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
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
  return { blocker: "", blocked: "", reason: "", subspaceId: Long.UZERO };
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
    if (!message.subspaceId.isZero()) {
      writer.uint32(32).uint64(message.subspaceId);
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
          message.subspaceId = reader.uint64() as Long;
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
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgBlockUser): unknown {
    const obj: any = {};
    message.blocker !== undefined && (obj.blocker = message.blocker);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    message.reason !== undefined && (obj.reason = message.reason);
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBlockUser>, I>>(
    object: I
  ): MsgBlockUser {
    const message = createBaseMsgBlockUser();
    message.blocker = object.blocker ?? "";
    message.blocked = object.blocked ?? "";
    message.reason = object.reason ?? "";
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
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
  return { blocker: "", blocked: "", subspaceId: Long.UZERO };
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
    if (!message.subspaceId.isZero()) {
      writer.uint32(32).uint64(message.subspaceId);
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
          message.subspaceId = reader.uint64() as Long;
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
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgUnblockUser): unknown {
    const obj: any = {};
    message.blocker !== undefined && (obj.blocker = message.blocker);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnblockUser>, I>>(
    object: I
  ): MsgUnblockUser {
    const message = createBaseMsgUnblockUser();
    message.blocker = object.blocker ?? "";
    message.blocked = object.blocked ?? "";
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
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

/** Msg defines the relationships Msg service. */
export interface Msg {
  /** CreateRelationship defines a method for creating a new relationship */
  CreateRelationship(
    request: MsgCreateRelationship
  ): Promise<MsgCreateRelationshipResponse>;
  /** DeleteRelationship defines a method for deleting a relationship */
  DeleteRelationship(
    request: MsgDeleteRelationship
  ): Promise<MsgDeleteRelationshipResponse>;
  /** BlockUser defines a method for blocking a user */
  BlockUser(request: MsgBlockUser): Promise<MsgBlockUserResponse>;
  /** UnblockUser defines a method for unblocking a user */
  UnblockUser(request: MsgUnblockUser): Promise<MsgUnblockUserResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateRelationship = this.CreateRelationship.bind(this);
    this.DeleteRelationship = this.DeleteRelationship.bind(this);
    this.BlockUser = this.BlockUser.bind(this);
    this.UnblockUser = this.UnblockUser.bind(this);
  }
  CreateRelationship(
    request: MsgCreateRelationship
  ): Promise<MsgCreateRelationshipResponse> {
    const data = MsgCreateRelationship.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.relationships.v1.Msg",
      "CreateRelationship",
      data
    );
    return promise.then((data) =>
      MsgCreateRelationshipResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteRelationship(
    request: MsgDeleteRelationship
  ): Promise<MsgDeleteRelationshipResponse> {
    const data = MsgDeleteRelationship.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.relationships.v1.Msg",
      "DeleteRelationship",
      data
    );
    return promise.then((data) =>
      MsgDeleteRelationshipResponse.decode(new _m0.Reader(data))
    );
  }

  BlockUser(request: MsgBlockUser): Promise<MsgBlockUserResponse> {
    const data = MsgBlockUser.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.relationships.v1.Msg",
      "BlockUser",
      data
    );
    return promise.then((data) =>
      MsgBlockUserResponse.decode(new _m0.Reader(data))
    );
  }

  UnblockUser(request: MsgUnblockUser): Promise<MsgUnblockUserResponse> {
    const data = MsgUnblockUser.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.relationships.v1.Msg",
      "UnblockUser",
      data
    );
    return promise.then((data) =>
      MsgUnblockUserResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
