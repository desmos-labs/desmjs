import { AminoConverter } from "@cosmjs/stargate";

export function isAminoConverter(
  converter: [string, AminoConverter | "not_supported_by_chain"]
): converter is [string, AminoConverter] {
  return typeof converter[1] !== "string";
}

export default isAminoConverter;
