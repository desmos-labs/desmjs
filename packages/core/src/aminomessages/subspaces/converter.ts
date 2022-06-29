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
} from "@desmoslabs/desmjs-types/desmos/subspaces/v2/msgs";
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
    "/desmos.subspaces.v2.MsgCreateRelationships": {
      aminoType: "desmos/MsgCreateRelationships",
      toAmino: (msg: MsgCreateSubspace): AminoMsgCreateSubspace["value"] => {
        return {
          name: msg.name,
          description: msg.description,
          treasury: msg.treasury,
          creator: msg.creator,
          owner: msg.owner,
        };
      },
      fromAmino: (msg: AminoMsgCreateSubspace["value"]): MsgCreateSubspace => {
        return {
          name: msg.name,
          description: msg.description,
          treasury: msg.treasury,
          creator: msg.creator,
          owner: msg.owner,
        };
      },
    },
    "/desmos.subspaces.v2.MsgEditSubspace": {
      aminoType: "desmos/MsgEditSubspace",
      toAmino: (msg: MsgEditSubspace): AminoMsgEditSubspace["value"] => {
        return {
          subspace_id: msg.subspaceId,
          name: msg.name,
          description: msg.description,
          treasury: msg.treasury,
          owner: msg.owner,
          signer: msg.signer,
        };
      },
      fromAmino: (msg: AminoMsgEditSubspace["value"]): MsgEditSubspace => {
        return {
          subspaceId: msg.subspace_id,
          name: msg.name,
          description: msg.description,
          treasury: msg.treasury,
          owner: msg.owner,
          signer: msg.signer,
        };
      },
    },
    "/desmos.subspaces.v2.MsgDeleteSubspace": {
      aminoType: "desmos/MsgDeleteSubspace",
      toAmino: (msg: MsgDeleteSubspace): AminoMsgDeleteSubspace["value"] => {
        return {
          subspace_id: msg.subspaceId,
          signer: msg.signer,
        };
      },
      fromAmino: (msg: AminoMsgDeleteSubspace["value"]): MsgDeleteSubspace => {
        return {
          subspaceId: msg.subspace_id,
          signer: msg.signer,
        };
      },
    },
    "/desmos.subspaces.v2.MsgCreateSection": {
      aminoType: "desmos/MsgCreateSection",
      toAmino: (msg: MsgCreateSection): AminoMsgCreateSection["value"] => {
        return {
          subspace_id: msg.subspaceId,
          name: msg.name,
          description: msg.description,
          parent_id: msg.parentId,
          creator: msg.creator,
        };
      },
      fromAmino: (msg: AminoMsgCreateSection["value"]): MsgCreateSection => {
        return {
          subspaceId: msg.subspace_id,
          name: msg.name,
          description: msg.description,
          parentId: msg.parent_id,
          creator: msg.creator,
        };
      },
    },
    "/desmos.subspaces.v2.MsgEditSection": {
      aminoType: "desmos/MsgEditSection",
      toAmino: (msg: MsgEditSection): AminoMsgEditSection["value"] => {
        return {
          subspace_id: msg.subspaceId,
          section_id: msg.sectionId,
          name: msg.name,
          description: msg.description,
          editor: msg.editor,
        };
      },
      fromAmino: (msg: AminoMsgEditSection["value"]): MsgEditSection => {
        return {
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          name: msg.name,
          description: msg.description,
          editor: msg.editor,
        };
      },
    },
    "/desmos.subspaces.v2.MsgMoveSection": {
      aminoType: "desmos/MsgMoveSection",
      toAmino: (msg: MsgMoveSection): AminoMsgMoveSection["value"] => {
        return {
          subspace_id: msg.subspaceId,
          section_id: msg.sectionId,
          new_parent_id: msg.newParentId,
          signer: msg.signer,
        };
      },
      fromAmino: (msg: AminoMsgMoveSection["value"]): MsgMoveSection => {
        return {
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          newParentId: msg.new_parent_id,
          signer: msg.signer,
        };
      },
    },
    "/desmos.subspaces.v2.MsgDeleteSection": {
      aminoType: "desmos/MsgDeleteSection",
      toAmino: (msg: MsgDeleteSection): AminoMsgDeleteSection["value"] => {
        return {
          subspace_id: msg.subspaceId,
          section_id: msg.sectionId,
          signer: msg.signer,
        };
      },
      fromAmino: (msg: AminoMsgDeleteSection["value"]): MsgDeleteSection => {
        return {
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          signer: msg.signer,
        };
      },
    },
    "/desmos.subspaces.v2.MsgCreateUserGroup": {
      aminoType: "desmos/MsgCreateUserGroup",
      toAmino: (msg: MsgCreateUserGroup): AminoMsgCreateUserGroup["value"] => {
        return {
          subspace_id: msg.subspaceId,
          section_id: msg.sectionId,
          name: msg.name,
          description: msg.description,
          default_permissions: msg.defaultPermissions,
          creator: msg.creator,
        };
      },
      fromAmino: (
        msg: AminoMsgCreateUserGroup["value"]
      ): MsgCreateUserGroup => {
        return {
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          name: msg.name,
          description: msg.description,
          defaultPermissions: msg.default_permissions,
          creator: msg.creator,
        };
      },
    },
    "/desmos.subspaces.v2.MsgEditUserGroup": {
      aminoType: "desmos/MsgEditUserGroup",
      toAmino: (msg: MsgEditUserGroup): AminoMsgEditUserGroup["value"] => {
        return {
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          name: msg.name,
          description: msg.description,
          signer: msg.signer,
        };
      },
      fromAmino: (msg: AminoMsgEditUserGroup["value"]): MsgEditUserGroup => {
        return {
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          name: msg.name,
          description: msg.description,
          signer: msg.signer,
        };
      },
    },
    "/desmos.subspaces.v2.MsgMoveUserGroup": {
      aminoType: "desmos/MsgMoveUserGroup",
      toAmino: (msg: MsgMoveUserGroup): AminoMsgMoveUserGroup["value"] => {
        return {
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          new_section_id: msg.newSectionId,
          signer: msg.signer,
        };
      },
      fromAmino: (msg: AminoMsgMoveUserGroup["value"]): MsgMoveUserGroup => {
        return {
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          newSectionId: msg.new_section_id,
          signer: msg.signer,
        };
      },
    },
    "/desmos.subspaces.v2.MsgSetUserGroupPermissions": {
      aminoType: "desmos/MsgSetUserGroupPermissions",
      toAmino: (
        msg: MsgSetUserGroupPermissions
      ): AminoMsgSetUserGroupPermissions["value"] => {
        return {
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          permissions: msg.permissions,
          signer: msg.signer,
        };
      },
      fromAmino: (
        msg: AminoMsgSetUserGroupPermissions["value"]
      ): MsgSetUserGroupPermissions => {
        return {
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          permissions: msg.permissions,
          signer: msg.signer,
        };
      },
    },
    "/desmos.subspaces.v2.MsgDeleteUserGroup": {
      aminoType: "desmos/MsgDeleteUserGroup",
      toAmino: (msg: MsgDeleteUserGroup): AminoMsgDeleteUserGroup["value"] => {
        return {
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          signer: msg.signer,
        };
      },
      fromAmino: (
        msg: AminoMsgDeleteUserGroup["value"]
      ): MsgDeleteUserGroup => {
        return {
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          signer: msg.signer,
        };
      },
    },
    "/desmos.subspaces.v2.MsgAddUserToUserGroup": {
      aminoType: "desmos/MsgAddUserToUserGroup",
      toAmino: (
        msg: MsgAddUserToUserGroup
      ): AminoMsgAddUserToUserGroup["value"] => {
        return {
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          user: msg.user,
          signer: msg.signer,
        };
      },
      fromAmino: (
        msg: AminoMsgAddUserToUserGroup["value"]
      ): MsgAddUserToUserGroup => {
        return {
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          user: msg.user,
          signer: msg.signer,
        };
      },
    },
    "/desmos.subspaces.v2.MsgRemoveUserFromUserGroup": {
      aminoType: "desmos/MsgRemoveUserFromUserGroup",
      toAmino: (
        msg: MsgRemoveUserFromUserGroup
      ): AminoMsgRemoveUserFromUserGroup["value"] => {
        return {
          subspace_id: msg.subspaceId,
          group_id: msg.groupId,
          user: msg.user,
          signer: msg.signer,
        };
      },
      fromAmino: (
        msg: AminoMsgRemoveUserFromUserGroup["value"]
      ): MsgRemoveUserFromUserGroup => {
        return {
          subspaceId: msg.subspace_id,
          groupId: msg.group_id,
          user: msg.user,
          signer: msg.signer,
        };
      },
    },
    "/desmos.subspaces.v2.MsgSetUserPermissions": {
      aminoType: "desmos/MsgSetUserPermissions",
      toAmino: (
        msg: MsgSetUserPermissions
      ): AminoMsgSetUserPermissions["value"] => {
        return {
          subspace_id: msg.subspaceId,
          section_id: msg.sectionId,
          user: msg.user,
          permissions: msg.permissions,
          signer: msg.signer,
        };
      },
      fromAmino: (
        msg: AminoMsgSetUserPermissions["value"]
      ): MsgSetUserPermissions => {
        return {
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          user: msg.user,
          permissions: msg.permissions,
          signer: msg.signer,
        };
      },
    },
  };
}

export default createSubspacesConverters;
