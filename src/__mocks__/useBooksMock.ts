import * as hooks from "@/lib/hooks/useBooks";
import { faker } from "@faker-js/faker";

const mock = jest.spyOn(hooks, "default");

const useBooksMock = {
  target: hooks.default,
  returnResult: () => ({
    success: () =>
      mock.mockImplementation((param) => genExampleRes({}, param!.limit)),
    error: () =>
      mock.mockImplementation((param) =>
        genExampleRes({ books: undefined, isError: true }, param!.limit)
      ),
    loading: () =>
      mock.mockImplementation((param) =>
        genExampleRes({ books: undefined, isLoading: true }, param!.limit)
      ),
  }),
  genExampleRes,
};

export const exampleData: BookType = {
  id: `bk${faker.datatype.number(100)}`,
  title: faker.word.noun(20),
  cover: faker.image.image(1280, 1910),
  tags: Array.from({ length: faker.datatype.number({ min: 2, max: 8 }) }, () =>
    faker.lorem.words(2)
  ),
  rates: faker.datatype.number(100),
  mate: {
    author: faker.name.firstName(),
  },
  desc: {
    short_desc: faker.lorem.paragraph(10),
  },
};

function genExampleRes(res: Partial<ResType> = {}, limit = 10): ResType {
  const exampleRes = {
    books: Array.from({ length: limit }, () => exampleData),
    isValidating: false,
    isError: false,
    isLoading: false,
    mutate: jest.fn(),
  };

  return { ...exampleRes, ...res };
}

type ResType = ReturnType<typeof hooks.default>;
type BookType = hooks.BooksType[0];

export default useBooksMock;
