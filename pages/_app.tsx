import { CacheProvider } from "@emotion/react";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  Theme,
  ThemeProvider,
} from "@mui/material";
import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";
import "../styles/globals.css";
import { BREAKPOINTS } from "../styles/theme/breakpoints";
import { COMPONENT_THEME } from "../styles/theme/component_themes";
import DARK_THEME_PALETTE from "../styles/theme/dark_theme";
import LIGHT_THEME_PALETTE from "../styles/theme/light_theme";
import createEmotionCache from "../utility/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  const emotionCache = clientSideEmotionCache;

  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      mode === "dark"
        ? createTheme({
            palette: DARK_THEME_PALETTE,
            components: COMPONENT_THEME.components,
            breakpoints: BREAKPOINTS.breakpoints,
          })
        : createTheme({
            palette: LIGHT_THEME_PALETTE,
            components: COMPONENT_THEME.components,
            breakpoints: BREAKPOINTS.breakpoints,
          }),
    [mode]
  );

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <CssBaseline enableColorScheme />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}

export default MyApp;
