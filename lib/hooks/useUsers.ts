import handleQuery, { type QueryParamType } from "@/lib/utils/queryTools";
import useSWR, { type SWRResponse } from "swr";
import { faker } from "@faker-js/faker";

function useUsers(queryParam: QueryParamType<keyof UserType> = {}) {
  const query = handleQuery("/users", queryParam);
  const { data, error }: SWRResponse<UserType[]> = useSWR(query);
  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useUser(
  id: string | number,
  queryParam: QueryParamType<keyof UserType> = {}
) {
  const query = handleQuery(`/users/${id}`, queryParam);
  const { data, error }: SWRResponse<UserType> = useSWR(query);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const exampleData = {
  avatar: "https://i.pravatar.cc/150?u=39184",
  username: faker.internet.userName(),
  description: faker.lorem.paragraph(10),
  email: faker.internet.email(),
  city: faker.address.city(),
  id: faker.datatype.number(10),
};

export type UserType = Partial<typeof exampleData>;

export default useUsers;