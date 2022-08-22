import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { GenericAuthorization } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { SendAuthorization } from "cosmjs-types/cosmos/bank/v1beta1/authz";
import { StakeAuthorization } from "cosmjs-types/cosmos/staking/v1beta1/authz";

export const cosmosRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  // x/authz
  ["/cosmos.authz.v1beta1.GenericAuthorization", GenericAuthorization],
  ["/cosmos.authz.v1beta1.MsgGrant", MsgGrant],
  ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke],

  // x/bank
  ["/cosmos.bank.v1beta1.SendAuthorization", SendAuthorization],

  // x/staking
  ["/cosmos.staking.v1beta1.StakeAuthorization", StakeAuthorization],
];

export default cosmosRegistryTypes;
