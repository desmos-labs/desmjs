/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/** Params contains the parameters for the posts module */
export interface Params {
  maxPostMessageLength: Uint8Array;
  maxAdditionalAttributesFieldsNumber: Uint8Array;
  maxAdditionalAttributesFieldValueLength: Uint8Array;
  maxAdditionalAttributesFieldKeyLength: Uint8Array;
}

const baseParams: object = {};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxPostMessageLength.length !== 0) {
      writer.uint32(10).bytes(message.maxPostMessageLength);
    }
    if (message.maxAdditionalAttributesFieldsNumber.length !== 0) {
      writer.uint32(18).bytes(message.maxAdditionalAttributesFieldsNumber);
    }
    if (message.maxAdditionalAttributesFieldValueLength.length !== 0) {
      writer.uint32(26).bytes(message.maxAdditionalAttributesFieldValueLength);
    }
    if (message.maxAdditionalAttributesFieldKeyLength.length !== 0) {
      writer.uint32(34).bytes(message.maxAdditionalAttributesFieldKeyLength);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.maxPostMessageLength = new Uint8Array();
    message.maxAdditionalAttributesFieldsNumber = new Uint8Array();
    message.maxAdditionalAttributesFieldValueLength = new Uint8Array();
    message.maxAdditionalAttributesFieldKeyLength = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPostMessageLength = reader.bytes();
          break;
        case 2:
          message.maxAdditionalAttributesFieldsNumber = reader.bytes();
          break;
        case 3:
          message.maxAdditionalAttributesFieldValueLength = reader.bytes();
          break;
        case 4:
          message.maxAdditionalAttributesFieldKeyLength = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.maxPostMessageLength = new Uint8Array();
    message.maxAdditionalAttributesFieldsNumber = new Uint8Array();
    message.maxAdditionalAttributesFieldValueLength = new Uint8Array();
    message.maxAdditionalAttributesFieldKeyLength = new Uint8Array();
    if (
      object.maxPostMessageLength !== undefined &&
      object.maxPostMessageLength !== null
    ) {
      message.maxPostMessageLength = bytesFromBase64(
        object.maxPostMessageLength
      );
    }
    if (
      object.maxAdditionalAttributesFieldsNumber !== undefined &&
      object.maxAdditionalAttributesFieldsNumber !== null
    ) {
      message.maxAdditionalAttributesFieldsNumber = bytesFromBase64(
        object.maxAdditionalAttributesFieldsNumber
      );
    }
    if (
      object.maxAdditionalAttributesFieldValueLength !== undefined &&
      object.maxAdditionalAttributesFieldValueLength !== null
    ) {
      message.maxAdditionalAttributesFieldValueLength = bytesFromBase64(
        object.maxAdditionalAttributesFieldValueLength
      );
    }
    if (
      object.maxAdditionalAttributesFieldKeyLength !== undefined &&
      object.maxAdditionalAttributesFieldKeyLength !== null
    ) {
      message.maxAdditionalAttributesFieldKeyLength = bytesFromBase64(
        object.maxAdditionalAttributesFieldKeyLength
      );
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxPostMessageLength !== undefined &&
      (obj.maxPostMessageLength = base64FromBytes(
        message.maxPostMessageLength !== undefined
          ? message.maxPostMessageLength
          : new Uint8Array()
      ));
    message.maxAdditionalAttributesFieldsNumber !== undefined &&
      (obj.maxAdditionalAttributesFieldsNumber = base64FromBytes(
        message.maxAdditionalAttributesFieldsNumber !== undefined
          ? message.maxAdditionalAttributesFieldsNumber
          : new Uint8Array()
      ));
    message.maxAdditionalAttributesFieldValueLength !== undefined &&
      (obj.maxAdditionalAttributesFieldValueLength = base64FromBytes(
        message.maxAdditionalAttributesFieldValueLength !== undefined
          ? message.maxAdditionalAttributesFieldValueLength
          : new Uint8Array()
      ));
    message.maxAdditionalAttributesFieldKeyLength !== undefined &&
      (obj.maxAdditionalAttributesFieldKeyLength = base64FromBytes(
        message.maxAdditionalAttributesFieldKeyLength !== undefined
          ? message.maxAdditionalAttributesFieldKeyLength
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.maxPostMessageLength !== undefined &&
      object.maxPostMessageLength !== null
    ) {
      message.maxPostMessageLength = object.maxPostMessageLength;
    } else {
      message.maxPostMessageLength = new Uint8Array();
    }
    if (
      object.maxAdditionalAttributesFieldsNumber !== undefined &&
      object.maxAdditionalAttributesFieldsNumber !== null
    ) {
      message.maxAdditionalAttributesFieldsNumber =
        object.maxAdditionalAttributesFieldsNumber;
    } else {
      message.maxAdditionalAttributesFieldsNumber = new Uint8Array();
    }
    if (
      object.maxAdditionalAttributesFieldValueLength !== undefined &&
      object.maxAdditionalAttributesFieldValueLength !== null
    ) {
      message.maxAdditionalAttributesFieldValueLength =
        object.maxAdditionalAttributesFieldValueLength;
    } else {
      message.maxAdditionalAttributesFieldValueLength = new Uint8Array();
    }
    if (
      object.maxAdditionalAttributesFieldKeyLength !== undefined &&
      object.maxAdditionalAttributesFieldKeyLength !== null
    ) {
      message.maxAdditionalAttributesFieldKeyLength =
        object.maxAdditionalAttributesFieldKeyLength;
    } else {
      message.maxAdditionalAttributesFieldKeyLength = new Uint8Array();
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
type DeepPartial<T> = T extends Builtin
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
