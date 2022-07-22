import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skeleton from "@/components/base/skeleton";

describe("Skeleton", () => {
  it("Create a Pulse Line skeleton", () => {
    const { container } = render(
      <Skeleton.Pulse className="test-pulse">
        <Skeleton.Line className="test-line" />
      </Skeleton.Pulse>
    );
    expect(container).toBeInTheDocument();
    expect(container.querySelector("div.animate-pulse")).toHaveClass(
      "test-pulse"
    );
    expect(container.querySelector("div.animate-pulse div")).toHaveClass(
      "test-line"
    );
  });

  it("snapshot a Pulse container", () => {
    const { container } = render(
      <Skeleton.Pulse>
        <></>
      </Skeleton.Pulse>
    );

    expect(container).toMatchSnapshot();
  });

  it("snapshot a Pulse Line skeleton", () => {
    const { container } = render(<Skeleton.Line className="animate-pulse" />);

    expect(container).toMatchSnapshot();
  });

  it("Create a Pulse Square skeleton", () => {
    const { container } = render(<Skeleton.Square className="animate-pulse" />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector("div")).toHaveClass("animate-pulse");
  });

  it("snapshot a Pulse Square skeleton", () => {
    const { container } = render(<Skeleton.Square className="animate-pulse" />);

    expect(container).toMatchSnapshot();
  });

  it("Create a Pulse Circle skeleton", () => {
    const { container } = render(<Skeleton.Circle className="animate-pulse" />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector("div")).toHaveClass("animate-pulse");
  });

  it("snapshot a Pulse Circle skeleton", () => {
    const { container } = render(<Skeleton.Circle className="animate-pulse" />);

    expect(container).toMatchSnapshot();
  });
});
