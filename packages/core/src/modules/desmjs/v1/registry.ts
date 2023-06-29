import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAuthenticate } from "@desmoslabs/desmjs-types/desmjs/msgs";
import { MsgAuthenticateTypeUrl } from "./consts";

export const registry: ReadonlyArray<[string, GeneratedType]> = [
  [MsgAuthenticateTypeUrl, MsgAuthenticate],
];

export default registry;
