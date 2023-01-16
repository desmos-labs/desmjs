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
  readonly typeUrl: typeof MsgCreatePostTypeUrl;
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
  readonly typeUrl: typeof MsgEditPostTypeUrl;
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
  readonly typeUrl: typeof MsgDeletePostTypeUrl;
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
  readonly typeUrl: typeof MsgAddPostAttachmentTypeUrl;
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
  readonly typeUrl: typeof MsgRemovePostAttachmentTypeUrl;
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
  readonly typeUrl: typeof MsgAnswerPollTypeUrl;
  readonly value: MsgAnswerPoll;
}

export function isMsgAnswerPollEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAnswerPollEncodeObject {
  return (
    (encodeObject as MsgAnswerPollEncodeObject).typeUrl === MsgAnswerPollTypeUrl
  );
}
