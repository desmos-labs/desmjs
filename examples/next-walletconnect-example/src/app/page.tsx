"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Header from "./components/Header";
import ProfileEdit from "./screen/ProfileEdit";
import { WalletConnectContextProvider } from "./context/walletconnect";
import { DesmosContextProvider } from "./context/desmos";
import theme from "./theme";

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

function App() {
  return (
    <WalletConnectContextProvider>
      <DesmosContextProvider chainEndpoint="https://rpc.morpheus.desmos.network:443">
        <AppRoot />
      </DesmosContextProvider>
    </WalletConnectContextProvider>
  );
}
export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </main>
  );
}
