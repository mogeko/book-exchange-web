import handleQuery from "@/lib/utils/queryTools";
import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";

function useUsers(param: ParamProps = {}, opts: SWRConfiguration = {}) {
  const query = handleQuery("/users", param);
  const res: SWRResponse<UsersType> = useSWR(query, opts);
  const { data, error, ...otherRes } = res;

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

export function useUser(uid?: string, param = {}, opts: SWRConfiguration = {}) {
  const query = uid ? handleQuery(`/users/${uid}`, param) : null;
  const res: SWRResponse<UserType> = useSWR(query, opts);
  const { data, error, ...otherRes } = res;

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

interface ParamProps {
  limit?: number;
  page?: number;
}

export type UsersType = {
  uid: `${number}`;
  avatar: string;
  username: string;
  fullname: string;
  description: string;
  email: string;
}[];

export type UserType = {
  city: string;
  birthdate: string;
} & UsersType[0];

export default useUsers;
