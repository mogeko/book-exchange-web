import * as hooks from "@/lib/hooks/useUsers";
import { faker } from "@faker-js/faker";

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
};

export const exampleData: UserType = {
  avatar: faker.image.avatar(),
  username: faker.internet.userName(),
  description: faker.lorem.paragraph(10),
  email: faker.internet.email(),
  city: faker.address.city(),
  uid: faker.datatype.number(10),
};

function genExampleRes(res: Partial<ResType> = {}): ResType {
  const exampleRes = {
    user: exampleData,
    isValidating: false,
    isError: false,
    isLoading: false,
    mutate: jest.fn(),
  };

  return { ...exampleRes, ...res };
}

type ResType = ReturnType<typeof hooks.useUser>;
type UserType = hooks.UserType;

export default useUserMock;
