import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { faker } from "@faker-js/faker";
import useQueryMock from "@/__mocks__/useQueryMock";
import withReadMore from "@/components/readMore";

const ReadMore = withReadMore(({ children }) => <div>{children}</div>);
const exampleData = faker.lorem.paragraph(50);
const exampleFoldedData = {
  text: faker.lorem.paragraph(10),
  is_folded: true,
};

describe("ReadMore", () => {
  beforeEach(() => {
    useQueryMock.returnResult({ data: { text: exampleData } });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a ReadMore without ReadMore button", () => {
    const { container } = render(
      <ReadMore
        foldedData={{ ...exampleFoldedData, is_folded: false }}
        url="/example/path"
      />
    );

    expect(screen.getByText(exampleFoldedData.text)).toBeInTheDocument();
    expect(container.querySelector("button")).not.toBeInTheDocument();
  });

  it("snapshots a ReadMore without ReadMore button", () => {
    const { container } = render(
      <ReadMore
        foldedData={{ ...exampleFoldedData, is_folded: false }}
        url="/example/path"
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a ReadMore with ReadMore button", () => {
    const { container } = render(
      <ReadMore foldedData={exampleFoldedData} url="/example/path" />
    );

    expect(screen.getByText(exampleFoldedData.text)).toBeInTheDocument();
    expect(container.querySelector("button")?.textContent).toBe(" Read more");
  });

  it("snapshots a ReadMore with ReadMore button", () => {
    const { container } = render(
      <ReadMore foldedData={exampleFoldedData} url="/example/path" />
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a ReadMore with ReadLess button", () => {
    const { container } = render(
      <ReadMore foldedData={exampleFoldedData} url="/example/path" />
    );
    fireEvent.click(container.querySelector("button")!);

    expect(screen.getByText(exampleData)).toBeInTheDocument();
    expect(container.querySelector("button")?.textContent).toBe(" Read less");
  });

  it("snapshots a ReadMore with ReadLess button", () => {
    const { container } = render(
      <ReadMore foldedData={exampleFoldedData} url="/example/path" />
    );
    fireEvent.click(container.querySelector("button")!);

    expect(container).toMatchSnapshot();
  });
});

describe("ReadMore with abnormal state", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a ReadMore when loading", () => {
    useQueryMock.returnResult({ isLoading: true });
    const { container } = render(
      <ReadMore foldedData={exampleFoldedData} url="/example/path" />
    );
    fireEvent.click(container.querySelector("button")!);

    expect(screen.getByText(exampleFoldedData.text)).toBeInTheDocument();
    expect(container.querySelector("button")?.textContent).toBe("Loading...");
  });

  it("snapshots a ReadMore when loading", () => {
    useQueryMock.returnResult({ isLoading: true });
    const { container } = render(
      <ReadMore foldedData={exampleFoldedData} url="/example/path" />
    );
    fireEvent.click(container.querySelector("button")!);

    expect(container).toMatchSnapshot();
  });

  it("renders a ReadMore when error", () => {
    useQueryMock.returnResult({ isError: true });
    const { container } = render(
      <ReadMore foldedData={exampleFoldedData} url="/example/path" />
    );
    fireEvent.click(container.querySelector("button")!);

    expect(screen.getByText("Network Error!")).toBeInTheDocument();
    expect(container.querySelector("button")).not.toBeInTheDocument();
  });

  it("snapshots a ReadMore when error", () => {
    useQueryMock.returnResult({ isError: true });
    const { container } = render(
      <ReadMore foldedData={exampleFoldedData} url="/example/path" />
    );
    fireEvent.click(container.querySelector("button")!);

    expect(container).toMatchSnapshot();
  });
});
