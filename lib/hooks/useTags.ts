import handleQuery from "@/lib/utils/queryTools";
import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";

function useTags(param: ParamProps = {}, opts: SWRConfiguration = {}) {
  const query = handleQuery("/tags", param);
  const res: SWRResponse<TagsType> = useSWR(query, opts);
  const { data, error, ...otherRes } = res;

  return {
    tags: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

type ParamProps = {};

export interface TagsType {
  [tagsGroup: string]: string[];
}

export default useTags;
