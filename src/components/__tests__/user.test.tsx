import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as swr from "swr";
import User from "@/components/user";

describe("User", () => {
  beforeEach(() => {
    const res: swr.SWRResponse = {
      data: { data: [{ name: "testItem", href: "#", badge: 1 }] },
      mutate: jest.fn(),
      isValidating: true,
    };
    jest.spyOn(swr, "default").mockReturnValue(res);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a user menu", () => {
    const { container } = render(<User />);
    expect(swr.default).toHaveBeenCalled();
    expect(container.querySelector("a")?.textContent).toEqual(
      "Sign in / Sign up"
    );
  });

  it("snapshot a user menu", () => {
    const { container } = render(<User />);
    expect(container).toMatchSnapshot();
  });

  it("renders a user menu with a user", () => {
    render(<User username="testUser" />);
    expect(screen.getByText("testUser")).toBeInTheDocument();
    expect(screen.getByText("testItem")).toBeInTheDocument();
  });

  it("snapshot a user menu with a user", () => {
    render(<User username="testUser" />);
    expect(screen).toMatchSnapshot();
  });
});
