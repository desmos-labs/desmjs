import {
  QueryClientImpl,
  QueryParamsResponse,
} from "@desmoslabs/desmjs-types/desmos/fees/v1/query";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface FeesExtension {
  readonly fees: {
    /**
     * Queries the module params.
     */
    readonly params: () => Promise<QueryParamsResponse>;
  };
}

export function setupFeesExtension(base: QueryClient): FeesExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    fees: {
      params: async () => queryService.Params({}),
    },
  };
}
