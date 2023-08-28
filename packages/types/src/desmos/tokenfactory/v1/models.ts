/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.tokenfactory.v1";
/** DenomAuthorityMetadata contains the metadata for a single token denom. */
export interface DenomAuthorityMetadata {
  /**
   * Admin of the denomination.
   * Can be empty for no admin, or a valid Desmos address
   */
  admin: string;
}
export interface DenomAuthorityMetadataProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.DenomAuthorityMetadata";
  value: Uint8Array;
}
/** DenomAuthorityMetadata contains the metadata for a single token denom. */
export interface DenomAuthorityMetadataAmino {
  /**
   * Admin of the denomination.
   * Can be empty for no admin, or a valid Desmos address
   */
  admin: string;
}
export interface DenomAuthorityMetadataAminoMsg {
  type: "/desmos.tokenfactory.v1.DenomAuthorityMetadata";
  value: DenomAuthorityMetadataAmino;
}
function createBaseDenomAuthorityMetadata(): DenomAuthorityMetadata {
  return {
    admin: "",
  };
}
export const DenomAuthorityMetadata = {
  encode(
    message: DenomAuthorityMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DenomAuthorityMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomAuthorityMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomAuthorityMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
    };
  },
  toJSON(message: DenomAuthorityMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DenomAuthorityMetadata>, I>>(
    object: I,
  ): DenomAuthorityMetadata {
    const message = createBaseDenomAuthorityMetadata();
    message.admin = object.admin ?? "";
    return message;
  },
  fromAmino(object: DenomAuthorityMetadataAmino): DenomAuthorityMetadata {
    return {
      admin: object.admin,
    };
  },
  toAmino(message: DenomAuthorityMetadata): DenomAuthorityMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin;
    return obj;
  },
  fromAminoMsg(object: DenomAuthorityMetadataAminoMsg): DenomAuthorityMetadata {
    return DenomAuthorityMetadata.fromAmino(object.value);
  },
  fromProtoMsg(
    message: DenomAuthorityMetadataProtoMsg,
  ): DenomAuthorityMetadata {
    return DenomAuthorityMetadata.decode(message.value);
  },
  toProto(message: DenomAuthorityMetadata): Uint8Array {
    return DenomAuthorityMetadata.encode(message).finish();
  },
  toProtoMsg(message: DenomAuthorityMetadata): DenomAuthorityMetadataProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.DenomAuthorityMetadata",
      value: DenomAuthorityMetadata.encode(message).finish(),
    };
  },
};
