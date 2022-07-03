import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/layouts/header";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { name: /Bookworm/i })
    ).toBeInTheDocument();
  });

  it("snapshot a header", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
