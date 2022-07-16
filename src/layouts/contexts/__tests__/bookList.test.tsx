import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as books from "@/lib/connect/books";
import * as hooks from "@/lib/useOnScreen";
import BookList from "@/layouts/contexts/bookList";
import useOnScreenMock from "@/__mocks__/useOnScreenMock";

const exampleBooks = Array.from({ length: 3 }, () =>
  Array.from({ length: 10 }, () => ({
    title: "This is an example book",
    cover: "https://picsum.photos/seed/35613/1280/1910/",
    description: "This is an example book",
    published: "1010-1-1T23:59:59Z",
    publisher: "This is an example publisher",
    author: "No One",
    id: 1,
  }))
);

const exampleRes = {
  data: exampleBooks,
  isValidating: false,
  isError: false,
  isLoading: false,
  mutate: jest.fn(),
  setSize: jest.fn(),
  size: 1,
};

const genExampleRes = (res = {}) => Object.assign({}, exampleRes, res);

describe("bookList", () => {
  beforeEach(() => {
    useOnScreenMock.not.visiable();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a BookList", () => {
    jest.spyOn(books, "useBooksInfinite").mockImplementation(() => exampleRes);
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(books.useBooksInfinite).toBeCalledWith({ limit: 10, offset: 20 });
    expect(container.querySelectorAll("figure").length).toBe(30);
  });

  it("snapshot a BookList", () => {
    jest.spyOn(books, "useBooksInfinite").mockImplementation(() => exampleRes);
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a BookList then error", () => {
    const res = genExampleRes({ data: undefined, isError: true });
    jest.spyOn(books, "useBooksInfinite").mockImplementation(() => res);
    render(<BookList limit={10} offset={20} />);

    expect(books.useBooksInfinite).toBeCalledWith({ limit: 10, offset: 20 });
    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("snapshot a BookList then error", () => {
    const res = genExampleRes({ data: undefined, isError: true });
    jest.spyOn(books, "useBooksInfinite").mockImplementation(() => res);
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a Display BookList then loading", () => {
    const res = genExampleRes({ data: undefined, isLoading: true });
    jest.spyOn(books, "useBooksInfinite").mockImplementation(() => res);
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(books.useBooksInfinite).toBeCalledWith({ limit: 10, offset: 20 });
    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a BookList then loading", () => {
    const res = genExampleRes({ data: undefined, isLoading: true });
    jest.spyOn(books, "useBooksInfinite").mockImplementation(() => res);
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });
});
