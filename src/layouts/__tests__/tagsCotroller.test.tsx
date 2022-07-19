import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useTagsMock from "@/__mocks__/useTagsMock";
import TagsCotroller from "@/layouts/tagsCotroller";

describe("TagsCotroller", () => {
  beforeEach(() => {
    useTagsMock.returnResult.success();
  });

  it("should render correctly", () => {
    const { container } = render(<TagsCotroller />);

    expect(container.querySelector("h1")?.textContent).toBe("Tags");
  });

  it("snapshot a TagsCotroller container", () => {
    const { container } = render(<TagsCotroller />);
    expect(container).toMatchSnapshot();
  });
});

describe("TagsCotroller with abnormal state", () => {
  it("renders TagsCotroller when error occurred", () => {
    useTagsMock.returnResult.error();
    const { container } = render(<TagsCotroller />);

    expect(container.querySelector("div")?.textContent).toEqual(
      "Network Error!"
    );
  });

  it("snapshot a TagsCotroller container when error occurred", () => {
    useTagsMock.returnResult.error();
    const { container } = render(<TagsCotroller />);

    expect(container).toMatchSnapshot();
  });

  it("renders TagsCotroller when loading", () => {
    useTagsMock.returnResult.loading();
    const { container } = render(<TagsCotroller />);

    expect(container.querySelector(".animate-pulse")).toBeInTheDocument();
  });

  it("snapshot a TagsCotroller container when loading", () => {
    useTagsMock.returnResult.loading();
    const { container } = render(<TagsCotroller />);

    expect(container).toMatchSnapshot();
  });
});
