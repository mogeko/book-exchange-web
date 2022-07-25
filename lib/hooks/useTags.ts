import useQuery, { type Opts } from "@/lib/hooks/useQuery";

function useTags(opts?: Opts<TagsType>) {
  return useQuery<TagsType>("/tags", {}, opts);
}

export interface TagsType {
  [tagsGroup: string]: string[];
}

export default useTags;
