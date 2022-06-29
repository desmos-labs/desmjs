import {
  MsgAddPostAttachment,
  MsgAnswerPoll,
  MsgCreatePost,
  MsgDeletePost,
  MsgEditPost,
  MsgRemovePostAttachment,
} from "@desmoslabs/desmjs-types/desmos/posts/v1/msgs";
import { EncodeObject } from "@cosmjs/proto-signing";

export interface MsgCreatePostEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v1.MsgCreatePost";
  readonly value: Partial<MsgCreatePost>;
}

export interface MsgEditPostEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v1.MsgEditPost";
  readonly value: Partial<MsgEditPost>;
}

export interface MsgDeletePostEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v1.MsgDeletePost";
  readonly value: Partial<MsgDeletePost>;
}

export interface MsgAddPostAttachmentEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v1.MsgAddPostAttachment";
  readonly value: Partial<MsgAddPostAttachment>;
}

export interface MsgRemovePostAttachmentEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v1.MsgRemovePostAttachment";
  readonly value: Partial<MsgRemovePostAttachment>;
}

export interface MsgAnswerPollEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v1.MsgAnswerPoll";
  readonly value: Partial<MsgAnswerPoll>;
}
