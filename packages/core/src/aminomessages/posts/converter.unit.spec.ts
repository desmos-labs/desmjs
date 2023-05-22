import {
  MsgAddPostAttachment,
  MsgAnswerPoll,
  MsgCreatePost,
  MsgDeletePost,
  MsgEditPost,
  MsgRemovePostAttachment,
} from "@desmoslabs/desmjs-types/desmos/posts/v3/msgs";
import {
  PostReferenceType,
  ReplySetting,
} from "@desmoslabs/desmjs-types/desmos/posts/v3/models";
import Long from "long";
import { toTimestamp } from "@desmoslabs/desmjs-types/helpers";
import createPostsConverters, { mediaToAny, pollToAny } from "./converter";
import {
  MsgAddPostAttachmentTypeUrl,
  MsgAnswerPollTypeUrl,
  MsgCreatePostTypeUrl,
  MsgDeletePostTypeUrl,
  MsgEditPostTypeUrl,
  MsgRemovePostAttachmentTypeUrl,
} from "../../const";
import { ConverterTestData, runConverterTest } from "../testutils";

describe("Posts converter", () => {
  const converters = createPostsConverters();

  function executeTests(data: ConverterTestData<any>[]) {
    data.forEach((test) => {
      it(test.name, runConverterTest(converters, test));
    });
  }

  describe("MsgCreatePost", () => {
    const testData: ConverterTestData<MsgCreatePost>[] = [
      {
        name: "empty message",
        typeUrl: MsgCreatePostTypeUrl,
        msg: MsgCreatePost.fromPartial({}),
        expectedJsonSerialized: '{"referenced_posts":null}',
      },
      {
        name: "explicit undefined entities",
        typeUrl: MsgCreatePostTypeUrl,
        msg: MsgCreatePost.fromPartial({
          subspaceId: 8,
          author: "desmos1dhd97uxuzelyhgxhzzq02uu746dkxy6lh93xul",
          replySettings: ReplySetting.REPLY_SETTING_EVERYONE,
          entities: undefined,
        }),
        expectedJsonSerialized:
          '{"author":"desmos1dhd97uxuzelyhgxhzzq02uu746dkxy6lh93xul","referenced_posts":null,"reply_settings":1,"subspace_id":"8"}',
      },
      {
        name: "empty entities values",
        typeUrl: MsgCreatePostTypeUrl,
        msg: MsgCreatePost.fromPartial({
          subspaceId: 8,
          author: "desmos1dhd97uxuzelyhgxhzzq02uu746dkxy6lh93xul",
          replySettings: ReplySetting.REPLY_SETTING_EVERYONE,
          entities: {
            hashtags: [],
            mentions: [],
            urls: [],
          },
        }),
        expectedJsonSerialized:
          '{"author":"desmos1dhd97uxuzelyhgxhzzq02uu746dkxy6lh93xul","entities":{"hashtags":null,"mentions":null,"urls":null},"referenced_posts":null,"reply_settings":1,"subspace_id":"8"}',
      },
      {
        name: "only urls",
        typeUrl: MsgCreatePostTypeUrl,
        msg: MsgCreatePost.fromPartial({
          subspaceId: 8,
          author: "desmos1dhd97uxuzelyhgxhzzq02uu746dkxy6lh93xul",
          replySettings: ReplySetting.REPLY_SETTING_EVERYONE,
          entities: {
            hashtags: [],
            mentions: [],
            urls: [
              {
                start: 1,
                end: 1,
                displayUrl: "IPFS",
                url: "https://url.com/a",
              },
              {
                start: 0,
                end: 1,
                displayUrl: "IPFS",
                url: "https://url.com/a",
              },
            ],
          },
        }),
        expectedJsonSerialized:
          '{"author":"desmos1dhd97uxuzelyhgxhzzq02uu746dkxy6lh93xul","entities":{"hashtags":null,"mentions":null,"urls":[{"display_url":"IPFS","end":"1","start":"1","url":"https://url.com/a"},{"display_url":"IPFS","end":"1","url":"https://url.com/a"}]},"referenced_posts":null,"reply_settings":1,"subspace_id":"8"}',
      },
      {
        name: "complete message",
        typeUrl: MsgCreatePostTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          sectionId: 1,
          externalId: "External ID",
          text: "This is a text",
          conversationId: Long.fromNumber(1),
          replySettings: ReplySetting.REPLY_SETTING_EVERYONE,
          entities: {
            hashtags: [
              {
                start: Long.fromNumber(1),
                end: Long.fromNumber(3),
                tag: "tag",
              },
            ],
            mentions: [
              {
                start: Long.fromNumber(4),
                end: Long.fromNumber(6),
                tag: "tag",
              },
            ],
            urls: [
              {
                start: Long.fromNumber(7),
                end: Long.fromNumber(9),
                url: "URL",
                displayUrl: "Display URL",
              },
            ],
          },
          tags: ["general"],
          attachments: [
            mediaToAny({
              uri: "ftp://user:password@example.com/image.png",
              mimeType: "image/png",
            }),
            pollToAny({
              question: "What animal is best?",
              providedAnswers: [
                {
                  text: "Cat",
                  attachments: [],
                },
                {
                  text: "Dog",
                  attachments: [],
                },
              ],
              endDate: toTimestamp(new Date(Date.UTC(2020, 0, 1, 12, 0, 0, 0))),
              allowsAnswerEdits: false,
              allowsMultipleAnswers: false,
              finalTallyResults: undefined,
            }),
          ],
          referencedPosts: [
            {
              type: PostReferenceType.POST_REFERENCE_TYPE_QUOTE,
              postId: Long.fromNumber(1),
              position: Long.fromNumber(0),
            },
          ],
          author: "cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd",
        },
        expectedJsonSerialized:
          '{"attachments":[{"type":"desmos/Media","value":{"mime_type":"image/png","uri":"ftp://user:password@example.com/image.png"}},{"type":"desmos/Poll","value":{"end_date":"2020-01-01T12:00:00Z","provided_answers":[{"attachments":null,"text":"Cat"},{"attachments":null,"text":"Dog"}],"question":"What animal is best?"}}],"author":"cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd","conversation_id":"1","entities":{"hashtags":[{"end":"3","start":"1","tag":"tag"}],"mentions":[{"end":"6","start":"4","tag":"tag"}],"urls":[{"display_url":"Display URL","end":"9","start":"7","url":"URL"}]},"external_id":"External ID","referenced_posts":[{"post_id":"1","type":2}],"reply_settings":1,"section_id":1,"subspace_id":"1","tags":["general"],"text":"This is a text"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgEditPost", () => {
    const testData: ConverterTestData<MsgEditPost>[] = [
      {
        name: "empty message",
        typeUrl: MsgEditPostTypeUrl,
        msg: MsgEditPost.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgEditPostTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          postId: Long.fromNumber(1),
          text: "Edited text",
          entities: {
            hashtags: [
              {
                start: Long.fromNumber(1),
                end: Long.fromNumber(3),
                tag: "tag",
              },
            ],
            mentions: [
              {
                start: Long.fromNumber(4),
                end: Long.fromNumber(6),
                tag: "tag",
              },
            ],
            urls: [
              {
                start: Long.fromNumber(7),
                end: Long.fromNumber(9),
                url: "URL",
                displayUrl: "Display URL",
              },
            ],
          },
          tags: ["general"],
          editor: "cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd",
        },
        expectedJsonSerialized:
          '{"editor":"cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd","entities":{"hashtags":[{"end":"3","start":"1","tag":"tag"}],"mentions":[{"end":"6","start":"4","tag":"tag"}],"urls":[{"display_url":"Display URL","end":"9","start":"7","url":"URL"}]},"post_id":"1","subspace_id":"1","tags":["general"],"text":"Edited text"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgDeletePost", () => {
    const testData: ConverterTestData<MsgDeletePost>[] = [
      {
        name: "empty message",
        typeUrl: MsgDeletePostTypeUrl,
        msg: MsgDeletePost.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgDeletePostTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          postId: Long.fromNumber(1),
          signer: "cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd",
        },
        expectedJsonSerialized:
          '{"post_id":"1","signer":"cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgAddPostAttachment", () => {
    const testData: ConverterTestData<MsgAddPostAttachment>[] = [
      {
        name: "empty message",
        typeUrl: MsgAddPostAttachmentTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(0),
          postId: Long.fromNumber(0),
          content: mediaToAny({
            uri: "ftp://user:password@example.com/image.png",
            mimeType: "image/png",
          }),
          editor: "",
        },
        expectedJsonSerialized:
          '{"content":{"type":"desmos/Media","value":{"mime_type":"image/png","uri":"ftp://user:password@example.com/image.png"}}}',
      },
      {
        name: "complete message",
        typeUrl: MsgAddPostAttachmentTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          postId: Long.fromNumber(1),
          content: mediaToAny({
            uri: "ftp://user:password@example.com/image.png",
            mimeType: "image/png",
          }),
          editor: "cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd",
        },
        expectedJsonSerialized:
          '{"content":{"type":"desmos/Media","value":{"mime_type":"image/png","uri":"ftp://user:password@example.com/image.png"}},"editor":"cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd","post_id":"1","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgRemovePostAttachment", () => {
    const testData: ConverterTestData<MsgRemovePostAttachment>[] = [
      {
        name: "empty message",
        typeUrl: MsgRemovePostAttachmentTypeUrl,
        msg: MsgRemovePostAttachment.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgRemovePostAttachmentTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          postId: Long.fromNumber(1),
          attachmentId: 1,
          editor: "cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd",
        },
        expectedJsonSerialized:
          '{"attachment_id":1,"editor":"cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd","post_id":"1","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgAnswerPoll", () => {
    const testData: ConverterTestData<MsgAnswerPoll>[] = [
      {
        name: "empty message",
        typeUrl: MsgAnswerPollTypeUrl,
        msg: MsgAnswerPoll.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgAnswerPollTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          postId: Long.fromNumber(1),
          pollId: 1,
          answersIndexes: [1, 2, 3],
          signer: "cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd",
        },
        expectedJsonSerialized:
          '{"answers_indexes":[1,2,3],"poll_id":1,"post_id":"1","signer":"cosmos13t6y2nnugtshwuy0zkrq287a95lyy8vzleaxmd","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });
});
