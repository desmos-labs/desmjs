#!/usr/bin/env node

const { join } = require('path');
const { writeSync, writeFileSync, appendFileSync, readFileSync, openSync, close } = require('fs');
const telescope = require('@osmonauts/telescope').default;

const outPath = join(__dirname, '/../src');

function appendImport(file, content) {
  // Read the file contents
  const data = readFileSync(file);
  // Search the last import statement
  const last_import_index = data.lastIndexOf("import");
  // Search where the import statement ends
  const append_start = data.indexOf(';', last_import_index);

  // Open the file
  const fd = openSync(file, 'w+');
  // Write the original imports
  writeSync(fd, data, 0, append_start);
  // Write the new import statements.
  appendFileSync(fd, content, {
    encoding: 'utf8',
  })
  // Append the old content.
  writeSync(fd, data, append_start, data.length - append_start);
  // Close the file.
  close(fd);
}

telescope({
  protoDirs: [
    'proto-files/proto',
    'proto-files/third_party/proto',
    'proto',
  ],
  outPath: outPath,
  options: {
    logLevel: 0,
    useSDKTypes: false,
    tsDisable: {
      disableAll: false
    },
    eslintDisable: {
      disableAll: true
    },
    bundle: {
      enabled: false
    },
    prototypes: {
      includePackageVar: true,
      methods: {
        // There are users who need those functions. CosmJS does not need them directly.
        // See https://github.com/cosmos/cosmjs/pull/1329
        fromJSON: true,
        toJSON: true,
      },
      typingsFormat: {
        useDeepPartial: true,
        useExact: true,
        timestamp: 'timestamp',
        duration: 'duration'
      }
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      inline: true,
      extensions: false,
      camelCase: false,
      enabledServices: [
        'Msg',
        'Query',
        'Service',
        'ReflectionService',
        'ABCIApplication'
      ]
    },
    aminoEncoding: {
      enabled: false
    }
  }
}).then(() => {
  // Fix import in desmos/profiles/v3/msg_server.ts
  const msg_server_import = `
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
  `
  const profiles_msg_server_file = `${outPath}/desmos/profiles/v3/msg_server.ts`;
  appendImport(profiles_msg_server_file, msg_server_import);

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
  const profiles_query_file = `${outPath}/desmos/profiles/v3/query.ts`;
  appendImport(profiles_query_file, profiles_query_import);

  // Create index.ts
  const index_ts = `
    // Auto-generated, see scripts/codegen.js!

    // Exports we want to provide at the root of the "@desmoslabs/desmjs-types" package

    export { DeepPartial, Exact } from "./helpers";
    `;
  writeFileSync(`${outPath}/index.ts`, index_ts);

  console.log('✨ All Done!');
}, (e) => {
  console.error(e);
  process.exit(1);
});
