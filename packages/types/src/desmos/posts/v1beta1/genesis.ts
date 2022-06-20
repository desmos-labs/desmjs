/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../desmos/posts/v1beta1/params";
import { Post } from "../../../desmos/posts/v1beta1/posts";
import { UserAnswer } from "../../../desmos/posts/v1beta1/polls";
import {
  PostReaction,
  RegisteredReaction,
} from "../../../desmos/posts/v1beta1/reactions";
import { Report } from "../../../desmos/posts/v1beta1/report";

/** GenesisState contains the data of the genesis state for the posts module */
export interface GenesisState {
  posts: Post[];
  usersPollAnswers: UserAnswer[];
  postsReactions: PostReaction[];
  registeredReactions: RegisteredReaction[];
  reports: Report[];
  params?: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    posts: [],
    usersPollAnswers: [],
    postsReactions: [],
    registeredReactions: [],
    reports: [],
    params: undefined,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.usersPollAnswers) {
      UserAnswer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.postsReactions) {
      PostReaction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.registeredReactions) {
      RegisteredReaction.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(50).fork()).ldelim();
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
          message.posts.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.usersPollAnswers.push(
            UserAnswer.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.postsReactions.push(
            PostReaction.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.registeredReactions.push(
            RegisteredReaction.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.reports.push(Report.decode(reader, reader.uint32()));
          break;
        case 6:
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
      posts: Array.isArray(object?.posts)
        ? object.posts.map((e: any) => Post.fromJSON(e))
        : [],
      usersPollAnswers: Array.isArray(object?.usersPollAnswers)
        ? object.usersPollAnswers.map((e: any) => UserAnswer.fromJSON(e))
        : [],
      postsReactions: Array.isArray(object?.postsReactions)
        ? object.postsReactions.map((e: any) => PostReaction.fromJSON(e))
        : [],
      registeredReactions: Array.isArray(object?.registeredReactions)
        ? object.registeredReactions.map((e: any) =>
            RegisteredReaction.fromJSON(e)
          )
        : [],
      reports: Array.isArray(object?.reports)
        ? object.reports.map((e: any) => Report.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.posts = [];
    }
    if (message.usersPollAnswers) {
      obj.usersPollAnswers = message.usersPollAnswers.map((e) =>
        e ? UserAnswer.toJSON(e) : undefined
      );
    } else {
      obj.usersPollAnswers = [];
    }
    if (message.postsReactions) {
      obj.postsReactions = message.postsReactions.map((e) =>
        e ? PostReaction.toJSON(e) : undefined
      );
    } else {
      obj.postsReactions = [];
    }
    if (message.registeredReactions) {
      obj.registeredReactions = message.registeredReactions.map((e) =>
        e ? RegisteredReaction.toJSON(e) : undefined
      );
    } else {
      obj.registeredReactions = [];
    }
    if (message.reports) {
      obj.reports = message.reports.map((e) =>
        e ? Report.toJSON(e) : undefined
      );
    } else {
      obj.reports = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    message.usersPollAnswers =
      object.usersPollAnswers?.map((e) => UserAnswer.fromPartial(e)) || [];
    message.postsReactions =
      object.postsReactions?.map((e) => PostReaction.fromPartial(e)) || [];
    message.registeredReactions =
      object.registeredReactions?.map((e) =>
        RegisteredReaction.fromPartial(e)
      ) || [];
    message.reports = object.reports?.map((e) => Report.fromPartial(e)) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
