import * as hooks from "@/lib/hooks/useBooks";
import { exampleData as exampleBooksData } from "@/__mocks__/useBooksMock";
import { genExampleRes } from "@/__mocks__/useQueryMock";
import { faker } from "@faker-js/faker";

const mock = jest.spyOn(hooks, "useBook");

const useBookMock = {
  target: hooks.useBook,
  returnResult: () => ({
    success: () =>
      mock.mockImplementation(() => genExampleRes({ data: exampleData })),
    error: () =>
      mock.mockImplementation(() => genExampleRes({ isError: true })),
    loading: () =>
      mock.mockImplementation(() => genExampleRes({ isLoading: true })),
  }),
};

export const exampleData: BookType = {
  ...exampleBooksData,
  mate: {
    ...exampleBooksData.mate,
    publisher: faker.company.companyName(),
    subtitle: faker.lorem.sentence(10),
    language: "English",
    publication_date: faker.date.past().toISOString(),
    isbn: `978-${faker.datatype.number({ min: 1000000000, max: 1999999999 })}`,
    paperback: faker.datatype.number({ min: 100, max: 1000 }),
  },
  desc: {
    text: faker.lorem.paragraph(50),
    is_folded: faker.datatype.boolean(),
  },
  digest: {
    text: faker.lorem.paragraph(50),
    is_folded: faker.datatype.boolean(),
  },
};

type BookType = hooks.BookType;

export default useBookMock;
