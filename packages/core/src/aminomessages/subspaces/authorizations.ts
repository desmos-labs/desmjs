import { AminoConverters } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
import { GenericSubspaceAuthorization } from "@desmoslabs/desmjs-types/desmos/subspaces/v3/authz/authz";
import { AminoGenericSubspaceAuthorization } from "./messages";

export function createSubspacesAuthorizationConverters(): AminoConverters {
  return {
    "/desmos.subspaces.v3.GenericAuthorization": {
      aminoType: "cosmos-sdk/GenericAuthorization",
      toAmino: (
        authorization: Any["value"]
      ): AminoGenericSubspaceAuthorization["value"] => {
        const genericAuthorization =
          GenericSubspaceAuthorization.decode(authorization);
        return {
          subspaces_ids: genericAuthorization.subspacesIds,
          msg: genericAuthorization.msg,
        };
      },
      fromAmino: (
        authorization: AminoGenericSubspaceAuthorization["value"]
      ): Any["value"] =>
        GenericSubspaceAuthorization.encode(
          GenericSubspaceAuthorization.fromPartial({
            subspacesIds: authorization.subspaces_ids,
            msg: authorization.msg,
          })
        ).finish(),
    },
  };
}

export default createSubspacesAuthorizationConverters;
