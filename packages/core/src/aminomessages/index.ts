import { AminoConverter } from "@cosmjs/stargate";
import profilesTypes from "./profiles/converter";

export * from "./profiles/messages";

export const desmosTypes: Record<string, AminoConverter> = {
  ...profilesTypes,
};
