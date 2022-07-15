import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig, Middleware, SWRHook } from "swr";

// ONLY FOR DEVELOPMENT
// Use middleware to inject the address of the mock server
const mockMiddleware: Middleware = (useSWRNext: SWRHook) => {
  return (key, fetcher, config) => {
    const mockHost = "https://mockend.com/mogeko/book-exchange-web/tree/dev";
    const query = typeof key === "function" ? key() : key;
    return useSWRNext(mockHost + query, fetcher, config);
  };
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const swrConfig = {
  fetcher,
  use: [mockMiddleware],
  // Disable automatic re-request
  // https://swr.bootcss.com/docs/revalidation
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig value={swrConfig}>
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default MyApp;
