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
} from "./msgs";
import {
  MsgGrantTreasuryAuthorization,
  MsgRevokeTreasuryAuthorization,
} from "./msgs_treasury";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./msgs_feegrant";
export const AminoConverter = {
  "/desmos.subspaces.v3.MsgCreateSubspace": {
    aminoType: "/desmos.subspaces.v3.MsgCreateSubspace",
    toAmino: MsgCreateSubspace.toAmino,
    fromAmino: MsgCreateSubspace.fromAmino,
  },
  "/desmos.subspaces.v3.MsgEditSubspace": {
    aminoType: "/desmos.subspaces.v3.MsgEditSubspace",
    toAmino: MsgEditSubspace.toAmino,
    fromAmino: MsgEditSubspace.fromAmino,
  },
  "/desmos.subspaces.v3.MsgDeleteSubspace": {
    aminoType: "/desmos.subspaces.v3.MsgDeleteSubspace",
    toAmino: MsgDeleteSubspace.toAmino,
    fromAmino: MsgDeleteSubspace.fromAmino,
  },
  "/desmos.subspaces.v3.MsgCreateSection": {
    aminoType: "/desmos.subspaces.v3.MsgCreateSection",
    toAmino: MsgCreateSection.toAmino,
    fromAmino: MsgCreateSection.fromAmino,
  },
  "/desmos.subspaces.v3.MsgEditSection": {
    aminoType: "/desmos.subspaces.v3.MsgEditSection",
    toAmino: MsgEditSection.toAmino,
    fromAmino: MsgEditSection.fromAmino,
  },
  "/desmos.subspaces.v3.MsgMoveSection": {
    aminoType: "/desmos.subspaces.v3.MsgMoveSection",
    toAmino: MsgMoveSection.toAmino,
    fromAmino: MsgMoveSection.fromAmino,
  },
  "/desmos.subspaces.v3.MsgDeleteSection": {
    aminoType: "/desmos.subspaces.v3.MsgDeleteSection",
    toAmino: MsgDeleteSection.toAmino,
    fromAmino: MsgDeleteSection.fromAmino,
  },
  "/desmos.subspaces.v3.MsgCreateUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgCreateUserGroup",
    toAmino: MsgCreateUserGroup.toAmino,
    fromAmino: MsgCreateUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgEditUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgEditUserGroup",
    toAmino: MsgEditUserGroup.toAmino,
    fromAmino: MsgEditUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgMoveUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgMoveUserGroup",
    toAmino: MsgMoveUserGroup.toAmino,
    fromAmino: MsgMoveUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgSetUserGroupPermissions": {
    aminoType: "/desmos.subspaces.v3.MsgSetUserGroupPermissions",
    toAmino: MsgSetUserGroupPermissions.toAmino,
    fromAmino: MsgSetUserGroupPermissions.fromAmino,
  },
  "/desmos.subspaces.v3.MsgDeleteUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgDeleteUserGroup",
    toAmino: MsgDeleteUserGroup.toAmino,
    fromAmino: MsgDeleteUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgAddUserToUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgAddUserToUserGroup",
    toAmino: MsgAddUserToUserGroup.toAmino,
    fromAmino: MsgAddUserToUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup": {
    aminoType: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup",
    toAmino: MsgRemoveUserFromUserGroup.toAmino,
    fromAmino: MsgRemoveUserFromUserGroup.fromAmino,
  },
  "/desmos.subspaces.v3.MsgSetUserPermissions": {
    aminoType: "/desmos.subspaces.v3.MsgSetUserPermissions",
    toAmino: MsgSetUserPermissions.toAmino,
    fromAmino: MsgSetUserPermissions.fromAmino,
  },
  "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization": {
    aminoType: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization",
    toAmino: MsgGrantTreasuryAuthorization.toAmino,
    fromAmino: MsgGrantTreasuryAuthorization.fromAmino,
  },
  "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization": {
    aminoType: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization",
    toAmino: MsgRevokeTreasuryAuthorization.toAmino,
    fromAmino: MsgRevokeTreasuryAuthorization.fromAmino,
  },
  "/desmos.subspaces.v3.MsgGrantAllowance": {
    aminoType: "/desmos.subspaces.v3.MsgGrantAllowance",
    toAmino: MsgGrantAllowance.toAmino,
    fromAmino: MsgGrantAllowance.fromAmino,
  },
  "/desmos.subspaces.v3.MsgRevokeAllowance": {
    aminoType: "/desmos.subspaces.v3.MsgRevokeAllowance",
    toAmino: MsgRevokeAllowance.toAmino,
    fromAmino: MsgRevokeAllowance.fromAmino,
  },
};
