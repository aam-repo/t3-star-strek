import { api } from "@/utils/api";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "@/server/api/root";
import { ShipCard } from "./ShipCard";
import { getUrlId } from "../utils/getUrlId";
import { Container, Grid } from "@mantine/core";
import { Paginate } from "../pagination";
import { useRouter } from "next/router";

type RouterOutput = inferRouterOutputs<AppRouter>;
type PostCreateOutput = RouterOutput["ZodSchemaType"]["getStarShips"];

const StarShip = () => {
  const router = useRouter();
  const { page } = router.query;
  const isPage = typeof page === "string" ? page : "1";
  const ships = api.ships.getStarShips.useQuery({ shipId: isPage }, {});
  console.log("ships", ships?.data);

  const getGridPosition = (index: number) => {
    switch (index) {
      case 0:
        return 4;
      case 1:
        return 8;
      case 2:
        return 8;
      case 3:
        return 4;
      case 4:
        3;
      case 5:
        return 3;
      case 6:
        return 6;
      default:
        if (index % 2 === 0) {
          return 6;
        } else {
          return 3;
        }
    }
  };

  return (
    <Container>
      {/*       <SimpleGrid cols={3} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
        {ships?.data?.results.map((ship) => (
          <div key={ship.name}>
            <ShipCard
              title={ship.name}
              description={ship.model}
              image={`https://starwars-visualguide.com/assets/img/starships/${getUrlId(
                ship.url
              )}.jpg`}
              action={{ label: "More info", link: "" }}
            />
          </div>
        ))}
      </SimpleGrid> */}
      <Grid>
        {ships?.data?.results.map((ship, index) => (
          <Grid.Col xs={getGridPosition(index)} key={ship.name}>
            <ShipCard
              title={ship.name}
              description={ship.model}
              image={`https://starwars-visualguide.com/assets/img/starships/${getUrlId(
                ship.url
              )}.jpg`}
              action={{ label: "More info", link: "" }}
            />
          </Grid.Col>
        ))}
      </Grid>
      <div className="py-10">
        <Paginate activePage={parseInt(isPage) || 1} total={4} />
      </div>
    </Container>
  );
};

export default StarShip;
