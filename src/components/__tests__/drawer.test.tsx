import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DrawerButton, withDrawer } from "@/components/drawer";
import * as menus from "@/lib/connect/menus";

const ExampleDrawer = withDrawer((prop) => <div {...prop} />);

const exampleMenus = { data: [{ name: "testItem", href: "#", badge: 1 }] };

describe("User", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a globale menu", () => {
    const res = { menus: exampleMenus, isLoading: false, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(
      <ExampleDrawer toggleId="menu-test">test</ExampleDrawer>
    );
    expect(menus.default).toHaveBeenCalled();
    expect(screen.getByText("testItem")).toBeInTheDocument();
    expect(container.querySelector("span.badge")?.textContent).toEqual("1");
  });

  it("snapshot a globale menu", () => {
    const res = { menus: exampleMenus, isLoading: false, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(
      <ExampleDrawer toggleId="menu-test">test</ExampleDrawer>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders when data is loading", () => {
    const res = { menus: exampleMenus, isLoading: true, isError: false };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(
      <ExampleDrawer toggleId="menu-test">
        <></>
      </ExampleDrawer>
    );
    expect(menus.default).toHaveBeenCalled();
    expect(container.textContent).toEqual("Loading...");
  });

  it("renders when useMenus return error", () => {
    const res = { menus: exampleMenus, isLoading: false, isError: true };
    jest.spyOn(menus, "default").mockReturnValue(res);

    const { container } = render(
      <ExampleDrawer toggleId="menu-test">
        <></>
      </ExampleDrawer>
    );
    expect(menus.default).toHaveBeenCalled();
    expect(container.textContent).toEqual("Error...");
  });

  it("snapshot a DrawerButton", () => {
    const { container } = render(<DrawerButton toggleId="menu-test" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
