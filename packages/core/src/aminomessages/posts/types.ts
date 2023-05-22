import { AminoMsg } from "@cosmjs/amino";
import { PostReferenceType } from "@desmoslabs/desmjs-types/desmos/posts/v3/models";
import { MediaAminoType, PollAminoType } from "../../const";

export interface AminoTextTag {
  start: string;
  end: string;
  tag: string;
}

export interface AminoEntities {
  readonly hashtags: AminoTextTag[] | null; // Null if empty
  readonly mentions: AminoTextTag[] | null; // Null if empty
  readonly urls: AminoUrl[] | null; // Null if empty
}

export interface AminoUrl {
  readonly start: string | undefined; // Undefined if zero
  readonly end: string | undefined; // Undefined if zero
  readonly url: string | undefined; // Undefined if empty
  readonly display_url: string | undefined; // Undefined if empty
}

export interface AminoAttachment {
  readonly subspace_id: string | undefined;
  readonly post_id: string | undefined;
  readonly id: number | undefined;
  readonly content: AminoContent | undefined;
}

export interface AminoPollProvidedAnswer {
  readonly text: string | undefined; // Undefined if empty
  readonly attachments: AminoContent[] | null; // Undefined if empty
}

export interface AminoPollTallyResultAnswerResult {
  readonly answer_index: number;
  readonly votes: string;
}

export interface AminoPollTallyResults {
  readonly results: AminoPollTallyResultAnswerResult[];
}

export interface AminoContent extends AminoMsg {}

export interface AminoPoll extends AminoContent {
  readonly type: typeof PollAminoType;
  readonly value: {
    question: string;
    provided_answers: AminoPollProvidedAnswer[];
    end_date?: string;
    allows_multiple_answers: boolean | undefined; // Undefined if false
    allows_answer_edits: boolean | undefined; // Undefined if false
    final_tally_results?: AminoPollTallyResults;
  };
}

export interface AminoMedia extends AminoContent {
  readonly type: typeof MediaAminoType;
  readonly value: {
    uri: string;
    mime_type: string;
  };
}

export interface AminoPostReference {
  readonly type: PostReferenceType;
  readonly post_id: string | undefined;
  readonly position: string | undefined;
}
