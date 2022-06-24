/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/** MsgCreateSubspace represents the message used to create a subspace */
export interface MsgCreateSubspace {
  name: string;
  description: string;
  treasury: string;
  owner: string;
  creator: string;
}

/** MsgCreateSubspaceResponse defines the Msg/CreateSubspace response type */
export interface MsgCreateSubspaceResponse {
  subspaceId: Long;
}

/** MsgEditSubspace represents the message used to edit a subspace fields */
export interface MsgEditSubspace {
  subspaceId: Long;
  name: string;
  description: string;
  treasury: string;
  owner: string;
  signer: string;
}

/** MsgEditSubspaceResponse defines the Msg/EditSubspace response type */
export interface MsgEditSubspaceResponse {}

/** MsgDeleteSubspace represents the message used to delete a subspace */
export interface MsgDeleteSubspace {
  subspaceId: Long;
  signer: string;
}

/** MsgDeleteSubspaceResponse defines the Msg/DeleteSubspace response type */
export interface MsgDeleteSubspaceResponse {}

/** MsgCreateUserGroup represents the message used to create a user group */
export interface MsgCreateUserGroup {
  subspaceId: Long;
  /** Name of the group */
  name: string;
  /** Optional description of the group */
  description: string;
  /** Default permissions to be applied to the group */
  defaultPermissions: number;
  /** Creator of the group */
  creator: string;
}

/** MsgCreateUserGroupResponse defines the Msg/CreateUserGroup response type */
export interface MsgCreateUserGroupResponse {
  groupId: number;
}

/** MsgEditUserGroup represents the message used to edit a user group */
export interface MsgEditUserGroup {
  subspaceId: Long;
  groupId: number;
  name: string;
  description: string;
  signer: string;
}

/** MsgEditUserGroupResponse defines the Msg/EditUserGroup response type */
export interface MsgEditUserGroupResponse {}

/**
 * MsgSetUserGroupPermissions represents the message used to set the permissions
 * of a user group
 */
export interface MsgSetUserGroupPermissions {
  subspaceId: Long;
  groupId: number;
  permissions: number;
  signer: string;
}

/**
 * MsgSetUserGroupPermissionsResponse defines the
 * Msg/SetUserGroupPermissionsResponse response type
 */
export interface MsgSetUserGroupPermissionsResponse {}

/** MsgDeleteUserGroup represents the message used to delete a user group */
export interface MsgDeleteUserGroup {
  subspaceId: Long;
  groupId: number;
  signer: string;
}

/** MsgDeleteUserGroupResponse defines the Msg/DeleteUserGroup response type */
export interface MsgDeleteUserGroupResponse {}

/**
 * MsgAddUserToUserGroup represents the message used to add a user to a user
 * group
 */
export interface MsgAddUserToUserGroup {
  subspaceId: Long;
  groupId: number;
  user: string;
  signer: string;
}

/**
 * MsgAddUserToUserGroupResponse defines the Msg/AddUserToUserGroupResponse
 * response type
 */
export interface MsgAddUserToUserGroupResponse {}

/**
 * MsgRemoveUserFromUserGroup represents the message used to remove a user from
 * a user group
 */
export interface MsgRemoveUserFromUserGroup {
  subspaceId: Long;
  groupId: number;
  user: string;
  signer: string;
}

/**
 * MsgRemoveUserFromUserGroupResponse defines the
 * Msg/RemoveUserFromUserGroupResponse response type
 */
export interface MsgRemoveUserFromUserGroupResponse {}

/**
 * MsgSetUserPermissions represents the message used to set the permissions of a
 * specific user
 */
export interface MsgSetUserPermissions {
  subspaceId: Long;
  user: string;
  permissions: number;
  signer: string;
}

/**
 * MsgSetUserPermissionsResponse defines the Msg/SetPermissionsResponse
 * response type
 */
export interface MsgSetUserPermissionsResponse {}

function createBaseMsgCreateSubspace(): MsgCreateSubspace {
  return { name: "", description: "", treasury: "", owner: "", creator: "" };
}

export const MsgCreateSubspace = {
  encode(
    message: MsgCreateSubspace,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.treasury !== "") {
      writer.uint32(26).string(message.treasury);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSubspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.treasury = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSubspace {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      treasury: isSet(object.treasury) ? String(object.treasury) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgCreateSubspace): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.treasury !== undefined && (obj.treasury = message.treasury);
    message.owner !== undefined && (obj.owner = message.owner);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSubspace>, I>>(
    object: I
  ): MsgCreateSubspace {
    const message = createBaseMsgCreateSubspace();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.treasury = object.treasury ?? "";
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgCreateSubspaceResponse(): MsgCreateSubspaceResponse {
  return { subspaceId: Long.UZERO };
}

export const MsgCreateSubspaceResponse = {
  encode(
    message: MsgCreateSubspaceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateSubspaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSubspaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSubspaceResponse {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateSubspaceResponse): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSubspaceResponse>, I>>(
    object: I
  ): MsgCreateSubspaceResponse {
    const message = createBaseMsgCreateSubspaceResponse();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgEditSubspace(): MsgEditSubspace {
  return {
    subspaceId: Long.UZERO,
    name: "",
    description: "",
    treasury: "",
    owner: "",
    signer: "",
  };
}

export const MsgEditSubspace = {
  encode(
    message: MsgEditSubspace,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
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
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSubspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
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
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditSubspace {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      treasury: isSet(object.treasury) ? String(object.treasury) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgEditSubspace): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.treasury !== undefined && (obj.treasury = message.treasury);
    message.owner !== undefined && (obj.owner = message.owner);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditSubspace>, I>>(
    object: I
  ): MsgEditSubspace {
    const message = createBaseMsgEditSubspace();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.treasury = object.treasury ?? "";
    message.owner = object.owner ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgEditSubspaceResponse(): MsgEditSubspaceResponse {
  return {};
}

export const MsgEditSubspaceResponse = {
  encode(
    _: MsgEditSubspaceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEditSubspaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditSubspaceResponse();
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

  fromJSON(_: any): MsgEditSubspaceResponse {
    return {};
  },

  toJSON(_: MsgEditSubspaceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditSubspaceResponse>, I>>(
    _: I
  ): MsgEditSubspaceResponse {
    const message = createBaseMsgEditSubspaceResponse();
    return message;
  },
};

function createBaseMsgDeleteSubspace(): MsgDeleteSubspace {
  return { subspaceId: Long.UZERO, signer: "" };
}

export const MsgDeleteSubspace = {
  encode(
    message: MsgDeleteSubspace,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSubspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSubspace {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgDeleteSubspace): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSubspace>, I>>(
    object: I
  ): MsgDeleteSubspace {
    const message = createBaseMsgDeleteSubspace();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgDeleteSubspaceResponse(): MsgDeleteSubspaceResponse {
  return {};
}

export const MsgDeleteSubspaceResponse = {
  encode(
    _: MsgDeleteSubspaceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteSubspaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSubspaceResponse();
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

  fromJSON(_: any): MsgDeleteSubspaceResponse {
    return {};
  },

  toJSON(_: MsgDeleteSubspaceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSubspaceResponse>, I>>(
    _: I
  ): MsgDeleteSubspaceResponse {
    const message = createBaseMsgDeleteSubspaceResponse();
    return message;
  },
};

function createBaseMsgCreateUserGroup(): MsgCreateUserGroup {
  return {
    subspaceId: Long.UZERO,
    name: "",
    description: "",
    defaultPermissions: 0,
    creator: "",
  };
}

export const MsgCreateUserGroup = {
  encode(
    message: MsgCreateUserGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.defaultPermissions !== 0) {
      writer.uint32(32).uint32(message.defaultPermissions);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.defaultPermissions = reader.uint32();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUserGroup {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      defaultPermissions: isSet(object.defaultPermissions)
        ? Number(object.defaultPermissions)
        : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgCreateUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.defaultPermissions !== undefined &&
      (obj.defaultPermissions = Math.round(message.defaultPermissions));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUserGroup>, I>>(
    object: I
  ): MsgCreateUserGroup {
    const message = createBaseMsgCreateUserGroup();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.defaultPermissions = object.defaultPermissions ?? 0;
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgCreateUserGroupResponse(): MsgCreateUserGroupResponse {
  return { groupId: 0 };
}

export const MsgCreateUserGroupResponse = {
  encode(
    message: MsgCreateUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint32(message.groupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserGroupResponse();
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

  fromJSON(object: any): MsgCreateUserGroupResponse {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
    };
  },

  toJSON(message: MsgCreateUserGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateUserGroupResponse>, I>>(
    object: I
  ): MsgCreateUserGroupResponse {
    const message = createBaseMsgCreateUserGroupResponse();
    message.groupId = object.groupId ?? 0;
    return message;
  },
};

function createBaseMsgEditUserGroup(): MsgEditUserGroup {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    name: "",
    description: "",
    signer: "",
  };
}

export const MsgEditUserGroup = {
  encode(
    message: MsgEditUserGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditUserGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.groupId = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditUserGroup {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgEditUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditUserGroup>, I>>(
    object: I
  ): MsgEditUserGroup {
    const message = createBaseMsgEditUserGroup();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgEditUserGroupResponse(): MsgEditUserGroupResponse {
  return {};
}

export const MsgEditUserGroupResponse = {
  encode(
    _: MsgEditUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEditUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditUserGroupResponse();
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

  fromJSON(_: any): MsgEditUserGroupResponse {
    return {};
  },

  toJSON(_: MsgEditUserGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditUserGroupResponse>, I>>(
    _: I
  ): MsgEditUserGroupResponse {
    const message = createBaseMsgEditUserGroupResponse();
    return message;
  },
};

function createBaseMsgSetUserGroupPermissions(): MsgSetUserGroupPermissions {
  return { subspaceId: Long.UZERO, groupId: 0, permissions: 0, signer: "" };
}

export const MsgSetUserGroupPermissions = {
  encode(
    message: MsgSetUserGroupPermissions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    if (message.permissions !== 0) {
      writer.uint32(24).uint32(message.permissions);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetUserGroupPermissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUserGroupPermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.groupId = reader.uint32();
          break;
        case 3:
          message.permissions = reader.uint32();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetUserGroupPermissions {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgSetUserGroupPermissions): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.permissions !== undefined &&
      (obj.permissions = Math.round(message.permissions));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetUserGroupPermissions>, I>>(
    object: I
  ): MsgSetUserGroupPermissions {
    const message = createBaseMsgSetUserGroupPermissions();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.permissions = object.permissions ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgSetUserGroupPermissionsResponse(): MsgSetUserGroupPermissionsResponse {
  return {};
}

export const MsgSetUserGroupPermissionsResponse = {
  encode(
    _: MsgSetUserGroupPermissionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetUserGroupPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUserGroupPermissionsResponse();
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

  fromJSON(_: any): MsgSetUserGroupPermissionsResponse {
    return {};
  },

  toJSON(_: MsgSetUserGroupPermissionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgSetUserGroupPermissionsResponse>, I>
  >(_: I): MsgSetUserGroupPermissionsResponse {
    const message = createBaseMsgSetUserGroupPermissionsResponse();
    return message;
  },
};

function createBaseMsgDeleteUserGroup(): MsgDeleteUserGroup {
  return { subspaceId: Long.UZERO, groupId: 0, signer: "" };
}

export const MsgDeleteUserGroup = {
  encode(
    message: MsgDeleteUserGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUserGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.groupId = reader.uint32();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteUserGroup {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgDeleteUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserGroup>, I>>(
    object: I
  ): MsgDeleteUserGroup {
    const message = createBaseMsgDeleteUserGroup();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgDeleteUserGroupResponse(): MsgDeleteUserGroupResponse {
  return {};
}

export const MsgDeleteUserGroupResponse = {
  encode(
    _: MsgDeleteUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteUserGroupResponse();
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

  fromJSON(_: any): MsgDeleteUserGroupResponse {
    return {};
  },

  toJSON(_: MsgDeleteUserGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteUserGroupResponse>, I>>(
    _: I
  ): MsgDeleteUserGroupResponse {
    const message = createBaseMsgDeleteUserGroupResponse();
    return message;
  },
};

function createBaseMsgAddUserToUserGroup(): MsgAddUserToUserGroup {
  return { subspaceId: Long.UZERO, groupId: 0, user: "", signer: "" };
}

export const MsgAddUserToUserGroup = {
  encode(
    message: MsgAddUserToUserGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddUserToUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddUserToUserGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.groupId = reader.uint32();
          break;
        case 3:
          message.user = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddUserToUserGroup {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgAddUserToUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.user !== undefined && (obj.user = message.user);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddUserToUserGroup>, I>>(
    object: I
  ): MsgAddUserToUserGroup {
    const message = createBaseMsgAddUserToUserGroup();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.user = object.user ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgAddUserToUserGroupResponse(): MsgAddUserToUserGroupResponse {
  return {};
}

export const MsgAddUserToUserGroupResponse = {
  encode(
    _: MsgAddUserToUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddUserToUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddUserToUserGroupResponse();
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

  fromJSON(_: any): MsgAddUserToUserGroupResponse {
    return {};
  },

  toJSON(_: MsgAddUserToUserGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddUserToUserGroupResponse>, I>>(
    _: I
  ): MsgAddUserToUserGroupResponse {
    const message = createBaseMsgAddUserToUserGroupResponse();
    return message;
  },
};

function createBaseMsgRemoveUserFromUserGroup(): MsgRemoveUserFromUserGroup {
  return { subspaceId: Long.UZERO, groupId: 0, user: "", signer: "" };
}

export const MsgRemoveUserFromUserGroup = {
  encode(
    message: MsgRemoveUserFromUserGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveUserFromUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveUserFromUserGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.groupId = reader.uint32();
          break;
        case 3:
          message.user = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveUserFromUserGroup {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgRemoveUserFromUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.user !== undefined && (obj.user = message.user);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveUserFromUserGroup>, I>>(
    object: I
  ): MsgRemoveUserFromUserGroup {
    const message = createBaseMsgRemoveUserFromUserGroup();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.user = object.user ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgRemoveUserFromUserGroupResponse(): MsgRemoveUserFromUserGroupResponse {
  return {};
}

export const MsgRemoveUserFromUserGroupResponse = {
  encode(
    _: MsgRemoveUserFromUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemoveUserFromUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveUserFromUserGroupResponse();
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

  fromJSON(_: any): MsgRemoveUserFromUserGroupResponse {
    return {};
  },

  toJSON(_: MsgRemoveUserFromUserGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgRemoveUserFromUserGroupResponse>, I>
  >(_: I): MsgRemoveUserFromUserGroupResponse {
    const message = createBaseMsgRemoveUserFromUserGroupResponse();
    return message;
  },
};

function createBaseMsgSetUserPermissions(): MsgSetUserPermissions {
  return { subspaceId: Long.UZERO, user: "", permissions: 0, signer: "" };
}

export const MsgSetUserPermissions = {
  encode(
    message: MsgSetUserPermissions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    if (message.permissions !== 0) {
      writer.uint32(24).uint32(message.permissions);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetUserPermissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUserPermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.user = reader.string();
          break;
        case 3:
          message.permissions = reader.uint32();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetUserPermissions {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      user: isSet(object.user) ? String(object.user) : "",
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgSetUserPermissions): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.user !== undefined && (obj.user = message.user);
    message.permissions !== undefined &&
      (obj.permissions = Math.round(message.permissions));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetUserPermissions>, I>>(
    object: I
  ): MsgSetUserPermissions {
    const message = createBaseMsgSetUserPermissions();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.user = object.user ?? "";
    message.permissions = object.permissions ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgSetUserPermissionsResponse(): MsgSetUserPermissionsResponse {
  return {};
}

export const MsgSetUserPermissionsResponse = {
  encode(
    _: MsgSetUserPermissionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetUserPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUserPermissionsResponse();
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

  fromJSON(_: any): MsgSetUserPermissionsResponse {
    return {};
  },

  toJSON(_: MsgSetUserPermissionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetUserPermissionsResponse>, I>>(
    _: I
  ): MsgSetUserPermissionsResponse {
    const message = createBaseMsgSetUserPermissionsResponse();
    return message;
  },
};

/** Msg defines subspaces Msg service. */
export interface Msg {
  /** CreateSubspace allows to create a subspace */
  CreateSubspace(
    request: MsgCreateSubspace
  ): Promise<MsgCreateSubspaceResponse>;
  /** EditSubspace allows to edit a subspace */
  EditSubspace(request: MsgEditSubspace): Promise<MsgEditSubspaceResponse>;
  /** DeleteSubspace allows to delete a subspace */
  DeleteSubspace(
    request: MsgDeleteSubspace
  ): Promise<MsgDeleteSubspaceResponse>;
  /** CreateUserGroup allows to create a user group */
  CreateUserGroup(
    request: MsgCreateUserGroup
  ): Promise<MsgCreateUserGroupResponse>;
  /** EditUserGroup allows to edit a user group */
  EditUserGroup(request: MsgEditUserGroup): Promise<MsgEditUserGroupResponse>;
  /** SetUserGroupPermissions allows to set the permissions for a specific group */
  SetUserGroupPermissions(
    request: MsgSetUserGroupPermissions
  ): Promise<MsgSetUserGroupPermissionsResponse>;
  /** DeleteUserGroup allows to delete an existing user group */
  DeleteUserGroup(
    request: MsgDeleteUserGroup
  ): Promise<MsgDeleteUserGroupResponse>;
  /** AddUserToUserGroup allows to add a specific user to a specific user group */
  AddUserToUserGroup(
    request: MsgAddUserToUserGroup
  ): Promise<MsgAddUserToUserGroupResponse>;
  /**
   * RemoveUserFromUserGroup allows to remove a specific user from a specific
   * user group
   */
  RemoveUserFromUserGroup(
    request: MsgRemoveUserFromUserGroup
  ): Promise<MsgRemoveUserFromUserGroupResponse>;
  /** SetUserPermissions allows to set the permissions for a specific user */
  SetUserPermissions(
    request: MsgSetUserPermissions
  ): Promise<MsgSetUserPermissionsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateSubspace = this.CreateSubspace.bind(this);
    this.EditSubspace = this.EditSubspace.bind(this);
    this.DeleteSubspace = this.DeleteSubspace.bind(this);
    this.CreateUserGroup = this.CreateUserGroup.bind(this);
    this.EditUserGroup = this.EditUserGroup.bind(this);
    this.SetUserGroupPermissions = this.SetUserGroupPermissions.bind(this);
    this.DeleteUserGroup = this.DeleteUserGroup.bind(this);
    this.AddUserToUserGroup = this.AddUserToUserGroup.bind(this);
    this.RemoveUserFromUserGroup = this.RemoveUserFromUserGroup.bind(this);
    this.SetUserPermissions = this.SetUserPermissions.bind(this);
  }
  CreateSubspace(
    request: MsgCreateSubspace
  ): Promise<MsgCreateSubspaceResponse> {
    const data = MsgCreateSubspace.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Msg",
      "CreateSubspace",
      data
    );
    return promise.then((data) =>
      MsgCreateSubspaceResponse.decode(new _m0.Reader(data))
    );
  }

  EditSubspace(request: MsgEditSubspace): Promise<MsgEditSubspaceResponse> {
    const data = MsgEditSubspace.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Msg",
      "EditSubspace",
      data
    );
    return promise.then((data) =>
      MsgEditSubspaceResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteSubspace(
    request: MsgDeleteSubspace
  ): Promise<MsgDeleteSubspaceResponse> {
    const data = MsgDeleteSubspace.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Msg",
      "DeleteSubspace",
      data
    );
    return promise.then((data) =>
      MsgDeleteSubspaceResponse.decode(new _m0.Reader(data))
    );
  }

  CreateUserGroup(
    request: MsgCreateUserGroup
  ): Promise<MsgCreateUserGroupResponse> {
    const data = MsgCreateUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Msg",
      "CreateUserGroup",
      data
    );
    return promise.then((data) =>
      MsgCreateUserGroupResponse.decode(new _m0.Reader(data))
    );
  }

  EditUserGroup(request: MsgEditUserGroup): Promise<MsgEditUserGroupResponse> {
    const data = MsgEditUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Msg",
      "EditUserGroup",
      data
    );
    return promise.then((data) =>
      MsgEditUserGroupResponse.decode(new _m0.Reader(data))
    );
  }

  SetUserGroupPermissions(
    request: MsgSetUserGroupPermissions
  ): Promise<MsgSetUserGroupPermissionsResponse> {
    const data = MsgSetUserGroupPermissions.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Msg",
      "SetUserGroupPermissions",
      data
    );
    return promise.then((data) =>
      MsgSetUserGroupPermissionsResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteUserGroup(
    request: MsgDeleteUserGroup
  ): Promise<MsgDeleteUserGroupResponse> {
    const data = MsgDeleteUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Msg",
      "DeleteUserGroup",
      data
    );
    return promise.then((data) =>
      MsgDeleteUserGroupResponse.decode(new _m0.Reader(data))
    );
  }

  AddUserToUserGroup(
    request: MsgAddUserToUserGroup
  ): Promise<MsgAddUserToUserGroupResponse> {
    const data = MsgAddUserToUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Msg",
      "AddUserToUserGroup",
      data
    );
    return promise.then((data) =>
      MsgAddUserToUserGroupResponse.decode(new _m0.Reader(data))
    );
  }

  RemoveUserFromUserGroup(
    request: MsgRemoveUserFromUserGroup
  ): Promise<MsgRemoveUserFromUserGroupResponse> {
    const data = MsgRemoveUserFromUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Msg",
      "RemoveUserFromUserGroup",
      data
    );
    return promise.then((data) =>
      MsgRemoveUserFromUserGroupResponse.decode(new _m0.Reader(data))
    );
  }

  SetUserPermissions(
    request: MsgSetUserPermissions
  ): Promise<MsgSetUserPermissionsResponse> {
    const data = MsgSetUserPermissions.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Msg",
      "SetUserPermissions",
      data
    );
    return promise.then((data) =>
      MsgSetUserPermissionsResponse.decode(new _m0.Reader(data))
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
