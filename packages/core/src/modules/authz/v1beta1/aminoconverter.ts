import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import {
  GenericAuthorization,
  Grant,
} from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import { GenericAuthorizationAminoMsg } from "@desmoslabs/desmjs-types/cosmos/authz/v1beta1/authz";
import { assertDefined } from "@cosmjs/utils";
import { AminoGrant, AminoMsgGrant, AminoMsgRevoke } from "./aminomessages";
import {
  GenericAuthorizationAminoType,
  GenericAuthorizationTypeUrl,
  MsgGrantAminoTpe,
  MsgGrantTypeUrl,
  MsgRevokeAminoType,
  MsgRevokeTypeUrl,
} from "./consts";
import { AminoConverters, AminoTypes } from "../../../aminotypes";

/**
 * Converts the given grant to an AminoGrant instance.
 */
function convertGrant(grant: Grant, aminoTypes?: AminoTypes): AminoGrant {
  const expiration = grant.expiration?.seconds;
  assertDefined(
    aminoTypes,
    "can't convert Grant to amino, aminoTypes must be defined",
  );

  return {
    authorization: grant.authorization
      ? aminoTypes.fromAny(grant.authorization)
      : undefined,
    expiration: expiration
      ? new Date(expiration.toNumber() * 1000)
          .toISOString()
          .replace(/\.000Z$/, "Z")
      : undefined,
  };
}

function convertAminoGrant(grant: AminoGrant, aminoTypes?: AminoTypes): Grant {
  assertDefined(
    aminoTypes,
    "can't convert Grant from amino, aminoTypes must be defined",
  );

  const expiration = grant.expiration
    ? Date.parse(grant.expiration)
    : undefined;

  return {
    authorization: grant.authorization
      ? aminoTypes.toAny(grant.authorization)
      : undefined,
    expiration: expiration
      ? Timestamp.fromPartial({
          seconds: expiration / 1000,
          nanos: (expiration % 1000) * 1e6,
        })
      : undefined,
  };
}

// eslint-disable-next-line import/prefer-default-export
export const AminoConverter: AminoConverters = {
  // Authorization types
  [GenericAuthorizationTypeUrl]: {
    aminoType: GenericAuthorizationAminoType,
    toAmino: (
      value: GenericAuthorization,
    ): GenericAuthorizationAminoMsg["value"] => ({
      msg: value.msg,
    }),
    fromAmino: (
      value: GenericAuthorizationAminoMsg["value"],
    ): GenericAuthorization => ({
      msg: value.msg,
    }),
  },

  // Authz types
  [MsgGrantTypeUrl]: {
    aminoType: MsgGrantAminoTpe,
    toAmino: (
      value: MsgGrant,
      aminoTypes?: AminoTypes,
    ): AminoMsgGrant["value"] => ({
      grant: value.grant ? convertGrant(value.grant, aminoTypes) : undefined,
      granter: value.granter,
      grantee: value.grantee,
    }),
    fromAmino: (
      msg: AminoMsgGrant["value"],
      aminoTypes?: AminoTypes,
    ): MsgGrant =>
      MsgGrant.fromPartial({
        grant: msg.grant ? convertAminoGrant(msg.grant, aminoTypes) : undefined,
        granter: msg.granter,
        grantee: msg.grantee,
      }),
  },
  [MsgRevokeTypeUrl]: {
    aminoType: MsgRevokeAminoType,
    toAmino: (value: MsgRevoke): AminoMsgRevoke["value"] => ({
      granter: value.granter,
      grantee: value.grantee,
    }),
    fromAmino: (msg: AminoMsgRevoke["value"]): MsgRevoke =>
      MsgRevoke.fromPartial({
        granter: msg.granter,
        grantee: msg.grantee,
      }),
  },
};
