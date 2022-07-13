import { fireEvent, render, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "@/components/pagination";
import { useState } from "react";

describe("Pagination", () => {
  it("renders a Pagination", () => {
    const hookResult = renderHook(() => useState(0));
    const { container } = render(
      <Pagination
        index={hookResult.result.current[0]}
        setIndex={hookResult.result.current[1]}
        length={3}
      />
    );

    expect(container.querySelector("div")).toHaveClass("btn-group");
  });

  it("render a Pagination then lengh <= 1", () => {
    const hookResult = renderHook(() => useState(0));
    const { container } = render(
      <Pagination
        index={hookResult.result.current[0]}
        setIndex={hookResult.result.current[1]}
        length={0}
      />
    );

    expect(container.hasChildNodes()).not.toBeTruthy();
  });

  it("try cleck pages buttons", () => {
    const hookResult = renderHook(() => useState(0));
    const { container } = render(
      <Pagination
        index={hookResult.result.current[0]}
        setIndex={hookResult.result.current[1]}
        length={3}
      />
    );

    const buttons = container.querySelectorAll(".btn-group button");
    expect(buttons.length).toBe(5);
    expect(buttons[1]).toHaveClass("btn-active");
    fireEvent.click(buttons[2]);
    expect(hookResult.result.current[0]).toBe(1);
  });

  it("try cleck last/next buttons", () => {
    const hookResult = renderHook(() => useState(0));
    const { container } = render(
      <Pagination
        index={hookResult.result.current[0]}
        setIndex={hookResult.result.current[1]}
        length={3}
      />
    );

    const buttons = container.querySelectorAll(".btn-group button");
    expect(buttons?.[1]).toHaveClass("btn-active");
    fireEvent.click(buttons?.[0] as HTMLButtonElement);
    expect(hookResult.result.current[0]).toBe(0);
    fireEvent.click(buttons?.[4] as HTMLButtonElement);
    expect(hookResult.result.current[0]).toBe(1);
  });

  it("snapshot a Pagination", () => {
    const hookResult = renderHook(() => useState(0));
    const { container } = render(
      <Pagination
        index={hookResult.result.current[0]}
        setIndex={hookResult.result.current[1]}
        length={3}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
