import { useState } from "react";
import { Pagination } from "@mantine/core";
import { useRouter } from "next/router";
import Link from "next/link";

export const Paginate = ({
  activePage,
  total,
}: {
  activePage: number;
  total: number;
}) => {
  const [page, setPage] = useState(activePage);
  const router = useRouter();

  return (
    <Pagination
      color={"blue"}
      position="center"
      radius={"xl"}
      styles={(theme) => ({
        item: {
          color: "white",

          "&[data-active]": {
            backgroundImage: theme.fn.gradient({ from: "red", to: "yellow" }),
          },
        },
      })}
      page={page}
      onChange={(page) => {
        setPage(page);
        void router.push(
          {
            pathname: router.pathname,
            query: { ...router.query, page },
          },
          undefined,
          {
            scroll: false,
          }
        );
      }}
      total={total}
    />
  );
};
