import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";
import * as tagsCotroller from "@/layouts/tagsCotroller";
import * as bookGrid from "@/components/contexts/bookGrid";

describe("Home", () => {
  beforeAll(() => {
    jest.spyOn(tagsCotroller, "default").mockImplementation(() => <></>);
    jest.spyOn(bookGrid, "default").mockImplementation(() => <></>);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders a home page", () => {
    const { container } = render(<Home />);

    expect(tagsCotroller.default).toBeCalled();
    expect(bookGrid.default).toBeCalled();
    expect(
      screen.getByRole("heading", {
        name: /Bookworm/i,
      })
    ).toBeInTheDocument();
    expect(container.querySelectorAll("h1.text-2xl").length).toBe(2);
  });
});
