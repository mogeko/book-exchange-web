import * as hooks from "@/lib/hooks/useComments";
import { genExampleRes } from "@/__mocks__/useQueryMock";
import { faker } from "@faker-js/faker";

const mock = jest.spyOn(hooks, "default");

const useCommentMock = {
  target: hooks.default,
  returnResult: () => ({
    success: () =>
      mock.mockImplementation(() => genExampleRes({ data: exampleData })),
    error: () =>
      mock.mockImplementation(() => genExampleRes({ isError: true })),
    loading: () =>
      mock.mockImplementation(() => genExampleRes({ isLoading: true })),
  }),
};

export const exampleData: CommentType = {
  cm_id: `cm${faker.datatype.number({ min: 1000000000, max: 100000000000 })}`,
  msg: faker.lorem.paragraph(50),
};

type CommentType = hooks.CommentType;

export default useCommentMock;
