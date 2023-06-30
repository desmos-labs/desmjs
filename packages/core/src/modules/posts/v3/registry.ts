import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgAddPostAttachment,
  MsgAnswerPoll,
  MsgCreatePost,
  MsgDeletePost,
  MsgEditPost,
  MsgRemovePostAttachment,
} from "@desmoslabs/desmjs-types/desmos/posts/v3/msgs";
import { Media, Poll } from "@desmoslabs/desmjs-types/desmos/posts/v3/models";
import {
  MediaTypeUrl,
  MsgAddPostAttachmentTypeUrl,
  MsgAnswerPollTypeUrl,
  MsgCreatePostTypeUrl,
  MsgDeletePostTypeUrl,
  MsgEditPostTypeUrl,
  MsgRemovePostAttachmentTypeUrl,
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
];
