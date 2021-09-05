import {EncodeObject} from "@cosmjs/proto-signing";
import {
    MsgCreateSubspace,
    MsgEditSubspace,
    MsgAddAdmin,
    MsgRemoveAdmin,
    MsgRegisterUser,
    MsgUnregisterUser,
    MsgBanUser,
    MsgUnbanUser,
} from "@desmos-labs/proto/desmos/subspaces/v1beta1/msgs";

export interface MsgCreateSubSpaceEncodeObject extends EncodeObject {
    readonly typeUrl: "/desmos.subspaces.v1beta1.MsgCreateSubspace",
    readonly value: MsgCreateSubspace,
}

export interface MsgEditSubspaceEncodeObject extends  EncodeObject {
    readonly typeUrl: "/desmos.subspaces.v1beta1.MsgEditSubspace",
    readonly value: MsgEditSubspace,
}

export interface MsgAddAdminEncodeObject extends  EncodeObject {
    readonly typeUrl: "/desmos.subspaces.v1beta1.MsgAddAdmin",
    readonly value: MsgAddAdmin,
}

export interface MsgRemoveAdminEncodeObject extends  EncodeObject {
    readonly typeUrl: "/desmos.subspaces.v1beta1.MsgRemoveAdmin",
    readonly value: MsgRemoveAdmin,
}

export interface MsgRegisterUserEncodeObject extends  EncodeObject {
    readonly typeUrl: "/desmos.subspaces.v1beta1.MsgRegisterUser",
    readonly value: MsgRegisterUser,
}

export interface MsgUnregisterUserEncodeObject extends  EncodeObject {
    readonly typeUrl: "/desmos.subspaces.v1beta1.MsgUnregisterUser",
    readonly value: MsgUnregisterUser,
}

export interface MsgBanUserEncodeObject extends  EncodeObject {
    readonly typeUrl: "/desmos.subspaces.v1beta1.MsgBanUser",
    readonly value: MsgBanUser,
}

export interface MsgUnbanUserEncodeObject extends  EncodeObject {
    readonly typeUrl: "/desmos.subspaces.v1beta1.MsgUnbanUser",
    readonly value: MsgUnbanUser,
}
