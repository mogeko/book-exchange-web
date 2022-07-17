import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useBooksInfiniteMock from "@/__mocks__/useBooksInfiniteMock";
import useOnScreenMock from "@/__mocks__/useOnScreenMock";
import BookList from "@/layouts/contexts/bookList";

describe("bookList", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a BookList", () => {
    useOnScreenMock.not.visiable();
    useBooksInfiniteMock.returnResult(4, 7).success();
    const { container } = render(<BookList limit={10} offset={20} />);
    const mockTarget = useBooksInfiniteMock.target;

    expect(mockTarget).toBeCalledWith({ limit: 10, offset: 20 });
    expect(container.querySelectorAll("figure").length).toBe(28);
  });

  it("snapshot a BookList", () => {
    useOnScreenMock.not.visiable();
    useBooksInfiniteMock.returnResult().success();
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a BookList when the screen touches the bottom", () => {
    useOnScreenMock.visiable();
    useBooksInfiniteMock.returnResult().success();
    render(<BookList limit={10} offset={20} />);

    expect(useBooksInfiniteMock.setSizeMock).toBeCalledTimes(1);
    expect(useBooksInfiniteMock.setSizeMock).toBeCalledWith(2);
  });

  it("renders a BookList then error", () => {
    useOnScreenMock.not.visiable();
    useBooksInfiniteMock.returnResult().error();
    render(<BookList limit={10} offset={20} />);

    expect(screen.getByText("Network Error!")).toBeInTheDocument();
  });

  it("snapshot a BookList then error", () => {
    useOnScreenMock.not.visiable();
    useBooksInfiniteMock.returnResult().error();
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });

  it("renders a Display BookList then loading", () => {
    useOnScreenMock.not.visiable();
    useBooksInfiniteMock.returnResult().loading();
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container.querySelector("div.animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a BookList then loading", () => {
    useOnScreenMock.not.visiable();
    useBooksInfiniteMock.returnResult().loading();
    const { container } = render(<BookList limit={10} offset={20} />);

    expect(container).toMatchSnapshot();
  });
});
