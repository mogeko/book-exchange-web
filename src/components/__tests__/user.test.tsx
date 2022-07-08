import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "@/components/user";
import * as users from "@/lib/connect/users";

const exampleUser = {
  avatar: "https://i.pravatar.cc/150?u=39184",
  email: "email@example.com",
  description: "This is an example user",
  username: "example-user",
  city: "Budapest",
  id: 1,
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
    expect(container.querySelector("div")?.textContent).toEqual("Login Error");
  });

  it("snapshot user menu when error occurred", () => {
    const res = { user: undefined, isError: true, isLoading: false };
    jest.spyOn(users, "useUser").mockImplementation(() => res);

    const { container } = render(<User />);
    expect(container).toMatchSnapshot();
  });

  it("renders user menu is loading", () => {
    const res = { user: undefined, isError: false, isLoading: true };
    jest.spyOn(users, "useUser").mockImplementation(() => res);

    const { container } = render(<User />);
    expect(container.querySelector("svg")).toHaveClass("animate-spin");
  });

  it("snapshot user menu is loading", () => {
    const res = { user: undefined, isError: false, isLoading: true };
    jest.spyOn(users, "useUser").mockImplementation(() => res);

    const { container } = render(<User />);
    expect(container).toMatchSnapshot();
  });

  it("renders a user menu with logined", () => {
    const res = { user: exampleUser, isError: false, isLoading: false };
    jest.spyOn(users, "useUser").mockImplementation(() => res);

    render(<User />);
    expect(screen.getByText("example-user")).toBeInTheDocument();
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
