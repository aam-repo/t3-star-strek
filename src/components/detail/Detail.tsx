import {
  createStyles,
  Image,
  Container,
  Title,
  List,
  ThemeIcon,
} from "@mantine/core";

import { getUrlId } from "../utils/getUrlId";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",

    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    maxWidth: 300,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export function Detail({
  character,
}: {
  character:
    | {
        height: string;
        name: string;
        mass: string;
        hair_color: string;
        skin_color: string;
        eye_color: string;
        birth_year: string;
        gender: string;
        homeworld: string;
        films: string[];
        species: string[];
        vehicles: string[];
        starships: string[];
        created: string;
        edited: string;
        url: string;
      }
    | undefined;
}) {
  const { classes } = useStyles();

  return (
    <div className="m-10  rounded-md bg-slate-100 ">
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>{character?.name}</Title>
            {/*         <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text> */}

            <List
              mt={30}
              spacing="sm"
              size="sm"
              color="light"
              icon={
                <ThemeIcon size={20} radius="xl">
                  {""}
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Birth year</b> – {character?.birth_year}
              </List.Item>
              <List.Item>
                <b>Gender</b> – {character?.gender}
              </List.Item>
              <List.Item>
                <b>Height</b> – {character?.height}
              </List.Item>
              <List.Item>
                <b>Mass</b> – a{character?.mass}
              </List.Item>
              <List.Item>
                <b>Hair color</b> – {character?.hair_color}
              </List.Item>
              <List.Item>
                <b>Eye color</b> – {character?.eye_color}
              </List.Item>
              <List.Item>
                <b>Skin color</b> – {character?.skin_color}
              </List.Item>
              <List.Item>
                <b>Homeworld</b> – {character?.homeworld}
              </List.Item>
            </List>

            {/*            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Go to
              </Button>
            </Group> */}
          </div>

          <Image
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
              character?.url || ""
            )}.jpg`}
            className={`${classes.image} `}
            alt="image"
          />
        </div>
      </Container>
    </div>
  );
}
