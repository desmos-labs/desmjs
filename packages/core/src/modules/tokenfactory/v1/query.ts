import {
  QueryClientImpl,
  QueryParamsResponse,
  QuerySubspaceDenomsResponse,
} from "@desmoslabs/desmjs-types/desmos/tokenfactory/v1/query";
import Long from "long";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface TokenFactoryV1Extension {
  readonly tokenFactoryV1: {
    /**
     * Fetch all the denominations created from a subspace.
     */
    readonly subspaceDenoms: (
      subspaceId: Long,
    ) => Promise<QuerySubspaceDenomsResponse>;

    /**
     * Query the parameters of the tokenfactory module.
     */
    readonly params: () => Promise<QueryParamsResponse>;
  };
}

export function setupTokenFactoryV1Extension(
  base: QueryClient,
): TokenFactoryV1Extension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    tokenFactoryV1: {
      subspaceDenoms: async (subspaceId: Long) =>
        queryService.SubspaceDenoms({
          subspaceId,
        }),

      params: async () => queryService.Params(),
    },
  };
}
