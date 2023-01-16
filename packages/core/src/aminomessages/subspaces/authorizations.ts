import { AminoConverters } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
import { GenericSubspaceAuthorization } from "@desmoslabs/desmjs-types/desmos/subspaces/v3/authz/authz";
import Long from "long";
import { AminoGenericSubspaceAuthorization } from "./messages";
import {
  GenericSubspaceAuthorizationAminoType,
  GenericSubspaceAuthorizationTypeUrl,
} from "../../const";

export function genericSubspaceAuthorizationToAny(
  authorization: GenericSubspaceAuthorization
): Any {
  return Any.fromPartial({
    typeUrl: GenericSubspaceAuthorizationTypeUrl,
    value: GenericSubspaceAuthorization.encode(authorization).finish(),
  });
}

export function createSubspacesAuthorizationConverters(): AminoConverters {
  return {
    [GenericSubspaceAuthorizationTypeUrl]: {
      aminoType: GenericSubspaceAuthorizationAminoType,
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
