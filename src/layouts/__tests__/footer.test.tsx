import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/layouts/footer";

describe("Footer", () => {
  it("create a footer without author", () => {
    render(<Footer time={1997} />);
    expect(document.querySelector(".footer-center p")!.textContent).toBe(
      "Copyright © 1997 - 2022, All right reserved."
    );
  });

  it("create a footer with author", () => {
    render(<Footer time={2022} author="Zheng Junyi" />);
    expect(document.querySelector(".footer-center p")!.textContent).toBe(
      "Copyright © 2022, All right reserved by Zheng Junyi."
    );
  });

  it("snapshot a footer", () => {
    const { container } = render(<Footer time={1997} author="Zheng Junyi" />);
    expect(container).toMatchSnapshot();
  });
});
