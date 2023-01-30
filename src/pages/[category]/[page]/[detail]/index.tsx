import { useRouter } from "next/router";
import React from "react";
import { Detail } from "@/components/detail";
import { getUrlId } from "@/components/people/People";
import { CardsCarousel } from "@/components/utils/Slider";
import { api } from "@/utils/api";

const DetailPage = () => {
  const router = useRouter();
  const { detail } = router.query;
  const detailId = typeof detail === "string" ? detail : "";
  const {
    data: character,
    isLoading,
    isError,
  } = api.details.getDetails.useQuery({ id: detailId }, {});
  const movies = character?.films ? character.films : [""];

  const film = movies
    ? api.films.getFilm.useQuery({ films: movies }, {})
    : null;

  if (isLoading)
    <h1 className="flex justify-center text-5xl text-white">loading...</h1>;

  if (isError) {
    return (
      <div className="flex  flex-1 flex-col items-center justify-center gap-14 align-middle text-4xl text-white">
        <h1>Page not found</h1>
        <button onClick={() => router.back()}>Click here to go back</button>
      </div>
    );
  }
  const ship = character?.starships[0] ? character?.starships[0] : "";
  const starships = api.ships.getStarShips.useQuery({ shipId: ship }, {});
  console.log("starship", starships.data);

  return (
    <div className=" flex-1 overflow-auto">
      <Detail character={character} />
      <CardsCarousel films={film?.data} />
    </div>
  );
};

export default DetailPage;
