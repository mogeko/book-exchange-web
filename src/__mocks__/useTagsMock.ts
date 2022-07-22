import * as hooks from "@/lib/hooks/useTags";
import { faker } from "@faker-js/faker";

const mock = jest.spyOn(hooks, "default");

const useTagsMock = {
  target: hooks.default,
  returnResult: {
    success: () => mock.mockImplementation(() => genExampleRes()),
    error: () =>
      mock.mockImplementation(() =>
        genExampleRes({ data: undefined, isError: true })
      ),
    loading: () =>
      mock.mockImplementation(() =>
        genExampleRes({ data: undefined, isLoading: true })
      ),
  },
  genExampleRes,
};

export const exampleData: TagTypes = Array.from(
  { length: faker.datatype.number({ min: 3, max: 5 }) },
  () => faker.random.word()
).reduce((target: Record<string, string[]>, key) => {
  target[key] = Array.from(
    { length: faker.datatype.number({ min: 2, max: 10 }) },
    () => faker.random.word()
  );
  return target;
}, {});

function genExampleRes(res: Partial<ResType> = {}): ResType {
  const exampleRes = {
    data: exampleData,
    isValidating: false,
    isError: false,
    isLoading: false,
    mutate: jest.fn(),
  };

  return { ...exampleRes, ...res };
}

type ResType = ReturnType<typeof hooks.default>;
type TagTypes = hooks.TagsType;

export default useTagsMock;
