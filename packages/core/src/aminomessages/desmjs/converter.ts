import { AminoConverters } from "@cosmjs/stargate";
import { MsgAuthenticate } from "@desmoslabs/desmjs-types/desmjs/msgs";
import { AminoMsgAuthenticate } from "./messages";

export function createDesmJSConverters(): AminoConverters {
  return {
    "/desmjs.v1.MsgAuthenticate": {
      aminoType: "desmjs/MsgAuthenticate",
      toAmino: (value: MsgAuthenticate): AminoMsgAuthenticate["value"] => ({
        user: value.user,
        nonce: value.nonce,
      }),
      fromAmino: (msg: AminoMsgAuthenticate["value"]): MsgAuthenticate => ({
        user: msg.user,
        nonce: msg.nonce,
      }),
    },
  };
}

export default createDesmJSConverters;
