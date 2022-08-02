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
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/models";
import {
  AminoFreeTextReaction,
  AminoFreeTextValueParams,
  AminoReaction,
  AminoRegisteredReaction,
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

export const reactionValueConverters: AminoConverters = {
  "/desmos.reactions.v1.RegisteredReactionValue": {
    aminoType: "desmos/RegisteredReactionValue",
    toAmino: (msg: Any): AminoRegisteredReaction["value"] => {
      const reaction = RegisteredReactionValue.decode(msg.value);
      return {
        registered_reaction_id: reaction.registeredReactionId,
      };
    },
    fromAmino: (msg: AminoRegisteredReaction["value"]): Any =>
      Any.fromPartial({
        typeUrl: "/desmos.reactions.v1.RegisteredReactionValue",
        value: RegisteredReactionValue.encode(
          RegisteredReactionValue.fromPartial({
            registeredReactionId: msg.registered_reaction_id,
          })
        ).finish(),
      }),
  },
  "/desmos.reactions.v1.FreeTextValue": {
    aminoType: "desmos/FreeTextValue",
    toAmino: (msg: Any): AminoFreeTextReaction["value"] => {
      const reaction = FreeTextValue.decode(msg.value);
      return {
        text: reaction.text,
      };
    },
    fromAmino: (msg: AminoFreeTextReaction["value"]): Any =>
      Any.fromPartial({
        typeUrl: "/desmos.reactions.v1.FreeTextValue",
        value: FreeTextValue.encode(
          FreeTextValue.fromPartial({
            text: msg.text,
          })
        ).finish(),
      }),
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

export function convertFreeTextValueParamsToAmino(
  params: FreeTextValueParams
): AminoFreeTextValueParams {
  return {
    enabled: params.enabled,
    max_length: params.maxLength,
    reg_ex: params.regEx,
  };
}

export function convertFreeTextValueParamsFromAmino(
  params: AminoFreeTextValueParams
): FreeTextValueParams {
  return {
    enabled: params.enabled,
    maxLength: params.max_length,
    regEx: params.reg_ex,
  };
}

/**
 * Creates all the Amino converters for the reactions messages.
 */
export function createReactionsConverters(): AminoConverters {
  return {
    "/desmos.reactions.v1.MsgAddReaction": {
      aminoType: "desmos/MsgAddReaction",
      toAmino: (msg: MsgAddReaction): AminoMsgAddReaction["value"] => {
        assertDefinedAndNotNull(msg.value, "reaction value not defined");
        return {
          subspace_id: msg.subspaceId,
          post_id: msg.postId,
          value: convertReactionValueToAmino(msg.value),
          user: msg.user,
        };
      },
      fromAmino: (msg: AminoMsgAddReaction["value"]): MsgAddReaction => ({
        subspaceId: msg.subspace_id,
        postId: msg.post_id,
        value: convertReactionFromAmino(msg.value),
        user: msg.user,
      }),
    },
    "/desmos.reactions.v1.MsgRemoveReaction": {
      aminoType: "desmos/MsgRemoveReaction",
      toAmino: (msg: MsgRemoveReaction): AminoMsgRemoveReaction["value"] => ({
        subspace_id: msg.subspaceId,
        post_id: msg.postId,
        reaction_id: msg.reactionId,
        user: msg.user,
      }),
      fromAmino: (msg: AminoMsgRemoveReaction["value"]): MsgRemoveReaction => ({
        subspaceId: msg.subspace_id,
        postId: msg.post_id,
        reactionId: msg.reaction_id,
        user: msg.user,
      }),
    },
    "/desmos.reactions.v1.MsgAddRegisteredReaction": {
      aminoType: "desmos/MsgAddRegisteredReaction",
      toAmino: (
        msg: MsgAddRegisteredReaction
      ): AminoMsgAddRegisteredReaction["value"] => ({
        subspace_id: msg.subspaceId,
        shorthand_code: msg.shorthandCode,
        display_value: msg.displayValue,
        user: msg.user,
      }),
      fromAmino: (
        msg: AminoMsgAddRegisteredReaction["value"]
      ): MsgAddRegisteredReaction => ({
        subspaceId: msg.subspace_id,
        shorthandCode: msg.shorthand_code,
        displayValue: msg.display_value,
        user: msg.user,
      }),
    },
    "/desmos.reactions.v1.MsgEditRegisteredReaction": {
      aminoType: "desmos/MsgEditRegisteredReaction",
      toAmino: (
        msg: MsgEditRegisteredReaction
      ): AminoMsgEditRegisteredReaction["value"] => ({
        subspace_id: msg.subspaceId,
        registered_reaction_id: msg.registeredReactionId,
        shorthand_code: msg.shorthandCode,
        display_value: msg.displayValue,
        user: msg.user,
      }),
      fromAmino: (
        msg: AminoMsgEditRegisteredReaction["value"]
      ): MsgEditRegisteredReaction => ({
        subspaceId: msg.subspace_id,
        registeredReactionId: msg.registered_reaction_id,
        shorthandCode: msg.shorthand_code,
        displayValue: msg.display_value,
        user: msg.user,
      }),
    },
    "/desmos.reactions.v1.MsgRemoveRegisteredReaction": {
      aminoType: "desmos/MsgRemoveRegisteredReaction",
      toAmino: (
        msg: MsgRemoveRegisteredReaction
      ): AminoMsgRemoveRegisteredReaction["value"] => ({
        subspace_id: msg.subspaceId,
        registered_reaction_id: msg.registeredReactionId,
        user: msg.user,
      }),
      fromAmino: (
        msg: AminoMsgRemoveRegisteredReaction["value"]
      ): MsgRemoveRegisteredReaction => ({
        subspaceId: msg.subspace_id,
        registeredReactionId: msg.registered_reaction_id,
        user: msg.user,
      }),
    },
    "/desmos.reactions.v1.MsgSetReactionsParams": {
      aminoType: "desmos/MsgSetReactionsParams",
      toAmino: (
        msg: MsgSetReactionsParams
      ): AminoMsgSetReactionsParams["value"] => ({
        subspace_id: msg.subspaceId,
        registered_reaction: msg.registeredReaction,
        free_text: msg.freeText
          ? convertFreeTextValueParamsToAmino(msg.freeText)
          : undefined,
        user: msg.user,
      }),
      fromAmino: (
        msg: AminoMsgSetReactionsParams["value"]
      ): MsgSetReactionsParams => ({
        subspaceId: msg.subspace_id,
        registeredReaction: msg.registered_reaction,
        freeText: msg.free_text
          ? convertFreeTextValueParamsFromAmino(msg.free_text)
          : undefined,
        user: msg.user,
      }),
    },
  };
}

export default createReactionsConverters;
