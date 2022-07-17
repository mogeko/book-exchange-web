function handleQuery<T extends string>(url: string, params: QueryParamType<T>) {
  if (Object.keys(params).length === 0) return url;
  const queryParams = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return [url, queryParams].join("?");
}

type QueryParamSuffix =
  | "eq"
  | "ne"
  | "lt"
  | "gt"
  | "lte"
  | "gte"
  | "contains"
  | "startsWith"
  | "endsWith";

export type QueryParamType<T extends string> = {
  [key in `${T}_${QueryParamSuffix}`]?: number | string;
} & { [key in `${T}_order`]?: "asc" | "desc" } & {
  limit?: number;
  offset?: number;
};

export default handleQuery;
