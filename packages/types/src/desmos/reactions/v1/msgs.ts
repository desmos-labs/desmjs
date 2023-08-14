/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import {
  RegisteredReactionValueParams,
  RegisteredReactionValueParamsAmino,
  FreeTextValueParams,
  FreeTextValueParamsAmino,
} from "./models";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.reactions.v1";
/** MsgAddReaction represents the message to be used to add a post reaction */
export interface MsgAddReaction {
  /** Id of the subspace inside which the post to react to is */
  subspaceId: Long;
  /** Id of the post to react to */
  postId: Long;
  /** Value of the reaction */
  value?: Any;
  /** User reacting to the post */
  user: string;
}
export interface MsgAddReactionProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgAddReaction";
  value: Uint8Array;
}
/** MsgAddReaction represents the message to be used to add a post reaction */
export interface MsgAddReactionAmino {
  /** Id of the subspace inside which the post to react to is */
  subspace_id: string;
  /** Id of the post to react to */
  post_id: string;
  /** Value of the reaction */
  value?: AnyAmino;
  /** User reacting to the post */
  user: string;
}
export interface MsgAddReactionAminoMsg {
  type: "/desmos.reactions.v1.MsgAddReaction";
  value: MsgAddReactionAmino;
}
/** MsgAddReactionResponse represents the Msg/AddReaction response type */
export interface MsgAddReactionResponse {
  /** Id of the newly added reaction */
  reactionId: number;
}
export interface MsgAddReactionResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgAddReactionResponse";
  value: Uint8Array;
}
/** MsgAddReactionResponse represents the Msg/AddReaction response type */
export interface MsgAddReactionResponseAmino {
  /** Id of the newly added reaction */
  reaction_id: number;
}
export interface MsgAddReactionResponseAminoMsg {
  type: "/desmos.reactions.v1.MsgAddReactionResponse";
  value: MsgAddReactionResponseAmino;
}
/**
 * MsgRemoveReaction represents the message to be used to remove an
 * existing reaction from a post
 */
export interface MsgRemoveReaction {
  /** Id of the subspace inside which the reaction to remove is */
  subspaceId: Long;
  /** Id of the post from which to remove the reaction */
  postId: Long;
  /** Id of the reaction to be removed */
  reactionId: number;
  /** User removing the reaction */
  user: string;
}
export interface MsgRemoveReactionProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgRemoveReaction";
  value: Uint8Array;
}
/**
 * MsgRemoveReaction represents the message to be used to remove an
 * existing reaction from a post
 */
export interface MsgRemoveReactionAmino {
  /** Id of the subspace inside which the reaction to remove is */
  subspace_id: string;
  /** Id of the post from which to remove the reaction */
  post_id: string;
  /** Id of the reaction to be removed */
  reaction_id: number;
  /** User removing the reaction */
  user: string;
}
export interface MsgRemoveReactionAminoMsg {
  type: "/desmos.reactions.v1.MsgRemoveReaction";
  value: MsgRemoveReactionAmino;
}
/** MsgRemoveReactionResponse represents the Msg/RemoveReaction response type */
export interface MsgRemoveReactionResponse {}
export interface MsgRemoveReactionResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgRemoveReactionResponse";
  value: Uint8Array;
}
/** MsgRemoveReactionResponse represents the Msg/RemoveReaction response type */
export interface MsgRemoveReactionResponseAmino {}
export interface MsgRemoveReactionResponseAminoMsg {
  type: "/desmos.reactions.v1.MsgRemoveReactionResponse";
  value: MsgRemoveReactionResponseAmino;
}
/**
 * MsgAddRegisteredReaction represents the message to be used to
 * register a new supported reaction
 */
export interface MsgAddRegisteredReaction {
  /** Id of the subspace inside which this reaction should be registered */
  subspaceId: Long;
  /** Shorthand code of the reaction */
  shorthandCode: string;
  /** Display value of the reaction */
  displayValue: string;
  /** User adding the supported reaction */
  user: string;
}
export interface MsgAddRegisteredReactionProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReaction";
  value: Uint8Array;
}
/**
 * MsgAddRegisteredReaction represents the message to be used to
 * register a new supported reaction
 */
export interface MsgAddRegisteredReactionAmino {
  /** Id of the subspace inside which this reaction should be registered */
  subspace_id: string;
  /** Shorthand code of the reaction */
  shorthand_code: string;
  /** Display value of the reaction */
  display_value: string;
  /** User adding the supported reaction */
  user: string;
}
export interface MsgAddRegisteredReactionAminoMsg {
  type: "/desmos.reactions.v1.MsgAddRegisteredReaction";
  value: MsgAddRegisteredReactionAmino;
}
/**
 * MsgAddRegisteredReactionResponse represents the
 * Msg/AddRegisteredReaction response type
 */
export interface MsgAddRegisteredReactionResponse {
  /** Id of the newly registered reaction */
  registeredReactionId: number;
}
export interface MsgAddRegisteredReactionResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReactionResponse";
  value: Uint8Array;
}
/**
 * MsgAddRegisteredReactionResponse represents the
 * Msg/AddRegisteredReaction response type
 */
export interface MsgAddRegisteredReactionResponseAmino {
  /** Id of the newly registered reaction */
  registered_reaction_id: number;
}
export interface MsgAddRegisteredReactionResponseAminoMsg {
  type: "/desmos.reactions.v1.MsgAddRegisteredReactionResponse";
  value: MsgAddRegisteredReactionResponseAmino;
}
/**
 * MsgEditRegisteredReaction represents the message to be used to edit a
 * registered reaction
 */
export interface MsgEditRegisteredReaction {
  /** Id of the subspace inside which the reaction to edit is */
  subspaceId: Long;
  /** Id of the registered reaction to edit */
  registeredReactionId: number;
  /** New shorthand code to be set */
  shorthandCode: string;
  /** Display value to be set */
  displayValue: string;
  /** User editing the registered reaction */
  user: string;
}
export interface MsgEditRegisteredReactionProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReaction";
  value: Uint8Array;
}
/**
 * MsgEditRegisteredReaction represents the message to be used to edit a
 * registered reaction
 */
export interface MsgEditRegisteredReactionAmino {
  /** Id of the subspace inside which the reaction to edit is */
  subspace_id: string;
  /** Id of the registered reaction to edit */
  registered_reaction_id: number;
  /** New shorthand code to be set */
  shorthand_code: string;
  /** Display value to be set */
  display_value: string;
  /** User editing the registered reaction */
  user: string;
}
export interface MsgEditRegisteredReactionAminoMsg {
  type: "/desmos.reactions.v1.MsgEditRegisteredReaction";
  value: MsgEditRegisteredReactionAmino;
}
/**
 * MsgEditRegisteredReactionResponse represents the Msg/EditRegisteredReaction
 * response type
 */
export interface MsgEditRegisteredReactionResponse {}
export interface MsgEditRegisteredReactionResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReactionResponse";
  value: Uint8Array;
}
/**
 * MsgEditRegisteredReactionResponse represents the Msg/EditRegisteredReaction
 * response type
 */
export interface MsgEditRegisteredReactionResponseAmino {}
export interface MsgEditRegisteredReactionResponseAminoMsg {
  type: "/desmos.reactions.v1.MsgEditRegisteredReactionResponse";
  value: MsgEditRegisteredReactionResponseAmino;
}
/**
 * MsgRemoveRegisteredReaction represents the message to be used to
 * remove an existing registered reaction
 */
export interface MsgRemoveRegisteredReaction {
  /** Id of the subspace from which to remove the registered reaction */
  subspaceId: Long;
  /** Id of the registered reaction to be removed */
  registeredReactionId: number;
  /** User removing the registered reaction */
  user: string;
}
export interface MsgRemoveRegisteredReactionProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReaction";
  value: Uint8Array;
}
/**
 * MsgRemoveRegisteredReaction represents the message to be used to
 * remove an existing registered reaction
 */
export interface MsgRemoveRegisteredReactionAmino {
  /** Id of the subspace from which to remove the registered reaction */
  subspace_id: string;
  /** Id of the registered reaction to be removed */
  registered_reaction_id: number;
  /** User removing the registered reaction */
  user: string;
}
export interface MsgRemoveRegisteredReactionAminoMsg {
  type: "/desmos.reactions.v1.MsgRemoveRegisteredReaction";
  value: MsgRemoveRegisteredReactionAmino;
}
/**
 * MsgRemoveRegisteredReactionResponse represents the
 * Msg/RemoveRegisteredReaction response type
 */
export interface MsgRemoveRegisteredReactionResponse {}
export interface MsgRemoveRegisteredReactionResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReactionResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveRegisteredReactionResponse represents the
 * Msg/RemoveRegisteredReaction response type
 */
export interface MsgRemoveRegisteredReactionResponseAmino {}
export interface MsgRemoveRegisteredReactionResponseAminoMsg {
  type: "/desmos.reactions.v1.MsgRemoveRegisteredReactionResponse";
  value: MsgRemoveRegisteredReactionResponseAmino;
}
/**
 * MsgSetReactionsParams represents the message to be used when setting
 * a subspace reactions params
 */
export interface MsgSetReactionsParams {
  /** Id of the subspace for which to set the params */
  subspaceId: Long;
  /** Params related to RegisteredReactionValue reactions */
  registeredReaction?: RegisteredReactionValueParams;
  /** Params related to FreeTextValue reactions */
  freeText?: FreeTextValueParams;
  /** User setting the params */
  user: string;
}
export interface MsgSetReactionsParamsProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgSetReactionsParams";
  value: Uint8Array;
}
/**
 * MsgSetReactionsParams represents the message to be used when setting
 * a subspace reactions params
 */
export interface MsgSetReactionsParamsAmino {
  /** Id of the subspace for which to set the params */
  subspace_id: string;
  /** Params related to RegisteredReactionValue reactions */
  registered_reaction?: RegisteredReactionValueParamsAmino;
  /** Params related to FreeTextValue reactions */
  free_text?: FreeTextValueParamsAmino;
  /** User setting the params */
  user: string;
}
export interface MsgSetReactionsParamsAminoMsg {
  type: "/desmos.reactions.v1.MsgSetReactionsParams";
  value: MsgSetReactionsParamsAmino;
}
/**
 * MsgSetReactionsParamsResponse represents the Msg/SetReactionsParams response
 * type
 */
export interface MsgSetReactionsParamsResponse {}
export interface MsgSetReactionsParamsResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.MsgSetReactionsParamsResponse";
  value: Uint8Array;
}
/**
 * MsgSetReactionsParamsResponse represents the Msg/SetReactionsParams response
 * type
 */
export interface MsgSetReactionsParamsResponseAmino {}
export interface MsgSetReactionsParamsResponseAminoMsg {
  type: "/desmos.reactions.v1.MsgSetReactionsParamsResponse";
  value: MsgSetReactionsParamsResponseAmino;
}
function createBaseMsgAddReaction(): MsgAddReaction {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    value: undefined,
    user: "",
  };
}
export const MsgAddReaction = {
  encode(
    message: MsgAddReaction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddReaction();
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
          message.value = Any.decode(reader, reader.uint32());
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
  fromJSON(object: any): MsgAddReaction {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      value: isSet(object.value) ? Any.fromJSON(object.value) : undefined,
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: MsgAddReaction): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.value !== undefined &&
      (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddReaction>, I>>(
    object: I,
  ): MsgAddReaction {
    const message = createBaseMsgAddReaction();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.value =
      object.value !== undefined && object.value !== null
        ? Any.fromPartial(object.value)
        : undefined;
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgAddReactionAmino): MsgAddReaction {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      value: object?.value ? Any.fromAmino(object.value) : undefined,
      user: object.user,
    };
  },
  toAmino(message: MsgAddReaction): MsgAddReactionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.value = message.value ? Any.toAmino(message.value) : undefined;
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(object: MsgAddReactionAminoMsg): MsgAddReaction {
    return MsgAddReaction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddReactionProtoMsg): MsgAddReaction {
    return MsgAddReaction.decode(message.value);
  },
  toProto(message: MsgAddReaction): Uint8Array {
    return MsgAddReaction.encode(message).finish();
  },
  toProtoMsg(message: MsgAddReaction): MsgAddReactionProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgAddReaction",
      value: MsgAddReaction.encode(message).finish(),
    };
  },
};
function createBaseMsgAddReactionResponse(): MsgAddReactionResponse {
  return {
    reactionId: 0,
  };
}
export const MsgAddReactionResponse = {
  encode(
    message: MsgAddReactionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.reactionId !== 0) {
      writer.uint32(8).uint32(message.reactionId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgAddReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddReactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reactionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddReactionResponse {
    return {
      reactionId: isSet(object.reactionId) ? Number(object.reactionId) : 0,
    };
  },
  toJSON(message: MsgAddReactionResponse): unknown {
    const obj: any = {};
    message.reactionId !== undefined &&
      (obj.reactionId = Math.round(message.reactionId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddReactionResponse>, I>>(
    object: I,
  ): MsgAddReactionResponse {
    const message = createBaseMsgAddReactionResponse();
    message.reactionId = object.reactionId ?? 0;
    return message;
  },
  fromAmino(object: MsgAddReactionResponseAmino): MsgAddReactionResponse {
    return {
      reactionId: object.reaction_id,
    };
  },
  toAmino(message: MsgAddReactionResponse): MsgAddReactionResponseAmino {
    const obj: any = {};
    obj.reaction_id = message.reactionId;
    return obj;
  },
  fromAminoMsg(object: MsgAddReactionResponseAminoMsg): MsgAddReactionResponse {
    return MsgAddReactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAddReactionResponseProtoMsg,
  ): MsgAddReactionResponse {
    return MsgAddReactionResponse.decode(message.value);
  },
  toProto(message: MsgAddReactionResponse): Uint8Array {
    return MsgAddReactionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddReactionResponse): MsgAddReactionResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgAddReactionResponse",
      value: MsgAddReactionResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRemoveReaction(): MsgRemoveReaction {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    reactionId: 0,
    user: "",
  };
}
export const MsgRemoveReaction = {
  encode(
    message: MsgRemoveReaction,
    writer: _m0.Writer = _m0.Writer.create(),
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
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveReaction();
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
  fromJSON(object: any): MsgRemoveReaction {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      reactionId: isSet(object.reactionId) ? Number(object.reactionId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: MsgRemoveReaction): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.reactionId !== undefined &&
      (obj.reactionId = Math.round(message.reactionId));
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveReaction>, I>>(
    object: I,
  ): MsgRemoveReaction {
    const message = createBaseMsgRemoveReaction();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.reactionId = object.reactionId ?? 0;
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveReactionAmino): MsgRemoveReaction {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      reactionId: object.reaction_id,
      user: object.user,
    };
  },
  toAmino(message: MsgRemoveReaction): MsgRemoveReactionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.reaction_id = message.reactionId;
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveReactionAminoMsg): MsgRemoveReaction {
    return MsgRemoveReaction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveReactionProtoMsg): MsgRemoveReaction {
    return MsgRemoveReaction.decode(message.value);
  },
  toProto(message: MsgRemoveReaction): Uint8Array {
    return MsgRemoveReaction.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveReaction): MsgRemoveReactionProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgRemoveReaction",
      value: MsgRemoveReaction.encode(message).finish(),
    };
  },
};
function createBaseMsgRemoveReactionResponse(): MsgRemoveReactionResponse {
  return {};
}
export const MsgRemoveReactionResponse = {
  encode(
    _: MsgRemoveReactionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRemoveReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveReactionResponse();
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
  fromJSON(_: any): MsgRemoveReactionResponse {
    return {};
  },
  toJSON(_: MsgRemoveReactionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveReactionResponse>, I>>(
    _: I,
  ): MsgRemoveReactionResponse {
    const message = createBaseMsgRemoveReactionResponse();
    return message;
  },
  fromAmino(_: MsgRemoveReactionResponseAmino): MsgRemoveReactionResponse {
    return {};
  },
  toAmino(_: MsgRemoveReactionResponse): MsgRemoveReactionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgRemoveReactionResponseAminoMsg,
  ): MsgRemoveReactionResponse {
    return MsgRemoveReactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRemoveReactionResponseProtoMsg,
  ): MsgRemoveReactionResponse {
    return MsgRemoveReactionResponse.decode(message.value);
  },
  toProto(message: MsgRemoveReactionResponse): Uint8Array {
    return MsgRemoveReactionResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRemoveReactionResponse,
  ): MsgRemoveReactionResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgRemoveReactionResponse",
      value: MsgRemoveReactionResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgAddRegisteredReaction(): MsgAddRegisteredReaction {
  return {
    subspaceId: Long.UZERO,
    shorthandCode: "",
    displayValue: "",
    user: "",
  };
}
export const MsgAddRegisteredReaction = {
  encode(
    message: MsgAddRegisteredReaction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.shorthandCode !== "") {
      writer.uint32(18).string(message.shorthandCode);
    }
    if (message.displayValue !== "") {
      writer.uint32(26).string(message.displayValue);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgAddRegisteredReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRegisteredReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.shorthandCode = reader.string();
          break;
        case 3:
          message.displayValue = reader.string();
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
  fromJSON(object: any): MsgAddRegisteredReaction {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      shorthandCode: isSet(object.shorthandCode)
        ? String(object.shorthandCode)
        : "",
      displayValue: isSet(object.displayValue)
        ? String(object.displayValue)
        : "",
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: MsgAddRegisteredReaction): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.shorthandCode !== undefined &&
      (obj.shorthandCode = message.shorthandCode);
    message.displayValue !== undefined &&
      (obj.displayValue = message.displayValue);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddRegisteredReaction>, I>>(
    object: I,
  ): MsgAddRegisteredReaction {
    const message = createBaseMsgAddRegisteredReaction();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.shorthandCode = object.shorthandCode ?? "";
    message.displayValue = object.displayValue ?? "";
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgAddRegisteredReactionAmino): MsgAddRegisteredReaction {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      shorthandCode: object.shorthand_code,
      displayValue: object.display_value,
      user: object.user,
    };
  },
  toAmino(message: MsgAddRegisteredReaction): MsgAddRegisteredReactionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.shorthand_code = message.shorthandCode;
    obj.display_value = message.displayValue;
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(
    object: MsgAddRegisteredReactionAminoMsg,
  ): MsgAddRegisteredReaction {
    return MsgAddRegisteredReaction.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAddRegisteredReactionProtoMsg,
  ): MsgAddRegisteredReaction {
    return MsgAddRegisteredReaction.decode(message.value);
  },
  toProto(message: MsgAddRegisteredReaction): Uint8Array {
    return MsgAddRegisteredReaction.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAddRegisteredReaction,
  ): MsgAddRegisteredReactionProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReaction",
      value: MsgAddRegisteredReaction.encode(message).finish(),
    };
  },
};
function createBaseMsgAddRegisteredReactionResponse(): MsgAddRegisteredReactionResponse {
  return {
    registeredReactionId: 0,
  };
}
export const MsgAddRegisteredReactionResponse = {
  encode(
    message: MsgAddRegisteredReactionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.registeredReactionId !== 0) {
      writer.uint32(8).uint32(message.registeredReactionId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgAddRegisteredReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRegisteredReactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registeredReactionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddRegisteredReactionResponse {
    return {
      registeredReactionId: isSet(object.registeredReactionId)
        ? Number(object.registeredReactionId)
        : 0,
    };
  },
  toJSON(message: MsgAddRegisteredReactionResponse): unknown {
    const obj: any = {};
    message.registeredReactionId !== undefined &&
      (obj.registeredReactionId = Math.round(message.registeredReactionId));
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgAddRegisteredReactionResponse>, I>,
  >(object: I): MsgAddRegisteredReactionResponse {
    const message = createBaseMsgAddRegisteredReactionResponse();
    message.registeredReactionId = object.registeredReactionId ?? 0;
    return message;
  },
  fromAmino(
    object: MsgAddRegisteredReactionResponseAmino,
  ): MsgAddRegisteredReactionResponse {
    return {
      registeredReactionId: object.registered_reaction_id,
    };
  },
  toAmino(
    message: MsgAddRegisteredReactionResponse,
  ): MsgAddRegisteredReactionResponseAmino {
    const obj: any = {};
    obj.registered_reaction_id = message.registeredReactionId;
    return obj;
  },
  fromAminoMsg(
    object: MsgAddRegisteredReactionResponseAminoMsg,
  ): MsgAddRegisteredReactionResponse {
    return MsgAddRegisteredReactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAddRegisteredReactionResponseProtoMsg,
  ): MsgAddRegisteredReactionResponse {
    return MsgAddRegisteredReactionResponse.decode(message.value);
  },
  toProto(message: MsgAddRegisteredReactionResponse): Uint8Array {
    return MsgAddRegisteredReactionResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAddRegisteredReactionResponse,
  ): MsgAddRegisteredReactionResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReactionResponse",
      value: MsgAddRegisteredReactionResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgEditRegisteredReaction(): MsgEditRegisteredReaction {
  return {
    subspaceId: Long.UZERO,
    registeredReactionId: 0,
    shorthandCode: "",
    displayValue: "",
    user: "",
  };
}
export const MsgEditRegisteredReaction = {
  encode(
    message: MsgEditRegisteredReaction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.registeredReactionId !== 0) {
      writer.uint32(16).uint32(message.registeredReactionId);
    }
    if (message.shorthandCode !== "") {
      writer.uint32(26).string(message.shorthandCode);
    }
    if (message.displayValue !== "") {
      writer.uint32(34).string(message.displayValue);
    }
    if (message.user !== "") {
      writer.uint32(42).string(message.user);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgEditRegisteredReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditRegisteredReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.registeredReactionId = reader.uint32();
          break;
        case 3:
          message.shorthandCode = reader.string();
          break;
        case 4:
          message.displayValue = reader.string();
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
  fromJSON(object: any): MsgEditRegisteredReaction {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      registeredReactionId: isSet(object.registeredReactionId)
        ? Number(object.registeredReactionId)
        : 0,
      shorthandCode: isSet(object.shorthandCode)
        ? String(object.shorthandCode)
        : "",
      displayValue: isSet(object.displayValue)
        ? String(object.displayValue)
        : "",
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: MsgEditRegisteredReaction): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.registeredReactionId !== undefined &&
      (obj.registeredReactionId = Math.round(message.registeredReactionId));
    message.shorthandCode !== undefined &&
      (obj.shorthandCode = message.shorthandCode);
    message.displayValue !== undefined &&
      (obj.displayValue = message.displayValue);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgEditRegisteredReaction>, I>>(
    object: I,
  ): MsgEditRegisteredReaction {
    const message = createBaseMsgEditRegisteredReaction();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.registeredReactionId = object.registeredReactionId ?? 0;
    message.shorthandCode = object.shorthandCode ?? "";
    message.displayValue = object.displayValue ?? "";
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgEditRegisteredReactionAmino): MsgEditRegisteredReaction {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      registeredReactionId: object.registered_reaction_id,
      shorthandCode: object.shorthand_code,
      displayValue: object.display_value,
      user: object.user,
    };
  },
  toAmino(message: MsgEditRegisteredReaction): MsgEditRegisteredReactionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.registered_reaction_id = message.registeredReactionId;
    obj.shorthand_code = message.shorthandCode;
    obj.display_value = message.displayValue;
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(
    object: MsgEditRegisteredReactionAminoMsg,
  ): MsgEditRegisteredReaction {
    return MsgEditRegisteredReaction.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgEditRegisteredReactionProtoMsg,
  ): MsgEditRegisteredReaction {
    return MsgEditRegisteredReaction.decode(message.value);
  },
  toProto(message: MsgEditRegisteredReaction): Uint8Array {
    return MsgEditRegisteredReaction.encode(message).finish();
  },
  toProtoMsg(
    message: MsgEditRegisteredReaction,
  ): MsgEditRegisteredReactionProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReaction",
      value: MsgEditRegisteredReaction.encode(message).finish(),
    };
  },
};
function createBaseMsgEditRegisteredReactionResponse(): MsgEditRegisteredReactionResponse {
  return {};
}
export const MsgEditRegisteredReactionResponse = {
  encode(
    _: MsgEditRegisteredReactionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgEditRegisteredReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditRegisteredReactionResponse();
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
  fromJSON(_: any): MsgEditRegisteredReactionResponse {
    return {};
  },
  toJSON(_: MsgEditRegisteredReactionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgEditRegisteredReactionResponse>, I>,
  >(_: I): MsgEditRegisteredReactionResponse {
    const message = createBaseMsgEditRegisteredReactionResponse();
    return message;
  },
  fromAmino(
    _: MsgEditRegisteredReactionResponseAmino,
  ): MsgEditRegisteredReactionResponse {
    return {};
  },
  toAmino(
    _: MsgEditRegisteredReactionResponse,
  ): MsgEditRegisteredReactionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgEditRegisteredReactionResponseAminoMsg,
  ): MsgEditRegisteredReactionResponse {
    return MsgEditRegisteredReactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgEditRegisteredReactionResponseProtoMsg,
  ): MsgEditRegisteredReactionResponse {
    return MsgEditRegisteredReactionResponse.decode(message.value);
  },
  toProto(message: MsgEditRegisteredReactionResponse): Uint8Array {
    return MsgEditRegisteredReactionResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgEditRegisteredReactionResponse,
  ): MsgEditRegisteredReactionResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReactionResponse",
      value: MsgEditRegisteredReactionResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRemoveRegisteredReaction(): MsgRemoveRegisteredReaction {
  return {
    subspaceId: Long.UZERO,
    registeredReactionId: 0,
    user: "",
  };
}
export const MsgRemoveRegisteredReaction = {
  encode(
    message: MsgRemoveRegisteredReaction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.registeredReactionId !== 0) {
      writer.uint32(16).uint32(message.registeredReactionId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRemoveRegisteredReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRegisteredReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.registeredReactionId = reader.uint32();
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
  fromJSON(object: any): MsgRemoveRegisteredReaction {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      registeredReactionId: isSet(object.registeredReactionId)
        ? Number(object.registeredReactionId)
        : 0,
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: MsgRemoveRegisteredReaction): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.registeredReactionId !== undefined &&
      (obj.registeredReactionId = Math.round(message.registeredReactionId));
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveRegisteredReaction>, I>>(
    object: I,
  ): MsgRemoveRegisteredReaction {
    const message = createBaseMsgRemoveRegisteredReaction();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.registeredReactionId = object.registeredReactionId ?? 0;
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(
    object: MsgRemoveRegisteredReactionAmino,
  ): MsgRemoveRegisteredReaction {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      registeredReactionId: object.registered_reaction_id,
      user: object.user,
    };
  },
  toAmino(
    message: MsgRemoveRegisteredReaction,
  ): MsgRemoveRegisteredReactionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.registered_reaction_id = message.registeredReactionId;
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(
    object: MsgRemoveRegisteredReactionAminoMsg,
  ): MsgRemoveRegisteredReaction {
    return MsgRemoveRegisteredReaction.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRemoveRegisteredReactionProtoMsg,
  ): MsgRemoveRegisteredReaction {
    return MsgRemoveRegisteredReaction.decode(message.value);
  },
  toProto(message: MsgRemoveRegisteredReaction): Uint8Array {
    return MsgRemoveRegisteredReaction.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRemoveRegisteredReaction,
  ): MsgRemoveRegisteredReactionProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReaction",
      value: MsgRemoveRegisteredReaction.encode(message).finish(),
    };
  },
};
function createBaseMsgRemoveRegisteredReactionResponse(): MsgRemoveRegisteredReactionResponse {
  return {};
}
export const MsgRemoveRegisteredReactionResponse = {
  encode(
    _: MsgRemoveRegisteredReactionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRemoveRegisteredReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRegisteredReactionResponse();
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
  fromJSON(_: any): MsgRemoveRegisteredReactionResponse {
    return {};
  },
  toJSON(_: MsgRemoveRegisteredReactionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgRemoveRegisteredReactionResponse>, I>,
  >(_: I): MsgRemoveRegisteredReactionResponse {
    const message = createBaseMsgRemoveRegisteredReactionResponse();
    return message;
  },
  fromAmino(
    _: MsgRemoveRegisteredReactionResponseAmino,
  ): MsgRemoveRegisteredReactionResponse {
    return {};
  },
  toAmino(
    _: MsgRemoveRegisteredReactionResponse,
  ): MsgRemoveRegisteredReactionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgRemoveRegisteredReactionResponseAminoMsg,
  ): MsgRemoveRegisteredReactionResponse {
    return MsgRemoveRegisteredReactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRemoveRegisteredReactionResponseProtoMsg,
  ): MsgRemoveRegisteredReactionResponse {
    return MsgRemoveRegisteredReactionResponse.decode(message.value);
  },
  toProto(message: MsgRemoveRegisteredReactionResponse): Uint8Array {
    return MsgRemoveRegisteredReactionResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRemoveRegisteredReactionResponse,
  ): MsgRemoveRegisteredReactionResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReactionResponse",
      value: MsgRemoveRegisteredReactionResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgSetReactionsParams(): MsgSetReactionsParams {
  return {
    subspaceId: Long.UZERO,
    registeredReaction: undefined,
    freeText: undefined,
    user: "",
  };
}
export const MsgSetReactionsParams = {
  encode(
    message: MsgSetReactionsParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.registeredReaction !== undefined) {
      RegisteredReactionValueParams.encode(
        message.registeredReaction,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.freeText !== undefined) {
      FreeTextValueParams.encode(
        message.freeText,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetReactionsParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetReactionsParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.registeredReaction = RegisteredReactionValueParams.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.freeText = FreeTextValueParams.decode(
            reader,
            reader.uint32(),
          );
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
  fromJSON(object: any): MsgSetReactionsParams {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      registeredReaction: isSet(object.registeredReaction)
        ? RegisteredReactionValueParams.fromJSON(object.registeredReaction)
        : undefined,
      freeText: isSet(object.freeText)
        ? FreeTextValueParams.fromJSON(object.freeText)
        : undefined,
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: MsgSetReactionsParams): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.registeredReaction !== undefined &&
      (obj.registeredReaction = message.registeredReaction
        ? RegisteredReactionValueParams.toJSON(message.registeredReaction)
        : undefined);
    message.freeText !== undefined &&
      (obj.freeText = message.freeText
        ? FreeTextValueParams.toJSON(message.freeText)
        : undefined);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetReactionsParams>, I>>(
    object: I,
  ): MsgSetReactionsParams {
    const message = createBaseMsgSetReactionsParams();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.registeredReaction =
      object.registeredReaction !== undefined &&
      object.registeredReaction !== null
        ? RegisteredReactionValueParams.fromPartial(object.registeredReaction)
        : undefined;
    message.freeText =
      object.freeText !== undefined && object.freeText !== null
        ? FreeTextValueParams.fromPartial(object.freeText)
        : undefined;
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgSetReactionsParamsAmino): MsgSetReactionsParams {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      registeredReaction: object?.registered_reaction
        ? RegisteredReactionValueParams.fromAmino(object.registered_reaction)
        : undefined,
      freeText: object?.free_text
        ? FreeTextValueParams.fromAmino(object.free_text)
        : undefined,
      user: object.user,
    };
  },
  toAmino(message: MsgSetReactionsParams): MsgSetReactionsParamsAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.registered_reaction = message.registeredReaction
      ? RegisteredReactionValueParams.toAmino(message.registeredReaction)
      : undefined;
    obj.free_text = message.freeText
      ? FreeTextValueParams.toAmino(message.freeText)
      : undefined;
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(object: MsgSetReactionsParamsAminoMsg): MsgSetReactionsParams {
    return MsgSetReactionsParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetReactionsParamsProtoMsg): MsgSetReactionsParams {
    return MsgSetReactionsParams.decode(message.value);
  },
  toProto(message: MsgSetReactionsParams): Uint8Array {
    return MsgSetReactionsParams.encode(message).finish();
  },
  toProtoMsg(message: MsgSetReactionsParams): MsgSetReactionsParamsProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgSetReactionsParams",
      value: MsgSetReactionsParams.encode(message).finish(),
    };
  },
};
function createBaseMsgSetReactionsParamsResponse(): MsgSetReactionsParamsResponse {
  return {};
}
export const MsgSetReactionsParamsResponse = {
  encode(
    _: MsgSetReactionsParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetReactionsParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetReactionsParamsResponse();
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
  fromJSON(_: any): MsgSetReactionsParamsResponse {
    return {};
  },
  toJSON(_: MsgSetReactionsParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetReactionsParamsResponse>, I>>(
    _: I,
  ): MsgSetReactionsParamsResponse {
    const message = createBaseMsgSetReactionsParamsResponse();
    return message;
  },
  fromAmino(
    _: MsgSetReactionsParamsResponseAmino,
  ): MsgSetReactionsParamsResponse {
    return {};
  },
  toAmino(
    _: MsgSetReactionsParamsResponse,
  ): MsgSetReactionsParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgSetReactionsParamsResponseAminoMsg,
  ): MsgSetReactionsParamsResponse {
    return MsgSetReactionsParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgSetReactionsParamsResponseProtoMsg,
  ): MsgSetReactionsParamsResponse {
    return MsgSetReactionsParamsResponse.decode(message.value);
  },
  toProto(message: MsgSetReactionsParamsResponse): Uint8Array {
    return MsgSetReactionsParamsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgSetReactionsParamsResponse,
  ): MsgSetReactionsParamsResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.MsgSetReactionsParamsResponse",
      value: MsgSetReactionsParamsResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the reactions Msg service. */
export interface Msg {
  /** AddReaction allows to add a post reaction */
  AddReaction(request: MsgAddReaction): Promise<MsgAddReactionResponse>;
  /** RemoveReaction allows to remove an existing post reaction */
  RemoveReaction(
    request: MsgRemoveReaction,
  ): Promise<MsgRemoveReactionResponse>;
  /** AddRegisteredReaction allows to registered a new supported reaction */
  AddRegisteredReaction(
    request: MsgAddRegisteredReaction,
  ): Promise<MsgAddRegisteredReactionResponse>;
  /** EditRegisteredReaction allows to edit a registered reaction */
  EditRegisteredReaction(
    request: MsgEditRegisteredReaction,
  ): Promise<MsgEditRegisteredReactionResponse>;
  /** RemoveRegisteredReaction allows to remove an existing supported reaction */
  RemoveRegisteredReaction(
    request: MsgRemoveRegisteredReaction,
  ): Promise<MsgRemoveRegisteredReactionResponse>;
  /** SetReactionsParams allows to set the reactions params */
  SetReactionsParams(
    request: MsgSetReactionsParams,
  ): Promise<MsgSetReactionsParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddReaction = this.AddReaction.bind(this);
    this.RemoveReaction = this.RemoveReaction.bind(this);
    this.AddRegisteredReaction = this.AddRegisteredReaction.bind(this);
    this.EditRegisteredReaction = this.EditRegisteredReaction.bind(this);
    this.RemoveRegisteredReaction = this.RemoveRegisteredReaction.bind(this);
    this.SetReactionsParams = this.SetReactionsParams.bind(this);
  }
  AddReaction(request: MsgAddReaction): Promise<MsgAddReactionResponse> {
    const data = MsgAddReaction.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Msg",
      "AddReaction",
      data,
    );
    return promise.then((data) =>
      MsgAddReactionResponse.decode(new _m0.Reader(data)),
    );
  }
  RemoveReaction(
    request: MsgRemoveReaction,
  ): Promise<MsgRemoveReactionResponse> {
    const data = MsgRemoveReaction.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Msg",
      "RemoveReaction",
      data,
    );
    return promise.then((data) =>
      MsgRemoveReactionResponse.decode(new _m0.Reader(data)),
    );
  }
  AddRegisteredReaction(
    request: MsgAddRegisteredReaction,
  ): Promise<MsgAddRegisteredReactionResponse> {
    const data = MsgAddRegisteredReaction.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Msg",
      "AddRegisteredReaction",
      data,
    );
    return promise.then((data) =>
      MsgAddRegisteredReactionResponse.decode(new _m0.Reader(data)),
    );
  }
  EditRegisteredReaction(
    request: MsgEditRegisteredReaction,
  ): Promise<MsgEditRegisteredReactionResponse> {
    const data = MsgEditRegisteredReaction.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Msg",
      "EditRegisteredReaction",
      data,
    );
    return promise.then((data) =>
      MsgEditRegisteredReactionResponse.decode(new _m0.Reader(data)),
    );
  }
  RemoveRegisteredReaction(
    request: MsgRemoveRegisteredReaction,
  ): Promise<MsgRemoveRegisteredReactionResponse> {
    const data = MsgRemoveRegisteredReaction.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Msg",
      "RemoveRegisteredReaction",
      data,
    );
    return promise.then((data) =>
      MsgRemoveRegisteredReactionResponse.decode(new _m0.Reader(data)),
    );
  }
  SetReactionsParams(
    request: MsgSetReactionsParams,
  ): Promise<MsgSetReactionsParamsResponse> {
    const data = MsgSetReactionsParams.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Msg",
      "SetReactionsParams",
      data,
    );
    return promise.then((data) =>
      MsgSetReactionsParamsResponse.decode(new _m0.Reader(data)),
    );
  }
}
