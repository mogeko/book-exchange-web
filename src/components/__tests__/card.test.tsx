import { render } from "@testing-library/react";
import Card from "@/components/card";
import "@testing-library/jest-dom";

describe("Card", () => {
  it("snapshot an empty Card", () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
  });

  it("renders a Card with a title, a description and a link", () => {
    const { container } = render(
      <Card href="https://nextjs.org">
        <Card.Title>Title</Card.Title>
        <Card.Desc>Description</Card.Desc>
      </Card>
    );
    expect(container).toMatchSnapshot();
  });
});
