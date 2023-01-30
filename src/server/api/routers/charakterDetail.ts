import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

/* type StarWarsResult = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [];
  species: [];
  vehicles: [];
  starships: [];
  created: string;
  edited: string;
  url: string;
};

type StarWars = {
  count: number;
  next: string;
  previous: string;
  results: StarWarsResult[];
}; */

export const characterDetail = createTRPCRouter({
  getDetails: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      try {
        const res = await fetch(`https://swapi.dev/api/people/${input.id}`);
        const validateData = z
          .object({
            name: z.string(),
            height: z.string(),
            mass: z.string(),
            hair_color: z.string(),
            skin_color: z.string(),
            eye_color: z.string(),
            birth_year: z.string(),
            gender: z.string(),
            homeworld: z.string(),
            films: z.array(z.string()),
            species: z.array(z.string()),
            vehicles: z.array(z.string()),
            starships: z.array(z.string()),
            created: z.string(),
            edited: z.string(),
            url: z.string(),
          })
          .parse(await res.json());

        return validateData;
      } catch (error) {
        console.log("error", error);
      }
    }),
});
