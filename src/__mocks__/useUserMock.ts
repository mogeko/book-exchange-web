import * as hooks from "@/lib/hooks/useUsers";
import { genExampleRes } from "@/__mocks__/useQueryMock";
import { faker } from "@faker-js/faker";

const mock = jest.spyOn(hooks, "useUser");

const useUserMock = {
  target: hooks.useUser,
  returnResult: () => ({
    withLogined: () =>
      mock.mockImplementation(() => genExampleRes({ data: exampleData })),
    withoutLogined: () => mock.mockImplementation(() => genExampleRes({})),
    error: () =>
      mock.mockImplementation(() => genExampleRes({ isError: true })),
    loading: () =>
      mock.mockImplementation(() => genExampleRes({ isLoading: true })),
  }),
};

export const exampleData: UserType = {
  uid: `${faker.datatype.number(10)!}`,
  avatar: faker.image.avatar(),
  username: faker.internet.userName(),
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  description: faker.lorem.paragraph(10),
  email: faker.internet.email(),
  city: faker.address.city(),
  birthdate: faker.date.birthdate().toUTCString(),
};

type UserType = hooks.UserType;

export default useUserMock;
