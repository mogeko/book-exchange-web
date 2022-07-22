function handleQuery<T extends {}>(url: `/${string}`, params: T) {
  if (Object.keys(params).length === 0) return url;
  const queryParams = Object.entries(params)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return [url, queryParams].join("?");
}

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);

export default handleQuery;
