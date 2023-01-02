import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgLinkApplication,
  MsgUnlinkApplication,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_app_links";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_chain_links";
import {
  MsgAcceptDTagTransferRequest,
  MsgCancelDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
  MsgRequestDTagTransfer,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_dtag_requests";
import {
  MsgDeleteProfile,
  MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";
import {
  MsgAcceptDTagTransferRequestTypeUrl,
  MsgCancelDTagTransferRequestTypeUrl,
  MsgDeleteProfileTypeUrl,
  MsgLinkApplicationTypeUrl,
  MsgLinkChainAccountTypeUrl,
  MsgRefuseDTagTransferRequestTypeUrl,
  MsgRequestDTagTransferTypeUrl,
  MsgSaveProfileTypeUrl,
  MsgUnlinkApplicationTypeUrl,
  MsgUnlinkChainAccountTypeUrl,
} from "../const";

export interface MsgLinkApplicationEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v3.MsgLinkApplication";
  readonly value: MsgLinkApplication;
}

export function isMsgLinkApplicationEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgLinkApplicationEncodeObject {
  return (
    (encodeObject as MsgLinkApplicationEncodeObject).typeUrl ===
    MsgLinkApplicationTypeUrl
  );
}

export interface MsgUnlinkApplicationEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v3.MsgUnlinkApplication";
  readonly value: MsgUnlinkApplication;
}

export function isMsgUnlinkApplicationEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgUnlinkApplicationEncodeObject {
  return (
    (encodeObject as MsgUnlinkApplicationEncodeObject).typeUrl ===
    MsgUnlinkApplicationTypeUrl
  );
}

export interface MsgLinkChainAccountEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v3.MsgLinkChainAccount";
  readonly value: MsgLinkChainAccount;
}

export function isMsgLinkChainAccountEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgLinkChainAccountEncodeObject {
  return (
    (encodeObject as MsgLinkChainAccountEncodeObject).typeUrl ===
    MsgLinkChainAccountTypeUrl
  );
}

export interface MsgUnlinkChainAccountEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v3.MsgUnlinkChainAccount";
  readonly value: MsgUnlinkChainAccount;
}

export function isMsgUnlinkChainAccountEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgUnlinkChainAccountEncodeObject {
  return (
    (encodeObject as MsgUnlinkChainAccountEncodeObject).typeUrl ===
    MsgUnlinkChainAccountTypeUrl
  );
}

export interface MsgRequestDTagTransferEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v3.MsgRequestDTagTransfer";
  readonly value: MsgRequestDTagTransfer;
}

export function isMsgRequestDTagTransferEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgRequestDTagTransferEncodeObject {
  return (
    (encodeObject as MsgRequestDTagTransferEncodeObject).typeUrl ===
    MsgRequestDTagTransferTypeUrl
  );
}

export interface MsgCancelDTagTransferRequestEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v3.MsgCancelDTagTransferRequest";
  readonly value: MsgCancelDTagTransferRequest;
}

export function isMsgCancelDTagTransferRequestEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCancelDTagTransferRequestEncodeObject {
  return (
    (encodeObject as MsgCancelDTagTransferRequestEncodeObject).typeUrl ===
    MsgCancelDTagTransferRequestTypeUrl
  );
}

export interface MsgAcceptDTagTransferRequestEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest";
  readonly value: MsgAcceptDTagTransferRequest;
}

export function isMsgAcceptDTagTransferRequestEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAcceptDTagTransferRequestEncodeObject {
  return (
    MsgAcceptDTagTransferRequestTypeUrl ===
    (encodeObject as MsgAcceptDTagTransferRequestEncodeObject).typeUrl
  );
}

export interface MsgRefuseDTagTransferRequestEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest";
  readonly value: MsgRefuseDTagTransferRequest;
}

export function isMsgRefuseDTagTransferRequestEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgRefuseDTagTransferRequestEncodeObject {
  return (
    (encodeObject as MsgRefuseDTagTransferRequestEncodeObject).typeUrl ===
    MsgRefuseDTagTransferRequestTypeUrl
  );
}

export interface MsgSaveProfileEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v3.MsgSaveProfile";
  readonly value: MsgSaveProfile;
}

export function isMsgSaveProfileEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgSaveProfileEncodeObject {
  return (
    (encodeObject as MsgSaveProfileEncodeObject).typeUrl ===
    MsgSaveProfileTypeUrl
  );
}

export interface MsgDeleteProfileEncodeObject extends EncodeObject {
  typeUrl: "/desmos.profiles.v3.MsgDeleteProfile";
  readonly value: MsgDeleteProfile;
}

export function isMsgDeleteProfileEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteProfileEncodeObject {
  return (
    (encodeObject as MsgDeleteProfileEncodeObject).typeUrl ===
    MsgDeleteProfileTypeUrl
  );
}
