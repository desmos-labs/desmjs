import { useDesmosContext } from "../context/desmos";

export default function useSignerStatus() {
  const { signerStatus } = useDesmosContext();

  return signerStatus;
}
