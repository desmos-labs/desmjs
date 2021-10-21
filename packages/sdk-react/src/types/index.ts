export * from "./signer"

export enum ChainOperationStatus {
    /**
     * The operation was not performed.
     */
    Idle,
    /**
     * The application is waiting the response from the chain.
     */
    Pending,
    /**
     * Chain operation has complete with success.
     */
    Success,
    /**
     * An error occurred while performing the operation.
     */
    Failed,
}