import { AminoConverters, AminoTypes } from "@cosmjs/stargate";
import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { Grant } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import { AminoConverter } from "@cosmjs/stargate/build/aminotypes";
import { AminoGrant, AminoMsgGrant, AminoMsgRevoke } from "./messages";
import { createAuthzAuthorizationConverters } from "./authorizations";
import { createBankAuthorizationConverters } from "../bank";
import { createSubspacesAuthorizationConverters } from "../../subspaces";
import { createStakeAuthorizationConverters } from "../staking";
import {
  MsgGrantAminoTpe,
  MsgGrantTypeUrl,
  MsgRevokeAminoType,
  MsgRevokeTypeUrl,
} from "../../../const";

const authorizationTypes = new AminoTypes({
  ...createAuthzAuthorizationConverters(),
  ...createBankAuthorizationConverters(),
  ...createStakeAuthorizationConverters(),

  ...createSubspacesAuthorizationConverters(),
});

/**
 * Converts the given grant to an AminoGrant instance.
 */
function convertGrant(grant: Grant): AminoGrant {
  const expiration = grant.expiration?.seconds;

  return {
    authorization: grant.authorization
      ? authorizationTypes.toAmino(grant.authorization)
      : undefined,
    expiration: expiration
      ? new Date(expiration.toNumber() * 1000)
          .toISOString()
          .replace(/\.000Z$/, "Z")
      : undefined,
  };
}

function convertAminoGrant(grant: AminoGrant): Grant {
  const expiration = grant.expiration
    ? Date.parse(grant.expiration)
    : undefined;

  return {
    authorization: grant.authorization
      ? authorizationTypes.fromAmino(grant.authorization)
      : undefined,
    expiration: expiration
      ? Timestamp.fromPartial({
          seconds: expiration / 1000,
          nanos: (expiration % 1000) * 1e6,
        })
      : undefined,
  };
}

export function createAuthzConverters(): AminoConverters {
  return {
    // Authz types
    [MsgGrantTypeUrl]: {
      aminoType: MsgGrantAminoTpe,
      toAmino: (value: MsgGrant): AminoMsgGrant["value"] => ({
        grant: value.grant ? convertGrant(value.grant) : undefined,
        granter: value.granter,
        grantee: value.grantee,
      }),
      fromAmino: (msg: AminoMsgGrant["value"]): MsgGrant =>
        MsgGrant.fromPartial({
          grant: msg.grant ? convertAminoGrant(msg.grant) : undefined,
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
  } as Record<string, AminoConverter>;
}

export default createAuthzConverters;
