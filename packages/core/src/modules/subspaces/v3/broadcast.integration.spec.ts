import { MsgSubmitProposal } from "@desmoslabs/desmjs-types/cosmos/gov/v1/tx";
import { coin } from "@cosmjs/amino";
import { MsgUpdateSubspaceFeeTokens } from "@desmoslabs/desmjs-types/desmos/subspaces/v3/msgs";
import {
  broadcastTest,
  createSubspaceToken,
  createTestSubspace,
} from "../../../testutils";
import {
  MsgSubmitProposalEncodeObject,
  MsgSubmitProposalTypeUrl,
} from "../../gov/v1";

describe("Broadcast desmos.subspaces.v3 messages", () => {
  jest.setTimeout(60 * 1000);

  describe("Broadcast MsgUpdateSubspaceFeeTokens", () => {
    broadcastTest(
      "MsgUpdateSubspaceFeeTokensTypeUrl",
      async (signer, client, [address]) => {
        const subspaceId = await createTestSubspace(client, address);

        const newFeeToken = await createSubspaceToken(
          client,
          subspaceId,
          address,
        );

        const govMessage: MsgSubmitProposalEncodeObject = {
          typeUrl: MsgSubmitProposalTypeUrl,
          value: MsgSubmitProposal.fromPartial({
            initialDeposit: [coin(100000, "stake")],
            messages: [
              MsgUpdateSubspaceFeeTokens.toProtoMsg(
                MsgUpdateSubspaceFeeTokens.fromPartial({
                  subspaceId,
                  additionalFeeTokens: [coin(1000, newFeeToken)],
                  authority: "desmos10d07y265gmmuvt4z0w9aw880jnsr700jw674pt",
                }),
              ),
            ],
            proposer: address,
            summary: "Test proposal",
            title: "Test proposal",
            metadata: "Proposal metadata",
          }),
        };

        // Test broadcast the gov message.
        await client.signAndBroadcast(address, [govMessage], "auto");
      },
    );
  });
});
