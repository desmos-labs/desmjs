import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryClientImpl } from "cosmjs-types/cosmos/authz/v1beta1/query";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Grant } from "cosmjs-types/cosmos/authz/v1beta1/authz";

/**
 * Represents the Authz extension to be used on QueryClient instances.
 */
export interface AuthzV1Beta1Extension {
  readonly authz: {
    readonly grants: (
      granter: string,
      grantee: string,
      msgTypeUrl?: string,
      pagination?: PageRequest,
    ) => Promise<Grant[] | undefined>;
  };
}

/**
 * Setups the Authz extension on the given base QueryClient.
 * @param base
 */
export function setupAuthzV1Beta1Extension(
  base: QueryClient,
): AuthzV1Beta1Extension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    authz: {
      grants: async (
        granter: string,
        grantee: string,
        msgTypeUrl?: string,
        pagination?: PageRequest,
      ) => {
        try {
          const { grants } = await queryService.Grants({
            granter,
            grantee,
            msgTypeUrl: msgTypeUrl || "",
            pagination,
          });
          return grants;
        } catch (e) {
          console.error(e);
          return undefined;
        }
      },
    },
  };
}
