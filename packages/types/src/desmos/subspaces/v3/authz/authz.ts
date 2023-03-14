/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "desmos.subspaces.v3.authz";
/**
 * GenericSubspaceAuthorization defines an authorization to perform any
 * operation only inside a specific subspace.
 */

export interface GenericSubspaceAuthorization {
  /** Ids of the subspaces inside which to grant the permission */
  subspacesIds: Long[];
  /**
   * Msg, identified by it's type URL, to grant unrestricted permissions to
   * execute within the subspace
   */

  msg: string;
}

function createBaseGenericSubspaceAuthorization(): GenericSubspaceAuthorization {
  return {
    subspacesIds: [],
    msg: "",
  };
}

export const GenericSubspaceAuthorization = {
  encode(
    message: GenericSubspaceAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.subspacesIds) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }

    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenericSubspaceAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericSubspaceAuthorization();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.subspacesIds.push(reader.uint64() as Long);
            }
          } else {
            message.subspacesIds.push(reader.uint64() as Long);
          }

          break;

        case 2:
          message.msg = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenericSubspaceAuthorization {
    return {
      subspacesIds: Array.isArray(object?.subspacesIds)
        ? object.subspacesIds.map((e: any) => Long.fromValue(e))
        : [],
      msg: isSet(object.msg) ? String(object.msg) : "",
    };
  },

  toJSON(message: GenericSubspaceAuthorization): unknown {
    const obj: any = {};

    if (message.subspacesIds) {
      obj.subspacesIds = message.subspacesIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.subspacesIds = [];
    }

    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenericSubspaceAuthorization>, I>>(
    object: I
  ): GenericSubspaceAuthorization {
    const message = createBaseGenericSubspaceAuthorization();
    message.subspacesIds =
      object.subspacesIds?.map((e) => Long.fromValue(e)) || [];
    message.msg = object.msg ?? "";
    return message;
  },
};
