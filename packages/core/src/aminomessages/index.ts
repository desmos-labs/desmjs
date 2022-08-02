import {
  AminoConverters,
  createBankAminoConverters,
  createDistributionAminoConverters,
  createFreegrantAminoConverters,
  createGovAminoConverters,
  createIbcAminoConverters,
  createStakingAminoConverters,
  defaultRegistryTypes,
} from "@cosmjs/stargate";
import { GeneratedType } from "@cosmjs/proto-signing";
import { createVestingAminoConverters } from "@cosmjs/stargate/build/modules";
import { createWasmAminoConverters } from "@cosmjs/cosmwasm-stargate";
import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
import { cosmosRegistryTypes, createCosmosConverters } from "./cosmos";
import { createProfilesConverters, profilesRegistryTypes } from "./profiles";
import { createDesmJSConverters, desmjsRegistryTypes } from "./desmjs";
import {
  createRelationshipsConverters,
  relationshipsRegistryTypes,
} from "./relationships";
import { createSubspacesConverters, subspacesRegistryTypes } from "./subspaces";
import { createPostsConverters, postsRegistryTypes } from "./posts";
import { createReactionsConverters, reactionsRegistryTypes } from "./reactions";
import { createReportsConverters, reportsRegistryTypes } from "./reports";

export * from "./cosmos/messages";
export * from "./desmjs/messages";
export * from "./posts/messages";
export * from "./profiles/messages";
export * from "./relationships/messages";
export * from "./reports/messages";
export * from "./subspaces/messages";

export function createDesmosTypes(prefix: string): AminoConverters {
  return {
    // TODO: Use this once they are implemented properly
    // ...createAuthzAminoConverters(),

    ...createBankAminoConverters(),
    ...createDistributionAminoConverters(),
    ...createGovAminoConverters(),
    ...createStakingAminoConverters(prefix),
    ...createIbcAminoConverters(),
    ...createFreegrantAminoConverters(),
    ...createVestingAminoConverters(),

    ...createCosmosConverters(),
    ...createDesmJSConverters(),
    ...createPostsConverters(),
    ...createProfilesConverters(),
    ...createReactionsConverters(),
    ...createRelationshipsConverters(),
    ...createReportsConverters(),
    ...createSubspacesConverters(),
    ...createWasmAminoConverters(),
  };
}

export const desmosRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,

  ...cosmosRegistryTypes,
  ...desmjsRegistryTypes,
  ...postsRegistryTypes,
  ...profilesRegistryTypes,
  ...reactionsRegistryTypes,
  ...relationshipsRegistryTypes,
  ...reportsRegistryTypes,
  ...subspacesRegistryTypes,
  ...wasmTypes,
];
