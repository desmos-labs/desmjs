/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

function createBaseDTagTransferRequest(): DTagTransferRequest {
  return { dtagToTrade: "", sender: "", receiver: "" };
}

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
    const message = createBaseDTagTransferRequest();
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
    return {
      dtagToTrade: isSet(object.dtagToTrade) ? String(object.dtagToTrade) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
    };
  },

  toJSON(message: DTagTransferRequest): unknown {
    const obj: any = {};
    message.dtagToTrade !== undefined &&
      (obj.dtagToTrade = message.dtagToTrade);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DTagTransferRequest>, I>>(
    object: I
  ): DTagTransferRequest {
    const message = createBaseDTagTransferRequest();
    message.dtagToTrade = object.dtagToTrade ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
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
