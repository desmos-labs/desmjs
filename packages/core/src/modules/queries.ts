import {
  AuthExtension,
  BankExtension,
  GovExtension,
  IbcExtension,
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  setupGovExtension,
  setupIbcExtension,
  setupStakingExtension,
  setupTxExtension,
  StakingExtension,
  TxExtension,
} from "@cosmjs/stargate";
import { setupWasmExtension, WasmExtension } from "@cosmjs/cosmwasm-stargate";
import { TendermintClient } from "@cosmjs/tendermint-rpc";
import {
  AuthzV1Beta1Extension,
  setupAuthzV1Beta1Extension,
} from "./authz/v1beta1";
import {
  PostsExtension as PostsV3Extension,
  setupPostsExtension as setupPostsV3Extension,
} from "./posts/v3";
import { ProfilesV3Extension, setupProfilesV3Extension } from "./profiles/v3";
import { ReactionsExtension, setupReactionsExtension } from "./reactions/v1";
import {
  RelationshipsV1Extension,
  setupRelationshipsV1Extension,
} from "./relationships/v1";
import { ReportsV1Extension, setupReportsV1Extension } from "./reports/v1";
import {
  setupSubspacesV3Extension,
  SubspacesV3Extension,
} from "./subspaces/v3";
import { setupSupplyV1Extension, SupplyV1Extension } from "./supply/v1";

export type DesmosQueryClient = QueryClient &
  AuthzV1Beta1Extension &
  AuthExtension &
  BankExtension &
  StakingExtension &
  TxExtension &
  GovExtension &
  ProfilesV3Extension &
  RelationshipsV1Extension &
  SubspacesV3Extension &
  PostsV3Extension &
  ReactionsExtension &
  ReportsV1Extension &
  SupplyV1Extension &
  WasmExtension &
  IbcExtension;

export function buildDesmosQueryClient(
  tendermintClient: TendermintClient | undefined,
): DesmosQueryClient | undefined {
  return tendermintClient
    ? QueryClient.withExtensions(
        tendermintClient,
        setupAuthzV1Beta1Extension,
        setupAuthExtension,
        setupBankExtension,
        setupStakingExtension,
        setupGovExtension,
        setupTxExtension,
        setupProfilesV3Extension,
        setupRelationshipsV1Extension,
        setupSubspacesV3Extension,
        setupPostsV3Extension,
        setupReactionsExtension,
        setupReportsV1Extension,
        setupSupplyV1Extension,
        setupWasmExtension,
        setupIbcExtension,
      )
    : undefined;
}
