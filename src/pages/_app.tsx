import MenusProvider from "@/layouts/providers/menusProvider";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "@/styles/globals.css";
import MessageProvider from "@/layouts/providers/msgProvider";

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

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <WrapProvider>
      <Component {...pageProps} />
    </WrapProvider>
  );
};

export const WrapProvider: React.FC<WrapProviderProps> = ({ children }) => {
  return (
    <SWRConfig value={swrConfig}>
      <MessageProvider>
        <MenusProvider>{children}</MenusProvider>
      </MessageProvider>
    </SWRConfig>
  );
};

interface WrapProviderProps {
  children: React.ReactNode;
}

export default App;
