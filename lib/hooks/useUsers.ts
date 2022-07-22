import useQuery from "@/lib/utils/useQuery";
import { type SWRConfiguration } from "swr";

function useUsers(param: ParamProps = {}, opts?: OptsType<UsersType>) {
  return useQuery<UsersType>("/users", param, opts);
}

export function useUser(uid?: string, param = {}, opts?: OptsType<UserType>) {
  return useQuery<UserType>(`/users/${uid}`, param, opts);
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

type OptsType<D = any, E = any> = SWRConfiguration<D, E>;

export default useUsers;
