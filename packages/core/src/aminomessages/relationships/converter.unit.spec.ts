import { sortedJsonStringify } from "@cosmjs/amino/build/signdoc";
import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
} from "@desmoslabs/desmjs-types/desmos/relationships/v1/msgs";
import Long from "long";
import createPostsConverters from "../posts/converter";
import createRelationshipsConverters from "./converter";
import {
  MsgBlockUserTypeUrl,
  MsgCreateRelationshipTypeUrl,
  MsgDeleteRelationshipTypeUrl,
} from "../../const";

interface TestData<T> {
  readonly name: string;
  readonly typeUrl: string;
  readonly msg: T;
  readonly expectedJsonSerialized: string;
}

describe("Relationships converter", () => {
  const converters = createRelationshipsConverters();

  function executeTests(data: TestData<any>[]) {
    data.forEach((test) => {
      it(test.name, () => {
        const converter = converters[test.typeUrl];
        if (!converter || converter === "not_supported_by_chain") {
          fail(`Cannot find converter for msg with type url ${test.typeUrl}`);
        }

        // Check toAmino conversion
        const aminoConverted = converter.toAmino(test.msg);
        expect(sortedJsonStringify(aminoConverted)).toBe(
          test.expectedJsonSerialized
        );

        // Check fromAmino conversion
        // const directConverted = converter.fromAmino(aminoConverted);
        // expect(directConverted).toStrictEqual(test.msg);
      });
    });
  }

  describe("MsgCreateRelationship", () => {
    const testData: TestData<MsgCreateRelationship>[] = [
      {
        name: "empty message",
        typeUrl: MsgCreateRelationshipTypeUrl,
        msg: MsgCreateRelationship.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgCreateRelationshipTypeUrl,
        msg: {
          signer: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
          counterparty: "cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47",
          subspaceId: Long.fromNumber(1),
        },
        expectedJsonSerialized:
          '{"counterparty":"cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47","signer":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgDeleteRelationship", () => {
    const testData: TestData<MsgDeleteRelationship>[] = [
      {
        name: "empty message",
        typeUrl: MsgDeleteRelationshipTypeUrl,
        msg: MsgDeleteRelationship.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgDeleteRelationshipTypeUrl,
        msg: {
          signer: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
          counterparty: "cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47",
          subspaceId: Long.fromNumber(1),
        },
        expectedJsonSerialized:
          '{"counterparty":"cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47","signer":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgBlockUser", () => {
    const testData: TestData<MsgBlockUser>[] = [
      {
        name: "empty message",
        typeUrl: MsgBlockUserTypeUrl,
        msg: MsgBlockUser.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgBlockUserTypeUrl,
        msg: {
          blocker: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
          blocked: "cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47",
          reason: "reason",
          subspaceId: Long.fromNumber(1),
        },
        expectedJsonSerialized:
          '{"blocked":"cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47","blocker":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns","reason":"reason","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });
});
