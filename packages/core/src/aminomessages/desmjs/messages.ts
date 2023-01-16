import { AminoMsg } from "@cosmjs/amino";
import { MsgAuthenticateAminoType } from "../../const";

export interface AminoMsgAuthenticate extends AminoMsg {
  readonly type: typeof MsgAuthenticateAminoType;
  readonly value: {
    user: string;
    nonce: Uint8Array;
  };
}
