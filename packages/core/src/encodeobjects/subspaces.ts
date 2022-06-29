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
import {
  MsgCreateSection,
  MsgDeleteSection,
  MsgEditSection,
  MsgMoveSection,
  MsgMoveUserGroup,
} from "@desmoslabs/desmjs-types/desmos/subspaces/v2/msgs";

export interface MsgCreateSubspaceEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgCreateSubspace";
  readonly value: Partial<MsgCreateSubspace>;
}

export interface MsgEditSubspaceEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgEditSubspace";
  readonly value: Partial<MsgEditSubspace>;
}

export interface MsgDeleteSubspaceEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgDeleteSubspace";
  readonly value: Partial<MsgDeleteSubspace>;
}

export interface MsgCreateSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgCreateSection";
  readonly value: Partial<MsgCreateSection>;
}

export interface MsgEditSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgEditSection";
  readonly value: Partial<MsgEditSection>;
}

export interface MsgMoveSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgMoveSection";
  readonly value: Partial<MsgMoveSection>;
}

export interface MsgDeleteSectionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgDeleteSection";
  readonly value: Partial<MsgDeleteSection>;
}

export interface MsgCreateUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgCreateUserGroup";
  readonly value: Partial<MsgCreateUserGroup>;
}

export interface MsgEditUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgEditUserGroup";
  readonly value: Partial<MsgEditUserGroup>;
}

export interface MsgMoveUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgMoveUserGroup";
  readonly value: Partial<MsgMoveUserGroup>;
}

export interface MsgSetUserGroupPermissionsEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgSetUserGroupPermissions";
  readonly value: Partial<MsgSetUserGroupPermissions>;
}

export interface MsgDeleteUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgDeleteUserGroup";
  readonly value: Partial<MsgDeleteUserGroup>;
}

export interface MsgAddUserToUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgAddUserToUserGroup";
  readonly value: Partial<MsgAddUserToUserGroup>;
}

export interface MsgRemoveUserFromUserGroupEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgRemoveUserFromUserGroup";
  readonly value: Partial<MsgRemoveUserFromUserGroup>;
}

export interface MsgSetUserPermissionsEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.subspaces.v2.MsgSetUserPermissions";
  readonly value: Partial<MsgSetUserPermissions>;
}
