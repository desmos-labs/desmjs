import { EncodeObject } from "@cosmjs/proto-signing";
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
  MsgDeleteSection,
  MsgEditSection,
  MsgMoveSection,
  MsgMoveUserGroup,
} from "@desmoslabs/desmjs-types/desmos/subspaces/v2/msgs";

export interface MsgCreateSubspaceEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgCreateSubspace";
  readonly value: MsgCreateSubspace;
}

export function isMsgCreateSubspaceEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreateSubspaceEncodeObject {
  return (
    (encodeObject as MsgCreateSubspaceEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgCreateSubspace"
  );
}

export interface MsgEditSubspaceEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgEditSubspace";
  readonly value: MsgEditSubspace;
}

export function isMsgEditSubspaceEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgEditSubspaceEncodeObject {
  return (
    (encodeObject as MsgEditSubspaceEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgEditSubspace"
  );
}

export interface MsgDeleteSubspaceEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgDeleteSubspace";
  readonly value: MsgDeleteSubspace;
}

export function isMsgDeleteSubspaceEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteSubspaceEncodeObject {
  return (
    (encodeObject as MsgDeleteSubspaceEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgDeleteSubspace"
  );
}

export interface MsgCreateSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgCreateSection";
  readonly value: MsgCreateSection;
}

export function isMsgCreateSectionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreateSectionEncodeObject {
  return (
    (encodeObject as MsgCreateSectionEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgCreateSection"
  );
}

export interface MsgEditSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgEditSection";
  readonly value: MsgEditSection;
}

export function isMsgEditSectionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgEditSectionEncodeObject {
  return (
    (encodeObject as MsgEditSectionEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgEditSection"
  );
}

export interface MsgMoveSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgMoveSection";
  readonly value: MsgMoveSection;
}

export function isMsgMoveSectionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgMoveSectionEncodeObject {
  return (
    (encodeObject as MsgMoveSectionEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgMoveSection"
  );
}

export interface MsgDeleteSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgDeleteSection";
  readonly value: MsgDeleteSection;
}

export function isMsgDeleteSectionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteSectionEncodeObject {
  return (
    (encodeObject as MsgDeleteSectionEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgDeleteSection"
  );
}

export interface MsgCreateUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgCreateUserGroup";
  readonly value: MsgCreateUserGroup;
}

export function isMsgCreateUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreateUserGroupEncodeObject {
  return (
    (encodeObject as MsgCreateUserGroupEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgCreateUserGroup"
  );
}

export interface MsgEditUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgEditUserGroup";
  readonly value: MsgEditUserGroup;
}

export function isMsgEditUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgEditUserGroupEncodeObject {
  return (
    (encodeObject as MsgEditUserGroupEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgEditUserGroup"
  );
}

export interface MsgMoveUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgMoveUserGroup";
  readonly value: MsgMoveUserGroup;
}

export function isMsgMoveUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgMoveUserGroupEncodeObject {
  return (
    (encodeObject as MsgMoveUserGroupEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgMoveUserGroup"
  );
}

export interface MsgSetUserGroupPermissionsEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgSetUserGroupPermissions";
  readonly value: MsgSetUserGroupPermissions;
}

export function isMsgSetUserGroupPermissionsEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgSetUserGroupPermissionsEncodeObject {
  return (
    (encodeObject as MsgSetUserGroupPermissionsEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgSetUserGroupPermissions"
  );
}

export interface MsgDeleteUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgDeleteUserGroup";
  readonly value: MsgDeleteUserGroup;
}

export function isMsgDeleteUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteUserGroupEncodeObject {
  return (
    (encodeObject as MsgDeleteUserGroupEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgDeleteUserGroup"
  );
}

export interface MsgAddUserToUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgAddUserToUserGroup";
  readonly value: MsgAddUserToUserGroup;
}

export function isMsgAddUserToUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAddUserToUserGroupEncodeObject {
  return (
    (encodeObject as MsgAddUserToUserGroupEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgAddUserToUserGroup"
  );
}

export interface MsgRemoveUserFromUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgRemoveUserFromUserGroup";
  readonly value: MsgRemoveUserFromUserGroup;
}

export function isMsgRemoveUserFromUserGroupEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgRemoveUserFromUserGroupEncodeObject {
  return (
    (encodeObject as MsgRemoveUserFromUserGroupEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgRemoveUserFromUserGroup"
  );
}

export interface MsgSetUserPermissionsEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgSetUserPermissions";
  readonly value: MsgSetUserPermissions;
}

export function isMsgSetUserPermissionsEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgSetUserPermissionsEncodeObject {
  return (
    (encodeObject as MsgSetUserPermissionsEncodeObject).typeUrl ===
    "/desmos.subspaces.v2.MsgSetUserPermissions"
  );
}
