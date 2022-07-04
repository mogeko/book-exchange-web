import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "@/components/user";

const exapleMenus = [
  { name: "Profile", href: "#", badge: "New" },
  { name: "Settings", href: "#" },
  { name: "Logout", href: "#" },
];

describe("User", () => {
  it("Create a user menu", () => {
    const { container } = render(<User menus={exapleMenus} />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector("a")).toBeInTheDocument();
  });

  it("snapshot a user menu", () => {
    const { container } = render(<User menus={exapleMenus} />);
    expect(container).toMatchSnapshot();
  });

  it("Create a user menu for mobile", () => {
    const { container } = render(<User.Mobile menus={exapleMenus} />);
    expect(container).toBeInTheDocument();
  });

  it("snapshot a user menu for mobile", () => {
    const { container } = render(<User.Mobile menus={exapleMenus} />);
    expect(container).toMatchSnapshot();
  });
});
