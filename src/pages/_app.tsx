import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig, Middleware, SWRHook } from "swr";

// ONLY FOR DEVELOPMENT
// Use middleware to inject the address of the mock server
const mockMiddleware: Middleware = (useSWRNext: SWRHook) => {
  return (key, fetcher, config) => {
    const mockHost = "https://mogeko.me/book-exchange-mock/";
    return useSWRNext(mockHost + key, fetcher, config);
  };
};

const swrConfig = {
  use: [mockMiddleware],
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig value={swrConfig}>
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default MyApp;
