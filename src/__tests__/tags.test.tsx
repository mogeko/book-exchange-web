import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as router from "next/router";
import Tags from "@/pages/tags/[tag]";

const exampleResult = {
  query: {
    tag: "test",
  },
};

describe("Tags", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a Tags", () => {
    jest.spyOn(router, "useRouter").mockReturnValue(exampleResult as any);
    render(<Tags />);

    expect(router.useRouter).toBeCalledWith();
    expect(screen.getByText("Tag: test")).toBeInTheDocument();
  });
});
