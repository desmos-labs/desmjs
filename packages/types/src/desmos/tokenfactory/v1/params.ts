/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.tokenfactory.v1";
/**
 * Params defines the parameters for the tokenfactory module.
 *
 * Since: Desmos 6.0.0
 */
export interface Params {
  /**
   * DenomCreationFee defines the fee to be charged on the creation of a new
   * denom. The fee is drawn from the subspace treasury account, and
   * burned.
   */
  denomCreationFee: Coin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the tokenfactory module.
 *
 * Since: Desmos 6.0.0
 */
export interface ParamsAmino {
  /**
   * DenomCreationFee defines the fee to be charged on the creation of a new
   * denom. The fee is drawn from the subspace treasury account, and
   * burned.
   */
  denom_creation_fee: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "desmos/x/tokenfactory/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
  };
}
export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      denomCreationFee: Array.isArray(object?.denomCreationFee)
        ? object.denomCreationFee.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denomCreationFee = message.denomCreationFee.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.denomCreationFee = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.denomCreationFee =
      object.denomCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      denomCreationFee: Array.isArray(object?.denom_creation_fee)
        ? object.denom_creation_fee.map((e: any) => Coin.fromAmino(e))
        : [],
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denom_creation_fee = message.denomCreationFee.map((e) =>
        e ? Coin.toAmino(e) : undefined,
      );
    } else {
      obj.denom_creation_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "desmos/x/tokenfactory/Params",
      value: Params.toAmino(message),
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.Params",
      value: Params.encode(message).finish(),
    };
  },
};
