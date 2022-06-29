/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  RegisteredReaction,
  Reaction,
  SubspaceReactionsParams,
} from "../../../desmos/reactions/v1/models";

/** GenesisState contains the data of the genesis state for the reactions module */
export interface GenesisState {
  subspacesData: SubspaceDataEntry[];
  registeredReactions: RegisteredReaction[];
  postsData: PostDataEntry[];
  reactions: Reaction[];
  subspacesParams: SubspaceReactionsParams[];
}

/** SubspaceDataEntry contains the data related to a single subspace */
export interface SubspaceDataEntry {
  subspaceId: Long;
  registeredReactionId: number;
}

/** PostDataEntry contains the data related to a single post */
export interface PostDataEntry {
  subspaceId: Long;
  postId: Long;
  reactionId: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    subspacesData: [],
    registeredReactions: [],
    postsData: [],
    reactions: [],
    subspacesParams: [],
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
    for (const v of message.registeredReactions) {
      RegisteredReaction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.postsData) {
      PostDataEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reactions) {
      Reaction.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.subspacesParams) {
      SubspaceReactionsParams.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.registeredReactions.push(
            RegisteredReaction.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.postsData.push(PostDataEntry.decode(reader, reader.uint32()));
          break;
        case 4:
          message.reactions.push(Reaction.decode(reader, reader.uint32()));
          break;
        case 5:
          message.subspacesParams.push(
            SubspaceReactionsParams.decode(reader, reader.uint32())
          );
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
      registeredReactions: Array.isArray(object?.registeredReactions)
        ? object.registeredReactions.map((e: any) =>
            RegisteredReaction.fromJSON(e)
          )
        : [],
      postsData: Array.isArray(object?.postsData)
        ? object.postsData.map((e: any) => PostDataEntry.fromJSON(e))
        : [],
      reactions: Array.isArray(object?.reactions)
        ? object.reactions.map((e: any) => Reaction.fromJSON(e))
        : [],
      subspacesParams: Array.isArray(object?.subspacesParams)
        ? object.subspacesParams.map((e: any) =>
            SubspaceReactionsParams.fromJSON(e)
          )
        : [],
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
    if (message.registeredReactions) {
      obj.registeredReactions = message.registeredReactions.map((e) =>
        e ? RegisteredReaction.toJSON(e) : undefined
      );
    } else {
      obj.registeredReactions = [];
    }
    if (message.postsData) {
      obj.postsData = message.postsData.map((e) =>
        e ? PostDataEntry.toJSON(e) : undefined
      );
    } else {
      obj.postsData = [];
    }
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) =>
        e ? Reaction.toJSON(e) : undefined
      );
    } else {
      obj.reactions = [];
    }
    if (message.subspacesParams) {
      obj.subspacesParams = message.subspacesParams.map((e) =>
        e ? SubspaceReactionsParams.toJSON(e) : undefined
      );
    } else {
      obj.subspacesParams = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.subspacesData =
      object.subspacesData?.map((e) => SubspaceDataEntry.fromPartial(e)) || [];
    message.registeredReactions =
      object.registeredReactions?.map((e) =>
        RegisteredReaction.fromPartial(e)
      ) || [];
    message.postsData =
      object.postsData?.map((e) => PostDataEntry.fromPartial(e)) || [];
    message.reactions =
      object.reactions?.map((e) => Reaction.fromPartial(e)) || [];
    message.subspacesParams =
      object.subspacesParams?.map((e) =>
        SubspaceReactionsParams.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseSubspaceDataEntry(): SubspaceDataEntry {
  return { subspaceId: Long.UZERO, registeredReactionId: 0 };
}

export const SubspaceDataEntry = {
  encode(
    message: SubspaceDataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.registeredReactionId !== 0) {
      writer.uint32(16).uint32(message.registeredReactionId);
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
          message.registeredReactionId = reader.uint32();
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
      registeredReactionId: isSet(object.registeredReactionId)
        ? Number(object.registeredReactionId)
        : 0,
    };
  },

  toJSON(message: SubspaceDataEntry): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.registeredReactionId !== undefined &&
      (obj.registeredReactionId = Math.round(message.registeredReactionId));
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
    message.registeredReactionId = object.registeredReactionId ?? 0;
    return message;
  },
};

function createBasePostDataEntry(): PostDataEntry {
  return { subspaceId: Long.UZERO, postId: Long.UZERO, reactionId: 0 };
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
    if (message.reactionId !== 0) {
      writer.uint32(24).uint32(message.reactionId);
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
          message.reactionId = reader.uint32();
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
      reactionId: isSet(object.reactionId) ? Number(object.reactionId) : 0,
    };
  },

  toJSON(message: PostDataEntry): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.reactionId !== undefined &&
      (obj.reactionId = Math.round(message.reactionId));
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
    message.reactionId = object.reactionId ?? 0;
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
