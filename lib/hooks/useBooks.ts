import handleQuery from "@/lib/utils/queryTools";
import useSWRInfinite, {
  type SWRInfiniteResponse,
  type SWRInfiniteConfiguration,
} from "swr/infinite";
import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";

function useBooks(param: ParamProps = {}, opts: SWRConfiguration = {}) {
  const query = handleQuery("/books", param);
  const res: SWRResponse<BookTypes[]> = useSWR(query, opts);
  const { data, error, ...otherRes } = res;

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export function useBook(id: number, param = {}, opts: SWRConfiguration = {}) {
  const query = handleQuery(`/books/${id}`, param);
  const res: SWRResponse<BookTypes> = useSWR(query, opts);
  const { data, error, ...otherRes } = res;

  return {
    book: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export function useBooksInfinite(
  { page = 1, ...other }: ParamProps = { page: 1 },
  opts: SWRInfiniteConfiguration = {}
) {
  const res: SWRInfiniteResponse<BookTypes[]> = useSWRInfinite(
    (index, previous) => {
      if (previous && !previous.length) return null;
      return handleQuery("/books", { page: index + page, ...other });
    },
    opts
  );
  const { data, error, ...otherRes } = res;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export interface BookTypes {
  title: string;
  cover: string;
  description: string;
  published: string;
  publisher: string;
  tags: string[];
  author: string;
  rates: number;
  id: number;
}

interface ParamProps {
  limit?: number;
  page?: number;
  tags_include?: string | string[];
}

export default useBooks;
