import handleQuery from "@/lib/utils/queryTools";
import useSWR, { type SWRResponse, type SWRConfiguration } from "swr";
import { faker } from "@faker-js/faker";

function useTags(param: ParamProps = {}, opts: SWRConfiguration = {}) {
  const query = handleQuery("/tags", param);
  const res: SWRResponse<TagType> = useSWR(query, opts);
  const { data, error, ...otherRes } = res;

  return {
    tags: data,
    isLoading: !error && !data,
    isError: error,
    ...otherRes,
  };
}

/**
 * It will be randomly generate data like this:
 *
 * {
 *   <tags_group>: [<tag>, <tag>, ..., <tag>],
 *   <tags_group>: [<tag>, <tag>, ..., <tag>],
 *   ...
 * }
 */
export const exampleData = Array.from(
  { length: faker.datatype.number({ min: 3, max: 5 }) },
  () => faker.random.word()
).reduce((target: Record<string, string[]>, key) => {
  target[key] = Array.from(
    { length: faker.datatype.number({ min: 2, max: 10 }) },
    () => faker.random.word()
  );
  return target;
}, {});

export type TagType = Partial<typeof exampleData>;

type ParamProps = {};

export default useTags;
