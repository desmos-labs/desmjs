import { MsgCreateReport } from "@desmoslabs/desmjs-types/desmos/reports/v1/msgs";
import Long from "long";
import { ConverterTestData, runConverterTest } from "../testutils";
import {
  postTargetToAny,
  createReportsConverters,
  userTargetToAny,
} from "./converter";
import { MsgCreateReportTypeUrl } from "../../const";

describe("Reports converter", () => {
  const converters = createReportsConverters();

  function executeTests(data: ConverterTestData<any>[]) {
    data.forEach((test) => {
      it(test.name, runConverterTest(converters, test));
    });
  }

  describe("MsgCreateReport", () => {
    const testData: ConverterTestData<MsgCreateReport>[] = [
      {
        name: "empty post target message",
        typeUrl: MsgCreateReportTypeUrl,
        msg: MsgCreateReport.fromPartial({
          target: postTargetToAny({
            postId: Long.fromNumber(0),
          }),
        }),
        expectedJsonSerialized:
          '{"target":{"type":"desmos/PostTarget","value":{}}}',
      },
      {
        name: "empty user target message",
        typeUrl: MsgCreateReportTypeUrl,
        msg: MsgCreateReport.fromPartial({
          target: userTargetToAny({
            user: "",
          }),
        }),
        expectedJsonSerialized:
          '{"target":{"type":"desmos/UserTarget","value":{}}}',
      },
      {
        name: "post target",
        typeUrl: MsgCreateReportTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          reasonsIds: [1],
          message: "This post is spam",
          target: postTargetToAny({
            postId: Long.fromNumber(1),
          }),
          reporter: "cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47",
        },
        expectedJsonSerialized:
          '{"message":"This post is spam","reasons_ids":[1],"reporter":"cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47","subspace_id":"1","target":{"type":"desmos/PostTarget","value":{"post_id":"1"}}}',
      },
    ];
    executeTests(testData);
  });
});
