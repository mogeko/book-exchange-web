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

export const exampleData: BookTypes = {
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
type BookTypes = hooks.BookTypes;

export default useBooksMock;
