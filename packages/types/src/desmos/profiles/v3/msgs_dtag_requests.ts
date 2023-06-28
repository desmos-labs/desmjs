/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.profiles.v3";
/**
 * MsgRequestDTagTransfer represents the message used to request the DTag
 * transfer to another user.
 */
export interface MsgRequestDTagTransfer {
  /**
   * Receiver contains the address of the request receiver that owns the DTag to
   * transfer if the request is accepted
   */
  receiver: string;
  /**
   * Sender contains the address of the request sender that will receive the
   * receiver DTag if the requet is accepted
   */
  sender: string;
}
export interface MsgRequestDTagTransferProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgRequestDTagTransfer";
  value: Uint8Array;
}
/**
 * MsgRequestDTagTransfer represents the message used to request the DTag
 * transfer to another user.
 */
export interface MsgRequestDTagTransferAmino {
  /**
   * Receiver contains the address of the request receiver that owns the DTag to
   * transfer if the request is accepted
   */
  receiver: string;
  /**
   * Sender contains the address of the request sender that will receive the
   * receiver DTag if the requet is accepted
   */
  sender: string;
}
export interface MsgRequestDTagTransferAminoMsg {
  type: "/desmos.profiles.v3.MsgRequestDTagTransfer";
  value: MsgRequestDTagTransferAmino;
}
/**
 * MsgRequestDTagTransferResponse defines the Msg/RequestDTagTransfer response
 * type.
 */
export interface MsgRequestDTagTransferResponse {}
export interface MsgRequestDTagTransferResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgRequestDTagTransferResponse";
  value: Uint8Array;
}
/**
 * MsgRequestDTagTransferResponse defines the Msg/RequestDTagTransfer response
 * type.
 */
export interface MsgRequestDTagTransferResponseAmino {}
export interface MsgRequestDTagTransferResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgRequestDTagTransferResponse";
  value: MsgRequestDTagTransferResponseAmino;
}
/**
 * MsgCancelDTagTransferRequest represents the message used to cancel a DTag
 * transfer request.
 */
export interface MsgCancelDTagTransferRequest {
  /** Receiver contains the address of the request receiver */
  receiver: string;
  /** Sender contains the address of the requets sender */
  sender: string;
}
export interface MsgCancelDTagTransferRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgCancelDTagTransferRequest";
  value: Uint8Array;
}
/**
 * MsgCancelDTagTransferRequest represents the message used to cancel a DTag
 * transfer request.
 */
export interface MsgCancelDTagTransferRequestAmino {
  /** Receiver contains the address of the request receiver */
  receiver: string;
  /** Sender contains the address of the requets sender */
  sender: string;
}
export interface MsgCancelDTagTransferRequestAminoMsg {
  type: "/desmos.profiles.v3.MsgCancelDTagTransferRequest";
  value: MsgCancelDTagTransferRequestAmino;
}
/**
 * MsgCancelDTagTransferRequestResponse represents the
 * Msg/CancelDTagTransferRequest response type.
 */
export interface MsgCancelDTagTransferRequestResponse {}
export interface MsgCancelDTagTransferRequestResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgCancelDTagTransferRequestResponse";
  value: Uint8Array;
}
/**
 * MsgCancelDTagTransferRequestResponse represents the
 * Msg/CancelDTagTransferRequest response type.
 */
export interface MsgCancelDTagTransferRequestResponseAmino {}
export interface MsgCancelDTagTransferRequestResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgCancelDTagTransferRequestResponse";
  value: MsgCancelDTagTransferRequestResponseAmino;
}
/**
 * MsgAcceptDTagTransferRequest represents the message used to accept a DTag
 * transfer request.
 */
export interface MsgAcceptDTagTransferRequest {
  /**
   * NewDTag represents the DTag that the request receiver will obtain if they
   * accept the request
   */
  newDtag: string;
  /** Sender represents the request sender */
  sender: string;
  /** Receiver represents the request receiver */
  receiver: string;
}
export interface MsgAcceptDTagTransferRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest";
  value: Uint8Array;
}
/**
 * MsgAcceptDTagTransferRequest represents the message used to accept a DTag
 * transfer request.
 */
export interface MsgAcceptDTagTransferRequestAmino {
  /**
   * NewDTag represents the DTag that the request receiver will obtain if they
   * accept the request
   */
  new_dtag: string;
  /** Sender represents the request sender */
  sender: string;
  /** Receiver represents the request receiver */
  receiver: string;
}
export interface MsgAcceptDTagTransferRequestAminoMsg {
  type: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest";
  value: MsgAcceptDTagTransferRequestAmino;
}
/**
 * MsgAcceptDTagTransferRequestResponse defines the
 * Msg/AcceptDTagTransferRequest response.
 */
export interface MsgAcceptDTagTransferRequestResponse {}
export interface MsgAcceptDTagTransferRequestResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgAcceptDTagTransferRequestResponse";
  value: Uint8Array;
}
/**
 * MsgAcceptDTagTransferRequestResponse defines the
 * Msg/AcceptDTagTransferRequest response.
 */
export interface MsgAcceptDTagTransferRequestResponseAmino {}
export interface MsgAcceptDTagTransferRequestResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgAcceptDTagTransferRequestResponse";
  value: MsgAcceptDTagTransferRequestResponseAmino;
}
/**
 * MsgRefuseDTagTransferRequest represents the message used to refuse a DTag
 * transfer request.
 */
export interface MsgRefuseDTagTransferRequest {
  /** Sender represents the request sender */
  sender: string;
  /** Receiver represents the request receiver */
  receiver: string;
}
export interface MsgRefuseDTagTransferRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest";
  value: Uint8Array;
}
/**
 * MsgRefuseDTagTransferRequest represents the message used to refuse a DTag
 * transfer request.
 */
export interface MsgRefuseDTagTransferRequestAmino {
  /** Sender represents the request sender */
  sender: string;
  /** Receiver represents the request receiver */
  receiver: string;
}
export interface MsgRefuseDTagTransferRequestAminoMsg {
  type: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest";
  value: MsgRefuseDTagTransferRequestAmino;
}
/**
 * MsgRefuseDTagTransferRequestResponse defines the
 * Msg/RefuseDTagTransferRequest response.
 */
export interface MsgRefuseDTagTransferRequestResponse {}
export interface MsgRefuseDTagTransferRequestResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgRefuseDTagTransferRequestResponse";
  value: Uint8Array;
}
/**
 * MsgRefuseDTagTransferRequestResponse defines the
 * Msg/RefuseDTagTransferRequest response.
 */
export interface MsgRefuseDTagTransferRequestResponseAmino {}
export interface MsgRefuseDTagTransferRequestResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgRefuseDTagTransferRequestResponse";
  value: MsgRefuseDTagTransferRequestResponseAmino;
}
function createBaseMsgRequestDTagTransfer(): MsgRequestDTagTransfer {
  return {
    receiver: "",
    sender: "",
  };
}
export const MsgRequestDTagTransfer = {
  encode(
    message: MsgRequestDTagTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRequestDTagTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestDTagTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRequestDTagTransfer {
    return {
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },
  toJSON(message: MsgRequestDTagTransfer): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestDTagTransfer>, I>>(
    object: I
  ): MsgRequestDTagTransfer {
    const message = createBaseMsgRequestDTagTransfer();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgRequestDTagTransferAmino): MsgRequestDTagTransfer {
    return {
      receiver: object.receiver,
      sender: object.sender,
    };
  },
  toAmino(message: MsgRequestDTagTransfer): MsgRequestDTagTransferAmino {
    const obj: any = {};
    obj.receiver = message.receiver;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgRequestDTagTransferAminoMsg): MsgRequestDTagTransfer {
    return MsgRequestDTagTransfer.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRequestDTagTransferProtoMsg
  ): MsgRequestDTagTransfer {
    return MsgRequestDTagTransfer.decode(message.value);
  },
  toProto(message: MsgRequestDTagTransfer): Uint8Array {
    return MsgRequestDTagTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestDTagTransfer): MsgRequestDTagTransferProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgRequestDTagTransfer",
      value: MsgRequestDTagTransfer.encode(message).finish(),
    };
  },
};
function createBaseMsgRequestDTagTransferResponse(): MsgRequestDTagTransferResponse {
  return {};
}
export const MsgRequestDTagTransferResponse = {
  encode(
    _: MsgRequestDTagTransferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRequestDTagTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestDTagTransferResponse();
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
  fromJSON(_: any): MsgRequestDTagTransferResponse {
    return {};
  },
  toJSON(_: MsgRequestDTagTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestDTagTransferResponse>, I>>(
    _: I
  ): MsgRequestDTagTransferResponse {
    const message = createBaseMsgRequestDTagTransferResponse();
    return message;
  },
  fromAmino(
    _: MsgRequestDTagTransferResponseAmino
  ): MsgRequestDTagTransferResponse {
    return {};
  },
  toAmino(
    _: MsgRequestDTagTransferResponse
  ): MsgRequestDTagTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgRequestDTagTransferResponseAminoMsg
  ): MsgRequestDTagTransferResponse {
    return MsgRequestDTagTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRequestDTagTransferResponseProtoMsg
  ): MsgRequestDTagTransferResponse {
    return MsgRequestDTagTransferResponse.decode(message.value);
  },
  toProto(message: MsgRequestDTagTransferResponse): Uint8Array {
    return MsgRequestDTagTransferResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRequestDTagTransferResponse
  ): MsgRequestDTagTransferResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgRequestDTagTransferResponse",
      value: MsgRequestDTagTransferResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgCancelDTagTransferRequest(): MsgCancelDTagTransferRequest {
  return {
    receiver: "",
    sender: "",
  };
}
export const MsgCancelDTagTransferRequest = {
  encode(
    message: MsgCancelDTagTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelDTagTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelDTagTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelDTagTransferRequest {
    return {
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },
  toJSON(message: MsgCancelDTagTransferRequest): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelDTagTransferRequest>, I>>(
    object: I
  ): MsgCancelDTagTransferRequest {
    const message = createBaseMsgCancelDTagTransferRequest();
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(
    object: MsgCancelDTagTransferRequestAmino
  ): MsgCancelDTagTransferRequest {
    return {
      receiver: object.receiver,
      sender: object.sender,
    };
  },
  toAmino(
    message: MsgCancelDTagTransferRequest
  ): MsgCancelDTagTransferRequestAmino {
    const obj: any = {};
    obj.receiver = message.receiver;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(
    object: MsgCancelDTagTransferRequestAminoMsg
  ): MsgCancelDTagTransferRequest {
    return MsgCancelDTagTransferRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgCancelDTagTransferRequestProtoMsg
  ): MsgCancelDTagTransferRequest {
    return MsgCancelDTagTransferRequest.decode(message.value);
  },
  toProto(message: MsgCancelDTagTransferRequest): Uint8Array {
    return MsgCancelDTagTransferRequest.encode(message).finish();
  },
  toProtoMsg(
    message: MsgCancelDTagTransferRequest
  ): MsgCancelDTagTransferRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgCancelDTagTransferRequest",
      value: MsgCancelDTagTransferRequest.encode(message).finish(),
    };
  },
};
function createBaseMsgCancelDTagTransferRequestResponse(): MsgCancelDTagTransferRequestResponse {
  return {};
}
export const MsgCancelDTagTransferRequestResponse = {
  encode(
    _: MsgCancelDTagTransferRequestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelDTagTransferRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelDTagTransferRequestResponse();
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
  fromJSON(_: any): MsgCancelDTagTransferRequestResponse {
    return {};
  },
  toJSON(_: MsgCancelDTagTransferRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgCancelDTagTransferRequestResponse>, I>
  >(_: I): MsgCancelDTagTransferRequestResponse {
    const message = createBaseMsgCancelDTagTransferRequestResponse();
    return message;
  },
  fromAmino(
    _: MsgCancelDTagTransferRequestResponseAmino
  ): MsgCancelDTagTransferRequestResponse {
    return {};
  },
  toAmino(
    _: MsgCancelDTagTransferRequestResponse
  ): MsgCancelDTagTransferRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgCancelDTagTransferRequestResponseAminoMsg
  ): MsgCancelDTagTransferRequestResponse {
    return MsgCancelDTagTransferRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgCancelDTagTransferRequestResponseProtoMsg
  ): MsgCancelDTagTransferRequestResponse {
    return MsgCancelDTagTransferRequestResponse.decode(message.value);
  },
  toProto(message: MsgCancelDTagTransferRequestResponse): Uint8Array {
    return MsgCancelDTagTransferRequestResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgCancelDTagTransferRequestResponse
  ): MsgCancelDTagTransferRequestResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgCancelDTagTransferRequestResponse",
      value: MsgCancelDTagTransferRequestResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgAcceptDTagTransferRequest(): MsgAcceptDTagTransferRequest {
  return {
    newDtag: "",
    sender: "",
    receiver: "",
  };
}
export const MsgAcceptDTagTransferRequest = {
  encode(
    message: MsgAcceptDTagTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.newDtag !== "") {
      writer.uint32(10).string(message.newDtag);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAcceptDTagTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptDTagTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newDtag = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAcceptDTagTransferRequest {
    return {
      newDtag: isSet(object.newDtag) ? String(object.newDtag) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
    };
  },
  toJSON(message: MsgAcceptDTagTransferRequest): unknown {
    const obj: any = {};
    message.newDtag !== undefined && (obj.newDtag = message.newDtag);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAcceptDTagTransferRequest>, I>>(
    object: I
  ): MsgAcceptDTagTransferRequest {
    const message = createBaseMsgAcceptDTagTransferRequest();
    message.newDtag = object.newDtag ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(
    object: MsgAcceptDTagTransferRequestAmino
  ): MsgAcceptDTagTransferRequest {
    return {
      newDtag: object.new_dtag,
      sender: object.sender,
      receiver: object.receiver,
    };
  },
  toAmino(
    message: MsgAcceptDTagTransferRequest
  ): MsgAcceptDTagTransferRequestAmino {
    const obj: any = {};
    obj.new_dtag = message.newDtag;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(
    object: MsgAcceptDTagTransferRequestAminoMsg
  ): MsgAcceptDTagTransferRequest {
    return MsgAcceptDTagTransferRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAcceptDTagTransferRequestProtoMsg
  ): MsgAcceptDTagTransferRequest {
    return MsgAcceptDTagTransferRequest.decode(message.value);
  },
  toProto(message: MsgAcceptDTagTransferRequest): Uint8Array {
    return MsgAcceptDTagTransferRequest.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAcceptDTagTransferRequest
  ): MsgAcceptDTagTransferRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest",
      value: MsgAcceptDTagTransferRequest.encode(message).finish(),
    };
  },
};
function createBaseMsgAcceptDTagTransferRequestResponse(): MsgAcceptDTagTransferRequestResponse {
  return {};
}
export const MsgAcceptDTagTransferRequestResponse = {
  encode(
    _: MsgAcceptDTagTransferRequestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAcceptDTagTransferRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptDTagTransferRequestResponse();
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
  fromJSON(_: any): MsgAcceptDTagTransferRequestResponse {
    return {};
  },
  toJSON(_: MsgAcceptDTagTransferRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgAcceptDTagTransferRequestResponse>, I>
  >(_: I): MsgAcceptDTagTransferRequestResponse {
    const message = createBaseMsgAcceptDTagTransferRequestResponse();
    return message;
  },
  fromAmino(
    _: MsgAcceptDTagTransferRequestResponseAmino
  ): MsgAcceptDTagTransferRequestResponse {
    return {};
  },
  toAmino(
    _: MsgAcceptDTagTransferRequestResponse
  ): MsgAcceptDTagTransferRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgAcceptDTagTransferRequestResponseAminoMsg
  ): MsgAcceptDTagTransferRequestResponse {
    return MsgAcceptDTagTransferRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgAcceptDTagTransferRequestResponseProtoMsg
  ): MsgAcceptDTagTransferRequestResponse {
    return MsgAcceptDTagTransferRequestResponse.decode(message.value);
  },
  toProto(message: MsgAcceptDTagTransferRequestResponse): Uint8Array {
    return MsgAcceptDTagTransferRequestResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgAcceptDTagTransferRequestResponse
  ): MsgAcceptDTagTransferRequestResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgAcceptDTagTransferRequestResponse",
      value: MsgAcceptDTagTransferRequestResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRefuseDTagTransferRequest(): MsgRefuseDTagTransferRequest {
  return {
    sender: "",
    receiver: "",
  };
}
export const MsgRefuseDTagTransferRequest = {
  encode(
    message: MsgRefuseDTagTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRefuseDTagTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefuseDTagTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRefuseDTagTransferRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
    };
  },
  toJSON(message: MsgRefuseDTagTransferRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRefuseDTagTransferRequest>, I>>(
    object: I
  ): MsgRefuseDTagTransferRequest {
    const message = createBaseMsgRefuseDTagTransferRequest();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(
    object: MsgRefuseDTagTransferRequestAmino
  ): MsgRefuseDTagTransferRequest {
    return {
      sender: object.sender,
      receiver: object.receiver,
    };
  },
  toAmino(
    message: MsgRefuseDTagTransferRequest
  ): MsgRefuseDTagTransferRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(
    object: MsgRefuseDTagTransferRequestAminoMsg
  ): MsgRefuseDTagTransferRequest {
    return MsgRefuseDTagTransferRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRefuseDTagTransferRequestProtoMsg
  ): MsgRefuseDTagTransferRequest {
    return MsgRefuseDTagTransferRequest.decode(message.value);
  },
  toProto(message: MsgRefuseDTagTransferRequest): Uint8Array {
    return MsgRefuseDTagTransferRequest.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRefuseDTagTransferRequest
  ): MsgRefuseDTagTransferRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest",
      value: MsgRefuseDTagTransferRequest.encode(message).finish(),
    };
  },
};
function createBaseMsgRefuseDTagTransferRequestResponse(): MsgRefuseDTagTransferRequestResponse {
  return {};
}
export const MsgRefuseDTagTransferRequestResponse = {
  encode(
    _: MsgRefuseDTagTransferRequestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRefuseDTagTransferRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefuseDTagTransferRequestResponse();
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
  fromJSON(_: any): MsgRefuseDTagTransferRequestResponse {
    return {};
  },
  toJSON(_: MsgRefuseDTagTransferRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgRefuseDTagTransferRequestResponse>, I>
  >(_: I): MsgRefuseDTagTransferRequestResponse {
    const message = createBaseMsgRefuseDTagTransferRequestResponse();
    return message;
  },
  fromAmino(
    _: MsgRefuseDTagTransferRequestResponseAmino
  ): MsgRefuseDTagTransferRequestResponse {
    return {};
  },
  toAmino(
    _: MsgRefuseDTagTransferRequestResponse
  ): MsgRefuseDTagTransferRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgRefuseDTagTransferRequestResponseAminoMsg
  ): MsgRefuseDTagTransferRequestResponse {
    return MsgRefuseDTagTransferRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRefuseDTagTransferRequestResponseProtoMsg
  ): MsgRefuseDTagTransferRequestResponse {
    return MsgRefuseDTagTransferRequestResponse.decode(message.value);
  },
  toProto(message: MsgRefuseDTagTransferRequestResponse): Uint8Array {
    return MsgRefuseDTagTransferRequestResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRefuseDTagTransferRequestResponse
  ): MsgRefuseDTagTransferRequestResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgRefuseDTagTransferRequestResponse",
      value: MsgRefuseDTagTransferRequestResponse.encode(message).finish(),
    };
  },
};
