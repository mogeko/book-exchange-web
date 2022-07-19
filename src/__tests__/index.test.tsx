import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";
import useTagsMock from "@/__mocks__/useTagsMock";

describe("Home", () => {
  beforeAll(() => {
    useTagsMock.returnResult.success();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders a home page", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /Bookworm/i,
      })
    ).toBeInTheDocument();
  });
});
