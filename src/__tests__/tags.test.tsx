import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as router from "next/router";
import Tags from "@/pages/tags/[tag]";
import * as hooks from "@/lib/useOnScreen";

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
    jest.spyOn(hooks, "default").mockImplementation(() => true);
    render(<Tags />);

    expect(router.useRouter).toBeCalledWith();
    expect(screen.getByText("Tag: test")).toBeInTheDocument();
  });
});
