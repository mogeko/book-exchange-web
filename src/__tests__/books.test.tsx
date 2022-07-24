import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import useBookMock, { exampleData } from "@/__mocks__/useBookMock";
import { BookView } from "@/pages/books/[id]";

describe("BookView", () => {
  beforeEach(() => {
    useBookMock.returnResult().success();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("render a BookView", () => {
    const { container } = render(<BookView id={exampleData.id} />);

    expect(useBookMock.target).toBeCalledWith(exampleData.id);
    expect(container.querySelector("h1")?.textContent).toBe(exampleData.title);
    expect(container.querySelectorAll("div.inline-flex").length).toBe(
      Object.keys(exampleData.mate).length
    );
  });

  it("snapshot a BookView", () => {
    const { container } = render(<BookView />);

    expect(container).toMatchSnapshot();
  });
});

describe("BookView with abnormal state", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a BookView when error occurred", () => {
    useBookMock.returnResult().error();
    const { container } = render(<BookView />);

    expect(container.querySelector("div")?.textContent).toEqual(
      "Network Error!"
    );
  });

  it("snapshot a BookView when error occurred", () => {
    useBookMock.returnResult().error();
    const { container } = render(<BookView />);

    expect(container).toMatchSnapshot();
  });

  it("renders a BookView when loading", () => {
    useBookMock.returnResult().loading();
    const { container } = render(<BookView />);

    expect(container.querySelector(".animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a BookView when loading", () => {
    useBookMock.returnResult().loading();
    const { container } = render(<BookView />);

    expect(container).toMatchSnapshot();
  });
});
