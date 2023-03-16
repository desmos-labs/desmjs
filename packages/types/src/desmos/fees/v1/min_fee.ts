/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.fees.v1";
/**
 * MinFee contains the minimum amount of coins that should be paid as a fee for
 * each message of the specific type sent
 */

export interface MinFee {
  messageType: string;
  amount: Coin[];
}

function createBaseMinFee(): MinFee {
  return {
    messageType: "",
    amount: [],
  };
}

export const MinFee = {
  encode(
    message: MinFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageType !== "") {
      writer.uint32(10).string(message.messageType);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messageType = reader.string();
          break;

        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MinFee {
    return {
      messageType: isSet(object.messageType) ? String(object.messageType) : "",
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MinFee): unknown {
    const obj: any = {};
    message.messageType !== undefined &&
      (obj.messageType = message.messageType);

    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MinFee>, I>>(object: I): MinFee {
    const message = createBaseMinFee();
    message.messageType = object.messageType ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
