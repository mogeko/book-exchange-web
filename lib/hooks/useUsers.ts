import useQuery from "@/lib/hooks/useQuery";
import { type SWRConfiguration } from "swr";

function useUsers(param: ParamProps = {}, opts?: SWRConfiguration<UsersType>) {
  return useQuery<UsersType>("/users", param, opts);
}

export function useUser(uid?: string, opts?: SWRConfiguration<UserType>) {
  return useQuery<UserType>(uid ? `/users/${uid}` : null, {}, opts);
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
