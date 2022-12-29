/* eslint-disable @typescript-eslint/no-unused-vars */
import { GenericAuthorization } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { AminoConverters } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
import { AminoGenericAuthorization } from "./messages";
import { GenericAuthorizationTypeUrl } from "../../../const";

export function genericAuthorizationToAny(
  authorization: GenericAuthorization
): Any {
  return Any.fromPartial({
    typeUrl: GenericAuthorizationTypeUrl,
    value: GenericAuthorization.encode(authorization).finish(),
  });
}

export function createAuthzAuthorizationConverters(): AminoConverters {
  return {
    "/cosmos.authz.v1beta1.GenericAuthorization": {
      aminoType: "cosmos-sdk/GenericAuthorization",
      toAmino: (
        authorization: Any["value"]
      ): AminoGenericAuthorization["value"] => {
        const genericAuth = GenericAuthorization.decode(authorization);
        return {
          msg: genericAuth.msg,
        };
      },
      fromAmino: (
        authorization: AminoGenericAuthorization["value"]
      ): Any["value"] => {
        const any = genericAuthorizationToAny(
          GenericAuthorization.fromPartial({
            msg: authorization.msg,
          })
        );
        return any.value;
      },
    },
  };
}

export default createAuthzAuthorizationConverters;
