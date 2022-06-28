import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  // interface Palette {
  //   lightWarning: Palette["primary"];
  // }

  interface PaletteOptions {
    // primaryContainer: PaletteOptions["primary"];
  }
}

export const PALETTE_LIGHT: ThemeOptions["palette"] = {
  mode: "light",
  primary: { main: "#4359A9", contrastText: "#FFFFFF" },
  secondary: { main: "#595D71", contrastText: "#FFFFFF" },
  background: { default: "#FDFBFF", paper: "#FDFBFF" },
  text: { primary: "#1B1B1F", secondary: "#1B1B1F" },
};

export const PALETTE_DARK: ThemeOptions["palette"] = {
  mode: "dark",
  primary: { main: "#294190", contrastText: "#DBE1FF" },
  secondary: { main: "#595D71", contrastText: "#FFFFFF" },
  background: { default: "#1B1B1F", paper: "#1B1B1F" },
  text: { primary: "#E4E2E6", secondary: "#E4E2E6" },
};
