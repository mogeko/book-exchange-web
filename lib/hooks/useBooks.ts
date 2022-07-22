import useQuery, { useQueryInfinite } from "@/lib/hooks/useQuery";
import handleQuery from "@/lib/utils/queryTools";
import { type XOR } from "@/lib/utils/typeTools";
import { type SWRInfiniteConfiguration } from "swr/infinite";
import { type SWRConfiguration } from "swr";

function useBooks(param: ParamProps = {}, opts?: SWRConfiguration<BooksType>) {
  return useQuery<BooksType>("/books", param, opts);
}

export function useBook(id?: string, opts?: SWRConfiguration<BookType>) {
  return useQuery<BookType>(`/books/${id}`, {}, opts);
}

export function useBooksInfinite(
  { page = 1, ...other }: ParamProps = { page: 1 },
  opts: SWRInfiniteConfiguration<BooksType> = {}
) {
  return useQueryInfinite<BooksType>((index, previous) => {
    if (previous && !previous.length) return null;
    return handleQuery("/books", { page: index + page, ...other });
  }, opts);
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
  tags: string[];
  rates: number;
  mate: {
    author: string;
  };
  desc?: {
    short_desc?: string;
  };
}[];

export type BookType = {
  mate: {
    publisher?: string;
    subtitle?: string;
    language?: string;
    publication_date?: string;
    isbn?: `${number}-${number}`;
  } & XOR<{ paperback?: number }, { hardcover?: number }>;
  desc?: {
    long_desc?: string;
    digest?: string;
  };
} & BooksType[0];

export default useBooks;
