import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
type FilmArray = {
  characters: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  title: string;
  planets: string[];
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
};

const schema = z.object({
  title: z.string(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.string(),
  characters: z.array(z.string()),
  planets: z.array(z.string()),
  starships: z.array(z.string()),
  vehicles: z.array(z.string()),
  species: z.array(z.string()),
  created: z.string(),
  edited: z.string(),
  url: z.string(),
});

const allFilmsSchema = z.object({
  count: z.number(),
  next: z.null(),
  previous: z.null(),
  results: z.array(
    z.object({
      title: z.string(),
      episode_id: z.number(),
      opening_crawl: z.string(),
      director: z.string(),
      producer: z.string(),
      release_date: z.string(),
      characters: z.array(z.string()),
      planets: z.array(z.string()),
      starships: z.array(z.string()),
      vehicles: z.array(z.string()),
      species: z.array(z.string()),
      created: z.string(),
      edited: z.string(),
      url: z.string(),
    })
  ),
});
export const films = createTRPCRouter({
  getFilm: publicProcedure
    .input(z.object({ films: z.array(z.string()) }))
    .query(async ({ input }) => {
      try {
        return await Promise.all(
          input.films.map(async (film) => {
            const res = await fetch(`${film}`);

            return schema.parse(await res.json());
          })
        );
      } catch (error) {
        console.log("error", error);
      }
    }),
  getAllFilms: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(async ({ input }) => {
      try {
        const res = await fetch(`${input.url}`);
        console.log("res", res);

        return allFilmsSchema.parse(await res.json());
      } catch (error) {
        console.log("error", error);
      }
    }),
});

interface FilmList {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}
export type ZodFilmType = typeof schema._output;
export type ZodAllFilmsType = typeof allFilmsSchema._output;
