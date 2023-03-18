import { tendermint34, tendermint37 } from "@cosmjs/tendermint-rpc";

/**
 * Mode in which a transaction can be broadcast.
 */
export enum BroadcastMode {
  /**
   * Broadcast transaction to mempool and do not wait for response.
   */
  Async = "async",
  /**
   * Broadcast transaction to mempool and wait for response.
   */
  Sync = "sync",
  /**
   * Broadcast transaction to mempool and wait that is included in a block.
   */
  Block = "block",
}

/**
 * Represents a response to a async broadcast request.
 */
export interface AsyncBroadcastResponse {
  readonly type: BroadcastMode.Async;
  readonly hash: string;
}

/**
 * Represents a response to a sync broadcast request.
 */
export interface SyncBroadcastResponse {
  readonly type: BroadcastMode.Sync;
  readonly hash: string;
}

/**
 * Represents a response to a block broadcast request.
 */
export interface BlockBroadcastResponse {
  readonly type: BroadcastMode.Block;
  readonly height: number;
  readonly hash: string;
  readonly checkTx: tendermint34.TxData | tendermint37.TxData;
  readonly deliverTx?: tendermint34.TxData | tendermint37.TxData;
}

/**
 * Union of all responses to a broadcast request.
 */
export type BroadcastResponse =
  | SyncBroadcastResponse
  | AsyncBroadcastResponse
  | BlockBroadcastResponse;
