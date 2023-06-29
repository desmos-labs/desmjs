import { AminoConverters } from "@cosmjs/stargate";
import { MsgAuthenticate } from "@desmoslabs/desmjs-types/desmjs/msgs";
import { AminoMsgAuthenticate } from "./aminomessages";
import { MsgAuthenticateAminoType, MsgAuthenticateTypeUrl } from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const AminoConverter: AminoConverters = {
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
