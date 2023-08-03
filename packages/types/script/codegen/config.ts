import { TelescopeInput } from "@cosmology/telescope/types/types";
import { join } from "path";

export const OutputPath = join(__dirname, "/../../src");

export const TelescopeConfig: TelescopeInput = {
  protoDirs: [
    "proto-files",
    "proto"
  ],
  outPath: OutputPath,
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
          "cosmos.authz.module.*",
          "cosmos.bank.*",
          "cosmos.base.abci.*",
          "cosmos.base.node.*",
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
          "cosmos.gov.module.*",
          "cosmos.genutil.*",
          "cosmos.group.*",
          "cosmos.ics23.*",
          "cosmos.mint.*",
          "cosmos.msg.*",
          "cosmos.nft.*",
          "cosmos.orm.*",
          "cosmos.params.*",
          "cosmos.query.*",
          "cosmos.slashing.*",
          "cosmos.staking.*",
          "cosmos.tx.v1beta1",
          "cosmos.tx.config.*",
          "cosmos.upgrade.module.*",
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
    stargateClients: {
      enabled: false,
      includeCosmosDefaultTypes: false,
    },
    aminoEncoding: {
      enabled: true,
      useRecursiveV2encoding: true
    },
  }
}
