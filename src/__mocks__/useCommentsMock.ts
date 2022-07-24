import * as hooks from "@/lib/hooks/useComments";
import { genExampleRes } from "@/__mocks__/useQueryMock";
import { faker } from "@faker-js/faker";

const mock = jest.spyOn(hooks, "default");

const useCommentsMock = {
  target: hooks.default,
  returnResult: () => ({
    success: () =>
      mock.mockImplementation((param) =>
        genExampleRes({
          data: Array.from({ length: param?.limit! }, () => exampleData),
        })
      ),
    error: () =>
      mock.mockImplementation(() => genExampleRes({ isError: true })),
    loading: () =>
      mock.mockImplementation(() => genExampleRes({ isLoading: true })),
  }),
};

export const exampleData: CommentsType = {
  id: `cm${faker.datatype.number({ min: 1000000000, max: 100000000000 })}`,
  author_meta: {
    uid: `${faker.datatype.number({ min: 10000, max: 100000 })}`,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
  },
  meta: {
    short_review: faker.lorem.lines(1),
    rates: faker.datatype.number(100),
    likes: faker.datatype.number(1000),
    dislike: faker.datatype.number(1000),
    created_at: faker.date.past().toISOString(),
    location: faker.address.county(),
  },
  responds: Array.from(
    { length: faker.datatype.number({ min: 1, max: 10 }) },
    () => ({
      id: `cm${faker.datatype.number({ min: 1000000000, max: 100000000000 })}`,
      author_meta: {
        uid: `${faker.datatype.number({ min: 10000, max: 100000 })}`,
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
      },
      meta: {
        likes: faker.datatype.number(1000),
        dislike: faker.datatype.number(1000),
        created_at: faker.date.past().toISOString(),
        location: faker.address.county(),
      },
      belongs_to: `cm${faker.datatype.number({
        min: 1000000000,
        max: 100000000000,
      })}`,
      msg: faker.lorem.lines(1),
      is_folded: faker.datatype.boolean(),
    })
  ),
  belongs_to: `bk${faker.datatype.number(1000)}`,
  msg: faker.lorem.sentence(),
  is_folded: faker.datatype.boolean(),
};

type CommentsType = hooks.CommentsType[0];

export default useCommentsMock;
