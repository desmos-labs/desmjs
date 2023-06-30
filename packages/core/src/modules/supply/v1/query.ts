import Long from "long";
import {
  QueryCirculatingResponse,
  QueryClientImpl,
  QueryTotalResponse,
} from "@desmoslabs/desmjs-types/desmos/supply/v1/query";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface SupplyV1Extension {
  readonly supplyV1: {
    /**
     * Queries the circulating supply for the given denom, with the optional divider exponent.
     */
    readonly circulatingSupply: (
      denom: string,
      dividerExponent?: Long
    ) => Promise<QueryCirculatingResponse>;

    /**
     * Queries the total supply for the given denom, with the optional divider exponent.
     */
    readonly totalSupply: (
      denom: string,
      dividerExponent?: Long
    ) => Promise<QueryTotalResponse>;
  };
}

export function setupSupplyV1Extension(base: QueryClient): SupplyV1Extension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    supplyV1: {
      circulatingSupply: async (denom: string, dividerExponent?: Long) =>
        queryService.Circulating({
          denom,
          dividerExponent: dividerExponent || Long.ZERO,
        }),
      totalSupply: async (denom: string, dividerExponent?: Long) =>
        queryService.Total({
          denom,
          dividerExponent: dividerExponent || Long.ZERO,
        }),
    },
  };
}
