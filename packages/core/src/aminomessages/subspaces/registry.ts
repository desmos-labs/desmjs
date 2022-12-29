import { GeneratedType } from "@cosmjs/proto-signing";
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
import { GenericSubspaceAuthorization } from "@desmoslabs/desmjs-types/desmos/subspaces/v3/authz/authz";
import {
  GenericSubspaceAuthorizationTypeUrl,
  MsgAddUserToUserGroupTypeUrl,
  MsgCreateSectionTypeUrl,
  MsgCreateSubspaceTypeUrl,
  MsgCreateUserGroupTypeUrl,
  MsgDeleteSectionTypeUrl,
  MsgDeleteSubspaceTypeUrl,
  MsgDeleteUserGroupTypeUrl,
  MsgEditSectionTypeUrl,
  MsgEditSubspaceTypeUrl,
  MsgEditUserGroupTypeUrl,
  MsgMoveSectionTypeUrl,
  MsgMoveUserGroupTypeUrl,
  MsgRemoveUserFromUserGroupTypeUrl,
  MsgSetUserGroupPermissionsTypeUrl,
  MsgSetUserPermissionsTypeUrl,
} from "../../const";

export const subspacesRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  [GenericSubspaceAuthorizationTypeUrl, GenericSubspaceAuthorization],

  [MsgCreateSubspaceTypeUrl, MsgCreateSubspace],
  [MsgEditSubspaceTypeUrl, MsgEditSubspace],
  [MsgDeleteSubspaceTypeUrl, MsgDeleteSubspace],
  [MsgCreateSectionTypeUrl, MsgCreateSection],
  [MsgEditSectionTypeUrl, MsgEditSection],
  [MsgMoveSectionTypeUrl, MsgMoveSection],
  [MsgDeleteSectionTypeUrl, MsgDeleteSection],
  [MsgCreateUserGroupTypeUrl, MsgCreateUserGroup],
  [MsgEditUserGroupTypeUrl, MsgEditUserGroup],
  [MsgMoveUserGroupTypeUrl, MsgMoveUserGroup],
  [MsgSetUserGroupPermissionsTypeUrl, MsgSetUserGroupPermissions],
  [MsgDeleteUserGroupTypeUrl, MsgDeleteUserGroup],
  [MsgAddUserToUserGroupTypeUrl, MsgAddUserToUserGroup],
  [MsgRemoveUserFromUserGroupTypeUrl, MsgRemoveUserFromUserGroup],
  [MsgSetUserPermissionsTypeUrl, MsgSetUserPermissions],
];

export default subspacesRegistryTypes;
