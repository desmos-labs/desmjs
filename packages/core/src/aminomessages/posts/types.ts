import { Long } from "long";
import { AminoMsg } from "@cosmjs/amino";
import {
  Poll_ProvidedAnswer,
  PollTallyResults,
  PostReferenceType,
  TextTag,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/models";

export interface AminoEntities {
  readonly hashtags: TextTag[];
  readonly mentions: TextTag[];
  readonly urls: AminoUrl[];
}

export interface AminoUrl {
  readonly start: Long;
  readonly end: Long;
  readonly url: string;
  readonly display_url: string;
}

export interface AminoAttachment extends AminoMsg {}

export interface AminoPoll extends AminoAttachment {
  readonly type: "desmos/Poll";
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
  readonly type: "desmos/Media";
  readonly value: {
    uri: string;
    mime_type: string;
  };
}

export interface AminoPostReference {
  readonly type: PostReferenceType;
  readonly post_id: Long;
  readonly position: Long;
}
