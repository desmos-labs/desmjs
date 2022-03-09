import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgAuthenticate } from "@desmoslabs/desmjs-types/desmjs/msgs";

export interface MsgAuthenticateEncodeObject extends EncodeObject {
  typeUrl: "/desmjs.v1.MsgAuthenticate";
  readonly value: Partial<MsgAuthenticate>;
}
