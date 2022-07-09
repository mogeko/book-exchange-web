import useSWR, { type SWRResponse } from "swr";
import handleQueryParam, { type QueryParamType } from "@/lib/utils/queryTools";

function useBooks(queryParam: QueryParamType<keyof BookTypes> = {}) {
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

export function useBook(
  id: string | number,
  queryParam: QueryParamType<keyof BookTypes> = {}
) {
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

export interface BookTypes {
  author: string;
  cover: string;
  description: string;
  id: number;
  published: string;
  publisher: string;
  title: string;
}

export default useBooks;
