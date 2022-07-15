import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Box from "@/layouts/boxes";

describe("Home", () => {
  it("renders a Display Box with Header", () => {
    const { container } = render(
      <Box title="Example Title">
        <></>
      </Box>
    );

    expect(container.querySelector("h1")?.textContent).toBe("Example Title");
  });

  it("snapshot a Display Box with Header", () => {
    const { container } = render(
      <Box title="Example Title">
        <></>
      </Box>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders a SubBox", () => {
    const { container } = render(
      <Box.SubBox title="Example SubBox">
        <></>
      </Box.SubBox>
    );

    expect(container.querySelector("h2")?.textContent).toBe("Example SubBox");
  });

  it("snapshot a SubBox", () => {
    const { container } = render(
      <Box.SubBox title="Example SubBox">
        <></>
      </Box.SubBox>
    );

    expect(container).toMatchSnapshot();
  });
});
