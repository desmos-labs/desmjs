// Auto-generated, see scripts/codegen/patches/index.ts!

import { Any } from "./google/protobuf/any";
import { AminoMsg } from "@cosmjs/amino";

export interface AminoConverter {
  fromAny(any: Any): AminoMsg;
  toAny(aminoMsg: AminoMsg): Any;
}
