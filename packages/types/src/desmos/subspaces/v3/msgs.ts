/* eslint-disable */
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import {
  MsgGrantAllowance,
  MsgGrantAllowanceResponse,
  MsgRevokeAllowance,
  MsgRevokeAllowanceResponse,
} from "./msgs_feegrant";
import {
  MsgGrantTreasuryAuthorization,
  MsgGrantTreasuryAuthorizationResponse,
  MsgRevokeTreasuryAuthorization,
  MsgRevokeTreasuryAuthorizationResponse,
} from "./msgs_treasury";

export const protobufPackage = "desmos.subspaces.v3";
/** MsgCreateSubspace represents the message used to create a subspace */
export interface MsgCreateSubspace {
  /** Name of the subspace */
  name: string;
  /** (optional) Description of the subspace */
  description: string;
  /**
   * (optional) Owner of this subspace. If not specified, the creator will be
   * the default owner.
   */
  owner: string;
  /** Address creating the subspace */
  creator: string;
}
export interface MsgCreateSubspaceProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgCreateSubspace";
  value: Uint8Array;
}
/** MsgCreateSubspace represents the message used to create a subspace */
export interface MsgCreateSubspaceAmino {
  /** Name of the subspace */
  name: string;
  /** (optional) Description of the subspace */
  description: string;
  /**
   * (optional) Owner of this subspace. If not specified, the creator will be
   * the default owner.
   */
  owner: string;
  /** Address creating the subspace */
  creator: string;
}
export interface MsgCreateSubspaceAminoMsg {
  type: "/desmos.subspaces.v3.MsgCreateSubspace";
  value: MsgCreateSubspaceAmino;
}
/** MsgCreateSubspaceResponse defines the Msg/CreateSubspace response type */
export interface MsgCreateSubspaceResponse {
  /** Id of the newly created subspace id */
  subspaceId: Long;
}
export interface MsgCreateSubspaceResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgCreateSubspaceResponse";
  value: Uint8Array;
}
/** MsgCreateSubspaceResponse defines the Msg/CreateSubspace response type */
export interface MsgCreateSubspaceResponseAmino {
  /** Id of the newly created subspace id */
  subspace_id: string;
}
export interface MsgCreateSubspaceResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgCreateSubspaceResponse";
  value: MsgCreateSubspaceResponseAmino;
}
/** MsgEditSubspace represents the message used to edit a subspace fields */
export interface MsgEditSubspace {
  /** Id of the subspace to edit */
  subspaceId: Long;
  /**
   * New name of the subspace. If it shouldn't be changed, use [do-not-modify]
   * instead.
   */
  name: string;
  /**
   * New description of the subspace. If it shouldn't be changed, use
   * [do-not-modify] instead.
   */
  description: string;
  /**
   * New owner of the subspace. If it shouldn't be changed, use [do-not-modify]
   * instead.
   */
  owner: string;
  /** Address of the user editing the subspace */
  signer: string;
}
export interface MsgEditSubspaceProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgEditSubspace";
  value: Uint8Array;
}
/** MsgEditSubspace represents the message used to edit a subspace fields */
export interface MsgEditSubspaceAmino {
  /** Id of the subspace to edit */
  subspace_id: string;
  /**
   * New name of the subspace. If it shouldn't be changed, use [do-not-modify]
   * instead.
   */
  name: string;
  /**
   * New description of the subspace. If it shouldn't be changed, use
   * [do-not-modify] instead.
   */
  description: string;
  /**
   * New owner of the subspace. If it shouldn't be changed, use [do-not-modify]
   * instead.
   */
  owner: string;
  /** Address of the user editing the subspace */
  signer: string;
}
export interface MsgEditSubspaceAminoMsg {
  type: "/desmos.subspaces.v3.MsgEditSubspace";
  value: MsgEditSubspaceAmino;
}
/** MsgEditSubspaceResponse defines the Msg/EditSubspace response type */
export interface MsgEditSubspaceResponse {}
export interface MsgEditSubspaceResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgEditSubspaceResponse";
  value: Uint8Array;
}
/** MsgEditSubspaceResponse defines the Msg/EditSubspace response type */
export interface MsgEditSubspaceResponseAmino {}
export interface MsgEditSubspaceResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgEditSubspaceResponse";
  value: MsgEditSubspaceResponseAmino;
}
/** MsgDeleteSubspace represents the message used to delete a subspace */
export interface MsgDeleteSubspace {
  /** Id of the subspace to delete */
  subspaceId: Long;
  /** Address of the user deleting the subspace */
  signer: string;
}
export interface MsgDeleteSubspaceProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgDeleteSubspace";
  value: Uint8Array;
}
/** MsgDeleteSubspace represents the message used to delete a subspace */
export interface MsgDeleteSubspaceAmino {
  /** Id of the subspace to delete */
  subspace_id: string;
  /** Address of the user deleting the subspace */
  signer: string;
}
export interface MsgDeleteSubspaceAminoMsg {
  type: "/desmos.subspaces.v3.MsgDeleteSubspace";
  value: MsgDeleteSubspaceAmino;
}
/** MsgDeleteSubspaceResponse defines the Msg/DeleteSubspace response type */
export interface MsgDeleteSubspaceResponse {}
export interface MsgDeleteSubspaceResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgDeleteSubspaceResponse";
  value: Uint8Array;
}
/** MsgDeleteSubspaceResponse defines the Msg/DeleteSubspace response type */
export interface MsgDeleteSubspaceResponseAmino {}
export interface MsgDeleteSubspaceResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgDeleteSubspaceResponse";
  value: MsgDeleteSubspaceResponseAmino;
}
/**
 * MsgCreateSection represents the message to be used when creating a subspace
 * section
 */
export interface MsgCreateSection {
  /** Id of the subspace inside which the section will be placed */
  subspaceId: Long;
  /** Name of the section to be created */
  name: string;
  /** (optional) Description of the section */
  description: string;
  /** (optional) Id of the parent section */
  parentId: number;
  /** User creating the section */
  creator: string;
}
export interface MsgCreateSectionProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgCreateSection";
  value: Uint8Array;
}
/**
 * MsgCreateSection represents the message to be used when creating a subspace
 * section
 */
export interface MsgCreateSectionAmino {
  /** Id of the subspace inside which the section will be placed */
  subspace_id: string;
  /** Name of the section to be created */
  name: string;
  /** (optional) Description of the section */
  description: string;
  /** (optional) Id of the parent section */
  parent_id: number;
  /** User creating the section */
  creator: string;
}
export interface MsgCreateSectionAminoMsg {
  type: "/desmos.subspaces.v3.MsgCreateSection";
  value: MsgCreateSectionAmino;
}
/** MsgCreateSectionResponse represents the Msg/CreateSection response type */
export interface MsgCreateSectionResponse {
  /** Id of the newly created section */
  sectionId: number;
}
export interface MsgCreateSectionResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgCreateSectionResponse";
  value: Uint8Array;
}
/** MsgCreateSectionResponse represents the Msg/CreateSection response type */
export interface MsgCreateSectionResponseAmino {
  /** Id of the newly created section */
  section_id: number;
}
export interface MsgCreateSectionResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgCreateSectionResponse";
  value: MsgCreateSectionResponseAmino;
}
/**
 * MsgEditSection represents the message to be used when editing a subspace
 * section
 */
export interface MsgEditSection {
  /** Id of the subspace inside which the section to be edited is */
  subspaceId: Long;
  /** Id of the section to be edited */
  sectionId: number;
  /** (optional) New name of the section */
  name: string;
  /** (optional) New description of the section */
  description: string;
  /** User editing the section */
  editor: string;
}
export interface MsgEditSectionProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgEditSection";
  value: Uint8Array;
}
/**
 * MsgEditSection represents the message to be used when editing a subspace
 * section
 */
export interface MsgEditSectionAmino {
  /** Id of the subspace inside which the section to be edited is */
  subspace_id: string;
  /** Id of the section to be edited */
  section_id: number;
  /** (optional) New name of the section */
  name: string;
  /** (optional) New description of the section */
  description: string;
  /** User editing the section */
  editor: string;
}
export interface MsgEditSectionAminoMsg {
  type: "/desmos.subspaces.v3.MsgEditSection";
  value: MsgEditSectionAmino;
}
/** MsgEditSectionResponse represents the Msg/EditSection response type */
export interface MsgEditSectionResponse {}
export interface MsgEditSectionResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgEditSectionResponse";
  value: Uint8Array;
}
/** MsgEditSectionResponse represents the Msg/EditSection response type */
export interface MsgEditSectionResponseAmino {}
export interface MsgEditSectionResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgEditSectionResponse";
  value: MsgEditSectionResponseAmino;
}
/**
 * MsgMoveSection represents the message to be used when moving a section to
 * another parent
 */
export interface MsgMoveSection {
  /** Id of the subspace inside which the section lies */
  subspaceId: Long;
  /** Id of the section to be moved */
  sectionId: number;
  /** Id of the new parent */
  newParentId: number;
  /** Signer of the message */
  signer: string;
}
export interface MsgMoveSectionProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgMoveSection";
  value: Uint8Array;
}
/**
 * MsgMoveSection represents the message to be used when moving a section to
 * another parent
 */
export interface MsgMoveSectionAmino {
  /** Id of the subspace inside which the section lies */
  subspace_id: string;
  /** Id of the section to be moved */
  section_id: number;
  /** Id of the new parent */
  new_parent_id: number;
  /** Signer of the message */
  signer: string;
}
export interface MsgMoveSectionAminoMsg {
  type: "/desmos.subspaces.v3.MsgMoveSection";
  value: MsgMoveSectionAmino;
}
/** MsgMoveSectionResponse */
export interface MsgMoveSectionResponse {}
export interface MsgMoveSectionResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgMoveSectionResponse";
  value: Uint8Array;
}
/** MsgMoveSectionResponse */
export interface MsgMoveSectionResponseAmino {}
export interface MsgMoveSectionResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgMoveSectionResponse";
  value: MsgMoveSectionResponseAmino;
}
/** MsgDeleteSection represents the message to be used when deleting a section */
export interface MsgDeleteSection {
  /** Id of the subspace inside which the section to be deleted is */
  subspaceId: Long;
  /** Id of the section to delete */
  sectionId: number;
  /** User deleting the section */
  signer: string;
}
export interface MsgDeleteSectionProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgDeleteSection";
  value: Uint8Array;
}
/** MsgDeleteSection represents the message to be used when deleting a section */
export interface MsgDeleteSectionAmino {
  /** Id of the subspace inside which the section to be deleted is */
  subspace_id: string;
  /** Id of the section to delete */
  section_id: number;
  /** User deleting the section */
  signer: string;
}
export interface MsgDeleteSectionAminoMsg {
  type: "/desmos.subspaces.v3.MsgDeleteSection";
  value: MsgDeleteSectionAmino;
}
/** MsgDeleteSectionResponse represents the Msg/DeleteSection response type */
export interface MsgDeleteSectionResponse {}
export interface MsgDeleteSectionResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgDeleteSectionResponse";
  value: Uint8Array;
}
/** MsgDeleteSectionResponse represents the Msg/DeleteSection response type */
export interface MsgDeleteSectionResponseAmino {}
export interface MsgDeleteSectionResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgDeleteSectionResponse";
  value: MsgDeleteSectionResponseAmino;
}
/** MsgCreateUserGroup represents the message used to create a user group */
export interface MsgCreateUserGroup {
  /** Id of the subspace inside which the group will be created */
  subspaceId: Long;
  /** (optional) Id of the section inside which the group will be created */
  sectionId: number;
  /** Name of the group */
  name: string;
  /** (optional) Description of the group */
  description: string;
  /** Default permissions to be applied to the group */
  defaultPermissions: string[];
  /** Initial members to be put inside the group */
  initialMembers: string[];
  /** Creator of the group */
  creator: string;
}
export interface MsgCreateUserGroupProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgCreateUserGroup";
  value: Uint8Array;
}
/** MsgCreateUserGroup represents the message used to create a user group */
export interface MsgCreateUserGroupAmino {
  /** Id of the subspace inside which the group will be created */
  subspace_id: string;
  /** (optional) Id of the section inside which the group will be created */
  section_id: number;
  /** Name of the group */
  name: string;
  /** (optional) Description of the group */
  description: string;
  /** Default permissions to be applied to the group */
  default_permissions: string[];
  /** Initial members to be put inside the group */
  initial_members: string[];
  /** Creator of the group */
  creator: string;
}
export interface MsgCreateUserGroupAminoMsg {
  type: "/desmos.subspaces.v3.MsgCreateUserGroup";
  value: MsgCreateUserGroupAmino;
}
/** MsgCreateUserGroupResponse defines the Msg/CreateUserGroup response type */
export interface MsgCreateUserGroupResponse {
  groupId: number;
}
export interface MsgCreateUserGroupResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgCreateUserGroupResponse";
  value: Uint8Array;
}
/** MsgCreateUserGroupResponse defines the Msg/CreateUserGroup response type */
export interface MsgCreateUserGroupResponseAmino {
  group_id: number;
}
export interface MsgCreateUserGroupResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgCreateUserGroupResponse";
  value: MsgCreateUserGroupResponseAmino;
}
/** MsgEditUserGroup represents the message used to edit a user group */
export interface MsgEditUserGroup {
  /** Id of the subspace inside which the group to be edited is */
  subspaceId: Long;
  /** Id of the group to be edited */
  groupId: number;
  /** (optional) New name of the group */
  name: string;
  /** (optional) New description of the group */
  description: string;
  /** User editing the group */
  signer: string;
}
export interface MsgEditUserGroupProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgEditUserGroup";
  value: Uint8Array;
}
/** MsgEditUserGroup represents the message used to edit a user group */
export interface MsgEditUserGroupAmino {
  /** Id of the subspace inside which the group to be edited is */
  subspace_id: string;
  /** Id of the group to be edited */
  group_id: number;
  /** (optional) New name of the group */
  name: string;
  /** (optional) New description of the group */
  description: string;
  /** User editing the group */
  signer: string;
}
export interface MsgEditUserGroupAminoMsg {
  type: "/desmos.subspaces.v3.MsgEditUserGroup";
  value: MsgEditUserGroupAmino;
}
/** MsgEditUserGroupResponse defines the Msg/EditUserGroup response type */
export interface MsgEditUserGroupResponse {}
export interface MsgEditUserGroupResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgEditUserGroupResponse";
  value: Uint8Array;
}
/** MsgEditUserGroupResponse defines the Msg/EditUserGroup response type */
export interface MsgEditUserGroupResponseAmino {}
export interface MsgEditUserGroupResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgEditUserGroupResponse";
  value: MsgEditUserGroupResponseAmino;
}
/**
 * MsgMoveUserGroup represents the message used to move one user group from a
 * section to anoter
 */
export interface MsgMoveUserGroup {
  /** Id of the subspace inside which the group to move is */
  subspaceId: Long;
  /** Id of the group to be moved */
  groupId: number;
  /** Id of the new section where to move the group */
  newSectionId: number;
  /** User signing the message */
  signer: string;
}
export interface MsgMoveUserGroupProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgMoveUserGroup";
  value: Uint8Array;
}
/**
 * MsgMoveUserGroup represents the message used to move one user group from a
 * section to anoter
 */
export interface MsgMoveUserGroupAmino {
  /** Id of the subspace inside which the group to move is */
  subspace_id: string;
  /** Id of the group to be moved */
  group_id: number;
  /** Id of the new section where to move the group */
  new_section_id: number;
  /** User signing the message */
  signer: string;
}
export interface MsgMoveUserGroupAminoMsg {
  type: "/desmos.subspaces.v3.MsgMoveUserGroup";
  value: MsgMoveUserGroupAmino;
}
/** MsgMoveUserGroupResponse defines the Msg/MoveUserGroup response type */
export interface MsgMoveUserGroupResponse {}
export interface MsgMoveUserGroupResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgMoveUserGroupResponse";
  value: Uint8Array;
}
/** MsgMoveUserGroupResponse defines the Msg/MoveUserGroup response type */
export interface MsgMoveUserGroupResponseAmino {}
export interface MsgMoveUserGroupResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgMoveUserGroupResponse";
  value: MsgMoveUserGroupResponseAmino;
}
/**
 * MsgSetUserGroupPermissions represents the message used to set the permissions
 * of a user group
 */
export interface MsgSetUserGroupPermissions {
  /** Id of the subspace inside which the group is */
  subspaceId: Long;
  /** Id of the group for which to set the new permissions */
  groupId: number;
  /** New permissions to be set to the group */
  permissions: string[];
  /** User setting the new permissions */
  signer: string;
}
export interface MsgSetUserGroupPermissionsProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgSetUserGroupPermissions";
  value: Uint8Array;
}
/**
 * MsgSetUserGroupPermissions represents the message used to set the permissions
 * of a user group
 */
export interface MsgSetUserGroupPermissionsAmino {
  /** Id of the subspace inside which the group is */
  subspace_id: string;
  /** Id of the group for which to set the new permissions */
  group_id: number;
  /** New permissions to be set to the group */
  permissions: string[];
  /** User setting the new permissions */
  signer: string;
}
export interface MsgSetUserGroupPermissionsAminoMsg {
  type: "/desmos.subspaces.v3.MsgSetUserGroupPermissions";
  value: MsgSetUserGroupPermissionsAmino;
}
/**
 * MsgSetUserGroupPermissionsResponse defines the
 * Msg/SetUserGroupPermissionsResponse response type
 */
export interface MsgSetUserGroupPermissionsResponse {}
export interface MsgSetUserGroupPermissionsResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgSetUserGroupPermissionsResponse";
  value: Uint8Array;
}
/**
 * MsgSetUserGroupPermissionsResponse defines the
 * Msg/SetUserGroupPermissionsResponse response type
 */
export interface MsgSetUserGroupPermissionsResponseAmino {}
export interface MsgSetUserGroupPermissionsResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgSetUserGroupPermissionsResponse";
  value: MsgSetUserGroupPermissionsResponseAmino;
}
/** MsgDeleteUserGroup represents the message used to delete a user group */
export interface MsgDeleteUserGroup {
  /** Id of the subspace inside which the group to delete is */
  subspaceId: Long;
  /** Id of the group to be deleted */
  groupId: number;
  /** User deleting the group */
  signer: string;
}
export interface MsgDeleteUserGroupProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgDeleteUserGroup";
  value: Uint8Array;
}
/** MsgDeleteUserGroup represents the message used to delete a user group */
export interface MsgDeleteUserGroupAmino {
  /** Id of the subspace inside which the group to delete is */
  subspace_id: string;
  /** Id of the group to be deleted */
  group_id: number;
  /** User deleting the group */
  signer: string;
}
export interface MsgDeleteUserGroupAminoMsg {
  type: "/desmos.subspaces.v3.MsgDeleteUserGroup";
  value: MsgDeleteUserGroupAmino;
}
/** MsgDeleteUserGroupResponse defines the Msg/DeleteUserGroup response type */
export interface MsgDeleteUserGroupResponse {}
export interface MsgDeleteUserGroupResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgDeleteUserGroupResponse";
  value: Uint8Array;
}
/** MsgDeleteUserGroupResponse defines the Msg/DeleteUserGroup response type */
export interface MsgDeleteUserGroupResponseAmino {}
export interface MsgDeleteUserGroupResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgDeleteUserGroupResponse";
  value: MsgDeleteUserGroupResponseAmino;
}
/**
 * MsgAddUserToUserGroup represents the message used to add a user to a user
 * group
 */
export interface MsgAddUserToUserGroup {
  /** Id of the subspace inside which the group is */
  subspaceId: Long;
  /** Id of the group to which to add the user */
  groupId: number;
  /** User to be added to the group */
  user: string;
  /** User signing the message */
  signer: string;
}
export interface MsgAddUserToUserGroupProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgAddUserToUserGroup";
  value: Uint8Array;
}
/**
 * MsgAddUserToUserGroup represents the message used to add a user to a user
 * group
 */
export interface MsgAddUserToUserGroupAmino {
  /** Id of the subspace inside which the group is */
  subspace_id: string;
  /** Id of the group to which to add the user */
  group_id: number;
  /** User to be added to the group */
  user: string;
  /** User signing the message */
  signer: string;
}
export interface MsgAddUserToUserGroupAminoMsg {
  type: "/desmos.subspaces.v3.MsgAddUserToUserGroup";
  value: MsgAddUserToUserGroupAmino;
}
/**
 * MsgAddUserToUserGroupResponse defines the Msg/AddUserToUserGroupResponse
 * response type
 */
export interface MsgAddUserToUserGroupResponse {}
export interface MsgAddUserToUserGroupResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgAddUserToUserGroupResponse";
  value: Uint8Array;
}
/**
 * MsgAddUserToUserGroupResponse defines the Msg/AddUserToUserGroupResponse
 * response type
 */
export interface MsgAddUserToUserGroupResponseAmino {}
export interface MsgAddUserToUserGroupResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgAddUserToUserGroupResponse";
  value: MsgAddUserToUserGroupResponseAmino;
}
/**
 * MsgRemoveUserFromUserGroup represents the message used to remove a user from
 * a user group
 */
export interface MsgRemoveUserFromUserGroup {
  /** Id of the subspace inside which the group to remove the user from is */
  subspaceId: Long;
  /** Id of the group from which to remove the user */
  groupId: number;
  /** User to be removed from the group */
  user: string;
  /** User signing the message */
  signer: string;
}
export interface MsgRemoveUserFromUserGroupProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup";
  value: Uint8Array;
}
/**
 * MsgRemoveUserFromUserGroup represents the message used to remove a user from
 * a user group
 */
export interface MsgRemoveUserFromUserGroupAmino {
  /** Id of the subspace inside which the group to remove the user from is */
  subspace_id: string;
  /** Id of the group from which to remove the user */
  group_id: number;
  /** User to be removed from the group */
  user: string;
  /** User signing the message */
  signer: string;
}
export interface MsgRemoveUserFromUserGroupAminoMsg {
  type: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup";
  value: MsgRemoveUserFromUserGroupAmino;
}
/**
 * MsgRemoveUserFromUserGroupResponse defines the
 * Msg/RemoveUserFromUserGroupResponse response type
 */
export interface MsgRemoveUserFromUserGroupResponse {}
export interface MsgRemoveUserFromUserGroupResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroupResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveUserFromUserGroupResponse defines the
 * Msg/RemoveUserFromUserGroupResponse response type
 */
export interface MsgRemoveUserFromUserGroupResponseAmino {}
export interface MsgRemoveUserFromUserGroupResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroupResponse";
  value: MsgRemoveUserFromUserGroupResponseAmino;
}
/**
 * MsgSetUserPermissions represents the message used to set the permissions of a
 * specific user
 */
export interface MsgSetUserPermissions {
  /** Id of the subspace inside which to set the permissions */
  subspaceId: Long;
  /** Id of the section for which to set the permissions */
  sectionId: number;
  /** User for which to set the permissions */
  user: string;
  /** Permissions to be set to the user */
  permissions: string[];
  /** User signing the message */
  signer: string;
}
export interface MsgSetUserPermissionsProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgSetUserPermissions";
  value: Uint8Array;
}
/**
 * MsgSetUserPermissions represents the message used to set the permissions of a
 * specific user
 */
export interface MsgSetUserPermissionsAmino {
  /** Id of the subspace inside which to set the permissions */
  subspace_id: string;
  /** Id of the section for which to set the permissions */
  section_id: number;
  /** User for which to set the permissions */
  user: string;
  /** Permissions to be set to the user */
  permissions: string[];
  /** User signing the message */
  signer: string;
}
export interface MsgSetUserPermissionsAminoMsg {
  type: "/desmos.subspaces.v3.MsgSetUserPermissions";
  value: MsgSetUserPermissionsAmino;
}
/**
 * MsgSetUserPermissionsResponse defines the Msg/SetPermissionsResponse
 * response type
 */
export interface MsgSetUserPermissionsResponse {}
export interface MsgSetUserPermissionsResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgSetUserPermissionsResponse";
  value: Uint8Array;
}
/**
 * MsgSetUserPermissionsResponse defines the Msg/SetPermissionsResponse
 * response type
 */
export interface MsgSetUserPermissionsResponseAmino {}
export interface MsgSetUserPermissionsResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgSetUserPermissionsResponse";
  value: MsgSetUserPermissionsResponseAmino;
}
function createBaseMsgCreateSubspace(): MsgCreateSubspace {
  return {
    name: "",
    description: "",
    owner: "",
    creator: "",
  };
}
export const MsgCreateSubspace = {
  encode(
    message: MsgCreateSubspace,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
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
          message.owner = reader.string();
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
  fromJSON(object: any): MsgCreateSubspace {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },
  toJSON(message: MsgCreateSubspace): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.owner !== undefined && (obj.owner = message.owner);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateSubspace>, I>>(
    object: I,
  ): MsgCreateSubspace {
    const message = createBaseMsgCreateSubspace();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgCreateSubspaceAmino): MsgCreateSubspace {
    return {
      name: object.name,
      description: object.description,
      owner: object.owner,
      creator: object.creator,
    };
  },
  toAmino(message: MsgCreateSubspace): MsgCreateSubspaceAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    obj.owner = message.owner;
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSubspaceAminoMsg): MsgCreateSubspace {
    return MsgCreateSubspace.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSubspaceProtoMsg): MsgCreateSubspace {
    return MsgCreateSubspace.decode(message.value);
  },
  toProto(message: MsgCreateSubspace): Uint8Array {
    return MsgCreateSubspace.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSubspace): MsgCreateSubspaceProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgCreateSubspace",
      value: MsgCreateSubspace.encode(message).finish(),
    };
  },
};
function createBaseMsgCreateSubspaceResponse(): MsgCreateSubspaceResponse {
  return {
    subspaceId: Long.UZERO,
  };
}
export const MsgCreateSubspaceResponse = {
  encode(
    message: MsgCreateSubspaceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
        ? Long.fromValue(object.subspaceId)
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
    object: I,
  ): MsgCreateSubspaceResponse {
    const message = createBaseMsgCreateSubspaceResponse();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateSubspaceResponseAmino): MsgCreateSubspaceResponse {
    return {
      subspaceId: Long.fromString(object.subspace_id),
    };
  },
  toAmino(message: MsgCreateSubspaceResponse): MsgCreateSubspaceResponseAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: MsgCreateSubspaceResponseAminoMsg,
  ): MsgCreateSubspaceResponse {
    return MsgCreateSubspaceResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgCreateSubspaceResponseProtoMsg,
  ): MsgCreateSubspaceResponse {
    return MsgCreateSubspaceResponse.decode(message.value);
  },
  toProto(message: MsgCreateSubspaceResponse): Uint8Array {
    return MsgCreateSubspaceResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgCreateSubspaceResponse,
  ): MsgCreateSubspaceResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgCreateSubspaceResponse",
      value: MsgCreateSubspaceResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgEditSubspace(): MsgEditSubspace {
  return {
    subspaceId: Long.UZERO,
    name: "",
    description: "",
    owner: "",
    signer: "",
  };
}
export const MsgEditSubspace = {
  encode(
    message: MsgEditSubspace,
    writer: _m0.Writer = _m0.Writer.create(),
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
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
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
          message.owner = reader.string();
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
  fromJSON(object: any): MsgEditSubspace {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
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
    message.owner !== undefined && (obj.owner = message.owner);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditSubspace>, I>>(
    object: I,
  ): MsgEditSubspace {
    const message = createBaseMsgEditSubspace();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.owner = object.owner ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgEditSubspaceAmino): MsgEditSubspace {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      name: object.name,
      description: object.description,
      owner: object.owner,
      signer: object.signer,
    };
  },
  toAmino(message: MsgEditSubspace): MsgEditSubspaceAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.name = message.name;
    obj.description = message.description;
    obj.owner = message.owner;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgEditSubspaceAminoMsg): MsgEditSubspace {
    return MsgEditSubspace.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditSubspaceProtoMsg): MsgEditSubspace {
    return MsgEditSubspace.decode(message.value);
  },
  toProto(message: MsgEditSubspace): Uint8Array {
    return MsgEditSubspace.encode(message).finish();
  },
  toProtoMsg(message: MsgEditSubspace): MsgEditSubspaceProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgEditSubspace",
      value: MsgEditSubspace.encode(message).finish(),
    };
  },
};
function createBaseMsgEditSubspaceResponse(): MsgEditSubspaceResponse {
  return {};
}
export const MsgEditSubspaceResponse = {
  encode(
    _: MsgEditSubspaceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    _: I,
  ): MsgEditSubspaceResponse {
    const message = createBaseMsgEditSubspaceResponse();
    return message;
  },
  fromAmino(_: MsgEditSubspaceResponseAmino): MsgEditSubspaceResponse {
    return {};
  },
  toAmino(_: MsgEditSubspaceResponse): MsgEditSubspaceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgEditSubspaceResponseAminoMsg,
  ): MsgEditSubspaceResponse {
    return MsgEditSubspaceResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgEditSubspaceResponseProtoMsg,
  ): MsgEditSubspaceResponse {
    return MsgEditSubspaceResponse.decode(message.value);
  },
  toProto(message: MsgEditSubspaceResponse): Uint8Array {
    return MsgEditSubspaceResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgEditSubspaceResponse,
  ): MsgEditSubspaceResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgEditSubspaceResponse",
      value: MsgEditSubspaceResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgDeleteSubspace(): MsgDeleteSubspace {
  return {
    subspaceId: Long.UZERO,
    signer: "",
  };
}
export const MsgDeleteSubspace = {
  encode(
    message: MsgDeleteSubspace,
    writer: _m0.Writer = _m0.Writer.create(),
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
        ? Long.fromValue(object.subspaceId)
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
    object: I,
  ): MsgDeleteSubspace {
    const message = createBaseMsgDeleteSubspace();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteSubspaceAmino): MsgDeleteSubspace {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      signer: object.signer,
    };
  },
  toAmino(message: MsgDeleteSubspace): MsgDeleteSubspaceAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteSubspaceAminoMsg): MsgDeleteSubspace {
    return MsgDeleteSubspace.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteSubspaceProtoMsg): MsgDeleteSubspace {
    return MsgDeleteSubspace.decode(message.value);
  },
  toProto(message: MsgDeleteSubspace): Uint8Array {
    return MsgDeleteSubspace.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteSubspace): MsgDeleteSubspaceProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgDeleteSubspace",
      value: MsgDeleteSubspace.encode(message).finish(),
    };
  },
};
function createBaseMsgDeleteSubspaceResponse(): MsgDeleteSubspaceResponse {
  return {};
}
export const MsgDeleteSubspaceResponse = {
  encode(
    _: MsgDeleteSubspaceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    _: I,
  ): MsgDeleteSubspaceResponse {
    const message = createBaseMsgDeleteSubspaceResponse();
    return message;
  },
  fromAmino(_: MsgDeleteSubspaceResponseAmino): MsgDeleteSubspaceResponse {
    return {};
  },
  toAmino(_: MsgDeleteSubspaceResponse): MsgDeleteSubspaceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgDeleteSubspaceResponseAminoMsg,
  ): MsgDeleteSubspaceResponse {
    return MsgDeleteSubspaceResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgDeleteSubspaceResponseProtoMsg,
  ): MsgDeleteSubspaceResponse {
    return MsgDeleteSubspaceResponse.decode(message.value);
  },
  toProto(message: MsgDeleteSubspaceResponse): Uint8Array {
    return MsgDeleteSubspaceResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgDeleteSubspaceResponse,
  ): MsgDeleteSubspaceResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgDeleteSubspaceResponse",
      value: MsgDeleteSubspaceResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgCreateSection(): MsgCreateSection {
  return {
    subspaceId: Long.UZERO,
    name: "",
    description: "",
    parentId: 0,
    creator: "",
  };
}
export const MsgCreateSection = {
  encode(
    message: MsgCreateSection,
    writer: _m0.Writer = _m0.Writer.create(),
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
    if (message.parentId !== 0) {
      writer.uint32(32).uint32(message.parentId);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSection();
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
          message.parentId = reader.uint32();
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
  fromJSON(object: any): MsgCreateSection {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      parentId: isSet(object.parentId) ? Number(object.parentId) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },
  toJSON(message: MsgCreateSection): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.parentId !== undefined &&
      (obj.parentId = Math.round(message.parentId));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateSection>, I>>(
    object: I,
  ): MsgCreateSection {
    const message = createBaseMsgCreateSection();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.parentId = object.parentId ?? 0;
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgCreateSectionAmino): MsgCreateSection {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      name: object.name,
      description: object.description,
      parentId: object.parent_id,
      creator: object.creator,
    };
  },
  toAmino(message: MsgCreateSection): MsgCreateSectionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.name = message.name;
    obj.description = message.description;
    obj.parent_id = message.parentId;
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSectionAminoMsg): MsgCreateSection {
    return MsgCreateSection.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSectionProtoMsg): MsgCreateSection {
    return MsgCreateSection.decode(message.value);
  },
  toProto(message: MsgCreateSection): Uint8Array {
    return MsgCreateSection.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSection): MsgCreateSectionProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgCreateSection",
      value: MsgCreateSection.encode(message).finish(),
    };
  },
};
function createBaseMsgCreateSectionResponse(): MsgCreateSectionResponse {
  return {
    sectionId: 0,
  };
}
export const MsgCreateSectionResponse = {
  encode(
    message: MsgCreateSectionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sectionId !== 0) {
      writer.uint32(8).uint32(message.sectionId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateSectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sectionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateSectionResponse {
    return {
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
    };
  },
  toJSON(message: MsgCreateSectionResponse): unknown {
    const obj: any = {};
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateSectionResponse>, I>>(
    object: I,
  ): MsgCreateSectionResponse {
    const message = createBaseMsgCreateSectionResponse();
    message.sectionId = object.sectionId ?? 0;
    return message;
  },
  fromAmino(object: MsgCreateSectionResponseAmino): MsgCreateSectionResponse {
    return {
      sectionId: object.section_id,
    };
  },
  toAmino(message: MsgCreateSectionResponse): MsgCreateSectionResponseAmino {
    const obj: any = {};
    obj.section_id = message.sectionId;
    return obj;
  },
  fromAminoMsg(
    object: MsgCreateSectionResponseAminoMsg,
  ): MsgCreateSectionResponse {
    return MsgCreateSectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgCreateSectionResponseProtoMsg,
  ): MsgCreateSectionResponse {
    return MsgCreateSectionResponse.decode(message.value);
  },
  toProto(message: MsgCreateSectionResponse): Uint8Array {
    return MsgCreateSectionResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgCreateSectionResponse,
  ): MsgCreateSectionResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgCreateSectionResponse",
      value: MsgCreateSectionResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgEditSection(): MsgEditSection {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    name: "",
    description: "",
    editor: "",
  };
}
export const MsgEditSection = {
  encode(
    message: MsgEditSection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.editor !== "") {
      writer.uint32(42).string(message.editor);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditSection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditSection();
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.editor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEditSection {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      editor: isSet(object.editor) ? String(object.editor) : "",
    };
  },
  toJSON(message: MsgEditSection): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.editor !== undefined && (obj.editor = message.editor);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditSection>, I>>(
    object: I,
  ): MsgEditSection {
    const message = createBaseMsgEditSection();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.editor = object.editor ?? "";
    return message;
  },
  fromAmino(object: MsgEditSectionAmino): MsgEditSection {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      name: object.name,
      description: object.description,
      editor: object.editor,
    };
  },
  toAmino(message: MsgEditSection): MsgEditSectionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.name = message.name;
    obj.description = message.description;
    obj.editor = message.editor;
    return obj;
  },
  fromAminoMsg(object: MsgEditSectionAminoMsg): MsgEditSection {
    return MsgEditSection.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditSectionProtoMsg): MsgEditSection {
    return MsgEditSection.decode(message.value);
  },
  toProto(message: MsgEditSection): Uint8Array {
    return MsgEditSection.encode(message).finish();
  },
  toProtoMsg(message: MsgEditSection): MsgEditSectionProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgEditSection",
      value: MsgEditSection.encode(message).finish(),
    };
  },
};
function createBaseMsgEditSectionResponse(): MsgEditSectionResponse {
  return {};
}
export const MsgEditSectionResponse = {
  encode(
    _: MsgEditSectionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgEditSectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditSectionResponse();
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
  fromJSON(_: any): MsgEditSectionResponse {
    return {};
  },
  toJSON(_: MsgEditSectionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditSectionResponse>, I>>(
    _: I,
  ): MsgEditSectionResponse {
    const message = createBaseMsgEditSectionResponse();
    return message;
  },
  fromAmino(_: MsgEditSectionResponseAmino): MsgEditSectionResponse {
    return {};
  },
  toAmino(_: MsgEditSectionResponse): MsgEditSectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditSectionResponseAminoMsg): MsgEditSectionResponse {
    return MsgEditSectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgEditSectionResponseProtoMsg,
  ): MsgEditSectionResponse {
    return MsgEditSectionResponse.decode(message.value);
  },
  toProto(message: MsgEditSectionResponse): Uint8Array {
    return MsgEditSectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditSectionResponse): MsgEditSectionResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgEditSectionResponse",
      value: MsgEditSectionResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgMoveSection(): MsgMoveSection {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    newParentId: 0,
    signer: "",
  };
}
export const MsgMoveSection = {
  encode(
    message: MsgMoveSection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (message.newParentId !== 0) {
      writer.uint32(24).uint32(message.newParentId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMoveSection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveSection();
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
          message.newParentId = reader.uint32();
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
  fromJSON(object: any): MsgMoveSection {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      newParentId: isSet(object.newParentId) ? Number(object.newParentId) : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgMoveSection): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    message.newParentId !== undefined &&
      (obj.newParentId = Math.round(message.newParentId));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMoveSection>, I>>(
    object: I,
  ): MsgMoveSection {
    const message = createBaseMsgMoveSection();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.newParentId = object.newParentId ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgMoveSectionAmino): MsgMoveSection {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      newParentId: object.new_parent_id,
      signer: object.signer,
    };
  },
  toAmino(message: MsgMoveSection): MsgMoveSectionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.new_parent_id = message.newParentId;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgMoveSectionAminoMsg): MsgMoveSection {
    return MsgMoveSection.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMoveSectionProtoMsg): MsgMoveSection {
    return MsgMoveSection.decode(message.value);
  },
  toProto(message: MsgMoveSection): Uint8Array {
    return MsgMoveSection.encode(message).finish();
  },
  toProtoMsg(message: MsgMoveSection): MsgMoveSectionProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgMoveSection",
      value: MsgMoveSection.encode(message).finish(),
    };
  },
};
function createBaseMsgMoveSectionResponse(): MsgMoveSectionResponse {
  return {};
}
export const MsgMoveSectionResponse = {
  encode(
    _: MsgMoveSectionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgMoveSectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveSectionResponse();
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
  fromJSON(_: any): MsgMoveSectionResponse {
    return {};
  },
  toJSON(_: MsgMoveSectionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMoveSectionResponse>, I>>(
    _: I,
  ): MsgMoveSectionResponse {
    const message = createBaseMsgMoveSectionResponse();
    return message;
  },
  fromAmino(_: MsgMoveSectionResponseAmino): MsgMoveSectionResponse {
    return {};
  },
  toAmino(_: MsgMoveSectionResponse): MsgMoveSectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMoveSectionResponseAminoMsg): MsgMoveSectionResponse {
    return MsgMoveSectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgMoveSectionResponseProtoMsg,
  ): MsgMoveSectionResponse {
    return MsgMoveSectionResponse.decode(message.value);
  },
  toProto(message: MsgMoveSectionResponse): Uint8Array {
    return MsgMoveSectionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMoveSectionResponse): MsgMoveSectionResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgMoveSectionResponse",
      value: MsgMoveSectionResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgDeleteSection(): MsgDeleteSection {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    signer: "",
  };
}
export const MsgDeleteSection = {
  encode(
    message: MsgDeleteSection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSection();
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
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteSection {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgDeleteSection): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteSection>, I>>(
    object: I,
  ): MsgDeleteSection {
    const message = createBaseMsgDeleteSection();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteSectionAmino): MsgDeleteSection {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      signer: object.signer,
    };
  },
  toAmino(message: MsgDeleteSection): MsgDeleteSectionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteSectionAminoMsg): MsgDeleteSection {
    return MsgDeleteSection.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteSectionProtoMsg): MsgDeleteSection {
    return MsgDeleteSection.decode(message.value);
  },
  toProto(message: MsgDeleteSection): Uint8Array {
    return MsgDeleteSection.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteSection): MsgDeleteSectionProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgDeleteSection",
      value: MsgDeleteSection.encode(message).finish(),
    };
  },
};
function createBaseMsgDeleteSectionResponse(): MsgDeleteSectionResponse {
  return {};
}
export const MsgDeleteSectionResponse = {
  encode(
    _: MsgDeleteSectionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteSectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSectionResponse();
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
  fromJSON(_: any): MsgDeleteSectionResponse {
    return {};
  },
  toJSON(_: MsgDeleteSectionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteSectionResponse>, I>>(
    _: I,
  ): MsgDeleteSectionResponse {
    const message = createBaseMsgDeleteSectionResponse();
    return message;
  },
  fromAmino(_: MsgDeleteSectionResponseAmino): MsgDeleteSectionResponse {
    return {};
  },
  toAmino(_: MsgDeleteSectionResponse): MsgDeleteSectionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgDeleteSectionResponseAminoMsg,
  ): MsgDeleteSectionResponse {
    return MsgDeleteSectionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgDeleteSectionResponseProtoMsg,
  ): MsgDeleteSectionResponse {
    return MsgDeleteSectionResponse.decode(message.value);
  },
  toProto(message: MsgDeleteSectionResponse): Uint8Array {
    return MsgDeleteSectionResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgDeleteSectionResponse,
  ): MsgDeleteSectionResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgDeleteSectionResponse",
      value: MsgDeleteSectionResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgCreateUserGroup(): MsgCreateUserGroup {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    name: "",
    description: "",
    defaultPermissions: [],
    initialMembers: [],
    creator: "",
  };
}
export const MsgCreateUserGroup = {
  encode(
    message: MsgCreateUserGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.defaultPermissions) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.initialMembers) {
      writer.uint32(50).string(v!);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
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
          message.sectionId = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.defaultPermissions.push(reader.string());
          break;
        case 6:
          message.initialMembers.push(reader.string());
          break;
        case 7:
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
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      defaultPermissions: Array.isArray(object?.defaultPermissions)
        ? object.defaultPermissions.map((e: any) => String(e))
        : [],
      initialMembers: Array.isArray(object?.initialMembers)
        ? object.initialMembers.map((e: any) => String(e))
        : [],
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },
  toJSON(message: MsgCreateUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.defaultPermissions) {
      obj.defaultPermissions = message.defaultPermissions.map((e) => e);
    } else {
      obj.defaultPermissions = [];
    }
    if (message.initialMembers) {
      obj.initialMembers = message.initialMembers.map((e) => e);
    } else {
      obj.initialMembers = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateUserGroup>, I>>(
    object: I,
  ): MsgCreateUserGroup {
    const message = createBaseMsgCreateUserGroup();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.defaultPermissions = object.defaultPermissions?.map((e) => e) || [];
    message.initialMembers = object.initialMembers?.map((e) => e) || [];
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgCreateUserGroupAmino): MsgCreateUserGroup {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      name: object.name,
      description: object.description,
      defaultPermissions: Array.isArray(object?.default_permissions)
        ? object.default_permissions.map((e: any) => e)
        : [],
      initialMembers: Array.isArray(object?.initial_members)
        ? object.initial_members.map((e: any) => e)
        : [],
      creator: object.creator,
    };
  },
  toAmino(message: MsgCreateUserGroup): MsgCreateUserGroupAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.name = message.name;
    obj.description = message.description;
    if (message.defaultPermissions) {
      obj.default_permissions = message.defaultPermissions.map((e) => e);
    } else {
      obj.default_permissions = [];
    }
    if (message.initialMembers) {
      obj.initial_members = message.initialMembers.map((e) => e);
    } else {
      obj.initial_members = [];
    }
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgCreateUserGroupAminoMsg): MsgCreateUserGroup {
    return MsgCreateUserGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateUserGroupProtoMsg): MsgCreateUserGroup {
    return MsgCreateUserGroup.decode(message.value);
  },
  toProto(message: MsgCreateUserGroup): Uint8Array {
    return MsgCreateUserGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateUserGroup): MsgCreateUserGroupProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgCreateUserGroup",
      value: MsgCreateUserGroup.encode(message).finish(),
    };
  },
};
function createBaseMsgCreateUserGroupResponse(): MsgCreateUserGroupResponse {
  return {
    groupId: 0,
  };
}
export const MsgCreateUserGroupResponse = {
  encode(
    message: MsgCreateUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint32(message.groupId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    object: I,
  ): MsgCreateUserGroupResponse {
    const message = createBaseMsgCreateUserGroupResponse();
    message.groupId = object.groupId ?? 0;
    return message;
  },
  fromAmino(
    object: MsgCreateUserGroupResponseAmino,
  ): MsgCreateUserGroupResponse {
    return {
      groupId: object.group_id,
    };
  },
  toAmino(
    message: MsgCreateUserGroupResponse,
  ): MsgCreateUserGroupResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId;
    return obj;
  },
  fromAminoMsg(
    object: MsgCreateUserGroupResponseAminoMsg,
  ): MsgCreateUserGroupResponse {
    return MsgCreateUserGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgCreateUserGroupResponseProtoMsg,
  ): MsgCreateUserGroupResponse {
    return MsgCreateUserGroupResponse.decode(message.value);
  },
  toProto(message: MsgCreateUserGroupResponse): Uint8Array {
    return MsgCreateUserGroupResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgCreateUserGroupResponse,
  ): MsgCreateUserGroupResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgCreateUserGroupResponse",
      value: MsgCreateUserGroupResponse.encode(message).finish(),
    };
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
    writer: _m0.Writer = _m0.Writer.create(),
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
        ? Long.fromValue(object.subspaceId)
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
    object: I,
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
  fromAmino(object: MsgEditUserGroupAmino): MsgEditUserGroup {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      groupId: object.group_id,
      name: object.name,
      description: object.description,
      signer: object.signer,
    };
  },
  toAmino(message: MsgEditUserGroup): MsgEditUserGroupAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.group_id = message.groupId;
    obj.name = message.name;
    obj.description = message.description;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgEditUserGroupAminoMsg): MsgEditUserGroup {
    return MsgEditUserGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditUserGroupProtoMsg): MsgEditUserGroup {
    return MsgEditUserGroup.decode(message.value);
  },
  toProto(message: MsgEditUserGroup): Uint8Array {
    return MsgEditUserGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgEditUserGroup): MsgEditUserGroupProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgEditUserGroup",
      value: MsgEditUserGroup.encode(message).finish(),
    };
  },
};
function createBaseMsgEditUserGroupResponse(): MsgEditUserGroupResponse {
  return {};
}
export const MsgEditUserGroupResponse = {
  encode(
    _: MsgEditUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    _: I,
  ): MsgEditUserGroupResponse {
    const message = createBaseMsgEditUserGroupResponse();
    return message;
  },
  fromAmino(_: MsgEditUserGroupResponseAmino): MsgEditUserGroupResponse {
    return {};
  },
  toAmino(_: MsgEditUserGroupResponse): MsgEditUserGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgEditUserGroupResponseAminoMsg,
  ): MsgEditUserGroupResponse {
    return MsgEditUserGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgEditUserGroupResponseProtoMsg,
  ): MsgEditUserGroupResponse {
    return MsgEditUserGroupResponse.decode(message.value);
  },
  toProto(message: MsgEditUserGroupResponse): Uint8Array {
    return MsgEditUserGroupResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgEditUserGroupResponse,
  ): MsgEditUserGroupResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgEditUserGroupResponse",
      value: MsgEditUserGroupResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgMoveUserGroup(): MsgMoveUserGroup {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    newSectionId: 0,
    signer: "",
  };
}
export const MsgMoveUserGroup = {
  encode(
    message: MsgMoveUserGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    if (message.newSectionId !== 0) {
      writer.uint32(24).uint32(message.newSectionId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMoveUserGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveUserGroup();
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
          message.newSectionId = reader.uint32();
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
  fromJSON(object: any): MsgMoveUserGroup {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      newSectionId: isSet(object.newSectionId)
        ? Number(object.newSectionId)
        : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgMoveUserGroup): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.newSectionId !== undefined &&
      (obj.newSectionId = Math.round(message.newSectionId));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMoveUserGroup>, I>>(
    object: I,
  ): MsgMoveUserGroup {
    const message = createBaseMsgMoveUserGroup();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.newSectionId = object.newSectionId ?? 0;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgMoveUserGroupAmino): MsgMoveUserGroup {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      groupId: object.group_id,
      newSectionId: object.new_section_id,
      signer: object.signer,
    };
  },
  toAmino(message: MsgMoveUserGroup): MsgMoveUserGroupAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.group_id = message.groupId;
    obj.new_section_id = message.newSectionId;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgMoveUserGroupAminoMsg): MsgMoveUserGroup {
    return MsgMoveUserGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMoveUserGroupProtoMsg): MsgMoveUserGroup {
    return MsgMoveUserGroup.decode(message.value);
  },
  toProto(message: MsgMoveUserGroup): Uint8Array {
    return MsgMoveUserGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgMoveUserGroup): MsgMoveUserGroupProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgMoveUserGroup",
      value: MsgMoveUserGroup.encode(message).finish(),
    };
  },
};
function createBaseMsgMoveUserGroupResponse(): MsgMoveUserGroupResponse {
  return {};
}
export const MsgMoveUserGroupResponse = {
  encode(
    _: MsgMoveUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgMoveUserGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMoveUserGroupResponse();
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
  fromJSON(_: any): MsgMoveUserGroupResponse {
    return {};
  },
  toJSON(_: MsgMoveUserGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMoveUserGroupResponse>, I>>(
    _: I,
  ): MsgMoveUserGroupResponse {
    const message = createBaseMsgMoveUserGroupResponse();
    return message;
  },
  fromAmino(_: MsgMoveUserGroupResponseAmino): MsgMoveUserGroupResponse {
    return {};
  },
  toAmino(_: MsgMoveUserGroupResponse): MsgMoveUserGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgMoveUserGroupResponseAminoMsg,
  ): MsgMoveUserGroupResponse {
    return MsgMoveUserGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgMoveUserGroupResponseProtoMsg,
  ): MsgMoveUserGroupResponse {
    return MsgMoveUserGroupResponse.decode(message.value);
  },
  toProto(message: MsgMoveUserGroupResponse): Uint8Array {
    return MsgMoveUserGroupResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgMoveUserGroupResponse,
  ): MsgMoveUserGroupResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgMoveUserGroupResponse",
      value: MsgMoveUserGroupResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgSetUserGroupPermissions(): MsgSetUserGroupPermissions {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    permissions: [],
    signer: "",
  };
}
export const MsgSetUserGroupPermissions = {
  encode(
    message: MsgSetUserGroupPermissions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
          message.permissions.push(reader.string());
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
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => String(e))
        : [],
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgSetUserGroupPermissions): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetUserGroupPermissions>, I>>(
    object: I,
  ): MsgSetUserGroupPermissions {
    const message = createBaseMsgSetUserGroupPermissions();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.permissions = object.permissions?.map((e) => e) || [];
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(
    object: MsgSetUserGroupPermissionsAmino,
  ): MsgSetUserGroupPermissions {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      groupId: object.group_id,
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => e)
        : [],
      signer: object.signer,
    };
  },
  toAmino(
    message: MsgSetUserGroupPermissions,
  ): MsgSetUserGroupPermissionsAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.group_id = message.groupId;
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(
    object: MsgSetUserGroupPermissionsAminoMsg,
  ): MsgSetUserGroupPermissions {
    return MsgSetUserGroupPermissions.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgSetUserGroupPermissionsProtoMsg,
  ): MsgSetUserGroupPermissions {
    return MsgSetUserGroupPermissions.decode(message.value);
  },
  toProto(message: MsgSetUserGroupPermissions): Uint8Array {
    return MsgSetUserGroupPermissions.encode(message).finish();
  },
  toProtoMsg(
    message: MsgSetUserGroupPermissions,
  ): MsgSetUserGroupPermissionsProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgSetUserGroupPermissions",
      value: MsgSetUserGroupPermissions.encode(message).finish(),
    };
  },
};
function createBaseMsgSetUserGroupPermissionsResponse(): MsgSetUserGroupPermissionsResponse {
  return {};
}
export const MsgSetUserGroupPermissionsResponse = {
  encode(
    _: MsgSetUserGroupPermissionsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    I extends Exact<DeepPartial<MsgSetUserGroupPermissionsResponse>, I>,
  >(_: I): MsgSetUserGroupPermissionsResponse {
    const message = createBaseMsgSetUserGroupPermissionsResponse();
    return message;
  },
  fromAmino(
    _: MsgSetUserGroupPermissionsResponseAmino,
  ): MsgSetUserGroupPermissionsResponse {
    return {};
  },
  toAmino(
    _: MsgSetUserGroupPermissionsResponse,
  ): MsgSetUserGroupPermissionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgSetUserGroupPermissionsResponseAminoMsg,
  ): MsgSetUserGroupPermissionsResponse {
    return MsgSetUserGroupPermissionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgSetUserGroupPermissionsResponseProtoMsg,
  ): MsgSetUserGroupPermissionsResponse {
    return MsgSetUserGroupPermissionsResponse.decode(message.value);
  },
  toProto(message: MsgSetUserGroupPermissionsResponse): Uint8Array {
    return MsgSetUserGroupPermissionsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgSetUserGroupPermissionsResponse,
  ): MsgSetUserGroupPermissionsResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgSetUserGroupPermissionsResponse",
      value: MsgSetUserGroupPermissionsResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgDeleteUserGroup(): MsgDeleteUserGroup {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    signer: "",
  };
}
export const MsgDeleteUserGroup = {
  encode(
    message: MsgDeleteUserGroup,
    writer: _m0.Writer = _m0.Writer.create(),
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
        ? Long.fromValue(object.subspaceId)
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
    object: I,
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
  fromAmino(object: MsgDeleteUserGroupAmino): MsgDeleteUserGroup {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      groupId: object.group_id,
      signer: object.signer,
    };
  },
  toAmino(message: MsgDeleteUserGroup): MsgDeleteUserGroupAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.group_id = message.groupId;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteUserGroupAminoMsg): MsgDeleteUserGroup {
    return MsgDeleteUserGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteUserGroupProtoMsg): MsgDeleteUserGroup {
    return MsgDeleteUserGroup.decode(message.value);
  },
  toProto(message: MsgDeleteUserGroup): Uint8Array {
    return MsgDeleteUserGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteUserGroup): MsgDeleteUserGroupProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgDeleteUserGroup",
      value: MsgDeleteUserGroup.encode(message).finish(),
    };
  },
};
function createBaseMsgDeleteUserGroupResponse(): MsgDeleteUserGroupResponse {
  return {};
}
export const MsgDeleteUserGroupResponse = {
  encode(
    _: MsgDeleteUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    _: I,
  ): MsgDeleteUserGroupResponse {
    const message = createBaseMsgDeleteUserGroupResponse();
    return message;
  },
  fromAmino(_: MsgDeleteUserGroupResponseAmino): MsgDeleteUserGroupResponse {
    return {};
  },
  toAmino(_: MsgDeleteUserGroupResponse): MsgDeleteUserGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgDeleteUserGroupResponseAminoMsg,
  ): MsgDeleteUserGroupResponse {
    return MsgDeleteUserGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgDeleteUserGroupResponseProtoMsg,
  ): MsgDeleteUserGroupResponse {
    return MsgDeleteUserGroupResponse.decode(message.value);
  },
  toProto(message: MsgDeleteUserGroupResponse): Uint8Array {
    return MsgDeleteUserGroupResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgDeleteUserGroupResponse,
  ): MsgDeleteUserGroupResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgDeleteUserGroupResponse",
      value: MsgDeleteUserGroupResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgAddUserToUserGroup(): MsgAddUserToUserGroup {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    user: "",
    signer: "",
  };
}
export const MsgAddUserToUserGroup = {
  encode(
    message: MsgAddUserToUserGroup,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
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
        ? Long.fromValue(object.subspaceId)
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
    object: I,
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
  fromAmino(object: MsgAddUserToUserGroupAmino): MsgAddUserToUserGroup {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      groupId: object.group_id,
      user: object.user,
      signer: object.signer,
    };
  },
  toAmino(message: MsgAddUserToUserGroup): MsgAddUserToUserGroupAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.group_id = message.groupId;
    obj.user = message.user;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgAddUserToUserGroupAminoMsg): MsgAddUserToUserGroup {
    return MsgAddUserToUserGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddUserToUserGroupProtoMsg): MsgAddUserToUserGroup {
    return MsgAddUserToUserGroup.decode(message.value);
  },
  toProto(message: MsgAddUserToUserGroup): Uint8Array {
    return MsgAddUserToUserGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgAddUserToUserGroup): MsgAddUserToUserGroupProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgAddUserToUserGroup",
      value: MsgAddUserToUserGroup.encode(message).finish(),
    };
  },
};
function createBaseMsgAddUserToUserGroupResponse(): MsgAddUserToUserGroupResponse {
  return {};
}
export const MsgAddUserToUserGroupResponse = {
  encode(
    _: MsgAddUserToUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    _: I,
  ): MsgAddUserToUserGroupResponse {
    const message = createBaseMsgAddUserToUserGroupResponse();
    return message;
  },
  fromAmino(
    _: MsgAddUserToUserGroupResponseAmino,
  ): MsgAddUserToUserGroupResponse {
    return {};
  },
  toAmino(
    _: MsgAddUserToUserGroupResponse,
  ): MsgAddUserToUserGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgAddUserToUserGroupResponseAminoMsg,
  ): MsgAddUserToUserGroupResponse {
    return MsgAddUserToUserGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAddUserToUserGroupResponseProtoMsg,
  ): MsgAddUserToUserGroupResponse {
    return MsgAddUserToUserGroupResponse.decode(message.value);
  },
  toProto(message: MsgAddUserToUserGroupResponse): Uint8Array {
    return MsgAddUserToUserGroupResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAddUserToUserGroupResponse,
  ): MsgAddUserToUserGroupResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgAddUserToUserGroupResponse",
      value: MsgAddUserToUserGroupResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRemoveUserFromUserGroup(): MsgRemoveUserFromUserGroup {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    user: "",
    signer: "",
  };
}
export const MsgRemoveUserFromUserGroup = {
  encode(
    message: MsgRemoveUserFromUserGroup,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
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
        ? Long.fromValue(object.subspaceId)
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
    object: I,
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
  fromAmino(
    object: MsgRemoveUserFromUserGroupAmino,
  ): MsgRemoveUserFromUserGroup {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      groupId: object.group_id,
      user: object.user,
      signer: object.signer,
    };
  },
  toAmino(
    message: MsgRemoveUserFromUserGroup,
  ): MsgRemoveUserFromUserGroupAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.group_id = message.groupId;
    obj.user = message.user;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(
    object: MsgRemoveUserFromUserGroupAminoMsg,
  ): MsgRemoveUserFromUserGroup {
    return MsgRemoveUserFromUserGroup.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRemoveUserFromUserGroupProtoMsg,
  ): MsgRemoveUserFromUserGroup {
    return MsgRemoveUserFromUserGroup.decode(message.value);
  },
  toProto(message: MsgRemoveUserFromUserGroup): Uint8Array {
    return MsgRemoveUserFromUserGroup.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRemoveUserFromUserGroup,
  ): MsgRemoveUserFromUserGroupProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup",
      value: MsgRemoveUserFromUserGroup.encode(message).finish(),
    };
  },
};
function createBaseMsgRemoveUserFromUserGroupResponse(): MsgRemoveUserFromUserGroupResponse {
  return {};
}
export const MsgRemoveUserFromUserGroupResponse = {
  encode(
    _: MsgRemoveUserFromUserGroupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    I extends Exact<DeepPartial<MsgRemoveUserFromUserGroupResponse>, I>,
  >(_: I): MsgRemoveUserFromUserGroupResponse {
    const message = createBaseMsgRemoveUserFromUserGroupResponse();
    return message;
  },
  fromAmino(
    _: MsgRemoveUserFromUserGroupResponseAmino,
  ): MsgRemoveUserFromUserGroupResponse {
    return {};
  },
  toAmino(
    _: MsgRemoveUserFromUserGroupResponse,
  ): MsgRemoveUserFromUserGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgRemoveUserFromUserGroupResponseAminoMsg,
  ): MsgRemoveUserFromUserGroupResponse {
    return MsgRemoveUserFromUserGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRemoveUserFromUserGroupResponseProtoMsg,
  ): MsgRemoveUserFromUserGroupResponse {
    return MsgRemoveUserFromUserGroupResponse.decode(message.value);
  },
  toProto(message: MsgRemoveUserFromUserGroupResponse): Uint8Array {
    return MsgRemoveUserFromUserGroupResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRemoveUserFromUserGroupResponse,
  ): MsgRemoveUserFromUserGroupResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroupResponse",
      value: MsgRemoveUserFromUserGroupResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgSetUserPermissions(): MsgSetUserPermissions {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    user: "",
    permissions: [],
    signer: "",
  };
}
export const MsgSetUserPermissions = {
  encode(
    message: MsgSetUserPermissions,
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
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
          message.sectionId = reader.uint32();
          break;
        case 3:
          message.user = reader.string();
          break;
        case 4:
          message.permissions.push(reader.string());
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
  fromJSON(object: any): MsgSetUserPermissions {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => String(e))
        : [],
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgSetUserPermissions): unknown {
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
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetUserPermissions>, I>>(
    object: I,
  ): MsgSetUserPermissions {
    const message = createBaseMsgSetUserPermissions();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.user = object.user ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgSetUserPermissionsAmino): MsgSetUserPermissions {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      user: object.user,
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => e)
        : [],
      signer: object.signer,
    };
  },
  toAmino(message: MsgSetUserPermissions): MsgSetUserPermissionsAmino {
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
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgSetUserPermissionsAminoMsg): MsgSetUserPermissions {
    return MsgSetUserPermissions.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetUserPermissionsProtoMsg): MsgSetUserPermissions {
    return MsgSetUserPermissions.decode(message.value);
  },
  toProto(message: MsgSetUserPermissions): Uint8Array {
    return MsgSetUserPermissions.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUserPermissions): MsgSetUserPermissionsProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgSetUserPermissions",
      value: MsgSetUserPermissions.encode(message).finish(),
    };
  },
};
function createBaseMsgSetUserPermissionsResponse(): MsgSetUserPermissionsResponse {
  return {};
}
export const MsgSetUserPermissionsResponse = {
  encode(
    _: MsgSetUserPermissionsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    _: I,
  ): MsgSetUserPermissionsResponse {
    const message = createBaseMsgSetUserPermissionsResponse();
    return message;
  },
  fromAmino(
    _: MsgSetUserPermissionsResponseAmino,
  ): MsgSetUserPermissionsResponse {
    return {};
  },
  toAmino(
    _: MsgSetUserPermissionsResponse,
  ): MsgSetUserPermissionsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgSetUserPermissionsResponseAminoMsg,
  ): MsgSetUserPermissionsResponse {
    return MsgSetUserPermissionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgSetUserPermissionsResponseProtoMsg,
  ): MsgSetUserPermissionsResponse {
    return MsgSetUserPermissionsResponse.decode(message.value);
  },
  toProto(message: MsgSetUserPermissionsResponse): Uint8Array {
    return MsgSetUserPermissionsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgSetUserPermissionsResponse,
  ): MsgSetUserPermissionsResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgSetUserPermissionsResponse",
      value: MsgSetUserPermissionsResponse.encode(message).finish(),
    };
  },
};
/** Msg defines subspaces Msg service. */
export interface Msg {
  /** CreateSubspace allows to create a subspace */
  CreateSubspace(
    request: MsgCreateSubspace,
  ): Promise<MsgCreateSubspaceResponse>;
  /** EditSubspace allows to edit a subspace */
  EditSubspace(request: MsgEditSubspace): Promise<MsgEditSubspaceResponse>;
  /** DeleteSubspace allows to delete a subspace */
  DeleteSubspace(
    request: MsgDeleteSubspace,
  ): Promise<MsgDeleteSubspaceResponse>;
  /** CreateSection allows to create a new subspace section */
  CreateSection(request: MsgCreateSection): Promise<MsgCreateSectionResponse>;
  /** EditSection allows to edit an existing section */
  EditSection(request: MsgEditSection): Promise<MsgEditSectionResponse>;
  /** MoveSection allows to move an existing section to another parent */
  MoveSection(request: MsgMoveSection): Promise<MsgMoveSectionResponse>;
  /** DeleteSection allows to delete an existing section */
  DeleteSection(request: MsgDeleteSection): Promise<MsgDeleteSectionResponse>;
  /** CreateUserGroup allows to create a user group */
  CreateUserGroup(
    request: MsgCreateUserGroup,
  ): Promise<MsgCreateUserGroupResponse>;
  /** EditUserGroup allows to edit a user group */
  EditUserGroup(request: MsgEditUserGroup): Promise<MsgEditUserGroupResponse>;
  /** MoveUserGroup allows to move a user group from a section to another */
  MoveUserGroup(request: MsgMoveUserGroup): Promise<MsgMoveUserGroupResponse>;
  /** SetUserGroupPermissions allows to set the permissions for a specific group */
  SetUserGroupPermissions(
    request: MsgSetUserGroupPermissions,
  ): Promise<MsgSetUserGroupPermissionsResponse>;
  /** DeleteUserGroup allows to delete an existing user group */
  DeleteUserGroup(
    request: MsgDeleteUserGroup,
  ): Promise<MsgDeleteUserGroupResponse>;
  /** AddUserToUserGroup allows to add a specific user to a specific user group */
  AddUserToUserGroup(
    request: MsgAddUserToUserGroup,
  ): Promise<MsgAddUserToUserGroupResponse>;
  /**
   * RemoveUserFromUserGroup allows to remove a specific user from a specific
   * user group
   */
  RemoveUserFromUserGroup(
    request: MsgRemoveUserFromUserGroup,
  ): Promise<MsgRemoveUserFromUserGroupResponse>;
  /** SetUserPermissions allows to set the permissions for a specific user */
  SetUserPermissions(
    request: MsgSetUserPermissions,
  ): Promise<MsgSetUserPermissionsResponse>;
  /**
   * GrantTreasuryAuthorization allows managers who have the permission to grant
   * a treasury authorization to a user
   */
  GrantTreasuryAuthorization(
    request: MsgGrantTreasuryAuthorization,
  ): Promise<MsgGrantTreasuryAuthorizationResponse>;
  /**
   * RevokeTreasuryAuthorization allows managers who have the permission to
   * revoke an existing treasury authorization
   */
  RevokeTreasuryAuthorization(
    request: MsgRevokeTreasuryAuthorization,
  ): Promise<MsgRevokeTreasuryAuthorizationResponse>;
  /**
   * GrantAllowance allows the granter to grant a fee allowance to the
   * grantee
   */
  GrantAllowance(
    request: MsgGrantAllowance,
  ): Promise<MsgGrantAllowanceResponse>;
  /**
   * RevokeAllowance allows a granter to revoke any existing treasury allowance
   * that has been granted to the grantee
   */
  RevokeAllowance(
    request: MsgRevokeAllowance,
  ): Promise<MsgRevokeAllowanceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateSubspace = this.CreateSubspace.bind(this);
    this.EditSubspace = this.EditSubspace.bind(this);
    this.DeleteSubspace = this.DeleteSubspace.bind(this);
    this.CreateSection = this.CreateSection.bind(this);
    this.EditSection = this.EditSection.bind(this);
    this.MoveSection = this.MoveSection.bind(this);
    this.DeleteSection = this.DeleteSection.bind(this);
    this.CreateUserGroup = this.CreateUserGroup.bind(this);
    this.EditUserGroup = this.EditUserGroup.bind(this);
    this.MoveUserGroup = this.MoveUserGroup.bind(this);
    this.SetUserGroupPermissions = this.SetUserGroupPermissions.bind(this);
    this.DeleteUserGroup = this.DeleteUserGroup.bind(this);
    this.AddUserToUserGroup = this.AddUserToUserGroup.bind(this);
    this.RemoveUserFromUserGroup = this.RemoveUserFromUserGroup.bind(this);
    this.SetUserPermissions = this.SetUserPermissions.bind(this);
    this.GrantTreasuryAuthorization =
      this.GrantTreasuryAuthorization.bind(this);
    this.RevokeTreasuryAuthorization =
      this.RevokeTreasuryAuthorization.bind(this);
    this.GrantAllowance = this.GrantAllowance.bind(this);
    this.RevokeAllowance = this.RevokeAllowance.bind(this);
  }
  CreateSubspace(
    request: MsgCreateSubspace,
  ): Promise<MsgCreateSubspaceResponse> {
    const data = MsgCreateSubspace.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "CreateSubspace",
      data,
    );
    return promise.then((data) =>
      MsgCreateSubspaceResponse.decode(new _m0.Reader(data)),
    );
  }
  EditSubspace(request: MsgEditSubspace): Promise<MsgEditSubspaceResponse> {
    const data = MsgEditSubspace.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "EditSubspace",
      data,
    );
    return promise.then((data) =>
      MsgEditSubspaceResponse.decode(new _m0.Reader(data)),
    );
  }
  DeleteSubspace(
    request: MsgDeleteSubspace,
  ): Promise<MsgDeleteSubspaceResponse> {
    const data = MsgDeleteSubspace.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "DeleteSubspace",
      data,
    );
    return promise.then((data) =>
      MsgDeleteSubspaceResponse.decode(new _m0.Reader(data)),
    );
  }
  CreateSection(request: MsgCreateSection): Promise<MsgCreateSectionResponse> {
    const data = MsgCreateSection.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "CreateSection",
      data,
    );
    return promise.then((data) =>
      MsgCreateSectionResponse.decode(new _m0.Reader(data)),
    );
  }
  EditSection(request: MsgEditSection): Promise<MsgEditSectionResponse> {
    const data = MsgEditSection.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "EditSection",
      data,
    );
    return promise.then((data) =>
      MsgEditSectionResponse.decode(new _m0.Reader(data)),
    );
  }
  MoveSection(request: MsgMoveSection): Promise<MsgMoveSectionResponse> {
    const data = MsgMoveSection.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "MoveSection",
      data,
    );
    return promise.then((data) =>
      MsgMoveSectionResponse.decode(new _m0.Reader(data)),
    );
  }
  DeleteSection(request: MsgDeleteSection): Promise<MsgDeleteSectionResponse> {
    const data = MsgDeleteSection.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "DeleteSection",
      data,
    );
    return promise.then((data) =>
      MsgDeleteSectionResponse.decode(new _m0.Reader(data)),
    );
  }
  CreateUserGroup(
    request: MsgCreateUserGroup,
  ): Promise<MsgCreateUserGroupResponse> {
    const data = MsgCreateUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "CreateUserGroup",
      data,
    );
    return promise.then((data) =>
      MsgCreateUserGroupResponse.decode(new _m0.Reader(data)),
    );
  }
  EditUserGroup(request: MsgEditUserGroup): Promise<MsgEditUserGroupResponse> {
    const data = MsgEditUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "EditUserGroup",
      data,
    );
    return promise.then((data) =>
      MsgEditUserGroupResponse.decode(new _m0.Reader(data)),
    );
  }
  MoveUserGroup(request: MsgMoveUserGroup): Promise<MsgMoveUserGroupResponse> {
    const data = MsgMoveUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "MoveUserGroup",
      data,
    );
    return promise.then((data) =>
      MsgMoveUserGroupResponse.decode(new _m0.Reader(data)),
    );
  }
  SetUserGroupPermissions(
    request: MsgSetUserGroupPermissions,
  ): Promise<MsgSetUserGroupPermissionsResponse> {
    const data = MsgSetUserGroupPermissions.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "SetUserGroupPermissions",
      data,
    );
    return promise.then((data) =>
      MsgSetUserGroupPermissionsResponse.decode(new _m0.Reader(data)),
    );
  }
  DeleteUserGroup(
    request: MsgDeleteUserGroup,
  ): Promise<MsgDeleteUserGroupResponse> {
    const data = MsgDeleteUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "DeleteUserGroup",
      data,
    );
    return promise.then((data) =>
      MsgDeleteUserGroupResponse.decode(new _m0.Reader(data)),
    );
  }
  AddUserToUserGroup(
    request: MsgAddUserToUserGroup,
  ): Promise<MsgAddUserToUserGroupResponse> {
    const data = MsgAddUserToUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "AddUserToUserGroup",
      data,
    );
    return promise.then((data) =>
      MsgAddUserToUserGroupResponse.decode(new _m0.Reader(data)),
    );
  }
  RemoveUserFromUserGroup(
    request: MsgRemoveUserFromUserGroup,
  ): Promise<MsgRemoveUserFromUserGroupResponse> {
    const data = MsgRemoveUserFromUserGroup.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "RemoveUserFromUserGroup",
      data,
    );
    return promise.then((data) =>
      MsgRemoveUserFromUserGroupResponse.decode(new _m0.Reader(data)),
    );
  }
  SetUserPermissions(
    request: MsgSetUserPermissions,
  ): Promise<MsgSetUserPermissionsResponse> {
    const data = MsgSetUserPermissions.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "SetUserPermissions",
      data,
    );
    return promise.then((data) =>
      MsgSetUserPermissionsResponse.decode(new _m0.Reader(data)),
    );
  }
  GrantTreasuryAuthorization(
    request: MsgGrantTreasuryAuthorization,
  ): Promise<MsgGrantTreasuryAuthorizationResponse> {
    const data = MsgGrantTreasuryAuthorization.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "GrantTreasuryAuthorization",
      data,
    );
    return promise.then((data) =>
      MsgGrantTreasuryAuthorizationResponse.decode(new _m0.Reader(data)),
    );
  }
  RevokeTreasuryAuthorization(
    request: MsgRevokeTreasuryAuthorization,
  ): Promise<MsgRevokeTreasuryAuthorizationResponse> {
    const data = MsgRevokeTreasuryAuthorization.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "RevokeTreasuryAuthorization",
      data,
    );
    return promise.then((data) =>
      MsgRevokeTreasuryAuthorizationResponse.decode(new _m0.Reader(data)),
    );
  }
  GrantAllowance(
    request: MsgGrantAllowance,
  ): Promise<MsgGrantAllowanceResponse> {
    const data = MsgGrantAllowance.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "GrantAllowance",
      data,
    );
    return promise.then((data) =>
      MsgGrantAllowanceResponse.decode(new _m0.Reader(data)),
    );
  }
  RevokeAllowance(
    request: MsgRevokeAllowance,
  ): Promise<MsgRevokeAllowanceResponse> {
    const data = MsgRevokeAllowance.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v3.Msg",
      "RevokeAllowance",
      data,
    );
    return promise.then((data) =>
      MsgRevokeAllowanceResponse.decode(new _m0.Reader(data)),
    );
  }
}
