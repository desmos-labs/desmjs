/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FreeTextValueParams, RegisteredReactionValueParams } from "../models";

/**
 * SetReactionsParamsJSON contains the data that can be specified when setting a
 * subspace reactions params using the CLI command
 */
export interface SetReactionsParamsJSON {
  /** Params related to RegisteredReactionValue reactions */
  registeredReactionParams?: RegisteredReactionValueParams;
  /** Params related to FreeTextValue reactions */
  freeTextParams?: FreeTextValueParams;
}

function createBaseSetReactionsParamsJSON(): SetReactionsParamsJSON {
  return { registeredReactionParams: undefined, freeTextParams: undefined };
}

export const SetReactionsParamsJSON = {
  encode(message: SetReactionsParamsJSON, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registeredReactionParams !== undefined) {
      RegisteredReactionValueParams.encode(message.registeredReactionParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.freeTextParams !== undefined) {
      FreeTextValueParams.encode(message.freeTextParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetReactionsParamsJSON {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetReactionsParamsJSON();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registeredReactionParams = RegisteredReactionValueParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.freeTextParams = FreeTextValueParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetReactionsParamsJSON {
    return {
      registeredReactionParams: isSet(object.registeredReactionParams)
        ? RegisteredReactionValueParams.fromJSON(object.registeredReactionParams)
        : undefined,
      freeTextParams: isSet(object.freeTextParams) ? FreeTextValueParams.fromJSON(object.freeTextParams) : undefined,
    };
  },

  toJSON(message: SetReactionsParamsJSON): unknown {
    const obj: any = {};
    message.registeredReactionParams !== undefined && (obj.registeredReactionParams = message.registeredReactionParams
      ? RegisteredReactionValueParams.toJSON(message.registeredReactionParams)
      : undefined);
    message.freeTextParams !== undefined &&
      (obj.freeTextParams = message.freeTextParams ? FreeTextValueParams.toJSON(message.freeTextParams) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetReactionsParamsJSON>, I>>(object: I): SetReactionsParamsJSON {
    const message = createBaseSetReactionsParamsJSON();
    message.registeredReactionParams =
      (object.registeredReactionParams !== undefined && object.registeredReactionParams !== null)
        ? RegisteredReactionValueParams.fromPartial(object.registeredReactionParams)
        : undefined;
    message.freeTextParams = (object.freeTextParams !== undefined && object.freeTextParams !== null)
      ? FreeTextValueParams.fromPartial(object.freeTextParams)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
