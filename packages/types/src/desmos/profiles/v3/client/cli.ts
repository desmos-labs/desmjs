/* eslint-disable */
import { Any } from "../../../../google/protobuf/any";
import { Proof, ChainConfig } from "../models_chain_links";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "desmos.profiles.v3.client";
/**
 * ChainLinkJSON contains the data required to create a ChainLink using the CLI
 * command
 */

export interface ChainLinkJSON {
  /**
   * Address contains the data of the external chain address to be connected
   * with the Desmos profile
   */
  address?: Any;
  /** Proof contains the ownership proof of the external chain address */

  proof?: Proof;
  /** ChainConfig contains the configuration of the external chain */

  chainConfig?: ChainConfig;
}

function createBaseChainLinkJSON(): ChainLinkJSON {
  return {
    address: undefined,
    proof: undefined,
    chainConfig: undefined,
  };
}

export const ChainLinkJSON = {
  encode(
    message: ChainLinkJSON,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== undefined) {
      Any.encode(message.address, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }

    if (message.chainConfig !== undefined) {
      ChainConfig.encode(
        message.chainConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainLinkJSON {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainLinkJSON();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;

        case 3:
          message.chainConfig = ChainConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChainLinkJSON {
    return {
      address: isSet(object.address) ? Any.fromJSON(object.address) : undefined,
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
      chainConfig: isSet(object.chainConfig)
        ? ChainConfig.fromJSON(object.chainConfig)
        : undefined,
    };
  },

  toJSON(message: ChainLinkJSON): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = message.address ? Any.toJSON(message.address) : undefined);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.chainConfig !== undefined &&
      (obj.chainConfig = message.chainConfig
        ? ChainConfig.toJSON(message.chainConfig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainLinkJSON>, I>>(
    object: I
  ): ChainLinkJSON {
    const message = createBaseChainLinkJSON();
    message.address =
      object.address !== undefined && object.address !== null
        ? Any.fromPartial(object.address)
        : undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? Proof.fromPartial(object.proof)
        : undefined;
    message.chainConfig =
      object.chainConfig !== undefined && object.chainConfig !== null
        ? ChainConfig.fromPartial(object.chainConfig)
        : undefined;
    return message;
  },
};
