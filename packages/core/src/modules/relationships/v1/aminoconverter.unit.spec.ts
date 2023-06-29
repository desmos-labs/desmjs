import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgUnblockUser,
} from "@desmoslabs/desmjs-types/desmos/relationships/v1/msgs";
import Long from "long";
import {
  MsgBlockUserTypeUrl,
  MsgCreateRelationshipTypeUrl,
  MsgDeleteRelationshipTypeUrl,
  MsgUnblockUserTypeUrl,
} from "./consts";
import { ConverterTestData, runConverterTest } from "../../../utils/testutils";
import { AminoConverter } from "./aminoconverter";

describe("Relationships converter", () => {
  function executeTests(data: ConverterTestData<any>[]) {
    data.forEach((test) => {
      it(test.name, runConverterTest(AminoConverter, test));
    });
  }

  describe("MsgCreateRelationship", () => {
    const testData: ConverterTestData<MsgCreateRelationship>[] = [
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
    const testData: ConverterTestData<MsgDeleteRelationship>[] = [
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
    const testData: ConverterTestData<MsgBlockUser>[] = [
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

  describe("MsgUnblockUser", () => {
    const testData: ConverterTestData<MsgUnblockUser>[] = [
      {
        name: "empty message",
        typeUrl: MsgUnblockUserTypeUrl,
        msg: MsgUnblockUser.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgUnblockUserTypeUrl,
        msg: {
          blocker: "cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",
          blocked: "cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47",
          subspaceId: Long.fromNumber(1),
        },
        expectedJsonSerialized:
          '{"blocked":"cosmos1y54exmx84cqtasvjnskf9f63djuuj68p7hqf47","blocker":"cosmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });
});
