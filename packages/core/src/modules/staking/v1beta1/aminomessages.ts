import { AminoMsg, Coin } from "@cosmjs/amino";
import {
  AuthorizationType,
  StakeAuthorization_Validators,
} from "cosmjs-types/cosmos/staking/v1beta1/authz";
import { StakeAuthorizationAminoType } from "./consts";

export interface AminoStakeAuthorization extends AminoMsg {
  readonly type: typeof StakeAuthorizationAminoType;
  readonly value: {
    max_tokens?: Coin;
    allow_list?: StakeAuthorization_Validators | undefined;
    deny_list?: StakeAuthorization_Validators | undefined;
    authorization_type: AuthorizationType;
  };
}
