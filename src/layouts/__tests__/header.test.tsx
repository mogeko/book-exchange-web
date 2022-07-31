import "@testing-library/jest-dom";
import { render, screen } from "@/lib/utils/testUtils";
import Header from "@/layouts/header";

describe("Header", () => {
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
