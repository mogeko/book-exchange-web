import handleQuery from "@/lib/utils/queryTools";
import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";

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

export type UserType = {
  avatar: string;
  username: string;
  description: string;
  email: string;
  city: string;
  id: number;
};

interface ParamProps {
  limit?: number;
  page?: number;
}

export default useUsers;
