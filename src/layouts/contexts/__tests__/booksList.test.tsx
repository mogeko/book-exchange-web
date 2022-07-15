import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as books from "@/lib/connect/books";
import BooksList from "@/layouts/contexts/booksList";

const exampleBook = {
  title: "This is an example book",
  cover: "https://picsum.photos/seed/35613/1280/1910/",
  description: "This is an example book",
  published: "1010-1-1T23:59:59Z",
  publisher: "This is an example publisher",
  author: "No One",
  id: 1,
};

describe("Home", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a BooksList", () => {
    const exampleBooks = Array.from({ length: 10 }, () => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BooksList limit={10} offset={20} />);

    expect(books.default).toBeCalledWith({ limit: 10, offset: 20 });
    expect(container.querySelectorAll("figure").length).toBe(10);
  });

  it("snapshot a BooksList", () => {
    const exampleBooks = Array.from({ length: 10 }, () => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BooksList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a BooksList then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    render(<BooksList limit={10} offset={20} />);

    expect(books.default).toBeCalledWith({ limit: 10, offset: 20 });
    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("snapshot a BooksList then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BooksList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a Display BooksList then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<BooksList limit={10} offset={20} />);

    expect(books.default).toBeCalledWith({ limit: 10, offset: 20 });
    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a BooksList then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);

    const { container } = render(<BooksList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });
});
