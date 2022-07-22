import useQuery from "@/lib/utils/useQuery";
import { type SWRConfiguration } from "swr";

function useTags(param: ParamProps = {}, opts?: OptsType) {
  return useQuery<TagsType>("/tags", param, opts);
}

type ParamProps = {};

export interface TagsType {
  [tagsGroup: string]: string[];
}

type OptsType = SWRConfiguration<TagsType>;

export default useTags;
