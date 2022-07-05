import useSWR, { type SWRResponse } from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function useMenus(url: string) {
  const { data, error }: SWRResponse<ResProps> = useSWR(url, fetcher);
  return {
    menus: data,
    isLoading: !error && !data,
    isError: error,
  };
}

interface ResProps {
  data: {
    href: string;
    name: string;
    badge?: string | number;
  }[];
}

export default useMenus;
