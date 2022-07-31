import useQuery, { type Opts } from "./useQuery";

function useBadge(id: string, opts?: Opts<BadgesType>) {
  const { data, isError } = useQuery<BadgesType>(`/badges/${id}`, {}, opts);
  const handleZero = (badge: number) => (badge === 0 ? null : badge);

  if (isError || !data) return { menus: [], user: [] };
  return {
    menus: data.menus.map(handleZero),
    user: data.user.map(handleZero),
  };
}

export interface BadgesType {
  uid: `${number}`;
  menus: number[];
  user: number[];
}

export default useBadge;
