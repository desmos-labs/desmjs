import { patchModule as patchGovV1 } from "./cosmos/gov/v1";
import { patchModule as patchProfilesV3 } from "./desmos/profiles/v3";
import { patchModule as patchSubspacesV3 } from "./desmos/subspaces/v3";
import { patchModule as patchPostsV3 } from "./desmos/posts/v3";
import { patchModule as patchGoogleProtobuf } from "./google/protobuf";
import * as fs from "fs";

export async function patchModules(outputPath: string): Promise<void> {
  await patchGovV1(outputPath);
  patchProfilesV3(outputPath);
  patchSubspacesV3(outputPath);
  await patchPostsV3(outputPath);
  await patchGoogleProtobuf(outputPath);

  // Create index.ts
  const index_ts = `
    // Auto-generated, see scripts/codegen/patches/index.ts!

    // Exports we want to provide at the root of the "@desmoslabs/desmjs-types" package

    export { DeepPartial, Exact } from "./helpers";
    `;
  fs.writeFileSync(`${outputPath}/index.ts`, index_ts);

  // Create aminoconverter.ts
  const aminoconverter = `
    // Auto-generated, see scripts/codegen/patches/index.ts!

    import { Any } from "./google/protobuf/any";
    import { AminoMsg } from "@cosmjs/amino";

    export interface AminoConverter {
      fromAny(any: Any): AminoMsg
      toAny(aminoMsg: AminoMsg): Any
    }
    `;
  fs.writeFileSync(`${outputPath}/aminoconverter.ts`, aminoconverter);
}
