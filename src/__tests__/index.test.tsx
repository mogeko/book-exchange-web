import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as books from "@/lib/connect/books";
import Home from "@/pages/index";

const exampleBook = {
  title: "This is an example book",
  cover: "https://picsum.photos/seed/35613/1280/1920/",
  description: "This is an example book",
  published: "2020-1-1T23:59:59Z",
  publisher: "This is an example publisher",
  author: "No One",
  id: 1,
};

describe("Home", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a home page", () => {
    const res = { books: [exampleBook], isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    render(<Home />);

    expect(books.default).toBeCalledWith({ limit: 50 });
    expect(
      screen.getByRole("heading", {
        name: /Bookworm/i,
      })
    ).toBeInTheDocument();
  });

  it("renders a home page then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    render(<Home />);

    expect(books.default).toBeCalledWith({ limit: 50 });
    expect(
      screen.getByRole("heading", { name: /Bookworm/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("renders a home page then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<Home />);

    expect(books.default).toBeCalledWith({ limit: 50 });
    expect(
      screen.getByRole("heading", { name: /Bookworm/i })
    ).toBeInTheDocument();
    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });
});
