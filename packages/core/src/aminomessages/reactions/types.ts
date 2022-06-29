import { AminoMsg } from "@cosmjs/amino";

export interface AminoReaction extends AminoMsg {}

export interface AminoRegisteredReaction extends AminoReaction {
  readonly type: "desmos/RegisteredReactionValue";
  readonly value: {
    registered_reaction_id: number;
  };
}

export interface AminoFreeTextReaction extends AminoReaction {
  readonly type: "desmos/FreeTextValue";
  readonly value: {
    text: string;
  };
}

export interface AminoFreeTextValueParams {
  readonly enabled: boolean;
  readonly max_length: number;
  readonly reg_ex: string;
}
