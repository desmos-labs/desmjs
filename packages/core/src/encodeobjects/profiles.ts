import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgLinkApplication,
  MsgUnlinkApplication,
} from "@desmoslabs/desmjs-types/desmos/profiles/v1beta1/msgs_app_links";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
} from "@desmoslabs/desmjs-types/desmos/profiles/v1beta1/msgs_chain_links";
import {
  MsgAcceptDTagTransferRequest,
  MsgCancelDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
  MsgRequestDTagTransfer,
} from "@desmoslabs/desmjs-types/desmos/profiles/v1beta1/msgs_dtag_requests";
import {
  MsgDeleteProfile,
  MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v1beta1/msgs_profile";
import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgUnblockUser,
} from "@desmoslabs/desmjs-types/desmos/profiles/v1beta1/msgs_relationships";

export interface MsgLinkApplicationEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgLinkApplication";
  readonly value: Partial<MsgLinkApplication>;
}

export interface MsgUnlinkApplicationEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgUnlinkApplication";
  readonly value: Partial<MsgUnlinkApplication>;
}

export interface MsgLinkChainAccountEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgLinkChainAccount";
  readonly value: Partial<MsgLinkChainAccount>;
}

export interface MsgUnlinkChainAccountEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgUnlinkChainAccount";
  readonly value: Partial<MsgUnlinkChainAccount>;
}

export interface MsgRequestDTagTransferEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgRequestDTagTransfer";
  readonly value: MsgRequestDTagTransfer;
}

export interface MsgCancelDTagTransferRequestEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgCancelDTagTransferRequest";
  readonly value: MsgCancelDTagTransferRequest;
}

export interface MsgAcceptDTagTransferRequestEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgAcceptDTagTransferRequest";
  readonly value: MsgAcceptDTagTransferRequest;
}

export interface MsgRefuseDTagTransferRequestEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest";
  readonly value: MsgRefuseDTagTransferRequest;
}

export interface MsgSaveProfileEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgSaveProfile";
  readonly value: Partial<MsgSaveProfile>;
}

export interface MsgDeleteProfileEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgDeleteProfile";
  readonly value: Partial<MsgDeleteProfile>;
}

export interface MsgCreateRelationshipEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgCreateRelationship";
  readonly value: Partial<MsgCreateRelationship>;
}

export interface MsgDeleteRelationshipEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgDeleteRelationship";
  readonly value: Partial<MsgDeleteRelationship>;
}

export interface MsgBlockUserEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgBlockUser";
  readonly value: Partial<MsgBlockUser>;
}

export interface MsgUnblockUserEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v1beta1.MsgUnblockUser";
  readonly value: Partial<MsgUnblockUser>;
}
