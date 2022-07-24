import * as hooks from "@/lib/hooks/useBooks";
import { genExampleRes } from "@/__mocks__/useQueryMock";
import { faker } from "@faker-js/faker";

const mock = jest.spyOn(hooks, "default");

const useBooksMock = {
  target: hooks.default,
  returnResult: () => ({
    success: () =>
      mock.mockImplementation((param) =>
        genExampleRes({
          data: Array.from({ length: param?.limit! }, () => exampleData),
        })
      ),
    error: () =>
      mock.mockImplementation(() => genExampleRes({ isError: true })),
    loading: () =>
      mock.mockImplementation((param) => genExampleRes({ isLoading: true })),
  }),
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
    text: faker.lorem.paragraph(10),
  },
};

type BookType = hooks.BooksType[0];

export default useBooksMock;
