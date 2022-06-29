/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Params,
  Post,
  Attachment,
  UserAnswer,
} from "../../../desmos/posts/v1/models";
import { Timestamp } from "../../../google/protobuf/timestamp";

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

/** SubspaceDataEntry contains the data for a given subspace */
export interface SubspaceDataEntry {
  subspaceId: Long;
  initialPostId: Long;
}

/** PostDataEntry contains the data of a given post */
export interface PostDataEntry {
  subspaceId: Long;
  postId: Long;
  initialAttachmentId: number;
}

/** ActivePollData contains the data of an active poll */
export interface ActivePollData {
  subspaceId: Long;
  postId: Long;
  pollId: number;
  endDate?: Date;
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
    writer: _m0.Writer = _m0.Writer.create()
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
            SubspaceDataEntry.decode(reader, reader.uint32())
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
            ActivePollData.decode(reader, reader.uint32())
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
        e ? SubspaceDataEntry.toJSON(e) : undefined
      );
    } else {
      obj.subspacesData = [];
    }
    if (message.postsData) {
      obj.postsData = message.postsData.map((e) =>
        e ? PostDataEntry.toJSON(e) : undefined
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
        e ? Attachment.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }
    if (message.activePolls) {
      obj.activePolls = message.activePolls.map((e) =>
        e ? ActivePollData.toJSON(e) : undefined
      );
    } else {
      obj.activePolls = [];
    }
    if (message.userAnswers) {
      obj.userAnswers = message.userAnswers.map((e) =>
        e ? UserAnswer.toJSON(e) : undefined
      );
    } else {
      obj.userAnswers = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
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
};

function createBaseSubspaceDataEntry(): SubspaceDataEntry {
  return { subspaceId: Long.UZERO, initialPostId: Long.UZERO };
}

export const SubspaceDataEntry = {
  encode(
    message: SubspaceDataEntry,
    writer: _m0.Writer = _m0.Writer.create()
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
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      initialPostId: isSet(object.initialPostId)
        ? Long.fromString(object.initialPostId)
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
    object: I
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
};

function createBasePostDataEntry(): PostDataEntry {
  return { subspaceId: Long.UZERO, postId: Long.UZERO, initialAttachmentId: 0 };
}

export const PostDataEntry = {
  encode(
    message: PostDataEntry,
    writer: _m0.Writer = _m0.Writer.create()
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
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
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
    object: I
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
    if (message.endDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endDate),
        writer.uint32(34).fork()
      ).ldelim();
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
          message.endDate = fromTimestamp(
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

  fromJSON(object: any): ActivePollData {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
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
      (obj.endDate = message.endDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivePollData>, I>>(
    object: I
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
    message.endDate = object.endDate ?? undefined;
    return message;
  },
};

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
