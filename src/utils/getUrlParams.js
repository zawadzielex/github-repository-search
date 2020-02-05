const splitParam = param => param.split("=");

const getUrlVars = searchParams =>
  searchParams
    .slice(1)
    .split("&")
    .reduce(
      (prev, item) => ({ ...prev, [splitParam(item)[0]]: splitParam(item)[1] }),
      {}
    );

export default function getUrlParams(searchParams, parameter) {
  return getUrlVars(searchParams)[parameter];
}
