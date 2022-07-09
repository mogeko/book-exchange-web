import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as books from "@/lib/connect/books";
import Display from "@/layouts/display";

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

  it("renders a Display", () => {
    const exampleBooks = Array.from({ length: 20 }).map((_) => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display title="Example Title" queryParam={{ limit: 20 }} />
    );

    expect(books.default).toBeCalledWith({ limit: 20 });
    expect(
      screen.getByRole("heading", {
        name: /Example Title/i,
      })
    ).toBeInTheDocument();
    expect(container.querySelector(".btn-group")).toBeInTheDocument();
  });

  it("try cleck pages buttons", () => {
    const exampleBooks = Array.from({ length: 20 }).map((_) => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display title="Example Title" queryParam={{ limit: 20 }} />
    );

    const buttonGroup = container.querySelector(".btn-group");
    expect(buttonGroup).toBeInTheDocument();
    const buttons = buttonGroup?.querySelectorAll("button");
    expect(buttons).toHaveLength(4);
    expect(buttons?.[1]).toHaveClass("btn-active");
    fireEvent.click(buttons?.[2] as HTMLButtonElement);
    expect(buttons?.[2]).toHaveClass("btn-active");
  });

  it("try cleck last/next buttons", () => {
    const exampleBooks = Array.from({ length: 20 }).map((_) => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display title="Example Title" queryParam={{ limit: 20 }} />
    );

    const buttons = container.querySelectorAll(".btn-group button");
    expect(buttons?.[1]).toHaveClass("btn-active");
    fireEvent.click(buttons?.[0] as HTMLButtonElement);
    expect(buttons?.[1]).toHaveClass("btn-active");
    fireEvent.click(buttons?.[3] as HTMLButtonElement);
    expect(buttons?.[2]).toHaveClass("btn-active");
  });

  it("snapshot a Display", () => {
    const exampleBooks = Array.from({ length: 20 }).map((_) => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display title="Example Title" queryParam={{ limit: 20 }} />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a Display when limit < 10", () => {
    const exampleBooks = Array.from({ length: 20 }).map((_) => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display title="Example Title" queryParam={{ limit: 9 }} />
    );

    expect(books.default).toBeCalledWith({ limit: 9 });
    expect(
      screen.getByRole("heading", {
        name: /Example Title/i,
      })
    ).toBeInTheDocument();
    expect(container.querySelector(".btn-group")).not.toBeInTheDocument();
  });

  it("snpashot a Display when limit < 10", () => {
    const exampleBooks = Array.from({ length: 20 }).map((_) => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display title="Example Title" queryParam={{ limit: 9 }} />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a home page then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    render(<Display title="Example Title" queryParam={{ limit: 20 }} />);

    expect(books.default).toBeCalledWith({ limit: 20 });
    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("snapshot a home page then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display title="Example Title" queryParam={{ limit: 20 }} />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a home page then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display title="Example Title" queryParam={{ limit: 20 }} />
    );

    expect(books.default).toBeCalledWith({ limit: 20 });
    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a home page then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display title="Example Title" queryParam={{ limit: 20 }} />
    );

    expect(container).toMatchSnapshot();
  });
});
