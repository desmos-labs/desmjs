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
import Long, { fromString } from "long";
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
import {
  fromOmitEmptyArray,
  fromOmitEmptyNumber,
  fromOmitEmptyString,
  fromOmitZeroLong,
  omitEmptyArray,
  omitEmptyNumber,
  omitEmptyString,
  omitZeroLong,
} from "../utils";

/**
 * Creates all the Amino converters for the subspaces messages.
 */
export function createSubspacesConverters(): AminoConverters {
  return {
    [MsgCreateSubspaceTypeUrl]: {
      aminoType: MsgCreateSubspaceAminoType,
      toAmino: (msg: MsgCreateSubspace): AminoMsgCreateSubspace["value"] => ({
        name: omitEmptyString(msg.name),
        description: omitEmptyString(msg.description),
        treasury: omitEmptyString(msg.treasury),
        owner: omitEmptyString(msg.owner),
        creator: omitEmptyString(msg.creator),
      }),
      fromAmino: (msg: AminoMsgCreateSubspace["value"]): MsgCreateSubspace => ({
        name: fromOmitEmptyString(msg.name),
        description: fromOmitEmptyString(msg.description),
        treasury: fromOmitEmptyString(msg.treasury),
        owner: fromOmitEmptyString(msg.owner),
        creator: fromOmitEmptyString(msg.creator),
      }),
    },
    [MsgEditSubspaceTypeUrl]: {
      aminoType: MsgEditSubspaceAminoType,
      toAmino: (msg: MsgEditSubspace): AminoMsgEditSubspace["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        name: omitEmptyString(msg.name),
        description: omitEmptyString(msg.description),
        treasury: omitEmptyString(msg.treasury),
        owner: omitEmptyString(msg.owner),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (msg: AminoMsgEditSubspace["value"]): MsgEditSubspace => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        name: fromOmitEmptyString(msg.name),
        description: fromOmitEmptyString(msg.description),
        treasury: fromOmitEmptyString(msg.treasury),
        owner: fromOmitEmptyString(msg.owner),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgDeleteSubspaceTypeUrl]: {
      aminoType: MsgDeleteSubspaceAminoType,
      toAmino: (msg: MsgDeleteSubspace): AminoMsgDeleteSubspace["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (msg: AminoMsgDeleteSubspace["value"]): MsgDeleteSubspace => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgCreateSectionTypeUrl]: {
      aminoType: MsgCreateSectionAminoType,
      toAmino: (msg: MsgCreateSection): AminoMsgCreateSection["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        name: omitEmptyString(msg.name),
        description: omitEmptyString(msg.description),
        parent_id: omitEmptyNumber(msg.parentId),
        creator: omitEmptyString(msg.creator),
      }),
      fromAmino: (msg: AminoMsgCreateSection["value"]): MsgCreateSection => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        name: fromOmitEmptyString(msg.name),
        description: fromOmitEmptyString(msg.description),
        parentId: fromOmitEmptyNumber(msg.parent_id),
        creator: fromOmitEmptyString(msg.creator),
      }),
    },
    [MsgEditSectionTypeUrl]: {
      aminoType: MsgEditSectionAminoType,
      toAmino: (msg: MsgEditSection): AminoMsgEditSection["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        section_id: omitEmptyNumber(msg.sectionId),
        name: omitEmptyString(msg.name),
        description: omitEmptyString(msg.description),
        editor: omitEmptyString(msg.editor),
      }),
      fromAmino: (msg: AminoMsgEditSection["value"]): MsgEditSection => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        sectionId: fromOmitEmptyNumber(msg.section_id),
        name: fromOmitEmptyString(msg.name),
        description: fromOmitEmptyString(msg.description),
        editor: fromOmitEmptyString(msg.editor),
      }),
    },
    [MsgMoveSectionTypeUrl]: {
      aminoType: MsgMoveSectionAminoType,
      toAmino: (msg: MsgMoveSection): AminoMsgMoveSection["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        section_id: omitEmptyNumber(msg.sectionId),
        new_parent_id: omitEmptyNumber(msg.newParentId),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (msg: AminoMsgMoveSection["value"]): MsgMoveSection => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        sectionId: fromOmitEmptyNumber(msg.section_id),
        newParentId: fromOmitEmptyNumber(msg.new_parent_id),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgDeleteSectionTypeUrl]: {
      aminoType: MsgDeleteSectionAminoType,
      toAmino: (msg: MsgDeleteSection): AminoMsgDeleteSection["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        section_id: omitEmptyNumber(msg.sectionId),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (msg: AminoMsgDeleteSection["value"]): MsgDeleteSection => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        sectionId: fromOmitEmptyNumber(msg.section_id),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgCreateUserGroupTypeUrl]: {
      aminoType: MsgCreateUserGroupAminoType,
      toAmino: (msg: MsgCreateUserGroup): AminoMsgCreateUserGroup["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        section_id: omitEmptyNumber(msg.sectionId),
        name: omitEmptyString(msg.name),
        description: omitEmptyString(msg.description),
        default_permissions: omitEmptyArray(msg.defaultPermissions),
        initial_members: omitEmptyArray(msg.initialMembers),
        creator: omitEmptyString(msg.creator),
      }),
      fromAmino: (
        msg: AminoMsgCreateUserGroup["value"]
      ): MsgCreateUserGroup => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        sectionId: fromOmitEmptyNumber(msg.section_id),
        name: fromOmitEmptyString(msg.name),
        description: fromOmitEmptyString(msg.description),
        defaultPermissions: fromOmitEmptyArray(msg.default_permissions),
        initialMembers: fromOmitEmptyArray(msg.initial_members),
        creator: fromOmitEmptyString(msg.creator),
      }),
    },
    [MsgEditUserGroupTypeUrl]: {
      aminoType: MsgEditUserGroupAminoType,
      toAmino: (msg: MsgEditUserGroup): AminoMsgEditUserGroup["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        group_id: omitEmptyNumber(msg.groupId),
        name: omitEmptyString(msg.name),
        description: omitEmptyString(msg.description),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (msg: AminoMsgEditUserGroup["value"]): MsgEditUserGroup => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        groupId: fromOmitEmptyNumber(msg.group_id),
        name: fromOmitEmptyString(msg.name),
        description: fromOmitEmptyString(msg.description),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgMoveUserGroupTypeUrl]: {
      aminoType: MsgMoveUserGroupAminoType,
      toAmino: (msg: MsgMoveUserGroup): AminoMsgMoveUserGroup["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        group_id: omitEmptyNumber(msg.groupId),
        new_section_id: omitEmptyNumber(msg.newSectionId),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (msg: AminoMsgMoveUserGroup["value"]): MsgMoveUserGroup => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        groupId: fromOmitEmptyNumber(msg.group_id),
        newSectionId: fromOmitEmptyNumber(msg.new_section_id),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgSetUserGroupPermissionsTypeUrl]: {
      aminoType: MsgSetUserGroupPermissionsAminoType,
      toAmino: (
        msg: MsgSetUserGroupPermissions
      ): AminoMsgSetUserGroupPermissions["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        group_id: omitEmptyNumber(msg.groupId),
        permissions: omitEmptyArray(msg.permissions),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (
        msg: AminoMsgSetUserGroupPermissions["value"]
      ): MsgSetUserGroupPermissions => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        groupId: fromOmitEmptyNumber(msg.group_id),
        permissions: fromOmitEmptyArray(msg.permissions),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgDeleteUserGroupTypeUrl]: {
      aminoType: MsgDeleteUserGroupAminoType,
      toAmino: (msg: MsgDeleteUserGroup): AminoMsgDeleteUserGroup["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        group_id: omitEmptyNumber(msg.groupId),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (
        msg: AminoMsgDeleteUserGroup["value"]
      ): MsgDeleteUserGroup => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        groupId: fromOmitEmptyNumber(msg.group_id),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgAddUserToUserGroupTypeUrl]: {
      aminoType: MsgAddUserToUserGroupAminoType,
      toAmino: (
        msg: MsgAddUserToUserGroup
      ): AminoMsgAddUserToUserGroup["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        group_id: omitEmptyNumber(msg.groupId),
        user: omitEmptyString(msg.user),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (
        msg: AminoMsgAddUserToUserGroup["value"]
      ): MsgAddUserToUserGroup => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        groupId: fromOmitEmptyNumber(msg.group_id),
        user: fromOmitEmptyString(msg.user),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgRemoveUserFromUserGroupTypeUrl]: {
      aminoType: MsgRemoveUserFromUserGroupAminoType,
      toAmino: (
        msg: MsgRemoveUserFromUserGroup
      ): AminoMsgRemoveUserFromUserGroup["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        group_id: omitEmptyNumber(msg.groupId),
        user: omitEmptyString(msg.user),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (
        msg: AminoMsgRemoveUserFromUserGroup["value"]
      ): MsgRemoveUserFromUserGroup => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        groupId: fromOmitEmptyNumber(msg.group_id),
        user: fromOmitEmptyString(msg.user),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgSetUserPermissionsTypeUrl]: {
      aminoType: MsgSetUserPermissionsAminoType,
      toAmino: (
        msg: MsgSetUserPermissions
      ): AminoMsgSetUserPermissions["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        section_id: omitEmptyNumber(msg.sectionId),
        user: msg.user,
        permissions: omitEmptyArray(msg.permissions),
        signer: msg.signer,
      }),
      fromAmino: (
        msg: AminoMsgSetUserPermissions["value"]
      ): MsgSetUserPermissions => ({
        subspaceId: Long.fromString(msg.subspace_id),
        sectionId: fromOmitEmptyNumber(msg.section_id),
        user: msg.user,
        permissions: fromOmitEmptyArray(msg.permissions),
        signer: msg.signer,
      }),
    },
  };
}

export default createSubspacesConverters;
