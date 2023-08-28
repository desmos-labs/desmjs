import {
  MsgAcceptPostOwnerTransferRequest,
  MsgAddPostAttachment,
  MsgAnswerPoll,
  MsgCancelPostOwnerTransferRequest,
  MsgCreatePost,
  MsgDeletePost,
  MsgEditPost,
  MsgMovePost,
  MsgRefusePostOwnerTransferRequest,
  MsgRemovePostAttachment,
  MsgRequestPostOwnerTransfer,
} from "@desmoslabs/desmjs-types/desmos/posts/v3/msgs";
import {
  Entities,
  Media,
  Poll,
  Poll_ProvidedAnswer,
  PollTallyResults,
  PollTallyResults_AnswerResult,
  TextTag,
  Url,
} from "@desmoslabs/desmjs-types/desmos/posts/v3/models";
import { Any } from "@desmoslabs/desmjs-types/google/protobuf/any";
import { assertDefined, assertDefinedAndNotNull } from "@cosmjs/utils";
import Long from "long";
import {
  AminoMsgAddPostAttachment,
  AminoMsgAnswerPoll,
  AminoMsgCreatePost,
  AminoMsgDeletePost,
  AminoMsgEditPost,
  AminoMsgRemovePostAttachment,
} from "./aminomessages";
import {
  AminoEntities,
  AminoMedia,
  AminoPoll,
  AminoPollProvidedAnswer,
  AminoPollTallyResultAnswerResult,
  AminoPollTallyResults,
  AminoTextTag,
  AminoUrl,
} from "./aminotypes";
import {
  MediaAminoType,
  MediaTypeUrl,
  MsgAcceptPostOwnerTransferRequestAminoType,
  MsgAcceptPostOwnerTransferRequestTypeUrl,
  MsgAddPostAttachmentAminoType,
  MsgAddPostAttachmentTypeUrl,
  MsgAnswerPollAminoType,
  MsgAnswerPollTypeUrl,
  MsgCancelPostOwnerTransferRequestAminoType,
  MsgCancelPostOwnerTransferRequestTypeUrl,
  MsgCreatePostAminoType,
  MsgCreatePostTypeUrl,
  MsgDeletePostAminoType,
  MsgDeletePostTypeUrl,
  MsgEditPostAminoType,
  MsgEditPostTypeUrl,
  MsgMovePostAminoType,
  MsgMovePostTypeUrl,
  MsgRefusePostOwnerTransferRequestAminoType,
  MsgRefusePostOwnerTransferRequestTypeUrl,
  MsgRemovePostAttachmentAminoType,
  MsgRemovePostAttachmentTypeUrl,
  MsgRequestPostOwnerTransferAminoType,
  MsgRequestPostOwnerTransferTypeUrl,
  PollAminoType,
  PollTypeUrl,
} from "./consts";
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
} from "../../../utils/aminoutils";
import { AminoConverters, AminoTypes } from "../../../aminotypes";

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

function convertPollProvidedAnswerToAmino(
  answer: Poll_ProvidedAnswer,
  aminoTypes?: AminoTypes,
): AminoPollProvidedAnswer {
  assertDefined(
    aminoTypes,
    "aminoTypes must be defined to convert Poll_ProvidedAnswer.attachments to amino",
  );
  return {
    text: omitEmptyString(answer.text),
    attachments: nullIfEmptyArray(
      answer.attachments.map((a) => aminoTypes.fromAny(a)),
    ),
  };
}

function convertPollTallyResultAnswerResultToAmino(
  result: PollTallyResults_AnswerResult,
): AminoPollTallyResultAnswerResult {
  return {
    answer_index: result.answerIndex,
    votes: result.votes.toString(),
  };
}

function convertPollTallyResultsToAmino(
  results: PollTallyResults,
): AminoPollTallyResults {
  return {
    results: results.results.map(convertPollTallyResultAnswerResultToAmino),
  };
}

function convertPollTallyResultAnswerResultFromAmino(
  result: AminoPollTallyResultAnswerResult,
): PollTallyResults_AnswerResult {
  return {
    answerIndex: result.answer_index,
    votes: Long.fromString(result.votes),
  };
}

function convertPollTallyResultsFromAmino(
  results: AminoPollTallyResults,
): PollTallyResults {
  return {
    results: results.results.map(convertPollTallyResultAnswerResultFromAmino),
  };
}

function convertPollProvidedAnswerFromAmino(
  answer: AminoPollProvidedAnswer,
  aminoTypes?: AminoTypes,
): Poll_ProvidedAnswer {
  assertDefined(
    aminoTypes,
    "aminoTypes must be defined to convert Poll_ProvidedAnswer.attachments from amino",
  );
  return {
    text: fromOmitEmptyString(answer.text),
    attachments: fromNullIfEmptyArray(answer.attachments).map((a) =>
      aminoTypes.toAny(a),
    ),
  };
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
  entities: Entities | undefined,
): AminoEntities | undefined {
  return entities
    ? {
        hashtags: nullIfEmptyArray(
          entities.hashtags.map(convertTextTagToAmino),
        ),
        mentions: nullIfEmptyArray(
          entities.mentions.map(convertTextTagToAmino),
        ),
        urls: nullIfEmptyArray(entities.urls.map(convertUrlToAmino)),
      }
    : undefined;
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
  entities: AminoEntities | undefined,
): Entities | undefined {
  return entities
    ? {
        hashtags: fromNullIfEmptyArray(entities.hashtags).map(
          convertTextTagFromAmino,
        ),
        mentions: fromNullIfEmptyArray(entities.mentions).map(
          convertTextTagFromAmino,
        ),
        urls: fromNullIfEmptyArray(entities.urls).map(convertUrlFromAmino),
      }
    : undefined;
}

/**
 * Creates all the Amino converters for the posts messages.
 */
// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AminoConverter: AminoConverters = {
  // Types
  [PollTypeUrl]: {
    aminoType: PollAminoType,
    toAmino: (poll: Poll, aminoTypes?: AminoTypes): AminoPoll["value"] => ({
      question: poll.question,
      provided_answers: poll.providedAnswers.map((a) =>
        convertPollProvidedAnswerToAmino(a, aminoTypes),
      ),
      end_date: serializeTimestamp(poll.endDate),
      allows_multiple_answers: omitFalse(poll.allowsMultipleAnswers),
      allows_answer_edits: omitFalse(poll.allowsAnswerEdits),
      final_tally_results: poll.finalTallyResults
        ? convertPollTallyResultsToAmino(poll.finalTallyResults)
        : undefined,
    }),
    fromAmino: (msg: AminoPoll["value"], aminoTypes?: AminoTypes): Poll =>
      Poll.fromPartial({
        question: msg.question,
        providedAnswers: msg.provided_answers.map((a) =>
          convertPollProvidedAnswerFromAmino(a, aminoTypes),
        ),
        endDate: deserializeTimestamp(msg.end_date),
        allowsMultipleAnswers: fromOmitFalse(msg.allows_multiple_answers),
        allowsAnswerEdits: fromOmitFalse(msg.allows_answer_edits),
        finalTallyResults: msg.final_tally_results
          ? convertPollTallyResultsFromAmino(msg.final_tally_results)
          : undefined,
      }),
  },
  [MediaTypeUrl]: {
    aminoType: MediaAminoType,
    toAmino: (msg: Media): AminoMedia["value"] => ({
      uri: msg.uri,
      mime_type: msg.mimeType,
    }),
    fromAmino: (msg: AminoMedia["value"]): Media => ({
      uri: msg.uri,
      mimeType: msg.mime_type,
    }),
  },

  // Messages
  [MsgCreatePostTypeUrl]: {
    aminoType: MsgCreatePostAminoType,
    toAmino: (
      msg: MsgCreatePost,
      aminoTypes?: AminoTypes,
    ): AminoMsgCreatePost["value"] => {
      assertDefined(
        aminoTypes,
        "aminoTypes must be defined to convert post attachments to amino",
      );
      return {
        subspace_id: omitZeroLong(msg.subspaceId),
        section_id: omitEmptyNumber(msg.sectionId),
        external_id: omitEmptyString(msg.externalId),
        text: omitEmptyString(msg.text),
        entities: convertEntitiesToAmino(msg.entities),
        tags: omitEmptyArray(msg.tags),
        attachments: omitEmptyArray(
          msg.attachments.map((a) => aminoTypes.fromAny(a)),
        ),
        author: omitEmptyString(msg.author),
        conversation_id: omitZeroLong(msg.conversationId),
        reply_settings: omitEmptyNumber(msg.replySettings),
        referenced_posts: nullIfEmptyArray(
          msg.referencedPosts.map((reference) => ({
            type: reference.type,
            post_id: omitZeroLong(reference.postId),
            position: omitZeroLong(reference.position),
          })),
        ),
      };
    },
    fromAmino: (
      msg: AminoMsgCreatePost["value"],
      aminoTypes?: AminoTypes,
    ): MsgCreatePost => {
      assertDefined(
        aminoTypes,
        "aminoTypes must be defined to convert post attachments from amino",
      );
      return {
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        sectionId: fromOmitEmptyNumber(msg.section_id),
        externalId: fromOmitEmptyString(msg.external_id),
        text: fromOmitEmptyString(msg.text),
        entities: convertEntitiesFromAmino(msg.entities),
        tags: fromOmitEmptyArray(msg.tags),
        attachments: fromOmitEmptyArray(msg.attachments).map((a) =>
          aminoTypes.toAny(a),
        ),
        author: fromOmitEmptyString(msg.author),
        conversationId: fromOmitZeroLong(msg.conversation_id),
        replySettings: fromOmitEmptyNumber(msg.reply_settings),
        referencedPosts: fromNullIfEmptyArray(msg.referenced_posts).map(
          (reference) => ({
            type: reference.type,
            postId: fromOmitZeroLong(reference.post_id),
            position: fromOmitZeroLong(reference.position),
          }),
        ),
      };
    },
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
      msg: MsgAddPostAttachment,
      aminoTypes?: AminoTypes,
    ): AminoMsgAddPostAttachment["value"] => {
      assertDefinedAndNotNull(msg.content, "attachment content not defined");
      assertDefined(
        aminoTypes,
        "aminoTypes must be defined to convert post content to amino",
      );
      return {
        subspace_id: omitZeroLong(msg.subspaceId),
        post_id: omitZeroLong(msg.postId),
        content: msg.content ? aminoTypes.fromAny(msg.content) : undefined,
        editor: omitEmptyString(msg.editor),
      };
    },
    fromAmino: (
      msg: AminoMsgAddPostAttachment["value"],
      aminoTypes?: AminoTypes,
    ): MsgAddPostAttachment => {
      assertDefined(
        aminoTypes,
        "aminoTypes must be defined to convert post content from amino",
      );
      return {
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        postId: fromOmitZeroLong(msg.post_id),
        content: msg.content ? aminoTypes.toAny(msg.content) : undefined,
        editor: fromOmitEmptyString(msg.editor),
      };
    },
  },
  [MsgRemovePostAttachmentTypeUrl]: {
    aminoType: MsgRemovePostAttachmentAminoType,
    toAmino: (
      msg: MsgRemovePostAttachment,
    ): AminoMsgRemovePostAttachment["value"] => ({
      subspace_id: omitZeroLong(msg.subspaceId),
      post_id: omitZeroLong(msg.postId),
      attachment_id: omitEmptyNumber(msg.attachmentId),
      editor: omitEmptyString(msg.editor),
    }),
    fromAmino: (
      msg: AminoMsgRemovePostAttachment["value"],
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
  [MsgMovePostTypeUrl]: {
    aminoType: MsgMovePostAminoType,
    toAmino: MsgMovePost.toAmino,
    fromAmino: MsgMovePost.fromAmino,
  },
  [MsgRequestPostOwnerTransferTypeUrl]: {
    aminoType: MsgRequestPostOwnerTransferAminoType,
    toAmino: MsgRequestPostOwnerTransfer.toAmino,
    fromAmino: MsgRequestPostOwnerTransfer.fromAmino,
  },
  [MsgCancelPostOwnerTransferRequestTypeUrl]: {
    aminoType: MsgCancelPostOwnerTransferRequestAminoType,
    toAmino: MsgCancelPostOwnerTransferRequest.toAmino,
    fromAmino: MsgCancelPostOwnerTransferRequest.fromAmino,
  },
  [MsgAcceptPostOwnerTransferRequestTypeUrl]: {
    aminoType: MsgAcceptPostOwnerTransferRequestAminoType,
    toAmino: MsgAcceptPostOwnerTransferRequest.toAmino,
    fromAmino: MsgAcceptPostOwnerTransferRequest.fromAmino,
  },
  [MsgRefusePostOwnerTransferRequestTypeUrl]: {
    aminoType: MsgRefusePostOwnerTransferRequestAminoType,
    toAmino: MsgRefusePostOwnerTransferRequest.toAmino,
    fromAmino: MsgRefusePostOwnerTransferRequest.fromAmino,
  },
};
