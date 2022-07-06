import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout, { DefaultLayout } from "@/layouts/layout";

describe("Layout", () => {
  it("should render correctly", () => {
    render(
      <Layout>
        <div>hello, world!</div>
      </Layout>
    );
    expect(screen.getByText(/hello, world!/)).toBeInTheDocument();
  });

  it("snapshot a Layput container", () => {
    const { container } = render(
      <Layout>
        <div>hello, world!</div>
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render correctly with Header and Footer", () => {
    render(
      <DefaultLayout>
        <div>hello, world!</div>
      </DefaultLayout>
    );
    expect(screen.getByText(/hello, world!/)).toBeInTheDocument();
    expect(
      screen.getByText("Copyright © 2022, All right reserved by Zheng Junyi.")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Bookworm/i,
      })
    ).toBeInTheDocument();
  });
});
