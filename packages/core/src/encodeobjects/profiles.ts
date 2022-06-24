import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgLinkApplication,
  MsgUnlinkApplication,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_app_links";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_chain_links";
import {
  MsgAcceptDTagTransferRequest,
  MsgCancelDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
  MsgRequestDTagTransfer,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_dtag_requests";
import {
  MsgDeleteProfile,
  MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_profile";

export interface MsgLinkApplicationEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v2.MsgLinkApplication";
  readonly value: Partial<MsgLinkApplication>;
}

export interface MsgUnlinkApplicationEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v2.MsgUnlinkApplication";
  readonly value: Partial<MsgUnlinkApplication>;
}

export interface MsgLinkChainAccountEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v2.MsgLinkChainAccount";
  readonly value: Partial<MsgLinkChainAccount>;
}

export interface MsgUnlinkChainAccountEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v2.MsgUnlinkChainAccount";
  readonly value: Partial<MsgUnlinkChainAccount>;
}

export interface MsgRequestDTagTransferEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v2.MsgRequestDTagTransfer";
  readonly value: MsgRequestDTagTransfer;
}

export interface MsgCancelDTagTransferRequestEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v2.MsgCancelDTagTransferRequest";
  readonly value: MsgCancelDTagTransferRequest;
}

export interface MsgAcceptDTagTransferRequestEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v2.MsgAcceptDTagTransferRequest";
  readonly value: MsgAcceptDTagTransferRequest;
}

export interface MsgRefuseDTagTransferRequestEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v2.MsgRefuseDTagTransferRequest";
  readonly value: MsgRefuseDTagTransferRequest;
}

export interface MsgSaveProfileEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v2.MsgSaveProfile";
  readonly value: Partial<MsgSaveProfile>;
}

export interface MsgDeleteProfileEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v2.MsgDeleteProfile";
  readonly value: Partial<MsgDeleteProfile>;
}
