import CustomError from "../../error";
import { useRouter } from "next/dist/client/router";
import { api } from "@/utils/api";
import dynamic from "next/dynamic";
import { getTotalPages } from "@/components/utils/getTotalPages";

const LeadGrid = dynamic(() => import("@/components/people/People"), {
  ssr: false,
});
const Page = () => {
  const router = useRouter();
  const { page, category } = router.query;
  const personID = typeof page === "string" ? page : "";
  const { data: characters } = api.characters.getPage.useQuery(
    { id: personID },
    {}
  );
  const { data: splittedPage } = api.characters.getSplittedPage.useQuery(
    { id: personID },
    {}
  );
  const count = characters?.data.count;

  const pageId = typeof page === "string" ? parseInt(page) : 1;
  const error = characters?.error.status;
  if (error && error !== 200) {
    return (
      <CustomError status={error} message={characters?.error.errorMessage} />
    );
  }

  return (
    <div className=" overflow-hidden  pb-4 ">
      <LeadGrid
        splittedPage={splittedPage}
        activePage={pageId}
        total={getTotalPages(count)}
      />
    </div>
  );
};

export default Page;
