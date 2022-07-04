import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "@/components/logo";
import logoImage from "@/public/logo.svg";

describe("Logo", () => {
  it("Create a text logo", () => {
    const { container } = render(<Logo>Test Logo</Logo>);
    expect(container).toBeInTheDocument();
    expect(container.querySelector("h1")?.textContent).toEqual("Test Logo");
    expect(container.querySelector("a")?.href).toMatch(/([&/]$)/);
    expect(container.querySelector("img")).toBeNull();
  });

  it("snapshot a text logo", () => {
    const { container } = render(<Logo>Test Logo</Logo>);
    expect(container).toMatchSnapshot();
  });

  it("Create an image logo", () => {
    const { container } = render(<Logo src={logoImage} />);
    expect(container).toBeInTheDocument();
  });
});
