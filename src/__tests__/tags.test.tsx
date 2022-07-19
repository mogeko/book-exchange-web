import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useRouterMock from "@/__mocks__/useRouter";
import useOnScreenMock from "@/__mocks__/useOnScreenMock";
import useBooksInfiniteMock from "@/__mocks__/useBooksInfiniteMock";
import * as tagsCotroller from "@/layouts/tagsCotroller";
import Tags from "@/pages/tags/[tag]";

describe("Tags", () => {
  beforeAll(() => {
    useRouterMock.returnResult({ query: { tag: "test" } });
    useOnScreenMock.not.visiable();
    useBooksInfiniteMock.returnResult().success();
    jest.spyOn(tagsCotroller, "default").mockImplementation(() => <></>);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders a Tags", () => {
    render(<Tags />);

    expect(useRouterMock.target).toBeCalledWith();
    expect(tagsCotroller.default).toBeCalled();
    expect(
      screen.getByRole("heading", { name: /Tag: test/i })
    ).toBeInTheDocument();
  });
});
