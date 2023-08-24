/* eslint-disable */
import { Timestamp, TimestampAmino } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino } from "../../../google/protobuf/any";
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
  /** Represents the treasury account that is associated with the subspace */
  treasury: string;
  /** Address of the user that owns the subspace */
  owner: string;
  /** Address of the subspace creator */
  creator: string;
  /** the creation time of the subspace */
  creationTime?: Timestamp;
  /**
   * List of fee token denoms with default minimum gas prices allowed inside the
   * subspace
   */
  additionalFeeTokens: Coin[];
}
export interface SubspaceProtoMsg {
  typeUrl: "/desmos.subspaces.v3.Subspace";
  value: Uint8Array;
}
/** Subspace contains all the data of a Desmos subspace */
export interface SubspaceAmino {
  /** Unique id that identifies the subspace */
  id: string;
  /** Human-readable name of the subspace */
  name: string;
  /** Optional description of this subspace */
  description: string;
  /** Represents the treasury account that is associated with the subspace */
  treasury: string;
  /** Address of the user that owns the subspace */
  owner: string;
  /** Address of the subspace creator */
  creator: string;
  /** the creation time of the subspace */
  creation_time?: TimestampAmino;
  /**
   * List of fee token denoms with default minimum gas prices allowed inside the
   * subspace
   */
  additional_fee_tokens: CoinAmino[];
}
export interface SubspaceAminoMsg {
  type: "/desmos.subspaces.v3.Subspace";
  value: SubspaceAmino;
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
export interface SectionProtoMsg {
  typeUrl: "/desmos.subspaces.v3.Section";
  value: Uint8Array;
}
/** Section contains the data of a single subspace section */
export interface SectionAmino {
  /** Id of the subspace inside which the section exists */
  subspace_id: string;
  /** Unique id of the section within the subspace */
  id: number;
  /** (optional) Id of the parent section */
  parent_id: number;
  /** Name of the section within the subspace */
  name: string;
  /** (optional) Description of the section */
  description: string;
}
export interface SectionAminoMsg {
  type: "/desmos.subspaces.v3.Section";
  value: SectionAmino;
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
export interface UserGroupProtoMsg {
  typeUrl: "/desmos.subspaces.v3.UserGroup";
  value: Uint8Array;
}
/** UserGroup represents a group of users */
export interface UserGroupAmino {
  /** ID of the subspace inside which this group exists */
  subspace_id: string;
  /** (optional) Id of the section inside which this group is valid */
  section_id: number;
  /** Unique id that identifies the group */
  id: number;
  /** Human-readable name of the user group */
  name: string;
  /** Optional description of this group */
  description: string;
  /** Permissions that will be granted to all the users part of this group */
  permissions: string[];
}
export interface UserGroupAminoMsg {
  type: "/desmos.subspaces.v3.UserGroup";
  value: UserGroupAmino;
}
/** UserPermission represents a single Access Control List entry */
export interface UserPermission {
  subspaceId: Long;
  sectionId: number;
  user: string;
  permissions: string[];
}
export interface UserPermissionProtoMsg {
  typeUrl: "/desmos.subspaces.v3.UserPermission";
  value: Uint8Array;
}
/** UserPermission represents a single Access Control List entry */
export interface UserPermissionAmino {
  subspace_id: string;
  section_id: number;
  user: string;
  permissions: string[];
}
export interface UserPermissionAminoMsg {
  type: "/desmos.subspaces.v3.UserPermission";
  value: UserPermissionAmino;
}
/** Grant represents a grant to a user or a group */
export interface Grant {
  /** Id of the subspace inside which the user was granted the allowance */
  subspaceId: Long;
  /** Address of the user that granted the allowance */
  granter: string;
  /** Target to which the allowance has been granted */
  grantee?: Any;
  /**
   * Allowance can be any allowance type implementing the FeeAllowanceI
   * interface
   */
  allowance?: Any;
}
export interface GrantProtoMsg {
  typeUrl: "/desmos.subspaces.v3.Grant";
  value: Uint8Array;
}
/** Grant represents a grant to a user or a group */
export interface GrantAmino {
  /** Id of the subspace inside which the user was granted the allowance */
  subspace_id: string;
  /** Address of the user that granted the allowance */
  granter: string;
  /** Target to which the allowance has been granted */
  grantee?: AnyAmino;
  /**
   * Allowance can be any allowance type implementing the FeeAllowanceI
   * interface
   */
  allowance?: AnyAmino;
}
export interface GrantAminoMsg {
  type: "/desmos.subspaces.v3.Grant";
  value: GrantAmino;
}
/** UserGrantee contains the target of a grant about a user */
export interface UserGrantee {
  user: string;
}
export interface UserGranteeProtoMsg {
  typeUrl: "/desmos.subspaces.v3.UserGrantee";
  value: Uint8Array;
}
/** UserGrantee contains the target of a grant about a user */
export interface UserGranteeAmino {
  user: string;
}
export interface UserGranteeAminoMsg {
  type: "/desmos.subspaces.v3.UserGrantee";
  value: UserGranteeAmino;
}
/** GroupGrantee contains the target of a grant about a group */
export interface GroupGrantee {
  groupId: number;
}
export interface GroupGranteeProtoMsg {
  typeUrl: "/desmos.subspaces.v3.GroupGrantee";
  value: Uint8Array;
}
/** GroupGrantee contains the target of a grant about a group */
export interface GroupGranteeAmino {
  group_id: number;
}
export interface GroupGranteeAminoMsg {
  type: "/desmos.subspaces.v3.GroupGrantee";
  value: GroupGranteeAmino;
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
    additionalFeeTokens: [],
  };
}
export const Subspace = {
  encode(
    message: Subspace,
    writer: _m0.Writer = _m0.Writer.create(),
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
    for (const v of message.additionalFeeTokens) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
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
        case 8:
          message.additionalFeeTokens.push(
            Coin.decode(reader, reader.uint32()),
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      treasury: isSet(object.treasury) ? String(object.treasury) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      creationTime: isSet(object.creationTime)
        ? fromJsonTimestamp(object.creationTime)
        : undefined,
      additionalFeeTokens: Array.isArray(object?.additionalFeeTokens)
        ? object.additionalFeeTokens.map((e: any) => Coin.fromJSON(e))
        : [],
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
    if (message.additionalFeeTokens) {
      obj.additionalFeeTokens = message.additionalFeeTokens.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.additionalFeeTokens = [];
    }
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
    message.additionalFeeTokens =
      object.additionalFeeTokens?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SubspaceAmino): Subspace {
    return {
      id: Long.fromString(object.id),
      name: object.name,
      description: object.description,
      treasury: object.treasury,
      owner: object.owner,
      creator: object.creator,
      creationTime: object?.creation_time
        ? Timestamp.fromAmino(object.creation_time)
        : undefined,
      additionalFeeTokens: Array.isArray(object?.additional_fee_tokens)
        ? object.additional_fee_tokens.map((e: any) => Coin.fromAmino(e))
        : [],
    };
  },
  toAmino(message: Subspace): SubspaceAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.name = message.name;
    obj.description = message.description;
    obj.treasury = message.treasury;
    obj.owner = message.owner;
    obj.creator = message.creator;
    obj.creation_time = message.creationTime
      ? Timestamp.toAmino(message.creationTime)
      : undefined;
    if (message.additionalFeeTokens) {
      obj.additional_fee_tokens = message.additionalFeeTokens.map((e) =>
        e ? Coin.toAmino(e) : undefined,
      );
    } else {
      obj.additional_fee_tokens = [];
    }
    return obj;
  },
  fromAminoMsg(object: SubspaceAminoMsg): Subspace {
    return Subspace.fromAmino(object.value);
  },
  fromProtoMsg(message: SubspaceProtoMsg): Subspace {
    return Subspace.decode(message.value);
  },
  toProto(message: Subspace): Uint8Array {
    return Subspace.encode(message).finish();
  },
  toProtoMsg(message: Subspace): SubspaceProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.Subspace",
      value: Subspace.encode(message).finish(),
    };
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
    writer: _m0.Writer = _m0.Writer.create(),
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
  fromAmino(object: SectionAmino): Section {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      id: object.id,
      parentId: object.parent_id,
      name: object.name,
      description: object.description,
    };
  },
  toAmino(message: Section): SectionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.id = message.id;
    obj.parent_id = message.parentId;
    obj.name = message.name;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: SectionAminoMsg): Section {
    return Section.fromAmino(object.value);
  },
  fromProtoMsg(message: SectionProtoMsg): Section {
    return Section.decode(message.value);
  },
  toProto(message: Section): Uint8Array {
    return Section.encode(message).finish();
  },
  toProtoMsg(message: Section): SectionProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.Section",
      value: Section.encode(message).finish(),
    };
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
    writer: _m0.Writer = _m0.Writer.create(),
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
    object: I,
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
  fromAmino(object: UserGroupAmino): UserGroup {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      id: object.id,
      name: object.name,
      description: object.description,
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => e)
        : [],
    };
  },
  toAmino(message: UserGroup): UserGroupAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.id = message.id;
    obj.name = message.name;
    obj.description = message.description;
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromAminoMsg(object: UserGroupAminoMsg): UserGroup {
    return UserGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: UserGroupProtoMsg): UserGroup {
    return UserGroup.decode(message.value);
  },
  toProto(message: UserGroup): Uint8Array {
    return UserGroup.encode(message).finish();
  },
  toProtoMsg(message: UserGroup): UserGroupProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.UserGroup",
      value: UserGroup.encode(message).finish(),
    };
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
    writer: _m0.Writer = _m0.Writer.create(),
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
    object: I,
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
  fromAmino(object: UserPermissionAmino): UserPermission {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      user: object.user,
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => e)
        : [],
    };
  },
  toAmino(message: UserPermission): UserPermissionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.user = message.user;
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromAminoMsg(object: UserPermissionAminoMsg): UserPermission {
    return UserPermission.fromAmino(object.value);
  },
  fromProtoMsg(message: UserPermissionProtoMsg): UserPermission {
    return UserPermission.decode(message.value);
  },
  toProto(message: UserPermission): Uint8Array {
    return UserPermission.encode(message).finish();
  },
  toProtoMsg(message: UserPermission): UserPermissionProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.UserPermission",
      value: UserPermission.encode(message).finish(),
    };
  },
};
function createBaseGrant(): Grant {
  return {
    subspaceId: Long.UZERO,
    granter: "",
    grantee: undefined,
    allowance: undefined,
  };
}
export const Grant = {
  encode(message: Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.grantee !== undefined) {
      Any.encode(message.grantee, writer.uint32(26).fork()).ldelim();
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Grant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.granter = reader.string();
          break;
        case 3:
          message.grantee = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Grant {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? Any.fromJSON(object.grantee) : undefined,
      allowance: isSet(object.allowance)
        ? Any.fromJSON(object.allowance)
        : undefined,
    };
  },
  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined &&
      (obj.grantee = message.grantee ? Any.toJSON(message.grantee) : undefined);
    message.allowance !== undefined &&
      (obj.allowance = message.allowance
        ? Any.toJSON(message.allowance)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Grant>, I>>(object: I): Grant {
    const message = createBaseGrant();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.granter = object.granter ?? "";
    message.grantee =
      object.grantee !== undefined && object.grantee !== null
        ? Any.fromPartial(object.grantee)
        : undefined;
    message.allowance =
      object.allowance !== undefined && object.allowance !== null
        ? Any.fromPartial(object.allowance)
        : undefined;
    return message;
  },
  fromAmino(object: GrantAmino): Grant {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      granter: object.granter,
      grantee: object?.grantee ? Any.fromAmino(object.grantee) : undefined,
      allowance: object?.allowance
        ? Any.fromAmino(object.allowance)
        : undefined,
    };
  },
  toAmino(message: Grant): GrantAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.granter = message.granter;
    obj.grantee = message.grantee ? Any.toAmino(message.grantee) : undefined;
    obj.allowance = message.allowance
      ? Any.toAmino(message.allowance)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: GrantAminoMsg): Grant {
    return Grant.fromAmino(object.value);
  },
  fromProtoMsg(message: GrantProtoMsg): Grant {
    return Grant.decode(message.value);
  },
  toProto(message: Grant): Uint8Array {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message: Grant): GrantProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.Grant",
      value: Grant.encode(message).finish(),
    };
  },
};
function createBaseUserGrantee(): UserGrantee {
  return {
    user: "",
  };
}
export const UserGrantee = {
  encode(
    message: UserGrantee,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantee();
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
  fromJSON(object: any): UserGrantee {
    return {
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: UserGrantee): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserGrantee>, I>>(
    object: I,
  ): UserGrantee {
    const message = createBaseUserGrantee();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: UserGranteeAmino): UserGrantee {
    return {
      user: object.user,
    };
  },
  toAmino(message: UserGrantee): UserGranteeAmino {
    const obj: any = {};
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(object: UserGranteeAminoMsg): UserGrantee {
    return UserGrantee.fromAmino(object.value);
  },
  fromProtoMsg(message: UserGranteeProtoMsg): UserGrantee {
    return UserGrantee.decode(message.value);
  },
  toProto(message: UserGrantee): Uint8Array {
    return UserGrantee.encode(message).finish();
  },
  toProtoMsg(message: UserGrantee): UserGranteeProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.UserGrantee",
      value: UserGrantee.encode(message).finish(),
    };
  },
};
function createBaseGroupGrantee(): GroupGrantee {
  return {
    groupId: 0,
  };
}
export const GroupGrantee = {
  encode(
    message: GroupGrantee,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint32(message.groupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GroupGrantee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupGrantee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupGrantee {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
    };
  },
  toJSON(message: GroupGrantee): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GroupGrantee>, I>>(
    object: I,
  ): GroupGrantee {
    const message = createBaseGroupGrantee();
    message.groupId = object.groupId ?? 0;
    return message;
  },
  fromAmino(object: GroupGranteeAmino): GroupGrantee {
    return {
      groupId: object.group_id,
    };
  },
  toAmino(message: GroupGrantee): GroupGranteeAmino {
    const obj: any = {};
    obj.group_id = message.groupId;
    return obj;
  },
  fromAminoMsg(object: GroupGranteeAminoMsg): GroupGrantee {
    return GroupGrantee.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupGranteeProtoMsg): GroupGrantee {
    return GroupGrantee.decode(message.value);
  },
  toProto(message: GroupGrantee): Uint8Array {
    return GroupGrantee.encode(message).finish();
  },
  toProtoMsg(message: GroupGrantee): GroupGranteeProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.GroupGrantee",
      value: GroupGrantee.encode(message).finish(),
    };
  },
};
