/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import type { StarWarsResult } from "../../utils/type";
import Draggable from "gsap/Draggable";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { Observer } from "gsap-trial/all";
import { useInView } from "react-intersection-observer";

// register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable, ScrollSmoother, Observer);
}
const FilmCard = dynamic(() => import("../people/PersonCard"), { ssr: false });

const Section = ({ item, key }: { item: StarWarsResult[]; key: number }) => {
  /*    const skills = useRef();
  useEffect(() => {
    const skillSet = document.querySelectorAll(".smooth-content");
    const filmCard = document.querySelectorAll(".film-card");
    const container: HTMLElement | null =
      document.querySelector(".section-container");

    if (!container) return;
    ScrollTrigger.create({
      trigger: ".smooth-content",
      animation: gsap.fromTo(".film-card", { scale: 0.1 }, { scale: 1 }),
      pin: true,
      start: "center center",
      end: "bottom top",
      scrub: 1, 
    });
  }, []); */

  return (
    <section
      className="smooth-content flex h-screen w-full justify-center"
      key={key}
    >
      {item.map(({ name, url, birth_year }, i) => {
        return (
          <FilmCard
            key={name}
            name={name}
            url={url}
            birth_year={birth_year}
            index={i}
          />
        );
      })}
    </section>
  );
};

export default Section;
