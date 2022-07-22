import * as hooks from "@/lib/hooks/useBooks";
import { exampleData as exampleBooksData } from "@/__mocks__/useBooksMock";
import { faker } from "@faker-js/faker";

const mock = jest.spyOn(hooks, "useBook");

const useBookMock = {
  target: hooks.useBook,
  returnResult: () => ({
    success: () => mock.mockImplementation(() => genExampleRes({})),
    error: () =>
      mock.mockImplementation(() =>
        genExampleRes({ data: undefined, isError: true })
      ),
    loading: () =>
      mock.mockImplementation(() =>
        genExampleRes({ data: undefined, isLoading: true })
      ),
  }),
  genExampleRes,
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
    digest: faker.lorem.paragraph(50),
    long_desc: faker.lorem.paragraph(50),
  },
};

function genExampleRes(res: Partial<ResType> = {}): ResType {
  const exampleRes = {
    data: exampleData,
    isValidating: false,
    isError: false,
    isLoading: false,
    mutate: jest.fn(),
  };

  return { ...exampleRes, ...res };
}

type ResType = ReturnType<typeof hooks.useBook>;

type BookType = hooks.BookType;

export default useBookMock;
