import {EncodeObject} from "@cosmjs/proto-signing";
import {
    MsgLinkApplication,
    MsgUnlinkApplication,
    MsgLinkChainAccount,
    MsgUnlinkChainAccount,
    MsgRequestDTagTransfer,
    MsgCancelDTagTransferRequest,
    MsgAcceptDTagTransferRequest,
    MsgRefuseDTagTransferRequest,
    MsgSaveProfile,
    MsgDeleteProfile,
    MsgCreateRelationship,
    MsgDeleteRelationship,
    MsgBlockUser,
    MsgUnblockUser,
    QueryApplicationLinkByClientIDRequest,
    QueryApplicationLinksRequest,
    QueryUserApplicationLinkRequest,
    QueryUserChainLinkRequest,
    QueryChainLinksRequest,
    QueryIncomingDTagTransferRequestsRequest,
    QueryParamsRequest,
    QueryBlocksRequest,
    QueryProfileRequest,
    QueryRelationshipsRequest
} from "@desmos-labs/proto";

export interface MsgLinkApplicationEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgLinkApplication",
    readonly value: Partial<MsgLinkApplication>,
}

export interface MsgUnlinkApplicationEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgUnlinkApplication",
    readonly value: Partial<MsgUnlinkApplication>,
}

export interface MsgLinkChainAccountEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgLinkChainAccount",
    readonly value: Partial<MsgLinkChainAccount>,
}

export interface MsgUnlinkChainAccountEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgUnlinkChainAccount",
    readonly value: Partial<MsgUnlinkChainAccount>,
}

export interface MsgRequestDTagTransferEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgRequestDTagTransfer",
    readonly value: Partial<MsgRequestDTagTransfer>,
}

export interface MsgCancelDTagTransferRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgCancelDTagTransferRequest",
    readonly value: Partial<MsgCancelDTagTransferRequest>,
}

export interface MsgAcceptDTagTransferRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgAcceptDTagTransferRequest",
    readonly value: Partial<MsgAcceptDTagTransferRequest>,
}

export interface MsgRefuseDTagTransferRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest",
    readonly value: Partial<MsgRefuseDTagTransferRequest>,
}

export interface MsgSaveProfileEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgSaveProfile",
    readonly value: Partial<MsgSaveProfile>,
}

export interface MsgDeleteProfileEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgDeleteProfile",
    readonly value: Partial<MsgDeleteProfile>,
}

export interface MsgCreateRelationshipEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgCreateRelationship",
    readonly value: Partial<MsgCreateRelationship>,
}

export interface MsgDeleteRelationshipEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgDeleteRelationship",
    readonly value: Partial<MsgDeleteRelationship>,
}

export interface MsgBlockUserEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgBlockUser",
    readonly value: Partial<MsgBlockUser>,
}

export interface MsgUnblockUserEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.MsgUnblockUser",
    readonly value: Partial<MsgUnblockUser>,
}

export interface QueryApplicationLinkByClientIDRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.QueryApplicationLinkByClientIDRequest",
    readonly value: Partial<QueryApplicationLinkByClientIDRequest>,
}

export interface QueryApplicationLinksRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.QueryApplicationLinksRequest",
    readonly value: Partial<QueryApplicationLinksRequest>,
}

export interface QueryUserApplicationLinkRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.QueryUserApplicationLinkRequest",
    readonly value: Partial<QueryUserApplicationLinkRequest>,
}

export interface QueryUserChainLinkRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.QueryUserChainLinkRequest",
    readonly value: Partial<QueryUserChainLinkRequest>,
}

export interface QueryChainLinksRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.QueryChainLinksRequest",
    readonly value: Partial<QueryChainLinksRequest>,
}

export interface QueryIncomingDTagTransferRequestsRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.QueryIncomingDTagTransferRequestsRequest",
    readonly value: Partial<QueryIncomingDTagTransferRequestsRequest>,
}

export interface QueryParamsRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.QueryParamsRequest",
    readonly value: Partial<QueryParamsRequest>,
}

export interface QueryBlocksRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.QueryBlocksRequest",
    readonly value: Partial<QueryBlocksRequest>,
}

export interface QueryProfileRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.QueryProfileRequest",
    readonly value: Partial<QueryProfileRequest>,
}

export interface QueryRelationshipsRequestEncodeObject extends EncodeObject {
    typeUrl: "/desmos.profiles.v1beta1.QueryRelationshipsRequest",
    readonly value: Partial<QueryRelationshipsRequest>,
}
