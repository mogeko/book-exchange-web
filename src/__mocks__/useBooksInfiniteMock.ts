import * as hooks from "@/lib/hooks/useBooks";
import { faker } from "@faker-js/faker";

const mock = jest.spyOn(hooks, "useBooksInfinite");
const setSizeMock = jest.fn();

const useBooksInfiniteMock = {
  target: hooks.useBooksInfinite,
  returnResult: (pages = 3) => ({
    success: () =>
      mock.mockImplementation((param) =>
        genExampleRes({}, [pages, param!.limit!])
      ),
    error: () =>
      mock.mockImplementation((param) =>
        genExampleRes({ data: undefined, isError: true }, [
          pages,
          param!.limit!,
        ])
      ),
    loading: () =>
      mock.mockImplementation((param) =>
        genExampleRes({ data: undefined, isLoading: true }, [
          pages,
          param!.limit!,
        ])
      ),
  }),
  genExampleRes,
  setSizeMock,
};

export const exampleData: BookTypes = {
  title: faker.word.noun(20),
  cover: faker.image.image(1280, 1910),
  description: faker.lorem.paragraph(10),
  published: faker.date.past().toISOString(),
  publisher: faker.company.companyName(),
  tags: Array.from({ length: faker.datatype.number({ min: 2, max: 8 }) }, () =>
    faker.lorem.words(2)
  ),
  author: faker.name.firstName(),
  rates: faker.datatype.number(100),
  id: faker.datatype.number(100),
};

function genExampleRes(res: Partial<ResType> = {}, [x, y] = [3, 10]): ResType {
  const exampleRes = {
    data: Array.from({ length: x }, () =>
      Array.from({ length: y }, () => exampleData)
    ),
    isValidating: false,
    isError: false,
    isLoading: false,
    mutate: jest.fn(),
    setSize: setSizeMock,
    size: 1,
  };

  return { ...exampleRes, ...res };
}

type ResType = ReturnType<typeof hooks.useBooksInfinite>;
type BookTypes = hooks.BookTypes;

export default useBooksInfiniteMock;
