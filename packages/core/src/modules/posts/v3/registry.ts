import { GeneratedType } from "@cosmjs/proto-signing";
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
import { Media, Poll } from "@desmoslabs/desmjs-types/desmos/posts/v3/models";
import {
  MediaTypeUrl,
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
  PollTypeUrl,
} from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  // Types
  [PollTypeUrl, Poll],
  [MediaTypeUrl, Media],
  // Messages
  [MsgCreatePostTypeUrl, MsgCreatePost],
  [MsgEditPostTypeUrl, MsgEditPost],
  [MsgDeletePostTypeUrl, MsgDeletePost],
  [MsgAddPostAttachmentTypeUrl, MsgAddPostAttachment],
  [MsgRemovePostAttachmentTypeUrl, MsgRemovePostAttachment],
  [MsgAnswerPollTypeUrl, MsgAnswerPoll],
  [MsgMovePostTypeUrl, MsgMovePost],
  [MsgRequestPostOwnerTransferTypeUrl, MsgRequestPostOwnerTransfer],
  [MsgCancelPostOwnerTransferRequestTypeUrl, MsgCancelPostOwnerTransferRequest],
  [MsgAcceptPostOwnerTransferRequestTypeUrl, MsgAcceptPostOwnerTransferRequest],
  [MsgRefusePostOwnerTransferRequestTypeUrl, MsgRefusePostOwnerTransferRequest],
];
