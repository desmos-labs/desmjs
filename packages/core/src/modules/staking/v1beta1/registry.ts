import { GeneratedType } from "@cosmjs/proto-signing";
import { StakeAuthorization } from "cosmjs-types/cosmos/staking/v1beta1/authz";
import { StakeAuthorizationTypeUrl } from "./consts";

export const registry: ReadonlyArray<[string, GeneratedType]> = [
  // x/staking
  [StakeAuthorizationTypeUrl, StakeAuthorization],
];

export default registry;
