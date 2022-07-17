import useSWR, { type SWRResponse } from "swr";
import handleQueryParam, { type QueryParamType } from "@/lib/utils/queryTools";

function useUsers(queryParam: QueryParamType<keyof UserType> = {}) {
  const query = queryParam
    ? `/users?${handleQueryParam(queryParam)}`
    : "/users";
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
  const query = queryParam
    ? `/users/${id}?${handleQueryParam(queryParam)}`
    : `/users/${id}`;
  const { data, error }: SWRResponse<UserType> = useSWR(query);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export interface UserType {
  avatar: string;
  city: string;
  description: string;
  email: string;
  id: number;
  username: string;
}

export default useUsers;
