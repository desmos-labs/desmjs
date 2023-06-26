import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgDeposit,
  MsgExecLegacyContent,
  MsgSubmitProposal,
  MsgVote,
  MsgVoteWeighted,
} from "@desmoslabs/desmjs-types/cosmos/gov/v1/tx";
import {
  MsgDepositTypeUrl,
  MsgExecLegacyContentTypeUrl,
  MsgSubmitProposalTypeUrl,
  MsgVoteTypeUrl,
  MsgVoteWeightedTypeUrl,
} from "./const";

export interface MsgSubmitProposalEncodeObject extends EncodeObject {
  typeUrl: typeof MsgSubmitProposalTypeUrl;
  value: MsgSubmitProposal;
}
export interface MsgExecLegacyContentEncodeObject extends EncodeObject {
  typeUrl: typeof MsgExecLegacyContentTypeUrl;
  value: MsgExecLegacyContent;
}
export interface MsgVoteEncodeObject extends EncodeObject {
  typeUrl: typeof MsgVoteTypeUrl;
  value: MsgVote;
}
export interface MsgVoteWeightedEncodeObject extends EncodeObject {
  typeUrl: typeof MsgVoteWeightedTypeUrl;
  value: MsgVoteWeighted;
}
export interface MsgDepositEncodeObject extends EncodeObject {
  typeUrl: typeof MsgDepositTypeUrl;
  value: MsgDeposit;
}
