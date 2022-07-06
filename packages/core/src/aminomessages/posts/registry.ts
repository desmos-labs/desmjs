import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgCreatePost,
  MsgEditPost,
  MsgDeletePost,
  MsgAddPostAttachment,
  MsgRemovePostAttachment,
  MsgAnswerPoll,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/msgs";

export const postsRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.posts.v2.MsgCreatePost", MsgCreatePost],
  ["/desmos.posts.v2.MsgEditPost", MsgEditPost],
  ["/desmos.posts.v2.MsgDeletePost", MsgDeletePost],
  ["/desmos.posts.v2.MsgAddPostAttachment", MsgAddPostAttachment],
  ["/desmos.posts.v2.MsgRemovePostAttachment", MsgRemovePostAttachment],
  ["/desmos.posts.v2.MsgAnswerPoll", MsgAnswerPoll],
];

export default postsRegistryTypes;
