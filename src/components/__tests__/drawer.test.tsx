import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DrawerButton, withDrawer } from "@/components/drawer";
import * as menus from "@/lib/connect/menus";

const ExampleDrawer = withDrawer((prop) => <div {...prop} />);

describe("User", () => {
  it("renders a globale menu", () => {
    render(<ExampleDrawer toggleId="menu-test">test</ExampleDrawer>);
    expect(screen.getByText("My library")).toBeInTheDocument();
  });

  it("snapshot a globale menu", () => {
    const { container } = render(
      <ExampleDrawer toggleId="menu-test">test</ExampleDrawer>
    );
    expect(container).toMatchSnapshot();
  });

  it("snapshot a DrawerButton", () => {
    const { container } = render(<DrawerButton toggleId="menu-test" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
