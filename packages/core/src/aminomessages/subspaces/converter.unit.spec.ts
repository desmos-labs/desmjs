import { MsgCreateSubspace } from "@desmoslabs/desmjs-types/desmos/subspaces/v3/msgs";
import { ConverterTestData, runConverterTest } from "../testutils";
import createSubspacesConverters from "./converter";
import { MsgCreateSubspaceTypeUrl } from "../../const";

describe("Subspaces converter", () => {
  const converters = createSubspacesConverters();

  function executeTests(data: ConverterTestData<any>[]) {
    data.forEach((test) => {
      it(test.name, runConverterTest(converters, test));
    });
  }

  describe("MsgCreateSubspace", () => {
    const testData: ConverterTestData<MsgCreateSubspace>[] = [
      {
        name: "empty message",
        typeUrl: MsgCreateSubspaceTypeUrl,
        msg: MsgCreateSubspace.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgCreateSubspaceTypeUrl,
        msg: {
          name: "Test subspace",
          description: "This is a test subspace",
          owner: "cosmos1lv3e0l66rr68k5l74mnrv4j9kyny6cz27pvnez",
          treasury: "cosmos1dkan28w7t65xe3fr44wxr4v86wnwuwh5tun2w2",
          creator: "cosmos1qzskhrcjnkdz2ln4yeafzsdwht8ch08j4wed69",
        },
        expectedJsonSerialized:
          '{"creator":"cosmos1qzskhrcjnkdz2ln4yeafzsdwht8ch08j4wed69","description":"This is a test subspace","name":"Test subspace","owner":"cosmos1lv3e0l66rr68k5l74mnrv4j9kyny6cz27pvnez","treasury":"cosmos1dkan28w7t65xe3fr44wxr4v86wnwuwh5tun2w2"}',
      },
    ];
    executeTests(testData);
  });
});
