import {
  MsgAddPostAttachment,
  MsgAnswerPoll,
  MsgCreatePost,
  MsgDeletePost,
  MsgEditPost,
  MsgRemovePostAttachment,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/msgs";
import { EncodeObject } from "@cosmjs/proto-signing";

export interface MsgCreatePostEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.posts.v2.MsgCreatePost";
  readonly value: MsgCreatePost;
}

export function isMsgCreatePostEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreatePostEncodeObject {
  return (
    (encodeObject as MsgCreatePostEncodeObject).typeUrl ===
    "/desmos.posts.v2.MsgCreatePost"
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
    (encodeObject as MsgEditPostEncodeObject).typeUrl ===
    "/desmos.posts.v2.MsgEditPost"
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
    (encodeObject as MsgDeletePostEncodeObject).typeUrl ===
    "/desmos.posts.v2.MsgDeletePost"
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
    "/desmos.posts.v2.MsgAddPostAttachment"
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
    "/desmos.posts.v2.MsgRemovePostAttachment"
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
    (encodeObject as MsgAnswerPollEncodeObject).typeUrl ===
    "/desmos.posts.v2.MsgAnswerPoll"
  );
}
