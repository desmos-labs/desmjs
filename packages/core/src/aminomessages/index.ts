import {profilesTypes} from "src/aminomessages/profiles/converter";
import {AminoConverter} from "@cosmjs/stargate";

export * from "src/aminomessages/profiles/messages";

export const desmosTypes: Record<string, AminoConverter> = {
  ...profilesTypes,
}