import {
  AuthExtension,
  BankExtension,
  QueryClient,
  StakingExtension,
  TxExtension,
} from "@cosmjs/stargate";
import { AuthzExtension } from "./authz";
import { ProfilesExtension } from "./profiles";

export * from "./authz";
export * from "./profiles";

export type DesmosQueryClient = QueryClient &
  AuthzExtension &
  AuthExtension &
  BankExtension &
  StakingExtension &
  TxExtension &
  ProfilesExtension;
