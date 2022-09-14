import { AminoMsg } from "@cosmjs/amino";
import { RegisteredReactionValueParams } from "@desmoslabs/desmjs-types/build/desmos/reactions/v1/models";
import { AminoFreeTextValueParams, AminoReaction } from "./types";

export interface AminoMsgAddReaction extends AminoMsg {
  readonly type: "desmos/MsgAddReaction";
  readonly value: {
    subspace_id: string;
    post_id: string;
    value: AminoReaction;
    user: string;
  };
}

export interface AminoMsgRemoveReaction extends AminoMsg {
  readonly type: "desmos/MsgRemoveReaction";
  readonly value: {
    subspace_id: string;
    post_id: string;
    reaction_id: number;
    user: string;
  };
}

export interface AminoMsgAddRegisteredReaction extends AminoMsg {
  readonly type: "desmos/MsgAddRegisteredReaction";
  readonly value: {
    subspace_id: string;
    shorthand_code: string;
    display_value: string;
    user: string;
  };
}

export interface AminoMsgEditRegisteredReaction extends AminoMsg {
  readonly type: "desmos/MsgEditRegisteredReaction";
  readonly value: {
    subspace_id: string;
    registered_reaction_id: number;
    shorthand_code: string;
    display_value: string;
    user: string;
  };
}

export interface AminoMsgRemoveRegisteredReaction extends AminoMsg {
  readonly type: "desmos/MsgRemoveRegisteredReaction";
  readonly value: {
    subspace_id: string;
    registered_reaction_id: number;
    user: string;
  };
}

export interface AminoMsgSetReactionsParams extends AminoMsg {
  readonly type: "desmos/MsgSetReactionsParams";
  readonly value: {
    subspace_id: string;
    registered_reaction?: RegisteredReactionValueParams;
    free_text?: AminoFreeTextValueParams;
    user: string;
  };
}
