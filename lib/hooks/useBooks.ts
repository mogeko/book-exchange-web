import handleQuery from "@/lib/utils/queryTools";
import useSWRInfinite, {
  type SWRInfiniteResponse,
  type SWRInfiniteConfiguration,
} from "swr/infinite";
import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";

function useBooks(param: ParamProps = {}, opts: SWRConfiguration = {}) {
  const query = handleQuery("/books", param);
  const res: SWRResponse<BooksType> = useSWR(query, opts);
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
  const res: SWRResponse<BookType> = useSWR(query, opts);
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
  const res: SWRInfiniteResponse<BooksType> = useSWRInfinite(
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

interface ParamProps {
  limit?: number;
  page?: number;
  tags_include?: string | string[];
}

export type BooksType = {
  id: `bk${number}`;
  title: string;
  cover: string;
  short_desc: string;
  tags: string[];
  author: string;
  rates: number;
}[];

export type BookType = {
  long_desc: string;
  digest: string;
  published: string;
  publisher: string;
} & BooksType[0];

export default useBooks;
