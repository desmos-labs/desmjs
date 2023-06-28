import { appendImport } from "../../../../patch-utils";

export function patchModule(outputPath: string) {
  // Fix import in desmos/subspaces/v3/msgs.ts
  const subspaces_msgs_import = `
  import { 
    MsgGrantAllowance, MsgGrantAllowanceResponse, 
    MsgRevokeAllowance, MsgRevokeAllowanceResponse
  } from "./msgs_feegrant";
  import { 
    MsgGrantTreasuryAuthorization, MsgGrantTreasuryAuthorizationResponse,
    MsgRevokeTreasuryAuthorization, MsgRevokeTreasuryAuthorizationResponse
  } from "./msgs_treasury";
  `;
  const subspaces_msgs_file = `${outputPath}/desmos/subspaces/v3/msgs.ts`;
  appendImport(subspaces_msgs_file, subspaces_msgs_import);
}
