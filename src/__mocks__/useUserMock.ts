import * as hooks from "@/lib/hooks/useUsers";

const mock = jest.spyOn(hooks, "useUser");

const useUserMock = {
  target: hooks.useUser,
  returnResult: () => ({
    withLogined: () => mock.mockImplementation(() => genExampleRes({})),
    withoutLogined: () =>
      mock.mockImplementation(() => genExampleRes({ user: undefined })),
    error: () =>
      mock.mockImplementation(() =>
        genExampleRes({ user: undefined, isError: true })
      ),
    loading: () =>
      mock.mockImplementation(() =>
        genExampleRes({ user: undefined, isLoading: true })
      ),
  }),
  genExampleRes,
  genExampleUser,
};

function genExampleRes(res: Partial<ResType> = {}): ResType {
  const exampleRes = {
    user: genExampleUser({}),
    isValidating: false,
    isError: false,
    isLoading: false,
    mutate: jest.fn(),
  };

  return { ...exampleRes, ...res };
}

function genExampleUser(data: Partial<UserType> = {}) {
  const defaultData = {
    avatar: "https://i.pravatar.cc/150?u=39184",
    email: "email@example.com",
    description: "This is an example user",
    username: "example-user",
    city: "Budapest",
    id: 1,
  };

  return { ...defaultData, ...data };
}

type ResType = ReturnType<typeof hooks.useUser>;
type UserType = hooks.UserType;

export default useUserMock;
