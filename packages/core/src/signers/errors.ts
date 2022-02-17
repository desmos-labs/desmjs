/**
 * Represents the error that is thrown inside operations that require the client to be connected, if it is not.
 */
class SignerNotConnected extends Error {
  constructor() {
    super("Signer not connected");
  }
}

export default SignerNotConnected;
