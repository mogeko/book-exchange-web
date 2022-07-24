import handleQuery from "@/lib/utils/queryTools";
import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";
import useSWRInfinite, {
  type SWRInfiniteConfiguration,
  type SWRInfiniteResponse,
} from "swr/infinite";

function useQuery<T>(
  url: `/${string}` | null,
  param = {},
  opts: SWRConfiguration<T> = {}
) {
  const query = url ? handleQuery(url, param) : null;
  const res: SWRResponse<T> = useSWR(query, opts);
  const { data, error, ...otherRes } = res;

  return {
    data: data,
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

export type Query<T = any, U = any> = (
  url: `/${string}`,
  param: U,
  opts?: SWRConfiguration<T>
) => {
  isLoading: boolean;
  isError: boolean;
} & SWRResponse<T>;

export type QueryProps<T = any, U = any> = Parameters<Query<T, U>>;
export type QueryReturn<T = any> = ReturnType<Query<T>>;

export type QueryInfinite<T = any> = (
  getKey: (index: number, previous: T | null) => string | null,
  opts?: SWRInfiniteConfiguration<T>
) => {
  isLoading: boolean;
  isError: boolean;
} & SWRInfiniteResponse<T>;

export type QueryInfiniteProps<T = any> = Parameters<QueryInfinite<T>>;
export type QueryInfiniteReturn<T = any> = ReturnType<QueryInfinite<T>>;

export default useQuery;
