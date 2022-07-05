import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/layouts/header";
import * as menus from "@/lib/connect/menus";

describe("Header", () => {
  beforeEach(() => {
    const exampleMenus = { data: [{ name: "testItem", href: "#", badge: 1 }] };
    const res = { menus: exampleMenus, isLoading: false, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render correctly", () => {
    const { container } = render(<Header />);
    expect(menus.default).toHaveBeenCalled();
    expect(
      screen.getByRole("heading", { name: /Bookworm/i })
    ).toBeInTheDocument();
    expect(container.querySelector("nav.navbar a.btn")).toBeInTheDocument();
    expect(
      container.querySelector("nav.navbar span.badge")?.textContent
    ).toEqual("1");
  });

  it("snapshot a header", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
    expect(container.querySelector("nav.navbar")).toMatchSnapshot();
  });
});
