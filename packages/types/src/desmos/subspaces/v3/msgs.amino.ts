/* eslint-disable */
import {
  MsgCreateSubspace,
  MsgEditSubspace,
  MsgDeleteSubspace,
  MsgCreateSection,
  MsgEditSection,
  MsgMoveSection,
  MsgDeleteSection,
  MsgCreateUserGroup,
  MsgEditUserGroup,
  MsgMoveUserGroup,
  MsgSetUserGroupPermissions,
  MsgDeleteUserGroup,
  MsgAddUserToUserGroup,
  MsgRemoveUserFromUserGroup,
  MsgSetUserPermissions,
  MsgGrantTreasuryAuthorization,
  MsgRevokeTreasuryAuthorization,
  MsgGrantAllowance,
  MsgRevokeAllowance,
  MsgUpdateSubspaceFeeTokens,
} from "./msgs";
export const AminoConverter = {
  "/desmos.subspaces.v3.MsgCreateSubspace": {
    aminoType: "desmos/MsgCreateSubspace",
    toAmino: MsgCreateSubspace.toAmino,
    fromAmino: MsgCreateSubspace.fromAmino,
  },
  "/desmos.subspaces.v3.MsgEditSubspace": {
    aminoType: "desmos/MsgEditSubspace",
    toAmino: MsgEditSubspace.toAmino,
    fromAmino: MsgEditSubspace.fromAmino,
  },
  "/desmos.subspaces.v3.MsgDeleteSubspace": {
    aminoType: "desmos/MsgDeleteSubspace",
    toAmino: MsgDeleteSubspace.toAmino,
    fromAmino: MsgDeleteSubspace.fromAmino,
  },
  "/desmos.subspaces.v3.MsgCreateSection": {
    aminoType: "desmos/MsgCreateSection",
    toAmino: MsgCreateSection.toAmino,
    fromAmino: MsgCreateSection.fromAmino,
  },
  "/desmos.subspaces.v3.MsgEditSection": {
    aminoType: "desmos/MsgEditSection",
    toAmino: MsgEditSection.toAmino,
    fromAmino: MsgEditSection.fromAmino,
  },
  "/desmos.subspaces.v3.MsgMoveSection": {
    aminoType: "desmos/MsgMoveSection",
    toAmino: MsgMoveSection.toAmino,
    fromAmino: MsgMoveSection.fromAmino,
  },
  "/desmos.subspaces.v3.MsgDeleteSection": {
    aminoType: "desmos/MsgDeleteSection",
    toAmino: MsgDeleteSection.toAmino,
    fromAmino: MsgDeleteSection.fromAmino,
  },
  "/desmos.subspaces.v3.MsgCreateUserGroup": {
    aminoType: "desmos/MsgCreateUserGroup",
    toAmino: MsgCreateUserGroup.toAmino,
    fromAmino: MsgCreateUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgEditUserGroup": {
    aminoType: "desmos/MsgEditUserGroup",
    toAmino: MsgEditUserGroup.toAmino,
    fromAmino: MsgEditUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgMoveUserGroup": {
    aminoType: "desmos/MsgMoveUserGroup",
    toAmino: MsgMoveUserGroup.toAmino,
    fromAmino: MsgMoveUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgSetUserGroupPermissions": {
    aminoType: "desmos/MsgSetUserGroupPermissions",
    toAmino: MsgSetUserGroupPermissions.toAmino,
    fromAmino: MsgSetUserGroupPermissions.fromAmino,
  },
  "/desmos.subspaces.v3.MsgDeleteUserGroup": {
    aminoType: "desmos/MsgDeleteUserGroup",
    toAmino: MsgDeleteUserGroup.toAmino,
    fromAmino: MsgDeleteUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgAddUserToUserGroup": {
    aminoType: "desmos/MsgAddUserToUserGroup",
    toAmino: MsgAddUserToUserGroup.toAmino,
    fromAmino: MsgAddUserToUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup": {
    aminoType: "desmos/MsgRemoveUserFromUserGroup",
    toAmino: MsgRemoveUserFromUserGroup.toAmino,
    fromAmino: MsgRemoveUserFromUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgSetUserPermissions": {
    aminoType: "desmos/MsgSetUserPermissions",
    toAmino: MsgSetUserPermissions.toAmino,
    fromAmino: MsgSetUserPermissions.fromAmino,
  },
  "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization": {
    aminoType: "desmos/MsgGrantTreasuryAuthorization",
    toAmino: MsgGrantTreasuryAuthorization.toAmino,
    fromAmino: MsgGrantTreasuryAuthorization.fromAmino,
  },
  "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization": {
    aminoType: "desmos/MsgRevokeTreasuryAuthorization",
    toAmino: MsgRevokeTreasuryAuthorization.toAmino,
    fromAmino: MsgRevokeTreasuryAuthorization.fromAmino,
  },
  "/desmos.subspaces.v3.MsgGrantAllowance": {
    aminoType: "desmos/MsgGrantAllowance",
    toAmino: MsgGrantAllowance.toAmino,
    fromAmino: MsgGrantAllowance.fromAmino,
  },
  "/desmos.subspaces.v3.MsgRevokeAllowance": {
    aminoType: "desmos/MsgRevokeAllowance",
    toAmino: MsgRevokeAllowance.toAmino,
    fromAmino: MsgRevokeAllowance.fromAmino,
  },
  "/desmos.subspaces.v3.MsgUpdateSubspaceFeeTokens": {
    aminoType: "desmos/MsgUpdateSubspaceFeeTokens",
    toAmino: MsgUpdateSubspaceFeeTokens.toAmino,
    fromAmino: MsgUpdateSubspaceFeeTokens.fromAmino,
  },
};
