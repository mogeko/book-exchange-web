import handleQueryParam from "@/lib/utils/queryTools";

type exampleType = {
  example: string;
};

describe("queryTools", () => {
  it("should return a query string", () => {
    expect(handleQueryParam({ limit: 10, offset: 0 })).toBe(
      "limit=10&offset=0"
    );
    expect(
      handleQueryParam<keyof exampleType>({
        example_eq: "test",
        example_order: "asc",
      })
    ).toBe("example_eq=test&example_order=asc");
  });
});
