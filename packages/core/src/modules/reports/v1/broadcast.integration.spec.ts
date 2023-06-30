import Long from "long";
import { sleep } from "@cosmjs/utils";
import { getAminoSignerAndClient } from "../../../testutils";
import {
  MsgAddReasonEncodeObject,
  MsgCreateReportEncodeObject,
} from "./encodeobjects";
import { postTargetToAny } from "./aminoconverter";
import { MsgAddReasonTypeUrl, MsgCreateReportTypeUrl } from "./consts";

describe("Broadcast desmos.reports.v1 messages", () => {
  jest.setTimeout(60 * 1000);

  it("MsgCreateReport", async () => {
    const [signer, client] = await getAminoSignerAndClient();
    const { address } = (await signer.getAccounts())[0];

    // Create a report reason
    const msgAddReasons: MsgAddReasonEncodeObject = {
      typeUrl: MsgAddReasonTypeUrl,
      value: {
        signer: address,
        subspaceId: Long.fromNumber(1),
        description: "Test reason",
        title: "Test reason",
      },
    };
    await client.signAndBroadcast(address, [msgAddReasons], "auto");
    await sleep(5000);

    // report a post
    const msgCreateReport: MsgCreateReportEncodeObject = {
      typeUrl: MsgCreateReportTypeUrl,
      value: {
        subspaceId: Long.fromNumber(1),
        message: "This is a test report",
        reasonsIds: [1],
        reporter: address,
        target: postTargetToAny({
          postId: Long.fromNumber(1),
        }),
      },
    };
    await client.signAndBroadcast(address, [msgCreateReport], "auto");
    await sleep(5000);
  });
});
