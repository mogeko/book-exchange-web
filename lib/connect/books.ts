import useSWR, { type SWRResponse } from "swr";
import useSWRInfinite, { type SWRInfiniteResponse } from "swr/infinite";
import handleQueryParam, { type QueryParamType } from "@/lib/utils/queryTools";

function useBooks(queryParam: QueryParamProps = {}) {
  const query = queryParam
    ? `/books?${handleQueryParam(queryParam)}`
    : "/books";
  const { data, error }: SWRResponse<BookTypes[]> = useSWR(query);

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useBook(id: string | number, queryParam: QueryParamProps = {}) {
  const query = queryParam
    ? `/books/${id}?${handleQueryParam(queryParam)}`
    : `/books/${id}`;
  const { data, error }: SWRResponse<BookTypes> = useSWR(query);

  return {
    book: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useBooksInfinite(queryParam: QueryParamInfiniteProps) {
  const { offset = 0, ...other } = queryParam;
  const { data, error, size, setSize }: SWRInfiniteResponse<BookTypes> =
    useSWRInfinite((index: number, previous: BookTypes[]) => {
      if (previous && !previous.length) return null;
      return `/books?${handleQueryParam({
        offset: index * other.limit! + offset!,
        ...other,
      })}`;
    });

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
    setSize,
    size,
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
}

type QueryParamProps = QueryParamType<keyof BookTypes>;

type QueryParamInfiniteProps = {
  limit: number;
} & Omit<QueryParamProps, "limit">;

export default useBooks;
