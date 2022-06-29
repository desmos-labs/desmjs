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
} from "@desmoslabs/desmjs-types/desmos/subspaces/v2/msgs";

export const subspacesRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.subspaces.v2.MsgCreateSubspace", MsgCreateSubspace],
  ["/desmos.subspaces.v2.MsgEditSubspace", MsgEditSubspace],
  ["/desmos.subspaces.v2.MsgDeleteSubspace", MsgDeleteSubspace],
  ["/desmos.subspaces.v2.MsgCreateSection", MsgCreateSection],
  ["/desmos.subspaces.v2.MsgEditSection", MsgEditSection],
  ["/desmos.subspaces.v2.MsgMoveSection", MsgMoveSection],
  ["/desmos.subspaces.v2.MsgDeleteSection", MsgDeleteSection],
  ["/desmos.subspaces.v2.MsgCreateUserGroup", MsgCreateUserGroup],
  ["/desmos.subspaces.v2.MsgEditUserGroup", MsgEditUserGroup],
  ["/desmos.subspaces.v2.MsgMoveUserGroup", MsgMoveUserGroup],
  [
    "/desmos.subspaces.v2.MsgSetUserGroupPermissions",
    MsgSetUserGroupPermissions,
  ],
  ["/desmos.subspaces.v2.MsgDeleteUserGroup", MsgDeleteUserGroup],
  ["/desmos.subspaces.v2.MsgAddUserToUserGroup", MsgAddUserToUserGroup],
  [
    "/desmos.subspaces.v2.MsgRemoveUserFromUserGroup",
    MsgRemoveUserFromUserGroup,
  ],
  ["/desmos.subspaces.v2.MsgSetUserPermissions", MsgSetUserPermissions],
];

export default subspacesRegistryTypes;
