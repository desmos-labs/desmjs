import { AminoMsg } from "@cosmjs/amino";
import {
  GenericSubspaceAuthorizationAminoType,
  MsgAddUserToUserGroupAminoType,
  MsgCreateSectionAminoType,
  MsgCreateSubspaceAminoType,
  MsgCreateUserGroupAminoType,
  MsgDeleteSectionAminoType,
  MsgDeleteSubspaceAminoType,
  MsgDeleteUserGroupAminoType,
  MsgEditSectionAminoType,
  MsgEditSubspaceAminoType,
  MsgEditUserGroupAminoType,
  MsgMoveSectionAminoType,
  MsgMoveUserGroupAminoType,
  MsgRemoveUserFromUserGroupAminoType,
  MsgSetUserGroupPermissionsAminoType,
  MsgSetUserPermissionsAminoType,
} from "../../const";

export interface AminoGenericSubspaceAuthorization extends AminoMsg {
  readonly type: typeof GenericSubspaceAuthorizationAminoType;
  readonly value: {
    subspaces_ids: string[];
    msg: string;
  };
}

export interface AminoMsgCreateSubspace extends AminoMsg {
  readonly type: typeof MsgCreateSubspaceAminoType;
  readonly value: {
    name: string | undefined; // Undefined if empty
    description: string | undefined; // Undefined if empty
    treasury: string | undefined; // Undefined if empty
    owner: string | undefined; // Undefined if empty
    creator: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgEditSubspace extends AminoMsg {
  readonly type: typeof MsgEditSubspaceAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    name: string | undefined; // Undefined if empty
    description: string | undefined; // Undefined if empty
    treasury: string | undefined; // Undefined if empty
    owner: string | undefined; // Undefined if empty
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgDeleteSubspace extends AminoMsg {
  readonly type: typeof MsgDeleteSubspaceAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgCreateSection extends AminoMsg {
  readonly type: typeof MsgCreateSectionAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    name: string | undefined; // Undefined if empty
    description: string | undefined; // Undefined if empty
    parent_id: number | undefined; // Undefined if zero
    creator: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgEditSection extends AminoMsg {
  readonly type: typeof MsgEditSectionAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    section_id: number | undefined; // Undefined if zero
    name: string | undefined; // Undefined if empty
    description: string | undefined; // Undefined if empty
    editor: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgMoveSection extends AminoMsg {
  readonly type: typeof MsgMoveSectionAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    section_id: number | undefined; // Undefined if zero
    new_parent_id: number | undefined; // Undefined if zero
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgDeleteSection extends AminoMsg {
  readonly type: typeof MsgDeleteSectionAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    section_id: number | undefined; // Undefined if zero
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgCreateUserGroup extends AminoMsg {
  readonly type: typeof MsgCreateUserGroupAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    section_id: number | undefined; // Undefined if zero
    name: string | undefined; // Undefined if empty
    description: string | undefined; // Undefined if empty
    default_permissions: string[] | undefined; // Undefined if empty
    initial_members: string[] | undefined; // Undefined if empty
    creator: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgEditUserGroup extends AminoMsg {
  readonly type: typeof MsgEditUserGroupAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    group_id: number | undefined; // Undefined if zero
    name: string | undefined; // Undefined if empty
    description: string | undefined; // Undefined if empty
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgMoveUserGroup extends AminoMsg {
  readonly type: typeof MsgMoveUserGroupAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    group_id: number | undefined; // Undefined if zero
    new_section_id: number | undefined; // Undefined if zero
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgSetUserGroupPermissions extends AminoMsg {
  readonly type: typeof MsgSetUserGroupPermissionsAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    group_id: number | undefined; // Undefined if empty
    permissions: string[] | undefined; // Undefined if empty
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgDeleteUserGroup extends AminoMsg {
  readonly type: typeof MsgDeleteUserGroupAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    group_id: number | undefined; // Undefined if zero
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgAddUserToUserGroup extends AminoMsg {
  readonly type: typeof MsgAddUserToUserGroupAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    group_id: number | undefined; // Undefined if zero
    user: string | undefined; // Undefined if empty
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgRemoveUserFromUserGroup extends AminoMsg {
  readonly type: typeof MsgRemoveUserFromUserGroupAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    group_id: number | undefined; // Undefined if zero
    user: string | undefined; // Undefined if empty
    signer: string | undefined; // Undefined if empy
  };
}

export interface AminoMsgSetUserPermissions extends AminoMsg {
  readonly type: typeof MsgSetUserPermissionsAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    section_id: number | undefined; // Undefined if zero
    user: string | undefined; // Undefined if empty
    permissions: string[] | undefined; // Undefined if empty
    signer: string | undefined; // Undefined if empty
  };
}
