import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { characterData } from "./routers/characterData";
import { characterDetail } from "./routers/charakterDetail";
import { films, ZodFilmType } from "./routers/films";
import { starShips, ZodSchemaType } from "./routers/starShips";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  characters: characterData,
  splittedPage: characterData,
  details: characterDetail,
  films: films,
  allFilms: films,
  ships: starShips,
  ZodSchemaType: starShips,
  ZodFilmType: films,
});

// export type definition of API
export type AppRouter = typeof appRouter;
