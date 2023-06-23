/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { RegisteredReactionValueParams, FreeTextValueParams } from "./models";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
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
/** MsgAddReactionResponse represents the Msg/AddReaction response type */
export interface MsgAddReactionResponse {
  /** Id of the newly added reaction */
  reactionId: number;
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
/** MsgRemoveReactionResponse represents the Msg/RemoveReaction response type */
export interface MsgRemoveReactionResponse {}
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
/**
 * MsgAddRegisteredReactionResponse represents the
 * Msg/AddRegisteredReaction response type
 */
export interface MsgAddRegisteredReactionResponse {
  /** Id of the newly registered reaction */
  registeredReactionId: number;
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
/**
 * MsgEditRegisteredReactionResponse represents the Msg/EditRegisteredReaction
 * response type
 */
export interface MsgEditRegisteredReactionResponse {}
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
/**
 * MsgRemoveRegisteredReactionResponse represents the
 * Msg/RemoveRegisteredReaction response type
 */
export interface MsgRemoveRegisteredReactionResponse {}
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
/**
 * MsgSetReactionsParamsResponse represents the Msg/SetReactionsParams response
 * type
 */
export interface MsgSetReactionsParamsResponse {}
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
    writer: _m0.Writer = _m0.Writer.create()
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
    object: I
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
};
function createBaseMsgAddReactionResponse(): MsgAddReactionResponse {
  return {
    reactionId: 0,
  };
}
export const MsgAddReactionResponse = {
  encode(
    message: MsgAddReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reactionId !== 0) {
      writer.uint32(8).uint32(message.reactionId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
    object: I
  ): MsgAddReactionResponse {
    const message = createBaseMsgAddReactionResponse();
    message.reactionId = object.reactionId ?? 0;
    return message;
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
    object: I
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
};
function createBaseMsgRemoveReactionResponse(): MsgRemoveReactionResponse {
  return {};
}
export const MsgRemoveReactionResponse = {
  encode(
    _: MsgRemoveReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
    _: I
  ): MsgRemoveReactionResponse {
    const message = createBaseMsgRemoveReactionResponse();
    return message;
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
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
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
    object: I
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
};
function createBaseMsgAddRegisteredReactionResponse(): MsgAddRegisteredReactionResponse {
  return {
    registeredReactionId: 0,
  };
}
export const MsgAddRegisteredReactionResponse = {
  encode(
    message: MsgAddRegisteredReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registeredReactionId !== 0) {
      writer.uint32(8).uint32(message.registeredReactionId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
    I extends Exact<DeepPartial<MsgAddRegisteredReactionResponse>, I>
  >(object: I): MsgAddRegisteredReactionResponse {
    const message = createBaseMsgAddRegisteredReactionResponse();
    message.registeredReactionId = object.registeredReactionId ?? 0;
    return message;
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
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
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
    object: I
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
};
function createBaseMsgEditRegisteredReactionResponse(): MsgEditRegisteredReactionResponse {
  return {};
}
export const MsgEditRegisteredReactionResponse = {
  encode(
    _: MsgEditRegisteredReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
    I extends Exact<DeepPartial<MsgEditRegisteredReactionResponse>, I>
  >(_: I): MsgEditRegisteredReactionResponse {
    const message = createBaseMsgEditRegisteredReactionResponse();
    return message;
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
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
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
    object: I
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
};
function createBaseMsgRemoveRegisteredReactionResponse(): MsgRemoveRegisteredReactionResponse {
  return {};
}
export const MsgRemoveRegisteredReactionResponse = {
  encode(
    _: MsgRemoveRegisteredReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
    I extends Exact<DeepPartial<MsgRemoveRegisteredReactionResponse>, I>
  >(_: I): MsgRemoveRegisteredReactionResponse {
    const message = createBaseMsgRemoveRegisteredReactionResponse();
    return message;
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.registeredReaction !== undefined) {
      RegisteredReactionValueParams.encode(
        message.registeredReaction,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.freeText !== undefined) {
      FreeTextValueParams.encode(
        message.freeText,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
            reader.uint32()
          );
          break;
        case 3:
          message.freeText = FreeTextValueParams.decode(
            reader,
            reader.uint32()
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
    object: I
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
};
function createBaseMsgSetReactionsParamsResponse(): MsgSetReactionsParamsResponse {
  return {};
}
export const MsgSetReactionsParamsResponse = {
  encode(
    _: MsgSetReactionsParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
    _: I
  ): MsgSetReactionsParamsResponse {
    const message = createBaseMsgSetReactionsParamsResponse();
    return message;
  },
};
