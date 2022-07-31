import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useUserMock, { exampleData } from "@/__mocks__/useUserMock";
import useBadgeMock from "@/__mocks__/useBadgesMock";
import User from "@/components/user";

describe("User", () => {
  beforeEach(() => {
    useBadgeMock.returnResult();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders a user menu without logined", () => {
    useUserMock.returnResult().withoutLogined();
    const { container } = render(<User />);

    expect(useUserMock.target).toBeCalledWith("1");
    expect(container.querySelector("a")?.textContent).toEqual(
      "Sign in / Sign up"
    );
  });

  it("snapshot a user menu without logined", () => {
    useUserMock.returnResult().withoutLogined();
    const { container } = render(<User />);

    expect(container).toMatchSnapshot();
  });

  it.skip("renders a user menu with logined", () => {
    useUserMock.returnResult().withLogined();
    render(<User />);

    expect(screen.getByText(exampleData.username)).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("snapshot a user menu with logined", () => {
    useUserMock.returnResult().withLogined();
    const { container } = render(<User />);

    expect(container).toMatchSnapshot();
  });
});

describe("User with abnormal state", () => {
  beforeEach(() => {
    useBadgeMock.returnResult();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it.skip("renders user menu when error occurred", () => {
    useUserMock.returnResult().error();
    const { container } = render(<User />);

    expect(container.querySelector("div")?.textContent).toEqual("Login Error");
  });

  it("snapshot user menu when error occurred", () => {
    useUserMock.returnResult().error();
    const { container } = render(<User />);

    expect(container).toMatchSnapshot();
  });

  it("renders user menu is loading", () => {
    useUserMock.returnResult().loading();
    const { container } = render(<User />);

    expect(container.querySelector("svg")).toHaveClass("animate-spin");
  });

  it("snapshot user menu is loading", () => {
    useUserMock.returnResult().loading();
    const { container } = render(<User />);

    expect(container).toMatchSnapshot();
  });
});
