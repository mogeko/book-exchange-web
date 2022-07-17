import useSWR, { type SWRResponse } from "swr";
import useSWRInfinite, { type SWRInfiniteResponse } from "swr/infinite";
import handleQuery, { type QueryParamType } from "@/lib/utils/queryTools";

function useBooks(queryParam: QueryParamProps = {}) {
  const query = handleQuery("/books", queryParam);
  const { data, error, ...otherRes }: SWRResponse<BookTypes[]> = useSWR(query);

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export function useBook(id: string | number, queryParam: QueryParamProps = {}) {
  const query = handleQuery(`/books/${id}`, queryParam);
  const { data, error, ...otherRes }: SWRResponse<BookTypes> = useSWR(query);

  return {
    book: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export function useBooksInfinite(queryParam: QueryParamInfiniteProps) {
  const { offset = 0, ...other } = queryParam;
  const opts = { revalidateFirstPage: false };
  const { data, error, ...otherRes }: SWRInfiniteResponse<BookTypes[]> =
    useSWRInfinite((index, previous) => {
      if (previous && !previous.length) return null;
      return handleQuery("/books", {
        offset: index * other.limit! + offset!,
        ...other,
      });
    }, opts);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export interface BookTypes {
  author: string;
  cover: string;
  description: string;
  id: number;
  published: string;
  publisher: string;
  title: string;
  tags: string;
}

type QueryParamProps = QueryParamType<keyof BookTypes>;

type QueryParamInfiniteProps = {
  limit: number;
} & Omit<QueryParamProps, "limit">;

export default useBooks;
