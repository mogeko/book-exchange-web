import useSWRInfinite, { type SWRInfiniteResponse } from "swr/infinite";
import handleQuery from "@/lib/utils/queryTools";
import useSWR, { type SWRResponse } from "swr";
import { faker } from "@faker-js/faker";

function useBooks(param: ParamForBooksProps = {}) {
  const query = handleQuery("/books", param);
  const { data, error, ...otherRes }: SWRResponse<BookTypes[]> = useSWR(query);

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export function useBook(id: string | number, param: ParamForBookProps = {}) {
  const query = handleQuery(`/books/${id}`, param);
  const { data, error, ...otherRes }: SWRResponse<BookTypes> = useSWR(query);

  return {
    book: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export function useBooksInfinite(param: ParamForBooksProps) {
  const { offset = 0, ...other } = param;
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
  tags: [faker.lorem.words(1), faker.lorem.words(2)],
  author: faker.name.firstName(),
  rates: faker.datatype.number(100),
  id: faker.datatype.number(100),
};

export type BookTypes = Partial<typeof exampleData>;

interface ParamForBookProps {
  limit?: number;
  offset?: number;
}

type ParamForBooksProps = {
  tag_include?: string;
} & ParamForBookProps;

export default useBooks;
