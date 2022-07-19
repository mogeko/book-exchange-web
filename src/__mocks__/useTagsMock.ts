import * as hooks from "@/lib/hooks/useTags";

const mock = jest.spyOn(hooks, "default");

const useTagsMock = {
  target: hooks.default,
  returnResult: {
    success: () => mock.mockImplementation(() => genExampleRes()),
    error: () =>
      mock.mockImplementation(() =>
        genExampleRes({ tags: undefined, isError: true })
      ),
    loading: () =>
      mock.mockImplementation(() =>
        genExampleRes({ tags: undefined, isLoading: true })
      ),
  },
  exampleData: hooks.exampleData,
  genExampleTags,
  genExampleRes,
};

function genExampleRes(res: Partial<ResType> = {}): ResType {
  const exampleRes = {
    tags: genExampleTags({}),
    isValidating: false,
    isError: false,
    isLoading: false,
    mutate: jest.fn(),
  };

  return { ...exampleRes, ...res };
}

function genExampleTags(data: Partial<TagTypes> = {}) {
  return { ...hooks.exampleData, ...data };
}

type ResType = ReturnType<typeof hooks.default>;
type TagTypes = hooks.TagType;

export default useTagsMock;
