import { AminoConverters } from "@cosmjs/stargate";
import { MsgAuthenticate } from "@desmoslabs/desmjs-types/desmjs/msgs";
import { AminoMsgAuthenticate } from "./messages";
import MsgAuthenticateTypeUrl, {
  MsgAuthenticateAminoType,
} from "../../const/desmjs";

export function createDesmJSConverters(): AminoConverters {
  return {
    [MsgAuthenticateTypeUrl]: {
      aminoType: MsgAuthenticateAminoType,
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
