import { AminoConverters, AminoTypes } from "@cosmjs/stargate";
import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { Grant } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import { AminoGrant, AminoMsgGrant, AminoMsgRevoke } from "./messages";
import { createAuthzAuthorizationConverters } from "./authorizations";
import { createBankAuthorizationConverters } from "../bank/authorizations";
import { createSubspacesAuthorizationConverters } from "../../subspaces/authorizations";
import createStakeAuthorizationConverters from "../staking/authorizations";

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

export function createCosmosConverters(): AminoConverters {
  return {
    // Authz types
    "/cosmos.authz.v1beta1.MsgGrant": {
      aminoType: "cosmos-sdk/MsgGrant",
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
    "/cosmos.authz.v1beta1.MsgRevoke": {
      aminoType: "cosmos-sdk/MsgRevoke",
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
}

export default createCosmosConverters;
