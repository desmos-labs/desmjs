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
/**
 * MsgRequestDTagTransferResponse defines the Msg/RequestDTagTransfer response
 * type.
 */
export interface MsgRequestDTagTransferResponse {}
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
/**
 * MsgCancelDTagTransferRequestResponse represents the
 * Msg/CancelDTagTransferRequest response type.
 */
export interface MsgCancelDTagTransferRequestResponse {}
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
/**
 * MsgAcceptDTagTransferRequestResponse defines the
 * Msg/AcceptDTagTransferRequest response.
 */
export interface MsgAcceptDTagTransferRequestResponse {}
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
/**
 * MsgRefuseDTagTransferRequestResponse defines the
 * Msg/RefuseDTagTransferRequest response.
 */
export interface MsgRefuseDTagTransferRequestResponse {}
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
};
