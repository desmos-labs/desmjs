/* eslint-disable */
import { Timestamp, TimestampAmino } from "../../../google/protobuf/timestamp";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import {
  Long,
  isSet,
  fromJsonTimestamp,
  fromTimestamp,
  DeepPartial,
  Exact,
} from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.posts.v3";
/** PostReferenceType represents the different types of references */
export enum PostReferenceType {
  /** POST_REFERENCE_TYPE_UNSPECIFIED - No reference specified */
  POST_REFERENCE_TYPE_UNSPECIFIED = 0,
  /** POST_REFERENCE_TYPE_REPLY - This reference represents a reply to the specified post */
  POST_REFERENCE_TYPE_REPLY = 1,
  /** POST_REFERENCE_TYPE_QUOTE - This reference represents a quote of the specified post */
  POST_REFERENCE_TYPE_QUOTE = 2,
  /** POST_REFERENCE_TYPE_REPOST - This reference represents a repost of the specified post */
  POST_REFERENCE_TYPE_REPOST = 3,
  UNRECOGNIZED = -1,
}
export const PostReferenceTypeAmino = PostReferenceType;
export function postReferenceTypeFromJSON(object: any): PostReferenceType {
  switch (object) {
    case 0:
    case "POST_REFERENCE_TYPE_UNSPECIFIED":
      return PostReferenceType.POST_REFERENCE_TYPE_UNSPECIFIED;
    case 1:
    case "POST_REFERENCE_TYPE_REPLY":
      return PostReferenceType.POST_REFERENCE_TYPE_REPLY;
    case 2:
    case "POST_REFERENCE_TYPE_QUOTE":
      return PostReferenceType.POST_REFERENCE_TYPE_QUOTE;
    case 3:
    case "POST_REFERENCE_TYPE_REPOST":
      return PostReferenceType.POST_REFERENCE_TYPE_REPOST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostReferenceType.UNRECOGNIZED;
  }
}
export function postReferenceTypeToJSON(object: PostReferenceType): string {
  switch (object) {
    case PostReferenceType.POST_REFERENCE_TYPE_UNSPECIFIED:
      return "POST_REFERENCE_TYPE_UNSPECIFIED";
    case PostReferenceType.POST_REFERENCE_TYPE_REPLY:
      return "POST_REFERENCE_TYPE_REPLY";
    case PostReferenceType.POST_REFERENCE_TYPE_QUOTE:
      return "POST_REFERENCE_TYPE_QUOTE";
    case PostReferenceType.POST_REFERENCE_TYPE_REPOST:
      return "POST_REFERENCE_TYPE_REPOST";
    case PostReferenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ReplySetting contains the possible reply settings that a post can have */
export enum ReplySetting {
  /** REPLY_SETTING_UNSPECIFIED - No reply setting specified */
  REPLY_SETTING_UNSPECIFIED = 0,
  /** REPLY_SETTING_EVERYONE - Everyone will be able to reply to this post */
  REPLY_SETTING_EVERYONE = 1,
  /** REPLY_SETTING_FOLLOWERS - Only followers of the author will be able to reply to this post */
  REPLY_SETTING_FOLLOWERS = 2,
  /** REPLY_SETTING_MUTUAL - Only the author mutual followers will be able to reply to this post */
  REPLY_SETTING_MUTUAL = 3,
  /** REPLY_SETTING_MENTIONS - Only people mentioned inside this post will be able to reply */
  REPLY_SETTING_MENTIONS = 4,
  UNRECOGNIZED = -1,
}
export const ReplySettingAmino = ReplySetting;
export function replySettingFromJSON(object: any): ReplySetting {
  switch (object) {
    case 0:
    case "REPLY_SETTING_UNSPECIFIED":
      return ReplySetting.REPLY_SETTING_UNSPECIFIED;
    case 1:
    case "REPLY_SETTING_EVERYONE":
      return ReplySetting.REPLY_SETTING_EVERYONE;
    case 2:
    case "REPLY_SETTING_FOLLOWERS":
      return ReplySetting.REPLY_SETTING_FOLLOWERS;
    case 3:
    case "REPLY_SETTING_MUTUAL":
      return ReplySetting.REPLY_SETTING_MUTUAL;
    case 4:
    case "REPLY_SETTING_MENTIONS":
      return ReplySetting.REPLY_SETTING_MENTIONS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReplySetting.UNRECOGNIZED;
  }
}
export function replySettingToJSON(object: ReplySetting): string {
  switch (object) {
    case ReplySetting.REPLY_SETTING_UNSPECIFIED:
      return "REPLY_SETTING_UNSPECIFIED";
    case ReplySetting.REPLY_SETTING_EVERYONE:
      return "REPLY_SETTING_EVERYONE";
    case ReplySetting.REPLY_SETTING_FOLLOWERS:
      return "REPLY_SETTING_FOLLOWERS";
    case ReplySetting.REPLY_SETTING_MUTUAL:
      return "REPLY_SETTING_MUTUAL";
    case ReplySetting.REPLY_SETTING_MENTIONS:
      return "REPLY_SETTING_MENTIONS";
    case ReplySetting.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Post contains all the information about a single post */
export interface Post {
  /** Id of the subspace inside which the post has been created */
  subspaceId: Long;
  /** Id of the section inside which the post has been created */
  sectionId: number;
  /** Unique id of the post */
  id: Long;
  /** (optional) External id for this post */
  externalId: string;
  /** (optional) Text of the post */
  text: string;
  /** (optional) Entities connected to this post */
  entities?: Entities;
  /** Tags related to this post, useful for categorization */
  tags: string[];
  /** Author of the post */
  author: string;
  /** (optional) Id of the original post of the conversation */
  conversationId: Long;
  /** A list this posts references (either as a reply, repost or quote) */
  referencedPosts: PostReference[];
  /** Reply settings of this post */
  replySettings: ReplySetting;
  /** Creation date of the post */
  creationDate?: Timestamp;
  /** (optional) Last edited time of the post */
  lastEditedDate?: Timestamp;
  /** Owner of the post */
  owner: string;
}
export interface PostProtoMsg {
  typeUrl: "/desmos.posts.v3.Post";
  value: Uint8Array;
}
/** Post contains all the information about a single post */
export interface PostAmino {
  /** Id of the subspace inside which the post has been created */
  subspace_id: string;
  /** Id of the section inside which the post has been created */
  section_id: number;
  /** Unique id of the post */
  id: string;
  /** (optional) External id for this post */
  external_id: string;
  /** (optional) Text of the post */
  text: string;
  /** (optional) Entities connected to this post */
  entities?: EntitiesAmino;
  /** Tags related to this post, useful for categorization */
  tags: string[];
  /** Author of the post */
  author: string;
  /** (optional) Id of the original post of the conversation */
  conversation_id: string;
  /** A list this posts references (either as a reply, repost or quote) */
  referenced_posts: PostReferenceAmino[];
  /** Reply settings of this post */
  reply_settings: ReplySetting;
  /** Creation date of the post */
  creation_date?: TimestampAmino;
  /** (optional) Last edited time of the post */
  last_edited_date?: TimestampAmino;
  /** Owner of the post */
  owner: string;
}
export interface PostAminoMsg {
  type: "/desmos.posts.v3.Post";
  value: PostAmino;
}
/** PostReference contains the details of a post reference */
export interface PostReference {
  /** Type of reference */
  type: PostReferenceType;
  /** Id of the referenced post */
  postId: Long;
  /**
   * Position of the reference inside the post's text. This should be used only
   * with the type set to TYPE_QUOTE
   */
  position: Long;
}
export interface PostReferenceProtoMsg {
  typeUrl: "/desmos.posts.v3.PostReference";
  value: Uint8Array;
}
/** PostReference contains the details of a post reference */
export interface PostReferenceAmino {
  /** Type of reference */
  type: PostReferenceType;
  /** Id of the referenced post */
  post_id: string;
  /**
   * Position of the reference inside the post's text. This should be used only
   * with the type set to TYPE_QUOTE
   */
  position: string;
}
export interface PostReferenceAminoMsg {
  type: "/desmos.posts.v3.PostReference";
  value: PostReferenceAmino;
}
/** Contains the details of entities parsed out of the post text */
export interface Entities {
  /** Hashtags represent inside the post text */
  hashtags: TextTag[];
  /** Mentions present inside the post text */
  mentions: TextTag[];
  /** Links present inside the post text */
  urls: Url[];
}
export interface EntitiesProtoMsg {
  typeUrl: "/desmos.posts.v3.Entities";
  value: Uint8Array;
}
/** Contains the details of entities parsed out of the post text */
export interface EntitiesAmino {
  /** Hashtags represent inside the post text */
  hashtags: TextTagAmino[];
  /** Mentions present inside the post text */
  mentions: TextTagAmino[];
  /** Links present inside the post text */
  urls: UrlAmino[];
}
export interface EntitiesAminoMsg {
  type: "/desmos.posts.v3.Entities";
  value: EntitiesAmino;
}
/** TextTag represents a tag within the post text */
export interface TextTag {
  /** Index of the character inside the text at which the tag starts */
  start: Long;
  /** Index of the character inside the text at which the tag ends */
  end: Long;
  /** Tag reference (user address, hashtag value, etc) */
  tag: string;
}
export interface TextTagProtoMsg {
  typeUrl: "/desmos.posts.v3.TextTag";
  value: Uint8Array;
}
/** TextTag represents a tag within the post text */
export interface TextTagAmino {
  /** Index of the character inside the text at which the tag starts */
  start: string;
  /** Index of the character inside the text at which the tag ends */
  end: string;
  /** Tag reference (user address, hashtag value, etc) */
  tag: string;
}
export interface TextTagAminoMsg {
  type: "/desmos.posts.v3.TextTag";
  value: TextTagAmino;
}
/** Url contains the details of a generic URL */
export interface Url {
  /** Index of the character inside the text at which the URL starts */
  start: Long;
  /** Index of the character inside the text at which the URL ends */
  end: Long;
  /** Value of the URL where the user should be redirected to */
  url: string;
  /** (optional) Display value of the URL */
  displayUrl: string;
}
export interface UrlProtoMsg {
  typeUrl: "/desmos.posts.v3.Url";
  value: Uint8Array;
}
/** Url contains the details of a generic URL */
export interface UrlAmino {
  /** Index of the character inside the text at which the URL starts */
  start: string;
  /** Index of the character inside the text at which the URL ends */
  end: string;
  /** Value of the URL where the user should be redirected to */
  url: string;
  /** (optional) Display value of the URL */
  display_url: string;
}
export interface UrlAminoMsg {
  type: "/desmos.posts.v3.Url";
  value: UrlAmino;
}
/** Attachment contains the data of a single post attachment */
export interface Attachment {
  /**
   * Id of the subspace inside which the post to which this attachment should be
   * connected is
   */
  subspaceId: Long;
  /** Id of the post to which this attachment should be connected */
  postId: Long;
  /** If of this attachment */
  id: number;
  /** Content of the attachment */
  content?: Any;
}
export interface AttachmentProtoMsg {
  typeUrl: "/desmos.posts.v3.Attachment";
  value: Uint8Array;
}
/** Attachment contains the data of a single post attachment */
export interface AttachmentAmino {
  /**
   * Id of the subspace inside which the post to which this attachment should be
   * connected is
   */
  subspace_id: string;
  /** Id of the post to which this attachment should be connected */
  post_id: string;
  /** If of this attachment */
  id: number;
  /** Content of the attachment */
  content?: AnyAmino;
}
export interface AttachmentAminoMsg {
  type: "/desmos.posts.v3.Attachment";
  value: AttachmentAmino;
}
/** Media represents a media attachment */
export interface Media {
  uri: string;
  mimeType: string;
}
export interface MediaProtoMsg {
  typeUrl: "/desmos.posts.v3.Media";
  value: Uint8Array;
}
/** Media represents a media attachment */
export interface MediaAmino {
  uri: string;
  mime_type: string;
}
export interface MediaAminoMsg {
  type: "/desmos.posts.v3.Media";
  value: MediaAmino;
}
/** Poll represents a poll attachment */
export interface Poll {
  /** Question of the poll */
  question: string;
  /** Answers the users can choose from */
  providedAnswers: Poll_ProvidedAnswer[];
  /** Date at which the poll will close */
  endDate?: Timestamp;
  /** Whether the poll allows multiple choices from the same user or not */
  allowsMultipleAnswers: boolean;
  /** Whether the poll allows to edit an answer or not */
  allowsAnswerEdits: boolean;
  /** Final poll results */
  finalTallyResults?: PollTallyResults;
}
export interface PollProtoMsg {
  typeUrl: "/desmos.posts.v3.Poll";
  value: Uint8Array;
}
/** Poll represents a poll attachment */
export interface PollAmino {
  /** Question of the poll */
  question: string;
  /** Answers the users can choose from */
  provided_answers: Poll_ProvidedAnswerAmino[];
  /** Date at which the poll will close */
  end_date?: TimestampAmino;
  /** Whether the poll allows multiple choices from the same user or not */
  allows_multiple_answers: boolean;
  /** Whether the poll allows to edit an answer or not */
  allows_answer_edits: boolean;
  /** Final poll results */
  final_tally_results?: PollTallyResultsAmino;
}
export interface PollAminoMsg {
  type: "/desmos.posts.v3.Poll";
  value: PollAmino;
}
/** Provided answer contains the details of a possible poll answer */
export interface Poll_ProvidedAnswer {
  /** (optional) Text of the answer */
  text: string;
  /** Content of the attachment */
  attachments: Any[];
}
export interface Poll_ProvidedAnswerProtoMsg {
  typeUrl: "/desmos.posts.v3.ProvidedAnswer";
  value: Uint8Array;
}
/** Provided answer contains the details of a possible poll answer */
export interface Poll_ProvidedAnswerAmino {
  /** (optional) Text of the answer */
  text: string;
  /** Content of the attachment */
  attachments: AnyAmino[];
}
export interface Poll_ProvidedAnswerAminoMsg {
  type: "/desmos.posts.v3.ProvidedAnswer";
  value: Poll_ProvidedAnswerAmino;
}
/** UserAnswer represents a user answer to a poll */
export interface UserAnswer {
  /** Subspace id inside which the post related to this attachment is located */
  subspaceId: Long;
  /** Id of the post associated to this attachment */
  postId: Long;
  /** Id of the poll to which this answer is associated */
  pollId: number;
  /** Indexes of the answers inside the ProvidedAnswers array */
  answersIndexes: number[];
  /** Address of the user answering the poll */
  user: string;
}
export interface UserAnswerProtoMsg {
  typeUrl: "/desmos.posts.v3.UserAnswer";
  value: Uint8Array;
}
/** UserAnswer represents a user answer to a poll */
export interface UserAnswerAmino {
  /** Subspace id inside which the post related to this attachment is located */
  subspace_id: string;
  /** Id of the post associated to this attachment */
  post_id: string;
  /** Id of the poll to which this answer is associated */
  poll_id: number;
  /** Indexes of the answers inside the ProvidedAnswers array */
  answers_indexes: number[];
  /** Address of the user answering the poll */
  user: string;
}
export interface UserAnswerAminoMsg {
  type: "/desmos.posts.v3.UserAnswer";
  value: UserAnswerAmino;
}
/** PollTallyResults contains the tally results for a poll */
export interface PollTallyResults {
  results: PollTallyResults_AnswerResult[];
}
export interface PollTallyResultsProtoMsg {
  typeUrl: "/desmos.posts.v3.PollTallyResults";
  value: Uint8Array;
}
/** PollTallyResults contains the tally results for a poll */
export interface PollTallyResultsAmino {
  results: PollTallyResults_AnswerResultAmino[];
}
export interface PollTallyResultsAminoMsg {
  type: "/desmos.posts.v3.PollTallyResults";
  value: PollTallyResultsAmino;
}
/** AnswerResult contains the result of a single poll provided answer */
export interface PollTallyResults_AnswerResult {
  /** Index of the answer inside the poll's ProvidedAnswers slice */
  answerIndex: number;
  /** Number of votes the answer has received */
  votes: Long;
}
export interface PollTallyResults_AnswerResultProtoMsg {
  typeUrl: "/desmos.posts.v3.AnswerResult";
  value: Uint8Array;
}
/** AnswerResult contains the result of a single poll provided answer */
export interface PollTallyResults_AnswerResultAmino {
  /** Index of the answer inside the poll's ProvidedAnswers slice */
  answer_index: number;
  /** Number of votes the answer has received */
  votes: string;
}
export interface PollTallyResults_AnswerResultAminoMsg {
  type: "/desmos.posts.v3.AnswerResult";
  value: PollTallyResults_AnswerResultAmino;
}
/** Params contains the parameters for the posts module */
export interface Params {
  /** Maximum length of the post text */
  maxTextLength: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/desmos.posts.v3.Params";
  value: Uint8Array;
}
/** Params contains the parameters for the posts module */
export interface ParamsAmino {
  /** Maximum length of the post text */
  max_text_length: number;
}
export interface ParamsAminoMsg {
  type: "desmos/x/posts/Params";
  value: ParamsAmino;
}
/**
 * PostOwnerTransferRequest represents a request to transfer the ownership of a
 * post from the sender to the receiver
 */
export interface PostOwnerTransferRequest {
  /** Id of the subspace that holds the post to transfer */
  subspaceId: Long;
  /** Id of the post which will be transferred */
  postId: Long;
  /** Address of the sender */
  sender: string;
  /** Address of the receiver */
  receiver: string;
}
export interface PostOwnerTransferRequestProtoMsg {
  typeUrl: "/desmos.posts.v3.PostOwnerTransferRequest";
  value: Uint8Array;
}
/**
 * PostOwnerTransferRequest represents a request to transfer the ownership of a
 * post from the sender to the receiver
 */
export interface PostOwnerTransferRequestAmino {
  /** Id of the subspace that holds the post to transfer */
  subspace_id: string;
  /** Id of the post which will be transferred */
  post_id: string;
  /** Address of the sender */
  sender: string;
  /** Address of the receiver */
  receiver: string;
}
export interface PostOwnerTransferRequestAminoMsg {
  type: "/desmos.posts.v3.PostOwnerTransferRequest";
  value: PostOwnerTransferRequestAmino;
}
function createBasePost(): Post {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    id: Long.UZERO,
    externalId: "",
    text: "",
    entities: undefined,
    tags: [],
    author: "",
    conversationId: Long.UZERO,
    referencedPosts: [],
    replySettings: 0,
    creationDate: undefined,
    lastEditedDate: undefined,
    owner: "",
  };
}
export const Post = {
  encode(message: Post, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.externalId !== "") {
      writer.uint32(34).string(message.externalId);
    }
    if (message.text !== "") {
      writer.uint32(42).string(message.text);
    }
    if (message.entities !== undefined) {
      Entities.encode(message.entities, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(58).string(v!);
    }
    if (message.author !== "") {
      writer.uint32(66).string(message.author);
    }
    if (!message.conversationId.isZero()) {
      writer.uint32(72).uint64(message.conversationId);
    }
    for (const v of message.referencedPosts) {
      PostReference.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.replySettings !== 0) {
      writer.uint32(88).int32(message.replySettings);
    }
    if (message.creationDate !== undefined) {
      Timestamp.encode(message.creationDate, writer.uint32(98).fork()).ldelim();
    }
    if (message.lastEditedDate !== undefined) {
      Timestamp.encode(
        message.lastEditedDate,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(114).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Post {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePost();
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
          message.id = reader.uint64() as Long;
          break;
        case 4:
          message.externalId = reader.string();
          break;
        case 5:
          message.text = reader.string();
          break;
        case 6:
          message.entities = Entities.decode(reader, reader.uint32());
          break;
        case 7:
          message.tags.push(reader.string());
          break;
        case 8:
          message.author = reader.string();
          break;
        case 9:
          message.conversationId = reader.uint64() as Long;
          break;
        case 10:
          message.referencedPosts.push(
            PostReference.decode(reader, reader.uint32()),
          );
          break;
        case 11:
          message.replySettings = reader.int32() as any;
          break;
        case 12:
          message.creationDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 13:
          message.lastEditedDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 14:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Post {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      externalId: isSet(object.externalId) ? String(object.externalId) : "",
      text: isSet(object.text) ? String(object.text) : "",
      entities: isSet(object.entities)
        ? Entities.fromJSON(object.entities)
        : undefined,
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
      author: isSet(object.author) ? String(object.author) : "",
      conversationId: isSet(object.conversationId)
        ? Long.fromValue(object.conversationId)
        : Long.UZERO,
      referencedPosts: Array.isArray(object?.referencedPosts)
        ? object.referencedPosts.map((e: any) => PostReference.fromJSON(e))
        : [],
      replySettings: isSet(object.replySettings)
        ? replySettingFromJSON(object.replySettings)
        : 0,
      creationDate: isSet(object.creationDate)
        ? fromJsonTimestamp(object.creationDate)
        : undefined,
      lastEditedDate: isSet(object.lastEditedDate)
        ? fromJsonTimestamp(object.lastEditedDate)
        : undefined,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },
  toJSON(message: Post): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
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
    message.author !== undefined && (obj.author = message.author);
    message.conversationId !== undefined &&
      (obj.conversationId = (message.conversationId || Long.UZERO).toString());
    if (message.referencedPosts) {
      obj.referencedPosts = message.referencedPosts.map((e) =>
        e ? PostReference.toJSON(e) : undefined,
      );
    } else {
      obj.referencedPosts = [];
    }
    message.replySettings !== undefined &&
      (obj.replySettings = replySettingToJSON(message.replySettings));
    message.creationDate !== undefined &&
      (obj.creationDate = fromTimestamp(message.creationDate).toISOString());
    message.lastEditedDate !== undefined &&
      (obj.lastEditedDate = fromTimestamp(
        message.lastEditedDate,
      ).toISOString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Post>, I>>(object: I): Post {
    const message = createBasePost();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.externalId = object.externalId ?? "";
    message.text = object.text ?? "";
    message.entities =
      object.entities !== undefined && object.entities !== null
        ? Entities.fromPartial(object.entities)
        : undefined;
    message.tags = object.tags?.map((e) => e) || [];
    message.author = object.author ?? "";
    message.conversationId =
      object.conversationId !== undefined && object.conversationId !== null
        ? Long.fromValue(object.conversationId)
        : Long.UZERO;
    message.referencedPosts =
      object.referencedPosts?.map((e) => PostReference.fromPartial(e)) || [];
    message.replySettings = object.replySettings ?? 0;
    message.creationDate =
      object.creationDate !== undefined && object.creationDate !== null
        ? Timestamp.fromPartial(object.creationDate)
        : undefined;
    message.lastEditedDate =
      object.lastEditedDate !== undefined && object.lastEditedDate !== null
        ? Timestamp.fromPartial(object.lastEditedDate)
        : undefined;
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: PostAmino): Post {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      id: Long.fromString(object.id),
      externalId: object.external_id,
      text: object.text,
      entities: object?.entities
        ? Entities.fromAmino(object.entities)
        : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => e) : [],
      author: object.author,
      conversationId: Long.fromString(object.conversation_id),
      referencedPosts: Array.isArray(object?.referenced_posts)
        ? object.referenced_posts.map((e: any) => PostReference.fromAmino(e))
        : [],
      replySettings: isSet(object.reply_settings)
        ? replySettingFromJSON(object.reply_settings)
        : 0,
      creationDate: object?.creation_date
        ? Timestamp.fromAmino(object.creation_date)
        : undefined,
      lastEditedDate: object?.last_edited_date
        ? Timestamp.fromAmino(object.last_edited_date)
        : undefined,
      owner: object.owner,
    };
  },
  toAmino(message: Post): PostAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.id = message.id ? message.id.toString() : undefined;
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
    obj.author = message.author;
    obj.conversation_id = message.conversationId
      ? message.conversationId.toString()
      : undefined;
    if (message.referencedPosts) {
      obj.referenced_posts = message.referencedPosts.map((e) =>
        e ? PostReference.toAmino(e) : undefined,
      );
    } else {
      obj.referenced_posts = [];
    }
    obj.reply_settings = message.replySettings;
    obj.creation_date = message.creationDate
      ? Timestamp.toAmino(message.creationDate)
      : undefined;
    obj.last_edited_date = message.lastEditedDate
      ? Timestamp.toAmino(message.lastEditedDate)
      : undefined;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: PostAminoMsg): Post {
    return Post.fromAmino(object.value);
  },
  fromProtoMsg(message: PostProtoMsg): Post {
    return Post.decode(message.value);
  },
  toProto(message: Post): Uint8Array {
    return Post.encode(message).finish();
  },
  toProtoMsg(message: Post): PostProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.Post",
      value: Post.encode(message).finish(),
    };
  },
};
function createBasePostReference(): PostReference {
  return {
    type: 0,
    postId: Long.UZERO,
    position: Long.UZERO,
  };
}
export const PostReference = {
  encode(
    message: PostReference,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (!message.position.isZero()) {
      writer.uint32(24).uint64(message.position);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PostReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.postId = reader.uint64() as Long;
          break;
        case 3:
          message.position = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PostReference {
    return {
      type: isSet(object.type) ? postReferenceTypeFromJSON(object.type) : 0,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      position: isSet(object.position)
        ? Long.fromValue(object.position)
        : Long.UZERO,
    };
  },
  toJSON(message: PostReference): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = postReferenceTypeToJSON(message.type));
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.position !== undefined &&
      (obj.position = (message.position || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PostReference>, I>>(
    object: I,
  ): PostReference {
    const message = createBasePostReference();
    message.type = object.type ?? 0;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.position =
      object.position !== undefined && object.position !== null
        ? Long.fromValue(object.position)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: PostReferenceAmino): PostReference {
    return {
      type: isSet(object.type) ? postReferenceTypeFromJSON(object.type) : 0,
      postId: Long.fromString(object.post_id),
      position: Long.fromString(object.position),
    };
  },
  toAmino(message: PostReference): PostReferenceAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.position = message.position ? message.position.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PostReferenceAminoMsg): PostReference {
    return PostReference.fromAmino(object.value);
  },
  fromProtoMsg(message: PostReferenceProtoMsg): PostReference {
    return PostReference.decode(message.value);
  },
  toProto(message: PostReference): Uint8Array {
    return PostReference.encode(message).finish();
  },
  toProtoMsg(message: PostReference): PostReferenceProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.PostReference",
      value: PostReference.encode(message).finish(),
    };
  },
};
function createBaseEntities(): Entities {
  return {
    hashtags: [],
    mentions: [],
    urls: [],
  };
}
export const Entities = {
  encode(
    message: Entities,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.hashtags) {
      TextTag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.mentions) {
      TextTag.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.urls) {
      Url.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Entities {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashtags.push(TextTag.decode(reader, reader.uint32()));
          break;
        case 2:
          message.mentions.push(TextTag.decode(reader, reader.uint32()));
          break;
        case 3:
          message.urls.push(Url.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Entities {
    return {
      hashtags: Array.isArray(object?.hashtags)
        ? object.hashtags.map((e: any) => TextTag.fromJSON(e))
        : [],
      mentions: Array.isArray(object?.mentions)
        ? object.mentions.map((e: any) => TextTag.fromJSON(e))
        : [],
      urls: Array.isArray(object?.urls)
        ? object.urls.map((e: any) => Url.fromJSON(e))
        : [],
    };
  },
  toJSON(message: Entities): unknown {
    const obj: any = {};
    if (message.hashtags) {
      obj.hashtags = message.hashtags.map((e) =>
        e ? TextTag.toJSON(e) : undefined,
      );
    } else {
      obj.hashtags = [];
    }
    if (message.mentions) {
      obj.mentions = message.mentions.map((e) =>
        e ? TextTag.toJSON(e) : undefined,
      );
    } else {
      obj.mentions = [];
    }
    if (message.urls) {
      obj.urls = message.urls.map((e) => (e ? Url.toJSON(e) : undefined));
    } else {
      obj.urls = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Entities>, I>>(object: I): Entities {
    const message = createBaseEntities();
    message.hashtags =
      object.hashtags?.map((e) => TextTag.fromPartial(e)) || [];
    message.mentions =
      object.mentions?.map((e) => TextTag.fromPartial(e)) || [];
    message.urls = object.urls?.map((e) => Url.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EntitiesAmino): Entities {
    return {
      hashtags: Array.isArray(object?.hashtags)
        ? object.hashtags.map((e: any) => TextTag.fromAmino(e))
        : [],
      mentions: Array.isArray(object?.mentions)
        ? object.mentions.map((e: any) => TextTag.fromAmino(e))
        : [],
      urls: Array.isArray(object?.urls)
        ? object.urls.map((e: any) => Url.fromAmino(e))
        : [],
    };
  },
  toAmino(message: Entities): EntitiesAmino {
    const obj: any = {};
    if (message.hashtags) {
      obj.hashtags = message.hashtags.map((e) =>
        e ? TextTag.toAmino(e) : undefined,
      );
    } else {
      obj.hashtags = [];
    }
    if (message.mentions) {
      obj.mentions = message.mentions.map((e) =>
        e ? TextTag.toAmino(e) : undefined,
      );
    } else {
      obj.mentions = [];
    }
    if (message.urls) {
      obj.urls = message.urls.map((e) => (e ? Url.toAmino(e) : undefined));
    } else {
      obj.urls = [];
    }
    return obj;
  },
  fromAminoMsg(object: EntitiesAminoMsg): Entities {
    return Entities.fromAmino(object.value);
  },
  fromProtoMsg(message: EntitiesProtoMsg): Entities {
    return Entities.decode(message.value);
  },
  toProto(message: Entities): Uint8Array {
    return Entities.encode(message).finish();
  },
  toProtoMsg(message: Entities): EntitiesProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.Entities",
      value: Entities.encode(message).finish(),
    };
  },
};
function createBaseTextTag(): TextTag {
  return {
    start: Long.UZERO,
    end: Long.UZERO,
    tag: "",
  };
}
export const TextTag = {
  encode(
    message: TextTag,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.start.isZero()) {
      writer.uint32(8).uint64(message.start);
    }
    if (!message.end.isZero()) {
      writer.uint32(16).uint64(message.end);
    }
    if (message.tag !== "") {
      writer.uint32(26).string(message.tag);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TextTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.uint64() as Long;
          break;
        case 2:
          message.end = reader.uint64() as Long;
          break;
        case 3:
          message.tag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TextTag {
    return {
      start: isSet(object.start) ? Long.fromValue(object.start) : Long.UZERO,
      end: isSet(object.end) ? Long.fromValue(object.end) : Long.UZERO,
      tag: isSet(object.tag) ? String(object.tag) : "",
    };
  },
  toJSON(message: TextTag): unknown {
    const obj: any = {};
    message.start !== undefined &&
      (obj.start = (message.start || Long.UZERO).toString());
    message.end !== undefined &&
      (obj.end = (message.end || Long.UZERO).toString());
    message.tag !== undefined && (obj.tag = message.tag);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TextTag>, I>>(object: I): TextTag {
    const message = createBaseTextTag();
    message.start =
      object.start !== undefined && object.start !== null
        ? Long.fromValue(object.start)
        : Long.UZERO;
    message.end =
      object.end !== undefined && object.end !== null
        ? Long.fromValue(object.end)
        : Long.UZERO;
    message.tag = object.tag ?? "";
    return message;
  },
  fromAmino(object: TextTagAmino): TextTag {
    return {
      start: Long.fromString(object.start),
      end: Long.fromString(object.end),
      tag: object.tag,
    };
  },
  toAmino(message: TextTag): TextTagAmino {
    const obj: any = {};
    obj.start = message.start ? message.start.toString() : undefined;
    obj.end = message.end ? message.end.toString() : undefined;
    obj.tag = message.tag;
    return obj;
  },
  fromAminoMsg(object: TextTagAminoMsg): TextTag {
    return TextTag.fromAmino(object.value);
  },
  fromProtoMsg(message: TextTagProtoMsg): TextTag {
    return TextTag.decode(message.value);
  },
  toProto(message: TextTag): Uint8Array {
    return TextTag.encode(message).finish();
  },
  toProtoMsg(message: TextTag): TextTagProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.TextTag",
      value: TextTag.encode(message).finish(),
    };
  },
};
function createBaseUrl(): Url {
  return {
    start: Long.UZERO,
    end: Long.UZERO,
    url: "",
    displayUrl: "",
  };
}
export const Url = {
  encode(message: Url, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.start.isZero()) {
      writer.uint32(8).uint64(message.start);
    }
    if (!message.end.isZero()) {
      writer.uint32(16).uint64(message.end);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.displayUrl !== "") {
      writer.uint32(34).string(message.displayUrl);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Url {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUrl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.uint64() as Long;
          break;
        case 2:
          message.end = reader.uint64() as Long;
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.displayUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Url {
    return {
      start: isSet(object.start) ? Long.fromValue(object.start) : Long.UZERO,
      end: isSet(object.end) ? Long.fromValue(object.end) : Long.UZERO,
      url: isSet(object.url) ? String(object.url) : "",
      displayUrl: isSet(object.displayUrl) ? String(object.displayUrl) : "",
    };
  },
  toJSON(message: Url): unknown {
    const obj: any = {};
    message.start !== undefined &&
      (obj.start = (message.start || Long.UZERO).toString());
    message.end !== undefined &&
      (obj.end = (message.end || Long.UZERO).toString());
    message.url !== undefined && (obj.url = message.url);
    message.displayUrl !== undefined && (obj.displayUrl = message.displayUrl);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Url>, I>>(object: I): Url {
    const message = createBaseUrl();
    message.start =
      object.start !== undefined && object.start !== null
        ? Long.fromValue(object.start)
        : Long.UZERO;
    message.end =
      object.end !== undefined && object.end !== null
        ? Long.fromValue(object.end)
        : Long.UZERO;
    message.url = object.url ?? "";
    message.displayUrl = object.displayUrl ?? "";
    return message;
  },
  fromAmino(object: UrlAmino): Url {
    return {
      start: Long.fromString(object.start),
      end: Long.fromString(object.end),
      url: object.url,
      displayUrl: object.display_url,
    };
  },
  toAmino(message: Url): UrlAmino {
    const obj: any = {};
    obj.start = message.start ? message.start.toString() : undefined;
    obj.end = message.end ? message.end.toString() : undefined;
    obj.url = message.url;
    obj.display_url = message.displayUrl;
    return obj;
  },
  fromAminoMsg(object: UrlAminoMsg): Url {
    return Url.fromAmino(object.value);
  },
  fromProtoMsg(message: UrlProtoMsg): Url {
    return Url.decode(message.value);
  },
  toProto(message: Url): Uint8Array {
    return Url.encode(message).finish();
  },
  toProtoMsg(message: Url): UrlProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.Url",
      value: Url.encode(message).finish(),
    };
  },
};
function createBaseAttachment(): Attachment {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    id: 0,
    content: undefined,
  };
}
export const Attachment = {
  encode(
    message: Attachment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.id !== 0) {
      writer.uint32(24).uint32(message.id);
    }
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Attachment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachment();
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
          message.id = reader.uint32();
          break;
        case 4:
          message.content = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Attachment {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      id: isSet(object.id) ? Number(object.id) : 0,
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
    };
  },
  toJSON(message: Attachment): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.content !== undefined &&
      (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Attachment>, I>>(
    object: I,
  ): Attachment {
    const message = createBaseAttachment();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.id = object.id ?? 0;
    message.content =
      object.content !== undefined && object.content !== null
        ? Any.fromPartial(object.content)
        : undefined;
    return message;
  },
  fromAmino(object: AttachmentAmino): Attachment {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      id: object.id,
      content: object?.content ? Any.fromAmino(object.content) : undefined,
    };
  },
  toAmino(message: Attachment): AttachmentAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.id = message.id;
    obj.content = message.content ? Any.toAmino(message.content) : undefined;
    return obj;
  },
  fromAminoMsg(object: AttachmentAminoMsg): Attachment {
    return Attachment.fromAmino(object.value);
  },
  fromProtoMsg(message: AttachmentProtoMsg): Attachment {
    return Attachment.decode(message.value);
  },
  toProto(message: Attachment): Uint8Array {
    return Attachment.encode(message).finish();
  },
  toProtoMsg(message: Attachment): AttachmentProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.Attachment",
      value: Attachment.encode(message).finish(),
    };
  },
};
function createBaseMedia(): Media {
  return {
    uri: "",
    mimeType: "",
  };
}
export const Media = {
  encode(message: Media, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    if (message.mimeType !== "") {
      writer.uint32(26).string(message.mimeType);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Media {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.uri = reader.string();
          break;
        case 3:
          message.mimeType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Media {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      mimeType: isSet(object.mimeType) ? String(object.mimeType) : "",
    };
  },
  toJSON(message: Media): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.mimeType !== undefined && (obj.mimeType = message.mimeType);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Media>, I>>(object: I): Media {
    const message = createBaseMedia();
    message.uri = object.uri ?? "";
    message.mimeType = object.mimeType ?? "";
    return message;
  },
  fromAmino(object: MediaAmino): Media {
    return {
      uri: object.uri,
      mimeType: object.mime_type,
    };
  },
  toAmino(message: Media): MediaAmino {
    const obj: any = {};
    obj.uri = message.uri;
    obj.mime_type = message.mimeType;
    return obj;
  },
  fromAminoMsg(object: MediaAminoMsg): Media {
    return Media.fromAmino(object.value);
  },
  fromProtoMsg(message: MediaProtoMsg): Media {
    return Media.decode(message.value);
  },
  toProto(message: Media): Uint8Array {
    return Media.encode(message).finish();
  },
  toProtoMsg(message: Media): MediaProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.Media",
      value: Media.encode(message).finish(),
    };
  },
};
function createBasePoll(): Poll {
  return {
    question: "",
    providedAnswers: [],
    endDate: undefined,
    allowsMultipleAnswers: false,
    allowsAnswerEdits: false,
    finalTallyResults: undefined,
  };
}
export const Poll = {
  encode(message: Poll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.question !== "") {
      writer.uint32(10).string(message.question);
    }
    for (const v of message.providedAnswers) {
      Poll_ProvidedAnswer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(26).fork()).ldelim();
    }
    if (message.allowsMultipleAnswers === true) {
      writer.uint32(32).bool(message.allowsMultipleAnswers);
    }
    if (message.allowsAnswerEdits === true) {
      writer.uint32(40).bool(message.allowsAnswerEdits);
    }
    if (message.finalTallyResults !== undefined) {
      PollTallyResults.encode(
        message.finalTallyResults,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Poll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.question = reader.string();
          break;
        case 2:
          message.providedAnswers.push(
            Poll_ProvidedAnswer.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.endDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.allowsMultipleAnswers = reader.bool();
          break;
        case 5:
          message.allowsAnswerEdits = reader.bool();
          break;
        case 6:
          message.finalTallyResults = PollTallyResults.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Poll {
    return {
      question: isSet(object.question) ? String(object.question) : "",
      providedAnswers: Array.isArray(object?.providedAnswers)
        ? object.providedAnswers.map((e: any) =>
            Poll_ProvidedAnswer.fromJSON(e),
          )
        : [],
      endDate: isSet(object.endDate)
        ? fromJsonTimestamp(object.endDate)
        : undefined,
      allowsMultipleAnswers: isSet(object.allowsMultipleAnswers)
        ? Boolean(object.allowsMultipleAnswers)
        : false,
      allowsAnswerEdits: isSet(object.allowsAnswerEdits)
        ? Boolean(object.allowsAnswerEdits)
        : false,
      finalTallyResults: isSet(object.finalTallyResults)
        ? PollTallyResults.fromJSON(object.finalTallyResults)
        : undefined,
    };
  },
  toJSON(message: Poll): unknown {
    const obj: any = {};
    message.question !== undefined && (obj.question = message.question);
    if (message.providedAnswers) {
      obj.providedAnswers = message.providedAnswers.map((e) =>
        e ? Poll_ProvidedAnswer.toJSON(e) : undefined,
      );
    } else {
      obj.providedAnswers = [];
    }
    message.endDate !== undefined &&
      (obj.endDate = fromTimestamp(message.endDate).toISOString());
    message.allowsMultipleAnswers !== undefined &&
      (obj.allowsMultipleAnswers = message.allowsMultipleAnswers);
    message.allowsAnswerEdits !== undefined &&
      (obj.allowsAnswerEdits = message.allowsAnswerEdits);
    message.finalTallyResults !== undefined &&
      (obj.finalTallyResults = message.finalTallyResults
        ? PollTallyResults.toJSON(message.finalTallyResults)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Poll>, I>>(object: I): Poll {
    const message = createBasePoll();
    message.question = object.question ?? "";
    message.providedAnswers =
      object.providedAnswers?.map((e) => Poll_ProvidedAnswer.fromPartial(e)) ||
      [];
    message.endDate =
      object.endDate !== undefined && object.endDate !== null
        ? Timestamp.fromPartial(object.endDate)
        : undefined;
    message.allowsMultipleAnswers = object.allowsMultipleAnswers ?? false;
    message.allowsAnswerEdits = object.allowsAnswerEdits ?? false;
    message.finalTallyResults =
      object.finalTallyResults !== undefined &&
      object.finalTallyResults !== null
        ? PollTallyResults.fromPartial(object.finalTallyResults)
        : undefined;
    return message;
  },
  fromAmino(object: PollAmino): Poll {
    return {
      question: object.question,
      providedAnswers: Array.isArray(object?.provided_answers)
        ? object.provided_answers.map((e: any) =>
            Poll_ProvidedAnswer.fromAmino(e),
          )
        : [],
      endDate: object?.end_date
        ? Timestamp.fromAmino(object.end_date)
        : undefined,
      allowsMultipleAnswers: object.allows_multiple_answers,
      allowsAnswerEdits: object.allows_answer_edits,
      finalTallyResults: object?.final_tally_results
        ? PollTallyResults.fromAmino(object.final_tally_results)
        : undefined,
    };
  },
  toAmino(message: Poll): PollAmino {
    const obj: any = {};
    obj.question = message.question;
    if (message.providedAnswers) {
      obj.provided_answers = message.providedAnswers.map((e) =>
        e ? Poll_ProvidedAnswer.toAmino(e) : undefined,
      );
    } else {
      obj.provided_answers = [];
    }
    obj.end_date = message.endDate
      ? Timestamp.toAmino(message.endDate)
      : undefined;
    obj.allows_multiple_answers = message.allowsMultipleAnswers;
    obj.allows_answer_edits = message.allowsAnswerEdits;
    obj.final_tally_results = message.finalTallyResults
      ? PollTallyResults.toAmino(message.finalTallyResults)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: PollAminoMsg): Poll {
    return Poll.fromAmino(object.value);
  },
  fromProtoMsg(message: PollProtoMsg): Poll {
    return Poll.decode(message.value);
  },
  toProto(message: Poll): Uint8Array {
    return Poll.encode(message).finish();
  },
  toProtoMsg(message: Poll): PollProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.Poll",
      value: Poll.encode(message).finish(),
    };
  },
};
function createBasePoll_ProvidedAnswer(): Poll_ProvidedAnswer {
  return {
    text: "",
    attachments: [],
  };
}
export const Poll_ProvidedAnswer = {
  encode(
    message: Poll_ProvidedAnswer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    for (const v of message.attachments) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Poll_ProvidedAnswer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoll_ProvidedAnswer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        case 2:
          message.attachments.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Poll_ProvidedAnswer {
    return {
      text: isSet(object.text) ? String(object.text) : "",
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },
  toJSON(message: Poll_ProvidedAnswer): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Any.toJSON(e) : undefined,
      );
    } else {
      obj.attachments = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Poll_ProvidedAnswer>, I>>(
    object: I,
  ): Poll_ProvidedAnswer {
    const message = createBasePoll_ProvidedAnswer();
    message.text = object.text ?? "";
    message.attachments =
      object.attachments?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: Poll_ProvidedAnswerAmino): Poll_ProvidedAnswer {
    return {
      text: object.text,
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Any.fromAmino(e))
        : [],
    };
  },
  toAmino(message: Poll_ProvidedAnswer): Poll_ProvidedAnswerAmino {
    const obj: any = {};
    obj.text = message.text;
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Any.toAmino(e) : undefined,
      );
    } else {
      obj.attachments = [];
    }
    return obj;
  },
  fromAminoMsg(object: Poll_ProvidedAnswerAminoMsg): Poll_ProvidedAnswer {
    return Poll_ProvidedAnswer.fromAmino(object.value);
  },
  fromProtoMsg(message: Poll_ProvidedAnswerProtoMsg): Poll_ProvidedAnswer {
    return Poll_ProvidedAnswer.decode(message.value);
  },
  toProto(message: Poll_ProvidedAnswer): Uint8Array {
    return Poll_ProvidedAnswer.encode(message).finish();
  },
  toProtoMsg(message: Poll_ProvidedAnswer): Poll_ProvidedAnswerProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.ProvidedAnswer",
      value: Poll_ProvidedAnswer.encode(message).finish(),
    };
  },
};
function createBaseUserAnswer(): UserAnswer {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    pollId: 0,
    answersIndexes: [],
    user: "",
  };
}
export const UserAnswer = {
  encode(
    message: UserAnswer,
    writer: _m0.Writer = _m0.Writer.create(),
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
    if (message.user !== "") {
      writer.uint32(42).string(message.user);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UserAnswer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAnswer();
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
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserAnswer {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      pollId: isSet(object.pollId) ? Number(object.pollId) : 0,
      answersIndexes: Array.isArray(object?.answersIndexes)
        ? object.answersIndexes.map((e: any) => Number(e))
        : [],
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: UserAnswer): unknown {
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
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserAnswer>, I>>(
    object: I,
  ): UserAnswer {
    const message = createBaseUserAnswer();
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
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: UserAnswerAmino): UserAnswer {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      pollId: object.poll_id,
      answersIndexes: Array.isArray(object?.answers_indexes)
        ? object.answers_indexes.map((e: any) => e)
        : [],
      user: object.user,
    };
  },
  toAmino(message: UserAnswer): UserAnswerAmino {
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
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(object: UserAnswerAminoMsg): UserAnswer {
    return UserAnswer.fromAmino(object.value);
  },
  fromProtoMsg(message: UserAnswerProtoMsg): UserAnswer {
    return UserAnswer.decode(message.value);
  },
  toProto(message: UserAnswer): Uint8Array {
    return UserAnswer.encode(message).finish();
  },
  toProtoMsg(message: UserAnswer): UserAnswerProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.UserAnswer",
      value: UserAnswer.encode(message).finish(),
    };
  },
};
function createBasePollTallyResults(): PollTallyResults {
  return {
    results: [],
  };
}
export const PollTallyResults = {
  encode(
    message: PollTallyResults,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.results) {
      PollTallyResults_AnswerResult.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PollTallyResults {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePollTallyResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(
            PollTallyResults_AnswerResult.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PollTallyResults {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) =>
            PollTallyResults_AnswerResult.fromJSON(e),
          )
        : [],
    };
  },
  toJSON(message: PollTallyResults): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? PollTallyResults_AnswerResult.toJSON(e) : undefined,
      );
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PollTallyResults>, I>>(
    object: I,
  ): PollTallyResults {
    const message = createBasePollTallyResults();
    message.results =
      object.results?.map((e) =>
        PollTallyResults_AnswerResult.fromPartial(e),
      ) || [];
    return message;
  },
  fromAmino(object: PollTallyResultsAmino): PollTallyResults {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) =>
            PollTallyResults_AnswerResult.fromAmino(e),
          )
        : [],
    };
  },
  toAmino(message: PollTallyResults): PollTallyResultsAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? PollTallyResults_AnswerResult.toAmino(e) : undefined,
      );
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromAminoMsg(object: PollTallyResultsAminoMsg): PollTallyResults {
    return PollTallyResults.fromAmino(object.value);
  },
  fromProtoMsg(message: PollTallyResultsProtoMsg): PollTallyResults {
    return PollTallyResults.decode(message.value);
  },
  toProto(message: PollTallyResults): Uint8Array {
    return PollTallyResults.encode(message).finish();
  },
  toProtoMsg(message: PollTallyResults): PollTallyResultsProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.PollTallyResults",
      value: PollTallyResults.encode(message).finish(),
    };
  },
};
function createBasePollTallyResults_AnswerResult(): PollTallyResults_AnswerResult {
  return {
    answerIndex: 0,
    votes: Long.UZERO,
  };
}
export const PollTallyResults_AnswerResult = {
  encode(
    message: PollTallyResults_AnswerResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.answerIndex !== 0) {
      writer.uint32(8).uint32(message.answerIndex);
    }
    if (!message.votes.isZero()) {
      writer.uint32(16).uint64(message.votes);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PollTallyResults_AnswerResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePollTallyResults_AnswerResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.answerIndex = reader.uint32();
          break;
        case 2:
          message.votes = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PollTallyResults_AnswerResult {
    return {
      answerIndex: isSet(object.answerIndex) ? Number(object.answerIndex) : 0,
      votes: isSet(object.votes) ? Long.fromValue(object.votes) : Long.UZERO,
    };
  },
  toJSON(message: PollTallyResults_AnswerResult): unknown {
    const obj: any = {};
    message.answerIndex !== undefined &&
      (obj.answerIndex = Math.round(message.answerIndex));
    message.votes !== undefined &&
      (obj.votes = (message.votes || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PollTallyResults_AnswerResult>, I>>(
    object: I,
  ): PollTallyResults_AnswerResult {
    const message = createBasePollTallyResults_AnswerResult();
    message.answerIndex = object.answerIndex ?? 0;
    message.votes =
      object.votes !== undefined && object.votes !== null
        ? Long.fromValue(object.votes)
        : Long.UZERO;
    return message;
  },
  fromAmino(
    object: PollTallyResults_AnswerResultAmino,
  ): PollTallyResults_AnswerResult {
    return {
      answerIndex: object.answer_index,
      votes: Long.fromString(object.votes),
    };
  },
  toAmino(
    message: PollTallyResults_AnswerResult,
  ): PollTallyResults_AnswerResultAmino {
    const obj: any = {};
    obj.answer_index = message.answerIndex;
    obj.votes = message.votes ? message.votes.toString() : undefined;
    return obj;
  },
  fromAminoMsg(
    object: PollTallyResults_AnswerResultAminoMsg,
  ): PollTallyResults_AnswerResult {
    return PollTallyResults_AnswerResult.fromAmino(object.value);
  },
  fromProtoMsg(
    message: PollTallyResults_AnswerResultProtoMsg,
  ): PollTallyResults_AnswerResult {
    return PollTallyResults_AnswerResult.decode(message.value);
  },
  toProto(message: PollTallyResults_AnswerResult): Uint8Array {
    return PollTallyResults_AnswerResult.encode(message).finish();
  },
  toProtoMsg(
    message: PollTallyResults_AnswerResult,
  ): PollTallyResults_AnswerResultProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.AnswerResult",
      value: PollTallyResults_AnswerResult.encode(message).finish(),
    };
  },
};
function createBaseParams(): Params {
  return {
    maxTextLength: 0,
  };
}
export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.maxTextLength !== 0) {
      writer.uint32(8).uint32(message.maxTextLength);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTextLength = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      maxTextLength: isSet(object.maxTextLength)
        ? Number(object.maxTextLength)
        : 0,
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxTextLength !== undefined &&
      (obj.maxTextLength = Math.round(message.maxTextLength));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxTextLength = object.maxTextLength ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      maxTextLength: object.max_text_length,
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_text_length = message.maxTextLength;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "desmos/x/posts/Params",
      value: Params.toAmino(message),
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.Params",
      value: Params.encode(message).finish(),
    };
  },
};
function createBasePostOwnerTransferRequest(): PostOwnerTransferRequest {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    sender: "",
    receiver: "",
  };
}
export const PostOwnerTransferRequest = {
  encode(
    message: PostOwnerTransferRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PostOwnerTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostOwnerTransferRequest();
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
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PostOwnerTransferRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
    };
  },
  toJSON(message: PostOwnerTransferRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PostOwnerTransferRequest>, I>>(
    object: I,
  ): PostOwnerTransferRequest {
    const message = createBasePostOwnerTransferRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: PostOwnerTransferRequestAmino): PostOwnerTransferRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      sender: object.sender,
      receiver: object.receiver,
    };
  },
  toAmino(message: PostOwnerTransferRequest): PostOwnerTransferRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(
    object: PostOwnerTransferRequestAminoMsg,
  ): PostOwnerTransferRequest {
    return PostOwnerTransferRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: PostOwnerTransferRequestProtoMsg,
  ): PostOwnerTransferRequest {
    return PostOwnerTransferRequest.decode(message.value);
  },
  toProto(message: PostOwnerTransferRequest): Uint8Array {
    return PostOwnerTransferRequest.encode(message).finish();
  },
  toProtoMsg(
    message: PostOwnerTransferRequest,
  ): PostOwnerTransferRequestProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.PostOwnerTransferRequest",
      value: PostOwnerTransferRequest.encode(message).finish(),
    };
  },
};
