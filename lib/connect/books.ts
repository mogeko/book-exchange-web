import useSWR, { type SWRResponse } from "swr";

function useBooks(queryParam: QueryParamType = {}) {
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

export function useBook(id: string | number, queryParam: QueryParamType = {}) {
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

function handleQueryParam(queryParams: QueryParamType) {
  return Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

interface BookTypes {
  author: string;
  cover: string;
  description: string;
  id: number;
  published: string;
  publisher: string;
  title: string;
}

type QueryParamSuffix =
  | "eq"
  | "ne"
  | "lt"
  | "gt"
  | "lte"
  | "gte"
  | "contains"
  | "startsWith"
  | "endsWith";

type QueryParamType = {
  [key in `${keyof BookTypes}_${QueryParamSuffix}`]?: number | string;
} & { [key in `${keyof BookTypes}_order`]?: "asc" | "desc" } & {
  limit?: number | string;
  offset?: number | string;
};

export default useBooks;
