import {
  MsgCreateSection,
  MsgCreateSubspace,
  MsgDeleteSubspace,
  MsgEditSubspace,
} from "@desmoslabs/desmjs-types/desmos/subspaces/v3/msgs";
import Long from "long";
import { ConverterTestData, runConverterTest } from "../testutils";
import createSubspacesConverters from "./converter";
import {
  MsgCreateSectionTypeUrl,
  MsgCreateSubspaceTypeUrl,
  MsgDeleteSubspaceTypeUrl,
  MsgEditSubspaceTypeUrl,
} from "../../const";

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

  describe("MsgEditSubspace", () => {
    const testData: ConverterTestData<MsgEditSubspace>[] = [
      {
        name: "empty message",
        typeUrl: MsgEditSubspaceTypeUrl,
        msg: MsgEditSubspace.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgEditSubspaceTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          name: "This is a new name",
          description: "This is a new description",
          treasury: "cosmos1dkan28w7t65xe3fr44wxr4v86wnwuwh5tun2w2",
          owner: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"description":"This is a new description","name":"This is a new name","owner":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1","treasury":"cosmos1dkan28w7t65xe3fr44wxr4v86wnwuwh5tun2w2"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgDeleteSubspace", () => {
    const testData: ConverterTestData<MsgDeleteSubspace>[] = [
      {
        name: "empty message",
        typeUrl: MsgDeleteSubspaceTypeUrl,
        msg: MsgDeleteSubspace.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgDeleteSubspaceTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgCreateSection", () => {
    const testData: ConverterTestData<MsgCreateSection>[] = [
      {
        name: "empty message",
        typeUrl: MsgCreateSectionTypeUrl,
        msg: MsgCreateSection.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgCreateSectionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          name: "Test section",
          description: "This is a test section",
          parentId: 1,
          creator: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"creator":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","description":"This is a test section","name":"Test section","parent_id":1,"subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });
});
