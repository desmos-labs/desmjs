import { AminoMsg } from "@cosmjs/amino";

export interface AminoMsgAuthenticate extends AminoMsg {
  readonly type: "desmjs/MsgAuthenticate";
  readonly value: {
    user: string;
  };
}
