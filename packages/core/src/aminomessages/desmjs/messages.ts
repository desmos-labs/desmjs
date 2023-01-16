import { AminoMsg } from "@cosmjs/amino";
import { MsgAuthenticateAminoType } from "../../const";

export interface AminoMsgAuthenticate extends AminoMsg {
  readonly type: MsgAuthenticateAminoType;
  readonly value: {
    user: string;
    nonce: Uint8Array;
  };
}
