import useSWRInfinite, { type SWRInfiniteResponse } from "swr/infinite";
import handleQuery, { type QueryParamType } from "@/lib/utils/queryTools";
import useSWR, { type SWRResponse } from "swr";
import { faker } from "@faker-js/faker";

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

export const exampleData = {
  title: faker.word.noun(20),
  cover: faker.image.image(1280, 1910),
  description: faker.lorem.paragraph(10),
  published: faker.date.past().toISOString(),
  publisher: faker.company.companyName(),
  tags: faker.lorem.words(1),
  author: faker.name.firstName(),
  rates: faker.datatype.number(100),
  id: faker.datatype.number(100),
};

export type BookTypes = Partial<typeof exampleData>;

type QueryParamProps = QueryParamType<keyof BookTypes>;

type QueryParamInfiniteProps = {
  limit: number;
} & Omit<QueryParamProps, "limit">;

export default useBooks;
