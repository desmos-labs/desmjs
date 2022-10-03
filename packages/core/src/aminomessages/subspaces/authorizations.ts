import { AminoConverters } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
import { GenericSubspaceAuthorization } from "@desmoslabs/desmjs-types/desmos/subspaces/v3/authz/authz";
import Long from "long";
import { AminoGenericSubspaceAuthorization } from "./messages";

export function genericSubspaceAuthorizationToAny(
  authorization: GenericSubspaceAuthorization
): Any {
  return Any.fromPartial({
    typeUrl: "/desmos.subspaces.v3.authz.GenericSubspaceAuthorization",
    value: GenericSubspaceAuthorization.encode(authorization).finish(),
  });
}

export function createSubspacesAuthorizationConverters(): AminoConverters {
  return {
    "/desmos.subspaces.v3.authz.GenericSubspaceAuthorization": {
      aminoType: "desmos/GenericSubspaceAuthorization",
      toAmino: (
        authorization: Any["value"]
      ): AminoGenericSubspaceAuthorization["value"] => {
        const genericAuthorization =
          GenericSubspaceAuthorization.decode(authorization);
        return {
          subspaces_ids: genericAuthorization.subspacesIds.map((id) =>
            id.toString()
          ),
          msg: genericAuthorization.msg,
        };
      },
      fromAmino: (
        authorization: AminoGenericSubspaceAuthorization["value"]
      ): Any["value"] => {
        const any = genericSubspaceAuthorizationToAny(
          GenericSubspaceAuthorization.fromPartial({
            subspacesIds: authorization.subspaces_ids.map((id) =>
              Long.fromString(id)
            ),
            msg: authorization.msg,
          })
        );
        return any.value;
      },
    },
  };
}

export default createSubspacesAuthorizationConverters;
