import { AminoMsg } from "@cosmjs/amino";
import {
  FreeTextValueAminoType,
  RegisteredReactionValueAminoType,
} from "../../const";

export interface AminoReaction extends AminoMsg {}

export interface AminoRegisteredReaction extends AminoReaction {
  readonly type: typeof RegisteredReactionValueAminoType;
  readonly value: {
    registered_reaction_id: number;
  };
}

export interface AminoFreeTextReaction extends AminoReaction {
  readonly type: typeof FreeTextValueAminoType;
  readonly value: {
    text: string;
  };
}

export interface AminoRegisteredReactionValueParams {
  readonly enabled: boolean | undefined; // Undefined if false
}

export interface AminoFreeTextValueParams {
  readonly enabled: boolean | undefined; // Undefined if false
  readonly max_length: number | undefined; // Undefined if zero
  readonly reg_ex: string | undefined; // Undefined if empty
}
