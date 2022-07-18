function handleQuery<T extends {}>(url: string, params: T) {
  if (Object.keys(params).length === 0) return url;
  const queryParams = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return [url, queryParams].join("?");
}

export default handleQuery;
