import { AminoConverter, defaultRegistryTypes } from "@cosmjs/stargate";
import { GeneratedType } from "@cosmjs/proto-signing";
import { cosmosRegistryTypes, cosmosTypes } from "./cosmos";
import { profilesRegistryTypes, profilesTypes } from "./profiles";

export * from "./cosmos/messages";
export * from "./profiles/messages";

export const desmosTypes: Record<string, AminoConverter> = {
  ...cosmosTypes,
  ...profilesTypes,
};

export const desmosRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,

  ...cosmosRegistryTypes,
  ...profilesRegistryTypes,
];
