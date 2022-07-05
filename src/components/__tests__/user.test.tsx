import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "@/components/user";
import * as menus from "@/lib/connect/menus";

const exampleMenus = { data: [{ name: "testItem", href: "#", badge: 1 }] };

describe("User", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a user menu", () => {
    const res = { menus: exampleMenus, isLoading: false, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(<User />);
    expect(menus.default).toHaveBeenCalled();
    expect(container.querySelector("a")?.textContent).toEqual(
      "Sign in / Sign up"
    );
  });

  it("snapshot a user menu", () => {
    const res = { menus: exampleMenus, isLoading: false, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(<User />);
    expect(container).toMatchSnapshot();
  });

  it("renders when data is loading", () => {
    const res = { menus: exampleMenus, isLoading: true, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(<User />);
    expect(menus.default).toHaveBeenCalled();
    expect(container.textContent).toEqual("Loading...");
  });

  it("renders when useMenus return error", () => {
    const res = { menus: exampleMenus, isLoading: false, isError: true };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(<User />);
    expect(menus.default).toHaveBeenCalled();
    expect(container.textContent).toEqual("Error...");
  });

  it("renders a user menu with a user", () => {
    const res = { menus: exampleMenus, isLoading: false, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(<User username="testUser" />);
    expect(screen.getByText("testUser")).toBeInTheDocument();
    expect(screen.getByText("testItem")).toBeInTheDocument();
    expect(container.querySelector("span.badge")?.textContent).toEqual("1");
  });

  it("snapshot a user menu with a user", () => {
    const res = { menus: exampleMenus, isLoading: false, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(<User username="testUser" />);
    expect(container).toMatchSnapshot();
  });

  it("renders a user menu for mobile", () => {
    const res = { menus: exampleMenus, isLoading: false, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(<User.Mobile />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("snapshot a user menu for mobile", () => {
    const res = { menus: exampleMenus, isLoading: false, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(<User.Mobile />);
    expect(container).toMatchSnapshot();
  });
});
