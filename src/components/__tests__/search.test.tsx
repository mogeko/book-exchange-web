import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "@/components/search";

describe("Search", () => {
  it("Create a search bar", () => {
    const { container } = render(<Search />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector("input")).toBeInTheDocument();
  });

  it("snapshot a search bar", () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });
});
