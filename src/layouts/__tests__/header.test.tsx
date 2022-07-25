import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useBadgeMock from "@/__mocks__/useBadgesMock";
import Header from "@/layouts/header";

describe("Header", () => {
  beforeEach(() => {
    useBadgeMock.returnResult();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render correctly", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { name: /Bookworm/i })
    ).toBeInTheDocument();
  });
});
