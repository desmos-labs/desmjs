import Long from "long";
import {PageRequest} from "cosmjs-types/cosmos/base/query/v1beta1/pagination";

export interface KeyPagination {
    /**
     * Value returned in PageResponse.next_key to begin
     * querying the next page most efficiently.
     */
    key: Uint8Array;
    /**
     * The total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     */
    limit?: Long;
}

export interface OffsetPagination {
    /**
     * Numeric offset that can be used when key is unavailable.
     * It is less efficient than using key.
     */
    offset: Long;
    /**
     * The total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     */
    limit?: Long;
    /**
     * count_total is set to true to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     */
    countTotal: boolean;
}

export type Pagination = KeyPagination | OffsetPagination

export function isKeyPagination(pagination: Pagination): pagination is KeyPagination {
    return !!(pagination as KeyPagination).key;
}

export function isOffsetPagination(pagination: Pagination): pagination is OffsetPagination {
    return !!(pagination as OffsetPagination).offset;
}

export function paginationToPageRequest(pagination: Pagination | undefined): PageRequest | undefined {
    if (pagination === undefined) {
        return undefined;
    }

    if (isKeyPagination(pagination)) {
        return PageRequest.fromPartial({
            key: pagination.key,
            limit: pagination.limit,
        });
    }
    else {
        return PageRequest.fromPartial({
            offset: pagination.offset,
            limit: pagination.limit,
            countTotal: pagination.countTotal
        });
    }
}
