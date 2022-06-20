/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  CommentsState,
  Attribute,
  Attachment,
  commentsStateFromJSON,
  commentsStateToJSON,
} from "../../../desmos/posts/v1beta1/posts";
import { Poll } from "../../../desmos/posts/v1beta1/polls";

/** MsgCreatePost represents the message to be used to create a post. */
export interface MsgCreatePost {
  parentId: string;
  message: string;
  commentsState: CommentsState;
  subspace: string;
  additionalAttributes: Attribute[];
  creator: string;
  attachments: Attachment[];
  poll?: Poll;
}

/** MsgCreatePostResponse defines the Msg/CreatePost response type. */
export interface MsgCreatePostResponse {}

/** MsgEditPost represents the message used to edit a post. */
export interface MsgEditPost {
  postId: string;
  message: string;
  commentsState: CommentsState;
  attachments: Attachment[];
  poll?: Poll;
  editor: string;
}

/** MsgEditPostResponse defines the Msg/EditPost response type. */
export interface MsgEditPostResponse {}

/**
 * MsgAddPostReaction represents the message to be used to add a reaction to a
 * post
 */
export interface MsgAddPostReaction {
  postId: string;
  reaction: string;
  user: string;
}

/** MsgAddPostReactionResponse defines the Msg/AddReaction response type. */
export interface MsgAddPostReactionResponse {}

/**
 * MsgRemovePostReaction represents the message to be used when wanting to
 * remove an existing reaction from a specific user having a specific value
 */
export interface MsgRemovePostReaction {
  postId: string;
  reaction: string;
  user: string;
}

/**
 * MsgRemovePostReactionResponse defines the Msg/RemovePostReaction response
 * type.
 */
export interface MsgRemovePostReactionResponse {}

/** MsgAnswerPoll represents the message to be used when wanting to answer a poll */
export interface MsgAnswerPoll {
  postId: string;
  answers: string[];
  answerer: string;
}

/** MsgAnswerPollResponse defines the Msg/AnswerPoll response type. */
export interface MsgAnswerPollResponse {}

/**
 * MsgRegisterReaction represents the message that must be used when wanting
 * to register a new reaction shortCode and the associated value
 */
export interface MsgRegisterReaction {
  shortCode: string;
  value: string;
  subspace: string;
  creator: string;
}

/** MsgRegisterReactionResponse defines the Msg/RegisterReaction response type. */
export interface MsgRegisterReactionResponse {}

/** MsgReportPost represents a message to create a port report. */
export interface MsgReportPost {
  postId: string;
  reportType: string;
  message: string;
  user: string;
}

/** MsgReportPostResponse defines the Msg/ReportPost response type. */
export interface MsgReportPostResponse {}

function createBaseMsgCreatePost(): MsgCreatePost {
  return {
    parentId: "",
    message: "",
    commentsState: 0,
    subspace: "",
    additionalAttributes: [],
    creator: "",
    attachments: [],
    poll: undefined,
  };
}

export const MsgCreatePost = {
  encode(
    message: MsgCreatePost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parentId !== "") {
      writer.uint32(10).string(message.parentId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.commentsState !== 0) {
      writer.uint32(24).int32(message.commentsState);
    }
    if (message.subspace !== "") {
      writer.uint32(34).string(message.subspace);
    }
    for (const v of message.additionalAttributes) {
      Attribute.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.poll !== undefined) {
      Poll.encode(message.poll, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parentId = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.commentsState = reader.int32() as any;
          break;
        case 4:
          message.subspace = reader.string();
          break;
        case 5:
          message.additionalAttributes.push(
            Attribute.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 7:
          message.attachments.push(Attachment.decode(reader, reader.uint32()));
          break;
        case 8:
          message.poll = Poll.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    return {
      parentId: isSet(object.parentId) ? String(object.parentId) : "",
      message: isSet(object.message) ? String(object.message) : "",
      commentsState: isSet(object.commentsState)
        ? commentsStateFromJSON(object.commentsState)
        : 0,
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      additionalAttributes: Array.isArray(object?.additionalAttributes)
        ? object.additionalAttributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      creator: isSet(object.creator) ? String(object.creator) : "",
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Attachment.fromJSON(e))
        : [],
      poll: isSet(object.poll) ? Poll.fromJSON(object.poll) : undefined,
    };
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.message !== undefined && (obj.message = message.message);
    message.commentsState !== undefined &&
      (obj.commentsState = commentsStateToJSON(message.commentsState));
    message.subspace !== undefined && (obj.subspace = message.subspace);
    if (message.additionalAttributes) {
      obj.additionalAttributes = message.additionalAttributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.additionalAttributes = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Attachment.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    message.poll !== undefined &&
      (obj.poll = message.poll ? Poll.toJSON(message.poll) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePost>, I>>(
    object: I
  ): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    message.parentId = object.parentId ?? "";
    message.message = object.message ?? "";
    message.commentsState = object.commentsState ?? 0;
    message.subspace = object.subspace ?? "";
    message.additionalAttributes =
      object.additionalAttributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.creator = object.creator ?? "";
    message.attachments =
      object.attachments?.map((e) => Attachment.fromPartial(e)) || [];
    message.poll =
      object.poll !== undefined && object.poll !== null
        ? Poll.fromPartial(object.poll)
        : undefined;
    return message;
  },
};

function createBaseMsgCreatePostResponse(): MsgCreatePostResponse {
  return {};
}

export const MsgCreatePostResponse = {
  encode(
    _: MsgCreatePostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePostResponse {
    return {};
  },

  toJSON(_: MsgCreatePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePostResponse>, I>>(
    _: I
  ): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    return message;
  },
};

function createBaseMsgEditPost(): MsgEditPost {
  return {
    postId: "",
    message: "",
    commentsState: 0,
    attachments: [],
    poll: undefined,
    editor: "",
  };
}

export const MsgEditPost = {
  encode(
    message: MsgEditPost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.commentsState !== 0) {
      writer.uint32(24).int32(message.commentsState);
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.poll !== undefined) {
      Poll.encode(message.poll, writer.uint32(42).fork()).ldelim();
    }
    if (message.editor !== "") {
      writer.uint32(50).string(message.editor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.commentsState = reader.int32() as any;
          break;
        case 4:
          message.attachments.push(Attachment.decode(reader, reader.uint32()));
          break;
        case 5:
          message.poll = Poll.decode(reader, reader.uint32());
          break;
        case 6:
          message.editor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditPost {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      message: isSet(object.message) ? String(object.message) : "",
      commentsState: isSet(object.commentsState)
        ? commentsStateFromJSON(object.commentsState)
        : 0,
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Attachment.fromJSON(e))
        : [],
      poll: isSet(object.poll) ? Poll.fromJSON(object.poll) : undefined,
      editor: isSet(object.editor) ? String(object.editor) : "",
    };
  },

  toJSON(message: MsgEditPost): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.message !== undefined && (obj.message = message.message);
    message.commentsState !== undefined &&
      (obj.commentsState = commentsStateToJSON(message.commentsState));
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Attachment.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    message.poll !== undefined &&
      (obj.poll = message.poll ? Poll.toJSON(message.poll) : undefined);
    message.editor !== undefined && (obj.editor = message.editor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditPost>, I>>(
    object: I
  ): MsgEditPost {
    const message = createBaseMsgEditPost();
    message.postId = object.postId ?? "";
    message.message = object.message ?? "";
    message.commentsState = object.commentsState ?? 0;
    message.attachments =
      object.attachments?.map((e) => Attachment.fromPartial(e)) || [];
    message.poll =
      object.poll !== undefined && object.poll !== null
        ? Poll.fromPartial(object.poll)
        : undefined;
    message.editor = object.editor ?? "";
    return message;
  },
};

function createBaseMsgEditPostResponse(): MsgEditPostResponse {
  return {};
}

export const MsgEditPostResponse = {
  encode(
    _: MsgEditPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEditPostResponse {
    return {};
  },

  toJSON(_: MsgEditPostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditPostResponse>, I>>(
    _: I
  ): MsgEditPostResponse {
    const message = createBaseMsgEditPostResponse();
    return message;
  },
};

function createBaseMsgAddPostReaction(): MsgAddPostReaction {
  return { postId: "", reaction: "", user: "" };
}

export const MsgAddPostReaction = {
  encode(
    message: MsgAddPostReaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.reaction !== "") {
      writer.uint32(18).string(message.reaction);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPostReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPostReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        case 2:
          message.reaction = reader.string();
          break;
        case 3:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPostReaction {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      reaction: isSet(object.reaction) ? String(object.reaction) : "",
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: MsgAddPostReaction): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.reaction !== undefined && (obj.reaction = message.reaction);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddPostReaction>, I>>(
    object: I
  ): MsgAddPostReaction {
    const message = createBaseMsgAddPostReaction();
    message.postId = object.postId ?? "";
    message.reaction = object.reaction ?? "";
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseMsgAddPostReactionResponse(): MsgAddPostReactionResponse {
  return {};
}

export const MsgAddPostReactionResponse = {
  encode(
    _: MsgAddPostReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddPostReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPostReactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddPostReactionResponse {
    return {};
  },

  toJSON(_: MsgAddPostReactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddPostReactionResponse>, I>>(
    _: I
  ): MsgAddPostReactionResponse {
    const message = createBaseMsgAddPostReactionResponse();
    return message;
  },
};

function createBaseMsgRemovePostReaction(): MsgRemovePostReaction {
  return { postId: "", reaction: "", user: "" };
}

export const MsgRemovePostReaction = {
  encode(
    message: MsgRemovePostReaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.reaction !== "") {
      writer.uint32(18).string(message.reaction);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemovePostReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePostReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        case 2:
          message.reaction = reader.string();
          break;
        case 3:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemovePostReaction {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      reaction: isSet(object.reaction) ? String(object.reaction) : "",
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: MsgRemovePostReaction): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.reaction !== undefined && (obj.reaction = message.reaction);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemovePostReaction>, I>>(
    object: I
  ): MsgRemovePostReaction {
    const message = createBaseMsgRemovePostReaction();
    message.postId = object.postId ?? "";
    message.reaction = object.reaction ?? "";
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseMsgRemovePostReactionResponse(): MsgRemovePostReactionResponse {
  return {};
}

export const MsgRemovePostReactionResponse = {
  encode(
    _: MsgRemovePostReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemovePostReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePostReactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRemovePostReactionResponse {
    return {};
  },

  toJSON(_: MsgRemovePostReactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemovePostReactionResponse>, I>>(
    _: I
  ): MsgRemovePostReactionResponse {
    const message = createBaseMsgRemovePostReactionResponse();
    return message;
  },
};

function createBaseMsgAnswerPoll(): MsgAnswerPoll {
  return { postId: "", answers: [], answerer: "" };
}

export const MsgAnswerPoll = {
  encode(
    message: MsgAnswerPoll,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    for (const v of message.answers) {
      writer.uint32(18).string(v!);
    }
    if (message.answerer !== "") {
      writer.uint32(26).string(message.answerer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnswerPoll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnswerPoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        case 2:
          message.answers.push(reader.string());
          break;
        case 3:
          message.answerer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAnswerPoll {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      answers: Array.isArray(object?.answers)
        ? object.answers.map((e: any) => String(e))
        : [],
      answerer: isSet(object.answerer) ? String(object.answerer) : "",
    };
  },

  toJSON(message: MsgAnswerPoll): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    if (message.answers) {
      obj.answers = message.answers.map((e) => e);
    } else {
      obj.answers = [];
    }
    message.answerer !== undefined && (obj.answerer = message.answerer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnswerPoll>, I>>(
    object: I
  ): MsgAnswerPoll {
    const message = createBaseMsgAnswerPoll();
    message.postId = object.postId ?? "";
    message.answers = object.answers?.map((e) => e) || [];
    message.answerer = object.answerer ?? "";
    return message;
  },
};

function createBaseMsgAnswerPollResponse(): MsgAnswerPollResponse {
  return {};
}

export const MsgAnswerPollResponse = {
  encode(
    _: MsgAnswerPollResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAnswerPollResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnswerPollResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAnswerPollResponse {
    return {};
  },

  toJSON(_: MsgAnswerPollResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnswerPollResponse>, I>>(
    _: I
  ): MsgAnswerPollResponse {
    const message = createBaseMsgAnswerPollResponse();
    return message;
  },
};

function createBaseMsgRegisterReaction(): MsgRegisterReaction {
  return { shortCode: "", value: "", subspace: "", creator: "" };
}

export const MsgRegisterReaction = {
  encode(
    message: MsgRegisterReaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.shortCode !== "") {
      writer.uint32(10).string(message.shortCode);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.subspace !== "") {
      writer.uint32(26).string(message.subspace);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shortCode = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.subspace = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterReaction {
    return {
      shortCode: isSet(object.shortCode) ? String(object.shortCode) : "",
      value: isSet(object.value) ? String(object.value) : "",
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgRegisterReaction): unknown {
    const obj: any = {};
    message.shortCode !== undefined && (obj.shortCode = message.shortCode);
    message.value !== undefined && (obj.value = message.value);
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterReaction>, I>>(
    object: I
  ): MsgRegisterReaction {
    const message = createBaseMsgRegisterReaction();
    message.shortCode = object.shortCode ?? "";
    message.value = object.value ?? "";
    message.subspace = object.subspace ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgRegisterReactionResponse(): MsgRegisterReactionResponse {
  return {};
}

export const MsgRegisterReactionResponse = {
  encode(
    _: MsgRegisterReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterReactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterReactionResponse {
    return {};
  },

  toJSON(_: MsgRegisterReactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterReactionResponse>, I>>(
    _: I
  ): MsgRegisterReactionResponse {
    const message = createBaseMsgRegisterReactionResponse();
    return message;
  },
};

function createBaseMsgReportPost(): MsgReportPost {
  return { postId: "", reportType: "", message: "", user: "" };
}

export const MsgReportPost = {
  encode(
    message: MsgReportPost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.reportType !== "") {
      writer.uint32(18).string(message.reportType);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReportPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportPost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        case 2:
          message.reportType = reader.string();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReportPost {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      reportType: isSet(object.reportType) ? String(object.reportType) : "",
      message: isSet(object.message) ? String(object.message) : "",
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: MsgReportPost): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.reportType !== undefined && (obj.reportType = message.reportType);
    message.message !== undefined && (obj.message = message.message);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReportPost>, I>>(
    object: I
  ): MsgReportPost {
    const message = createBaseMsgReportPost();
    message.postId = object.postId ?? "";
    message.reportType = object.reportType ?? "";
    message.message = object.message ?? "";
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseMsgReportPostResponse(): MsgReportPostResponse {
  return {};
}

export const MsgReportPostResponse = {
  encode(
    _: MsgReportPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgReportPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgReportPostResponse {
    return {};
  },

  toJSON(_: MsgReportPostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReportPostResponse>, I>>(
    _: I
  ): MsgReportPostResponse {
    const message = createBaseMsgReportPostResponse();
    return message;
  },
};

/** Msg defines the relationships Msg service. */
export interface Msg {
  /** CreatePost defines the method to create a post */
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  /** EditPost defines the method to edit an existing post */
  EditPost(request: MsgEditPost): Promise<MsgEditPostResponse>;
  /** ReportPost defines a method for creating a new post report */
  ReportPost(request: MsgReportPost): Promise<MsgReportPostResponse>;
  /** AddReaction defines the method to add a reaction to a post */
  AddPostReaction(
    request: MsgAddPostReaction
  ): Promise<MsgAddPostReactionResponse>;
  /** RemoveReaction defines the method to remove a reaction from a post */
  RemovePostReaction(
    request: MsgRemovePostReaction
  ): Promise<MsgRemovePostReactionResponse>;
  /** RegisterReaction defines the method to register a new reaction */
  RegisterReaction(
    request: MsgRegisterReaction
  ): Promise<MsgRegisterReactionResponse>;
  /** AnswerPoll defines the method to answer a poll */
  AnswerPoll(request: MsgAnswerPoll): Promise<MsgAnswerPollResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePost = this.CreatePost.bind(this);
    this.EditPost = this.EditPost.bind(this);
    this.ReportPost = this.ReportPost.bind(this);
    this.AddPostReaction = this.AddPostReaction.bind(this);
    this.RemovePostReaction = this.RemovePostReaction.bind(this);
    this.RegisterReaction = this.RegisterReaction.bind(this);
    this.AnswerPoll = this.AnswerPoll.bind(this);
  }
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Msg",
      "CreatePost",
      data
    );
    return promise.then((data) =>
      MsgCreatePostResponse.decode(new _m0.Reader(data))
    );
  }

  EditPost(request: MsgEditPost): Promise<MsgEditPostResponse> {
    const data = MsgEditPost.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Msg",
      "EditPost",
      data
    );
    return promise.then((data) =>
      MsgEditPostResponse.decode(new _m0.Reader(data))
    );
  }

  ReportPost(request: MsgReportPost): Promise<MsgReportPostResponse> {
    const data = MsgReportPost.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Msg",
      "ReportPost",
      data
    );
    return promise.then((data) =>
      MsgReportPostResponse.decode(new _m0.Reader(data))
    );
  }

  AddPostReaction(
    request: MsgAddPostReaction
  ): Promise<MsgAddPostReactionResponse> {
    const data = MsgAddPostReaction.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Msg",
      "AddPostReaction",
      data
    );
    return promise.then((data) =>
      MsgAddPostReactionResponse.decode(new _m0.Reader(data))
    );
  }

  RemovePostReaction(
    request: MsgRemovePostReaction
  ): Promise<MsgRemovePostReactionResponse> {
    const data = MsgRemovePostReaction.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Msg",
      "RemovePostReaction",
      data
    );
    return promise.then((data) =>
      MsgRemovePostReactionResponse.decode(new _m0.Reader(data))
    );
  }

  RegisterReaction(
    request: MsgRegisterReaction
  ): Promise<MsgRegisterReactionResponse> {
    const data = MsgRegisterReaction.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Msg",
      "RegisterReaction",
      data
    );
    return promise.then((data) =>
      MsgRegisterReactionResponse.decode(new _m0.Reader(data))
    );
  }

  AnswerPoll(request: MsgAnswerPoll): Promise<MsgAnswerPollResponse> {
    const data = MsgAnswerPoll.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Msg",
      "AnswerPoll",
      data
    );
    return promise.then((data) =>
      MsgAnswerPollResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
