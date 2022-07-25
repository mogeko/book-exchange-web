import * as hooks from "@/lib/hooks/useBadges";
import { faker } from "@faker-js/faker";

const mock = jest.spyOn(hooks, "default");

const useBadgeMock = {
  target: hooks.default,
  returnResult: () => mock.mockImplementation(() => exampleData),
};

export const exampleData: BadgesType = {
  menus: Array.from({ length: 3 }, () => faker.datatype.number(100)),
  user: Array.from({ length: 2 }, () => faker.datatype.number(100)),
};

type BadgesType = ReturnType<typeof hooks.default>;

export default useBadgeMock;
