export const getTotalPages = (count?: number) => {
  if (typeof count === "number") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const total = count;
    const pages = Math.ceil(total / 10);
    return pages;
  }
  return 1;
};
