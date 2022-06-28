import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    // lightWarning: Palette["primary"];
  }

  interface PaletteOptions {
    primaryContainer?: PaletteOptions["primary"];
    tertiary?: PaletteOptions["primary"];
  }
}

export const PALETTE_LIGHT: ThemeOptions["palette"] = {
  mode: "light",
  primary: { main: "#4359A9", contrastText: "#FFFFFF" },
  primaryContainer: { main: "#DBE1FF", contrastText: "#001454" },
  secondary: { main: "#595D71", contrastText: "#FFFFFF" },
  tertiary: { main: "#75546F", contrastText: "#FFFFFF" },
  background: { default: "#FDFBFF", paper: "#FDFBFF" },
  text: { primary: "#1B1B1F", secondary: "#1B1B1F" },
};

export const PALETTE_DARK: ThemeOptions["palette"] = {
  mode: "dark",
  primary: { main: "#B5C4FF", contrastText: "#0B2878" },
  primaryContainer: { main: "#294190", contrastText: "#DBE1FF" },
  secondary: { main: "#C2C5DD", contrastText: "#2B2F42" },
  tertiary: { main: "#E4BADA", contrastText: "#43273F" },
  background: { default: "#1B1B1F", paper: "#1B1B1F" },
  text: { primary: "#E4E2E6", secondary: "#E4E2E6" },
};
