import { useCallback, useEffect, useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { SignerStatus } from "@desmoslabs/desmjs";
import { useDesmosContext } from "../context/desmos";
import { useWalletConnectContext } from "../context/walletconnect";
import useSignerStatus from "../hooks/useSignerStatus";

export default function Header() {
  const [address, setAddress] = useState("");
  const { connect, disconnect, signer } = useDesmosContext();
  const { signClient } = useWalletConnectContext();
  const signerStatus = useSignerStatus();

  const onClick = useCallback(() => {
    if (signerStatus === SignerStatus.NotConnected) {
      connect();
    } else if (signerStatus === SignerStatus.Connected) {
      disconnect();
    }
  }, [signerStatus, connect, disconnect]);

  useEffect(() => {
    if (signer !== undefined && signerStatus === SignerStatus.Connected) {
      signer.getAccounts().then((accounts) => {
        setAddress(accounts[0].address);
      });
    } else {
      setAddress("");
    }
  }, [signer, signerStatus]);

  const connectDisabled =
    signClient === undefined ||
    (signerStatus !== SignerStatus.Connected &&
      signerStatus !== SignerStatus.NotConnected);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ mr: 2 }}>
          Profile Manager
        </Typography>
        <Typography
          variant="caption"
          component="div"
          sx={{ flexGrow: 1, textAlign: "end" }}
        >
          {address}
        </Typography>
        <Button color="inherit" onClick={onClick} disabled={connectDisabled}>
          {signerStatus === SignerStatus.Connected ? "Disconnect" : "Connect"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
