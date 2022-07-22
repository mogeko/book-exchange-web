import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useBookMock, { exampleData } from "@/__mocks__/useBookMock";
import useRouterMock from "@/__mocks__/useRouter";
import BookView, { BookDesc, BookInfo } from "@/layouts/bookView";

describe("BookView", () => {
  beforeEach(() => {
    useBookMock.returnResult().success();
    useRouterMock.returnResult({ query: { id: "bk1000" } });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("render a BookView", () => {
    const { container } = render(<BookView />);

    expect(useRouterMock.target).toBeCalledWith();
    expect(useBookMock.target).toBeCalledWith("bk1000");
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
  beforeEach(() => {
    useRouterMock.returnResult({ query: { id: "bk1000" } });
  });

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

describe("BookInfo", () => {
  it("renders a BookInfo without meta data", () => {
    const { container } = render(
      <BookInfo title="title" cover={exampleData.cover} />
    );

    expect(container.querySelector("h1")?.textContent).toBeUndefined();
  });

  it("snapshot a BookInfo", () => {
    const { container } = render(
      <BookInfo title="title" cover={exampleData.cover} />
    );

    expect(container).toMatchSnapshot();
  });
});

describe("BookDesc", () => {
  it("render a BookDesc", () => {
    const { container } = render(
      <BookDesc title="Example Title" text={exampleData.desc?.long_desc} />
    );

    expect(container.querySelector("h2")?.textContent).toBe("Example Title");
    expect(container.querySelector("p")?.textContent).toBe(
      exampleData.desc?.long_desc
    );
  });

  it("render a BookDesc without text", () => {
    const { container } = render(<BookDesc title="Example Title" />);

    expect(container.querySelector("h2")?.textContent).toBeUndefined();
    expect(container.querySelector("p")).toBeNull();
  });

  it("snapshot a BookDesc", () => {
    const { container } = render(
      <BookDesc title="Example Title" text={exampleData.desc?.long_desc} />
    );

    expect(container).toMatchSnapshot();
  });
});
