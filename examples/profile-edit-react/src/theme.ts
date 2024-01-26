import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#ED6C53",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
