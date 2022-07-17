import * as hooks from "@/lib/hooks/useBooks";

const mock = jest.spyOn(hooks, "default");

const useBooksMock = {
  target: hooks.default,
  returnResult: (x = 10) => ({
    success: () => mock.mockImplementation(() => genExampleRes({}, x)),
    error: () =>
      mock.mockImplementation(() =>
        genExampleRes({ books: undefined, isError: true }, x)
      ),
    loading: () =>
      mock.mockImplementation(() =>
        genExampleRes({ books: undefined, isLoading: true }, x)
      ),
  }),
  genExampleBooks,
  genExampleRes,
};

function genExampleRes(res: Partial<ResType> = {}, x = 10): ResType {
  const exampleRes = {
    books: genExampleBooks({}, x),
    isValidating: false,
    isError: false,
    isLoading: false,
    mutate: jest.fn(),
  };

  return { ...exampleRes, ...res };
}

function genExampleBooks(data: Partial<BookTypes> = {}, x = 10) {
  const defaultData: BookTypes = {
    title: "This is an example book",
    cover: "https://picsum.photos/seed/35613/1280/1910/",
    description: "This is an example book",
    published: "1010-1-1T23:59:59Z",
    publisher: "This is an example publisher",
    author: "No One",
    id: 1,
  };

  return Array.from({ length: x }, () => ({ ...defaultData, ...data }));
}

type ResType = ReturnType<typeof hooks.default>;
type BookTypes = hooks.BookTypes;

export default useBooksMock;
