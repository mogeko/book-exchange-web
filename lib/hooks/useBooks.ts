import handleQuery from "@/lib/utils/queryTools";
import useSWRInfinite, {
  type SWRInfiniteResponse,
  type SWRInfiniteConfiguration,
} from "swr/infinite";
import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";
import { faker } from "@faker-js/faker";

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

interface ParamProps {
  limit?: number;
  page?: number;
  tags_include?: string | string[];
}

export default useBooks;
