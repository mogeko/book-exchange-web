import { fireEvent, render, screen, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as books from "@/lib/connect/books";
import Display from "@/layouts/display";
import { useState } from "react";

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

  it("renders a Display with Header", () => {
    render(
      <Display>
        <Display.Header>TExample Title</Display.Header>
      </Display>
    );

    expect(
      screen.getByRole("heading", {
        name: /Example Title/i,
      })
    ).toBeInTheDocument();
  });

  it("renders a Display GridContext", () => {
    const exampleBooks = Array.from({ length: 20 }, () => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display.GridContext queryParam={{ limit: 20 }} />
    );

    expect(books.default).toBeCalledWith({ limit: 20 });
    expect(container.querySelectorAll("figure").length).toBe(10);
  });

  it("snapshot a Display GridContext", () => {
    const exampleBooks = Array.from({ length: 20 }, () => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display.GridContext queryParam={{ limit: 20 }} />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a Display GridContext then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    render(<Display.GridContext queryParam={{ limit: 20 }} />);

    expect(books.default).toBeCalledWith({ limit: 20 });
    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("snapshot a Display GridContext then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display.GridContext queryParam={{ limit: 20 }} />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a Display GridContext then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display.GridContext queryParam={{ limit: 20 }} />
    );

    expect(books.default).toBeCalledWith({ limit: 20 });
    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a Display GridContext then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(
      <Display.GridContext queryParam={{ limit: 20 }} />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a Display Pagination", () => {
    const hookResult = renderHook(() => useState(0));
    const { container } = render(
      <Display.Pagination
        index={hookResult.result.current[0]}
        setIndex={hookResult.result.current[1]}
        length={3}
      />
    );

    expect(container.querySelector("div")).toHaveClass("btn-group");
  });

  it("render a Display Pagination then lengh <= 1", () => {
    const hookResult = renderHook(() => useState(0));
    const { container } = render(
      <Display.Pagination
        index={hookResult.result.current[0]}
        setIndex={hookResult.result.current[1]}
        length={0}
      />
    );

    expect(container.hasChildNodes()).not.toBeTruthy();
  });

  it("try cleck pages buttons", () => {
    const hookResult = renderHook(() => useState(0));
    const { container } = render(
      <Display.Pagination
        index={hookResult.result.current[0]}
        setIndex={hookResult.result.current[1]}
        length={3}
      />
    );

    const buttons = container.querySelectorAll(".btn-group button");
    expect(buttons.length).toBe(5);
    expect(buttons[1]).toHaveClass("btn-active");
    fireEvent.click(buttons[2]);
    expect(hookResult.result.current[0]).toBe(1);
  });

  it("try cleck last/next buttons", () => {
    const hookResult = renderHook(() => useState(0));
    const { container } = render(
      <Display.Pagination
        index={hookResult.result.current[0]}
        setIndex={hookResult.result.current[1]}
        length={3}
      />
    );

    const buttons = container.querySelectorAll(".btn-group button");
    expect(buttons?.[1]).toHaveClass("btn-active");
    fireEvent.click(buttons?.[0] as HTMLButtonElement);
    expect(hookResult.result.current[0]).toBe(0);
    fireEvent.click(buttons?.[4] as HTMLButtonElement);
    expect(hookResult.result.current[0]).toBe(1);
  });

  it("snapshot a Display Pagination", () => {
    const hookResult = renderHook(() => useState(0));
    const { container } = render(
      <Display.Pagination
        index={hookResult.result.current[0]}
        setIndex={hookResult.result.current[1]}
        length={3}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
