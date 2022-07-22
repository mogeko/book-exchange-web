import handleQuery from "@/lib/utils/queryTools";
import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";
import useSWRInfinite, {
  type SWRInfiniteConfiguration,
  type SWRInfiniteResponse,
} from "swr/infinite";

function useQuery<T, U = {}>(
  url: `/${string}`,
  param: U,
  opts: SWRConfiguration<T> = {}
) {
  const query = handleQuery(url, param);
  const res: SWRResponse<T> = useSWR(query, opts);
  const { data, error, ...otherRes } = res;

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export function useQueryInfinite<T>(
  getKey: (index: number, previous: T | null) => string | null,
  opts: SWRInfiniteConfiguration<T> = {}
) {
  const res: SWRInfiniteResponse<T> = useSWRInfinite(getKey, opts);
  const { data, error, ...otherRes } = res;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export default useQuery;
