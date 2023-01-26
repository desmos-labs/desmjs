import { sortedJsonStringify } from "@cosmjs/amino/build/signdoc";
import {
  MsgAddReaction,
  MsgAddRegisteredReaction,
  MsgEditRegisteredReaction,
  MsgRemoveReaction,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/msgs";
import Long from "long";
import createPostsConverters from "../posts/converter";
import createReactionsConverters, {
  freeTextReactionValueToAny,
  registeredReactionValueToAny,
} from "./converter";
import {
  MsgAddReactionTypeUrl,
  MsgAddRegisteredReactionTypeUrl,
  MsgEditRegisteredReactionTypeUrl,
  MsgRemoveReactionTypeUrl,
} from "../../const";

interface TestData<T> {
  readonly name: string;
  readonly typeUrl: string;
  readonly msg: T;
  readonly expectedJsonSerialized: string;
}

describe("Reactions converter", () => {
  const converters = createReactionsConverters();

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
      });
    });
  }

  describe("MsgAddPostReaction", () => {
    const testData: TestData<MsgAddReaction>[] = [
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
    const testData: TestData<MsgRemoveReaction>[] = [
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
    const testData: TestData<MsgAddRegisteredReaction>[] = [
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
    const testData: TestData<MsgEditRegisteredReaction>[] = [
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
});
