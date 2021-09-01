/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "desmos.profiles.v1beta1";

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

const baseMsgRequestDTagTransfer: object = { receiver: "", sender: "" };

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
    const message = { ...baseMsgRequestDTagTransfer } as MsgRequestDTagTransfer;
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
    const message = { ...baseMsgRequestDTagTransfer } as MsgRequestDTagTransfer;
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgRequestDTagTransfer): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestDTagTransfer>
  ): MsgRequestDTagTransfer {
    const message = { ...baseMsgRequestDTagTransfer } as MsgRequestDTagTransfer;
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgRequestDTagTransferResponse: object = {};

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
    const message = {
      ...baseMsgRequestDTagTransferResponse,
    } as MsgRequestDTagTransferResponse;
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
    const message = {
      ...baseMsgRequestDTagTransferResponse,
    } as MsgRequestDTagTransferResponse;
    return message;
  },

  toJSON(_: MsgRequestDTagTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRequestDTagTransferResponse>
  ): MsgRequestDTagTransferResponse {
    const message = {
      ...baseMsgRequestDTagTransferResponse,
    } as MsgRequestDTagTransferResponse;
    return message;
  },
};

const baseMsgCancelDTagTransferRequest: object = { receiver: "", sender: "" };

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
    const message = {
      ...baseMsgCancelDTagTransferRequest,
    } as MsgCancelDTagTransferRequest;
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
    const message = {
      ...baseMsgCancelDTagTransferRequest,
    } as MsgCancelDTagTransferRequest;
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgCancelDTagTransferRequest): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelDTagTransferRequest>
  ): MsgCancelDTagTransferRequest {
    const message = {
      ...baseMsgCancelDTagTransferRequest,
    } as MsgCancelDTagTransferRequest;
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgCancelDTagTransferRequestResponse: object = {};

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
    const message = {
      ...baseMsgCancelDTagTransferRequestResponse,
    } as MsgCancelDTagTransferRequestResponse;
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
    const message = {
      ...baseMsgCancelDTagTransferRequestResponse,
    } as MsgCancelDTagTransferRequestResponse;
    return message;
  },

  toJSON(_: MsgCancelDTagTransferRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelDTagTransferRequestResponse>
  ): MsgCancelDTagTransferRequestResponse {
    const message = {
      ...baseMsgCancelDTagTransferRequestResponse,
    } as MsgCancelDTagTransferRequestResponse;
    return message;
  },
};

const baseMsgAcceptDTagTransferRequest: object = {
  newDtag: "",
  sender: "",
  receiver: "",
};

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
    const message = {
      ...baseMsgAcceptDTagTransferRequest,
    } as MsgAcceptDTagTransferRequest;
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
    const message = {
      ...baseMsgAcceptDTagTransferRequest,
    } as MsgAcceptDTagTransferRequest;
    if (object.newDtag !== undefined && object.newDtag !== null) {
      message.newDtag = String(object.newDtag);
    } else {
      message.newDtag = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: MsgAcceptDTagTransferRequest): unknown {
    const obj: any = {};
    message.newDtag !== undefined && (obj.newDtag = message.newDtag);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAcceptDTagTransferRequest>
  ): MsgAcceptDTagTransferRequest {
    const message = {
      ...baseMsgAcceptDTagTransferRequest,
    } as MsgAcceptDTagTransferRequest;
    if (object.newDtag !== undefined && object.newDtag !== null) {
      message.newDtag = object.newDtag;
    } else {
      message.newDtag = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseMsgAcceptDTagTransferRequestResponse: object = {};

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
    const message = {
      ...baseMsgAcceptDTagTransferRequestResponse,
    } as MsgAcceptDTagTransferRequestResponse;
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
    const message = {
      ...baseMsgAcceptDTagTransferRequestResponse,
    } as MsgAcceptDTagTransferRequestResponse;
    return message;
  },

  toJSON(_: MsgAcceptDTagTransferRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAcceptDTagTransferRequestResponse>
  ): MsgAcceptDTagTransferRequestResponse {
    const message = {
      ...baseMsgAcceptDTagTransferRequestResponse,
    } as MsgAcceptDTagTransferRequestResponse;
    return message;
  },
};

const baseMsgRefuseDTagTransferRequest: object = { sender: "", receiver: "" };

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
    const message = {
      ...baseMsgRefuseDTagTransferRequest,
    } as MsgRefuseDTagTransferRequest;
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
    const message = {
      ...baseMsgRefuseDTagTransferRequest,
    } as MsgRefuseDTagTransferRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: MsgRefuseDTagTransferRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRefuseDTagTransferRequest>
  ): MsgRefuseDTagTransferRequest {
    const message = {
      ...baseMsgRefuseDTagTransferRequest,
    } as MsgRefuseDTagTransferRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseMsgRefuseDTagTransferRequestResponse: object = {};

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
    const message = {
      ...baseMsgRefuseDTagTransferRequestResponse,
    } as MsgRefuseDTagTransferRequestResponse;
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
    const message = {
      ...baseMsgRefuseDTagTransferRequestResponse,
    } as MsgRefuseDTagTransferRequestResponse;
    return message;
  },

  toJSON(_: MsgRefuseDTagTransferRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRefuseDTagTransferRequestResponse>
  ): MsgRefuseDTagTransferRequestResponse {
    const message = {
      ...baseMsgRefuseDTagTransferRequestResponse,
    } as MsgRefuseDTagTransferRequestResponse;
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
