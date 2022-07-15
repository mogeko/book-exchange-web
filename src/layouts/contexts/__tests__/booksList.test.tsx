import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as books from "@/lib/connect/books";
import BookList from "@/layouts/contexts/bookList";

const exampleBook = {
  title: "This is an example book",
  cover: "https://picsum.photos/seed/35613/1280/1910/",
  description: "This is an example book",
  published: "1010-1-1T23:59:59Z",
  publisher: "This is an example publisher",
  author: "No One",
  id: 1,
};

describe("bookList", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a BookList", () => {
    const exampleBooks = Array.from({ length: 10 }, () => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(books.default).toBeCalledWith({ limit: 10, offset: 20 });
    expect(container.querySelectorAll("figure").length).toBe(10);
  });

  it("snapshot a BookList", () => {
    const exampleBooks = Array.from({ length: 10 }, () => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a BookList then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    render(<BookList limit={10} offset={20} />);

    expect(books.default).toBeCalledWith({ limit: 10, offset: 20 });
    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("snapshot a BookList then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a Display BookList then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(books.default).toBeCalledWith({ limit: 10, offset: 20 });
    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a BookList then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);

    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });
});
