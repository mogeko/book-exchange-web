import { render } from "@testing-library/react";
import Card from "@/components/card";
import "@testing-library/jest-dom";

const exampleBook = {
  title: "This is an example book",
  cover: "https://picsum.photos/seed/35613/1280/1920/",
  author: "No One",
  id: 1,
};

describe("Card", () => {
  it("renders a book card correctly", () => {
    const { container } = render(<Card.Book {...exampleBook} />);

    expect(container.querySelector("figure a")).toHaveAttribute(
      "href",
      `/books/${exampleBook.id}`
    );
    expect(container.querySelector("figure img")).toBeInTheDocument();
    expect(container.querySelector("h2")?.textContent).toBe(exampleBook.title);
    expect(container.querySelector("p")?.textContent).toBe(exampleBook.author);
  });

  it("snapshot a book card", () => {
    const { container } = render(<Card.Book {...exampleBook} />);

    expect(container).toMatchSnapshot();
  });

  it("snapshot a book skeleton card", () => {
    const { container } = render(<Card.BookSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
