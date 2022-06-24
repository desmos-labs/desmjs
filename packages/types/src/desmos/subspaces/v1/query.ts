/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Subspace,
  UserGroup,
  PermissionDetail,
} from "../../../desmos/subspaces/v1/models";

/** QuerySubspacesRequest is the request type for the Query/Subspaces RPC method */
export interface QuerySubspacesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QuerySubspacesResponse is the response type for the Query/Subspaces RPC
 * method
 */
export interface QuerySubspacesResponse {
  subspaces: Subspace[];
  pagination?: PageResponse;
}

/** QuerySubspace is the request type for the Query/Subspace RPC method */
export interface QuerySubspaceRequest {
  subspaceId: Long;
}

/** QuerySubspaceResponse is the response type for the Query/Subspace method */
export interface QuerySubspaceResponse {
  subspace?: Subspace;
}

/**
 * QueryUserGroupsRequest is the request type for the Query/UserGroups RPC
 * method
 */
export interface QueryUserGroupsRequest {
  subspaceId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryUserGroupsResponse is the response type for the Query/UserGroups RPC
 * method
 */
export interface QueryUserGroupsResponse {
  groups: UserGroup[];
  pagination?: PageResponse;
}

/** QueryUserGroupRequest is the request type for the Query/UserGroup RPC method */
export interface QueryUserGroupRequest {
  subspaceId: Long;
  groupId: number;
}

/**
 * QueryUserGroupResponse is the response type for the Query/UserGroup RPC
 * method
 */
export interface QueryUserGroupResponse {
  group?: UserGroup;
}

/**
 * QueryUserGroupMembersRequest is the request type for the
 * Query/UserGroupMembers RPC method
 */
export interface QueryUserGroupMembersRequest {
  subspaceId: Long;
  groupId: number;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryUserGroupMembersResponse is the response type for the
 * Query/UserGroupMembers RPC method
 */
export interface QueryUserGroupMembersResponse {
  members: string[];
  pagination?: PageResponse;
}

/**
 * QueryUserPermissionsRequest is the request type for the Query/UserPermissions
 * RPC method
 */
export interface QueryUserPermissionsRequest {
  subspaceId: Long;
  user: string;
}

/**
 * QueryUserPermissionsRequest is the response type for the
 * Query/UserPermissions method
 */
export interface QueryUserPermissionsResponse {
  permissions: number;
  details: PermissionDetail[];
}

function createBaseQuerySubspacesRequest(): QuerySubspacesRequest {
  return { pagination: undefined };
}

export const QuerySubspacesRequest = {
  encode(
    message: QuerySubspacesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubspacesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubspacesRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySubspacesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubspacesRequest>, I>>(
    object: I
  ): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQuerySubspacesResponse(): QuerySubspacesResponse {
  return { subspaces: [], pagination: undefined };
}

export const QuerySubspacesResponse = {
  encode(
    message: QuerySubspacesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubspacesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubspacesResponse {
    return {
      subspaces: Array.isArray(object?.subspaces)
        ? object.subspaces.map((e: any) => Subspace.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySubspacesResponse): unknown {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) =>
        e ? Subspace.toJSON(e) : undefined
      );
    } else {
      obj.subspaces = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubspacesResponse>, I>>(
    object: I
  ): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces =
      object.subspaces?.map((e) => Subspace.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQuerySubspaceRequest(): QuerySubspaceRequest {
  return { subspaceId: Long.UZERO };
}

export const QuerySubspaceRequest = {
  encode(
    message: QuerySubspaceRequest,
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
  ): QuerySubspaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspaceRequest();
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

  fromJSON(object: any): QuerySubspaceRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
    };
  },

  toJSON(message: QuerySubspaceRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubspaceRequest>, I>>(
    object: I
  ): QuerySubspaceRequest {
    const message = createBaseQuerySubspaceRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQuerySubspaceResponse(): QuerySubspaceResponse {
  return { subspace: undefined };
}

export const QuerySubspaceResponse = {
  encode(
    message: QuerySubspaceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subspace !== undefined) {
      Subspace.encode(message.subspace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubspaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = Subspace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubspaceResponse {
    return {
      subspace: isSet(object.subspace)
        ? Subspace.fromJSON(object.subspace)
        : undefined,
    };
  },

  toJSON(message: QuerySubspaceResponse): unknown {
    const obj: any = {};
    message.subspace !== undefined &&
      (obj.subspace = message.subspace
        ? Subspace.toJSON(message.subspace)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubspaceResponse>, I>>(
    object: I
  ): QuerySubspaceResponse {
    const message = createBaseQuerySubspaceResponse();
    message.subspace =
      object.subspace !== undefined && object.subspace !== null
        ? Subspace.fromPartial(object.subspace)
        : undefined;
    return message;
  },
};

function createBaseQueryUserGroupsRequest(): QueryUserGroupsRequest {
  return { subspaceId: Long.UZERO, pagination: undefined };
}

export const QueryUserGroupsRequest = {
  encode(
    message: QueryUserGroupsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserGroupsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserGroupsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserGroupsRequest>, I>>(
    object: I
  ): QueryUserGroupsRequest {
    const message = createBaseQueryUserGroupsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUserGroupsResponse(): QueryUserGroupsResponse {
  return { groups: [], pagination: undefined };
}

export const QueryUserGroupsResponse = {
  encode(
    message: QueryUserGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.groups) {
      UserGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(UserGroup.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserGroupsResponse {
    return {
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => UserGroup.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserGroupsResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? UserGroup.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserGroupsResponse>, I>>(
    object: I
  ): QueryUserGroupsResponse {
    const message = createBaseQueryUserGroupsResponse();
    message.groups = object.groups?.map((e) => UserGroup.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUserGroupRequest(): QueryUserGroupRequest {
  return { subspaceId: Long.UZERO, groupId: 0 };
}

export const QueryUserGroupRequest = {
  encode(
    message: QueryUserGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.groupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserGroupRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
    };
  },

  toJSON(message: QueryUserGroupRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserGroupRequest>, I>>(
    object: I
  ): QueryUserGroupRequest {
    const message = createBaseQueryUserGroupRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    return message;
  },
};

function createBaseQueryUserGroupResponse(): QueryUserGroupResponse {
  return { group: undefined };
}

export const QueryUserGroupResponse = {
  encode(
    message: QueryUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.group !== undefined) {
      UserGroup.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = UserGroup.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserGroupResponse {
    return {
      group: isSet(object.group) ? UserGroup.fromJSON(object.group) : undefined,
    };
  },

  toJSON(message: QueryUserGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined &&
      (obj.group = message.group ? UserGroup.toJSON(message.group) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserGroupResponse>, I>>(
    object: I
  ): QueryUserGroupResponse {
    const message = createBaseQueryUserGroupResponse();
    message.group =
      object.group !== undefined && object.group !== null
        ? UserGroup.fromPartial(object.group)
        : undefined;
    return message;
  },
};

function createBaseQueryUserGroupMembersRequest(): QueryUserGroupMembersRequest {
  return { subspaceId: Long.UZERO, groupId: 0, pagination: undefined };
}

export const QueryUserGroupMembersRequest = {
  encode(
    message: QueryUserGroupMembersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserGroupMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupMembersRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserGroupMembersRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserGroupMembersRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserGroupMembersRequest>, I>>(
    object: I
  ): QueryUserGroupMembersRequest {
    const message = createBaseQueryUserGroupMembersRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUserGroupMembersResponse(): QueryUserGroupMembersResponse {
  return { members: [], pagination: undefined };
}

export const QueryUserGroupMembersResponse = {
  encode(
    message: QueryUserGroupMembersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.members) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserGroupMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserGroupMembersResponse {
    return {
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserGroupMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) => e);
    } else {
      obj.members = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserGroupMembersResponse>, I>>(
    object: I
  ): QueryUserGroupMembersResponse {
    const message = createBaseQueryUserGroupMembersResponse();
    message.members = object.members?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUserPermissionsRequest(): QueryUserPermissionsRequest {
  return { subspaceId: Long.UZERO, user: "" };
}

export const QueryUserPermissionsRequest = {
  encode(
    message: QueryUserPermissionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserPermissionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPermissionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserPermissionsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: QueryUserPermissionsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserPermissionsRequest>, I>>(
    object: I
  ): QueryUserPermissionsRequest {
    const message = createBaseQueryUserPermissionsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseQueryUserPermissionsResponse(): QueryUserPermissionsResponse {
  return { permissions: 0, details: [] };
}

export const QueryUserPermissionsResponse = {
  encode(
    message: QueryUserPermissionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.permissions !== 0) {
      writer.uint32(8).uint32(message.permissions);
    }
    for (const v of message.details) {
      PermissionDetail.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserPermissionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPermissionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permissions = reader.uint32();
          break;
        case 2:
          message.details.push(
            PermissionDetail.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserPermissionsResponse {
    return {
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
      details: Array.isArray(object?.details)
        ? object.details.map((e: any) => PermissionDetail.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryUserPermissionsResponse): unknown {
    const obj: any = {};
    message.permissions !== undefined &&
      (obj.permissions = Math.round(message.permissions));
    if (message.details) {
      obj.details = message.details.map((e) =>
        e ? PermissionDetail.toJSON(e) : undefined
      );
    } else {
      obj.details = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserPermissionsResponse>, I>>(
    object: I
  ): QueryUserPermissionsResponse {
    const message = createBaseQueryUserPermissionsResponse();
    message.permissions = object.permissions ?? 0;
    message.details =
      object.details?.map((e) => PermissionDetail.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service */
export interface Query {
  /** Subspaces queries all the subspaces inside Desmos */
  Subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
  /** Subspace queries all the information about the subspace with the given id */
  Subspace(request: QuerySubspaceRequest): Promise<QuerySubspaceResponse>;
  /**
   * UserGroups queries all the groups that are present inside the subspace with
   * the given id
   */
  UserGroups(request: QueryUserGroupsRequest): Promise<QueryUserGroupsResponse>;
  /**
   * UserGroup queries the user group having the given id inside the specific
   * subspace
   */
  UserGroup(request: QueryUserGroupRequest): Promise<QueryUserGroupResponse>;
  /** UserGroupMembers queries all the members of a given user group */
  UserGroupMembers(
    request: QueryUserGroupMembersRequest
  ): Promise<QueryUserGroupMembersResponse>;
  /** UserPermissions queries the permissions for the given user */
  UserPermissions(
    request: QueryUserPermissionsRequest
  ): Promise<QueryUserPermissionsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Subspaces = this.Subspaces.bind(this);
    this.Subspace = this.Subspace.bind(this);
    this.UserGroups = this.UserGroups.bind(this);
    this.UserGroup = this.UserGroup.bind(this);
    this.UserGroupMembers = this.UserGroupMembers.bind(this);
    this.UserPermissions = this.UserPermissions.bind(this);
  }
  Subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponse> {
    const data = QuerySubspacesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Query",
      "Subspaces",
      data
    );
    return promise.then((data) =>
      QuerySubspacesResponse.decode(new _m0.Reader(data))
    );
  }

  Subspace(request: QuerySubspaceRequest): Promise<QuerySubspaceResponse> {
    const data = QuerySubspaceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Query",
      "Subspace",
      data
    );
    return promise.then((data) =>
      QuerySubspaceResponse.decode(new _m0.Reader(data))
    );
  }

  UserGroups(
    request: QueryUserGroupsRequest
  ): Promise<QueryUserGroupsResponse> {
    const data = QueryUserGroupsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Query",
      "UserGroups",
      data
    );
    return promise.then((data) =>
      QueryUserGroupsResponse.decode(new _m0.Reader(data))
    );
  }

  UserGroup(request: QueryUserGroupRequest): Promise<QueryUserGroupResponse> {
    const data = QueryUserGroupRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Query",
      "UserGroup",
      data
    );
    return promise.then((data) =>
      QueryUserGroupResponse.decode(new _m0.Reader(data))
    );
  }

  UserGroupMembers(
    request: QueryUserGroupMembersRequest
  ): Promise<QueryUserGroupMembersResponse> {
    const data = QueryUserGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Query",
      "UserGroupMembers",
      data
    );
    return promise.then((data) =>
      QueryUserGroupMembersResponse.decode(new _m0.Reader(data))
    );
  }

  UserPermissions(
    request: QueryUserPermissionsRequest
  ): Promise<QueryUserPermissionsResponse> {
    const data = QueryUserPermissionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1.Query",
      "UserPermissions",
      data
    );
    return promise.then((data) =>
      QueryUserPermissionsResponse.decode(new _m0.Reader(data))
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
