import { Coin, AminoMsg } from "@cosmjs/amino";
import {
  AuthorizationType,
  StakeAuthorization_Validators,
} from "cosmjs-types/cosmos/staking/v1beta1/authz";

export interface AminoStakeAuthorization extends AminoMsg {
  readonly type: "cosmos-sdk/StakeAuthorization";
  readonly value: {
    max_tokens?: Coin;
    allow_list?: StakeAuthorization_Validators | undefined;
    deny_list?: StakeAuthorization_Validators | undefined;
    authorization_type: AuthorizationType;
  };
}
