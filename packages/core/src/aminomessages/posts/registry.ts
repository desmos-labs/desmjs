import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgCreatePost,
  MsgEditPost,
  MsgDeletePost,
  MsgAddPostAttachment,
  MsgRemovePostAttachment,
  MsgAnswerPoll,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/msgs";
import {
  MsgAddPostAttachmentTypeUrl,
  MsgAnswerPollTypeUrl,
  MsgCreatePostTypeUrl,
  MsgDeletePostTypeUrl,
  MsgEditPostTypeUrl,
  MsgRemovePostAttachmentTypeUrl,
} from "../../const";

export const postsRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  [MsgCreatePostTypeUrl, MsgCreatePost],
  [MsgEditPostTypeUrl, MsgEditPost],
  [MsgDeletePostTypeUrl, MsgDeletePost],
  [MsgAddPostAttachmentTypeUrl, MsgAddPostAttachment],
  [MsgRemovePostAttachmentTypeUrl, MsgRemovePostAttachment],
  [MsgAnswerPollTypeUrl, MsgAnswerPoll],
];

export default postsRegistryTypes;
