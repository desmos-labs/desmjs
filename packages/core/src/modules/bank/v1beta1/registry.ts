import { GeneratedType } from "@cosmjs/proto-signing";
import { SendAuthorization } from "cosmjs-types/cosmos/bank/v1beta1/authz";
import { SendAuthorizationTypeUrl } from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  // x/bank
  [SendAuthorizationTypeUrl, SendAuthorization],
];
