import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

type StarWarsResult = {
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
};

const splitArray = (longArray: StarWarsResult[]) => {
  if (!longArray) return;
  const newArr: StarWarsResult[][] = [];
  const size = 2;
  for (let i = 0; i < longArray.length; i += size) {
    newArr.push(longArray.slice(i, i + size));
  }

  return newArr;
};

export const characterData = createTRPCRouter({
  getPage: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      try {
        const res = await fetch(
          `https://swapi.dev/api/people/?page=${input.id}`
        );

        console.log("res", res);
        const data = (await res.json()) as StarWars;
        const error = { status: res.status, errorMessage: res.statusText };
        console.log("errorStatus", error);

        return { data, error };
      } catch (error) {
        console.log("error", error);
      }
    }),

  getSplittedPage: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      try {
        const res = await fetch(
          `https://swapi.dev/api/people/?page=${input.id}`
        );
        const data = (await res.json()) as StarWars;
        const error = { status: res.status, errorMessage: res.statusText };
        const splittedData = splitArray(data.results);
        return splittedData;
      } catch (error) {
        console.log("error", error);
      }
    }),
});
