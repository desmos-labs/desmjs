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
} from "./consts";

export interface MsgLinkApplicationEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgLinkApplicationTypeUrl;
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
  readonly typeUrl: typeof MsgUnlinkApplicationTypeUrl;
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
  readonly typeUrl: typeof MsgLinkChainAccountTypeUrl;
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
  readonly typeUrl: typeof MsgUnlinkChainAccountTypeUrl;
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
  readonly typeUrl: typeof MsgRequestDTagTransferTypeUrl;
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
  readonly typeUrl: typeof MsgCancelDTagTransferRequestTypeUrl;
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
  readonly typeUrl: typeof MsgAcceptDTagTransferRequestTypeUrl;
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
  readonly typeUrl: typeof MsgRefuseDTagTransferRequestTypeUrl;
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
  readonly typeUrl: typeof MsgSaveProfileTypeUrl;
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
  readonly typeUrl: typeof MsgDeleteProfileTypeUrl;
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
