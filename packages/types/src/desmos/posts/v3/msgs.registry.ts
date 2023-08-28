/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
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
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.posts.v3.MsgCreatePost", MsgCreatePost],
  ["/desmos.posts.v3.MsgEditPost", MsgEditPost],
  ["/desmos.posts.v3.MsgDeletePost", MsgDeletePost],
  ["/desmos.posts.v3.MsgAddPostAttachment", MsgAddPostAttachment],
  ["/desmos.posts.v3.MsgRemovePostAttachment", MsgRemovePostAttachment],
  ["/desmos.posts.v3.MsgAnswerPoll", MsgAnswerPoll],
  ["/desmos.posts.v3.MsgUpdateParams", MsgUpdateParams],
  ["/desmos.posts.v3.MsgMovePost", MsgMovePost],
  ["/desmos.posts.v3.MsgRequestPostOwnerTransfer", MsgRequestPostOwnerTransfer],
  [
    "/desmos.posts.v3.MsgCancelPostOwnerTransferRequest",
    MsgCancelPostOwnerTransferRequest,
  ],
  [
    "/desmos.posts.v3.MsgAcceptPostOwnerTransferRequest",
    MsgAcceptPostOwnerTransferRequest,
  ],
  [
    "/desmos.posts.v3.MsgRefusePostOwnerTransferRequest",
    MsgRefusePostOwnerTransferRequest,
  ],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgCreatePost",
        value: MsgCreatePost.encode(value).finish(),
      };
    },
    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgEditPost",
        value: MsgEditPost.encode(value).finish(),
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgDeletePost",
        value: MsgDeletePost.encode(value).finish(),
      };
    },
    addPostAttachment(value: MsgAddPostAttachment) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAddPostAttachment",
        value: MsgAddPostAttachment.encode(value).finish(),
      };
    },
    removePostAttachment(value: MsgRemovePostAttachment) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRemovePostAttachment",
        value: MsgRemovePostAttachment.encode(value).finish(),
      };
    },
    answerPoll(value: MsgAnswerPoll) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAnswerPoll",
        value: MsgAnswerPoll.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.posts.v3.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
    movePost(value: MsgMovePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgMovePost",
        value: MsgMovePost.encode(value).finish(),
      };
    },
    requestPostOwnerTransfer(value: MsgRequestPostOwnerTransfer) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRequestPostOwnerTransfer",
        value: MsgRequestPostOwnerTransfer.encode(value).finish(),
      };
    },
    cancelPostOwnerTransferRequest(value: MsgCancelPostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgCancelPostOwnerTransferRequest",
        value: MsgCancelPostOwnerTransferRequest.encode(value).finish(),
      };
    },
    acceptPostOwnerTransferRequest(value: MsgAcceptPostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAcceptPostOwnerTransferRequest",
        value: MsgAcceptPostOwnerTransferRequest.encode(value).finish(),
      };
    },
    refusePostOwnerTransferRequest(value: MsgRefusePostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRefusePostOwnerTransferRequest",
        value: MsgRefusePostOwnerTransferRequest.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgCreatePost",
        value,
      };
    },
    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgEditPost",
        value,
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgDeletePost",
        value,
      };
    },
    addPostAttachment(value: MsgAddPostAttachment) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAddPostAttachment",
        value,
      };
    },
    removePostAttachment(value: MsgRemovePostAttachment) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRemovePostAttachment",
        value,
      };
    },
    answerPoll(value: MsgAnswerPoll) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAnswerPoll",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.posts.v3.MsgUpdateParams",
        value,
      };
    },
    movePost(value: MsgMovePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgMovePost",
        value,
      };
    },
    requestPostOwnerTransfer(value: MsgRequestPostOwnerTransfer) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRequestPostOwnerTransfer",
        value,
      };
    },
    cancelPostOwnerTransferRequest(value: MsgCancelPostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgCancelPostOwnerTransferRequest",
        value,
      };
    },
    acceptPostOwnerTransferRequest(value: MsgAcceptPostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAcceptPostOwnerTransferRequest",
        value,
      };
    },
    refusePostOwnerTransferRequest(value: MsgRefusePostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRefusePostOwnerTransferRequest",
        value,
      };
    },
  },
  toJSON: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgCreatePost",
        value: MsgCreatePost.toJSON(value),
      };
    },
    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgEditPost",
        value: MsgEditPost.toJSON(value),
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgDeletePost",
        value: MsgDeletePost.toJSON(value),
      };
    },
    addPostAttachment(value: MsgAddPostAttachment) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAddPostAttachment",
        value: MsgAddPostAttachment.toJSON(value),
      };
    },
    removePostAttachment(value: MsgRemovePostAttachment) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRemovePostAttachment",
        value: MsgRemovePostAttachment.toJSON(value),
      };
    },
    answerPoll(value: MsgAnswerPoll) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAnswerPoll",
        value: MsgAnswerPoll.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.posts.v3.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
    movePost(value: MsgMovePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgMovePost",
        value: MsgMovePost.toJSON(value),
      };
    },
    requestPostOwnerTransfer(value: MsgRequestPostOwnerTransfer) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRequestPostOwnerTransfer",
        value: MsgRequestPostOwnerTransfer.toJSON(value),
      };
    },
    cancelPostOwnerTransferRequest(value: MsgCancelPostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgCancelPostOwnerTransferRequest",
        value: MsgCancelPostOwnerTransferRequest.toJSON(value),
      };
    },
    acceptPostOwnerTransferRequest(value: MsgAcceptPostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAcceptPostOwnerTransferRequest",
        value: MsgAcceptPostOwnerTransferRequest.toJSON(value),
      };
    },
    refusePostOwnerTransferRequest(value: MsgRefusePostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRefusePostOwnerTransferRequest",
        value: MsgRefusePostOwnerTransferRequest.toJSON(value),
      };
    },
  },
  fromJSON: {
    createPost(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgCreatePost",
        value: MsgCreatePost.fromJSON(value),
      };
    },
    editPost(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgEditPost",
        value: MsgEditPost.fromJSON(value),
      };
    },
    deletePost(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgDeletePost",
        value: MsgDeletePost.fromJSON(value),
      };
    },
    addPostAttachment(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAddPostAttachment",
        value: MsgAddPostAttachment.fromJSON(value),
      };
    },
    removePostAttachment(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRemovePostAttachment",
        value: MsgRemovePostAttachment.fromJSON(value),
      };
    },
    answerPoll(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAnswerPoll",
        value: MsgAnswerPoll.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
    movePost(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgMovePost",
        value: MsgMovePost.fromJSON(value),
      };
    },
    requestPostOwnerTransfer(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRequestPostOwnerTransfer",
        value: MsgRequestPostOwnerTransfer.fromJSON(value),
      };
    },
    cancelPostOwnerTransferRequest(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgCancelPostOwnerTransferRequest",
        value: MsgCancelPostOwnerTransferRequest.fromJSON(value),
      };
    },
    acceptPostOwnerTransferRequest(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAcceptPostOwnerTransferRequest",
        value: MsgAcceptPostOwnerTransferRequest.fromJSON(value),
      };
    },
    refusePostOwnerTransferRequest(value: any) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRefusePostOwnerTransferRequest",
        value: MsgRefusePostOwnerTransferRequest.fromJSON(value),
      };
    },
  },
  fromPartial: {
    createPost(value: MsgCreatePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgCreatePost",
        value: MsgCreatePost.fromPartial(value),
      };
    },
    editPost(value: MsgEditPost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgEditPost",
        value: MsgEditPost.fromPartial(value),
      };
    },
    deletePost(value: MsgDeletePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgDeletePost",
        value: MsgDeletePost.fromPartial(value),
      };
    },
    addPostAttachment(value: MsgAddPostAttachment) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAddPostAttachment",
        value: MsgAddPostAttachment.fromPartial(value),
      };
    },
    removePostAttachment(value: MsgRemovePostAttachment) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRemovePostAttachment",
        value: MsgRemovePostAttachment.fromPartial(value),
      };
    },
    answerPoll(value: MsgAnswerPoll) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAnswerPoll",
        value: MsgAnswerPoll.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.posts.v3.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
    movePost(value: MsgMovePost) {
      return {
        typeUrl: "/desmos.posts.v3.MsgMovePost",
        value: MsgMovePost.fromPartial(value),
      };
    },
    requestPostOwnerTransfer(value: MsgRequestPostOwnerTransfer) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRequestPostOwnerTransfer",
        value: MsgRequestPostOwnerTransfer.fromPartial(value),
      };
    },
    cancelPostOwnerTransferRequest(value: MsgCancelPostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgCancelPostOwnerTransferRequest",
        value: MsgCancelPostOwnerTransferRequest.fromPartial(value),
      };
    },
    acceptPostOwnerTransferRequest(value: MsgAcceptPostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgAcceptPostOwnerTransferRequest",
        value: MsgAcceptPostOwnerTransferRequest.fromPartial(value),
      };
    },
    refusePostOwnerTransferRequest(value: MsgRefusePostOwnerTransferRequest) {
      return {
        typeUrl: "/desmos.posts.v3.MsgRefusePostOwnerTransferRequest",
        value: MsgRefusePostOwnerTransferRequest.fromPartial(value),
      };
    },
  },
};
