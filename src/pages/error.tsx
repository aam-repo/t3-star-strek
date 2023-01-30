import { Button } from "@mantine/core/lib/Button";
import Link from "next/link";

export default function CustomError({
  status,
  message,
}: {
  status?: number;
  message: string;
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center text-white ">
      <div>
        <h1 className="flex gap-4 ">
          <span className="">{status ? status : ""}</span>
          <span>|</span> <span>Page {message.toLowerCase()}</span>
        </h1>
        <span className="mt-4  inline-flex w-full justify-center  text-xl ">
          <Link
            href={"/"}
            className="border-1 rounded-sm bg-[#5865F2] px-2 py-1 "
          >
            back Home
          </Link>
        </span>
      </div>
    </div>
  );
}
