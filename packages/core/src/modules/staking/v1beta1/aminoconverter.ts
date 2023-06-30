import { AminoConverters } from "@cosmjs/stargate";
import { StakeAuthorization } from "cosmjs-types/cosmos/staking/v1beta1/authz";
import { AminoStakeAuthorization } from "./aminomessages";
import {
  StakeAuthorizationAminoType,
  StakeAuthorizationTypeUrl,
} from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const AminoConverter: AminoConverters = {
  // Authorizations
  [StakeAuthorizationTypeUrl]: {
    aminoType: StakeAuthorizationAminoType,
    toAmino: (
      stakeAuthorization: StakeAuthorization
    ): AminoStakeAuthorization["value"] => ({
      max_tokens: stakeAuthorization.maxTokens,
      authorization_type: stakeAuthorization.authorizationType,
      allow_list: stakeAuthorization.allowList,
      deny_list: stakeAuthorization.denyList,
    }),
    fromAmino: (
      authorization: AminoStakeAuthorization["value"]
    ): StakeAuthorization =>
      StakeAuthorization.fromPartial({
        maxTokens: authorization.max_tokens,
        authorizationType: authorization.authorization_type,
        allowList: authorization.allow_list,
        denyList: authorization.deny_list,
      }),
  },
};
