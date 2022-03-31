import { AminoConverter, defaultRegistryTypes } from "@cosmjs/stargate";
import { GeneratedType } from "@cosmjs/proto-signing";
import {
  relationshipsRegistryTypes,
  relationshipsTypes,
} from "./relationships";
import { cosmosRegistryTypes, cosmosTypes } from "./cosmos";
import { profilesRegistryTypes, profilesTypes } from "./profiles";
import { desmjsRegistryTypes, desmjsTypes } from "./desmjs";
import { subspacesRegistryTypes } from "./subspaces";
import subspacesTypes from "./subspaces/converter";

export * from "./cosmos/messages";
export * from "./profiles/messages";
export * from "./relationships/messages";
export * from "./subspaces/messages";

export const desmosTypes: Record<
  string,
  AminoConverter | "not_supported_by_chain"
> = {
  ...cosmosTypes,
  ...desmjsTypes,
  ...profilesTypes,
  ...relationshipsTypes,
  ...subspacesTypes,
};

export const desmosRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,

  ...cosmosRegistryTypes,
  ...desmjsRegistryTypes,
  ...profilesRegistryTypes,
  ...relationshipsRegistryTypes,
  ...subspacesRegistryTypes,
];
