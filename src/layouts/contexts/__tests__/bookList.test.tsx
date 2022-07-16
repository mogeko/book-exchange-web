import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as books from "@/lib/connect/books";
import BookList from "@/layouts/contexts/bookList";
import useOnScreenMock from "@/__mocks__/useOnScreenMock";
import useBooksInfiniteMock from "@/__mocks__/useBooksInfiniteMock";

describe("bookList", () => {
  beforeEach(() => {
    useOnScreenMock.not.visiable();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a BookList", () => {
    useBooksInfiniteMock.returnResult().success();
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(books.useBooksInfinite).toBeCalledWith({ limit: 10, offset: 20 });
    expect(container.querySelectorAll("figure").length).toBe(30);
  });

  it("snapshot a BookList", () => {
    useBooksInfiniteMock.returnResult().success();
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a BookList then error", () => {
    useBooksInfiniteMock.returnResult().error();
    render(<BookList limit={10} offset={20} />);

    expect(books.useBooksInfinite).toBeCalledWith({ limit: 10, offset: 20 });
    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("snapshot a BookList then error", () => {
    useBooksInfiniteMock.returnResult().error();
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a Display BookList then loading", () => {
    useBooksInfiniteMock.returnResult().loading();
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(books.useBooksInfinite).toBeCalledWith({ limit: 10, offset: 20 });
    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a BookList then loading", () => {
    useBooksInfiniteMock.returnResult().loading();
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });
});
