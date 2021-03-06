import { Any } from "cosmjs-types/google/protobuf/any";
import {
  Account,
  accountFromAny,
  createProtobufRpcClient,
  QueryClient,
} from "@cosmjs/stargate";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryIncomingDTagTransferRequestsResponse } from "@desmoslabs/desmjs-types/desmos/profiles/v2/query_dtag_requests";
import {
  QueryChainLinkOwnersResponse,
  QueryChainLinksResponse,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/query_chain_links";
import {
  QueryApplicationLinksResponse,
  QueryApplicationLinkByClientIDResponse,
  QueryApplicationLinkOwnersResponse,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/query_app_links";
import { QueryClientImpl } from "@desmoslabs/desmjs-types/desmos/profiles/v2/query";
import { Profile } from "@desmoslabs/desmjs-types/desmos/profiles/v2/models_profile";
import { assert } from "@cosmjs/utils";
import { QueryParamsResponse } from "@desmoslabs/desmjs-types/desmos/profiles/v2/query_params";

export interface ProfilesExtension {
  readonly profiles: {
    /**
     * Queries the profile of a specific user given their DTag or address.
     * If the queried user does not have a profile, the returned response will
     * contain a null profile.
     */
    readonly profile: (user: string) => Promise<Profile | null>;
    /**
     * Queries all the DTag transfers requests that have been made towards the user with the given address.
     */
    readonly incomingDTagTransferRequests: (
      address: string,
      pagination?: PageRequest
    ) => Promise<QueryIncomingDTagTransferRequestsResponse>;
    /**
     * Queries chain links for the given user.
     */
    readonly chainLinks: (
      user?: string,
      chainName?: string,
      target?: string,
      pagination?: PageRequest
    ) => Promise<QueryChainLinksResponse>;
    /**
     * Queries chain link owners for an optional chain name and user.
     * The specified target will be used only if a chain name is specified as well.
     */
    readonly chainLinkOwners: (
      chainName?: string,
      target?: string,
      pagination?: PageRequest
    ) => Promise<QueryChainLinkOwnersResponse>;
    /**
     * Queries a single application link for a given user,
     * searching via the application name and username.
     */
    readonly applicationLinks: (
      user?: string,
      application?: string,
      username?: string,
      pagination?: PageRequest
    ) => Promise<QueryApplicationLinksResponse>;
    /**
     * Queries a single application link for a given
     * client id.
     */
    readonly applicationLinkByClientID: (
      clientId: string
    ) => Promise<QueryApplicationLinkByClientIDResponse>;
    /**
     * Queries the application link owners with an optional application and username.
     * The username will be used only if the application is specified as well.
     */
    readonly applicationLinkOwners: (
      application?: string,
      username?: string,
      pagination?: PageRequest
    ) => Promise<QueryApplicationLinkOwnersResponse>;
    /**
     * Queries the module parameters.
     */
    readonly params: () => Promise<QueryParamsResponse>;
  };
}

export function setupProfilesExtension(base: QueryClient): ProfilesExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    profiles: {
      profile: async (user: string) => {
        const { profile } = await queryService.Profile({ user });
        return profile ? Profile.decode(profile.value) : null;
      },
      incomingDTagTransferRequests: async (
        receiver: string,
        pagination?: PageRequest
      ) => {
        return queryService.IncomingDTagTransferRequests({
          receiver,
          pagination,
        });
      },
      chainLinks: async (
        user?: string,
        chainName?: string,
        target?: string,
        pagination?: PageRequest
      ) => {
        return queryService.ChainLinks({
          user: user || "",
          chainName: chainName || "",
          target: target || "",
          pagination,
        });
      },
      chainLinkOwners: async (
        chainName?: string,
        target?: string,
        pagination?: PageRequest
      ) => {
        return queryService.ChainLinkOwners({
          chainName: chainName || "",
          target: target || "",
          pagination,
        });
      },
      applicationLinks: async (
        user?: string,
        application?: string,
        username?: string,
        pagination?: PageRequest
      ) => {
        return queryService.ApplicationLinks({
          user: user || "",
          application: application || "",
          username: username || "",
          pagination,
        });
      },
      applicationLinkByClientID: async (clientId: string) => {
        return queryService.ApplicationLinkByClientID({
          clientId,
        });
      },
      applicationLinkOwners: async (
        application?: string,
        username?: string,
        pagination?: PageRequest
      ) => {
        return queryService.ApplicationLinkOwners({
          application: application || "",
          username: username || "",
          pagination,
        });
      },
      params: async () => {
        return queryService.Params({});
      },
    },
  };
}

export function profileFromAny(input: Any): Account {
  const { typeUrl, value } = input;
  switch (typeUrl) {
    case "/desmos.profiles.v2.Profile": {
      const baseAccount = Profile.decode(value)?.account;
      assert(baseAccount);
      return accountFromAny(baseAccount);
    }

    default:
      return accountFromAny(input);
  }
}
