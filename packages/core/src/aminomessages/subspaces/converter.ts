import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgAddUserToUserGroup,
  MsgCreateSection,
  MsgCreateSubspace,
  MsgCreateUserGroup,
  MsgDeleteSection,
  MsgDeleteSubspace,
  MsgDeleteUserGroup,
  MsgEditSection,
  MsgEditSubspace,
  MsgEditUserGroup,
  MsgMoveSection,
  MsgMoveUserGroup,
  MsgRemoveUserFromUserGroup,
  MsgSetUserGroupPermissions,
  MsgSetUserPermissions,
} from "@desmoslabs/desmjs-types/desmos/subspaces/v3/msgs";
import Long from "long";
import {
  AminoMsgAddUserToUserGroup,
  AminoMsgCreateSection,
  AminoMsgCreateSubspace,
  AminoMsgCreateUserGroup,
  AminoMsgDeleteSection,
  AminoMsgDeleteSubspace,
  AminoMsgDeleteUserGroup,
  AminoMsgEditSection,
  AminoMsgEditSubspace,
  AminoMsgEditUserGroup,
  AminoMsgMoveSection,
  AminoMsgMoveUserGroup,
  AminoMsgRemoveUserFromUserGroup,
  AminoMsgSetUserGroupPermissions,
  AminoMsgSetUserPermissions,
} from "./messages";
import {
  MsgAddUserToUserGroupAminoType,
  MsgAddUserToUserGroupTypeUrl,
  MsgCreateSectionAminoType,
  MsgCreateSectionTypeUrl,
  MsgCreateSubspaceAminoType,
  MsgCreateSubspaceTypeUrl,
  MsgCreateUserGroupAminoType,
  MsgCreateUserGroupTypeUrl,
  MsgDeleteSectionAminoType,
  MsgDeleteSectionTypeUrl,
  MsgDeleteSubspaceAminoType,
  MsgDeleteSubspaceTypeUrl,
  MsgDeleteUserGroupAminoType,
  MsgDeleteUserGroupTypeUrl,
  MsgEditSectionAminoType,
  MsgEditSectionTypeUrl,
  MsgEditSubspaceAminoType,
  MsgEditSubspaceTypeUrl,
  MsgEditUserGroupAminoType,
  MsgEditUserGroupTypeUrl,
  MsgMoveSectionAminoType,
  MsgMoveSectionTypeUrl,
  MsgMoveUserGroupAminoType,
  MsgMoveUserGroupTypeUrl,
  MsgRemoveUserFromUserGroupAminoType,
  MsgRemoveUserFromUserGroupTypeUrl,
  MsgSetUserGroupPermissionsAminoType,
  MsgSetUserGroupPermissionsTypeUrl,
  MsgSetUserPermissionsAminoType,
  MsgSetUserPermissionsTypeUrl,
} from "../../const";

/**
 * Creates all the Amino converters for the subspaces messages.
 */
export function createSubspacesConverters(): AminoConverters {
  return {
    [MsgCreateSubspaceTypeUrl]: {
      aminoType: MsgCreateSubspaceAminoType,
      toAmino: (msg: MsgCreateSubspace): AminoMsgCreateSubspace["value"] => ({
        name: msg.name,
        description: msg.description,
        treasury: msg.treasury,
        creator: msg.creator,
        owner: msg.owner,
      }),
      fromAmino: (msg: AminoMsgCreateSubspace["value"]): MsgCreateSubspace => ({
        name: msg.name,
        description: msg.description,
        treasury: msg.treasury,
        creator: msg.creator,
        owner: msg.owner,
      }),
    },
    [MsgEditSubspaceTypeUrl]: {
      aminoType: MsgEditSubspaceAminoType,
      toAmino: (msg: MsgEditSubspace): AminoMsgEditSubspace["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        name: msg.name,
        description: msg.description,
        treasury: msg.treasury,
        owner: msg.owner,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgEditSubspace["value"]): MsgEditSubspace => ({
        subspaceId: Long.fromString(msg.subspace_id),
        name: msg.name,
        description: msg.description,
        treasury: msg.treasury,
        owner: msg.owner,
        signer: msg.signer,
      }),
    },
    [MsgDeleteSubspaceTypeUrl]: {
      aminoType: MsgDeleteSubspaceAminoType,
      toAmino: (msg: MsgDeleteSubspace): AminoMsgDeleteSubspace["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgDeleteSubspace["value"]): MsgDeleteSubspace => ({
        subspaceId: Long.fromString(msg.subspace_id),
        signer: msg.signer,
      }),
    },
    [MsgCreateSectionTypeUrl]: {
      aminoType: MsgCreateSectionAminoType,
      toAmino: (msg: MsgCreateSection): AminoMsgCreateSection["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        name: msg.name,
        description: msg.description,
        parent_id: msg.parentId,
        creator: msg.creator,
      }),
      fromAmino: (msg: AminoMsgCreateSection["value"]): MsgCreateSection => ({
        subspaceId: Long.fromString(msg.subspace_id),
        name: msg.name,
        description: msg.description,
        parentId: msg.parent_id,
        creator: msg.creator,
      }),
    },
    [MsgEditSectionTypeUrl]: {
      aminoType: MsgEditSectionAminoType,
      toAmino: (msg: MsgEditSection): AminoMsgEditSection["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        section_id: msg.sectionId,
        name: msg.name,
        description: msg.description,
        editor: msg.editor,
      }),
      fromAmino: (msg: AminoMsgEditSection["value"]): MsgEditSection => ({
        subspaceId: Long.fromString(msg.subspace_id),
        sectionId: msg.section_id,
        name: msg.name,
        description: msg.description,
        editor: msg.editor,
      }),
    },
    [MsgMoveSectionTypeUrl]: {
      aminoType: MsgMoveSectionAminoType,
      toAmino: (msg: MsgMoveSection): AminoMsgMoveSection["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        section_id: msg.sectionId,
        new_parent_id: msg.newParentId,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgMoveSection["value"]): MsgMoveSection => ({
        subspaceId: Long.fromString(msg.subspace_id),
        sectionId: msg.section_id,
        newParentId: msg.new_parent_id,
        signer: msg.signer,
      }),
    },
    [MsgDeleteSectionTypeUrl]: {
      aminoType: MsgDeleteSectionAminoType,
      toAmino: (msg: MsgDeleteSection): AminoMsgDeleteSection["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        section_id: msg.sectionId,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgDeleteSection["value"]): MsgDeleteSection => ({
        subspaceId: Long.fromString(msg.subspace_id),
        sectionId: msg.section_id,
        signer: msg.signer,
      }),
    },
    [MsgCreateUserGroupTypeUrl]: {
      aminoType: MsgCreateUserGroupAminoType,
      toAmino: (msg: MsgCreateUserGroup): AminoMsgCreateUserGroup["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        section_id: msg.sectionId,
        name: msg.name,
        description: msg.description,
        default_permissions: msg.defaultPermissions,
        initial_members: msg.initialMembers,
        creator: msg.creator,
      }),
      fromAmino: (
        msg: AminoMsgCreateUserGroup["value"]
      ): MsgCreateUserGroup => ({
        subspaceId: Long.fromString(msg.subspace_id),
        sectionId: msg.section_id,
        name: msg.name,
        description: msg.description,
        defaultPermissions: msg.default_permissions,
        initialMembers: msg.initial_members,
        creator: msg.creator,
      }),
    },
    [MsgEditUserGroupTypeUrl]: {
      aminoType: MsgEditUserGroupAminoType,
      toAmino: (msg: MsgEditUserGroup): AminoMsgEditUserGroup["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        group_id: msg.groupId,
        name: msg.name,
        description: msg.description,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgEditUserGroup["value"]): MsgEditUserGroup => ({
        subspaceId: Long.fromString(msg.subspace_id),
        groupId: msg.group_id,
        name: msg.name,
        description: msg.description,
        signer: msg.signer,
      }),
    },
    [MsgMoveUserGroupTypeUrl]: {
      aminoType: MsgMoveUserGroupAminoType,
      toAmino: (msg: MsgMoveUserGroup): AminoMsgMoveUserGroup["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        group_id: msg.groupId,
        new_section_id: msg.newSectionId,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgMoveUserGroup["value"]): MsgMoveUserGroup => ({
        subspaceId: Long.fromString(msg.subspace_id),
        groupId: msg.group_id,
        newSectionId: msg.new_section_id,
        signer: msg.signer,
      }),
    },
    [MsgSetUserGroupPermissionsTypeUrl]: {
      aminoType: MsgSetUserGroupPermissionsAminoType,
      toAmino: (
        msg: MsgSetUserGroupPermissions
      ): AminoMsgSetUserGroupPermissions["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        group_id: msg.groupId,
        permissions: msg.permissions,
        signer: msg.signer,
      }),
      fromAmino: (
        msg: AminoMsgSetUserGroupPermissions["value"]
      ): MsgSetUserGroupPermissions => ({
        subspaceId: Long.fromString(msg.subspace_id),
        groupId: msg.group_id,
        permissions: msg.permissions,
        signer: msg.signer,
      }),
    },
    [MsgDeleteUserGroupTypeUrl]: {
      aminoType: MsgDeleteUserGroupAminoType,
      toAmino: (msg: MsgDeleteUserGroup): AminoMsgDeleteUserGroup["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        group_id: msg.groupId,
        signer: msg.signer,
      }),
      fromAmino: (
        msg: AminoMsgDeleteUserGroup["value"]
      ): MsgDeleteUserGroup => ({
        subspaceId: Long.fromString(msg.subspace_id),
        groupId: msg.group_id,
        signer: msg.signer,
      }),
    },
    [MsgAddUserToUserGroupTypeUrl]: {
      aminoType: MsgAddUserToUserGroupAminoType,
      toAmino: (
        msg: MsgAddUserToUserGroup
      ): AminoMsgAddUserToUserGroup["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        group_id: msg.groupId,
        user: msg.user,
        signer: msg.signer,
      }),
      fromAmino: (
        msg: AminoMsgAddUserToUserGroup["value"]
      ): MsgAddUserToUserGroup => ({
        subspaceId: Long.fromString(msg.subspace_id),
        groupId: msg.group_id,
        user: msg.user,
        signer: msg.signer,
      }),
    },
    [MsgRemoveUserFromUserGroupTypeUrl]: {
      aminoType: MsgRemoveUserFromUserGroupAminoType,
      toAmino: (
        msg: MsgRemoveUserFromUserGroup
      ): AminoMsgRemoveUserFromUserGroup["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        group_id: msg.groupId,
        user: msg.user,
        signer: msg.signer,
      }),
      fromAmino: (
        msg: AminoMsgRemoveUserFromUserGroup["value"]
      ): MsgRemoveUserFromUserGroup => ({
        subspaceId: Long.fromString(msg.subspace_id),
        groupId: msg.group_id,
        user: msg.user,
        signer: msg.signer,
      }),
    },
    [MsgSetUserPermissionsTypeUrl]: {
      aminoType: MsgSetUserPermissionsAminoType,
      toAmino: (
        msg: MsgSetUserPermissions
      ): AminoMsgSetUserPermissions["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        section_id: msg.sectionId,
        user: msg.user,
        permissions: msg.permissions,
        signer: msg.signer,
      }),
      fromAmino: (
        msg: AminoMsgSetUserPermissions["value"]
      ): MsgSetUserPermissions => ({
        subspaceId: Long.fromString(msg.subspace_id),
        sectionId: msg.section_id,
        user: msg.user,
        permissions: msg.permissions,
        signer: msg.signer,
      }),
    },
  };
}

export default createSubspacesConverters;
