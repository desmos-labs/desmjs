import { AminoConverters } from "@cosmjs/stargate";
import { MsgGrant } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import {
  GenericAuthorization,
  Grant,
} from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { Any } from "cosmjs-types/google/protobuf/any";
import { SendAuthorization } from "cosmjs-types/cosmos/bank/v1beta1/authz";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import {
  AminoAuthorization,
  AminoGrant,
  AminoMsgGrant,
  isAminoSendAuthorization,
} from "./messages";

/**
 * Converts the given authorization to an AminoAuthorization.
 */
function convertAuthorization({ typeUrl, value }: Any): AminoAuthorization {
  if (typeUrl === "/cosmos.bank.v1beta1.SendAuthorization") {
    const authorization = SendAuthorization.decode(value);
    return {
      spend_limit: authorization.spendLimit,
    };
  }

  return {};
}

function convertAminoAuthorization(authorization: AminoAuthorization): Any {
  if (isAminoSendAuthorization(authorization)) {
    return {
      typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
      value: SendAuthorization.encode(
        SendAuthorization.fromPartial({
          spendLimit: authorization.spend_limit,
        })
      ).finish(),
    };
  }

  return {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    value: GenericAuthorization.encode(
      GenericAuthorization.fromPartial({})
    ).finish(),
  };
}

/**
 * Converts the given grant to an AminoGrant instance.
 */
function convertGrant(grant: Grant): AminoGrant {
  const expiration = grant.expiration?.seconds;

  return {
    authorization: grant.authorization
      ? convertAuthorization(grant.authorization)
      : undefined,
    expiration: expiration
      ? new Date(expiration.toNumber()).toISOString()
      : undefined,
  };
}

function convertAminoGrant(grant: AminoGrant): Grant {
  const expiration = grant.expiration
    ? Date.parse(grant.expiration)
    : undefined;

  return {
    authorization: grant.authorization
      ? convertAminoAuthorization(grant.authorization)
      : undefined,
    expiration: expiration
      ? Timestamp.fromPartial({
          seconds: expiration / 1000,
          nanos: (expiration % 1000) * 1e6,
        })
      : undefined,
  };
}

export function createCosmosConverters(): AminoConverters {
  return {
    // Authz types
    "/cosmos.authz.v1beta1.MsgGrant": {
      aminoType: "",
      toAmino: (value: MsgGrant): AminoMsgGrant => {
        return {
          grant: value.grant ? convertGrant(value.grant) : undefined,
          granter: value.granter,
          grantee: value.grantee,
        };
      },
      fromAmino: (msg: AminoMsgGrant): MsgGrant => {
        return MsgGrant.fromPartial({
          grant: msg.grant ? convertAminoGrant(msg.grant) : undefined,
          granter: msg.granter,
          grantee: msg.grantee,
        });
      },
    },
  };
}

export default createCosmosConverters;
