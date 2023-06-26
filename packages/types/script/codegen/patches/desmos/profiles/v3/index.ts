import { appendImport } from "../../../../patch-utils";

export function patchModule(outputPath: string) {
  // Fix import in desmos/profiles/v3/msg_server.ts
  const profiles_msg_server_import = `
  import { MsgDeleteProfile, MsgDeleteProfileResponse, MsgSaveProfile, MsgSaveProfileResponse } from "./msgs_profile";
  import {
    MsgAcceptDTagTransferRequest,
    MsgAcceptDTagTransferRequestResponse,
    MsgCancelDTagTransferRequest,
    MsgCancelDTagTransferRequestResponse,
    MsgRefuseDTagTransferRequest,
    MsgRefuseDTagTransferRequestResponse,
    MsgRequestDTagTransfer,
    MsgRequestDTagTransferResponse
  } from "./msgs_dtag_requests";
  import {
    MsgLinkChainAccount,
    MsgLinkChainAccountResponse,
    MsgSetDefaultExternalAddress,
    MsgSetDefaultExternalAddressResponse,
    MsgUnlinkChainAccount,
    MsgUnlinkChainAccountResponse
  } from "./msgs_chain_links";
  import {
    MsgLinkApplication,
    MsgLinkApplicationResponse,
    MsgUnlinkApplication,
    MsgUnlinkApplicationResponse
  } from "./msgs_app_links";
  import {
    MsgUpdateParams,
    MsgUpdateParamsResponse
  } from "./msgs_params";
  `;
  const profiles_msg_server_file = `${outputPath}/desmos/profiles/v3/msg_server.ts`;
  appendImport(profiles_msg_server_file, profiles_msg_server_import);

  // Fix import in desmos/profiles/v3/query.ts
  const profiles_query_import = `
  import { QueryProfileRequest, QueryProfileResponse } from "./query_profile";
  import {
    QueryIncomingDTagTransferRequestsRequest,
    QueryIncomingDTagTransferRequestsResponse
  } from "./query_dtag_requests";
  import {
    QueryChainLinkOwnersRequest,
    QueryChainLinkOwnersResponse,
    QueryChainLinksRequest, QueryChainLinksResponse,
    QueryDefaultExternalAddressesRequest, QueryDefaultExternalAddressesResponse
  } from "./query_chain_links";
  import {
    QueryApplicationLinkByClientIDRequest,
    QueryApplicationLinkByClientIDResponse,
    QueryApplicationLinkOwnersRequest,
    QueryApplicationLinkOwnersResponse,
    QueryApplicationLinksRequest,
    QueryApplicationLinksResponse
  } from "./query_app_links";
  import { QueryParamsRequest, QueryParamsResponse } from "./query_params";
  `;
  const profiles_query_file = `${outputPath}/desmos/profiles/v3/query.ts`;
  appendImport(profiles_query_file, profiles_query_import);
}
