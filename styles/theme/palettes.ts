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
