import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";
import * as tagsCotroller from "@/layouts/tagsCotroller";

describe("Home", () => {
  beforeAll(() => {
    jest.spyOn(tagsCotroller, "default").mockImplementation(() => <></>);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders a home page", () => {
    render(<Home />);

    expect(tagsCotroller.default).toBeCalled();
    expect(
      screen.getByRole("heading", {
        name: /Bookworm/i,
      })
    ).toBeInTheDocument();
  });
});
