import { QueryClient } from "react-query";

const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, //5mins
    },
  },
});

export default QUERY_CLIENT;
