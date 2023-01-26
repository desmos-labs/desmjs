import {
  MsgAddReaction,
  MsgAddRegisteredReaction,
  MsgEditRegisteredReaction,
  MsgRemoveReaction,
  MsgRemoveRegisteredReaction,
  MsgSetReactionsParams,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/msgs";
import Long from "long";
import createReactionsConverters, {
  freeTextReactionValueToAny,
  registeredReactionValueToAny,
} from "./converter";
import {
  MsgAddReactionTypeUrl,
  MsgAddRegisteredReactionTypeUrl,
  MsgEditRegisteredReactionTypeUrl,
  MsgRemoveReactionTypeUrl,
  MsgRemoveRegisteredReactionTypeUrl,
  MsgSetReactionsParamsTypeUrl,
} from "../../const";
import { ConverterTestData, runConverterTest } from "../testutils";

describe("Reactions converter", () => {
  const converters = createReactionsConverters();

  function executeTests(data: ConverterTestData<any>[]) {
    data.forEach((test) => {
      it(test.name, runConverterTest(converters, test));
    });
  }

  describe("MsgAddPostReaction", () => {
    const testData: ConverterTestData<MsgAddReaction>[] = [
      {
        name: "empty message",
        typeUrl: MsgAddReactionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(0),
          postId: Long.fromNumber(0),
          value: registeredReactionValueToAny({
            registeredReactionId: 1,
          }),
          user: "",
        },
        expectedJsonSerialized:
          '{"value":{"type":"desmos/RegisteredReactionValue","value":{"registered_reaction_id":1}}}',
      },
      {
        name: "free text reaction",
        typeUrl: MsgAddReactionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          postId: Long.fromNumber(1),
          value: freeTextReactionValueToAny({
            text: "😊",
          }),
          user: "cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc",
        },
        expectedJsonSerialized:
          '{"post_id":"1","subspace_id":"1","user":"cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc","value":{"type":"desmos/FreeTextValue","value":{"text":"😊"}}}',
      },
      {
        name: "registered reaction",
        typeUrl: MsgAddReactionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          postId: Long.fromNumber(1),
          value: registeredReactionValueToAny({
            registeredReactionId: 1,
          }),
          user: "cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc",
        },
        expectedJsonSerialized:
          '{"post_id":"1","subspace_id":"1","user":"cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc","value":{"type":"desmos/RegisteredReactionValue","value":{"registered_reaction_id":1}}}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgRemoveReaction", () => {
    const testData: ConverterTestData<MsgRemoveReaction>[] = [
      {
        name: "empty message",
        typeUrl: MsgRemoveReactionTypeUrl,
        msg: MsgRemoveReaction.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgRemoveReactionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          postId: Long.fromNumber(1),
          reactionId: 1,
          user: "cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc",
        },
        expectedJsonSerialized:
          '{"post_id":"1","reaction_id":1,"subspace_id":"1","user":"cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgAddRegisteredReaction", () => {
    const testData: ConverterTestData<MsgAddRegisteredReaction>[] = [
      {
        name: "empty message",
        typeUrl: MsgAddRegisteredReactionTypeUrl,
        msg: MsgAddRegisteredReaction.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgAddRegisteredReactionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          shorthandCode: ":hello:",
          displayValue: "https://example.com?images=hello.png",
          user: "cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc",
        },
        expectedJsonSerialized:
          '{"display_value":"https://example.com?images=hello.png","shorthand_code":":hello:","subspace_id":"1","user":"cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgEditRegisteredReaction", () => {
    const testData: ConverterTestData<MsgEditRegisteredReaction>[] = [
      {
        name: "empty message",
        typeUrl: MsgEditRegisteredReactionTypeUrl,
        msg: MsgEditRegisteredReaction.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgEditRegisteredReactionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          registeredReactionId: 1,
          shorthandCode: ":hello:",
          displayValue: "https://example.com?images=hello.png",
          user: "cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc",
        },
        expectedJsonSerialized:
          '{"display_value":"https://example.com?images=hello.png","registered_reaction_id":1,"shorthand_code":":hello:","subspace_id":"1","user":"cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgRemoveRegisteredReaction", () => {
    const testData: ConverterTestData<MsgRemoveRegisteredReaction>[] = [
      {
        name: "empty message",
        typeUrl: MsgRemoveRegisteredReactionTypeUrl,
        msg: MsgRemoveRegisteredReaction.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "compelte message",
        typeUrl: MsgRemoveRegisteredReactionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          registeredReactionId: 1,
          user: "cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc",
        },
        expectedJsonSerialized:
          '{"registered_reaction_id":1,"subspace_id":"1","user":"cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgSetReactionsParams", () => {
    const testData: ConverterTestData<MsgSetReactionsParams>[] = [
      {
        name: "empty message",
        typeUrl: MsgSetReactionsParamsTypeUrl,
        msg: MsgSetReactionsParams.fromPartial({}),
        expectedJsonSerialized: '{"free_text":{},"registered_reaction":{}}',
      },
      {
        name: "complete message",
        typeUrl: MsgSetReactionsParamsTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          registeredReaction: {
            enabled: true,
          },
          freeText: {
            enabled: true,
            maxLength: 100,
            regEx: "[a-zA-Z]",
          },
          user: "cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc",
        },
        expectedJsonSerialized:
          '{"free_text":{"enabled":true,"max_length":100,"reg_ex":"[a-zA-Z]"},"registered_reaction":{"enabled":true},"subspace_id":"1","user":"cosmos1qewk97fp49vzssrfnc997jpztc5nzr7xsd8zdc"}',
      },
    ];
    executeTests(testData);
  });
});
