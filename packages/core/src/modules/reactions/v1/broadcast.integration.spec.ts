import Long from "long";
import { sleep } from "@cosmjs/utils";
import { getAminoSignerAndClient } from "../../../testutils";
import {
  MsgAddReactionEncodeObject,
  MsgAddRegisteredReactionEncodeObject,
} from "./encodeobjects";
import { registeredReactionValueToAny } from "./aminoconverter";
import {
  MsgAddReactionTypeUrl,
  MsgAddRegisteredReactionTypeUrl,
} from "./consts";

describe("Broadcast desmos.reactions.v1 messages", () => {
  jest.setTimeout(60 * 1000);

  it("MsgAddReaction", async () => {
    const [signer, client] = await getAminoSignerAndClient();
    const { address } = (await signer.getAccounts())[0];

    // Create a registered reaction for the subspace
    const msgRegisterReaction: MsgAddRegisteredReactionEncodeObject = {
      typeUrl: MsgAddRegisteredReactionTypeUrl,
      value: {
        user: address,
        subspaceId: Long.fromNumber(1),
        displayValue: "like",
        shorthandCode: "like",
      },
    };
    await client.signAndBroadcast(address, [msgRegisterReaction], "auto");
    await sleep(5000);

    // React to a post
    const msgAddReaction: MsgAddReactionEncodeObject = {
      typeUrl: MsgAddReactionTypeUrl,
      value: {
        subspaceId: Long.fromNumber(1),
        postId: Long.fromNumber(1),
        user: address,
        value: registeredReactionValueToAny({
          registeredReactionId: 1,
        }),
      },
    };
    await client.signAndBroadcast(address, [msgAddReaction], "auto");
    await sleep(5000);
  });
});
