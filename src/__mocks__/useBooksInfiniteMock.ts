import * as hooks from "@/lib/hooks/useBooks";
import { exampleData } from "./useBooksMock";

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
type BookType = hooks.BooksType[0];

export default useBooksInfiniteMock;
