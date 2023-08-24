/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
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
export const registry: ReadonlyArray<[string, GeneratedType]> = [
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
  [
    "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization",
    MsgGrantTreasuryAuthorization,
  ],
  [
    "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization",
    MsgRevokeTreasuryAuthorization,
  ],
  ["/desmos.subspaces.v3.MsgGrantAllowance", MsgGrantAllowance],
  ["/desmos.subspaces.v3.MsgRevokeAllowance", MsgRevokeAllowance],
  [
    "/desmos.subspaces.v3.MsgUpdateSubspaceFeeTokens",
    MsgUpdateSubspaceFeeTokens,
  ],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createSubspace(value: MsgCreateSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateSubspace",
        value: MsgCreateSubspace.encode(value).finish(),
      };
    },
    editSubspace(value: MsgEditSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditSubspace",
        value: MsgEditSubspace.encode(value).finish(),
      };
    },
    deleteSubspace(value: MsgDeleteSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteSubspace",
        value: MsgDeleteSubspace.encode(value).finish(),
      };
    },
    createSection(value: MsgCreateSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateSection",
        value: MsgCreateSection.encode(value).finish(),
      };
    },
    editSection(value: MsgEditSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditSection",
        value: MsgEditSection.encode(value).finish(),
      };
    },
    moveSection(value: MsgMoveSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgMoveSection",
        value: MsgMoveSection.encode(value).finish(),
      };
    },
    deleteSection(value: MsgDeleteSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteSection",
        value: MsgDeleteSection.encode(value).finish(),
      };
    },
    createUserGroup(value: MsgCreateUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateUserGroup",
        value: MsgCreateUserGroup.encode(value).finish(),
      };
    },
    editUserGroup(value: MsgEditUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditUserGroup",
        value: MsgEditUserGroup.encode(value).finish(),
      };
    },
    moveUserGroup(value: MsgMoveUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgMoveUserGroup",
        value: MsgMoveUserGroup.encode(value).finish(),
      };
    },
    setUserGroupPermissions(value: MsgSetUserGroupPermissions) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgSetUserGroupPermissions",
        value: MsgSetUserGroupPermissions.encode(value).finish(),
      };
    },
    deleteUserGroup(value: MsgDeleteUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteUserGroup",
        value: MsgDeleteUserGroup.encode(value).finish(),
      };
    },
    addUserToUserGroup(value: MsgAddUserToUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgAddUserToUserGroup",
        value: MsgAddUserToUserGroup.encode(value).finish(),
      };
    },
    removeUserFromUserGroup(value: MsgRemoveUserFromUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup",
        value: MsgRemoveUserFromUserGroup.encode(value).finish(),
      };
    },
    setUserPermissions(value: MsgSetUserPermissions) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgSetUserPermissions",
        value: MsgSetUserPermissions.encode(value).finish(),
      };
    },
    grantTreasuryAuthorization(value: MsgGrantTreasuryAuthorization) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization",
        value: MsgGrantTreasuryAuthorization.encode(value).finish(),
      };
    },
    revokeTreasuryAuthorization(value: MsgRevokeTreasuryAuthorization) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization",
        value: MsgRevokeTreasuryAuthorization.encode(value).finish(),
      };
    },
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgGrantAllowance",
        value: MsgGrantAllowance.encode(value).finish(),
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRevokeAllowance",
        value: MsgRevokeAllowance.encode(value).finish(),
      };
    },
    updateSubspaceFeeTokens(value: MsgUpdateSubspaceFeeTokens) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgUpdateSubspaceFeeTokens",
        value: MsgUpdateSubspaceFeeTokens.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    createSubspace(value: MsgCreateSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateSubspace",
        value,
      };
    },
    editSubspace(value: MsgEditSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditSubspace",
        value,
      };
    },
    deleteSubspace(value: MsgDeleteSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteSubspace",
        value,
      };
    },
    createSection(value: MsgCreateSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateSection",
        value,
      };
    },
    editSection(value: MsgEditSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditSection",
        value,
      };
    },
    moveSection(value: MsgMoveSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgMoveSection",
        value,
      };
    },
    deleteSection(value: MsgDeleteSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteSection",
        value,
      };
    },
    createUserGroup(value: MsgCreateUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateUserGroup",
        value,
      };
    },
    editUserGroup(value: MsgEditUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditUserGroup",
        value,
      };
    },
    moveUserGroup(value: MsgMoveUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgMoveUserGroup",
        value,
      };
    },
    setUserGroupPermissions(value: MsgSetUserGroupPermissions) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgSetUserGroupPermissions",
        value,
      };
    },
    deleteUserGroup(value: MsgDeleteUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteUserGroup",
        value,
      };
    },
    addUserToUserGroup(value: MsgAddUserToUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgAddUserToUserGroup",
        value,
      };
    },
    removeUserFromUserGroup(value: MsgRemoveUserFromUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup",
        value,
      };
    },
    setUserPermissions(value: MsgSetUserPermissions) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgSetUserPermissions",
        value,
      };
    },
    grantTreasuryAuthorization(value: MsgGrantTreasuryAuthorization) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization",
        value,
      };
    },
    revokeTreasuryAuthorization(value: MsgRevokeTreasuryAuthorization) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization",
        value,
      };
    },
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgGrantAllowance",
        value,
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRevokeAllowance",
        value,
      };
    },
    updateSubspaceFeeTokens(value: MsgUpdateSubspaceFeeTokens) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgUpdateSubspaceFeeTokens",
        value,
      };
    },
  },
  toJSON: {
    createSubspace(value: MsgCreateSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateSubspace",
        value: MsgCreateSubspace.toJSON(value),
      };
    },
    editSubspace(value: MsgEditSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditSubspace",
        value: MsgEditSubspace.toJSON(value),
      };
    },
    deleteSubspace(value: MsgDeleteSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteSubspace",
        value: MsgDeleteSubspace.toJSON(value),
      };
    },
    createSection(value: MsgCreateSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateSection",
        value: MsgCreateSection.toJSON(value),
      };
    },
    editSection(value: MsgEditSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditSection",
        value: MsgEditSection.toJSON(value),
      };
    },
    moveSection(value: MsgMoveSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgMoveSection",
        value: MsgMoveSection.toJSON(value),
      };
    },
    deleteSection(value: MsgDeleteSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteSection",
        value: MsgDeleteSection.toJSON(value),
      };
    },
    createUserGroup(value: MsgCreateUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateUserGroup",
        value: MsgCreateUserGroup.toJSON(value),
      };
    },
    editUserGroup(value: MsgEditUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditUserGroup",
        value: MsgEditUserGroup.toJSON(value),
      };
    },
    moveUserGroup(value: MsgMoveUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgMoveUserGroup",
        value: MsgMoveUserGroup.toJSON(value),
      };
    },
    setUserGroupPermissions(value: MsgSetUserGroupPermissions) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgSetUserGroupPermissions",
        value: MsgSetUserGroupPermissions.toJSON(value),
      };
    },
    deleteUserGroup(value: MsgDeleteUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteUserGroup",
        value: MsgDeleteUserGroup.toJSON(value),
      };
    },
    addUserToUserGroup(value: MsgAddUserToUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgAddUserToUserGroup",
        value: MsgAddUserToUserGroup.toJSON(value),
      };
    },
    removeUserFromUserGroup(value: MsgRemoveUserFromUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup",
        value: MsgRemoveUserFromUserGroup.toJSON(value),
      };
    },
    setUserPermissions(value: MsgSetUserPermissions) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgSetUserPermissions",
        value: MsgSetUserPermissions.toJSON(value),
      };
    },
    grantTreasuryAuthorization(value: MsgGrantTreasuryAuthorization) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization",
        value: MsgGrantTreasuryAuthorization.toJSON(value),
      };
    },
    revokeTreasuryAuthorization(value: MsgRevokeTreasuryAuthorization) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization",
        value: MsgRevokeTreasuryAuthorization.toJSON(value),
      };
    },
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgGrantAllowance",
        value: MsgGrantAllowance.toJSON(value),
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRevokeAllowance",
        value: MsgRevokeAllowance.toJSON(value),
      };
    },
    updateSubspaceFeeTokens(value: MsgUpdateSubspaceFeeTokens) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgUpdateSubspaceFeeTokens",
        value: MsgUpdateSubspaceFeeTokens.toJSON(value),
      };
    },
  },
  fromJSON: {
    createSubspace(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateSubspace",
        value: MsgCreateSubspace.fromJSON(value),
      };
    },
    editSubspace(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditSubspace",
        value: MsgEditSubspace.fromJSON(value),
      };
    },
    deleteSubspace(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteSubspace",
        value: MsgDeleteSubspace.fromJSON(value),
      };
    },
    createSection(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateSection",
        value: MsgCreateSection.fromJSON(value),
      };
    },
    editSection(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditSection",
        value: MsgEditSection.fromJSON(value),
      };
    },
    moveSection(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgMoveSection",
        value: MsgMoveSection.fromJSON(value),
      };
    },
    deleteSection(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteSection",
        value: MsgDeleteSection.fromJSON(value),
      };
    },
    createUserGroup(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateUserGroup",
        value: MsgCreateUserGroup.fromJSON(value),
      };
    },
    editUserGroup(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditUserGroup",
        value: MsgEditUserGroup.fromJSON(value),
      };
    },
    moveUserGroup(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgMoveUserGroup",
        value: MsgMoveUserGroup.fromJSON(value),
      };
    },
    setUserGroupPermissions(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgSetUserGroupPermissions",
        value: MsgSetUserGroupPermissions.fromJSON(value),
      };
    },
    deleteUserGroup(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteUserGroup",
        value: MsgDeleteUserGroup.fromJSON(value),
      };
    },
    addUserToUserGroup(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgAddUserToUserGroup",
        value: MsgAddUserToUserGroup.fromJSON(value),
      };
    },
    removeUserFromUserGroup(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup",
        value: MsgRemoveUserFromUserGroup.fromJSON(value),
      };
    },
    setUserPermissions(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgSetUserPermissions",
        value: MsgSetUserPermissions.fromJSON(value),
      };
    },
    grantTreasuryAuthorization(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization",
        value: MsgGrantTreasuryAuthorization.fromJSON(value),
      };
    },
    revokeTreasuryAuthorization(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization",
        value: MsgRevokeTreasuryAuthorization.fromJSON(value),
      };
    },
    grantAllowance(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgGrantAllowance",
        value: MsgGrantAllowance.fromJSON(value),
      };
    },
    revokeAllowance(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRevokeAllowance",
        value: MsgRevokeAllowance.fromJSON(value),
      };
    },
    updateSubspaceFeeTokens(value: any) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgUpdateSubspaceFeeTokens",
        value: MsgUpdateSubspaceFeeTokens.fromJSON(value),
      };
    },
  },
  fromPartial: {
    createSubspace(value: MsgCreateSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateSubspace",
        value: MsgCreateSubspace.fromPartial(value),
      };
    },
    editSubspace(value: MsgEditSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditSubspace",
        value: MsgEditSubspace.fromPartial(value),
      };
    },
    deleteSubspace(value: MsgDeleteSubspace) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteSubspace",
        value: MsgDeleteSubspace.fromPartial(value),
      };
    },
    createSection(value: MsgCreateSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateSection",
        value: MsgCreateSection.fromPartial(value),
      };
    },
    editSection(value: MsgEditSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditSection",
        value: MsgEditSection.fromPartial(value),
      };
    },
    moveSection(value: MsgMoveSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgMoveSection",
        value: MsgMoveSection.fromPartial(value),
      };
    },
    deleteSection(value: MsgDeleteSection) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteSection",
        value: MsgDeleteSection.fromPartial(value),
      };
    },
    createUserGroup(value: MsgCreateUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgCreateUserGroup",
        value: MsgCreateUserGroup.fromPartial(value),
      };
    },
    editUserGroup(value: MsgEditUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgEditUserGroup",
        value: MsgEditUserGroup.fromPartial(value),
      };
    },
    moveUserGroup(value: MsgMoveUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgMoveUserGroup",
        value: MsgMoveUserGroup.fromPartial(value),
      };
    },
    setUserGroupPermissions(value: MsgSetUserGroupPermissions) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgSetUserGroupPermissions",
        value: MsgSetUserGroupPermissions.fromPartial(value),
      };
    },
    deleteUserGroup(value: MsgDeleteUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgDeleteUserGroup",
        value: MsgDeleteUserGroup.fromPartial(value),
      };
    },
    addUserToUserGroup(value: MsgAddUserToUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgAddUserToUserGroup",
        value: MsgAddUserToUserGroup.fromPartial(value),
      };
    },
    removeUserFromUserGroup(value: MsgRemoveUserFromUserGroup) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRemoveUserFromUserGroup",
        value: MsgRemoveUserFromUserGroup.fromPartial(value),
      };
    },
    setUserPermissions(value: MsgSetUserPermissions) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgSetUserPermissions",
        value: MsgSetUserPermissions.fromPartial(value),
      };
    },
    grantTreasuryAuthorization(value: MsgGrantTreasuryAuthorization) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization",
        value: MsgGrantTreasuryAuthorization.fromPartial(value),
      };
    },
    revokeTreasuryAuthorization(value: MsgRevokeTreasuryAuthorization) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization",
        value: MsgRevokeTreasuryAuthorization.fromPartial(value),
      };
    },
    grantAllowance(value: MsgGrantAllowance) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgGrantAllowance",
        value: MsgGrantAllowance.fromPartial(value),
      };
    },
    revokeAllowance(value: MsgRevokeAllowance) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgRevokeAllowance",
        value: MsgRevokeAllowance.fromPartial(value),
      };
    },
    updateSubspaceFeeTokens(value: MsgUpdateSubspaceFeeTokens) {
      return {
        typeUrl: "/desmos.subspaces.v3.MsgUpdateSubspaceFeeTokens",
        value: MsgUpdateSubspaceFeeTokens.fromPartial(value),
      };
    },
  },
};
