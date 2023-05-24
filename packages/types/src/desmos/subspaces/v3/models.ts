/* eslint-disable */
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
export const protobufPackage = "desmos.subspaces.v3";
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
  creationTime?: Timestamp;
}
/** Section contains the data of a single subspace section */
export interface Section {
  /** Id of the subspace inside which the section exists */
  subspaceId: Long;
  /** Unique id of the section within the subspace */
  id: number;
  /** (optional) Id of the parent section */
  parentId: number;
  /** Name of the section within the subspace */
  name: string;
  /** (optional) Description of the section */
  description: string;
}
/** UserGroup represents a group of users */
export interface UserGroup {
  /** ID of the subspace inside which this group exists */
  subspaceId: Long;
  /** (optional) Id of the section inside which this group is valid */
  sectionId: number;
  /** Unique id that identifies the group */
  id: number;
  /** Human-readable name of the user group */
  name: string;
  /** Optional description of this group */
  description: string;
  /** Permissions that will be granted to all the users part of this group */
  permissions: string[];
}
/** UserPermission represents a single Access Control List entry */
export interface UserPermission {
  subspaceId: Long;
  sectionId: number;
  user: string;
  permissions: string[];
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
      Timestamp.encode(message.creationTime, writer.uint32(58).fork()).ldelim();
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
          message.creationTime = Timestamp.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
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
      (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
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
    message.creationTime =
      object.creationTime !== undefined && object.creationTime !== null
        ? Timestamp.fromPartial(object.creationTime)
        : undefined;
    return message;
  },
};
function createBaseSection(): Section {
  return {
    subspaceId: Long.UZERO,
    id: 0,
    parentId: 0,
    name: "",
    description: "",
  };
}
export const Section = {
  encode(
    message: Section,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.parentId !== 0) {
      writer.uint32(24).uint32(message.parentId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Section {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSection();
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
          message.parentId = reader.uint32();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Section {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      id: isSet(object.id) ? Number(object.id) : 0,
      parentId: isSet(object.parentId) ? Number(object.parentId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },
  toJSON(message: Section): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.parentId !== undefined &&
      (obj.parentId = Math.round(message.parentId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Section>, I>>(object: I): Section {
    const message = createBaseSection();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.id = object.id ?? 0;
    message.parentId = object.parentId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};
function createBaseUserGroup(): UserGroup {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    id: 0,
    name: "",
    description: "",
    permissions: [],
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
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    for (const v of message.permissions) {
      writer.uint32(50).string(v!);
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
          message.sectionId = reader.uint32();
          break;
        case 3:
          message.id = reader.uint32();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.permissions.push(reader.string());
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
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => String(e))
        : [],
    };
  },
  toJSON(message: UserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
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
    message.sectionId = object.sectionId ?? 0;
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
};
function createBaseUserPermission(): UserPermission {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    user: "",
    permissions: [],
  };
}
export const UserPermission = {
  encode(
    message: UserPermission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    for (const v of message.permissions) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UserPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.sectionId = reader.uint32();
          break;
        case 3:
          message.user = reader.string();
          break;
        case 4:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserPermission {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => String(e))
        : [],
    };
  },
  toJSON(message: UserPermission): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    message.user !== undefined && (obj.user = message.user);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserPermission>, I>>(
    object: I
  ): UserPermission {
    const message = createBaseUserPermission();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.user = object.user ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
};
