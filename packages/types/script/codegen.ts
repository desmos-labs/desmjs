import { join } from "path";
import * as fs from "fs";
import telescope from "@osmonauts/telescope";

const outPath = join(__dirname, "/../src");

interface PatchFunction {
  readonly functionName: string;
  readonly newDefinition: string;
}

function appendImport(file: string, content: string) {
  // Read the file contents
  const data = fs.readFileSync(file);
  // Search the last import statement
  const last_import_index = data.lastIndexOf("import");
  if (last_import_index === -1) {
    return;
  }

  // Search where the import statement ends
  const append_start = data.indexOf(";", last_import_index);

  // Open the file
  const fd = fs.openSync(file, "w+");
  // Write the original imports
  fs.writeSync(fd, data, 0, append_start);
  // Write the new import statements.
  fs.appendFileSync(fd, content, {
    encoding: "utf8"
  });
  // Append the old content.
  fs.writeSync(fd, data, append_start, data.length - append_start);
  // Close the file.
  fs.close(fd);
}

function patchFunctions(file: string, definitions: PatchFunction[]) {
  fs.readFile(file, "utf8", (err: any, data: string) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    let content = data;

    for (let definition of definitions) {
      const { newDefinition, functionName } = definition;
      const functionStart = content.indexOf(functionName);

      if (functionStart === -1) {
        console.error(`Can't find function ${functionName} in file ${file}`);
        return;
      }

      const functionEnd = content.indexOf("},", functionStart);

      const beforeString = content.substring(0, functionStart);
      const afterString = content.substring(functionEnd + 2);

      content = beforeString + newDefinition + afterString;
    }

    fs.writeFile(file, content, "utf8", (err: any) => {
      if (err) {
        console.error("Error writing to file:", err);
      }
    });
  });
}

telescope({
  protoDirs: [
    "proto-files/proto",
    "proto"
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
        toJSON: true
      },
      typingsFormat: {
        useDeepPartial: true,
        useExact: true,
        timestamp: "timestamp",
        duration: "duration"
      },
      excluded: {
        packages: [
          // Ignore legacy versions
          "desmos.posts.v1",
          "desmos.posts.v2",
          "desmos.profiles.v1beta1",
          "desmos.profiles.v1",
          "desmos.profiles.v2",
          "desmos.subspaces.v1",
          "desmos.subspaces.v2.*",

          "desmos.profiles.v3.client",
          "desmos.reactions.v1.client",

          // Ignore unused cosmos deps
          "cosmos.app.*",
          "cosmos.auth.*",
          "cosmos.bank.*",
          "cosmos.base.abci.*",
          "cosmos.base.kv.*",
          "cosmos.base.reflection.*",
          "cosmos.base.snapshots.*",
          "cosmos.base.store.*",
          "cosmos.base.tendermint.*",
          "cosmos.base.reflection.*",
          "cosmos.capability.*",
          "cosmos.crisis.*",
          "cosmos.crypto.ed25519",
          "cosmos.crypto.hd.*",
          "cosmos.crypto.keyring.*",
          "cosmos.crypto.multisig",
          "cosmos.crypto.secp256k1",
          "cosmos.crypto.secp256r1",
          "cosmos.distribution.*",
          "cosmos.evidence.*",
          "cosmos.feegrant.*",
          "cosmos.genutil.*",
          "cosmos.group.*",
          "cosmos.mint.*",
          "cosmos.msg.*",
          "cosmos.nft.*",
          "cosmos.orm.*",
          "cosmos.params.*",
          "cosmos.slashing.*",
          "cosmos.staking.*",
          "cosmos.tx.v1beta1",
          "cosmos.vesting.*",

          // Ignore unused ibc deps
          "ibc.applications.*",
          "ibc.core.channel.*",
          "ibc.core.commitment.*",
          "ibc.core.connection.*",
          "ibc.core.port.*",
          "ibc.core.types.*",
          "ibc.lightclients.*",

          // Ignore unused tendermint deps
          "tendermint.p2p",

          // Ignore unused tool deps
          "amino",

          // Ignore google packages
          "google.api",

          // Ignore gogoproto package
          "gogoproto"
        ]
      }
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: false
    },
    stargateClients: {
      enabled: false,
      includeCosmosDefaultTypes: false,
    },
    aminoEncoding: {
      enabled: true,
      useRecursiveV2encoding: true
    },
  }
}).then(() => {
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
  const profiles_msg_server_file = `${outPath}/desmos/profiles/v3/msg_server.ts`;
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
  const profiles_query_file = `${outPath}/desmos/profiles/v3/query.ts`;
  appendImport(profiles_query_file, profiles_query_import);

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
  const subspaces_msgs_file = `${outPath}/desmos/subspaces/v3/msgs.ts`;
  appendImport(subspaces_msgs_file, subspaces_msgs_import);

  // Create index.ts
  const index_ts = `
    // Auto-generated, see scripts/codegen.js!

    // Exports we want to provide at the root of the "@desmoslabs/desmjs-types" package

    export { DeepPartial, Exact } from "./helpers";
    `;
  fs.writeFileSync(`${outPath}/index.ts`, index_ts);

  // Patch timestamp fromAmino and toAmino
  const timestampFile = `${outPath}/google/protobuf/timestamp.ts`;
  patchFunctions(timestampFile, [
    {
      functionName: "toAmino",
      newDefinition: "toAmino(message: Timestamp): TimestampAmino {\n" +
        "    const millisecondsSinceEpoch = message.seconds.multiply(1000).toNumber();\n" +
        "    const nanosFraction = Math.round(message.nanos / 1000000)\n" +
        "    return new Date(millisecondsSinceEpoch + nanosFraction).toISOString();\n" +
        "  },"
    },
    {
      functionName: "fromAmino",
      newDefinition: "fromAmino(object: TimestampAmino): Timestamp {\n" +
        "    const data = new Date(object);\n" +
        "    const seconds = Math.trunc(data.getTime() / 1000);\n" +
        "    const nanos = (data.getTime() % 1000) * 1000000;\n" +
        "    return {\n" +
        "      seconds: Long.fromNumber(seconds),\n" +
        "      nanos,\n" +
        "    };\n" +
        "  },"
    }
  ]);

  const anyFile = `${outPath}/google/protobuf/any.ts`;
  patchFunctions(anyFile, [
    {
      functionName: "toAmino",
      newDefinition: "toAmino(message: Any): AnyAmino {\n" +
        "   return {\n" +
        "     type: message.typeUrl,\n" +
        "     value: message.value,\n" +
        "   }\n" +
        "  },"
    },
    {
      functionName: "fromAmino",
      newDefinition: "fromAmino(object: AnyAmino): Any {\n" +
        "    return {\n" +
        "      typeUrl: object.type,\n" +
        "      value: object.value,\n" +
        "    };\n" +
        "  },"
    }
  ]);

  console.log("✨ All Done!");
}, (e: any) => {
  console.error(e);
  process.exit(1);
});
