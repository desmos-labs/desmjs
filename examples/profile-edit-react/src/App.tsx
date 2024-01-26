import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import ProfileEdit from "./screen/ProfileEdit";
import Header from "./components/Header";
import { DesmosContextProvider } from "./context/desmos";
import { WalletConnectContextProvider } from "./context/walletconnect";

const AppRoot: React.FC = () => (
  <Grid2 container direction="column" spacing={2}>
    <Grid2>
      <Header />
    </Grid2>
    <Grid2>
      <ProfileEdit />
    </Grid2>
  </Grid2>
);

export default function App() {
  return (
    <WalletConnectContextProvider>
      <DesmosContextProvider chainEndpoint="https://rpc.morpheus.desmos.network:443">
        <AppRoot />
      </DesmosContextProvider>
    </WalletConnectContextProvider>
  );
}
