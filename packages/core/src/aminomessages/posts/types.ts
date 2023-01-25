import { AminoMsg } from "@cosmjs/amino";
import {
  Poll_ProvidedAnswer,
  PollTallyResults,
  PostReferenceType,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/models";
import { MediaAminoType, PollAminoType } from "../../const";

export interface AminoTextTag {
  start: string;
  end: string;
  tag: string;
}

export interface AminoEntities {
  readonly hashtags: AminoTextTag[];
  readonly mentions: AminoTextTag[];
  readonly urls: AminoUrl[];
}

export interface AminoUrl {
  readonly start: string;
  readonly end: string;
  readonly url: string;
  readonly display_url: string;
}

export interface AminoAttachment extends AminoMsg {}

export interface AminoPoll extends AminoAttachment {
  readonly type: typeof PollAminoType;
  readonly value: {
    question: string;
    provided_answers: Poll_ProvidedAnswer[];
    end_date?: Date;
    allows_multiple_answers: boolean;
    allows_answer_edits: boolean;
    final_tally_results?: PollTallyResults;
  };
}

export interface AminoMedia extends AminoAttachment {
  readonly type: typeof MediaAminoType;
  readonly value: {
    uri: string;
    mime_type: string;
  };
}

export interface AminoPostReference {
  readonly type: PostReferenceType;
  readonly post_id: string;
  readonly position: string;
}
