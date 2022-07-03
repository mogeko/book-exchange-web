import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Container from "@/layouts/container";

describe("Container", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Container>
        <div>hello, world!</div>
      </Container>
    );
    expect(container).toBeInTheDocument();
  });

  it("snapshot a container", () => {
    const { container } = render(
      <Container>
        <div>hello, world!</div>
      </Container>
    );
    expect(container).toMatchSnapshot();
  });
});
