/* eslint-disable */
import {
  RegisteredReaction,
  RegisteredReactionAmino,
  Reaction,
  ReactionAmino,
  SubspaceReactionsParams,
  SubspaceReactionsParamsAmino,
} from "./models";
import { Long, DeepPartial, Exact, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.reactions.v1";
/** GenesisState contains the data of the genesis state for the reactions module */
export interface GenesisState {
  subspacesData: SubspaceDataEntry[];
  registeredReactions: RegisteredReaction[];
  postsData: PostDataEntry[];
  reactions: Reaction[];
  subspacesParams: SubspaceReactionsParams[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/desmos.reactions.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState contains the data of the genesis state for the reactions module */
export interface GenesisStateAmino {
  subspaces_data: SubspaceDataEntryAmino[];
  registered_reactions: RegisteredReactionAmino[];
  posts_data: PostDataEntryAmino[];
  reactions: ReactionAmino[];
  subspaces_params: SubspaceReactionsParamsAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/desmos.reactions.v1.GenesisState";
  value: GenesisStateAmino;
}
/** SubspaceDataEntry contains the data related to a single subspace */
export interface SubspaceDataEntry {
  subspaceId: Long;
  registeredReactionId: number;
}
export interface SubspaceDataEntryProtoMsg {
  typeUrl: "/desmos.reactions.v1.SubspaceDataEntry";
  value: Uint8Array;
}
/** SubspaceDataEntry contains the data related to a single subspace */
export interface SubspaceDataEntryAmino {
  subspace_id: string;
  registered_reaction_id: number;
}
export interface SubspaceDataEntryAminoMsg {
  type: "/desmos.reactions.v1.SubspaceDataEntry";
  value: SubspaceDataEntryAmino;
}
/** PostDataEntry contains the data related to a single post */
export interface PostDataEntry {
  subspaceId: Long;
  postId: Long;
  reactionId: number;
}
export interface PostDataEntryProtoMsg {
  typeUrl: "/desmos.reactions.v1.PostDataEntry";
  value: Uint8Array;
}
/** PostDataEntry contains the data related to a single post */
export interface PostDataEntryAmino {
  subspace_id: string;
  post_id: string;
  reaction_id: number;
}
export interface PostDataEntryAminoMsg {
  type: "/desmos.reactions.v1.PostDataEntry";
  value: PostDataEntryAmino;
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
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      subspacesData: Array.isArray(object?.subspaces_data)
        ? object.subspaces_data.map((e: any) => SubspaceDataEntry.fromAmino(e))
        : [],
      registeredReactions: Array.isArray(object?.registered_reactions)
        ? object.registered_reactions.map((e: any) =>
            RegisteredReaction.fromAmino(e)
          )
        : [],
      postsData: Array.isArray(object?.posts_data)
        ? object.posts_data.map((e: any) => PostDataEntry.fromAmino(e))
        : [],
      reactions: Array.isArray(object?.reactions)
        ? object.reactions.map((e: any) => Reaction.fromAmino(e))
        : [],
      subspacesParams: Array.isArray(object?.subspaces_params)
        ? object.subspaces_params.map((e: any) =>
            SubspaceReactionsParams.fromAmino(e)
          )
        : [],
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.subspacesData) {
      obj.subspaces_data = message.subspacesData.map((e) =>
        e ? SubspaceDataEntry.toAmino(e) : undefined
      );
    } else {
      obj.subspaces_data = [];
    }
    if (message.registeredReactions) {
      obj.registered_reactions = message.registeredReactions.map((e) =>
        e ? RegisteredReaction.toAmino(e) : undefined
      );
    } else {
      obj.registered_reactions = [];
    }
    if (message.postsData) {
      obj.posts_data = message.postsData.map((e) =>
        e ? PostDataEntry.toAmino(e) : undefined
      );
    } else {
      obj.posts_data = [];
    }
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) =>
        e ? Reaction.toAmino(e) : undefined
      );
    } else {
      obj.reactions = [];
    }
    if (message.subspacesParams) {
      obj.subspaces_params = message.subspacesParams.map((e) =>
        e ? SubspaceReactionsParams.toAmino(e) : undefined
      );
    } else {
      obj.subspaces_params = [];
    }
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
      typeUrl: "/desmos.reactions.v1.GenesisState",
      value: GenesisState.encode(message).finish(),
    };
  },
};
function createBaseSubspaceDataEntry(): SubspaceDataEntry {
  return {
    subspaceId: Long.UZERO,
    registeredReactionId: 0,
  };
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
        ? Long.fromValue(object.subspaceId)
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
  fromAmino(object: SubspaceDataEntryAmino): SubspaceDataEntry {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      registeredReactionId: object.registered_reaction_id,
    };
  },
  toAmino(message: SubspaceDataEntry): SubspaceDataEntryAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.registered_reaction_id = message.registeredReactionId;
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
      typeUrl: "/desmos.reactions.v1.SubspaceDataEntry",
      value: SubspaceDataEntry.encode(message).finish(),
    };
  },
};
function createBasePostDataEntry(): PostDataEntry {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    reactionId: 0,
  };
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
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
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
  fromAmino(object: PostDataEntryAmino): PostDataEntry {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      reactionId: object.reaction_id,
    };
  },
  toAmino(message: PostDataEntry): PostDataEntryAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.reaction_id = message.reactionId;
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
      typeUrl: "/desmos.reactions.v1.PostDataEntry",
      value: PostDataEntry.encode(message).finish(),
    };
  },
};
