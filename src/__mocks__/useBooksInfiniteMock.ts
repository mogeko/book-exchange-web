import * as hooks from "@/lib/hooks/useBooks";

const mock = jest.spyOn(hooks, "useBooksInfinite");

const useBooksInfiniteMock = {
  target: hooks.useBooksInfinite,
  returnResult: (x = 3, y = 10) => ({
    success: () => mock.mockImplementation(() => genExampleRes({}, [x, y])),
    error: () =>
      mock.mockImplementation(() =>
        genExampleRes({ data: undefined, isError: true }, [x, y])
      ),
    loading: () =>
      mock.mockImplementation(() =>
        genExampleRes({ data: undefined, isLoading: true }, [x, y])
      ),
  }),
  genExampleBooks,
  genExampleRes,
};

function genExampleRes(res: Partial<ResType> = {}, [x, y] = [3, 10]): ResType {
  const exampleRes = {
    data: genExampleBooks({}, [x, y]),
    isValidating: false,
    isError: false,
    isLoading: false,
    mutate: jest.fn(),
    setSize: jest.fn(),
    size: 1,
  };

  return { ...exampleRes, ...res };
}

function genExampleBooks(data: Partial<BookTypes> = {}, [x, y] = [3, 10]) {
  const defaultData: BookTypes = {
    title: "This is an example book",
    cover: "https://picsum.photos/seed/35613/1280/1910/",
    description: "This is an example book",
    published: "1010-1-1T23:59:59Z",
    publisher: "This is an example publisher",
    author: "No One",
    id: 1,
  };

  return Array.from({ length: x }, () =>
    Array.from({ length: y }, () => ({ ...defaultData, ...data }))
  );
}

type ResType = ReturnType<typeof hooks.useBooksInfinite>;
type BookTypes = hooks.BookTypes;

export default useBooksInfiniteMock;
