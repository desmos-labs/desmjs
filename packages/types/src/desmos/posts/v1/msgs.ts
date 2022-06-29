/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Entities,
  ReplySetting,
  PostReference,
  replySettingFromJSON,
  replySettingToJSON,
} from "../../../desmos/posts/v1/models";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";

/** MsgCreatePost represents the message to be used to create a post. */
export interface MsgCreatePost {
  /** Id of the subspace inside which the post must be created */
  subspaceId: Long;
  /** Id of the section inside which the post must be created */
  sectionId: number;
  /** (optional) External id for this post */
  externalId: string;
  /** (optional) Text of the post */
  text: string;
  /** (optional) Entities connected to this post */
  entities?: Entities;
  /** Attachments of the post */
  attachments: Any[];
  /** Author of the post */
  author: string;
  /** (optional) Id of the original post of the conversation */
  conversationId: Long;
  /** Reply settings of this post */
  replySettings: ReplySetting;
  /** A list this posts references (either as a reply, repost or quote) */
  referencedPosts: PostReference[];
}

/** MsgCreatePostResponse defines the Msg/CreatePost response type. */
export interface MsgCreatePostResponse {
  /** Id of the newly created post */
  postId: Long;
  /** Creation date of the post */
  creationDate?: Date;
}

/** MsgEditPost represents the message to be used to edit a post. */
export interface MsgEditPost {
  /** Id of the subspace inside which the post is */
  subspaceId: Long;
  /** Id of the post to edit */
  postId: Long;
  /**
   * New text of the post. If set to [do-not-modify] it will change the current
   * post's text.
   */
  text: string;
  /**
   * New entities connected to this post. These will always replace the current
   * post's entities
   */
  entities?: Entities;
  /** Editor of the post */
  editor: string;
}

/** MsgCreatePostResponse defines the Msg/EditPost response type. */
export interface MsgEditPostResponse {
  /** Edit date of the post */
  editDate?: Date;
}

/** MsgDeletePost represents the message used when deleting a post. */
export interface MsgDeletePost {
  /** Id of the subspace containing the post */
  subspaceId: Long;
  /** Id of the post to be deleted */
  postId: Long;
  /** User that is deleting the post */
  signer: string;
}

/** MsgDeletePostResponse represents the Msg/DeletePost response type */
export interface MsgDeletePostResponse {}

/**
 * MsgAddPostAttachment represents the message that should be
 * used when adding an attachment to post
 */
export interface MsgAddPostAttachment {
  /** Id of the subspace containing the post */
  subspaceId: Long;
  /** Id of the post to which to add the attachment */
  postId: Long;
  /** Content of the attachment */
  content?: Any;
  /** Editor of the post */
  editor: string;
}

/** MsgAddPostAttachmentResponse defines the Msg/AddPostAttachment response type. */
export interface MsgAddPostAttachmentResponse {
  /** New id of the uploaded attachment */
  attachmentId: number;
  /** Edit date of the post */
  editDate?: Date;
}

/**
 * MsgRemovePostAttachment represents the message to be used when
 * removing an attachment from a post
 */
export interface MsgRemovePostAttachment {
  /** Id of the subspace containing the post */
  subspaceId: Long;
  /** Id of the post from which to remove the attachment */
  postId: Long;
  /** Id of the attachment to be removed */
  attachmentId: number;
  /** User that is removing the attachment */
  editor: string;
}

/**
 * MsgRemovePostAttachmentResponse defines the
 * Msg/RemovePostAttachment response type.
 */
export interface MsgRemovePostAttachmentResponse {
  /** Edit date of the post */
  editDate?: Date;
}

/** MsgAnswerPoll represents the message used to answer a poll */
export interface MsgAnswerPoll {
  /** Id of the subspace containing the post */
  subspaceId: Long;
  /** Id of the post that contains the poll to be answered */
  postId: Long;
  /** Id of the poll to be answered */
  pollId: number;
  /** Indexes of the answer inside the ProvidedAnswers array */
  answersIndexes: number[];
  /** Address of the user answering the poll */
  signer: string;
}

/** MsgAnswerPollResponse represents the MSg/AnswerPoll response type */
export interface MsgAnswerPollResponse {}

function createBaseMsgCreatePost(): MsgCreatePost {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    externalId: "",
    text: "",
    entities: undefined,
    attachments: [],
    author: "",
    conversationId: Long.UZERO,
    replySettings: 0,
    referencedPosts: [],
  };
}

export const MsgCreatePost = {
  encode(
    message: MsgCreatePost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (message.externalId !== "") {
      writer.uint32(26).string(message.externalId);
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    if (message.entities !== undefined) {
      Entities.encode(message.entities, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.attachments) {
      Any.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.author !== "") {
      writer.uint32(58).string(message.author);
    }
    if (!message.conversationId.isZero()) {
      writer.uint32(64).uint64(message.conversationId);
    }
    if (message.replySettings !== 0) {
      writer.uint32(72).int32(message.replySettings);
    }
    for (const v of message.referencedPosts) {
      PostReference.encode(v!, writer.uint32(82).fork()).ldelim();
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
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.sectionId = reader.uint32();
          break;
        case 3:
          message.externalId = reader.string();
          break;
        case 4:
          message.text = reader.string();
          break;
        case 5:
          message.entities = Entities.decode(reader, reader.uint32());
          break;
        case 6:
          message.attachments.push(Any.decode(reader, reader.uint32()));
          break;
        case 7:
          message.author = reader.string();
          break;
        case 8:
          message.conversationId = reader.uint64() as Long;
          break;
        case 9:
          message.replySettings = reader.int32() as any;
          break;
        case 10:
          message.referencedPosts.push(
            PostReference.decode(reader, reader.uint32())
          );
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
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      externalId: isSet(object.externalId) ? String(object.externalId) : "",
      text: isSet(object.text) ? String(object.text) : "",
      entities: isSet(object.entities)
        ? Entities.fromJSON(object.entities)
        : undefined,
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Any.fromJSON(e))
        : [],
      author: isSet(object.author) ? String(object.author) : "",
      conversationId: isSet(object.conversationId)
        ? Long.fromString(object.conversationId)
        : Long.UZERO,
      replySettings: isSet(object.replySettings)
        ? replySettingFromJSON(object.replySettings)
        : 0,
      referencedPosts: Array.isArray(object?.referencedPosts)
        ? object.referencedPosts.map((e: any) => PostReference.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    message.externalId !== undefined && (obj.externalId = message.externalId);
    message.text !== undefined && (obj.text = message.text);
    message.entities !== undefined &&
      (obj.entities = message.entities
        ? Entities.toJSON(message.entities)
        : undefined);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    message.author !== undefined && (obj.author = message.author);
    message.conversationId !== undefined &&
      (obj.conversationId = (message.conversationId || Long.UZERO).toString());
    message.replySettings !== undefined &&
      (obj.replySettings = replySettingToJSON(message.replySettings));
    if (message.referencedPosts) {
      obj.referencedPosts = message.referencedPosts.map((e) =>
        e ? PostReference.toJSON(e) : undefined
      );
    } else {
      obj.referencedPosts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePost>, I>>(
    object: I
  ): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.externalId = object.externalId ?? "";
    message.text = object.text ?? "";
    message.entities =
      object.entities !== undefined && object.entities !== null
        ? Entities.fromPartial(object.entities)
        : undefined;
    message.attachments =
      object.attachments?.map((e) => Any.fromPartial(e)) || [];
    message.author = object.author ?? "";
    message.conversationId =
      object.conversationId !== undefined && object.conversationId !== null
        ? Long.fromValue(object.conversationId)
        : Long.UZERO;
    message.replySettings = object.replySettings ?? 0;
    message.referencedPosts =
      object.referencedPosts?.map((e) => PostReference.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreatePostResponse(): MsgCreatePostResponse {
  return { postId: Long.UZERO, creationDate: undefined };
}

export const MsgCreatePostResponse = {
  encode(
    message: MsgCreatePostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.postId.isZero()) {
      writer.uint32(8).uint64(message.postId);
    }
    if (message.creationDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.creationDate),
        writer.uint32(18).fork()
      ).ldelim();
    }
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
        case 1:
          message.postId = reader.uint64() as Long;
          break;
        case 2:
          message.creationDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePostResponse {
    return {
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
      creationDate: isSet(object.creationDate)
        ? fromJsonTimestamp(object.creationDate)
        : undefined,
    };
  },

  toJSON(message: MsgCreatePostResponse): unknown {
    const obj: any = {};
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.creationDate !== undefined &&
      (obj.creationDate = message.creationDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePostResponse>, I>>(
    object: I
  ): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.creationDate = object.creationDate ?? undefined;
    return message;
  },
};

function createBaseMsgEditPost(): MsgEditPost {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    text: "",
    entities: undefined,
    editor: "",
  };
}

export const MsgEditPost = {
  encode(
    message: MsgEditPost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.text !== "") {
      writer.uint32(26).string(message.text);
    }
    if (message.entities !== undefined) {
      Entities.encode(message.entities, writer.uint32(34).fork()).ldelim();
    }
    if (message.editor !== "") {
      writer.uint32(42).string(message.editor);
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
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.postId = reader.uint64() as Long;
          break;
        case 3:
          message.text = reader.string();
          break;
        case 4:
          message.entities = Entities.decode(reader, reader.uint32());
          break;
        case 5:
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
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
      text: isSet(object.text) ? String(object.text) : "",
      entities: isSet(object.entities)
        ? Entities.fromJSON(object.entities)
        : undefined,
      editor: isSet(object.editor) ? String(object.editor) : "",
    };
  },

  toJSON(message: MsgEditPost): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.text !== undefined && (obj.text = message.text);
    message.entities !== undefined &&
      (obj.entities = message.entities
        ? Entities.toJSON(message.entities)
        : undefined);
    message.editor !== undefined && (obj.editor = message.editor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditPost>, I>>(
    object: I
  ): MsgEditPost {
    const message = createBaseMsgEditPost();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.text = object.text ?? "";
    message.entities =
      object.entities !== undefined && object.entities !== null
        ? Entities.fromPartial(object.entities)
        : undefined;
    message.editor = object.editor ?? "";
    return message;
  },
};

function createBaseMsgEditPostResponse(): MsgEditPostResponse {
  return { editDate: undefined };
}

export const MsgEditPostResponse = {
  encode(
    message: MsgEditPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.editDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.editDate),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.editDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditPostResponse {
    return {
      editDate: isSet(object.editDate)
        ? fromJsonTimestamp(object.editDate)
        : undefined,
    };
  },

  toJSON(message: MsgEditPostResponse): unknown {
    const obj: any = {};
    message.editDate !== undefined &&
      (obj.editDate = message.editDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditPostResponse>, I>>(
    object: I
  ): MsgEditPostResponse {
    const message = createBaseMsgEditPostResponse();
    message.editDate = object.editDate ?? undefined;
    return message;
  },
};

function createBaseMsgDeletePost(): MsgDeletePost {
  return { subspaceId: Long.UZERO, postId: Long.UZERO, signer: "" };
}

export const MsgDeletePost = {
  encode(
    message: MsgDeletePost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.postId = reader.uint64() as Long;
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePost {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgDeletePost): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePost>, I>>(
    object: I
  ): MsgDeletePost {
    const message = createBaseMsgDeletePost();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
};

function createBaseMsgDeletePostResponse(): MsgDeletePostResponse {
  return {};
}

export const MsgDeletePostResponse = {
  encode(
    _: MsgDeletePostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeletePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePostResponse();
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

  fromJSON(_: any): MsgDeletePostResponse {
    return {};
  },

  toJSON(_: MsgDeletePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePostResponse>, I>>(
    _: I
  ): MsgDeletePostResponse {
    const message = createBaseMsgDeletePostResponse();
    return message;
  },
};

function createBaseMsgAddPostAttachment(): MsgAddPostAttachment {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    content: undefined,
    editor: "",
  };
}

export const MsgAddPostAttachment = {
  encode(
    message: MsgAddPostAttachment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(26).fork()).ldelim();
    }
    if (message.editor !== "") {
      writer.uint32(34).string(message.editor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddPostAttachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPostAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.postId = reader.uint64() as Long;
          break;
        case 3:
          message.content = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.editor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPostAttachment {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      editor: isSet(object.editor) ? String(object.editor) : "",
    };
  },

  toJSON(message: MsgAddPostAttachment): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.content !== undefined &&
      (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    message.editor !== undefined && (obj.editor = message.editor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddPostAttachment>, I>>(
    object: I
  ): MsgAddPostAttachment {
    const message = createBaseMsgAddPostAttachment();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.content =
      object.content !== undefined && object.content !== null
        ? Any.fromPartial(object.content)
        : undefined;
    message.editor = object.editor ?? "";
    return message;
  },
};

function createBaseMsgAddPostAttachmentResponse(): MsgAddPostAttachmentResponse {
  return { attachmentId: 0, editDate: undefined };
}

export const MsgAddPostAttachmentResponse = {
  encode(
    message: MsgAddPostAttachmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.attachmentId !== 0) {
      writer.uint32(8).uint32(message.attachmentId);
    }
    if (message.editDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.editDate),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddPostAttachmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPostAttachmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attachmentId = reader.uint32();
          break;
        case 2:
          message.editDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPostAttachmentResponse {
    return {
      attachmentId: isSet(object.attachmentId)
        ? Number(object.attachmentId)
        : 0,
      editDate: isSet(object.editDate)
        ? fromJsonTimestamp(object.editDate)
        : undefined,
    };
  },

  toJSON(message: MsgAddPostAttachmentResponse): unknown {
    const obj: any = {};
    message.attachmentId !== undefined &&
      (obj.attachmentId = Math.round(message.attachmentId));
    message.editDate !== undefined &&
      (obj.editDate = message.editDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddPostAttachmentResponse>, I>>(
    object: I
  ): MsgAddPostAttachmentResponse {
    const message = createBaseMsgAddPostAttachmentResponse();
    message.attachmentId = object.attachmentId ?? 0;
    message.editDate = object.editDate ?? undefined;
    return message;
  },
};

function createBaseMsgRemovePostAttachment(): MsgRemovePostAttachment {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    attachmentId: 0,
    editor: "",
  };
}

export const MsgRemovePostAttachment = {
  encode(
    message: MsgRemovePostAttachment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.attachmentId !== 0) {
      writer.uint32(24).uint32(message.attachmentId);
    }
    if (message.editor !== "") {
      writer.uint32(34).string(message.editor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemovePostAttachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePostAttachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.postId = reader.uint64() as Long;
          break;
        case 3:
          message.attachmentId = reader.uint32();
          break;
        case 4:
          message.editor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemovePostAttachment {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
      attachmentId: isSet(object.attachmentId)
        ? Number(object.attachmentId)
        : 0,
      editor: isSet(object.editor) ? String(object.editor) : "",
    };
  },

  toJSON(message: MsgRemovePostAttachment): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.attachmentId !== undefined &&
      (obj.attachmentId = Math.round(message.attachmentId));
    message.editor !== undefined && (obj.editor = message.editor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemovePostAttachment>, I>>(
    object: I
  ): MsgRemovePostAttachment {
    const message = createBaseMsgRemovePostAttachment();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.attachmentId = object.attachmentId ?? 0;
    message.editor = object.editor ?? "";
    return message;
  },
};

function createBaseMsgRemovePostAttachmentResponse(): MsgRemovePostAttachmentResponse {
  return { editDate: undefined };
}

export const MsgRemovePostAttachmentResponse = {
  encode(
    message: MsgRemovePostAttachmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.editDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.editDate),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRemovePostAttachmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemovePostAttachmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.editDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemovePostAttachmentResponse {
    return {
      editDate: isSet(object.editDate)
        ? fromJsonTimestamp(object.editDate)
        : undefined,
    };
  },

  toJSON(message: MsgRemovePostAttachmentResponse): unknown {
    const obj: any = {};
    message.editDate !== undefined &&
      (obj.editDate = message.editDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemovePostAttachmentResponse>, I>>(
    object: I
  ): MsgRemovePostAttachmentResponse {
    const message = createBaseMsgRemovePostAttachmentResponse();
    message.editDate = object.editDate ?? undefined;
    return message;
  },
};

function createBaseMsgAnswerPoll(): MsgAnswerPoll {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    pollId: 0,
    answersIndexes: [],
    signer: "",
  };
}

export const MsgAnswerPoll = {
  encode(
    message: MsgAnswerPoll,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.pollId !== 0) {
      writer.uint32(24).uint32(message.pollId);
    }
    writer.uint32(34).fork();
    for (const v of message.answersIndexes) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
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
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.postId = reader.uint64() as Long;
          break;
        case 3:
          message.pollId = reader.uint32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.answersIndexes.push(reader.uint32());
            }
          } else {
            message.answersIndexes.push(reader.uint32());
          }
          break;
        case 5:
          message.signer = reader.string();
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
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
      pollId: isSet(object.pollId) ? Number(object.pollId) : 0,
      answersIndexes: Array.isArray(object?.answersIndexes)
        ? object.answersIndexes.map((e: any) => Number(e))
        : [],
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: MsgAnswerPoll): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.pollId !== undefined && (obj.pollId = Math.round(message.pollId));
    if (message.answersIndexes) {
      obj.answersIndexes = message.answersIndexes.map((e) => Math.round(e));
    } else {
      obj.answersIndexes = [];
    }
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnswerPoll>, I>>(
    object: I
  ): MsgAnswerPoll {
    const message = createBaseMsgAnswerPoll();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.pollId = object.pollId ?? 0;
    message.answersIndexes = object.answersIndexes?.map((e) => e) || [];
    message.signer = object.signer ?? "";
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

/** Msg defines the posts Msg service. */
export interface Msg {
  /** CreatePost allows to create a new post */
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  /** EditPost allows to edit an existing post */
  EditPost(request: MsgEditPost): Promise<MsgEditPostResponse>;
  /** DeletePost allows to delete an existing post */
  DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
  /** AddPostAttachment allows to add a new attachment to a post */
  AddPostAttachment(
    request: MsgAddPostAttachment
  ): Promise<MsgAddPostAttachmentResponse>;
  /** RemovePostAttachment allows to remove an attachment from a post */
  RemovePostAttachment(
    request: MsgRemovePostAttachment
  ): Promise<MsgRemovePostAttachmentResponse>;
  /** AnswerPoll allows to answer a post poll */
  AnswerPoll(request: MsgAnswerPoll): Promise<MsgAnswerPollResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePost = this.CreatePost.bind(this);
    this.EditPost = this.EditPost.bind(this);
    this.DeletePost = this.DeletePost.bind(this);
    this.AddPostAttachment = this.AddPostAttachment.bind(this);
    this.RemovePostAttachment = this.RemovePostAttachment.bind(this);
    this.AnswerPoll = this.AnswerPoll.bind(this);
  }
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("desmos.posts.v1.Msg", "CreatePost", data);
    return promise.then((data) =>
      MsgCreatePostResponse.decode(new _m0.Reader(data))
    );
  }

  EditPost(request: MsgEditPost): Promise<MsgEditPostResponse> {
    const data = MsgEditPost.encode(request).finish();
    const promise = this.rpc.request("desmos.posts.v1.Msg", "EditPost", data);
    return promise.then((data) =>
      MsgEditPostResponse.decode(new _m0.Reader(data))
    );
  }

  DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse> {
    const data = MsgDeletePost.encode(request).finish();
    const promise = this.rpc.request("desmos.posts.v1.Msg", "DeletePost", data);
    return promise.then((data) =>
      MsgDeletePostResponse.decode(new _m0.Reader(data))
    );
  }

  AddPostAttachment(
    request: MsgAddPostAttachment
  ): Promise<MsgAddPostAttachmentResponse> {
    const data = MsgAddPostAttachment.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1.Msg",
      "AddPostAttachment",
      data
    );
    return promise.then((data) =>
      MsgAddPostAttachmentResponse.decode(new _m0.Reader(data))
    );
  }

  RemovePostAttachment(
    request: MsgRemovePostAttachment
  ): Promise<MsgRemovePostAttachmentResponse> {
    const data = MsgRemovePostAttachment.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1.Msg",
      "RemovePostAttachment",
      data
    );
    return promise.then((data) =>
      MsgRemovePostAttachmentResponse.decode(new _m0.Reader(data))
    );
  }

  AnswerPoll(request: MsgAnswerPoll): Promise<MsgAnswerPollResponse> {
    const data = MsgAnswerPoll.encode(request).finish();
    const promise = this.rpc.request("desmos.posts.v1.Msg", "AnswerPoll", data);
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
