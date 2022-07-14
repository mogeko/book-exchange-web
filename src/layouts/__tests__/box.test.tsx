import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as books from "@/lib/connect/books";
import Box from "@/layouts/box";

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

  it("renders a Display Box with Header", () => {
    const { container } = render(
      <Box title="Example Title">
        <></>
      </Box>
    );

    expect(container.querySelector("h1")?.textContent).toBe("Example Title");
  });

  it("snapshot a Display Box with Header", () => {
    const { container } = render(
      <Box title="Example Title">
        <></>
      </Box>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a SubBox", () => {
    const { container } = render(
      <Box.SubBox title="Example SubBox">
        <></>
      </Box.SubBox>
    );

    expect(container.querySelector("h2")?.textContent).toBe("Example SubBox");
  });

  it("snapshot a SubBox", () => {
    const { container } = render(
      <Box.SubBox title="Example SubBox">
        <></>
      </Box.SubBox>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a GridBooks", () => {
    const exampleBooks = Array.from({ length: 20 }, () => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<Box.GridBooks limit={20} />);

    expect(books.default).toBeCalledWith({ limit: 20 });
    expect(container.querySelectorAll("figure").length).toBe(10);
  });

  it("snapshot a GridBooks", () => {
    const exampleBooks = Array.from({ length: 20 }, () => exampleBook);
    const res = { books: exampleBooks, isError: false, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<Box.GridBooks limit={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a GridBooks then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    render(<Box.GridBooks limit={20} />);

    expect(books.default).toBeCalledWith({ limit: 20 });
    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("snapshot a GridBooks then error", () => {
    const res = { books: [], isError: true, isLoading: false };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<Box.GridBooks limit={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a Display GridBooks then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);
    const { container } = render(<Box.GridBooks limit={20} />);

    expect(books.default).toBeCalledWith({ limit: 20 });
    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a GridBooks then loading", () => {
    const res = { books: [], isError: false, isLoading: true };
    jest.spyOn(books, "default").mockImplementation(() => res);

    const { container } = render(<Box.GridBooks limit={20} />);

    expect(container).toMatchSnapshot();
  });
});
