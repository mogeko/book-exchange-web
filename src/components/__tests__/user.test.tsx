import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "@/components/user";
import * as menus from "@/lib/connect/menus";

describe("User", () => {
  it("renders a user menu", () => {
    const { container } = render(<User />);
    expect(container.querySelector("a")?.textContent).toEqual(
      "Sign in / Sign up"
    );
  });

  it("snapshot a user menu", () => {
    const { container } = render(<User />);
    expect(container).toMatchSnapshot();
  });

  it("renders a user menu with a user", () => {
    render(<User username="testUser" />);
    expect(screen.getByText("testUser")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("snapshot a user menu with a user", () => {
    const { container } = render(<User username="testUser" />);
    expect(container).toMatchSnapshot();
  });

  it("renders a user menu for mobile", () => {
    const { container } = render(<User.Mobile />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("snapshot a user menu for mobile", () => {
    const { container } = render(<User.Mobile />);
    expect(container).toMatchSnapshot();
  });
});
