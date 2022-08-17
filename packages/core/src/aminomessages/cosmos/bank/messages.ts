import { AminoMsg, Coin } from "@cosmjs/amino";

export interface AminoSendAuthorization extends AminoMsg {
  readonly type: "cosmos/SendAuthorization";
  readonly value: {
    readonly spend_limit: Coin[];
  };
}
