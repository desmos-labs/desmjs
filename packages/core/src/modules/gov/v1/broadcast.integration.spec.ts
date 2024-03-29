import {
  MsgDeposit,
  MsgExecLegacyContent,
  MsgSubmitProposal,
  MsgVote,
  MsgVoteWeighted,
} from "@desmoslabs/desmjs-types/cosmos/gov/v1/tx";
import { coin } from "@cosmjs/amino";
import { TextProposal } from "@desmoslabs/desmjs-types/cosmos/gov/v1beta1/gov";
import { VoteOption } from "@desmoslabs/desmjs-types/cosmos/gov/v1/gov";
import Long from "long";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import {
  MsgDepositTypeUrl,
  MsgExecLegacyContentTypeUrl,
  MsgSubmitProposalTypeUrl,
  MsgVoteTypeUrl,
  MsgVoteWeightedTypeUrl,
} from "./consts";
import { testUser1 } from "../../../testutils";
import { MsgSendTypeUrl } from "../../bank/v1beta1";
import { TextProposalTypeUrl } from "../v1beta1";
import { BroadcastTest, runBroadcastTest } from "../../../utils/testutils";

describe("Broadcast /cosmos.gov.v1 messages", () => {
  jest.setTimeout(60 * 1000);

  const testCases: BroadcastTest[] = [
    {
      typeUrl: MsgVoteTypeUrl,
      message: MsgVote.fromPartial({
        proposalId: Long.fromNumber(1),
        option: VoteOption.VOTE_OPTION_YES,
        voter: testUser1.address0,
      }),
      signer: testUser1.address0,
    },
    {
      name: `${MsgSubmitProposalTypeUrl} without messages`,
      typeUrl: MsgSubmitProposalTypeUrl,
      message: MsgSubmitProposal.fromPartial({
        title: "proposal title",
        summary: "proposal summary",
        metadata: "test metadata",
        messages: [],
        initialDeposit: [coin(1, "stake")],
        proposer: testUser1.address0,
      }),
      signer: testUser1.address0,
    },
    {
      name: `${MsgSubmitProposalTypeUrl} with messages`,
      typeUrl: MsgSubmitProposalTypeUrl,
      message: MsgSubmitProposal.fromPartial({
        title: "proposal title",
        summary: "proposal summary",
        messages: [
          {
            typeUrl: MsgSendTypeUrl,
            value: MsgSend.encode(
              MsgSend.fromPartial({
                amount: [coin(1, "stake")],
                toAddress: testUser1.address1,
                fromAddress: "desmos10d07y265gmmuvt4z0w9aw880jnsr700jw674pt",
              }),
            ).finish(),
          },
        ],
        initialDeposit: [coin(1, "stake")],
        proposer: testUser1.address0,
      }),
      signer: testUser1.address0,
    },
    {
      name: `${MsgSubmitProposalTypeUrl} with MsgExecLegacyContent`,
      typeUrl: MsgSubmitProposalTypeUrl,
      message: MsgSubmitProposal.fromPartial({
        title: "test",
        summary: "summary",
        messages: [
          {
            typeUrl: MsgExecLegacyContentTypeUrl,
            value: MsgExecLegacyContent.encode(
              MsgExecLegacyContent.fromPartial({
                content: {
                  typeUrl: TextProposalTypeUrl,
                  value: TextProposal.encode(
                    TextProposal.fromPartial({
                      title: "test",
                      description: "description",
                    }),
                  ).finish(),
                },
                authority: "desmos10d07y265gmmuvt4z0w9aw880jnsr700jw674pt",
              }),
            ).finish(),
          },
        ],
        proposer: testUser1.address0,
        initialDeposit: [coin(10000, "stake")],
      }),
      signer: testUser1.address0,
    },
    {
      typeUrl: MsgDepositTypeUrl,
      message: MsgDeposit.fromPartial({
        proposalId: Long.fromNumber(1),
        amount: [coin(1, "stake")],
        depositor: testUser1.address0,
      }),
      signer: testUser1.address0,
    },
    {
      typeUrl: MsgVoteWeightedTypeUrl,
      message: MsgVoteWeighted.fromPartial({
        proposalId: Long.fromNumber(1),
        options: [
          {
            option: VoteOption.VOTE_OPTION_YES,
            weight: "1",
          },
        ],
        voter: testUser1.address0,
      }),
      signer: testUser1.address0,
    },
  ];

  testCases.forEach(runBroadcastTest);
});
