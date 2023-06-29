import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgUnblockUser,
} from "@desmoslabs/desmjs-types/desmos/relationships/v1/msgs";
import {
  MsgBlockUserTypeUrl,
  MsgCreateRelationshipTypeUrl,
  MsgDeleteRelationshipTypeUrl,
  MsgUnblockUserTypeUrl,
} from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  [MsgCreateRelationshipTypeUrl, MsgCreateRelationship],
  [MsgDeleteRelationshipTypeUrl, MsgDeleteRelationship],
  [MsgBlockUserTypeUrl, MsgBlockUser],
  [MsgUnblockUserTypeUrl, MsgUnblockUser],
];
