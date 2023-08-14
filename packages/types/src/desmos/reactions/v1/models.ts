/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.reactions.v1";
/** Reaction contains the data of a single post reaction */
export interface Reaction {
  /** Id of the subspace inside which the reaction has been put */
  subspaceId: Long;
  /** Id of the post to which the reaction is associated */
  postId: Long;
  /** Id of the reaction within the post */
  id: number;
  /** Value of the reaction. */
  value?: Any;
  /** Author of the reaction */
  author: string;
}
export interface ReactionProtoMsg {
  typeUrl: "/desmos.reactions.v1.Reaction";
  value: Uint8Array;
}
/** Reaction contains the data of a single post reaction */
export interface ReactionAmino {
  /** Id of the subspace inside which the reaction has been put */
  subspace_id: string;
  /** Id of the post to which the reaction is associated */
  post_id: string;
  /** Id of the reaction within the post */
  id: number;
  /** Value of the reaction. */
  value?: AnyAmino;
  /** Author of the reaction */
  author: string;
}
export interface ReactionAminoMsg {
  type: "/desmos.reactions.v1.Reaction";
  value: ReactionAmino;
}
/**
 * RegisteredReactionValue contains the details of a reaction value that
 * references a reaction registered within the subspace
 */
export interface RegisteredReactionValue {
  /** Id of the registered reaction */
  registeredReactionId: number;
}
export interface RegisteredReactionValueProtoMsg {
  typeUrl: "/desmos.reactions.v1.RegisteredReactionValue";
  value: Uint8Array;
}
/**
 * RegisteredReactionValue contains the details of a reaction value that
 * references a reaction registered within the subspace
 */
export interface RegisteredReactionValueAmino {
  /** Id of the registered reaction */
  registered_reaction_id: number;
}
export interface RegisteredReactionValueAminoMsg {
  type: "/desmos.reactions.v1.RegisteredReactionValue";
  value: RegisteredReactionValueAmino;
}
/**
 * FreeTextValue contains the details of a reaction value that
 * is made of free text
 */
export interface FreeTextValue {
  text: string;
}
export interface FreeTextValueProtoMsg {
  typeUrl: "/desmos.reactions.v1.FreeTextValue";
  value: Uint8Array;
}
/**
 * FreeTextValue contains the details of a reaction value that
 * is made of free text
 */
export interface FreeTextValueAmino {
  text: string;
}
export interface FreeTextValueAminoMsg {
  type: "/desmos.reactions.v1.FreeTextValue";
  value: FreeTextValueAmino;
}
/**
 * RegisteredReaction contains the details of a registered reaction within a
 * subspace
 */
export interface RegisteredReaction {
  /** Id of the subspace for which this reaction has been registered */
  subspaceId: Long;
  /** Id of the registered reaction */
  id: number;
  /** Unique shorthand code associated to this reaction */
  shorthandCode: string;
  /** Value that should be displayed when using this reaction */
  displayValue: string;
}
export interface RegisteredReactionProtoMsg {
  typeUrl: "/desmos.reactions.v1.RegisteredReaction";
  value: Uint8Array;
}
/**
 * RegisteredReaction contains the details of a registered reaction within a
 * subspace
 */
export interface RegisteredReactionAmino {
  /** Id of the subspace for which this reaction has been registered */
  subspace_id: string;
  /** Id of the registered reaction */
  id: number;
  /** Unique shorthand code associated to this reaction */
  shorthand_code: string;
  /** Value that should be displayed when using this reaction */
  display_value: string;
}
export interface RegisteredReactionAminoMsg {
  type: "/desmos.reactions.v1.RegisteredReaction";
  value: RegisteredReactionAmino;
}
/**
 * SubspaceReactionsParams contains the params related to a single subspace
 * reactions
 */
export interface SubspaceReactionsParams {
  /** Id of the subspace for which these params are valid */
  subspaceId: Long;
  /** Params related to RegisteredReactionValue reactions */
  registeredReaction?: RegisteredReactionValueParams;
  /** Params related to FreeTextValue reactions */
  freeText?: FreeTextValueParams;
}
export interface SubspaceReactionsParamsProtoMsg {
  typeUrl: "/desmos.reactions.v1.SubspaceReactionsParams";
  value: Uint8Array;
}
/**
 * SubspaceReactionsParams contains the params related to a single subspace
 * reactions
 */
export interface SubspaceReactionsParamsAmino {
  /** Id of the subspace for which these params are valid */
  subspace_id: string;
  /** Params related to RegisteredReactionValue reactions */
  registered_reaction?: RegisteredReactionValueParamsAmino;
  /** Params related to FreeTextValue reactions */
  free_text?: FreeTextValueParamsAmino;
}
export interface SubspaceReactionsParamsAminoMsg {
  type: "/desmos.reactions.v1.SubspaceReactionsParams";
  value: SubspaceReactionsParamsAmino;
}
/** FreeTextValueParams contains the params for FreeTextValue based reactions */
export interface FreeTextValueParams {
  /** Whether FreeTextValue reactions should be enabled */
  enabled: boolean;
  /** The max length that FreeTextValue reactions should have */
  maxLength: number;
  /**
   * RegEx that each FreeTextValue should respect.
   * This is useful to limit what characters can be used as a reaction.
   */
  regEx: string;
}
export interface FreeTextValueParamsProtoMsg {
  typeUrl: "/desmos.reactions.v1.FreeTextValueParams";
  value: Uint8Array;
}
/** FreeTextValueParams contains the params for FreeTextValue based reactions */
export interface FreeTextValueParamsAmino {
  /** Whether FreeTextValue reactions should be enabled */
  enabled: boolean;
  /** The max length that FreeTextValue reactions should have */
  max_length: number;
  /**
   * RegEx that each FreeTextValue should respect.
   * This is useful to limit what characters can be used as a reaction.
   */
  reg_ex: string;
}
export interface FreeTextValueParamsAminoMsg {
  type: "/desmos.reactions.v1.FreeTextValueParams";
  value: FreeTextValueParamsAmino;
}
/**
 * RegisteredReactionValueParams contains the params for RegisteredReactionValue
 * based reactions
 */
export interface RegisteredReactionValueParams {
  /** Whether RegisteredReactionValue reactions should be enabled */
  enabled: boolean;
}
export interface RegisteredReactionValueParamsProtoMsg {
  typeUrl: "/desmos.reactions.v1.RegisteredReactionValueParams";
  value: Uint8Array;
}
/**
 * RegisteredReactionValueParams contains the params for RegisteredReactionValue
 * based reactions
 */
export interface RegisteredReactionValueParamsAmino {
  /** Whether RegisteredReactionValue reactions should be enabled */
  enabled: boolean;
}
export interface RegisteredReactionValueParamsAminoMsg {
  type: "/desmos.reactions.v1.RegisteredReactionValueParams";
  value: RegisteredReactionValueParamsAmino;
}
function createBaseReaction(): Reaction {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    id: 0,
    value: undefined,
    author: "",
  };
}
export const Reaction = {
  encode(
    message: Reaction,
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
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    if (message.author !== "") {
      writer.uint32(42).string(message.author);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Reaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReaction();
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
          message.value = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.author = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Reaction {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      id: isSet(object.id) ? Number(object.id) : 0,
      value: isSet(object.value) ? Any.fromJSON(object.value) : undefined,
      author: isSet(object.author) ? String(object.author) : "",
    };
  },
  toJSON(message: Reaction): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.value !== undefined &&
      (obj.value = message.value ? Any.toJSON(message.value) : undefined);
    message.author !== undefined && (obj.author = message.author);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Reaction>, I>>(object: I): Reaction {
    const message = createBaseReaction();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.id = object.id ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? Any.fromPartial(object.value)
        : undefined;
    message.author = object.author ?? "";
    return message;
  },
  fromAmino(object: ReactionAmino): Reaction {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      id: object.id,
      value: object?.value ? Any.fromAmino(object.value) : undefined,
      author: object.author,
    };
  },
  toAmino(message: Reaction): ReactionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.id = message.id;
    obj.value = message.value ? Any.toAmino(message.value) : undefined;
    obj.author = message.author;
    return obj;
  },
  fromAminoMsg(object: ReactionAminoMsg): Reaction {
    return Reaction.fromAmino(object.value);
  },
  fromProtoMsg(message: ReactionProtoMsg): Reaction {
    return Reaction.decode(message.value);
  },
  toProto(message: Reaction): Uint8Array {
    return Reaction.encode(message).finish();
  },
  toProtoMsg(message: Reaction): ReactionProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.Reaction",
      value: Reaction.encode(message).finish(),
    };
  },
};
function createBaseRegisteredReactionValue(): RegisteredReactionValue {
  return {
    registeredReactionId: 0,
  };
}
export const RegisteredReactionValue = {
  encode(
    message: RegisteredReactionValue,
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
  ): RegisteredReactionValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredReactionValue();
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
  fromJSON(object: any): RegisteredReactionValue {
    return {
      registeredReactionId: isSet(object.registeredReactionId)
        ? Number(object.registeredReactionId)
        : 0,
    };
  },
  toJSON(message: RegisteredReactionValue): unknown {
    const obj: any = {};
    message.registeredReactionId !== undefined &&
      (obj.registeredReactionId = Math.round(message.registeredReactionId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredReactionValue>, I>>(
    object: I,
  ): RegisteredReactionValue {
    const message = createBaseRegisteredReactionValue();
    message.registeredReactionId = object.registeredReactionId ?? 0;
    return message;
  },
  fromAmino(object: RegisteredReactionValueAmino): RegisteredReactionValue {
    return {
      registeredReactionId: object.registered_reaction_id,
    };
  },
  toAmino(message: RegisteredReactionValue): RegisteredReactionValueAmino {
    const obj: any = {};
    obj.registered_reaction_id = message.registeredReactionId;
    return obj;
  },
  fromAminoMsg(
    object: RegisteredReactionValueAminoMsg,
  ): RegisteredReactionValue {
    return RegisteredReactionValue.fromAmino(object.value);
  },
  fromProtoMsg(
    message: RegisteredReactionValueProtoMsg,
  ): RegisteredReactionValue {
    return RegisteredReactionValue.decode(message.value);
  },
  toProto(message: RegisteredReactionValue): Uint8Array {
    return RegisteredReactionValue.encode(message).finish();
  },
  toProtoMsg(
    message: RegisteredReactionValue,
  ): RegisteredReactionValueProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.RegisteredReactionValue",
      value: RegisteredReactionValue.encode(message).finish(),
    };
  },
};
function createBaseFreeTextValue(): FreeTextValue {
  return {
    text: "",
  };
}
export const FreeTextValue = {
  encode(
    message: FreeTextValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FreeTextValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFreeTextValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FreeTextValue {
    return {
      text: isSet(object.text) ? String(object.text) : "",
    };
  },
  toJSON(message: FreeTextValue): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FreeTextValue>, I>>(
    object: I,
  ): FreeTextValue {
    const message = createBaseFreeTextValue();
    message.text = object.text ?? "";
    return message;
  },
  fromAmino(object: FreeTextValueAmino): FreeTextValue {
    return {
      text: object.text,
    };
  },
  toAmino(message: FreeTextValue): FreeTextValueAmino {
    const obj: any = {};
    obj.text = message.text;
    return obj;
  },
  fromAminoMsg(object: FreeTextValueAminoMsg): FreeTextValue {
    return FreeTextValue.fromAmino(object.value);
  },
  fromProtoMsg(message: FreeTextValueProtoMsg): FreeTextValue {
    return FreeTextValue.decode(message.value);
  },
  toProto(message: FreeTextValue): Uint8Array {
    return FreeTextValue.encode(message).finish();
  },
  toProtoMsg(message: FreeTextValue): FreeTextValueProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.FreeTextValue",
      value: FreeTextValue.encode(message).finish(),
    };
  },
};
function createBaseRegisteredReaction(): RegisteredReaction {
  return {
    subspaceId: Long.UZERO,
    id: 0,
    shorthandCode: "",
    displayValue: "",
  };
}
export const RegisteredReaction = {
  encode(
    message: RegisteredReaction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.shorthandCode !== "") {
      writer.uint32(26).string(message.shorthandCode);
    }
    if (message.displayValue !== "") {
      writer.uint32(34).string(message.displayValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.shorthandCode = reader.string();
          break;
        case 4:
          message.displayValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredReaction {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      id: isSet(object.id) ? Number(object.id) : 0,
      shorthandCode: isSet(object.shorthandCode)
        ? String(object.shorthandCode)
        : "",
      displayValue: isSet(object.displayValue)
        ? String(object.displayValue)
        : "",
    };
  },
  toJSON(message: RegisteredReaction): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.shorthandCode !== undefined &&
      (obj.shorthandCode = message.shorthandCode);
    message.displayValue !== undefined &&
      (obj.displayValue = message.displayValue);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredReaction>, I>>(
    object: I,
  ): RegisteredReaction {
    const message = createBaseRegisteredReaction();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.id = object.id ?? 0;
    message.shorthandCode = object.shorthandCode ?? "";
    message.displayValue = object.displayValue ?? "";
    return message;
  },
  fromAmino(object: RegisteredReactionAmino): RegisteredReaction {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      id: object.id,
      shorthandCode: object.shorthand_code,
      displayValue: object.display_value,
    };
  },
  toAmino(message: RegisteredReaction): RegisteredReactionAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.id = message.id;
    obj.shorthand_code = message.shorthandCode;
    obj.display_value = message.displayValue;
    return obj;
  },
  fromAminoMsg(object: RegisteredReactionAminoMsg): RegisteredReaction {
    return RegisteredReaction.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisteredReactionProtoMsg): RegisteredReaction {
    return RegisteredReaction.decode(message.value);
  },
  toProto(message: RegisteredReaction): Uint8Array {
    return RegisteredReaction.encode(message).finish();
  },
  toProtoMsg(message: RegisteredReaction): RegisteredReactionProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.RegisteredReaction",
      value: RegisteredReaction.encode(message).finish(),
    };
  },
};
function createBaseSubspaceReactionsParams(): SubspaceReactionsParams {
  return {
    subspaceId: Long.UZERO,
    registeredReaction: undefined,
    freeText: undefined,
  };
}
export const SubspaceReactionsParams = {
  encode(
    message: SubspaceReactionsParams,
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
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SubspaceReactionsParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubspaceReactionsParams();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubspaceReactionsParams {
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
    };
  },
  toJSON(message: SubspaceReactionsParams): unknown {
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
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SubspaceReactionsParams>, I>>(
    object: I,
  ): SubspaceReactionsParams {
    const message = createBaseSubspaceReactionsParams();
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
    return message;
  },
  fromAmino(object: SubspaceReactionsParamsAmino): SubspaceReactionsParams {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      registeredReaction: object?.registered_reaction
        ? RegisteredReactionValueParams.fromAmino(object.registered_reaction)
        : undefined,
      freeText: object?.free_text
        ? FreeTextValueParams.fromAmino(object.free_text)
        : undefined,
    };
  },
  toAmino(message: SubspaceReactionsParams): SubspaceReactionsParamsAmino {
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
    return obj;
  },
  fromAminoMsg(
    object: SubspaceReactionsParamsAminoMsg,
  ): SubspaceReactionsParams {
    return SubspaceReactionsParams.fromAmino(object.value);
  },
  fromProtoMsg(
    message: SubspaceReactionsParamsProtoMsg,
  ): SubspaceReactionsParams {
    return SubspaceReactionsParams.decode(message.value);
  },
  toProto(message: SubspaceReactionsParams): Uint8Array {
    return SubspaceReactionsParams.encode(message).finish();
  },
  toProtoMsg(
    message: SubspaceReactionsParams,
  ): SubspaceReactionsParamsProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.SubspaceReactionsParams",
      value: SubspaceReactionsParams.encode(message).finish(),
    };
  },
};
function createBaseFreeTextValueParams(): FreeTextValueParams {
  return {
    enabled: false,
    maxLength: 0,
    regEx: "",
  };
}
export const FreeTextValueParams = {
  encode(
    message: FreeTextValueParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.maxLength !== 0) {
      writer.uint32(16).uint32(message.maxLength);
    }
    if (message.regEx !== "") {
      writer.uint32(26).string(message.regEx);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FreeTextValueParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFreeTextValueParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.maxLength = reader.uint32();
          break;
        case 3:
          message.regEx = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FreeTextValueParams {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      maxLength: isSet(object.maxLength) ? Number(object.maxLength) : 0,
      regEx: isSet(object.regEx) ? String(object.regEx) : "",
    };
  },
  toJSON(message: FreeTextValueParams): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.maxLength !== undefined &&
      (obj.maxLength = Math.round(message.maxLength));
    message.regEx !== undefined && (obj.regEx = message.regEx);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FreeTextValueParams>, I>>(
    object: I,
  ): FreeTextValueParams {
    const message = createBaseFreeTextValueParams();
    message.enabled = object.enabled ?? false;
    message.maxLength = object.maxLength ?? 0;
    message.regEx = object.regEx ?? "";
    return message;
  },
  fromAmino(object: FreeTextValueParamsAmino): FreeTextValueParams {
    return {
      enabled: object.enabled,
      maxLength: object.max_length,
      regEx: object.reg_ex,
    };
  },
  toAmino(message: FreeTextValueParams): FreeTextValueParamsAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    obj.max_length = message.maxLength;
    obj.reg_ex = message.regEx;
    return obj;
  },
  fromAminoMsg(object: FreeTextValueParamsAminoMsg): FreeTextValueParams {
    return FreeTextValueParams.fromAmino(object.value);
  },
  fromProtoMsg(message: FreeTextValueParamsProtoMsg): FreeTextValueParams {
    return FreeTextValueParams.decode(message.value);
  },
  toProto(message: FreeTextValueParams): Uint8Array {
    return FreeTextValueParams.encode(message).finish();
  },
  toProtoMsg(message: FreeTextValueParams): FreeTextValueParamsProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.FreeTextValueParams",
      value: FreeTextValueParams.encode(message).finish(),
    };
  },
};
function createBaseRegisteredReactionValueParams(): RegisteredReactionValueParams {
  return {
    enabled: false,
  };
}
export const RegisteredReactionValueParams = {
  encode(
    message: RegisteredReactionValueParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RegisteredReactionValueParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredReactionValueParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredReactionValueParams {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
    };
  },
  toJSON(message: RegisteredReactionValueParams): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredReactionValueParams>, I>>(
    object: I,
  ): RegisteredReactionValueParams {
    const message = createBaseRegisteredReactionValueParams();
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(
    object: RegisteredReactionValueParamsAmino,
  ): RegisteredReactionValueParams {
    return {
      enabled: object.enabled,
    };
  },
  toAmino(
    message: RegisteredReactionValueParams,
  ): RegisteredReactionValueParamsAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    return obj;
  },
  fromAminoMsg(
    object: RegisteredReactionValueParamsAminoMsg,
  ): RegisteredReactionValueParams {
    return RegisteredReactionValueParams.fromAmino(object.value);
  },
  fromProtoMsg(
    message: RegisteredReactionValueParamsProtoMsg,
  ): RegisteredReactionValueParams {
    return RegisteredReactionValueParams.decode(message.value);
  },
  toProto(message: RegisteredReactionValueParams): Uint8Array {
    return RegisteredReactionValueParams.encode(message).finish();
  },
  toProtoMsg(
    message: RegisteredReactionValueParams,
  ): RegisteredReactionValueParamsProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.RegisteredReactionValueParams",
      value: RegisteredReactionValueParams.encode(message).finish(),
    };
  },
};
