import { AminoConverter, AminoConverters } from "@cosmjs/stargate";
import {
  MsgAddPostAttachment,
  MsgAnswerPoll,
  MsgCreatePost,
  MsgDeletePost,
  MsgEditPost,
  MsgRemovePostAttachment,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/msgs";
import {
  Attachment,
  Entities,
  Media,
  Poll,
  Poll_ProvidedAnswer,
  PollTallyResults,
  PollTallyResults_AnswerResult,
  TextTag,
  Url,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/models";
import { Any } from "@desmoslabs/desmjs-types/google/protobuf/any";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import Long from "long";
import { AminoMsg } from "@cosmjs/amino";
import {
  AminoMsgAddPostAttachment,
  AminoMsgAnswerPoll,
  AminoMsgCreatePost,
  AminoMsgDeletePost,
  AminoMsgEditPost,
  AminoMsgRemovePostAttachment,
} from "./messages";
import { isAminoConverter } from "../../types";
import {
  AminoAttachment,
  AminoContent,
  AminoEntities,
  AminoMedia,
  AminoPoll,
  AminoPollProvidedAnswer,
  AminoPollTallyResultAnswerResult,
  AminoPollTallyResults,
  AminoTextTag,
  AminoUrl,
} from "./types";
import {
  MediaAminoType,
  MediaTypeUrl,
  MsgAddPostAttachmentAminoType,
  MsgAddPostAttachmentTypeUrl,
  MsgAnswerPollAminoType,
  MsgAnswerPollTypeUrl,
  MsgCreatePostAminoType,
  MsgCreatePostTypeUrl,
  MsgDeletePostAminoType,
  MsgDeletePostTypeUrl,
  MsgEditPostAminoType,
  MsgEditPostTypeUrl,
  MsgRemovePostAttachmentAminoType,
  MsgRemovePostAttachmentTypeUrl,
  PollAminoType,
  PollTypeUrl,
} from "../../const";
import {
  deserializeTimestamp,
  fromNullIfEmptyArray,
  fromOmitEmptyArray,
  fromOmitEmptyNumber,
  fromOmitEmptyString,
  fromOmitFalse,
  fromOmitZeroLong,
  nullIfEmptyArray,
  omitEmptyArray,
  omitEmptyNumber,
  omitEmptyString,
  omitFalse,
  omitZeroLong,
  serializeTimestamp,
} from "../utils";

/**
 * Converts the given `Poll` into an `Any` instance so that it can be used within `MsgCreatePost` and `MsgAddPostAttachment`.
 * @param poll: The poll to be converted.
 */
export function pollToAny(poll: Poll): Any {
  return Any.fromPartial({
    typeUrl: PollTypeUrl,
    value: Poll.encode(poll).finish(),
  });
}

/**
 * Converts the given `Media` into an `Any` instance so that it can be used within `MsgCreatePost` and `MsgAddPostAttachment`.
 * @param media: The media to be converted.
 */
export function mediaToAny(media: Media): Any {
  return Any.fromPartial({
    typeUrl: MediaTypeUrl,
    value: Media.encode(media).finish(),
  });
}

function convertAttachmentToAmino(attachment: Attachment): AminoAttachment {
  return {
    id: omitEmptyNumber(attachment.id),
    post_id: omitZeroLong(attachment.postId),
    subspace_id: omitZeroLong(attachment.subspaceId),
    content: attachment.content
      ? convertContentToAmino(attachment.content)
      : undefined,
  };
}

function convertPollProvidedAnswerToAmino(
  answer: Poll_ProvidedAnswer
): AminoPollProvidedAnswer {
  return {
    text: omitEmptyString(answer.text),
    attachments: nullIfEmptyArray(
      answer.attachments.map(convertAttachmentToAmino)
    ),
  };
}

function convertPollTallyResultAnswerResultToAmino(
  result: PollTallyResults_AnswerResult
): AminoPollTallyResultAnswerResult {
  return {
    answer_index: result.answerIndex,
    votes: result.votes.toString(),
  };
}

function convertPollTallyResultsToAmino(
  results: PollTallyResults
): AminoPollTallyResults {
  return {
    results: results.results.map(convertPollTallyResultAnswerResultToAmino),
  };
}

function convertPollTallyResultAnswerResultFromAmino(
  result: AminoPollTallyResultAnswerResult
): PollTallyResults_AnswerResult {
  return {
    answerIndex: result.answer_index,
    votes: Long.fromString(result.votes),
  };
}

function convertPollTallyResultsFromAmino(
  results: AminoPollTallyResults
): PollTallyResults {
  return {
    results: results.results.map(convertPollTallyResultAnswerResultFromAmino),
  };
}

function convertAttachmentFromAmino(attachment: AminoAttachment): Attachment {
  return {
    id: fromOmitEmptyNumber(attachment.id),
    postId: Long.fromString(attachment.post_id ?? "0"),
    subspaceId: Long.fromString(attachment.subspace_id ?? "0"),
    content: attachment.content
      ? convertContentFromAmino(attachment.content)
      : undefined,
  };
}

function convertPollProvidedAnswerFromAmino(
  answer: AminoPollProvidedAnswer
): Poll_ProvidedAnswer {
  return {
    text: fromOmitEmptyString(answer.text),
    attachments: fromNullIfEmptyArray(answer.attachments).map(
      convertAttachmentFromAmino
    ),
  };
}

export const attachmentConverters: AminoConverters = {
  [PollTypeUrl]: {
    aminoType: PollAminoType,
    toAmino: (msg: Any): AminoPoll["value"] => {
      const poll = Poll.decode(msg.value);
      return {
        question: poll.question,
        provided_answers: poll.providedAnswers.map(
          convertPollProvidedAnswerToAmino
        ),
        end_date: serializeTimestamp(poll.endDate),
        allows_multiple_answers: omitFalse(poll.allowsMultipleAnswers),
        allows_answer_edits: omitFalse(poll.allowsAnswerEdits),
        final_tally_results: poll.finalTallyResults
          ? convertPollTallyResultsToAmino(poll.finalTallyResults)
          : undefined,
      };
    },
    fromAmino: (msg: AminoPoll["value"]): Any =>
      pollToAny(
        Poll.fromPartial({
          question: msg.question,
          providedAnswers: msg.provided_answers.map(
            convertPollProvidedAnswerFromAmino
          ),
          endDate: deserializeTimestamp(msg.end_date),
          allowsMultipleAnswers: fromOmitFalse(msg.allows_multiple_answers),
          allowsAnswerEdits: fromOmitFalse(msg.allows_answer_edits),
          finalTallyResults: msg.final_tally_results
            ? convertPollTallyResultsFromAmino(msg.final_tally_results)
            : undefined,
        })
      ),
  },
  [MediaTypeUrl]: {
    aminoType: MediaAminoType,
    toAmino: (msg: Any): AminoMedia["value"] => {
      const media = Media.decode(msg.value);
      return {
        uri: media.uri,
        mime_type: media.mimeType,
      };
    },
    fromAmino: (msg: AminoMedia["value"]): Any =>
      mediaToAny(
        Media.fromPartial({
          uri: msg.uri,
          mimeType: msg.mime_type,
        })
      ),
  },
};

function convertContentToAmino(content: Any): AminoContent {
  const match = attachmentConverters[content.typeUrl] as AminoConverter;
  return {
    type: match.aminoType,
    value: match.toAmino(content),
  } as AminoMsg;
}

function convertTextTagToAmino(textTag: TextTag): AminoTextTag {
  return {
    tag: textTag.tag,
    start: textTag.start.toString(),
    end: textTag.end.toString(),
  };
}

function convertUrlToAmino(url: Url): AminoUrl {
  return {
    start: omitZeroLong(url.start),
    end: omitZeroLong(url.end),
    url: omitEmptyString(url.url),
    display_url: omitEmptyString(url.displayUrl),
  };
}

function convertEntitiesToAmino(
  entities: Entities | undefined
): AminoEntities | undefined {
  return entities
    ? {
        hashtags: nullIfEmptyArray(
          entities.hashtags.map(convertTextTagToAmino)
        ),
        mentions: nullIfEmptyArray(
          entities.mentions.map(convertTextTagToAmino)
        ),
        urls: nullIfEmptyArray(entities.urls.map(convertUrlToAmino)),
      }
    : undefined;
}

function convertContentFromAmino(attachment: AminoContent): Any {
  const matches = Object.entries(attachmentConverters)
    .filter(isAminoConverter)
    .filter(([, { aminoType }]) => aminoType === attachment.type);
  const [, converter] = matches[0];
  return converter.fromAmino(attachment);
}

function convertTextTagFromAmino(textTag: AminoTextTag): TextTag {
  return {
    tag: textTag.tag,
    start: Long.fromString(textTag.start),
    end: Long.fromString(textTag.end),
  };
}

function convertUrlFromAmino(url: AminoUrl): Url {
  return {
    start: fromOmitZeroLong(url.start),
    end: fromOmitZeroLong(url.end),
    url: fromOmitEmptyString(url.url),
    displayUrl: fromOmitEmptyString(url.display_url),
  };
}

function convertEntitiesFromAmino(
  entities: AminoEntities | undefined
): Entities | undefined {
  return entities
    ? {
        hashtags: fromNullIfEmptyArray(entities.hashtags).map(
          convertTextTagFromAmino
        ),
        mentions: fromNullIfEmptyArray(entities.mentions).map(
          convertTextTagFromAmino
        ),
        urls: fromNullIfEmptyArray(entities.urls).map(convertUrlFromAmino),
      }
    : undefined;
}

/**
 * Creates all the Amino converters for the posts messages.
 */
export function createPostsConverters(): AminoConverters {
  return {
    [MsgCreatePostTypeUrl]: {
      aminoType: MsgCreatePostAminoType,
      toAmino: (msg: MsgCreatePost): AminoMsgCreatePost["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        section_id: omitEmptyNumber(msg.sectionId),
        external_id: omitEmptyString(msg.externalId),
        text: omitEmptyString(msg.text),
        entities: convertEntitiesToAmino(msg.entities),
        tags: omitEmptyArray(msg.tags),
        attachments: omitEmptyArray(msg.attachments.map(convertContentToAmino)),
        author: omitEmptyString(msg.author),
        conversation_id: omitZeroLong(msg.conversationId),
        reply_settings: omitEmptyNumber(msg.replySettings),
        referenced_posts: nullIfEmptyArray(
          msg.referencedPosts.map((reference) => ({
            type: reference.type,
            post_id: omitZeroLong(reference.postId),
            position: omitZeroLong(reference.position),
          }))
        ),
      }),
      fromAmino: (msg: AminoMsgCreatePost["value"]): MsgCreatePost => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        sectionId: fromOmitEmptyNumber(msg.section_id),
        externalId: fromOmitEmptyString(msg.external_id),
        text: fromOmitEmptyString(msg.text),
        entities: convertEntitiesFromAmino(msg.entities),
        tags: fromOmitEmptyArray(msg.tags),
        attachments: fromOmitEmptyArray(msg.attachments).map(
          convertContentFromAmino
        ),
        author: fromOmitEmptyString(msg.author),
        conversationId: fromOmitZeroLong(msg.conversation_id),
        replySettings: fromOmitEmptyNumber(msg.reply_settings),
        referencedPosts: fromNullIfEmptyArray(msg.referenced_posts).map(
          (reference) => ({
            type: reference.type,
            postId: fromOmitZeroLong(reference.post_id),
            position: fromOmitZeroLong(reference.position),
          })
        ),
      }),
    },
    [MsgEditPostTypeUrl]: {
      aminoType: MsgEditPostAminoType,
      toAmino: (msg: MsgEditPost): AminoMsgEditPost["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        post_id: omitZeroLong(msg.postId),
        text: omitEmptyString(msg.text),
        entities: convertEntitiesToAmino(msg.entities),
        tags: omitEmptyArray(msg.tags),
        editor: omitEmptyString(msg.editor),
      }),
      fromAmino: (msg: AminoMsgEditPost["value"]): MsgEditPost => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        postId: fromOmitZeroLong(msg.post_id),
        text: fromOmitEmptyString(msg.text),
        entities: convertEntitiesFromAmino(msg.entities),
        tags: fromOmitEmptyArray(msg.tags),
        editor: fromOmitEmptyString(msg.editor),
      }),
    },
    [MsgDeletePostTypeUrl]: {
      aminoType: MsgDeletePostAminoType,
      toAmino: (msg: MsgDeletePost): AminoMsgDeletePost["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        post_id: omitZeroLong(msg.postId),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (msg: AminoMsgDeletePost["value"]): MsgDeletePost => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        postId: fromOmitZeroLong(msg.post_id),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgAddPostAttachmentTypeUrl]: {
      aminoType: MsgAddPostAttachmentAminoType,
      toAmino: (
        msg: MsgAddPostAttachment
      ): AminoMsgAddPostAttachment["value"] => {
        assertDefinedAndNotNull(msg.content, "attachment content not defined");
        return {
          subspace_id: omitZeroLong(msg.subspaceId),
          post_id: omitZeroLong(msg.postId),
          content: convertContentToAmino(msg.content),
          editor: omitEmptyString(msg.editor),
        };
      },
      fromAmino: (
        msg: AminoMsgAddPostAttachment["value"]
      ): MsgAddPostAttachment => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        postId: fromOmitZeroLong(msg.post_id),
        content: convertContentFromAmino(msg.content),
        editor: fromOmitEmptyString(msg.editor),
      }),
    },
    [MsgRemovePostAttachmentTypeUrl]: {
      aminoType: MsgRemovePostAttachmentAminoType,
      toAmino: (
        msg: MsgRemovePostAttachment
      ): AminoMsgRemovePostAttachment["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        post_id: omitZeroLong(msg.postId),
        attachment_id: omitEmptyNumber(msg.attachmentId),
        editor: omitEmptyString(msg.editor),
      }),
      fromAmino: (
        msg: AminoMsgRemovePostAttachment["value"]
      ): MsgRemovePostAttachment => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        postId: fromOmitZeroLong(msg.post_id),
        attachmentId: fromOmitEmptyNumber(msg.attachment_id),
        editor: fromOmitEmptyString(msg.editor),
      }),
    },
    [MsgAnswerPollTypeUrl]: {
      aminoType: MsgAnswerPollAminoType,
      toAmino: (msg: MsgAnswerPoll): AminoMsgAnswerPoll["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        post_id: omitZeroLong(msg.postId),
        poll_id: omitEmptyNumber(msg.pollId),
        answers_indexes: omitEmptyArray(msg.answersIndexes),
        signer: omitEmptyString(msg.signer),
      }),
      fromAmino: (msg: AminoMsgAnswerPoll["value"]): MsgAnswerPoll => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        postId: fromOmitZeroLong(msg.post_id),
        pollId: fromOmitEmptyNumber(msg.poll_id),
        answersIndexes: fromOmitEmptyArray(msg.answers_indexes),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
  };
}

export default createPostsConverters;
