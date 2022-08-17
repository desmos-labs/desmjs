import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import {
  AuthorizationType,
  StakeAuthorization_Validators,
} from "cosmjs-types/cosmos/staking/v1beta1/authz";
import { AminoMsg } from "@cosmjs/amino";

export interface AminoStakeAuthorization extends AminoMsg {
  readonly type: "cosmos/StakeAuthorization";
  readonly value: {
    max_tokens?: Coin;
    allow_list?: StakeAuthorization_Validators | undefined;
    deny_list?: StakeAuthorization_Validators | undefined;
    authorization_type: AuthorizationType;
  };
}
