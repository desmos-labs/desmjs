/* eslint-disable */
import {
  MsgCreatePost,
  MsgEditPost,
  MsgDeletePost,
  MsgAddPostAttachment,
  MsgRemovePostAttachment,
  MsgAnswerPoll,
  MsgUpdateParams,
  MsgMovePost,
  MsgRequestPostOwnerTransfer,
  MsgCancelPostOwnerTransferRequest,
  MsgAcceptPostOwnerTransferRequest,
  MsgRefusePostOwnerTransferRequest,
} from "./msgs";
export const AminoConverter = {
  "/desmos.posts.v3.MsgCreatePost": {
    aminoType: "desmos/MsgCreatePost",
    toAmino: MsgCreatePost.toAmino,
    fromAmino: MsgCreatePost.fromAmino,
  },
  "/desmos.posts.v3.MsgEditPost": {
    aminoType: "desmos/MsgEditPost",
    toAmino: MsgEditPost.toAmino,
    fromAmino: MsgEditPost.fromAmino,
  },
  "/desmos.posts.v3.MsgDeletePost": {
    aminoType: "desmos/MsgDeletePost",
    toAmino: MsgDeletePost.toAmino,
    fromAmino: MsgDeletePost.fromAmino,
  },
  "/desmos.posts.v3.MsgAddPostAttachment": {
    aminoType: "desmos/MsgAddPostAttachment",
    toAmino: MsgAddPostAttachment.toAmino,
    fromAmino: MsgAddPostAttachment.fromAmino,
  },
  "/desmos.posts.v3.MsgRemovePostAttachment": {
    aminoType: "desmos/MsgRemovePostAttachment",
    toAmino: MsgRemovePostAttachment.toAmino,
    fromAmino: MsgRemovePostAttachment.fromAmino,
  },
  "/desmos.posts.v3.MsgAnswerPoll": {
    aminoType: "desmos/MsgAnswerPoll",
    toAmino: MsgAnswerPoll.toAmino,
    fromAmino: MsgAnswerPoll.fromAmino,
  },
  "/desmos.posts.v3.MsgUpdateParams": {
    aminoType: "desmos/x/posts/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/desmos.posts.v3.MsgMovePost": {
    aminoType: "desmos/MsgMovePost",
    toAmino: MsgMovePost.toAmino,
    fromAmino: MsgMovePost.fromAmino,
  },
  "/desmos.posts.v3.MsgRequestPostOwnerTransfer": {
    aminoType: "desmos/MsgRequestPostOwnerTransfer",
    toAmino: MsgRequestPostOwnerTransfer.toAmino,
    fromAmino: MsgRequestPostOwnerTransfer.fromAmino,
  },
  "/desmos.posts.v3.MsgCancelPostOwnerTransferRequest": {
    aminoType: "desmos/MsgCancelPostOwnerTransfer",
    toAmino: MsgCancelPostOwnerTransferRequest.toAmino,
    fromAmino: MsgCancelPostOwnerTransferRequest.fromAmino,
  },
  "/desmos.posts.v3.MsgAcceptPostOwnerTransferRequest": {
    aminoType: "desmos/MsgAcceptPostOwnerTransfer",
    toAmino: MsgAcceptPostOwnerTransferRequest.toAmino,
    fromAmino: MsgAcceptPostOwnerTransferRequest.fromAmino,
  },
  "/desmos.posts.v3.MsgRefusePostOwnerTransferRequest": {
    aminoType: "desmos/MsgRefusePostOwnerTransfer",
    toAmino: MsgRefusePostOwnerTransferRequest.toAmino,
    fromAmino: MsgRefusePostOwnerTransferRequest.fromAmino,
  },
};
