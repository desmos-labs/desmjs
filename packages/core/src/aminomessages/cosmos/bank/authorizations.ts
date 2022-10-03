import { AminoConverters } from "@cosmjs/stargate";
import { SendAuthorization } from "cosmjs-types/cosmos/bank/v1beta1/authz";
import { Any } from "cosmjs-types/google/protobuf/any";
import { AminoSendAuthorization } from "./messages";

export function sendAuthorizationToAny(authorization: SendAuthorization): Any {
  return Any.fromPartial({
    typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
    value: SendAuthorization.encode(authorization).finish(),
  });
}

export function createBankAuthorizationConverters(): AminoConverters {
  return {
    "/cosmos.bank.v1beta1.SendAuthorization": {
      aminoType: "cosmos-sdk/SendAuthorization",
      toAmino: (
        authorization: Any["value"]
      ): AminoSendAuthorization["value"] => {
        const sendAuthorization = SendAuthorization.decode(authorization);
        return {
          spend_limit: sendAuthorization.spendLimit,
        };
      },
      fromAmino: (
        authorization: AminoSendAuthorization["value"]
      ): Any["value"] => {
        const any = sendAuthorizationToAny(
          SendAuthorization.fromPartial({
            spendLimit: authorization.spend_limit,
          })
        );
        return any.value;
      },
    },
  };
}

export default createBankAuthorizationConverters;
