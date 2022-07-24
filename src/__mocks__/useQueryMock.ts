import * as hooks from "@/lib/hooks/useQuery";

const mock = jest.spyOn(hooks, "default");

const useQueryMock = {
  target: hooks.default,
  returnResult: (res = {}) => mock.mockImplementation(() => genExampleRes(res)),
};

export function genExampleRes(res: Partial<ResType> = {}) {
  const exampleRes = {
    data: undefined,
    isValidating: false,
    isError: false,
    isLoading: false,
    mutate: jest.fn(),
  };

  return { ...exampleRes, ...res };
}

type ResType = hooks.QueryReturn;

export default useQueryMock;
