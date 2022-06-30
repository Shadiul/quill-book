import { CacheProvider } from "@emotion/react";
import {
  CircularProgress,
  CssBaseline,
  responsiveFontSizes,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import QUERY_CLIENT from "../config/query_clinet.config";
import { ColorModeContext } from "../contexts/ColorModeContext";
import useMaterialColor from "../hooks/useMaterialColor";
import "../styles/globals.css";
import createEmotionCache from "../utility/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  const emotionCache = clientSideEmotionCache;

  const { isLoading, theme, colorMode } = useMaterialColor("#43A047");

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={QUERY_CLIENT}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={responsiveFontSizes(theme)}>
            <CssBaseline enableColorScheme />
            {isLoading ? <Loader /> : <Component {...pageProps} />}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </QueryClientProvider>
    </CacheProvider>
  );
}

export default MyApp;

const Loader = () => {
  return (
    <Stack height="100vh" justifyContent="center" alignItems="center" gap={2}>
      <CircularProgress />
      <Typography variant="overline">Loading Theme</Typography>
    </Stack>
  );
};
