/* eslint-disable */
import {
  Post,
  PostAmino,
  Attachment,
  AttachmentAmino,
  UserAnswer,
  UserAnswerAmino,
  Params,
  ParamsAmino,
} from "./models";
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
/** GenesisState contains the data of the genesis state for the posts module */
export interface GenesisState {
  subspacesData: SubspaceDataEntry[];
  postsData: PostDataEntry[];
  posts: Post[];
  attachments: Attachment[];
  activePolls: ActivePollData[];
  userAnswers: UserAnswer[];
  params?: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/desmos.posts.v3.GenesisState";
  value: Uint8Array;
}
/** GenesisState contains the data of the genesis state for the posts module */
export interface GenesisStateAmino {
  subspaces_data: SubspaceDataEntryAmino[];
  posts_data: PostDataEntryAmino[];
  posts: PostAmino[];
  attachments: AttachmentAmino[];
  active_polls: ActivePollDataAmino[];
  user_answers: UserAnswerAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/desmos.posts.v3.GenesisState";
  value: GenesisStateAmino;
}
/** SubspaceDataEntry contains the data for a given subspace */
export interface SubspaceDataEntry {
  subspaceId: Long;
  initialPostId: Long;
}
export interface SubspaceDataEntryProtoMsg {
  typeUrl: "/desmos.posts.v3.SubspaceDataEntry";
  value: Uint8Array;
}
/** SubspaceDataEntry contains the data for a given subspace */
export interface SubspaceDataEntryAmino {
  subspace_id: string;
  initial_post_id: string;
}
export interface SubspaceDataEntryAminoMsg {
  type: "/desmos.posts.v3.SubspaceDataEntry";
  value: SubspaceDataEntryAmino;
}
/** PostDataEntry contains the data of a given post */
export interface PostDataEntry {
  subspaceId: Long;
  postId: Long;
  initialAttachmentId: number;
}
export interface PostDataEntryProtoMsg {
  typeUrl: "/desmos.posts.v3.PostDataEntry";
  value: Uint8Array;
}
/** PostDataEntry contains the data of a given post */
export interface PostDataEntryAmino {
  subspace_id: string;
  post_id: string;
  initial_attachment_id: number;
}
export interface PostDataEntryAminoMsg {
  type: "/desmos.posts.v3.PostDataEntry";
  value: PostDataEntryAmino;
}
/** ActivePollData contains the data of an active poll */
export interface ActivePollData {
  subspaceId: Long;
  postId: Long;
  pollId: number;
  endDate?: Timestamp;
}
export interface ActivePollDataProtoMsg {
  typeUrl: "/desmos.posts.v3.ActivePollData";
  value: Uint8Array;
}
/** ActivePollData contains the data of an active poll */
export interface ActivePollDataAmino {
  subspace_id: string;
  post_id: string;
  poll_id: number;
  end_date?: TimestampAmino;
}
export interface ActivePollDataAminoMsg {
  type: "/desmos.posts.v3.ActivePollData";
  value: ActivePollDataAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    subspacesData: [],
    postsData: [],
    posts: [],
    attachments: [],
    activePolls: [],
    userAnswers: [],
    params: undefined,
  };
}
export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.subspacesData) {
      SubspaceDataEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.postsData) {
      PostDataEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.activePolls) {
      ActivePollData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.userAnswers) {
      UserAnswer.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspacesData.push(
            SubspaceDataEntry.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.postsData.push(PostDataEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.posts.push(Post.decode(reader, reader.uint32()));
          break;
        case 4:
          message.attachments.push(Attachment.decode(reader, reader.uint32()));
          break;
        case 5:
          message.activePolls.push(
            ActivePollData.decode(reader, reader.uint32()),
          );
          break;
        case 6:
          message.userAnswers.push(UserAnswer.decode(reader, reader.uint32()));
          break;
        case 7:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      subspacesData: Array.isArray(object?.subspacesData)
        ? object.subspacesData.map((e: any) => SubspaceDataEntry.fromJSON(e))
        : [],
      postsData: Array.isArray(object?.postsData)
        ? object.postsData.map((e: any) => PostDataEntry.fromJSON(e))
        : [],
      posts: Array.isArray(object?.posts)
        ? object.posts.map((e: any) => Post.fromJSON(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Attachment.fromJSON(e))
        : [],
      activePolls: Array.isArray(object?.activePolls)
        ? object.activePolls.map((e: any) => ActivePollData.fromJSON(e))
        : [],
      userAnswers: Array.isArray(object?.userAnswers)
        ? object.userAnswers.map((e: any) => UserAnswer.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.subspacesData) {
      obj.subspacesData = message.subspacesData.map((e) =>
        e ? SubspaceDataEntry.toJSON(e) : undefined,
      );
    } else {
      obj.subspacesData = [];
    }
    if (message.postsData) {
      obj.postsData = message.postsData.map((e) =>
        e ? PostDataEntry.toJSON(e) : undefined,
      );
    } else {
      obj.postsData = [];
    }
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.posts = [];
    }
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Attachment.toJSON(e) : undefined,
      );
    } else {
      obj.attachments = [];
    }
    if (message.activePolls) {
      obj.activePolls = message.activePolls.map((e) =>
        e ? ActivePollData.toJSON(e) : undefined,
      );
    } else {
      obj.activePolls = [];
    }
    if (message.userAnswers) {
      obj.userAnswers = message.userAnswers.map((e) =>
        e ? UserAnswer.toJSON(e) : undefined,
      );
    } else {
      obj.userAnswers = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.subspacesData =
      object.subspacesData?.map((e) => SubspaceDataEntry.fromPartial(e)) || [];
    message.postsData =
      object.postsData?.map((e) => PostDataEntry.fromPartial(e)) || [];
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    message.attachments =
      object.attachments?.map((e) => Attachment.fromPartial(e)) || [];
    message.activePolls =
      object.activePolls?.map((e) => ActivePollData.fromPartial(e)) || [];
    message.userAnswers =
      object.userAnswers?.map((e) => UserAnswer.fromPartial(e)) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      subspacesData: Array.isArray(object?.subspaces_data)
        ? object.subspaces_data.map((e: any) => SubspaceDataEntry.fromAmino(e))
        : [],
      postsData: Array.isArray(object?.posts_data)
        ? object.posts_data.map((e: any) => PostDataEntry.fromAmino(e))
        : [],
      posts: Array.isArray(object?.posts)
        ? object.posts.map((e: any) => Post.fromAmino(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Attachment.fromAmino(e))
        : [],
      activePolls: Array.isArray(object?.active_polls)
        ? object.active_polls.map((e: any) => ActivePollData.fromAmino(e))
        : [],
      userAnswers: Array.isArray(object?.user_answers)
        ? object.user_answers.map((e: any) => UserAnswer.fromAmino(e))
        : [],
      params: object?.params ? Params.fromAmino(object.params) : undefined,
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.subspacesData) {
      obj.subspaces_data = message.subspacesData.map((e) =>
        e ? SubspaceDataEntry.toAmino(e) : undefined,
      );
    } else {
      obj.subspaces_data = [];
    }
    if (message.postsData) {
      obj.posts_data = message.postsData.map((e) =>
        e ? PostDataEntry.toAmino(e) : undefined,
      );
    } else {
      obj.posts_data = [];
    }
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toAmino(e) : undefined));
    } else {
      obj.posts = [];
    }
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Attachment.toAmino(e) : undefined,
      );
    } else {
      obj.attachments = [];
    }
    if (message.activePolls) {
      obj.active_polls = message.activePolls.map((e) =>
        e ? ActivePollData.toAmino(e) : undefined,
      );
    } else {
      obj.active_polls = [];
    }
    if (message.userAnswers) {
      obj.user_answers = message.userAnswers.map((e) =>
        e ? UserAnswer.toAmino(e) : undefined,
      );
    } else {
      obj.user_answers = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.GenesisState",
      value: GenesisState.encode(message).finish(),
    };
  },
};
function createBaseSubspaceDataEntry(): SubspaceDataEntry {
  return {
    subspaceId: Long.UZERO,
    initialPostId: Long.UZERO,
  };
}
export const SubspaceDataEntry = {
  encode(
    message: SubspaceDataEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.initialPostId.isZero()) {
      writer.uint32(16).uint64(message.initialPostId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SubspaceDataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubspaceDataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.initialPostId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubspaceDataEntry {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      initialPostId: isSet(object.initialPostId)
        ? Long.fromValue(object.initialPostId)
        : Long.UZERO,
    };
  },
  toJSON(message: SubspaceDataEntry): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.initialPostId !== undefined &&
      (obj.initialPostId = (message.initialPostId || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SubspaceDataEntry>, I>>(
    object: I,
  ): SubspaceDataEntry {
    const message = createBaseSubspaceDataEntry();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.initialPostId =
      object.initialPostId !== undefined && object.initialPostId !== null
        ? Long.fromValue(object.initialPostId)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: SubspaceDataEntryAmino): SubspaceDataEntry {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      initialPostId: Long.fromString(object.initial_post_id),
    };
  },
  toAmino(message: SubspaceDataEntry): SubspaceDataEntryAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.initial_post_id = message.initialPostId
      ? message.initialPostId.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(object: SubspaceDataEntryAminoMsg): SubspaceDataEntry {
    return SubspaceDataEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: SubspaceDataEntryProtoMsg): SubspaceDataEntry {
    return SubspaceDataEntry.decode(message.value);
  },
  toProto(message: SubspaceDataEntry): Uint8Array {
    return SubspaceDataEntry.encode(message).finish();
  },
  toProtoMsg(message: SubspaceDataEntry): SubspaceDataEntryProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.SubspaceDataEntry",
      value: SubspaceDataEntry.encode(message).finish(),
    };
  },
};
function createBasePostDataEntry(): PostDataEntry {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    initialAttachmentId: 0,
  };
}
export const PostDataEntry = {
  encode(
    message: PostDataEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.initialAttachmentId !== 0) {
      writer.uint32(24).uint32(message.initialAttachmentId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PostDataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostDataEntry();
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
          message.initialAttachmentId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PostDataEntry {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      initialAttachmentId: isSet(object.initialAttachmentId)
        ? Number(object.initialAttachmentId)
        : 0,
    };
  },
  toJSON(message: PostDataEntry): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.initialAttachmentId !== undefined &&
      (obj.initialAttachmentId = Math.round(message.initialAttachmentId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PostDataEntry>, I>>(
    object: I,
  ): PostDataEntry {
    const message = createBasePostDataEntry();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.initialAttachmentId = object.initialAttachmentId ?? 0;
    return message;
  },
  fromAmino(object: PostDataEntryAmino): PostDataEntry {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      initialAttachmentId: object.initial_attachment_id,
    };
  },
  toAmino(message: PostDataEntry): PostDataEntryAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.initial_attachment_id = message.initialAttachmentId;
    return obj;
  },
  fromAminoMsg(object: PostDataEntryAminoMsg): PostDataEntry {
    return PostDataEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PostDataEntryProtoMsg): PostDataEntry {
    return PostDataEntry.decode(message.value);
  },
  toProto(message: PostDataEntry): Uint8Array {
    return PostDataEntry.encode(message).finish();
  },
  toProtoMsg(message: PostDataEntry): PostDataEntryProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.PostDataEntry",
      value: PostDataEntry.encode(message).finish(),
    };
  },
};
function createBaseActivePollData(): ActivePollData {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    pollId: 0,
    endDate: undefined,
  };
}
export const ActivePollData = {
  encode(
    message: ActivePollData,
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
    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ActivePollData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivePollData();
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
          message.endDate = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActivePollData {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      pollId: isSet(object.pollId) ? Number(object.pollId) : 0,
      endDate: isSet(object.endDate)
        ? fromJsonTimestamp(object.endDate)
        : undefined,
    };
  },
  toJSON(message: ActivePollData): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.pollId !== undefined && (obj.pollId = Math.round(message.pollId));
    message.endDate !== undefined &&
      (obj.endDate = fromTimestamp(message.endDate).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ActivePollData>, I>>(
    object: I,
  ): ActivePollData {
    const message = createBaseActivePollData();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.pollId = object.pollId ?? 0;
    message.endDate =
      object.endDate !== undefined && object.endDate !== null
        ? Timestamp.fromPartial(object.endDate)
        : undefined;
    return message;
  },
  fromAmino(object: ActivePollDataAmino): ActivePollData {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      pollId: object.poll_id,
      endDate: object?.end_date
        ? Timestamp.fromAmino(object.end_date)
        : undefined,
    };
  },
  toAmino(message: ActivePollData): ActivePollDataAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.poll_id = message.pollId;
    obj.end_date = message.endDate
      ? Timestamp.toAmino(message.endDate)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ActivePollDataAminoMsg): ActivePollData {
    return ActivePollData.fromAmino(object.value);
  },
  fromProtoMsg(message: ActivePollDataProtoMsg): ActivePollData {
    return ActivePollData.decode(message.value);
  },
  toProto(message: ActivePollData): Uint8Array {
    return ActivePollData.encode(message).finish();
  },
  toProtoMsg(message: ActivePollData): ActivePollDataProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.ActivePollData",
      value: ActivePollData.encode(message).finish(),
    };
  },
};
