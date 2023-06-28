import telescope from "@osmonauts/telescope";
import { OutputPath, TelescopeConfig } from "./config";
import { patchModules } from "./patches";

telescope(TelescopeConfig)
  .then(() => patchModules(OutputPath))
  .then(async () => console.log("✨ All Done!"), (e: any) => {
  console.error(e);
  process.exit(1);
});
