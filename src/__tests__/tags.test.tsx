import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useBooksInfiniteMock from "@/__mocks__/useBooksInfiniteMock";
import useOnScreenMock from "@/__mocks__/useOnScreenMock";
import useRouterMock from "@/__mocks__/useRouter";
import Tags from "@/pages/tags/[tag]";

describe("Tags", () => {
  beforeEach(() => {
    useOnScreenMock.not.visiable();
    useBooksInfiniteMock.returnResult().success();
    useRouterMock.returnResult({ query: { tag: "test" } });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a Tags", () => {
    render(<Tags />);

    expect(useRouterMock.target).toBeCalledWith();
    expect(screen.getByText("Tag: test")).toBeInTheDocument();
  });
});
