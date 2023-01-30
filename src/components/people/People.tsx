/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Container } from "@mantine/core";
import dynamic from "next/dynamic";
import type { StarWarsResult } from "../../utils/type";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import FilmCard from "./PersonCard";
import { Footer } from "../footer";
import { Paginate } from "../pagination";
const Section = dynamic(() => import("../utils/Section"), { ssr: false });

const People = ({
  splittedPage,
  activePage,
  total,
}: {
  splittedPage: StarWarsResult[][] | undefined;
  activePage: number;
  total: number;
}) => {
  gsap.registerPlugin(ScrollTrigger);

  const scroller = useRef(null);
  const skills = useRef(null);

  useEffect(() => {
    if (splittedPage) {
      const skillSet = gsap.utils.toArray(".skill-set");

      const to = gsap.to(skillSet, {
        xPercent: () => -100 * (skillSet.length - 1),
        ease: "linear",
        scrollTrigger: {
          trigger: scroller.current,
          markers: false,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          snap: 1 / (skillSet.length - 1),
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          end: () => "+=" + window.innerWidth,
        },
      });

      return () => {
        to.revert();
      };
    }
  }, [splittedPage]);

  return (
    <>
      {splittedPage ? (
        <>
          <div className=" font-bungee flex h-screen w-screen items-center justify-center  bg-black text-7xl text-purple-500">
            <p className="animate-bounce">Scroll down</p>
          </div>
          <div
            className="overflow-hidden  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/hero-image.jpg")`,
            }}
          >
            <div
              id="skills"
              ref={scroller}
              className=" relative m-0 flex h-screen w-[400vw] overflow-x-hidden  text-white"
            >
              {splittedPage &&
                splittedPage.map((item, index) => {
                  return (
                    <section
                      ref={skills}
                      className="skill-set ns-horizontal-section__item z-50 flex h-full w-screen items-center bg-transparent px-12"
                      key={index}
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
                })}
            </div>
          </div>
          <div className="font-bungee flex h-screen w-screen flex-col items-center justify-center gap-20 bg-black text-7xl text-purple-500">
            <Paginate activePage={activePage} total={total} />
            <Footer />
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};
export default People;
