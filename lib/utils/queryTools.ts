function handleQueryParam<T extends string>(queryParams: QueryParamType<T>) {
  return Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
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

export default handleQueryParam;
