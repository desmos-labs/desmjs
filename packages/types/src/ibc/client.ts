/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as ibcCoreClientV1TxRegistry from "./core/client/v1/tx.registry";
import * as ibcCoreClientV1TxAmino from "./core/client/v1/tx.amino";
export const ibcAminoConverters = {
  ...ibcCoreClientV1TxAmino.AminoConverter,
};
export const ibcProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...ibcCoreClientV1TxRegistry.registry,
];
export const getSigningIbcClientOptions = (): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...ibcProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...ibcAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getSigningIbcClient = async ({
  rpcEndpoint,
  signer,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
}) => {
  const { registry, aminoTypes } = getSigningIbcClientOptions();
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
