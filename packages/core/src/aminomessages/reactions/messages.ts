import { AminoMsg } from "@cosmjs/amino";
import { RegisteredReactionValueParams } from "@desmoslabs/desmjs-types/build/desmos/reactions/v1/models";
import { AminoFreeTextValueParams, AminoReaction } from "./types";
import {
  MsgAddReactionAminoType,
  MsgAddRegisteredReactionAminoType,
  MsgEditRegisteredReactionAminoType,
  MsgRemoveReactionAminoType,
  MsgRemoveRegisteredReactionAminoType,
  MsgSetReactionsParamsAminoType,
} from "../../const";

export interface AminoMsgAddReaction extends AminoMsg {
  readonly type: typeof MsgAddReactionAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    post_id: string | undefined; // Undefined if zero
    value: AminoReaction;
    user: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgRemoveReaction extends AminoMsg {
  readonly type: typeof MsgRemoveReactionAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    post_id: string | undefined; // Undefined if zero
    reaction_id: number | undefined; // Undefined if zero
    user: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgAddRegisteredReaction extends AminoMsg {
  readonly type: typeof MsgAddRegisteredReactionAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    shorthand_code: string | undefined; // Undefined if empty
    display_value: string | undefined; // Undefined if empty
    user: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgEditRegisteredReaction extends AminoMsg {
  readonly type: typeof MsgEditRegisteredReactionAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    registered_reaction_id: number | undefined; // Undefined if zero
    shorthand_code: string | undefined; // Undefined if empty
    display_value: string | undefined; // Undefined if empty
    user: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgRemoveRegisteredReaction extends AminoMsg {
  readonly type: typeof MsgRemoveRegisteredReactionAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    registered_reaction_id: number | undefined; // Undefined if zero
    user: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgSetReactionsParams extends AminoMsg {
  readonly type: typeof MsgSetReactionsParamsAminoType;
  readonly value: {
    subspace_id: string;
    registered_reaction?: RegisteredReactionValueParams;
    free_text?: AminoFreeTextValueParams;
    user: string;
  };
}
