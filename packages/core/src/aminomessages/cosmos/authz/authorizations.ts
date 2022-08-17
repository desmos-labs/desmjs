/* eslint-disable @typescript-eslint/no-unused-vars */
import { GenericAuthorization } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { AminoConverters } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
import { AminoGenericAuthorization } from "./messages";

export function createAuthzAuthorizationConverters(): AminoConverters {
  return {
    "/cosmos.authz.v1beta1.GenericAuthorization": {
      aminoType: "cosmos-sdk/GenericAuthorization",
      toAmino: (
        authorization: Any["value"]
      ): AminoGenericAuthorization["value"] => ({}),
      fromAmino: (
        authorization: AminoGenericAuthorization["value"]
      ): Any["value"] =>
        GenericAuthorization.encode(
          GenericAuthorization.fromPartial({})
        ).finish(),
    },
  };
}

export default createAuthzAuthorizationConverters;
