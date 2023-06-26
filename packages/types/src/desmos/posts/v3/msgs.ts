/* eslint-disable */
import {
  Entities,
  EntitiesAmino,
  ReplySetting,
  PostReference,
  PostReferenceAmino,
  Params,
  ParamsAmino,
  replySettingFromJSON,
  replySettingToJSON,
} from "./models";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Timestamp, TimestampAmino } from "../../../google/protobuf/timestamp";
import {
  Long,
  isSet,
  DeepPartial,
  Exact,
  fromJsonTimestamp,
  fromTimestamp,
} from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.posts.v3";
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
  /** Tags connected to this post */
  tags: string[];
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
export interface MsgCreatePostProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgCreatePost";
  value: Uint8Array;
}
/** MsgCreatePost represents the message to be used to create a post. */
export interface MsgCreatePostAmino {
  /** Id of the subspace inside which the post must be created */
  subspace_id: string;
  /** Id of the section inside which the post must be created */
  section_id: number;
  /** (optional) External id for this post */
  external_id: string;
  /** (optional) Text of the post */
  text: string;
  /** (optional) Entities connected to this post */
  entities?: EntitiesAmino;
  /** Tags connected to this post */
  tags: string[];
  /** Attachments of the post */
  attachments: AnyAmino[];
  /** Author of the post */
  author: string;
  /** (optional) Id of the original post of the conversation */
  conversation_id: string;
  /** Reply settings of this post */
  reply_settings: ReplySetting;
  /** A list this posts references (either as a reply, repost or quote) */
  referenced_posts: PostReferenceAmino[];
}
export interface MsgCreatePostAminoMsg {
  type: "/desmos.posts.v3.MsgCreatePost";
  value: MsgCreatePostAmino;
}
/** MsgCreatePostResponse defines the Msg/CreatePost response type. */
export interface MsgCreatePostResponse {
  /** Id of the newly created post */
  postId: Long;
  /** Creation date of the post */
  creationDate?: Timestamp;
}
export interface MsgCreatePostResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgCreatePostResponse";
  value: Uint8Array;
}
/** MsgCreatePostResponse defines the Msg/CreatePost response type. */
export interface MsgCreatePostResponseAmino {
  /** Id of the newly created post */
  post_id: string;
  /** Creation date of the post */
  creation_date?: TimestampAmino;
}
export interface MsgCreatePostResponseAminoMsg {
  type: "/desmos.posts.v3.MsgCreatePostResponse";
  value: MsgCreatePostResponseAmino;
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
  /**
   * New tags connected to this post. These will always replace the current
   * post's tags
   */
  tags: string[];
  /** Editor of the post */
  editor: string;
}
export interface MsgEditPostProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgEditPost";
  value: Uint8Array;
}
/** MsgEditPost represents the message to be used to edit a post. */
export interface MsgEditPostAmino {
  /** Id of the subspace inside which the post is */
  subspace_id: string;
  /** Id of the post to edit */
  post_id: string;
  /**
   * New text of the post. If set to [do-not-modify] it will change the current
   * post's text.
   */
  text: string;
  /**
   * New entities connected to this post. These will always replace the current
   * post's entities
   */
  entities?: EntitiesAmino;
  /**
   * New tags connected to this post. These will always replace the current
   * post's tags
   */
  tags: string[];
  /** Editor of the post */
  editor: string;
}
export interface MsgEditPostAminoMsg {
  type: "/desmos.posts.v3.MsgEditPost";
  value: MsgEditPostAmino;
}
/** MsgCreatePostResponse defines the Msg/EditPost response type. */
export interface MsgEditPostResponse {
  /** Edit date of the post */
  editDate?: Timestamp;
}
export interface MsgEditPostResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgEditPostResponse";
  value: Uint8Array;
}
/** MsgCreatePostResponse defines the Msg/EditPost response type. */
export interface MsgEditPostResponseAmino {
  /** Edit date of the post */
  edit_date?: TimestampAmino;
}
export interface MsgEditPostResponseAminoMsg {
  type: "/desmos.posts.v3.MsgEditPostResponse";
  value: MsgEditPostResponseAmino;
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
export interface MsgDeletePostProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgDeletePost";
  value: Uint8Array;
}
/** MsgDeletePost represents the message used when deleting a post. */
export interface MsgDeletePostAmino {
  /** Id of the subspace containing the post */
  subspace_id: string;
  /** Id of the post to be deleted */
  post_id: string;
  /** User that is deleting the post */
  signer: string;
}
export interface MsgDeletePostAminoMsg {
  type: "/desmos.posts.v3.MsgDeletePost";
  value: MsgDeletePostAmino;
}
/** MsgDeletePostResponse represents the Msg/DeletePost response type */
export interface MsgDeletePostResponse {}
export interface MsgDeletePostResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgDeletePostResponse";
  value: Uint8Array;
}
/** MsgDeletePostResponse represents the Msg/DeletePost response type */
export interface MsgDeletePostResponseAmino {}
export interface MsgDeletePostResponseAminoMsg {
  type: "/desmos.posts.v3.MsgDeletePostResponse";
  value: MsgDeletePostResponseAmino;
}
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
export interface MsgAddPostAttachmentProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgAddPostAttachment";
  value: Uint8Array;
}
/**
 * MsgAddPostAttachment represents the message that should be
 * used when adding an attachment to post
 */
export interface MsgAddPostAttachmentAmino {
  /** Id of the subspace containing the post */
  subspace_id: string;
  /** Id of the post to which to add the attachment */
  post_id: string;
  /** Content of the attachment */
  content?: AnyAmino;
  /** Editor of the post */
  editor: string;
}
export interface MsgAddPostAttachmentAminoMsg {
  type: "/desmos.posts.v3.MsgAddPostAttachment";
  value: MsgAddPostAttachmentAmino;
}
/** MsgAddPostAttachmentResponse defines the Msg/AddPostAttachment response type. */
export interface MsgAddPostAttachmentResponse {
  /** New id of the uploaded attachment */
  attachmentId: number;
  /** Edit date of the post */
  editDate?: Timestamp;
}
export interface MsgAddPostAttachmentResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgAddPostAttachmentResponse";
  value: Uint8Array;
}
/** MsgAddPostAttachmentResponse defines the Msg/AddPostAttachment response type. */
export interface MsgAddPostAttachmentResponseAmino {
  /** New id of the uploaded attachment */
  attachment_id: number;
  /** Edit date of the post */
  edit_date?: TimestampAmino;
}
export interface MsgAddPostAttachmentResponseAminoMsg {
  type: "/desmos.posts.v3.MsgAddPostAttachmentResponse";
  value: MsgAddPostAttachmentResponseAmino;
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
export interface MsgRemovePostAttachmentProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgRemovePostAttachment";
  value: Uint8Array;
}
/**
 * MsgRemovePostAttachment represents the message to be used when
 * removing an attachment from a post
 */
export interface MsgRemovePostAttachmentAmino {
  /** Id of the subspace containing the post */
  subspace_id: string;
  /** Id of the post from which to remove the attachment */
  post_id: string;
  /** Id of the attachment to be removed */
  attachment_id: number;
  /** User that is removing the attachment */
  editor: string;
}
export interface MsgRemovePostAttachmentAminoMsg {
  type: "/desmos.posts.v3.MsgRemovePostAttachment";
  value: MsgRemovePostAttachmentAmino;
}
/**
 * MsgRemovePostAttachmentResponse defines the
 * Msg/RemovePostAttachment response type.
 */
export interface MsgRemovePostAttachmentResponse {
  /** Edit date of the post */
  editDate?: Timestamp;
}
export interface MsgRemovePostAttachmentResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgRemovePostAttachmentResponse";
  value: Uint8Array;
}
/**
 * MsgRemovePostAttachmentResponse defines the
 * Msg/RemovePostAttachment response type.
 */
export interface MsgRemovePostAttachmentResponseAmino {
  /** Edit date of the post */
  edit_date?: TimestampAmino;
}
export interface MsgRemovePostAttachmentResponseAminoMsg {
  type: "/desmos.posts.v3.MsgRemovePostAttachmentResponse";
  value: MsgRemovePostAttachmentResponseAmino;
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
export interface MsgAnswerPollProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgAnswerPoll";
  value: Uint8Array;
}
/** MsgAnswerPoll represents the message used to answer a poll */
export interface MsgAnswerPollAmino {
  /** Id of the subspace containing the post */
  subspace_id: string;
  /** Id of the post that contains the poll to be answered */
  post_id: string;
  /** Id of the poll to be answered */
  poll_id: number;
  /** Indexes of the answer inside the ProvidedAnswers array */
  answers_indexes: number[];
  /** Address of the user answering the poll */
  signer: string;
}
export interface MsgAnswerPollAminoMsg {
  type: "/desmos.posts.v3.MsgAnswerPoll";
  value: MsgAnswerPollAmino;
}
/** MsgAnswerPollResponse represents the MSg/AnswerPoll response type */
export interface MsgAnswerPollResponse {}
export interface MsgAnswerPollResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgAnswerPollResponse";
  value: Uint8Array;
}
/** MsgAnswerPollResponse represents the MSg/AnswerPoll response type */
export interface MsgAnswerPollResponseAmino {}
export interface MsgAnswerPollResponseAminoMsg {
  type: "/desmos.posts.v3.MsgAnswerPollResponse";
  value: MsgAnswerPollResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: Desmos 5.0.0
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: Desmos 5.0.0
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/desmos.posts.v3.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: Desmos 5.0.0
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: Desmos 5.0.0
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/desmos.posts.v3.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgCreatePost(): MsgCreatePost {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    externalId: "",
    text: "",
    entities: undefined,
    tags: [],
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
    for (const v of message.tags) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.attachments) {
      Any.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.author !== "") {
      writer.uint32(66).string(message.author);
    }
    if (!message.conversationId.isZero()) {
      writer.uint32(72).uint64(message.conversationId);
    }
    if (message.replySettings !== 0) {
      writer.uint32(80).int32(message.replySettings);
    }
    for (const v of message.referencedPosts) {
      PostReference.encode(v!, writer.uint32(90).fork()).ldelim();
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
          message.tags.push(reader.string());
          break;
        case 7:
          message.attachments.push(Any.decode(reader, reader.uint32()));
          break;
        case 8:
          message.author = reader.string();
          break;
        case 9:
          message.conversationId = reader.uint64() as Long;
          break;
        case 10:
          message.replySettings = reader.int32() as any;
          break;
        case 11:
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
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      externalId: isSet(object.externalId) ? String(object.externalId) : "",
      text: isSet(object.text) ? String(object.text) : "",
      entities: isSet(object.entities)
        ? Entities.fromJSON(object.entities)
        : undefined,
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Any.fromJSON(e))
        : [],
      author: isSet(object.author) ? String(object.author) : "",
      conversationId: isSet(object.conversationId)
        ? Long.fromValue(object.conversationId)
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
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
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
    message.tags = object.tags?.map((e) => e) || [];
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
  fromAmino(object: MsgCreatePostAmino): MsgCreatePost {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      externalId: object.external_id,
      text: object.text,
      entities: object?.entities
        ? Entities.fromAmino(object.entities)
        : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => e) : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Any.fromAmino(e))
        : [],
      author: object.author,
      conversationId: Long.fromString(object.conversation_id),
      replySettings: isSet(object.reply_settings)
        ? replySettingFromJSON(object.reply_settings)
        : 0,
      referencedPosts: Array.isArray(object?.referenced_posts)
        ? object.referenced_posts.map((e: any) => PostReference.fromAmino(e))
        : [],
    };
  },
  toAmino(message: MsgCreatePost): MsgCreatePostAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.external_id = message.externalId;
    obj.text = message.text;
    obj.entities = message.entities
      ? Entities.toAmino(message.entities)
      : undefined;
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Any.toAmino(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    obj.author = message.author;
    obj.conversation_id = message.conversationId
      ? message.conversationId.toString()
      : undefined;
    obj.reply_settings = message.replySettings;
    if (message.referencedPosts) {
      obj.referenced_posts = message.referencedPosts.map((e) =>
        e ? PostReference.toAmino(e) : undefined
      );
    } else {
      obj.referenced_posts = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePostAminoMsg): MsgCreatePost {
    return MsgCreatePost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePostProtoMsg): MsgCreatePost {
    return MsgCreatePost.decode(message.value);
  },
  toProto(message: MsgCreatePost): Uint8Array {
    return MsgCreatePost.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePost): MsgCreatePostProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgCreatePost",
      value: MsgCreatePost.encode(message).finish(),
    };
  },
};
function createBaseMsgCreatePostResponse(): MsgCreatePostResponse {
  return {
    postId: Long.UZERO,
    creationDate: undefined,
  };
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
      Timestamp.encode(message.creationDate, writer.uint32(18).fork()).ldelim();
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
          message.creationDate = Timestamp.decode(reader, reader.uint32());
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
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
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
      (obj.creationDate = fromTimestamp(message.creationDate).toISOString());
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
    message.creationDate =
      object.creationDate !== undefined && object.creationDate !== null
        ? Timestamp.fromPartial(object.creationDate)
        : undefined;
    return message;
  },
  fromAmino(object: MsgCreatePostResponseAmino): MsgCreatePostResponse {
    return {
      postId: Long.fromString(object.post_id),
      creationDate: object?.creation_date
        ? Timestamp.fromAmino(object.creation_date)
        : undefined,
    };
  },
  toAmino(message: MsgCreatePostResponse): MsgCreatePostResponseAmino {
    const obj: any = {};
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.creation_date = message.creationDate
      ? Timestamp.toAmino(message.creationDate)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePostResponseAminoMsg): MsgCreatePostResponse {
    return MsgCreatePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePostResponseProtoMsg): MsgCreatePostResponse {
    return MsgCreatePostResponse.decode(message.value);
  },
  toProto(message: MsgCreatePostResponse): Uint8Array {
    return MsgCreatePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePostResponse): MsgCreatePostResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgCreatePostResponse",
      value: MsgCreatePostResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgEditPost(): MsgEditPost {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    text: "",
    entities: undefined,
    tags: [],
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
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
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
          message.tags.push(reader.string());
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
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      text: isSet(object.text) ? String(object.text) : "",
      entities: isSet(object.entities)
        ? Entities.fromJSON(object.entities)
        : undefined,
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
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
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
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
    message.tags = object.tags?.map((e) => e) || [];
    message.editor = object.editor ?? "";
    return message;
  },
  fromAmino(object: MsgEditPostAmino): MsgEditPost {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      text: object.text,
      entities: object?.entities
        ? Entities.fromAmino(object.entities)
        : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => e) : [],
      editor: object.editor,
    };
  },
  toAmino(message: MsgEditPost): MsgEditPostAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.text = message.text;
    obj.entities = message.entities
      ? Entities.toAmino(message.entities)
      : undefined;
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    obj.editor = message.editor;
    return obj;
  },
  fromAminoMsg(object: MsgEditPostAminoMsg): MsgEditPost {
    return MsgEditPost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditPostProtoMsg): MsgEditPost {
    return MsgEditPost.decode(message.value);
  },
  toProto(message: MsgEditPost): Uint8Array {
    return MsgEditPost.encode(message).finish();
  },
  toProtoMsg(message: MsgEditPost): MsgEditPostProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgEditPost",
      value: MsgEditPost.encode(message).finish(),
    };
  },
};
function createBaseMsgEditPostResponse(): MsgEditPostResponse {
  return {
    editDate: undefined,
  };
}
export const MsgEditPostResponse = {
  encode(
    message: MsgEditPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.editDate !== undefined) {
      Timestamp.encode(message.editDate, writer.uint32(10).fork()).ldelim();
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
          message.editDate = Timestamp.decode(reader, reader.uint32());
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
      (obj.editDate = fromTimestamp(message.editDate).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditPostResponse>, I>>(
    object: I
  ): MsgEditPostResponse {
    const message = createBaseMsgEditPostResponse();
    message.editDate =
      object.editDate !== undefined && object.editDate !== null
        ? Timestamp.fromPartial(object.editDate)
        : undefined;
    return message;
  },
  fromAmino(object: MsgEditPostResponseAmino): MsgEditPostResponse {
    return {
      editDate: object?.edit_date
        ? Timestamp.fromAmino(object.edit_date)
        : undefined,
    };
  },
  toAmino(message: MsgEditPostResponse): MsgEditPostResponseAmino {
    const obj: any = {};
    obj.edit_date = message.editDate
      ? Timestamp.toAmino(message.editDate)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEditPostResponseAminoMsg): MsgEditPostResponse {
    return MsgEditPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditPostResponseProtoMsg): MsgEditPostResponse {
    return MsgEditPostResponse.decode(message.value);
  },
  toProto(message: MsgEditPostResponse): Uint8Array {
    return MsgEditPostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditPostResponse): MsgEditPostResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgEditPostResponse",
      value: MsgEditPostResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgDeletePost(): MsgDeletePost {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    signer: "",
  };
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
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
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
  fromAmino(object: MsgDeletePostAmino): MsgDeletePost {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      signer: object.signer,
    };
  },
  toAmino(message: MsgDeletePost): MsgDeletePostAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgDeletePostAminoMsg): MsgDeletePost {
    return MsgDeletePost.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePostProtoMsg): MsgDeletePost {
    return MsgDeletePost.decode(message.value);
  },
  toProto(message: MsgDeletePost): Uint8Array {
    return MsgDeletePost.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePost): MsgDeletePostProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgDeletePost",
      value: MsgDeletePost.encode(message).finish(),
    };
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
  fromAmino(_: MsgDeletePostResponseAmino): MsgDeletePostResponse {
    return {};
  },
  toAmino(_: MsgDeletePostResponse): MsgDeletePostResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeletePostResponseAminoMsg): MsgDeletePostResponse {
    return MsgDeletePostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePostResponseProtoMsg): MsgDeletePostResponse {
    return MsgDeletePostResponse.decode(message.value);
  },
  toProto(message: MsgDeletePostResponse): Uint8Array {
    return MsgDeletePostResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePostResponse): MsgDeletePostResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgDeletePostResponse",
      value: MsgDeletePostResponse.encode(message).finish(),
    };
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
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
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
  fromAmino(object: MsgAddPostAttachmentAmino): MsgAddPostAttachment {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      content: object?.content ? Any.fromAmino(object.content) : undefined,
      editor: object.editor,
    };
  },
  toAmino(message: MsgAddPostAttachment): MsgAddPostAttachmentAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.content = message.content ? Any.toAmino(message.content) : undefined;
    obj.editor = message.editor;
    return obj;
  },
  fromAminoMsg(object: MsgAddPostAttachmentAminoMsg): MsgAddPostAttachment {
    return MsgAddPostAttachment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPostAttachmentProtoMsg): MsgAddPostAttachment {
    return MsgAddPostAttachment.decode(message.value);
  },
  toProto(message: MsgAddPostAttachment): Uint8Array {
    return MsgAddPostAttachment.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPostAttachment): MsgAddPostAttachmentProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgAddPostAttachment",
      value: MsgAddPostAttachment.encode(message).finish(),
    };
  },
};
function createBaseMsgAddPostAttachmentResponse(): MsgAddPostAttachmentResponse {
  return {
    attachmentId: 0,
    editDate: undefined,
  };
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
      Timestamp.encode(message.editDate, writer.uint32(18).fork()).ldelim();
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
          message.editDate = Timestamp.decode(reader, reader.uint32());
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
      (obj.editDate = fromTimestamp(message.editDate).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddPostAttachmentResponse>, I>>(
    object: I
  ): MsgAddPostAttachmentResponse {
    const message = createBaseMsgAddPostAttachmentResponse();
    message.attachmentId = object.attachmentId ?? 0;
    message.editDate =
      object.editDate !== undefined && object.editDate !== null
        ? Timestamp.fromPartial(object.editDate)
        : undefined;
    return message;
  },
  fromAmino(
    object: MsgAddPostAttachmentResponseAmino
  ): MsgAddPostAttachmentResponse {
    return {
      attachmentId: object.attachment_id,
      editDate: object?.edit_date
        ? Timestamp.fromAmino(object.edit_date)
        : undefined,
    };
  },
  toAmino(
    message: MsgAddPostAttachmentResponse
  ): MsgAddPostAttachmentResponseAmino {
    const obj: any = {};
    obj.attachment_id = message.attachmentId;
    obj.edit_date = message.editDate
      ? Timestamp.toAmino(message.editDate)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: MsgAddPostAttachmentResponseAminoMsg
  ): MsgAddPostAttachmentResponse {
    return MsgAddPostAttachmentResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAddPostAttachmentResponseProtoMsg
  ): MsgAddPostAttachmentResponse {
    return MsgAddPostAttachmentResponse.decode(message.value);
  },
  toProto(message: MsgAddPostAttachmentResponse): Uint8Array {
    return MsgAddPostAttachmentResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAddPostAttachmentResponse
  ): MsgAddPostAttachmentResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgAddPostAttachmentResponse",
      value: MsgAddPostAttachmentResponse.encode(message).finish(),
    };
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
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
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
  fromAmino(object: MsgRemovePostAttachmentAmino): MsgRemovePostAttachment {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      attachmentId: object.attachment_id,
      editor: object.editor,
    };
  },
  toAmino(message: MsgRemovePostAttachment): MsgRemovePostAttachmentAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.attachment_id = message.attachmentId;
    obj.editor = message.editor;
    return obj;
  },
  fromAminoMsg(
    object: MsgRemovePostAttachmentAminoMsg
  ): MsgRemovePostAttachment {
    return MsgRemovePostAttachment.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRemovePostAttachmentProtoMsg
  ): MsgRemovePostAttachment {
    return MsgRemovePostAttachment.decode(message.value);
  },
  toProto(message: MsgRemovePostAttachment): Uint8Array {
    return MsgRemovePostAttachment.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRemovePostAttachment
  ): MsgRemovePostAttachmentProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgRemovePostAttachment",
      value: MsgRemovePostAttachment.encode(message).finish(),
    };
  },
};
function createBaseMsgRemovePostAttachmentResponse(): MsgRemovePostAttachmentResponse {
  return {
    editDate: undefined,
  };
}
export const MsgRemovePostAttachmentResponse = {
  encode(
    message: MsgRemovePostAttachmentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.editDate !== undefined) {
      Timestamp.encode(message.editDate, writer.uint32(10).fork()).ldelim();
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
          message.editDate = Timestamp.decode(reader, reader.uint32());
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
      (obj.editDate = fromTimestamp(message.editDate).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemovePostAttachmentResponse>, I>>(
    object: I
  ): MsgRemovePostAttachmentResponse {
    const message = createBaseMsgRemovePostAttachmentResponse();
    message.editDate =
      object.editDate !== undefined && object.editDate !== null
        ? Timestamp.fromPartial(object.editDate)
        : undefined;
    return message;
  },
  fromAmino(
    object: MsgRemovePostAttachmentResponseAmino
  ): MsgRemovePostAttachmentResponse {
    return {
      editDate: object?.edit_date
        ? Timestamp.fromAmino(object.edit_date)
        : undefined,
    };
  },
  toAmino(
    message: MsgRemovePostAttachmentResponse
  ): MsgRemovePostAttachmentResponseAmino {
    const obj: any = {};
    obj.edit_date = message.editDate
      ? Timestamp.toAmino(message.editDate)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: MsgRemovePostAttachmentResponseAminoMsg
  ): MsgRemovePostAttachmentResponse {
    return MsgRemovePostAttachmentResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRemovePostAttachmentResponseProtoMsg
  ): MsgRemovePostAttachmentResponse {
    return MsgRemovePostAttachmentResponse.decode(message.value);
  },
  toProto(message: MsgRemovePostAttachmentResponse): Uint8Array {
    return MsgRemovePostAttachmentResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRemovePostAttachmentResponse
  ): MsgRemovePostAttachmentResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgRemovePostAttachmentResponse",
      value: MsgRemovePostAttachmentResponse.encode(message).finish(),
    };
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
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
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
  fromAmino(object: MsgAnswerPollAmino): MsgAnswerPoll {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      pollId: object.poll_id,
      answersIndexes: Array.isArray(object?.answers_indexes)
        ? object.answers_indexes.map((e: any) => e)
        : [],
      signer: object.signer,
    };
  },
  toAmino(message: MsgAnswerPoll): MsgAnswerPollAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.poll_id = message.pollId;
    if (message.answersIndexes) {
      obj.answers_indexes = message.answersIndexes.map((e) => e);
    } else {
      obj.answers_indexes = [];
    }
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgAnswerPollAminoMsg): MsgAnswerPoll {
    return MsgAnswerPoll.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAnswerPollProtoMsg): MsgAnswerPoll {
    return MsgAnswerPoll.decode(message.value);
  },
  toProto(message: MsgAnswerPoll): Uint8Array {
    return MsgAnswerPoll.encode(message).finish();
  },
  toProtoMsg(message: MsgAnswerPoll): MsgAnswerPollProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgAnswerPoll",
      value: MsgAnswerPoll.encode(message).finish(),
    };
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
  fromAmino(_: MsgAnswerPollResponseAmino): MsgAnswerPollResponse {
    return {};
  },
  toAmino(_: MsgAnswerPollResponse): MsgAnswerPollResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAnswerPollResponseAminoMsg): MsgAnswerPollResponse {
    return MsgAnswerPollResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAnswerPollResponseProtoMsg): MsgAnswerPollResponse {
    return MsgAnswerPollResponse.decode(message.value);
  },
  toProto(message: MsgAnswerPollResponse): Uint8Array {
    return MsgAnswerPollResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAnswerPollResponse): MsgAnswerPollResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgAnswerPollResponse",
      value: MsgAnswerPollResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined,
  };
}
export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined,
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    _: I
  ): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgUpdateParamsResponseAminoMsg
  ): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgUpdateParamsResponseProtoMsg
  ): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgUpdateParamsResponse
  ): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish(),
    };
  },
};
