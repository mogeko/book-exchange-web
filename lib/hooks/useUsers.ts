import handleQuery from "@/lib/utils/queryTools";
import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";
import { faker } from "@faker-js/faker";

function useUsers(param: ParamProps = {}, opts: SWRConfiguration = {}) {
  const query = handleQuery("/users", param);
  const res: SWRResponse<UserType[]> = useSWR(query, opts);
  const { data, error, ...otherRes } = res;

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export function useUser(id: number, param = {}, opts: SWRConfiguration = {}) {
  const query = handleQuery(`/users/${id}`, param);
  const res: SWRResponse<UserType> = useSWR(query, opts);
  const { data, error, ...otherRes } = res;

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export const exampleData = {
  avatar: faker.image.avatar(),
  username: faker.internet.userName(),
  description: faker.lorem.paragraph(10),
  email: faker.internet.email(),
  city: faker.address.city(),
  id: faker.datatype.number(10),
};

export type UserType = Partial<typeof exampleData>;

interface ParamProps {
  limit?: number;
  page?: number;
}

export default useUsers;
