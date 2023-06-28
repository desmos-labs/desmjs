/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Subspace,
  SubspaceAmino,
  Section,
  SectionAmino,
  UserGroup,
  UserGroupAmino,
} from "./models";
import { Grant, GrantAmino } from "./models_feegrant";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.subspaces.v3";
/** QuerySubspacesRequest is the request type for the Query/Subspaces RPC method */
export interface QuerySubspacesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QuerySubspacesRequestProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QuerySubspacesRequest";
  value: Uint8Array;
}
/** QuerySubspacesRequest is the request type for the Query/Subspaces RPC method */
export interface QuerySubspacesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySubspacesRequestAminoMsg {
  type: "/desmos.subspaces.v3.QuerySubspacesRequest";
  value: QuerySubspacesRequestAmino;
}
/**
 * QuerySubspacesResponse is the response type for the Query/Subspaces RPC
 * method
 */
export interface QuerySubspacesResponse {
  subspaces: Subspace[];
  pagination?: PageResponse;
}
export interface QuerySubspacesResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QuerySubspacesResponse";
  value: Uint8Array;
}
/**
 * QuerySubspacesResponse is the response type for the Query/Subspaces RPC
 * method
 */
export interface QuerySubspacesResponseAmino {
  subspaces: SubspaceAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySubspacesResponseAminoMsg {
  type: "/desmos.subspaces.v3.QuerySubspacesResponse";
  value: QuerySubspacesResponseAmino;
}
/** QuerySubspace is the request type for the Query/Subspace RPC method */
export interface QuerySubspaceRequest {
  /** Id of the subspace to query */
  subspaceId: Long;
}
export interface QuerySubspaceRequestProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QuerySubspaceRequest";
  value: Uint8Array;
}
/** QuerySubspace is the request type for the Query/Subspace RPC method */
export interface QuerySubspaceRequestAmino {
  /** Id of the subspace to query */
  subspace_id: string;
}
export interface QuerySubspaceRequestAminoMsg {
  type: "/desmos.subspaces.v3.QuerySubspaceRequest";
  value: QuerySubspaceRequestAmino;
}
/** QuerySubspaceResponse is the response type for the Query/Subspace method */
export interface QuerySubspaceResponse {
  subspace?: Subspace;
}
export interface QuerySubspaceResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QuerySubspaceResponse";
  value: Uint8Array;
}
/** QuerySubspaceResponse is the response type for the Query/Subspace method */
export interface QuerySubspaceResponseAmino {
  subspace?: SubspaceAmino;
}
export interface QuerySubspaceResponseAminoMsg {
  type: "/desmos.subspaces.v3.QuerySubspaceResponse";
  value: QuerySubspaceResponseAmino;
}
/** QuerySectionsRequest is the request type for Query/Sections RPC method */
export interface QuerySectionsRequest {
  /** Id of the subspace to query the sections for */
  subspaceId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QuerySectionsRequestProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QuerySectionsRequest";
  value: Uint8Array;
}
/** QuerySectionsRequest is the request type for Query/Sections RPC method */
export interface QuerySectionsRequestAmino {
  /** Id of the subspace to query the sections for */
  subspace_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySectionsRequestAminoMsg {
  type: "/desmos.subspaces.v3.QuerySectionsRequest";
  value: QuerySectionsRequestAmino;
}
/** QuerySectionsResponse is the response type for Query/Sections RPC method */
export interface QuerySectionsResponse {
  sections: Section[];
  pagination?: PageResponse;
}
export interface QuerySectionsResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QuerySectionsResponse";
  value: Uint8Array;
}
/** QuerySectionsResponse is the response type for Query/Sections RPC method */
export interface QuerySectionsResponseAmino {
  sections: SectionAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySectionsResponseAminoMsg {
  type: "/desmos.subspaces.v3.QuerySectionsResponse";
  value: QuerySectionsResponseAmino;
}
/** QuerySectionRequest is the request type for Query/Section RPC method */
export interface QuerySectionRequest {
  /** Id of the subspace inside which to search for */
  subspaceId: Long;
  /** Id of the searched section */
  sectionId: number;
}
export interface QuerySectionRequestProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QuerySectionRequest";
  value: Uint8Array;
}
/** QuerySectionRequest is the request type for Query/Section RPC method */
export interface QuerySectionRequestAmino {
  /** Id of the subspace inside which to search for */
  subspace_id: string;
  /** Id of the searched section */
  section_id: number;
}
export interface QuerySectionRequestAminoMsg {
  type: "/desmos.subspaces.v3.QuerySectionRequest";
  value: QuerySectionRequestAmino;
}
/** QuerySectionResponse is the response type for Query/Section RPC method */
export interface QuerySectionResponse {
  section?: Section;
}
export interface QuerySectionResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QuerySectionResponse";
  value: Uint8Array;
}
/** QuerySectionResponse is the response type for Query/Section RPC method */
export interface QuerySectionResponseAmino {
  section?: SectionAmino;
}
export interface QuerySectionResponseAminoMsg {
  type: "/desmos.subspaces.v3.QuerySectionResponse";
  value: QuerySectionResponseAmino;
}
/**
 * QueryUserGroupsRequest is the request type for the Query/UserGroups RPC
 * method
 */
export interface QueryUserGroupsRequest {
  /** Id of the subspace to query the groups for */
  subspaceId: Long;
  /** (optional) Section id to query the groups for */
  sectionId: number;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryUserGroupsRequestProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryUserGroupsRequest";
  value: Uint8Array;
}
/**
 * QueryUserGroupsRequest is the request type for the Query/UserGroups RPC
 * method
 */
export interface QueryUserGroupsRequestAmino {
  /** Id of the subspace to query the groups for */
  subspace_id: string;
  /** (optional) Section id to query the groups for */
  section_id: number;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryUserGroupsRequestAminoMsg {
  type: "/desmos.subspaces.v3.QueryUserGroupsRequest";
  value: QueryUserGroupsRequestAmino;
}
/**
 * QueryUserGroupsResponse is the response type for the Query/UserGroups RPC
 * method
 */
export interface QueryUserGroupsResponse {
  groups: UserGroup[];
  pagination?: PageResponse;
}
export interface QueryUserGroupsResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryUserGroupsResponse";
  value: Uint8Array;
}
/**
 * QueryUserGroupsResponse is the response type for the Query/UserGroups RPC
 * method
 */
export interface QueryUserGroupsResponseAmino {
  groups: UserGroupAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUserGroupsResponseAminoMsg {
  type: "/desmos.subspaces.v3.QueryUserGroupsResponse";
  value: QueryUserGroupsResponseAmino;
}
/** QueryUserGroupRequest is the request type for the Query/UserGroup RPC method */
export interface QueryUserGroupRequest {
  /** Id of the subspace that contains the group */
  subspaceId: Long;
  /** Id of the group to query */
  groupId: number;
}
export interface QueryUserGroupRequestProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryUserGroupRequest";
  value: Uint8Array;
}
/** QueryUserGroupRequest is the request type for the Query/UserGroup RPC method */
export interface QueryUserGroupRequestAmino {
  /** Id of the subspace that contains the group */
  subspace_id: string;
  /** Id of the group to query */
  group_id: number;
}
export interface QueryUserGroupRequestAminoMsg {
  type: "/desmos.subspaces.v3.QueryUserGroupRequest";
  value: QueryUserGroupRequestAmino;
}
/**
 * QueryUserGroupResponse is the response type for the Query/UserGroup RPC
 * method
 */
export interface QueryUserGroupResponse {
  group?: UserGroup;
}
export interface QueryUserGroupResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryUserGroupResponse";
  value: Uint8Array;
}
/**
 * QueryUserGroupResponse is the response type for the Query/UserGroup RPC
 * method
 */
export interface QueryUserGroupResponseAmino {
  group?: UserGroupAmino;
}
export interface QueryUserGroupResponseAminoMsg {
  type: "/desmos.subspaces.v3.QueryUserGroupResponse";
  value: QueryUserGroupResponseAmino;
}
/**
 * QueryUserGroupMembersRequest is the request type for the
 * Query/UserGroupMembers RPC method
 */
export interface QueryUserGroupMembersRequest {
  /** Id of the subspace that contains the group */
  subspaceId: Long;
  /** Id of the user group to query the members for */
  groupId: number;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryUserGroupMembersRequestProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryUserGroupMembersRequest";
  value: Uint8Array;
}
/**
 * QueryUserGroupMembersRequest is the request type for the
 * Query/UserGroupMembers RPC method
 */
export interface QueryUserGroupMembersRequestAmino {
  /** Id of the subspace that contains the group */
  subspace_id: string;
  /** Id of the user group to query the members for */
  group_id: number;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryUserGroupMembersRequestAminoMsg {
  type: "/desmos.subspaces.v3.QueryUserGroupMembersRequest";
  value: QueryUserGroupMembersRequestAmino;
}
/**
 * QueryUserGroupMembersResponse is the response type for the
 * Query/UserGroupMembers RPC method
 */
export interface QueryUserGroupMembersResponse {
  members: string[];
  pagination?: PageResponse;
}
export interface QueryUserGroupMembersResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryUserGroupMembersResponse";
  value: Uint8Array;
}
/**
 * QueryUserGroupMembersResponse is the response type for the
 * Query/UserGroupMembers RPC method
 */
export interface QueryUserGroupMembersResponseAmino {
  members: string[];
  pagination?: PageResponseAmino;
}
export interface QueryUserGroupMembersResponseAminoMsg {
  type: "/desmos.subspaces.v3.QueryUserGroupMembersResponse";
  value: QueryUserGroupMembersResponseAmino;
}
/**
 * QueryUserPermissionsRequest is the request type for the Query/UserPermissions
 * RPC method
 */
export interface QueryUserPermissionsRequest {
  /** Id of the subspace to query the permissions for */
  subspaceId: Long;
  /** Id of the section to query the permissions for */
  sectionId: number;
  /** Address of the user to query the permissions for */
  user: string;
}
export interface QueryUserPermissionsRequestProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryUserPermissionsRequest";
  value: Uint8Array;
}
/**
 * QueryUserPermissionsRequest is the request type for the Query/UserPermissions
 * RPC method
 */
export interface QueryUserPermissionsRequestAmino {
  /** Id of the subspace to query the permissions for */
  subspace_id: string;
  /** Id of the section to query the permissions for */
  section_id: number;
  /** Address of the user to query the permissions for */
  user: string;
}
export interface QueryUserPermissionsRequestAminoMsg {
  type: "/desmos.subspaces.v3.QueryUserPermissionsRequest";
  value: QueryUserPermissionsRequestAmino;
}
/**
 * QueryUserPermissionsRequest is the response type for the
 * Query/UserPermissions method
 */
export interface QueryUserPermissionsResponse {
  permissions: string[];
  details: PermissionDetail[];
}
export interface QueryUserPermissionsResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryUserPermissionsResponse";
  value: Uint8Array;
}
/**
 * QueryUserPermissionsRequest is the response type for the
 * Query/UserPermissions method
 */
export interface QueryUserPermissionsResponseAmino {
  permissions: string[];
  details: PermissionDetailAmino[];
}
export interface QueryUserPermissionsResponseAminoMsg {
  type: "/desmos.subspaces.v3.QueryUserPermissionsResponse";
  value: QueryUserPermissionsResponseAmino;
}
/** PermissionDetail contains the details data of a permission */
export interface PermissionDetail {
  /** Id of the subspace for which this permission is valid */
  subspaceId: Long;
  /** Id of the section for which this permission is valid */
  sectionId: number;
  /** User represents a user permission */
  user?: PermissionDetail_User;
  /** Group represents a group permission */
  group?: PermissionDetail_Group;
}
export interface PermissionDetailProtoMsg {
  typeUrl: "/desmos.subspaces.v3.PermissionDetail";
  value: Uint8Array;
}
/** PermissionDetail contains the details data of a permission */
export interface PermissionDetailAmino {
  /** Id of the subspace for which this permission is valid */
  subspace_id: string;
  /** Id of the section for which this permission is valid */
  section_id: number;
  /** User represents a user permission */
  user?: PermissionDetail_UserAmino;
  /** Group represents a group permission */
  group?: PermissionDetail_GroupAmino;
}
export interface PermissionDetailAminoMsg {
  type: "/desmos.subspaces.v3.PermissionDetail";
  value: PermissionDetailAmino;
}
/** User is a permission that has been set to a specific user */
export interface PermissionDetail_User {
  /** User for which the permission was set */
  user: string;
  /** Permissions set to the user */
  permission: string[];
}
export interface PermissionDetail_UserProtoMsg {
  typeUrl: "/desmos.subspaces.v3.User";
  value: Uint8Array;
}
/** User is a permission that has been set to a specific user */
export interface PermissionDetail_UserAmino {
  /** User for which the permission was set */
  user: string;
  /** Permissions set to the user */
  permission: string[];
}
export interface PermissionDetail_UserAminoMsg {
  type: "/desmos.subspaces.v3.User";
  value: PermissionDetail_UserAmino;
}
/** Group is a permission that has been set to a user group */
export interface PermissionDetail_Group {
  /** Unique id of the group */
  groupId: number;
  /** Permissions set to the group */
  permission: string[];
}
export interface PermissionDetail_GroupProtoMsg {
  typeUrl: "/desmos.subspaces.v3.Group";
  value: Uint8Array;
}
/** Group is a permission that has been set to a user group */
export interface PermissionDetail_GroupAmino {
  /** Unique id of the group */
  group_id: number;
  /** Permissions set to the group */
  permission: string[];
}
export interface PermissionDetail_GroupAminoMsg {
  type: "/desmos.subspaces.v3.Group";
  value: PermissionDetail_GroupAmino;
}
/**
 * QueryUserAllowancesRequest is the request type for the Query/UserAllowances
 * RPC method
 */
export interface QueryUserAllowancesRequest {
  /** Id of the subspace for which to get the grant(s) */
  subspaceId: Long;
  /** (Optional) Address of the user that was granted an allowance */
  grantee: string;
  /** pagination defines an pagination for the request */
  pagination?: PageRequest;
}
export interface QueryUserAllowancesRequestProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryUserAllowancesRequest";
  value: Uint8Array;
}
/**
 * QueryUserAllowancesRequest is the request type for the Query/UserAllowances
 * RPC method
 */
export interface QueryUserAllowancesRequestAmino {
  /** Id of the subspace for which to get the grant(s) */
  subspace_id: string;
  /** (Optional) Address of the user that was granted an allowance */
  grantee: string;
  /** pagination defines an pagination for the request */
  pagination?: PageRequestAmino;
}
export interface QueryUserAllowancesRequestAminoMsg {
  type: "/desmos.subspaces.v3.QueryUserAllowancesRequest";
  value: QueryUserAllowancesRequestAmino;
}
/**
 * QueryUserAllowancesResponse is the response type for the Query/UserAllowances
 * RPC method
 */
export interface QueryUserAllowancesResponse {
  grants: Grant[];
  /** pagination defines an pagination for the response */
  pagination?: PageResponse;
}
export interface QueryUserAllowancesResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryUserAllowancesResponse";
  value: Uint8Array;
}
/**
 * QueryUserAllowancesResponse is the response type for the Query/UserAllowances
 * RPC method
 */
export interface QueryUserAllowancesResponseAmino {
  grants: GrantAmino[];
  /** pagination defines an pagination for the response */
  pagination?: PageResponseAmino;
}
export interface QueryUserAllowancesResponseAminoMsg {
  type: "/desmos.subspaces.v3.QueryUserAllowancesResponse";
  value: QueryUserAllowancesResponseAmino;
}
/**
 * QueryGroupAllowancesRequest is the request type for the Query/GroupAllowances
 * RPC method
 */
export interface QueryGroupAllowancesRequest {
  /** Id of the subspace for which to get the grant(s) */
  subspaceId: Long;
  /** (optional) Address of the user group that was granted the allowance(s) */
  groupId: number;
  /** pagination defines an pagination for the request */
  pagination?: PageRequest;
}
export interface QueryGroupAllowancesRequestProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryGroupAllowancesRequest";
  value: Uint8Array;
}
/**
 * QueryGroupAllowancesRequest is the request type for the Query/GroupAllowances
 * RPC method
 */
export interface QueryGroupAllowancesRequestAmino {
  /** Id of the subspace for which to get the grant(s) */
  subspace_id: string;
  /** (optional) Address of the user group that was granted the allowance(s) */
  group_id: number;
  /** pagination defines an pagination for the request */
  pagination?: PageRequestAmino;
}
export interface QueryGroupAllowancesRequestAminoMsg {
  type: "/desmos.subspaces.v3.QueryGroupAllowancesRequest";
  value: QueryGroupAllowancesRequestAmino;
}
/**
 * QueryGroupAllowancesResponse is the response type for the
 * Query/GroupAllowances RPC method
 */
export interface QueryGroupAllowancesResponse {
  grants: Grant[];
  /** pagination defines an pagination for the response */
  pagination?: PageResponse;
}
export interface QueryGroupAllowancesResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.QueryGroupAllowancesResponse";
  value: Uint8Array;
}
/**
 * QueryGroupAllowancesResponse is the response type for the
 * Query/GroupAllowances RPC method
 */
export interface QueryGroupAllowancesResponseAmino {
  grants: GrantAmino[];
  /** pagination defines an pagination for the response */
  pagination?: PageResponseAmino;
}
export interface QueryGroupAllowancesResponseAminoMsg {
  type: "/desmos.subspaces.v3.QueryGroupAllowancesResponse";
  value: QueryGroupAllowancesResponseAmino;
}
function createBaseQuerySubspacesRequest(): QuerySubspacesRequest {
  return {
    pagination: undefined,
  };
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
  fromAmino(object: QuerySubspacesRequestAmino): QuerySubspacesRequest {
    return {
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QuerySubspacesRequest): QuerySubspacesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubspacesRequestAminoMsg): QuerySubspacesRequest {
    return QuerySubspacesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubspacesRequestProtoMsg): QuerySubspacesRequest {
    return QuerySubspacesRequest.decode(message.value);
  },
  toProto(message: QuerySubspacesRequest): Uint8Array {
    return QuerySubspacesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QuerySubspacesRequest",
      value: QuerySubspacesRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySubspacesResponse(): QuerySubspacesResponse {
  return {
    subspaces: [],
    pagination: undefined,
  };
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
  fromAmino(object: QuerySubspacesResponseAmino): QuerySubspacesResponse {
    return {
      subspaces: Array.isArray(object?.subspaces)
        ? object.subspaces.map((e: any) => Subspace.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QuerySubspacesResponse): QuerySubspacesResponseAmino {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) =>
        e ? Subspace.toAmino(e) : undefined
      );
    } else {
      obj.subspaces = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubspacesResponseAminoMsg): QuerySubspacesResponse {
    return QuerySubspacesResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QuerySubspacesResponseProtoMsg
  ): QuerySubspacesResponse {
    return QuerySubspacesResponse.decode(message.value);
  },
  toProto(message: QuerySubspacesResponse): Uint8Array {
    return QuerySubspacesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QuerySubspacesResponse",
      value: QuerySubspacesResponse.encode(message).finish(),
    };
  },
};
function createBaseQuerySubspaceRequest(): QuerySubspaceRequest {
  return {
    subspaceId: Long.UZERO,
  };
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
        ? Long.fromValue(object.subspaceId)
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
  fromAmino(object: QuerySubspaceRequestAmino): QuerySubspaceRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
    };
  },
  toAmino(message: QuerySubspaceRequest): QuerySubspaceRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubspaceRequestAminoMsg): QuerySubspaceRequest {
    return QuerySubspaceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubspaceRequestProtoMsg): QuerySubspaceRequest {
    return QuerySubspaceRequest.decode(message.value);
  },
  toProto(message: QuerySubspaceRequest): Uint8Array {
    return QuerySubspaceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspaceRequest): QuerySubspaceRequestProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QuerySubspaceRequest",
      value: QuerySubspaceRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySubspaceResponse(): QuerySubspaceResponse {
  return {
    subspace: undefined,
  };
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
  fromAmino(object: QuerySubspaceResponseAmino): QuerySubspaceResponse {
    return {
      subspace: object?.subspace
        ? Subspace.fromAmino(object.subspace)
        : undefined,
    };
  },
  toAmino(message: QuerySubspaceResponse): QuerySubspaceResponseAmino {
    const obj: any = {};
    obj.subspace = message.subspace
      ? Subspace.toAmino(message.subspace)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubspaceResponseAminoMsg): QuerySubspaceResponse {
    return QuerySubspaceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubspaceResponseProtoMsg): QuerySubspaceResponse {
    return QuerySubspaceResponse.decode(message.value);
  },
  toProto(message: QuerySubspaceResponse): Uint8Array {
    return QuerySubspaceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspaceResponse): QuerySubspaceResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QuerySubspaceResponse",
      value: QuerySubspaceResponse.encode(message).finish(),
    };
  },
};
function createBaseQuerySectionsRequest(): QuerySectionsRequest {
  return {
    subspaceId: Long.UZERO,
    pagination: undefined,
  };
}
export const QuerySectionsRequest = {
  encode(
    message: QuerySectionsRequest,
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
  ): QuerySectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySectionsRequest();
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
  fromJSON(object: any): QuerySectionsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QuerySectionsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySectionsRequest>, I>>(
    object: I
  ): QuerySectionsRequest {
    const message = createBaseQuerySectionsRequest();
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
  fromAmino(object: QuerySectionsRequestAmino): QuerySectionsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QuerySectionsRequest): QuerySectionsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySectionsRequestAminoMsg): QuerySectionsRequest {
    return QuerySectionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySectionsRequestProtoMsg): QuerySectionsRequest {
    return QuerySectionsRequest.decode(message.value);
  },
  toProto(message: QuerySectionsRequest): Uint8Array {
    return QuerySectionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySectionsRequest): QuerySectionsRequestProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QuerySectionsRequest",
      value: QuerySectionsRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySectionsResponse(): QuerySectionsResponse {
  return {
    sections: [],
    pagination: undefined,
  };
}
export const QuerySectionsResponse = {
  encode(
    message: QuerySectionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sections) {
      Section.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QuerySectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sections.push(Section.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySectionsResponse {
    return {
      sections: Array.isArray(object?.sections)
        ? object.sections.map((e: any) => Section.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QuerySectionsResponse): unknown {
    const obj: any = {};
    if (message.sections) {
      obj.sections = message.sections.map((e) =>
        e ? Section.toJSON(e) : undefined
      );
    } else {
      obj.sections = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySectionsResponse>, I>>(
    object: I
  ): QuerySectionsResponse {
    const message = createBaseQuerySectionsResponse();
    message.sections =
      object.sections?.map((e) => Section.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QuerySectionsResponseAmino): QuerySectionsResponse {
    return {
      sections: Array.isArray(object?.sections)
        ? object.sections.map((e: any) => Section.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QuerySectionsResponse): QuerySectionsResponseAmino {
    const obj: any = {};
    if (message.sections) {
      obj.sections = message.sections.map((e) =>
        e ? Section.toAmino(e) : undefined
      );
    } else {
      obj.sections = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySectionsResponseAminoMsg): QuerySectionsResponse {
    return QuerySectionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySectionsResponseProtoMsg): QuerySectionsResponse {
    return QuerySectionsResponse.decode(message.value);
  },
  toProto(message: QuerySectionsResponse): Uint8Array {
    return QuerySectionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySectionsResponse): QuerySectionsResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QuerySectionsResponse",
      value: QuerySectionsResponse.encode(message).finish(),
    };
  },
};
function createBaseQuerySectionRequest(): QuerySectionRequest {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
  };
}
export const QuerySectionRequest = {
  encode(
    message: QuerySectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.sectionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySectionRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
    };
  },
  toJSON(message: QuerySectionRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySectionRequest>, I>>(
    object: I
  ): QuerySectionRequest {
    const message = createBaseQuerySectionRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    return message;
  },
  fromAmino(object: QuerySectionRequestAmino): QuerySectionRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
    };
  },
  toAmino(message: QuerySectionRequest): QuerySectionRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    return obj;
  },
  fromAminoMsg(object: QuerySectionRequestAminoMsg): QuerySectionRequest {
    return QuerySectionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySectionRequestProtoMsg): QuerySectionRequest {
    return QuerySectionRequest.decode(message.value);
  },
  toProto(message: QuerySectionRequest): Uint8Array {
    return QuerySectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySectionRequest): QuerySectionRequestProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QuerySectionRequest",
      value: QuerySectionRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySectionResponse(): QuerySectionResponse {
  return {
    section: undefined,
  };
}
export const QuerySectionResponse = {
  encode(
    message: QuerySectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.section !== undefined) {
      Section.encode(message.section, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.section = Section.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySectionResponse {
    return {
      section: isSet(object.section)
        ? Section.fromJSON(object.section)
        : undefined,
    };
  },
  toJSON(message: QuerySectionResponse): unknown {
    const obj: any = {};
    message.section !== undefined &&
      (obj.section = message.section
        ? Section.toJSON(message.section)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySectionResponse>, I>>(
    object: I
  ): QuerySectionResponse {
    const message = createBaseQuerySectionResponse();
    message.section =
      object.section !== undefined && object.section !== null
        ? Section.fromPartial(object.section)
        : undefined;
    return message;
  },
  fromAmino(object: QuerySectionResponseAmino): QuerySectionResponse {
    return {
      section: object?.section ? Section.fromAmino(object.section) : undefined,
    };
  },
  toAmino(message: QuerySectionResponse): QuerySectionResponseAmino {
    const obj: any = {};
    obj.section = message.section
      ? Section.toAmino(message.section)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySectionResponseAminoMsg): QuerySectionResponse {
    return QuerySectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySectionResponseProtoMsg): QuerySectionResponse {
    return QuerySectionResponse.decode(message.value);
  },
  toProto(message: QuerySectionResponse): Uint8Array {
    return QuerySectionResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySectionResponse): QuerySectionResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QuerySectionResponse",
      value: QuerySectionResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryUserGroupsRequest(): QueryUserGroupsRequest {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    pagination: undefined,
  };
}
export const QueryUserGroupsRequest = {
  encode(
    message: QueryUserGroupsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
          message.sectionId = reader.uint32();
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
  fromJSON(object: any): QueryUserGroupsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryUserGroupsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
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
    message.sectionId = object.sectionId ?? 0;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryUserGroupsRequestAmino): QueryUserGroupsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryUserGroupsRequest): QueryUserGroupsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserGroupsRequestAminoMsg): QueryUserGroupsRequest {
    return QueryUserGroupsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryUserGroupsRequestProtoMsg
  ): QueryUserGroupsRequest {
    return QueryUserGroupsRequest.decode(message.value);
  },
  toProto(message: QueryUserGroupsRequest): Uint8Array {
    return QueryUserGroupsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserGroupsRequest): QueryUserGroupsRequestProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryUserGroupsRequest",
      value: QueryUserGroupsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryUserGroupsResponse(): QueryUserGroupsResponse {
  return {
    groups: [],
    pagination: undefined,
  };
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
  fromAmino(object: QueryUserGroupsResponseAmino): QueryUserGroupsResponse {
    return {
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => UserGroup.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryUserGroupsResponse): QueryUserGroupsResponseAmino {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? UserGroup.toAmino(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryUserGroupsResponseAminoMsg
  ): QueryUserGroupsResponse {
    return QueryUserGroupsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryUserGroupsResponseProtoMsg
  ): QueryUserGroupsResponse {
    return QueryUserGroupsResponse.decode(message.value);
  },
  toProto(message: QueryUserGroupsResponse): Uint8Array {
    return QueryUserGroupsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryUserGroupsResponse
  ): QueryUserGroupsResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryUserGroupsResponse",
      value: QueryUserGroupsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryUserGroupRequest(): QueryUserGroupRequest {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
  };
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
        ? Long.fromValue(object.subspaceId)
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
  fromAmino(object: QueryUserGroupRequestAmino): QueryUserGroupRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      groupId: object.group_id,
    };
  },
  toAmino(message: QueryUserGroupRequest): QueryUserGroupRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.group_id = message.groupId;
    return obj;
  },
  fromAminoMsg(object: QueryUserGroupRequestAminoMsg): QueryUserGroupRequest {
    return QueryUserGroupRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserGroupRequestProtoMsg): QueryUserGroupRequest {
    return QueryUserGroupRequest.decode(message.value);
  },
  toProto(message: QueryUserGroupRequest): Uint8Array {
    return QueryUserGroupRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserGroupRequest): QueryUserGroupRequestProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryUserGroupRequest",
      value: QueryUserGroupRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryUserGroupResponse(): QueryUserGroupResponse {
  return {
    group: undefined,
  };
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
  fromAmino(object: QueryUserGroupResponseAmino): QueryUserGroupResponse {
    return {
      group: object?.group ? UserGroup.fromAmino(object.group) : undefined,
    };
  },
  toAmino(message: QueryUserGroupResponse): QueryUserGroupResponseAmino {
    const obj: any = {};
    obj.group = message.group ? UserGroup.toAmino(message.group) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserGroupResponseAminoMsg): QueryUserGroupResponse {
    return QueryUserGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryUserGroupResponseProtoMsg
  ): QueryUserGroupResponse {
    return QueryUserGroupResponse.decode(message.value);
  },
  toProto(message: QueryUserGroupResponse): Uint8Array {
    return QueryUserGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserGroupResponse): QueryUserGroupResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryUserGroupResponse",
      value: QueryUserGroupResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryUserGroupMembersRequest(): QueryUserGroupMembersRequest {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    pagination: undefined,
  };
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
        ? Long.fromValue(object.subspaceId)
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
  fromAmino(
    object: QueryUserGroupMembersRequestAmino
  ): QueryUserGroupMembersRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      groupId: object.group_id,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryUserGroupMembersRequest
  ): QueryUserGroupMembersRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.group_id = message.groupId;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryUserGroupMembersRequestAminoMsg
  ): QueryUserGroupMembersRequest {
    return QueryUserGroupMembersRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryUserGroupMembersRequestProtoMsg
  ): QueryUserGroupMembersRequest {
    return QueryUserGroupMembersRequest.decode(message.value);
  },
  toProto(message: QueryUserGroupMembersRequest): Uint8Array {
    return QueryUserGroupMembersRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryUserGroupMembersRequest
  ): QueryUserGroupMembersRequestProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryUserGroupMembersRequest",
      value: QueryUserGroupMembersRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryUserGroupMembersResponse(): QueryUserGroupMembersResponse {
  return {
    members: [],
    pagination: undefined,
  };
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
  fromAmino(
    object: QueryUserGroupMembersResponseAmino
  ): QueryUserGroupMembersResponse {
    return {
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => e)
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryUserGroupMembersResponse
  ): QueryUserGroupMembersResponseAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) => e);
    } else {
      obj.members = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryUserGroupMembersResponseAminoMsg
  ): QueryUserGroupMembersResponse {
    return QueryUserGroupMembersResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryUserGroupMembersResponseProtoMsg
  ): QueryUserGroupMembersResponse {
    return QueryUserGroupMembersResponse.decode(message.value);
  },
  toProto(message: QueryUserGroupMembersResponse): Uint8Array {
    return QueryUserGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryUserGroupMembersResponse
  ): QueryUserGroupMembersResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryUserGroupMembersResponse",
      value: QueryUserGroupMembersResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryUserPermissionsRequest(): QueryUserPermissionsRequest {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    user: "",
  };
}
export const QueryUserPermissionsRequest = {
  encode(
    message: QueryUserPermissionsRequest,
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
          message.sectionId = reader.uint32();
          break;
        case 3:
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
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: QueryUserPermissionsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
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
    message.sectionId = object.sectionId ?? 0;
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(
    object: QueryUserPermissionsRequestAmino
  ): QueryUserPermissionsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      user: object.user,
    };
  },
  toAmino(
    message: QueryUserPermissionsRequest
  ): QueryUserPermissionsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(
    object: QueryUserPermissionsRequestAminoMsg
  ): QueryUserPermissionsRequest {
    return QueryUserPermissionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryUserPermissionsRequestProtoMsg
  ): QueryUserPermissionsRequest {
    return QueryUserPermissionsRequest.decode(message.value);
  },
  toProto(message: QueryUserPermissionsRequest): Uint8Array {
    return QueryUserPermissionsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryUserPermissionsRequest
  ): QueryUserPermissionsRequestProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryUserPermissionsRequest",
      value: QueryUserPermissionsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryUserPermissionsResponse(): QueryUserPermissionsResponse {
  return {
    permissions: [],
    details: [],
  };
}
export const QueryUserPermissionsResponse = {
  encode(
    message: QueryUserPermissionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.permissions) {
      writer.uint32(10).string(v!);
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
          message.permissions.push(reader.string());
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
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => String(e))
        : [],
      details: Array.isArray(object?.details)
        ? object.details.map((e: any) => PermissionDetail.fromJSON(e))
        : [],
    };
  },
  toJSON(message: QueryUserPermissionsResponse): unknown {
    const obj: any = {};
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
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
    message.permissions = object.permissions?.map((e) => e) || [];
    message.details =
      object.details?.map((e) => PermissionDetail.fromPartial(e)) || [];
    return message;
  },
  fromAmino(
    object: QueryUserPermissionsResponseAmino
  ): QueryUserPermissionsResponse {
    return {
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => e)
        : [],
      details: Array.isArray(object?.details)
        ? object.details.map((e: any) => PermissionDetail.fromAmino(e))
        : [],
    };
  },
  toAmino(
    message: QueryUserPermissionsResponse
  ): QueryUserPermissionsResponseAmino {
    const obj: any = {};
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    if (message.details) {
      obj.details = message.details.map((e) =>
        e ? PermissionDetail.toAmino(e) : undefined
      );
    } else {
      obj.details = [];
    }
    return obj;
  },
  fromAminoMsg(
    object: QueryUserPermissionsResponseAminoMsg
  ): QueryUserPermissionsResponse {
    return QueryUserPermissionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryUserPermissionsResponseProtoMsg
  ): QueryUserPermissionsResponse {
    return QueryUserPermissionsResponse.decode(message.value);
  },
  toProto(message: QueryUserPermissionsResponse): Uint8Array {
    return QueryUserPermissionsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryUserPermissionsResponse
  ): QueryUserPermissionsResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryUserPermissionsResponse",
      value: QueryUserPermissionsResponse.encode(message).finish(),
    };
  },
};
function createBasePermissionDetail(): PermissionDetail {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    user: undefined,
    group: undefined,
  };
}
export const PermissionDetail = {
  encode(
    message: PermissionDetail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (message.user !== undefined) {
      PermissionDetail_User.encode(
        message.user,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.group !== undefined) {
      PermissionDetail_Group.encode(
        message.group,
        writer.uint32(34).fork()
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
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.sectionId = reader.uint32();
          break;
        case 3:
          message.user = PermissionDetail_User.decode(reader, reader.uint32());
          break;
        case 4:
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
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
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
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
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
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
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
  fromAmino(object: PermissionDetailAmino): PermissionDetail {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      user: object?.user
        ? PermissionDetail_User.fromAmino(object.user)
        : undefined,
      group: object?.group
        ? PermissionDetail_Group.fromAmino(object.group)
        : undefined,
    };
  },
  toAmino(message: PermissionDetail): PermissionDetailAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.user = message.user
      ? PermissionDetail_User.toAmino(message.user)
      : undefined;
    obj.group = message.group
      ? PermissionDetail_Group.toAmino(message.group)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: PermissionDetailAminoMsg): PermissionDetail {
    return PermissionDetail.fromAmino(object.value);
  },
  fromProtoMsg(message: PermissionDetailProtoMsg): PermissionDetail {
    return PermissionDetail.decode(message.value);
  },
  toProto(message: PermissionDetail): Uint8Array {
    return PermissionDetail.encode(message).finish();
  },
  toProtoMsg(message: PermissionDetail): PermissionDetailProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.PermissionDetail",
      value: PermissionDetail.encode(message).finish(),
    };
  },
};
function createBasePermissionDetail_User(): PermissionDetail_User {
  return {
    user: "",
    permission: [],
  };
}
export const PermissionDetail_User = {
  encode(
    message: PermissionDetail_User,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    for (const v of message.permission) {
      writer.uint32(18).string(v!);
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
          message.permission.push(reader.string());
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
      permission: Array.isArray(object?.permission)
        ? object.permission.map((e: any) => String(e))
        : [],
    };
  },
  toJSON(message: PermissionDetail_User): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    if (message.permission) {
      obj.permission = message.permission.map((e) => e);
    } else {
      obj.permission = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PermissionDetail_User>, I>>(
    object: I
  ): PermissionDetail_User {
    const message = createBasePermissionDetail_User();
    message.user = object.user ?? "";
    message.permission = object.permission?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: PermissionDetail_UserAmino): PermissionDetail_User {
    return {
      user: object.user,
      permission: Array.isArray(object?.permission)
        ? object.permission.map((e: any) => e)
        : [],
    };
  },
  toAmino(message: PermissionDetail_User): PermissionDetail_UserAmino {
    const obj: any = {};
    obj.user = message.user;
    if (message.permission) {
      obj.permission = message.permission.map((e) => e);
    } else {
      obj.permission = [];
    }
    return obj;
  },
  fromAminoMsg(object: PermissionDetail_UserAminoMsg): PermissionDetail_User {
    return PermissionDetail_User.fromAmino(object.value);
  },
  fromProtoMsg(message: PermissionDetail_UserProtoMsg): PermissionDetail_User {
    return PermissionDetail_User.decode(message.value);
  },
  toProto(message: PermissionDetail_User): Uint8Array {
    return PermissionDetail_User.encode(message).finish();
  },
  toProtoMsg(message: PermissionDetail_User): PermissionDetail_UserProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.User",
      value: PermissionDetail_User.encode(message).finish(),
    };
  },
};
function createBasePermissionDetail_Group(): PermissionDetail_Group {
  return {
    groupId: 0,
    permission: [],
  };
}
export const PermissionDetail_Group = {
  encode(
    message: PermissionDetail_Group,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint32(message.groupId);
    }
    for (const v of message.permission) {
      writer.uint32(18).string(v!);
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
          message.permission.push(reader.string());
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
      permission: Array.isArray(object?.permission)
        ? object.permission.map((e: any) => String(e))
        : [],
    };
  },
  toJSON(message: PermissionDetail_Group): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    if (message.permission) {
      obj.permission = message.permission.map((e) => e);
    } else {
      obj.permission = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PermissionDetail_Group>, I>>(
    object: I
  ): PermissionDetail_Group {
    const message = createBasePermissionDetail_Group();
    message.groupId = object.groupId ?? 0;
    message.permission = object.permission?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: PermissionDetail_GroupAmino): PermissionDetail_Group {
    return {
      groupId: object.group_id,
      permission: Array.isArray(object?.permission)
        ? object.permission.map((e: any) => e)
        : [],
    };
  },
  toAmino(message: PermissionDetail_Group): PermissionDetail_GroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId;
    if (message.permission) {
      obj.permission = message.permission.map((e) => e);
    } else {
      obj.permission = [];
    }
    return obj;
  },
  fromAminoMsg(object: PermissionDetail_GroupAminoMsg): PermissionDetail_Group {
    return PermissionDetail_Group.fromAmino(object.value);
  },
  fromProtoMsg(
    message: PermissionDetail_GroupProtoMsg
  ): PermissionDetail_Group {
    return PermissionDetail_Group.decode(message.value);
  },
  toProto(message: PermissionDetail_Group): Uint8Array {
    return PermissionDetail_Group.encode(message).finish();
  },
  toProtoMsg(message: PermissionDetail_Group): PermissionDetail_GroupProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.Group",
      value: PermissionDetail_Group.encode(message).finish(),
    };
  },
};
function createBaseQueryUserAllowancesRequest(): QueryUserAllowancesRequest {
  return {
    subspaceId: Long.UZERO,
    grantee: "",
    pagination: undefined,
  };
}
export const QueryUserAllowancesRequest = {
  encode(
    message: QueryUserAllowancesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserAllowancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserAllowancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.grantee = reader.string();
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
  fromJSON(object: any): QueryUserAllowancesRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryUserAllowancesRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUserAllowancesRequest>, I>>(
    object: I
  ): QueryUserAllowancesRequest {
    const message = createBaseQueryUserAllowancesRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.grantee = object.grantee ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryUserAllowancesRequestAmino
  ): QueryUserAllowancesRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      grantee: object.grantee,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryUserAllowancesRequest
  ): QueryUserAllowancesRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.grantee = message.grantee;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryUserAllowancesRequestAminoMsg
  ): QueryUserAllowancesRequest {
    return QueryUserAllowancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryUserAllowancesRequestProtoMsg
  ): QueryUserAllowancesRequest {
    return QueryUserAllowancesRequest.decode(message.value);
  },
  toProto(message: QueryUserAllowancesRequest): Uint8Array {
    return QueryUserAllowancesRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryUserAllowancesRequest
  ): QueryUserAllowancesRequestProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryUserAllowancesRequest",
      value: QueryUserAllowancesRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryUserAllowancesResponse(): QueryUserAllowancesResponse {
  return {
    grants: [],
    pagination: undefined,
  };
}
export const QueryUserAllowancesResponse = {
  encode(
    message: QueryUserAllowancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryUserAllowancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserAllowancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryUserAllowancesResponse {
    return {
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryUserAllowancesResponse): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) => (e ? Grant.toJSON(e) : undefined));
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUserAllowancesResponse>, I>>(
    object: I
  ): QueryUserAllowancesResponse {
    const message = createBaseQueryUserAllowancesResponse();
    message.grants = object.grants?.map((e) => Grant.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryUserAllowancesResponseAmino
  ): QueryUserAllowancesResponse {
    return {
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryUserAllowancesResponse
  ): QueryUserAllowancesResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) =>
        e ? Grant.toAmino(e) : undefined
      );
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryUserAllowancesResponseAminoMsg
  ): QueryUserAllowancesResponse {
    return QueryUserAllowancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryUserAllowancesResponseProtoMsg
  ): QueryUserAllowancesResponse {
    return QueryUserAllowancesResponse.decode(message.value);
  },
  toProto(message: QueryUserAllowancesResponse): Uint8Array {
    return QueryUserAllowancesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryUserAllowancesResponse
  ): QueryUserAllowancesResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryUserAllowancesResponse",
      value: QueryUserAllowancesResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryGroupAllowancesRequest(): QueryGroupAllowancesRequest {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    pagination: undefined,
  };
}
export const QueryGroupAllowancesRequest = {
  encode(
    message: QueryGroupAllowancesRequest,
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
  ): QueryGroupAllowancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupAllowancesRequest();
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
  fromJSON(object: any): QueryGroupAllowancesRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryGroupAllowancesRequest): unknown {
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
  fromPartial<I extends Exact<DeepPartial<QueryGroupAllowancesRequest>, I>>(
    object: I
  ): QueryGroupAllowancesRequest {
    const message = createBaseQueryGroupAllowancesRequest();
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
  fromAmino(
    object: QueryGroupAllowancesRequestAmino
  ): QueryGroupAllowancesRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      groupId: object.group_id,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryGroupAllowancesRequest
  ): QueryGroupAllowancesRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.group_id = message.groupId;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryGroupAllowancesRequestAminoMsg
  ): QueryGroupAllowancesRequest {
    return QueryGroupAllowancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryGroupAllowancesRequestProtoMsg
  ): QueryGroupAllowancesRequest {
    return QueryGroupAllowancesRequest.decode(message.value);
  },
  toProto(message: QueryGroupAllowancesRequest): Uint8Array {
    return QueryGroupAllowancesRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryGroupAllowancesRequest
  ): QueryGroupAllowancesRequestProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryGroupAllowancesRequest",
      value: QueryGroupAllowancesRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryGroupAllowancesResponse(): QueryGroupAllowancesResponse {
  return {
    grants: [],
    pagination: undefined,
  };
}
export const QueryGroupAllowancesResponse = {
  encode(
    message: QueryGroupAllowancesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGroupAllowancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupAllowancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryGroupAllowancesResponse {
    return {
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryGroupAllowancesResponse): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) => (e ? Grant.toJSON(e) : undefined));
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGroupAllowancesResponse>, I>>(
    object: I
  ): QueryGroupAllowancesResponse {
    const message = createBaseQueryGroupAllowancesResponse();
    message.grants = object.grants?.map((e) => Grant.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryGroupAllowancesResponseAmino
  ): QueryGroupAllowancesResponse {
    return {
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryGroupAllowancesResponse
  ): QueryGroupAllowancesResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map((e) =>
        e ? Grant.toAmino(e) : undefined
      );
    } else {
      obj.grants = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryGroupAllowancesResponseAminoMsg
  ): QueryGroupAllowancesResponse {
    return QueryGroupAllowancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryGroupAllowancesResponseProtoMsg
  ): QueryGroupAllowancesResponse {
    return QueryGroupAllowancesResponse.decode(message.value);
  },
  toProto(message: QueryGroupAllowancesResponse): Uint8Array {
    return QueryGroupAllowancesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryGroupAllowancesResponse
  ): QueryGroupAllowancesResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.QueryGroupAllowancesResponse",
      value: QueryGroupAllowancesResponse.encode(message).finish(),
    };
  },
};
/** Query defines the gRPC querier service */
export interface Query {
  /** Subspaces queries all the subspaces inside Desmos */
  Subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
  /** Subspace queries all the information about the subspace with the given id */
  Subspace(request: QuerySubspaceRequest): Promise<QuerySubspaceResponse>;
  /** Sections allows to query for the sections of a specific subspace */
  Sections(request: QuerySectionsRequest): Promise<QuerySectionsResponse>;
  /** Section queries all the information about the section with the given id */
  Section(request: QuerySectionRequest): Promise<QuerySectionResponse>;
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
  /** UserAllowances returns all the grants for users. */
  UserAllowances(
    request: QueryUserAllowancesRequest
  ): Promise<QueryUserAllowancesResponse>;
  /** GroupAllowances returns all the grants for groups. */
  GroupAllowances(
    request: QueryGroupAllowancesRequest
  ): Promise<QueryGroupAllowancesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Subspaces = this.Subspaces.bind(this);
    this.Subspace = this.Subspace.bind(this);
    this.Sections = this.Sections.bind(this);
    this.Section = this.Section.bind(this);
    this.UserGroups = this.UserGroups.bind(this);
    this.UserGroup = this.UserGroup.bind(this);
    this.UserGroupMembers = this.UserGroupMembers.bind(this);
    this.UserPermissions = this.UserPermissions.bind(this);
    this.UserAllowances = this.UserAllowances.bind(this);
    this.GroupAllowances = this.GroupAllowances.bind(this);
  }
  Subspaces(
    request: QuerySubspacesRequest = {
      pagination: undefined,
    }
  ): Promise<QuerySubspacesResponse> {
    const data = QuerySubspacesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Query",
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
      "desmos.subspaces.v3.Query",
      "Subspace",
      data
    );
    return promise.then((data) =>
      QuerySubspaceResponse.decode(new _m0.Reader(data))
    );
  }
  Sections(request: QuerySectionsRequest): Promise<QuerySectionsResponse> {
    const data = QuerySectionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Query",
      "Sections",
      data
    );
    return promise.then((data) =>
      QuerySectionsResponse.decode(new _m0.Reader(data))
    );
  }
  Section(request: QuerySectionRequest): Promise<QuerySectionResponse> {
    const data = QuerySectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Query",
      "Section",
      data
    );
    return promise.then((data) =>
      QuerySectionResponse.decode(new _m0.Reader(data))
    );
  }
  UserGroups(
    request: QueryUserGroupsRequest
  ): Promise<QueryUserGroupsResponse> {
    const data = QueryUserGroupsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Query",
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
      "desmos.subspaces.v3.Query",
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
      "desmos.subspaces.v3.Query",
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
      "desmos.subspaces.v3.Query",
      "UserPermissions",
      data
    );
    return promise.then((data) =>
      QueryUserPermissionsResponse.decode(new _m0.Reader(data))
    );
  }
  UserAllowances(
    request: QueryUserAllowancesRequest
  ): Promise<QueryUserAllowancesResponse> {
    const data = QueryUserAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Query",
      "UserAllowances",
      data
    );
    return promise.then((data) =>
      QueryUserAllowancesResponse.decode(new _m0.Reader(data))
    );
  }
  GroupAllowances(
    request: QueryGroupAllowancesRequest
  ): Promise<QueryGroupAllowancesResponse> {
    const data = QueryGroupAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Query",
      "GroupAllowances",
      data
    );
    return promise.then((data) =>
      QueryGroupAllowancesResponse.decode(new _m0.Reader(data))
    );
  }
}
