import {
  MsgAddPostAttachment,
  MsgAnswerPoll,
  MsgCreatePost,
  MsgDeletePost,
  MsgEditPost,
  MsgRemovePostAttachment,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/msgs";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgAddPostAttachmentTypeUrl,
  MsgAnswerPollTypeUrl,
  MsgCreatePostTypeUrl,
  MsgDeletePostTypeUrl,
  MsgEditPostTypeUrl,
  MsgRemovePostAttachmentTypeUrl,
} from "../const";

export interface MsgCreatePostEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v2.MsgCreatePost";
  readonly value: MsgCreatePost;
}

export function isMsgCreatePostEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreatePostEncodeObject {
  return (
    (encodeObject as MsgCreatePostEncodeObject).typeUrl === MsgCreatePostTypeUrl
  );
}

export interface MsgEditPostEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v2.MsgEditPost";
  readonly value: MsgEditPost;
}

export function isMsgEditPostEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgEditPostEncodeObject {
  return (
    (encodeObject as MsgEditPostEncodeObject).typeUrl === MsgEditPostTypeUrl
  );
}

export interface MsgDeletePostEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v2.MsgDeletePost";
  readonly value: MsgDeletePost;
}

export function isMsgDeletePostEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeletePostEncodeObject {
  return (
    (encodeObject as MsgDeletePostEncodeObject).typeUrl === MsgDeletePostTypeUrl
  );
}

export interface MsgAddPostAttachmentEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v2.MsgAddPostAttachment";
  readonly value: MsgAddPostAttachment;
}

export function isMsgAddPostAttachmentEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAddPostAttachmentEncodeObject {
  return (
    (encodeObject as MsgAddPostAttachmentEncodeObject).typeUrl ===
    MsgAddPostAttachmentTypeUrl
  );
}

export interface MsgRemovePostAttachmentEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v2.MsgRemovePostAttachment";
  readonly value: MsgRemovePostAttachment;
}

export function isMsgRemovePostAttachmentEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgRemovePostAttachmentEncodeObject {
  return (
    (encodeObject as MsgRemovePostAttachmentEncodeObject).typeUrl ===
    MsgRemovePostAttachmentTypeUrl
  );
}

export interface MsgAnswerPollEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v2.MsgAnswerPoll";
  readonly value: MsgAnswerPoll;
}

export function isMsgAnswerPollEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAnswerPollEncodeObject {
  return (
    (encodeObject as MsgAnswerPollEncodeObject).typeUrl === MsgAnswerPollTypeUrl
  );
}
