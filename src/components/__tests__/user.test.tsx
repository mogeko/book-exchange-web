import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "@/components/user";
import * as users from "@/lib/connect/users";

const exampleUser = {
  avatar: "https://i.pravatar.cc/150?u=39184",
  id: 1,
  username: "Wkxapti",
};

describe("User", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a user menu without logined", () => {
    const res = { user: undefined, isError: false, isLoading: false };
    jest.spyOn(users, "useUser").mockImplementation(() => res);

    const { container } = render(<User />);
    expect(users.useUser).toBeCalledWith(1);
    expect(container.querySelector("a")?.textContent).toEqual(
      "Sign in / Sign up"
    );
  });

  it("snapshot a user menu without logined", () => {
    const res = { user: undefined, isError: false, isLoading: false };
    jest.spyOn(users, "useUser").mockImplementation(() => res);

    const { container } = render(<User />);
    expect(container).toMatchSnapshot();
  });

  it("renders user menu when error occurred", () => {
    const res = { user: undefined, isError: true, isLoading: false };
    jest.spyOn(users, "useUser").mockImplementation(() => res);

    const { container } = render(<User />);
    expect(container.querySelector("div")?.textContent).toEqual("Error...");
  });

  it("renders user menu is loading", () => {
    const res = { user: undefined, isError: false, isLoading: true };
    jest.spyOn(users, "useUser").mockImplementation(() => res);

    const { container } = render(<User />);
    expect(container.querySelector("div")?.textContent).toEqual("Loading...");
  });

  it("renders a user menu with logined", () => {
    const res = { user: exampleUser, isError: false, isLoading: false };
    jest.spyOn(users, "useUser").mockImplementation(() => res);

    render(<User />);
    expect(screen.getByText("Wkxapti")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("snapshot a user menu with logined", () => {
    const res = { user: exampleUser, isError: false, isLoading: false };
    jest.spyOn(users, "useUser").mockImplementation(() => res);

    const { container } = render(<User />);
    expect(container).toMatchSnapshot();
  });
});
