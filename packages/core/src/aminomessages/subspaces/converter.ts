import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgAddUserToUserGroup,
  MsgCreateSubspace,
  MsgCreateUserGroup,
  MsgDeleteSubspace,
  MsgDeleteUserGroup,
  MsgEditSubspace,
  MsgEditUserGroup,
  MsgRemoveUserFromUserGroup,
  MsgSetUserGroupPermissions,
  MsgSetUserPermissions,
  MsgCreateSection,
  MsgEditSection,
  MsgMoveSection,
  MsgDeleteSection,
  MsgMoveUserGroup,
} from "@desmoslabs/desmjs-types/desmos/subspaces/v3/msgs";
import {
  AminoMsgAddUserToUserGroup,
  AminoMsgCreateSubspace,
  AminoMsgCreateUserGroup,
  AminoMsgDeleteSubspace,
  AminoMsgDeleteUserGroup,
  AminoMsgEditSubspace,
  AminoMsgEditUserGroup,
  AminoMsgRemoveUserFromUserGroup,
  AminoMsgSetUserGroupPermissions,
  AminoMsgSetUserPermissions,
  AminoMsgCreateSection,
  AminoMsgEditSection,
  AminoMsgMoveSection,
  AminoMsgDeleteSection,
  AminoMsgMoveUserGroup,
} from "./messages";

/**
 * Creates all the Amino converters for the subspaces messages.
 */
export function createSubspacesConverters(): AminoConverters {
  return {
    "/desmos.subspaces.v3.MsgCreateRelationships": {
      aminoType: "desmos/MsgCreateRelationships",
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
    "/desmos.subspaces.v3.MsgEditSubspace": {
      aminoType: "desmos/MsgEditSubspace",
      toAmino: (msg: MsgEditSubspace): AminoMsgEditSubspace["value"] => ({
          subspace_id: msg.subspaceId,
          name: msg.name,
          description: msg.description,
          treasury: msg.treasury,
          owner: msg.owner,
          signer: msg.signer,
        }),
      fromAmino: (msg: AminoMsgEditSubspace["value"]): MsgEditSubspace => ({
          subspaceId: msg.subspace_id,
          name: msg.name,
          description: msg.description,
          treasury: msg.treasury,
          owner: msg.owner,
          signer: msg.signer,
        }),
    },
    "/desmos.subspaces.v3.MsgDeleteSubspace": {
      aminoType: "desmos/MsgDeleteSubspace",
      toAmino: (msg: MsgDeleteSubspace): AminoMsgDeleteSubspace["value"] => ({
          subspace_id: msg.subspaceId,
          signer: msg.signer,
        }),
      fromAmino: (msg: AminoMsgDeleteSubspace["value"]): MsgDeleteSubspace => ({
          subspaceId: msg.subspace_id,
          signer: msg.signer,
        }),
    },
    "/desmos.subspaces.v3.MsgCreateSection": {
      aminoType: "desmos/MsgCreateSection",
      toAmino: (msg: MsgCreateSection): AminoMsgCreateSection["value"] => ({
          subspace_id: msg.subspaceId,
          name: msg.name,
          description: msg.description,
          parent_id: msg.parentId,
          creator: msg.creator,
        }),
      fromAmino: (msg: AminoMsgCreateSection["value"]): MsgCreateSection => ({
          subspaceId: msg.subspace_id,
          name: msg.name,
          description: msg.description,
          parentId: msg.parent_id,
          creator: msg.creator,
        }),
    },
    "/desmos.subspaces.v3.MsgEditSection": {
      aminoType: "desmos/MsgEditSection",
      toAmino: (msg: MsgEditSection): AminoMsgEditSection["value"] => ({
          subspace_id: msg.subspaceId,
          section_id: msg.sectionId,
          name: msg.name,
          description: msg.description,
          editor: msg.editor,
        }),
      fromAmino: (msg: AminoMsgEditSection["value"]): MsgEditSection => ({
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          name: msg.name,
          description: msg.description,
          editor: msg.editor,
        }),
    },
    "/desmos.subspaces.v3.MsgMoveSection": {
      aminoType: "desmos/MsgMoveSection",
      toAmino: (msg: MsgMoveSection): AminoMsgMoveSection["value"] => ({
          subspace_id: msg.subspaceId,
          section_id: msg.sectionId,
          new_parent_id: msg.newParentId,
          signer: msg.signer,
        }),
      fromAmino: (msg: AminoMsgMoveSection["value"]): MsgMoveSection => ({
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          newParentId: msg.new_parent_id,
          signer: msg.signer,
        }),
    },
    "/desmos.subspaces.v3.MsgDeleteSection": {
      aminoType: "desmos/MsgDeleteSection",
      toAmino: (msg: MsgDeleteSection): AminoMsgDeleteSection["value"] => ({
          subspace_id: msg.subspaceId,
          section_id: msg.sectionId,
          signer: msg.signer,
        }),
      fromAmino: (msg: AminoMsgDeleteSection["value"]): MsgDeleteSection => ({
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          signer: msg.signer,
        }),
    },
    "/desmos.subspaces.v3.MsgCreateUserGroup": {
      aminoType: "desmos/MsgCreateUserGroup",
      toAmino: (msg: MsgCreateUserGroup): AminoMsgCreateUserGroup["value"] => ({
          subspace_id: msg.subspaceId,
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
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          name: msg.name,
          description: msg.description,
          defaultPermissions: msg.default_permissions,
          initialMembers: msg.initial_members,
          creator: msg.creator,
        }),
    },
    "/desmos.subspaces.v3.MsgEditUserGroup": {
      aminoType: "desmos/MsgEditUserGroup",
      toAmino: (msg: MsgEditUserGroup): AminoMsgEditUserGroup["value"] => ({
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          name: msg.name,
          description: msg.description,
          signer: msg.signer,
        }),
      fromAmino: (msg: AminoMsgEditUserGroup["value"]): MsgEditUserGroup => ({
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          name: msg.name,
          description: msg.description,
          signer: msg.signer,
        }),
    },
    "/desmos.subspaces.v3.MsgMoveUserGroup": {
      aminoType: "desmos/MsgMoveUserGroup",
      toAmino: (msg: MsgMoveUserGroup): AminoMsgMoveUserGroup["value"] => ({
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          new_section_id: msg.newSectionId,
          signer: msg.signer,
        }),
      fromAmino: (msg: AminoMsgMoveUserGroup["value"]): MsgMoveUserGroup => ({
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          newSectionId: msg.new_section_id,
          signer: msg.signer,
        }),
    },
    "/desmos.subspaces.v3.MsgSetUserGroupPermissions": {
      aminoType: "desmos/MsgSetUserGroupPermissions",
      toAmino: (
        msg: MsgSetUserGroupPermissions
      ): AminoMsgSetUserGroupPermissions["value"] => ({
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          permissions: msg.permissions,
          signer: msg.signer,
        }),
      fromAmino: (
        msg: AminoMsgSetUserGroupPermissions["value"]
      ): MsgSetUserGroupPermissions => ({
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          permissions: msg.permissions,
          signer: msg.signer,
        }),
    },
    "/desmos.subspaces.v3.MsgDeleteUserGroup": {
      aminoType: "desmos/MsgDeleteUserGroup",
      toAmino: (msg: MsgDeleteUserGroup): AminoMsgDeleteUserGroup["value"] => ({
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          signer: msg.signer,
        }),
      fromAmino: (
        msg: AminoMsgDeleteUserGroup["value"]
      ): MsgDeleteUserGroup => ({
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          signer: msg.signer,
        }),
    },
    "/desmos.subspaces.v3.MsgAddUserToUserGroup": {
      aminoType: "desmos/MsgAddUserToUserGroup",
      toAmino: (
        msg: MsgAddUserToUserGroup
      ): AminoMsgAddUserToUserGroup["value"] => ({
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          user: msg.user,
          signer: msg.signer,
        }),
      fromAmino: (
        msg: AminoMsgAddUserToUserGroup["value"]
      ): MsgAddUserToUserGroup => ({
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          user: msg.user,
          signer: msg.signer,
        }),
    },
    "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup": {
      aminoType: "desmos/MsgRemoveUserFromUserGroup",
      toAmino: (
        msg: MsgRemoveUserFromUserGroup
      ): AminoMsgRemoveUserFromUserGroup["value"] => ({
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          user: msg.user,
          signer: msg.signer,
        }),
      fromAmino: (
        msg: AminoMsgRemoveUserFromUserGroup["value"]
      ): MsgRemoveUserFromUserGroup => ({
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          user: msg.user,
          signer: msg.signer,
        }),
    },
    "/desmos.subspaces.v3.MsgSetUserPermissions": {
      aminoType: "desmos/MsgSetUserPermissions",
      toAmino: (
        msg: MsgSetUserPermissions
      ): AminoMsgSetUserPermissions["value"] => ({
          subspace_id: msg.subspaceId,
          section_id: msg.sectionId,
          user: msg.user,
          permissions: msg.permissions,
          signer: msg.signer,
        }),
      fromAmino: (
        msg: AminoMsgSetUserPermissions["value"]
      ): MsgSetUserPermissions => ({
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          user: msg.user,
          permissions: msg.permissions,
          signer: msg.signer,
        }),
    },
  };
}

export default createSubspacesConverters;
