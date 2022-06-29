import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgCreatePost,
  MsgEditPost,
  MsgDeletePost,
  MsgAddPostAttachment,
  MsgRemovePostAttachment,
  MsgAnswerPoll,
} from "@desmoslabs/desmjs-types/desmos/posts/v1/msgs";

export const postsRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.posts.v1.MsgCreatePost", MsgCreatePost],
  ["/desmos.posts.v1.MsgEditPost", MsgEditPost],
  ["/desmos.posts.v1.MsgDeletePost", MsgDeletePost],
  ["/desmos.posts.v1.MsgAddPostAttachment", MsgAddPostAttachment],
  ["/desmos.posts.v1.MsgRemovePostAttachment", MsgRemovePostAttachment],
  ["/desmos.posts.v1.MsgAnswerPoll", MsgAnswerPoll],
];

export default postsRegistryTypes;
