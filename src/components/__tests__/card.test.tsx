import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { exampleData } from "@/__mocks__/useBooksMock";
import Card, { LongCard } from "@/components/card";

describe("Card", () => {
  it("renders a book card correctly", () => {
    const { container } = render(<Card {...exampleData} />);

    expect(container.querySelector("figure a")).toHaveAttribute(
      "href",
      `/books/${exampleData.id}`
    );
    expect(container.querySelector("figure img")).toBeInTheDocument();
    expect(container.querySelector("h2")?.textContent).toBe(exampleData.title);
    expect(container.querySelector("p")?.textContent).toBe(exampleData.author);
  });

  it("snapshot a book card", () => {
    const { container } = render(<Card {...exampleData} />);

    expect(container).toMatchSnapshot();
  });

  it("snapshot a book skeleton card", () => {
    const { container } = render(<Card.Skeleton />);

    expect(container).toMatchSnapshot();
  });

  it("render a long card", () => {
    const { container } = render(<LongCard {...exampleData} />);

    expect(container.querySelector("figure a")).toHaveAttribute(
      "href",
      `/books/${exampleData.id}`
    );
    expect(container.querySelector("figure img")).toBeInTheDocument();
    expect(container.querySelector("h2")?.textContent).toBe(exampleData.title);
    expect(container.querySelector("p")?.textContent).toBe(exampleData.author);
  });

  it("snapshot a long card", () => {
    const { container } = render(<LongCard {...exampleData} />);

    expect(container).toMatchSnapshot();
  });

  it("snapshot a long card skeleton", () => {
    const { container } = render(<LongCard.Skeleton />);

    expect(container).toMatchSnapshot();
  });
});
