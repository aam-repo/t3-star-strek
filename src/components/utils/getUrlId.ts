export const getUrlId = (url: string) => {
  const urlParts = url.split("/");
  const str = urlParts[urlParts.length - 2];

  if (str) {
    return str;
  }
  return "";
};
