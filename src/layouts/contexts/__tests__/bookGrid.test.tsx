import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as books from "@/lib/connect/books";
import BookGrid from "@/layouts/contexts/bookGrid";

const exampleBook = {
  title: "This is an example book",
  cover: "https://picsum.photos/seed/35613/1280/1920/",
  description: "This is an example book",
  published: "2020-1-1T23:59:59Z",
  publisher: "This is an example publisher",
  author: "No One",
  id: 1,
};

describe("bookGrid", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a BookGrid", () => {
    const exampleBooks = Array.from({ length: 3 }, () => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BookGrid limit={3} offset={5} />);

    expect(books.default).toBeCalledWith({ limit: 3, offset: 5 });
    expect(books.default).toBeCalledTimes(2);
    expect(container.querySelectorAll("figure").length).toBe(3);
  });

  it("snapshot a BookGrid", () => {
    const exampleBooks = Array.from({ length: 10 }, () => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BookGrid limit={10} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a BookGrid then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    render(<BookGrid limit={10} />);

    expect(books.default).toBeCalledWith({ limit: 10, offset: 0 });
    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("snapshot a BooksGrid then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BookGrid limit={10} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a Display BookGrid then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BookGrid limit={10} />);

    expect(books.default).toBeCalledWith({ limit: 10, offset: 0 });
    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a BookGrid then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);

    const { container } = render(<BookGrid limit={10} />);

    expect(container).toMatchSnapshot();
  });
});
