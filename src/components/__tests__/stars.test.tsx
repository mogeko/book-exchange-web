import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StarsRate from "@/components/stars";

describe("StarsRate", () => {
  it("render a StarsRate when rates = 80", () => {
    const { container } = render(<StarsRate rates={80} />);

    expect(container.querySelectorAll("svg")).toHaveLength(5);
    expect(container.querySelector("span")?.textContent).toBe("8.0");
  });

  it("render a StarsRate when rates = 65", () => {
    const { container } = render(<StarsRate rates={65} />);

    expect(container.querySelectorAll("svg")).toHaveLength(5);
    expect(container.querySelector("span")?.textContent).toBe("6.5");
  });

  it("snapshot a StarRate when rates = 75", () => {
    const { container } = render(<StarsRate rates={75} />);

    expect(container).toMatchSnapshot();
  });
});
