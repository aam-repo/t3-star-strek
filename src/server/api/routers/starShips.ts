import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const zodSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      name: z.string(),
      model: z.string(),
      manufacturer: z.string(),
      cost_in_credits: z.string(),
      length: z.string(),
      max_atmosphering_speed: z.string(),
      crew: z.string(),
      passengers: z.string(),
      cargo_capacity: z.string(),
      consumables: z.string(),
      hyperdrive_rating: z.string(),
      MGLT: z.string(),
      starship_class: z.string(),
      pilots: z.array(z.unknown()),
      films: z.array(z.string()),
      created: z.string(),
      edited: z.string(),
      url: z.string(),
    })
  ),
});

export const starShips = createTRPCRouter({
  getStarShips: publicProcedure
    .input(z.object({ shipId: z.string() }))
    .query(async ({ input }) => {
      try {
        const res = await fetch(
          `https://swapi.dev/api/starships/?page=${input.shipId}`
        );

        return zodSchema.parse(await res.json());
      } catch (error) {
        console.log("error", error);
      }
    }),
});

export type ZodSchemaType = typeof zodSchema._output;
