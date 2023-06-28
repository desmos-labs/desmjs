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
} from "./msgs";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.posts.v3.MsgCreatePost", MsgCreatePost],
  ["/desmos.posts.v3.MsgEditPost", MsgEditPost],
  ["/desmos.posts.v3.MsgDeletePost", MsgDeletePost],
  ["/desmos.posts.v3.MsgAddPostAttachment", MsgAddPostAttachment],
  ["/desmos.posts.v3.MsgRemovePostAttachment", MsgRemovePostAttachment],
  ["/desmos.posts.v3.MsgAnswerPoll", MsgAnswerPoll],
  ["/desmos.posts.v3.MsgUpdateParams", MsgUpdateParams],
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
  },
};
