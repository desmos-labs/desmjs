import { AminoMsg, Coin } from "@cosmjs/amino";

export interface AminoSendAuthorization extends AminoMsg {
  readonly type: "cosmos-sdk/SendAuthorization";
  readonly value: {
    readonly spend_limit: Coin[];
  };
}
