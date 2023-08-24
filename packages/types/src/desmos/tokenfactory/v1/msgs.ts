/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import {
  Metadata,
  MetadataAmino,
  Params,
  ParamsAmino,
} from "../../../cosmos/bank/v1beta1/bank";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.tokenfactory.v1";
/**
 * MsgCreateDenom represents the message to be used to create a denom for
 * subspace
 *
 * Since: Desmos 6.0.0
 */
export interface MsgCreateDenom {
  /** Id of the subspace which manages the denom */
  subspaceId: Long;
  /** Address of user having the permission to manage subspace denoms */
  sender: string;
  /**
   * Subdenom name of the creating denom
   * It can be up to 44 "alphanumeric" characters long
   */
  subdenom: string;
}
export interface MsgCreateDenomProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.MsgCreateDenom";
  value: Uint8Array;
}
/**
 * MsgCreateDenom represents the message to be used to create a denom for
 * subspace
 *
 * Since: Desmos 6.0.0
 */
export interface MsgCreateDenomAmino {
  /** Id of the subspace which manages the denom */
  subspace_id: string;
  /** Address of user having the permission to manage subspace denoms */
  sender: string;
  /**
   * Subdenom name of the creating denom
   * It can be up to 44 "alphanumeric" characters long
   */
  subdenom: string;
}
export interface MsgCreateDenomAminoMsg {
  type: "desmos/MsgCreateDenom";
  value: MsgCreateDenomAmino;
}
/**
 * MsgCreateDenomResponse represents the Msg/CreateDenom response type
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
  /** Name of the newly created denom */
  newTokenDenom: string;
}
export interface MsgCreateDenomResponseProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.MsgCreateDenomResponse";
  value: Uint8Array;
}
/**
 * MsgCreateDenomResponse represents the Msg/CreateDenom response type
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseAmino {
  /** Name of the newly created denom */
  new_token_denom: string;
}
export interface MsgCreateDenomResponseAminoMsg {
  type: "/desmos.tokenfactory.v1.MsgCreateDenomResponse";
  value: MsgCreateDenomResponseAmino;
}
/**
 * MsgMint represents the message to be used to mint subspace tokens to treasury
 * account
 *
 * Since: Desmos 6.0.0
 */
export interface MsgMint {
  /** Id of the subspace which manages the denom */
  subspaceId: Long;
  /** Address of user having the permission to manage subspace denoms */
  sender: string;
  /** Amount of the minting subspace tokens */
  amount?: Coin;
}
export interface MsgMintProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.MsgMint";
  value: Uint8Array;
}
/**
 * MsgMint represents the message to be used to mint subspace tokens to treasury
 * account
 *
 * Since: Desmos 6.0.0
 */
export interface MsgMintAmino {
  /** Id of the subspace which manages the denom */
  subspace_id: string;
  /** Address of user having the permission to manage subspace denoms */
  sender: string;
  /** Amount of the minting subspace tokens */
  amount?: CoinAmino;
}
export interface MsgMintAminoMsg {
  type: "desmos/MsgMint";
  value: MsgMintAmino;
}
/**
 * MsgMintResponse represents the Msg/Mint response type
 *
 * Since: Desmos 6.0.0
 */
export interface MsgMintResponse {}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.MsgMintResponse";
  value: Uint8Array;
}
/**
 * MsgMintResponse represents the Msg/Mint response type
 *
 * Since: Desmos 6.0.0
 */
export interface MsgMintResponseAmino {}
export interface MsgMintResponseAminoMsg {
  type: "/desmos.tokenfactory.v1.MsgMintResponse";
  value: MsgMintResponseAmino;
}
/**
 * MsgBurn represents the message to be used to burn subspace tokens from
 * treasury account
 *
 * Since: Desmos 6.0.0
 */
export interface MsgBurn {
  /** Id of the subspace which manages the denom */
  subspaceId: Long;
  /** Address of user having the permission to manage subspace denoms */
  sender: string;
  /** Amount of the burning subspace tokens */
  amount?: Coin;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.MsgBurn";
  value: Uint8Array;
}
/**
 * MsgBurn represents the message to be used to burn subspace tokens from
 * treasury account
 *
 * Since: Desmos 6.0.0
 */
export interface MsgBurnAmino {
  /** Id of the subspace which manages the denom */
  subspace_id: string;
  /** Address of user having the permission to manage subspace denoms */
  sender: string;
  /** Amount of the burning subspace tokens */
  amount?: CoinAmino;
}
export interface MsgBurnAminoMsg {
  type: "desmos/MsgBurn";
  value: MsgBurnAmino;
}
/**
 * MsgBurnResponse represents the Msg/Burn response type
 *
 * Since: Desmos 6.0.0
 */
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.MsgBurnResponse";
  value: Uint8Array;
}
/**
 * MsgBurnResponse represents the Msg/Burn response type
 *
 * Since: Desmos 6.0.0
 */
export interface MsgBurnResponseAmino {}
export interface MsgBurnResponseAminoMsg {
  type: "/desmos.tokenfactory.v1.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
/**
 * MsgSetDenomMetadata represents the message to be used to set the subspace
 * token's bank metadata
 *
 * Since: Desmos 6.0.0
 */
export interface MsgSetDenomMetadata {
  /** Id of the subspace which manages the denom */
  subspaceId: Long;
  /** Address of user having the permission to manage subspace denoms */
  sender: string;
  /** Metadata of the denom */
  metadata?: Metadata;
}
export interface MsgSetDenomMetadataProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.MsgSetDenomMetadata";
  value: Uint8Array;
}
/**
 * MsgSetDenomMetadata represents the message to be used to set the subspace
 * token's bank metadata
 *
 * Since: Desmos 6.0.0
 */
export interface MsgSetDenomMetadataAmino {
  /** Id of the subspace which manages the denom */
  subspace_id: string;
  /** Address of user having the permission to manage subspace denoms */
  sender: string;
  /** Metadata of the denom */
  metadata?: MetadataAmino;
}
export interface MsgSetDenomMetadataAminoMsg {
  type: "desmos/MsgSetDenomMetadata";
  value: MsgSetDenomMetadataAmino;
}
/**
 * MsgSetDenomMetadataResponse represents the Msg/SetDenomMetadata response type
 *
 * Since: Desmos 6.0.0
 */
export interface MsgSetDenomMetadataResponse {}
export interface MsgSetDenomMetadataResponseProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.MsgSetDenomMetadataResponse";
  value: Uint8Array;
}
/**
 * MsgSetDenomMetadataResponse represents the Msg/SetDenomMetadata response type
 *
 * Since: Desmos 6.0.0
 */
export interface MsgSetDenomMetadataResponseAmino {}
export interface MsgSetDenomMetadataResponseAminoMsg {
  type: "/desmos.tokenfactory.v1.MsgSetDenomMetadataResponse";
  value: MsgSetDenomMetadataResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: Desmos 6.0.0
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: Desmos 6.0.0
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "desmos/x/tokenfactoy/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse represents the Msg/UpdateParams response type
 *
 * Since: Desmos 6.0.0
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse represents the Msg/UpdateParams response type
 *
 * Since: Desmos 6.0.0
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/desmos.tokenfactory.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    subspaceId: Long.UZERO,
    sender: "",
    subdenom: "",
  };
}
export const MsgCreateDenom = {
  encode(
    message: MsgCreateDenom,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.subdenom !== "") {
      writer.uint32(26).string(message.subdenom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.subdenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDenom {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      subdenom: isSet(object.subdenom) ? String(object.subdenom) : "",
    };
  },
  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.subdenom !== undefined && (obj.subdenom = message.subdenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(
    object: I,
  ): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.subdenom = object.subdenom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sender: object.sender,
      subdenom: object.subdenom,
    };
  },
  toAmino(message: MsgCreateDenom): MsgCreateDenomAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.sender = message.sender;
    obj.subdenom = message.subdenom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomAminoMsg): MsgCreateDenom {
    return MsgCreateDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDenom): MsgCreateDenomAminoMsg {
    return {
      type: "desmos/MsgCreateDenom",
      value: MsgCreateDenom.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom {
    return MsgCreateDenom.decode(message.value);
  },
  toProto(message: MsgCreateDenom): Uint8Array {
    return MsgCreateDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.MsgCreateDenom",
      value: MsgCreateDenom.encode(message).finish(),
    };
  },
};
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {
    newTokenDenom: "",
  };
}
export const MsgCreateDenomResponse = {
  encode(
    message: MsgCreateDenomResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.newTokenDenom !== "") {
      writer.uint32(10).string(message.newTokenDenom);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newTokenDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDenomResponse {
    return {
      newTokenDenom: isSet(object.newTokenDenom)
        ? String(object.newTokenDenom)
        : "",
    };
  },
  toJSON(message: MsgCreateDenomResponse): unknown {
    const obj: any = {};
    message.newTokenDenom !== undefined &&
      (obj.newTokenDenom = message.newTokenDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(
    object: I,
  ): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    message.newTokenDenom = object.newTokenDenom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDenomResponseAmino): MsgCreateDenomResponse {
    return {
      newTokenDenom: object.new_token_denom,
    };
  },
  toAmino(message: MsgCreateDenomResponse): MsgCreateDenomResponseAmino {
    const obj: any = {};
    obj.new_token_denom = message.newTokenDenom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgCreateDenomResponseProtoMsg,
  ): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.decode(message.value);
  },
  toProto(message: MsgCreateDenomResponse): Uint8Array {
    return MsgCreateDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.MsgCreateDenomResponse",
      value: MsgCreateDenomResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgMint(): MsgMint {
  return {
    subspaceId: Long.UZERO,
    sender: "",
    amount: undefined,
  };
}
export const MsgMint = {
  encode(
    message: MsgMint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMint {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },
  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
    const message = createBaseMsgMint();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sender: object.sender,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
    };
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.sender = message.sender;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
    return MsgMint.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMint): MsgMintAminoMsg {
    return {
      type: "desmos/MsgMint",
      value: MsgMint.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.MsgMint",
      value: MsgMint.encode(message).finish(),
    };
  },
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}
export const MsgMintResponse = {
  encode(
    _: MsgMintResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
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
  fromJSON(_: any): MsgMintResponse {
    return {};
  },
  toJSON(_: MsgMintResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMintResponse>, I>>(
    _: I,
  ): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  fromAmino(_: MsgMintResponseAmino): MsgMintResponse {
    return {};
  },
  toAmino(_: MsgMintResponse): MsgMintResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse {
    return MsgMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse {
    return MsgMintResponse.decode(message.value);
  },
  toProto(message: MsgMintResponse): Uint8Array {
    return MsgMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgBurn(): MsgBurn {
  return {
    subspaceId: Long.UZERO,
    sender: "",
    amount: undefined,
  };
}
export const MsgBurn = {
  encode(
    message: MsgBurn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBurn {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },
  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sender: object.sender,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
    };
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.sender = message.sender;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurn): MsgBurnAminoMsg {
    return {
      type: "desmos/MsgBurn",
      value: MsgBurn.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.MsgBurn",
      value: MsgBurn.encode(message).finish(),
    };
  },
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  encode(
    _: MsgBurnResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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
  fromJSON(_: any): MsgBurnResponse {
    return {};
  },
  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(
    _: I,
  ): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
    return {};
  },
  toAmino(_: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
  return {
    subspaceId: Long.UZERO,
    sender: "",
    metadata: undefined,
  };
}
export const MsgSetDenomMetadata = {
  encode(
    message: MsgSetDenomMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDenomMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDenomMetadata {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      metadata: isSet(object.metadata)
        ? Metadata.fromJSON(object.metadata)
        : undefined,
    };
  },
  toJSON(message: MsgSetDenomMetadata): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetDenomMetadata>, I>>(
    object: I,
  ): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Metadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
  fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sender: object.sender,
      metadata: object?.metadata
        ? Metadata.fromAmino(object.metadata)
        : undefined,
    };
  },
  toAmino(message: MsgSetDenomMetadata): MsgSetDenomMetadataAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.sender = message.sender;
    obj.metadata = message.metadata
      ? Metadata.toAmino(message.metadata)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomMetadataAminoMsg): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataAminoMsg {
    return {
      type: "desmos/MsgSetDenomMetadata",
      value: MsgSetDenomMetadata.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgSetDenomMetadataProtoMsg): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadata): Uint8Array {
    return MsgSetDenomMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.MsgSetDenomMetadata",
      value: MsgSetDenomMetadata.encode(message).finish(),
    };
  },
};
function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
  return {};
}
export const MsgSetDenomMetadataResponse = {
  encode(
    _: MsgSetDenomMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetDenomMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadataResponse();
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
  fromJSON(_: any): MsgSetDenomMetadataResponse {
    return {};
  },
  toJSON(_: MsgSetDenomMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetDenomMetadataResponse>, I>>(
    _: I,
  ): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  },
  fromAmino(_: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse {
    return {};
  },
  toAmino(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgSetDenomMetadataResponseAminoMsg,
  ): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgSetDenomMetadataResponseProtoMsg,
  ): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadataResponse): Uint8Array {
    return MsgSetDenomMetadataResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgSetDenomMetadataResponse,
  ): MsgSetDenomMetadataResponseProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.MsgSetDenomMetadataResponse",
      value: MsgSetDenomMetadataResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined,
  };
}
export const MsgUpdateParams = {
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I,
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined,
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "desmos/x/tokenfactoy/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    _: I,
  ): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgUpdateParamsResponseAminoMsg,
  ): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgUpdateParamsResponseProtoMsg,
  ): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgUpdateParamsResponse,
  ): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
  /**
   * CreateDenom allows an account to create a new denom for subspace. It
   * requires a subspace and a sub denomination. The (subspace_treasury_address,
   * sub_denomination) tuple must be unique and cannot be re-used.
   *
   * The resulting denom created is defined as
   * <factory/{treasuryAddress}/{subdenom}>. The resulting denom's admin is
   * originally set to be the subspace treasury account, and this can not be
   * changed later.
   *
   * Since: Desmos 6.0.0
   */
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  /**
   * Mint allows subspace admins to mint more of a token.
   *
   * Since: Desmos 6.0.0
   */
  Mint(request: MsgMint): Promise<MsgMintResponse>;
  /**
   * Burn allows subspace admins to burn a token.
   * For now, we only support burning from the treasury account.
   *
   * Since: Desmos 6.0.0
   */
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
  /**
   * SetDenomMetadata allows subspace admins to set the denom's bank metadata.
   *
   * Since: Desmos 6.0.0
   */
  SetDenomMetadata(
    request: MsgSetDenomMetadata,
  ): Promise<MsgSetDenomMetadataResponse>;
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   *
   * Since: Desmos 6.0.0
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDenom = this.CreateDenom.bind(this);
    this.Mint = this.Mint.bind(this);
    this.Burn = this.Burn.bind(this);
    this.SetDenomMetadata = this.SetDenomMetadata.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.tokenfactory.v1.Msg",
      "CreateDenom",
      data,
    );
    return promise.then((data) =>
      MsgCreateDenomResponse.decode(new _m0.Reader(data)),
    );
  }
  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.tokenfactory.v1.Msg",
      "Mint",
      data,
    );
    return promise.then((data) => MsgMintResponse.decode(new _m0.Reader(data)));
  }
  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.tokenfactory.v1.Msg",
      "Burn",
      data,
    );
    return promise.then((data) => MsgBurnResponse.decode(new _m0.Reader(data)));
  }
  SetDenomMetadata(
    request: MsgSetDenomMetadata,
  ): Promise<MsgSetDenomMetadataResponse> {
    const data = MsgSetDenomMetadata.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.tokenfactory.v1.Msg",
      "SetDenomMetadata",
      data,
    );
    return promise.then((data) =>
      MsgSetDenomMetadataResponse.decode(new _m0.Reader(data)),
    );
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.tokenfactory.v1.Msg",
      "UpdateParams",
      data,
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data)),
    );
  }
}
