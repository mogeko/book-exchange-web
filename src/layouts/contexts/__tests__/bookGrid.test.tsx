import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useBooksMock from "@/__mocks__/useBooksMock";
import BookGrid from "@/layouts/contexts/bookGrid";

describe("bookGrid", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a BookGrid", () => {
    useBooksMock.returnResult(3).success();
    const { container } = render(<BookGrid limit={3} offset={5} />);

    expect(useBooksMock.target).toBeCalledWith({ limit: 3, offset: 5 });
    expect(useBooksMock.target).toBeCalledTimes(2);
    expect(container.querySelectorAll("figure").length).toBe(3);
  });

  it("snapshot a BookGrid", () => {
    useBooksMock.returnResult(10).success();
    const { container } = render(<BookGrid limit={10} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a BookGrid then error", () => {
    useBooksMock.returnResult(10).error();
    render(<BookGrid limit={10} />);

    expect(useBooksMock.target).toBeCalledWith({ limit: 10, offset: 0 });
    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("snapshot a BooksGrid then error", () => {
    useBooksMock.returnResult(10).error();
    const { container } = render(<BookGrid limit={10} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a Display BookGrid then loading", () => {
    useBooksMock.returnResult(10).loading();
    const { container } = render(<BookGrid limit={10} />);

    expect(useBooksMock.target).toBeCalledWith({ limit: 10, offset: 0 });
    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a BookGrid then loading", () => {
    useBooksMock.returnResult(10).loading();
    const { container } = render(<BookGrid limit={10} />);

    expect(container).toMatchSnapshot();
  });
});
