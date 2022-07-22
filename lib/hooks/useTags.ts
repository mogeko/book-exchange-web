import useQuery from "@/lib/hooks/useQuery";
import { type SWRConfiguration } from "swr";

function useTags(opts?: SWRConfiguration<TagsType>) {
  return useQuery<TagsType>("/tags", {}, opts);
}

export interface TagsType {
  [tagsGroup: string]: string[];
}

export default useTags;
