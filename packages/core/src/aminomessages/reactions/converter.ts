import { AminoConverter, AminoConverters } from "@cosmjs/stargate";
import {
  MsgAddReaction,
  MsgAddRegisteredReaction,
  MsgEditRegisteredReaction,
  MsgRemoveReaction,
  MsgRemoveRegisteredReaction,
  MsgSetReactionsParams,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/msgs";
import { Any } from "cosmjs-types/google/protobuf/any";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import {
  FreeTextValue,
  FreeTextValueParams,
  RegisteredReactionValue,
  RegisteredReactionValueParams,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/models";
import {
  AminoFreeTextReaction,
  AminoFreeTextValueParams,
  AminoReaction,
  AminoRegisteredReaction,
  AminoRegisteredReactionValueParams,
} from "./types";
import {
  AminoMsgAddReaction,
  AminoMsgAddRegisteredReaction,
  AminoMsgEditRegisteredReaction,
  AminoMsgRemoveReaction,
  AminoMsgRemoveRegisteredReaction,
  AminoMsgSetReactionsParams,
} from "./messages";
import { isAminoConverter } from "../../types";
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
} from "../../const";
import {
  fromOmitEmptyNumber,
  fromOmitEmptyString,
  fromOmitFalse,
  fromOmitZeroLong,
  omitEmptyNumber,
  omitEmptyString,
  omitFalse,
  omitZeroLong,
} from "../utils";

export function registeredReactionValueToAny(
  value: RegisteredReactionValue
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

export const reactionValueConverters: AminoConverters = {
  [RegisteredReactionValueTypeUrl]: {
    aminoType: RegisteredReactionValueAminoType,
    toAmino: (msg: Any): AminoRegisteredReaction["value"] => {
      const reaction = RegisteredReactionValue.decode(msg.value);
      return {
        registered_reaction_id: reaction.registeredReactionId,
      };
    },
    fromAmino: (msg: AminoRegisteredReaction): Any =>
      registeredReactionValueToAny(
        RegisteredReactionValue.fromPartial({
          registeredReactionId: msg.value.registered_reaction_id,
        })
      ),
  },
  [FreeTextValueTypeUrl]: {
    aminoType: FreeTextValueAminoType,
    toAmino: (msg: Any): AminoFreeTextReaction["value"] => {
      const reaction = FreeTextValue.decode(msg.value);
      return {
        text: reaction.text,
      };
    },
    fromAmino: (msg: AminoFreeTextReaction): Any =>
      freeTextReactionValueToAny(
        FreeTextValue.fromPartial({
          text: msg.value.text,
        })
      ),
  },
};

export function convertReactionValueToAmino(value: Any): AminoReaction {
  const converter = reactionValueConverters[value.typeUrl] as AminoConverter;
  return {
    type: converter.aminoType,
    value: converter.toAmino(value),
  };
}

export function convertReactionFromAmino(value: AminoReaction): Any {
  const matches = Object.entries(reactionValueConverters)
    .filter(isAminoConverter)
    .filter(([, { aminoType }]) => aminoType === value.type);
  const [, converter] = matches[0];
  return converter.fromAmino(value);
}

export function convertRegisteredReactionValueParamsToAmino(
  params: RegisteredReactionValueParams | undefined
): AminoRegisteredReactionValueParams {
  return {
    enabled: omitFalse(params?.enabled || false),
  };
}

export function convertRegisteredReactionValueParamsFromAmino(
  params: AminoRegisteredReactionValueParams
): RegisteredReactionValueParams {
  return {
    enabled: fromOmitFalse(params.enabled),
  };
}

export function convertFreeTextValueParamsToAmino(
  params: FreeTextValueParams | undefined
): AminoFreeTextValueParams {
  return {
    enabled: omitFalse(params?.enabled || false),
    max_length: omitEmptyNumber(params?.maxLength || 0),
    reg_ex: omitEmptyString(params?.regEx || ""),
  };
}

export function convertFreeTextValueParamsFromAmino(
  params: AminoFreeTextValueParams
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
export function createReactionsConverters(): AminoConverters {
  return {
    [MsgAddReactionTypeUrl]: {
      aminoType: MsgAddReactionAminoType,
      toAmino: (msg: MsgAddReaction): AminoMsgAddReaction["value"] => {
        assertDefinedAndNotNull(msg.value, "reaction value not defined");
        return {
          subspace_id: omitZeroLong(msg.subspaceId),
          post_id: omitZeroLong(msg.postId),
          value: convertReactionValueToAmino(msg.value),
          user: omitEmptyString(msg.user),
        };
      },
      fromAmino: (msg: AminoMsgAddReaction["value"]): MsgAddReaction => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        postId: fromOmitZeroLong(msg.post_id),
        value: convertReactionFromAmino(msg.value),
        user: fromOmitEmptyString(msg.user),
      }),
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
        msg: MsgAddRegisteredReaction
      ): AminoMsgAddRegisteredReaction["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        shorthand_code: omitEmptyString(msg.shorthandCode),
        display_value: omitEmptyString(msg.displayValue),
        user: omitEmptyString(msg.user),
      }),
      fromAmino: (
        msg: AminoMsgAddRegisteredReaction["value"]
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
        msg: MsgEditRegisteredReaction
      ): AminoMsgEditRegisteredReaction["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        registered_reaction_id: omitEmptyNumber(msg.registeredReactionId),
        shorthand_code: omitEmptyString(msg.shorthandCode),
        display_value: omitEmptyString(msg.displayValue),
        user: omitEmptyString(msg.user),
      }),
      fromAmino: (
        msg: AminoMsgEditRegisteredReaction["value"]
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
        msg: MsgRemoveRegisteredReaction
      ): AminoMsgRemoveRegisteredReaction["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        registered_reaction_id: omitEmptyNumber(msg.registeredReactionId),
        user: omitEmptyString(msg.user),
      }),
      fromAmino: (
        msg: AminoMsgRemoveRegisteredReaction["value"]
      ): MsgRemoveRegisteredReaction => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        registeredReactionId: fromOmitEmptyNumber(msg.registered_reaction_id),
        user: fromOmitEmptyString(msg.user),
      }),
    },
    [MsgSetReactionsParamsTypeUrl]: {
      aminoType: MsgSetReactionsParamsAminoType,
      toAmino: (
        msg: MsgSetReactionsParams
      ): AminoMsgSetReactionsParams["value"] => ({
        subspace_id: omitZeroLong(msg.subspaceId),
        registered_reaction: convertRegisteredReactionValueParamsToAmino(
          msg.registeredReaction
        ),
        free_text: convertFreeTextValueParamsToAmino(msg.freeText),
        user: omitEmptyString(msg.user),
      }),
      fromAmino: (
        msg: AminoMsgSetReactionsParams["value"]
      ): MsgSetReactionsParams => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        registeredReaction: convertRegisteredReactionValueParamsFromAmino(
          msg.registered_reaction
        ),
        freeText: convertFreeTextValueParamsFromAmino(msg.free_text),
        user: fromOmitEmptyString(msg.user),
      }),
    },
  };
}

export default createReactionsConverters;
