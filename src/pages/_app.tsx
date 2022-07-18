import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

// ONLY FOR DEVELOPMENT
// Use middleware to inject the address of the mock server
const mockHost = "https://book-exchange-mock.azurewebsites.net/api/v1";
// const mockHost = "http://localhost:3001/api/v1"; // Local mock server

const fetcher = (url: string) => fetch(mockHost + url).then((r) => r.json());

const swrConfig = {
  fetcher,
  // Disable automatic re-request
  // https://swr.bootcss.com/docs/revalidation
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateFirstPage: false,
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig value={swrConfig}>
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default MyApp;
