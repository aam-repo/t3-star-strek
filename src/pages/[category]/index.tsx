import StarShip from "@/components/ships/StarShip";
import { CardsCarousel } from "@/components/utils/Slider";
import { api } from "@/utils/api";

import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  const isCategory = typeof category === "string" ? category : "";
  const url = `https://swapi.dev/api/${isCategory}/`;

  const film = api.films.getAllFilms.useQuery(
    { url: "https://swapi.dev/api/films/" },
    {}
  );

  const renderCategory = () => {
    switch (category) {
      case "starships":
        return <StarShip />;
      case "vehicle":
        return <div>Vehicles</div>;
      case "people":

      case "planets":
        return <div>Planets</div>;
      case "species":
        return <div>Species</div>;
      case "films":
        return (
          <div className=" h-screen flex-1 overflow-auto">
            {film.data?.results && (
              <CardsCarousel films={film?.data?.results} />
            )}
          </div>
        );
      default:
        return <div className="text-white">Category</div>;
    }
  };

  console.log("category", isCategory);
  console.log("renderCategory", renderCategory());

  return (
    <div
      className="  bg-cover bg-center bg-no-repeat pt-32 text-white"
      style={{
        backgroundImage: `url("/images/hero-image.jpg")`,
      }}
    >
      {renderCategory()}
    </div>
  );
};

export default Category;
