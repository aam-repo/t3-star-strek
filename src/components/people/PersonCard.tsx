import {
  Card,
  createStyles,
  Image,
  AspectRatio,
  Text,
  Overlay,
} from "@mantine/core";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getUrlId } from "../utils/getUrlId";

const PersonCard = ({
  name,
  index,
  birth_year,
  url,
}: {
  name: string;
  index: number;
  birth_year: string;
  url: string;
}) => {
  const useStyles = createStyles((theme) => ({
    card: {
      transition: "transform 150ms ease, box-shadow 150ms ease",

      "&:hover": {
        transform: "scale(1.01)",
        boxShadow: theme.shadows.md,
      },
    },

    title: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 600,
    },
  }));

  const { ref, inView, entry } = useInView();
  useEffect(() => {
    if (inView) {
      console.log("in view");
    }
  }, [inView]);

  const { classes, theme } = useStyles();
  const router = useRouter();
  const image = `https://starwars-visualguide.com/assets/img/characters/${getUrlId(
    url
  )}.jpg`;
  return (
    <div className="flex w-[50vw] justify-center">
      <Card
        key={`${name}-${index}`}
        ref={ref}
        p="lg"
        radius="md"
        component="a"
        href="#"
        style={{
          backgroundImage: `url(${image})`,
          ...{ backgroundSize: "cover" },
        }}
        className={`${classes.card} 
         film-card my-44 mx-8  h-[30vh]  w-[24vw] bg-gray-800 bg-opacity-70 lg:h-[50vh] ${
           inView ? "anim-card" : ""
         }`}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={(e) => {
          e.preventDefault();
          return router.push(`/person/detail/${getUrlId(url)}`);
        }}
      >
        <Overlay
          gradient={`linear-gradient(105deg, ${theme.black} 10%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
          opacity={0.2}
          zIndex={0}
        />
        {/*         <AspectRatio ratio={1920 / 1080}>
          <Image
     
            src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
              url
            )}.jpg`}
            fit="contain"
            alt="image"
          />
        </AspectRatio> */}
        <Text
          color="dimmed"
          size="xs"
          transform="uppercase"
          weight={700}
          mt="md"
        >
          {birth_year}
        </Text>
        <Text className={`text-slate-200`} mt={5}>
          {name}
        </Text>
      </Card>
    </div>
  );
};

export default PersonCard;
