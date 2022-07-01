import { CacheProvider } from "@emotion/react";
import { CircularProgress, Stack, Typography } from "@mui/material";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import QUERY_CLIENT from "../config/query_clinet.config";
import ColorModeContextProvider from "../contexts/ColorModeContext";
import "../styles/globals.css";
import createEmotionCache from "../utility/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  const emotionCache = clientSideEmotionCache;

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={QUERY_CLIENT}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ColorModeContextProvider>
          {({ isLoading }) =>
            isLoading ? <Loader /> : <Component {...pageProps} />
          }
        </ColorModeContextProvider>
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
