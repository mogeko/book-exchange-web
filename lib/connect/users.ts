import useSWR, { type SWRResponse } from "swr";

function useUsers() {
  const { data, error }: SWRResponse<UserTypes[]> = useSWR("/users");
  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useUser(id: string | number) {
  const { data, error }: SWRResponse<UserTypes> = useSWR(`/users/${id}`);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

interface UserTypes {
  avatar: string;
  id: number;
  username: string;
}

export default useUsers;
