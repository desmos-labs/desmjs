import { AminoConverter } from "@cosmjs/stargate";
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
} from "@desmoslabs/desmjs-types/desmos/subspaces/v1/msgs";
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
} from "./messages";

const subspacesTypes: Record<string, AminoConverter> = {
  "/desmos.subspaces.v1.MsgCreateRelationships": {
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
  "/desmos.subspaces.v1.MsgEditSubspace": {
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
  "/desmos.subspaces.v1.MsgDeleteSubspace": {
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
  "/desmos.subspaces.v1.MsgCreateUserGroup": {
    aminoType: "desmos/MsgCreateUserGroup",
    toAmino: (msg: MsgCreateUserGroup): AminoMsgCreateUserGroup["value"] => {
      return {
        subspace_id: msg.subspaceId,
        name: msg.name,
        description: msg.description,
        default_permissions: msg.defaultPermissions,
        creator: msg.creator,
      };
    },
    fromAmino: (msg: AminoMsgCreateUserGroup["value"]): MsgCreateUserGroup => {
      return {
        subspaceId: msg.subspace_id,
        name: msg.name,
        description: msg.description,
        defaultPermissions: msg.default_permissions,
        creator: msg.creator,
      };
    },
  },
  "/desmos.subspaces.v1.MsgEditUserGroup": {
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
  "/desmos.subspaces.v1.MsgSetUserGroupPermissions": {
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
  "/desmos.subspaces.v1.MsgDeleteUserGroup": {
    aminoType: "desmos/MsgDeleteUserGroup",
    toAmino: (msg: MsgDeleteUserGroup): AminoMsgDeleteUserGroup["value"] => {
      return {
        subspace_id: msg.subspaceId,
        group_id: msg.groupId,
        signer: msg.signer,
      };
    },
    fromAmino: (msg: AminoMsgDeleteUserGroup["value"]): MsgDeleteUserGroup => {
      return {
        subspaceId: msg.subspace_id,
        groupId: msg.group_id,
        signer: msg.signer,
      };
    },
  },
  "/desmos.subspaces.v1.MsgAddUserToUserGroup": {
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
  "/desmos.subspaces.v1.MsgRemoveUserFromUserGroup": {
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
  "/desmos.subspaces.v1.MsgSetUserPermissions": {
    aminoType: "desmos/MsgSetUserPermissions",
    toAmino: (
      msg: MsgSetUserPermissions
    ): AminoMsgSetUserPermissions["value"] => {
      return {
        subspace_id: msg.subspaceId,
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
        user: msg.user,
        permissions: msg.permissions,
        signer: msg.signer,
      };
    },
  },
};

export default subspacesTypes;
