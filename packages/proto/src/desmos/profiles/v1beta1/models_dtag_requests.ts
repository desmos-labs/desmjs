/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "desmos.profiles.v1beta1";

/** DTagTransferRequest represent a DTag transfer request between two users */
export interface DTagTransferRequest {
  /**
   * DTagToTrade contains the value of the DTag that should be transferred from
   * the receiver of the request to the sender
   */
  dtagToTrade: string;
  /** Sender represents the address of the account that sent the request */
  sender: string;
  /**
   * Receiver represents the receiver of the request that, if accepted, will
   * give to the sender their DTag
   */
  receiver: string;
}

const baseDTagTransferRequest: object = {
  dtagToTrade: "",
  sender: "",
  receiver: "",
};

export const DTagTransferRequest = {
  encode(
    message: DTagTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dtagToTrade !== "") {
      writer.uint32(10).string(message.dtagToTrade);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DTagTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDTagTransferRequest } as DTagTransferRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dtagToTrade = reader.string();
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

  fromJSON(object: any): DTagTransferRequest {
    const message = { ...baseDTagTransferRequest } as DTagTransferRequest;
    if (object.dtagToTrade !== undefined && object.dtagToTrade !== null) {
      message.dtagToTrade = String(object.dtagToTrade);
    } else {
      message.dtagToTrade = "";
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

  toJSON(message: DTagTransferRequest): unknown {
    const obj: any = {};
    message.dtagToTrade !== undefined &&
      (obj.dtagToTrade = message.dtagToTrade);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<DTagTransferRequest>): DTagTransferRequest {
    const message = { ...baseDTagTransferRequest } as DTagTransferRequest;
    if (object.dtagToTrade !== undefined && object.dtagToTrade !== null) {
      message.dtagToTrade = object.dtagToTrade;
    } else {
      message.dtagToTrade = "";
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
