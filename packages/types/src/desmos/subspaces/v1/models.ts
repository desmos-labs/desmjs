/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

/** Subspace contains all the data of a Desmos subspace */
export interface Subspace {
  /** Unique id that identifies the subspace */
  id: Long;
  /** Human-readable name of the subspace */
  name: string;
  /** Optional description of this subspace */
  description: string;
  /**
   * Represents the account that is associated with the subspace and
   * should be used to connect external applications to verify this subspace
   */
  treasury: string;
  /** Address of the user that owns the subspace */
  owner: string;
  /** Address of the subspace creator */
  creator: string;
  /** the creation time of the subspace */
  creationTime?: Date;
}

/** UserGroup represents a group of users */
export interface UserGroup {
  /** ID of the subspace inside which this group exists */
  subspaceId: Long;
  /** Unique id that identifies the group */
  id: number;
  /** Human-readable name of the user group */
  name: string;
  /** Optional description of this group */
  description: string;
  /** Permissions that will be granted to all the users part of this group */
  permissions: number;
}

/** PermissionDetail contains the details data of a permission */
export interface PermissionDetail {
  /** User represents a user permission */
  user?: PermissionDetail_User | undefined;
  /** Group represents a group permission */
  group?: PermissionDetail_Group | undefined;
}

/** User is a permission that has been set to a specific user */
export interface PermissionDetail_User {
  /** User for which the permission was set */
  user: string;
  /** Permission set to the user */
  permission: number;
}

/** Group is a permission that has been set to a user group */
export interface PermissionDetail_Group {
  /** Unique id of the group */
  groupId: number;
  /** Permission set to the group */
  permission: number;
}

function createBaseSubspace(): Subspace {
  return {
    id: Long.UZERO,
    name: "",
    description: "",
    treasury: "",
    owner: "",
    creator: "",
    creationTime: undefined,
  };
}

export const Subspace = {
  encode(
    message: Subspace,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.treasury !== "") {
      writer.uint32(34).string(message.treasury);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.creationTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.treasury = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 7:
          message.creationTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Subspace {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      treasury: isSet(object.treasury) ? String(object.treasury) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      creationTime: isSet(object.creationTime)
        ? fromJsonTimestamp(object.creationTime)
        : undefined,
    };
  },

  toJSON(message: Subspace): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.treasury !== undefined && (obj.treasury = message.treasury);
    message.owner !== undefined && (obj.owner = message.owner);
    message.creator !== undefined && (obj.creator = message.creator);
    message.creationTime !== undefined &&
      (obj.creationTime = message.creationTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Subspace>, I>>(object: I): Subspace {
    const message = createBaseSubspace();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.treasury = object.treasury ?? "";
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    message.creationTime = object.creationTime ?? undefined;
    return message;
  },
};

function createBaseUserGroup(): UserGroup {
  return {
    subspaceId: Long.UZERO,
    id: 0,
    name: "",
    description: "",
    permissions: 0,
  };
}

export const UserGroup = {
  encode(
    message: UserGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.permissions !== 0) {
      writer.uint32(40).uint32(message.permissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGroup();
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.permissions = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserGroup {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
    };
  },

  toJSON(message: UserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.permissions !== undefined &&
      (obj.permissions = Math.round(message.permissions));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserGroup>, I>>(
    object: I
  ): UserGroup {
    const message = createBaseUserGroup();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.permissions = object.permissions ?? 0;
    return message;
  },
};

function createBasePermissionDetail(): PermissionDetail {
  return { user: undefined, group: undefined };
}

export const PermissionDetail = {
  encode(
    message: PermissionDetail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      PermissionDetail_User.encode(
        message.user,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.group !== undefined) {
      PermissionDetail_Group.encode(
        message.group,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = PermissionDetail_User.decode(reader, reader.uint32());
          break;
        case 2:
          message.group = PermissionDetail_Group.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionDetail {
    return {
      user: isSet(object.user)
        ? PermissionDetail_User.fromJSON(object.user)
        : undefined,
      group: isSet(object.group)
        ? PermissionDetail_Group.fromJSON(object.group)
        : undefined,
    };
  },

  toJSON(message: PermissionDetail): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user
        ? PermissionDetail_User.toJSON(message.user)
        : undefined);
    message.group !== undefined &&
      (obj.group = message.group
        ? PermissionDetail_Group.toJSON(message.group)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PermissionDetail>, I>>(
    object: I
  ): PermissionDetail {
    const message = createBasePermissionDetail();
    message.user =
      object.user !== undefined && object.user !== null
        ? PermissionDetail_User.fromPartial(object.user)
        : undefined;
    message.group =
      object.group !== undefined && object.group !== null
        ? PermissionDetail_Group.fromPartial(object.group)
        : undefined;
    return message;
  },
};

function createBasePermissionDetail_User(): PermissionDetail_User {
  return { user: "", permission: 0 };
}

export const PermissionDetail_User = {
  encode(
    message: PermissionDetail_User,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.permission !== 0) {
      writer.uint32(16).uint32(message.permission);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PermissionDetail_User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionDetail_User();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.permission = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionDetail_User {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      permission: isSet(object.permission) ? Number(object.permission) : 0,
    };
  },

  toJSON(message: PermissionDetail_User): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.permission !== undefined &&
      (obj.permission = Math.round(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PermissionDetail_User>, I>>(
    object: I
  ): PermissionDetail_User {
    const message = createBasePermissionDetail_User();
    message.user = object.user ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
};

function createBasePermissionDetail_Group(): PermissionDetail_Group {
  return { groupId: 0, permission: 0 };
}

export const PermissionDetail_Group = {
  encode(
    message: PermissionDetail_Group,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint32(message.groupId);
    }
    if (message.permission !== 0) {
      writer.uint32(16).uint32(message.permission);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PermissionDetail_Group {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionDetail_Group();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint32();
          break;
        case 2:
          message.permission = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionDetail_Group {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      permission: isSet(object.permission) ? Number(object.permission) : 0,
    };
  },

  toJSON(message: PermissionDetail_Group): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.permission !== undefined &&
      (obj.permission = Math.round(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PermissionDetail_Group>, I>>(
    object: I
  ): PermissionDetail_Group {
    const message = createBasePermissionDetail_Group();
    message.groupId = object.groupId ?? 0;
    message.permission = object.permission ?? 0;
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
