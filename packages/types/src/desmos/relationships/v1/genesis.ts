/* eslint-disable */
import { Relationship, UserBlock } from "./models";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.relationships.v1";
/** GenesisState defines the profiles module's genesis state. */

export interface GenesisState {
  relationships: Relationship[];
  blocks: UserBlock[];
}

function createBaseGenesisState(): GenesisState {
  return {
    relationships: [],
    blocks: [],
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.relationships) {
      Relationship.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.blocks) {
      UserBlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.relationships.push(
            Relationship.decode(reader, reader.uint32())
          );
          break;

        case 2:
          message.blocks.push(UserBlock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      relationships: Array.isArray(object?.relationships)
        ? object.relationships.map((e: any) => Relationship.fromJSON(e))
        : [],
      blocks: Array.isArray(object?.blocks)
        ? object.blocks.map((e: any) => UserBlock.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.relationships) {
      obj.relationships = message.relationships.map((e) =>
        e ? Relationship.toJSON(e) : undefined
      );
    } else {
      obj.relationships = [];
    }

    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? UserBlock.toJSON(e) : undefined
      );
    } else {
      obj.blocks = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.relationships =
      object.relationships?.map((e) => Relationship.fromPartial(e)) || [];
    message.blocks = object.blocks?.map((e) => UserBlock.fromPartial(e)) || [];
    return message;
  },
};
