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
} from "../../const";

export const relationshipsRegistryTypes: ReadonlyArray<
  [string, GeneratedType]
> = [
  [MsgCreateRelationshipTypeUrl, MsgCreateRelationship],
  [MsgDeleteRelationshipTypeUrl, MsgDeleteRelationship],
  [MsgBlockUserTypeUrl, MsgBlockUser],
  [MsgUnblockUserTypeUrl, MsgUnblockUser],
];

export default relationshipsRegistryTypes;
