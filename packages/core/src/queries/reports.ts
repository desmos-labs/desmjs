import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import {
  QueryClientImpl,
  QueryReasonsResponse,
  QueryReportsResponse,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/query";
import { Long } from "long";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {
  Params,
  Reason,
  Report,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/models";
import { Any } from "cosmjs-types/google/protobuf/any";
import { assertDefinedAndNotNull } from "@cosmjs/utils";

export interface ReportsExtension {
  readonly reports: {
    /**
     * Queries the reports with an optional target and reporter.
     */
    reports: (
      subspaceId: Long,
      target?: Any,
      reporter?: string,
      pagination?: PageRequest
    ) => Promise<QueryReportsResponse>;
    /**
     * Queries a specific report given its id.
     */
    report: (subspaceId: Long, reportId: Long) => Promise<Report | undefined>;
    /**
     * Queries the reasons registered inside a subspace.
     */
    reasons: (
      subspaceId: Long,
      pagination?: PageRequest
    ) => Promise<QueryReasonsResponse>;
    /**
     * Queries a reporting reason given its id.
     */
    reason: (subspaceId: Long, reasonId: number) => Promise<Reason | undefined>;
    /**
     * Queries the module params.
     */
    params: () => Promise<Params>;
  };
}

export function setupReportsExtension(base: QueryClient): ReportsExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    reports: {
      reports: async (
        subspaceId: Long,
        target?: Any,
        reporter?: string,
        pagination?: PageRequest
      ) => {
        return queryService.Reports({
          subspaceId,
          target,
          reporter: reporter || "",
          pagination,
        });
      },
      report: async (subspaceId: Long, reportId: Long) => {
        try {
          const res = await queryService.Report({
            subspaceId,
            reportId,
          });
          return res.report;
        } catch (error) {
          return undefined;
        }
      },
      reasons: async (subspaceId: Long, pagination?: PageRequest) => {
        return queryService.Reasons({
          subspaceId,
          pagination,
        });
      },
      reason: async (subspaceId: Long, reasonId: number) => {
        try {
          const res = await queryService.Reason({
            subspaceId,
            reasonId,
          });
          return res.reason;
        } catch (error) {
          return undefined;
        }
      },
      params: async () => {
        const res = await queryService.Params({});
        assertDefinedAndNotNull(res.params, "params not defined");
        return res.params;
      },
    },
  };
}
