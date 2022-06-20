import Long from "long";
import {
  QueryCirculatingResponse,
  QueryClientImpl,
  QueryTotalResponse,
} from "@desmoslabs/desmjs-types/desmos/supply/v1/query";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface SupplyExtension {
  readonly supply: {
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

export function setupSupplyExtension(base: QueryClient): SupplyExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    supply: {
      circulatingSupply: async (denom: string, dividerExponent?: Long) => {
        return queryService.Circulating({
          denom,
          dividerExponent: dividerExponent || Long.ZERO,
        });
      },
      totalSupply: async (denom: string, dividerExponent?: Long) => {
        return queryService.Total({
          denom,
          dividerExponent: dividerExponent || Long.ZERO,
        });
      },
    },
  };
}
