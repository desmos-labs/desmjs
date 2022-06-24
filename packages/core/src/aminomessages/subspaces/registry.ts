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
} from "@desmoslabs/desmjs-types/desmos/subspaces/v1/msgs";

export const subspacesRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.subspaces.v1.MsgCreateSubspace", MsgCreateSubspace],
  ["/desmos.subspaces.v1.MsgEditSubspace", MsgEditSubspace],
  ["/desmos.subspaces.v1.MsgDeleteSubspace", MsgDeleteSubspace],
  ["/desmos.subspaces.v1.MsgCreateUserGroup", MsgCreateUserGroup],
  ["/desmos.subspaces.v1.MsgEditUserGroup", MsgEditUserGroup],
  [
    "/desmos.subspaces.v1.MsgSetUserGroupPermissions",
    MsgSetUserGroupPermissions,
  ],
  ["/desmos.subspaces.v1.MsgDeleteUserGroup", MsgDeleteUserGroup],
  ["/desmos.subspaces.v1.MsgAddUserToUserGroup", MsgAddUserToUserGroup],
  [
    "/desmos.subspaces.v1.MsgRemoveUserFromUserGroup",
    MsgRemoveUserFromUserGroup,
  ],
  ["/desmos.subspaces.v1.MsgSetUserPermissions", MsgSetUserPermissions],
];

export default subspacesRegistryTypes;
