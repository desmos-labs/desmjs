/* eslint-disable */
import {
  MsgCreatePost,
  MsgEditPost,
  MsgDeletePost,
  MsgAddPostAttachment,
  MsgRemovePostAttachment,
  MsgAnswerPoll,
  MsgUpdateParams,
} from "./msgs";
export const AminoConverter = {
  "/desmos.posts.v3.MsgCreatePost": {
    aminoType: "/desmos.posts.v3.MsgCreatePost",
    toAmino: MsgCreatePost.toAmino,
    fromAmino: MsgCreatePost.fromAmino,
  },
  "/desmos.posts.v3.MsgEditPost": {
    aminoType: "/desmos.posts.v3.MsgEditPost",
    toAmino: MsgEditPost.toAmino,
    fromAmino: MsgEditPost.fromAmino,
  },
  "/desmos.posts.v3.MsgDeletePost": {
    aminoType: "/desmos.posts.v3.MsgDeletePost",
    toAmino: MsgDeletePost.toAmino,
    fromAmino: MsgDeletePost.fromAmino,
  },
  "/desmos.posts.v3.MsgAddPostAttachment": {
    aminoType: "/desmos.posts.v3.MsgAddPostAttachment",
    toAmino: MsgAddPostAttachment.toAmino,
    fromAmino: MsgAddPostAttachment.fromAmino,
  },
  "/desmos.posts.v3.MsgRemovePostAttachment": {
    aminoType: "/desmos.posts.v3.MsgRemovePostAttachment",
    toAmino: MsgRemovePostAttachment.toAmino,
    fromAmino: MsgRemovePostAttachment.fromAmino,
  },
  "/desmos.posts.v3.MsgAnswerPoll": {
    aminoType: "/desmos.posts.v3.MsgAnswerPoll",
    toAmino: MsgAnswerPoll.toAmino,
    fromAmino: MsgAnswerPoll.fromAmino,
  },
  "/desmos.posts.v3.MsgUpdateParams": {
    aminoType: "/desmos.posts.v3.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
};
