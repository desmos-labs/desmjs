/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as desmosPostsV3MsgsRegistry from "./posts/v3/msgs.registry";
import * as desmosProfilesV3MsgServerRegistry from "./profiles/v3/msg_server.registry";
import * as desmosReactionsV1MsgsRegistry from "./reactions/v1/msgs.registry";
import * as desmosRelationshipsV1MsgsRegistry from "./relationships/v1/msgs.registry";
import * as desmosReportsV1MsgsRegistry from "./reports/v1/msgs.registry";
import * as desmosSubspacesV3MsgsRegistry from "./subspaces/v3/msgs.registry";
import * as desmosPostsV3MsgsAmino from "./posts/v3/msgs.amino";
import * as desmosProfilesV3MsgServerAmino from "./profiles/v3/msg_server.amino";
import * as desmosReactionsV1MsgsAmino from "./reactions/v1/msgs.amino";
import * as desmosRelationshipsV1MsgsAmino from "./relationships/v1/msgs.amino";
import * as desmosReportsV1MsgsAmino from "./reports/v1/msgs.amino";
import * as desmosSubspacesV3MsgsAmino from "./subspaces/v3/msgs.amino";
export const desmosAminoConverters = {
  ...desmosPostsV3MsgsAmino.AminoConverter,
  ...desmosProfilesV3MsgServerAmino.AminoConverter,
  ...desmosReactionsV1MsgsAmino.AminoConverter,
  ...desmosRelationshipsV1MsgsAmino.AminoConverter,
  ...desmosReportsV1MsgsAmino.AminoConverter,
  ...desmosSubspacesV3MsgsAmino.AminoConverter,
};
export const desmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...desmosPostsV3MsgsRegistry.registry,
  ...desmosProfilesV3MsgServerRegistry.registry,
  ...desmosReactionsV1MsgsRegistry.registry,
  ...desmosRelationshipsV1MsgsRegistry.registry,
  ...desmosReportsV1MsgsRegistry.registry,
  ...desmosSubspacesV3MsgsRegistry.registry,
];
export const getSigningDesmosClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...desmosProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...desmosAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningDesmosClient = async ({
  rpcEndpoint,
  signer,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const { registry, aminoTypes } = getSigningDesmosClientOptions();
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry,
      aminoTypes,
    },
  );
  return client;
};
