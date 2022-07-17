import handleQuery from "@/lib/utils/queryTools";

type exampleType = {
  example: string;
};

describe("queryTools", () => {
  it("should return a query string", () => {
    expect(handleQuery("/test", { limit: 10, offset: 0 })).toBe(
      "/test?limit=10&offset=0"
    );
    expect(
      handleQuery<keyof exampleType>("/test", {
        example_eq: "test",
        example_order: "asc",
      })
    ).toBe("/test?example_eq=test&example_order=asc");
  });
});
