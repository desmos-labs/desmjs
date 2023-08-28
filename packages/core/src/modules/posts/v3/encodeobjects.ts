import {
  MsgAcceptPostOwnerTransferRequest,
  MsgAddPostAttachment,
  MsgAnswerPoll,
  MsgCancelPostOwnerTransferRequest,
  MsgCreatePost,
  MsgDeletePost,
  MsgEditPost,
  MsgMovePost,
  MsgRefusePostOwnerTransferRequest,
  MsgRemovePostAttachment,
  MsgRequestPostOwnerTransfer,
} from "@desmoslabs/desmjs-types/desmos/posts/v3/msgs";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgAcceptPostOwnerTransferRequestTypeUrl,
  MsgAddPostAttachmentTypeUrl,
  MsgAnswerPollTypeUrl,
  MsgCancelPostOwnerTransferRequestTypeUrl,
  MsgCreatePostTypeUrl,
  MsgDeletePostTypeUrl,
  MsgEditPostTypeUrl,
  MsgMovePostTypeUrl,
  MsgRefusePostOwnerTransferRequestTypeUrl,
  MsgRemovePostAttachmentTypeUrl,
  MsgRequestPostOwnerTransferTypeUrl,
} from "./consts";

export interface MsgCreatePostEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgCreatePostTypeUrl;
  readonly value: MsgCreatePost;
}

export function isMsgCreatePostEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgCreatePostEncodeObject {
  return (
    (encodeObject as MsgCreatePostEncodeObject).typeUrl === MsgCreatePostTypeUrl
  );
}

export interface MsgEditPostEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgEditPostTypeUrl;
  readonly value: MsgEditPost;
}

export function isMsgEditPostEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgEditPostEncodeObject {
  return (
    (encodeObject as MsgEditPostEncodeObject).typeUrl === MsgEditPostTypeUrl
  );
}

export interface MsgDeletePostEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgDeletePostTypeUrl;
  readonly value: MsgDeletePost;
}

export function isMsgDeletePostEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgDeletePostEncodeObject {
  return (
    (encodeObject as MsgDeletePostEncodeObject).typeUrl === MsgDeletePostTypeUrl
  );
}

export interface MsgAddPostAttachmentEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgAddPostAttachmentTypeUrl;
  readonly value: MsgAddPostAttachment;
}

export function isMsgAddPostAttachmentEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgAddPostAttachmentEncodeObject {
  return (
    (encodeObject as MsgAddPostAttachmentEncodeObject).typeUrl ===
    MsgAddPostAttachmentTypeUrl
  );
}

export interface MsgRemovePostAttachmentEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgRemovePostAttachmentTypeUrl;
  readonly value: MsgRemovePostAttachment;
}

export function isMsgRemovePostAttachmentEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgRemovePostAttachmentEncodeObject {
  return (
    (encodeObject as MsgRemovePostAttachmentEncodeObject).typeUrl ===
    MsgRemovePostAttachmentTypeUrl
  );
}

export interface MsgAnswerPollEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgAnswerPollTypeUrl;
  readonly value: MsgAnswerPoll;
}

export function isMsgAnswerPollEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgAnswerPollEncodeObject {
  return (
    (encodeObject as MsgAnswerPollEncodeObject).typeUrl === MsgAnswerPollTypeUrl
  );
}

export interface MsgMovePostEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgMovePostTypeUrl;
  readonly value: MsgMovePost;
}

export function isMsgMovePostEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgMovePostEncodeObject {
  return encodeObject.typeUrl === MsgMovePostTypeUrl;
}

export interface MsgRequestPostOwnerTransferEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgRequestPostOwnerTransferTypeUrl;
  readonly value: MsgRequestPostOwnerTransfer;
}

export function isMsgRequestPostOwnerTransfer(
  encodeObject: EncodeObject,
): encodeObject is MsgRequestPostOwnerTransferEncodeObject {
  return encodeObject.typeUrl === MsgRequestPostOwnerTransferTypeUrl;
}

export interface MsgCancelPostOwnerTransferRequestEncodeObject
  extends EncodeObject {
  readonly typeUrl: typeof MsgCancelPostOwnerTransferRequestTypeUrl;
  readonly value: MsgCancelPostOwnerTransferRequest;
}

export function isMsgCancelPostOwnerTransferRequest(
  encodeObject: EncodeObject,
): encodeObject is MsgCancelPostOwnerTransferRequestEncodeObject {
  return encodeObject.typeUrl === MsgCancelPostOwnerTransferRequestTypeUrl;
}

export interface MsgAcceptPostOwnerTransferRequestEncodeObject
  extends EncodeObject {
  readonly typeUrl: typeof MsgAcceptPostOwnerTransferRequestTypeUrl;
  readonly value: MsgAcceptPostOwnerTransferRequest;
}

export function isMsgAcceptPostOwnerTransferRequest(
  encodeObject: EncodeObject,
): encodeObject is MsgAcceptPostOwnerTransferRequestEncodeObject {
  return encodeObject.typeUrl === MsgAcceptPostOwnerTransferRequestTypeUrl;
}

export interface MsgRefusePostOwnerTransferRequestEncodeObject
  extends EncodeObject {
  readonly typeUrl: typeof MsgRefusePostOwnerTransferRequestTypeUrl;
  readonly value: MsgRefusePostOwnerTransferRequest;
}

export function isMsgRefusePostOwnerTransferRequest(
  encodeObject: EncodeObject,
): encodeObject is MsgRefusePostOwnerTransferRequestEncodeObject {
  return encodeObject.typeUrl === MsgRefusePostOwnerTransferRequestTypeUrl;
}
