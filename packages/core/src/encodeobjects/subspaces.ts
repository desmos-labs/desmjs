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
} from "@desmoslabs/desmjs-types/desmos/subspaces/v1/msgs";

export interface MsgAddUserToUserGroupEncodeObject extends EncodeObject {
  typeUrl: "/desmos.subspaces.v1.MsgAddUserToUserGroup";
  readonly value: Partial<MsgAddUserToUserGroup>;
}

export interface MsgCreateSubspaceEncodeObject extends EncodeObject {
  typeUrl: "/desmos.subspaces.v1.MsgCreateSubspace";
  readonly value: Partial<MsgCreateSubspace>;
}

export interface MsgCreateUserGroupEncodeObject extends EncodeObject {
  typeUrl: "/desmos.subspaces.v1.MsgCreateUserGroup";
  readonly value: Partial<MsgCreateUserGroup>;
}

export interface MsgDeleteSubspaceEncodeObject extends EncodeObject {
  typeUrl: "/desmos.subspaces.v1.MsgDeleteSubspace";
  readonly value: Partial<MsgDeleteSubspace>;
}

export interface MsgDeleteUserGroupEncodeObject extends EncodeObject {
  typeUrl: "/desmos.subspaces.v1.MsgDeleteUserGroup";
  readonly value: Partial<MsgDeleteUserGroup>;
}

export interface MsgEditSubspaceEncodeObject extends EncodeObject {
  typeUrl: "/desmos.subspaces.v1.MsgEditSubspace";
  readonly value: Partial<MsgEditSubspace>;
}

export interface MsgEditUserGroupEncodeObject extends EncodeObject {
  typeUrl: "/desmos.subspaces.v1.MsgEditUserGroup";
  readonly value: Partial<MsgEditUserGroup>;
}

export interface MsgRemoveUserFromUserGroupEncodeObject extends EncodeObject {
  typeUrl: "/desmos.subspaces.v1.MsgRemoveUserFromUserGroup";
  readonly value: Partial<MsgRemoveUserFromUserGroup>;
}

export interface MsgSetUserGroupPermissionsEncodeObject extends EncodeObject {
  typeUrl: "/desmos.subspaces.v1.MsgSetUserGroupPermissions";
  readonly value: Partial<MsgSetUserGroupPermissions>;
}

export interface MsgSetUserPermissionsEncodeObject extends EncodeObject {
  typeUrl: "/desmos.subspaces.v1.MsgSetUserPermissions";
  readonly value: Partial<MsgSetUserPermissions>;
}
