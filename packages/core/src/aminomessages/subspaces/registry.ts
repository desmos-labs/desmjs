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

export const subspacesRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.subspaces.v3.MsgCreateSubspace", MsgCreateSubspace],
  ["/desmos.subspaces.v3.MsgEditSubspace", MsgEditSubspace],
  ["/desmos.subspaces.v3.MsgDeleteSubspace", MsgDeleteSubspace],
  ["/desmos.subspaces.v3.MsgCreateSection", MsgCreateSection],
  ["/desmos.subspaces.v3.MsgEditSection", MsgEditSection],
  ["/desmos.subspaces.v3.MsgMoveSection", MsgMoveSection],
  ["/desmos.subspaces.v3.MsgDeleteSection", MsgDeleteSection],
  ["/desmos.subspaces.v3.MsgCreateUserGroup", MsgCreateUserGroup],
  ["/desmos.subspaces.v3.MsgEditUserGroup", MsgEditUserGroup],
  ["/desmos.subspaces.v3.MsgMoveUserGroup", MsgMoveUserGroup],
  [
    "/desmos.subspaces.v3.MsgSetUserGroupPermissions",
    MsgSetUserGroupPermissions,
  ],
  ["/desmos.subspaces.v3.MsgDeleteUserGroup", MsgDeleteUserGroup],
  ["/desmos.subspaces.v3.MsgAddUserToUserGroup", MsgAddUserToUserGroup],
  [
    "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup",
    MsgRemoveUserFromUserGroup,
  ],
  ["/desmos.subspaces.v3.MsgSetUserPermissions", MsgSetUserPermissions],
];

export default subspacesRegistryTypes;
