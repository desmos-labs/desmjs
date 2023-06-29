import { AminoMsg, Coin } from "@cosmjs/amino";
import { SendAuthorizationAminoType } from "./consts";

export interface AminoSendAuthorization extends AminoMsg {
  readonly type: typeof SendAuthorizationAminoType;
  readonly value: {
    readonly spend_limit: Coin[];
  };
}
