import { AminoConverters } from "@cosmjs/stargate";
import { SendAuthorization } from "cosmjs-types/cosmos/bank/v1beta1/authz";
import { AminoSendAuthorization } from "./aminomessages";
import { SendAuthorizationAminoType, SendAuthorizationTypeUrl } from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const AminoConverter: AminoConverters = {
  [SendAuthorizationTypeUrl]: {
    aminoType: SendAuthorizationAminoType,
    toAmino: (
      authorization: SendAuthorization
    ): AminoSendAuthorization["value"] => ({
      spend_limit: authorization.spendLimit,
    }),
    fromAmino: (
      authorization: AminoSendAuthorization["value"]
    ): SendAuthorization => ({
      spendLimit: authorization.spend_limit,
    }),
  },
};
