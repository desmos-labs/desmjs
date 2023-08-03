import {
  MsgAddReaction,
  MsgAddRegisteredReaction,
  MsgEditRegisteredReaction,
  MsgRemoveReaction,
  MsgRemoveRegisteredReaction,
  MsgSetReactionsParams,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/msgs";
import { Any } from "cosmjs-types/google/protobuf/any";
import { assertDefined, assertDefinedAndNotNull } from "@cosmjs/utils";
import {
  FreeTextValue,
  FreeTextValueParams,
  RegisteredReactionValue,
  RegisteredReactionValueParams,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/models";
import {
  AminoFreeTextReaction,
  AminoFreeTextValueParams,
  AminoRegisteredReaction,
  AminoRegisteredReactionValueParams,
} from "./aminotypes";
import {
  AminoMsgAddReaction,
  AminoMsgAddRegisteredReaction,
  AminoMsgEditRegisteredReaction,
  AminoMsgRemoveReaction,
  AminoMsgRemoveRegisteredReaction,
  AminoMsgSetReactionsParams,
} from "./aminomessages";
import {
  FreeTextValueAminoType,
  FreeTextValueTypeUrl,
  MsgAddReactionAminoType,
  MsgAddReactionTypeUrl,
  MsgAddRegisteredReactionAminoType,
  MsgAddRegisteredReactionTypeUrl,
  MsgEditRegisteredReactionAminoType,
  MsgEditRegisteredReactionTypeUrl,
  MsgRemoveReactionAminoType,
  MsgRemoveReactionTypeUrl,
  MsgRemoveRegisteredReactionAminoType,
  MsgRemoveRegisteredReactionTypeUrl,
  MsgSetReactionsParamsAminoType,
  MsgSetReactionsParamsTypeUrl,
  RegisteredReactionValueAminoType,
  RegisteredReactionValueTypeUrl,
} from "./consts";
import {
  fromOmitEmptyNumber,
  fromOmitEmptyString,
  fromOmitFalse,
  fromOmitZeroLong,
  omitEmptyNumber,
  omitEmptyString,
  omitFalse,
  omitZeroLong,
} from "../../../utils/aminoutils";
import { AminoConverters, AminoTypes } from "../../../aminotypes";

export function registeredReactionValueToAny(
  value: RegisteredReactionValue,
): Any {
  return Any.fromPartial({
    typeUrl: RegisteredReactionValueTypeUrl,
    value: RegisteredReactionValue.encode(value).finish(),
  });
}

export function freeTextReactionValueToAny(value: FreeTextValue): Any {
  return Any.fromPartial({
    typeUrl: FreeTextValueTypeUrl,
    value: FreeTextValue.encode(value).finish(),
  });
}

export function convertRegisteredReactionValueParamsToAmino(
  params: RegisteredReactionValueParams | undefined,
): AminoRegisteredReactionValueParams {
  return {
    enabled: omitFalse(params?.enabled || false),
  };
}

export function convertRegisteredReactionValueParamsFromAmino(
  params: AminoRegisteredReactionValueParams,
): RegisteredReactionValueParams {
  return {
    enabled: fromOmitFalse(params.enabled),
  };
}

export function convertFreeTextValueParamsToAmino(
  params: FreeTextValueParams | undefined,
): AminoFreeTextValueParams {
  return {
    enabled: omitFalse(params?.enabled || false),
    max_length: omitEmptyNumber(params?.maxLength || 0),
    reg_ex: omitEmptyString(params?.regEx || ""),
  };
}

export function convertFreeTextValueParamsFromAmino(
  params: AminoFreeTextValueParams,
): FreeTextValueParams {
  return {
    enabled: fromOmitFalse(params.enabled),
    maxLength: fromOmitEmptyNumber(params.max_length),
    regEx: fromOmitEmptyString(params.reg_ex),
  };
}

/**
 * Creates all the Amino converters for the reactions messages.
 */
export const AminoConverter: AminoConverters = {
  [RegisteredReactionValueTypeUrl]: {
    aminoType: RegisteredReactionValueAminoType,
    toAmino: (
      reaction: RegisteredReactionValue,
    ): AminoRegisteredReaction["value"] => ({
      registered_reaction_id: reaction.registeredReactionId,
    }),
    fromAmino: (
      reaction: AminoRegisteredReaction["value"],
    ): RegisteredReactionValue =>
      RegisteredReactionValue.fromPartial({
        registeredReactionId: reaction.registered_reaction_id,
      }),
  },
  [FreeTextValueTypeUrl]: {
    aminoType: FreeTextValueAminoType,
    toAmino: (reaction: FreeTextValue): AminoFreeTextReaction["value"] => ({
      text: reaction.text,
    }),
    fromAmino: (msg: AminoFreeTextReaction): FreeTextValue =>
      FreeTextValue.fromPartial({
        text: msg.value.text,
      }),
  },

  [MsgAddReactionTypeUrl]: {
    aminoType: MsgAddReactionAminoType,
    toAmino: (
      msg: MsgAddReaction,
      aminoTypes?: AminoTypes,
    ): AminoMsgAddReaction["value"] => {
      assertDefinedAndNotNull(msg.value, "reaction value not defined");
      assertDefined(
        aminoTypes,
        "aminoTypes must be defined to convert MsgAddReaction.value to amino",
      );
      return {
        subspace_id: omitZeroLong(msg.subspaceId),
        post_id: omitZeroLong(msg.postId),
        value: aminoTypes.fromAny(msg.value),
        user: omitEmptyString(msg.user),
      };
    },
    fromAmino: (
      msg: AminoMsgAddReaction["value"],
      aminoTypes?: AminoTypes,
    ): MsgAddReaction => {
      assertDefined(
        aminoTypes,
        "aminoTypes must be defined to convert AminoMsgAddReaction.value from amino",
      );
      return {
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        postId: fromOmitZeroLong(msg.post_id),
        value: aminoTypes.toAny(msg.value),
        user: fromOmitEmptyString(msg.user),
      };
    },
  },
  [MsgRemoveReactionTypeUrl]: {
    aminoType: MsgRemoveReactionAminoType,
    toAmino: (msg: MsgRemoveReaction): AminoMsgRemoveReaction["value"] => ({
      subspace_id: omitZeroLong(msg.subspaceId),
      post_id: omitZeroLong(msg.postId),
      reaction_id: omitEmptyNumber(msg.reactionId),
      user: omitEmptyString(msg.user),
    }),
    fromAmino: (msg: AminoMsgRemoveReaction["value"]): MsgRemoveReaction => ({
      subspaceId: fromOmitZeroLong(msg.subspace_id),
      postId: fromOmitZeroLong(msg.post_id),
      reactionId: fromOmitEmptyNumber(msg.reaction_id),
      user: fromOmitEmptyString(msg.user),
    }),
  },
  [MsgAddRegisteredReactionTypeUrl]: {
    aminoType: MsgAddRegisteredReactionAminoType,
    toAmino: (
      msg: MsgAddRegisteredReaction,
    ): AminoMsgAddRegisteredReaction["value"] => ({
      subspace_id: omitZeroLong(msg.subspaceId),
      shorthand_code: omitEmptyString(msg.shorthandCode),
      display_value: omitEmptyString(msg.displayValue),
      user: omitEmptyString(msg.user),
    }),
    fromAmino: (
      msg: AminoMsgAddRegisteredReaction["value"],
    ): MsgAddRegisteredReaction => ({
      subspaceId: fromOmitZeroLong(msg.subspace_id),
      shorthandCode: fromOmitEmptyString(msg.shorthand_code),
      displayValue: fromOmitEmptyString(msg.display_value),
      user: fromOmitEmptyString(msg.user),
    }),
  },
  [MsgEditRegisteredReactionTypeUrl]: {
    aminoType: MsgEditRegisteredReactionAminoType,
    toAmino: (
      msg: MsgEditRegisteredReaction,
    ): AminoMsgEditRegisteredReaction["value"] => ({
      subspace_id: omitZeroLong(msg.subspaceId),
      registered_reaction_id: omitEmptyNumber(msg.registeredReactionId),
      shorthand_code: omitEmptyString(msg.shorthandCode),
      display_value: omitEmptyString(msg.displayValue),
      user: omitEmptyString(msg.user),
    }),
    fromAmino: (
      msg: AminoMsgEditRegisteredReaction["value"],
    ): MsgEditRegisteredReaction => ({
      subspaceId: fromOmitZeroLong(msg.subspace_id),
      registeredReactionId: fromOmitEmptyNumber(msg.registered_reaction_id),
      shorthandCode: fromOmitEmptyString(msg.shorthand_code),
      displayValue: fromOmitEmptyString(msg.display_value),
      user: fromOmitEmptyString(msg.user),
    }),
  },
  [MsgRemoveRegisteredReactionTypeUrl]: {
    aminoType: MsgRemoveRegisteredReactionAminoType,
    toAmino: (
      msg: MsgRemoveRegisteredReaction,
    ): AminoMsgRemoveRegisteredReaction["value"] => ({
      subspace_id: omitZeroLong(msg.subspaceId),
      registered_reaction_id: omitEmptyNumber(msg.registeredReactionId),
      user: omitEmptyString(msg.user),
    }),
    fromAmino: (
      msg: AminoMsgRemoveRegisteredReaction["value"],
    ): MsgRemoveRegisteredReaction => ({
      subspaceId: fromOmitZeroLong(msg.subspace_id),
      registeredReactionId: fromOmitEmptyNumber(msg.registered_reaction_id),
      user: fromOmitEmptyString(msg.user),
    }),
  },
  [MsgSetReactionsParamsTypeUrl]: {
    aminoType: MsgSetReactionsParamsAminoType,
    toAmino: (
      msg: MsgSetReactionsParams,
    ): AminoMsgSetReactionsParams["value"] => ({
      subspace_id: omitZeroLong(msg.subspaceId),
      registered_reaction: convertRegisteredReactionValueParamsToAmino(
        msg.registeredReaction,
      ),
      free_text: convertFreeTextValueParamsToAmino(msg.freeText),
      user: omitEmptyString(msg.user),
    }),
    fromAmino: (
      msg: AminoMsgSetReactionsParams["value"],
    ): MsgSetReactionsParams => ({
      subspaceId: fromOmitZeroLong(msg.subspace_id),
      registeredReaction: convertRegisteredReactionValueParamsFromAmino(
        msg.registered_reaction,
      ),
      freeText: convertFreeTextValueParamsFromAmino(msg.free_text),
      user: fromOmitEmptyString(msg.user),
    }),
  },
};
