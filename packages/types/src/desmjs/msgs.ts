/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
  isSet,
  bytesFromBase64,
  base64FromBytes,
  DeepPartial,
  Exact,
} from "../helpers";
export const protobufPackage = "desmsjs.v2";
/** MsgAuthenticate represents the message used to authenticate a user */
export interface MsgAuthenticate {
  /** Address of the user to authenticate */
  user: string;
  /** Nonce to avoid double spending attacks */
  nonce: Uint8Array;
}
function createBaseMsgAuthenticate(): MsgAuthenticate {
  return {
    user: "",
    nonce: new Uint8Array(),
  };
}
export const MsgAuthenticate = {
  encode(
    message: MsgAuthenticate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(18).bytes(message.nonce);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuthenticate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthenticate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.nonce = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAuthenticate {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
    };
  },
  toJSON(message: MsgAuthenticate): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAuthenticate>, I>>(
    object: I
  ): MsgAuthenticate {
    const message = createBaseMsgAuthenticate();
    message.user = object.user ?? "";
    message.nonce = object.nonce ?? new Uint8Array();
    return message;
  },
};
