/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { LegacyRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// typical import

// get other plugins:

import Draggable from "gsap/Draggable";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import IndicationNav from "../navbar/IndicationNav";

// register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable, ScrollSmoother);
}
const mockdata = [
  {
    title: "Top 10 places to visit in Norway this summer",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 18, 2022",
  },
  {
    title: "Best forests to visit in North America",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 27, 2022",
  },
  {
    title: "Hawaii beaches review: better than you think",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2022",
  },
  {
    title: "Mountains at night: 12 best locations to enjoy the view",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 12, 2022",
  },
];

const setCenter = () => {
  const thisCard = document.querySelector(".myDiv"); // get element

  if (!thisCard) return {};
  const rect = thisCard.getBoundingClientRect(); // get element's size/position
  const view = document.documentElement; // get window/viewport size
  const delta = {
    x: Math.round(view.clientWidth / 2 - rect.x - rect.width / 2),
    y: Math.round(view.clientHeight / 2 - rect.y - rect.height / 2),
  };
  console.log("thisCard", thisCard);
  console.log("view", view);
  console.log("rect", rect);
  console.log("delta", delta);
  return delta;
};
setCenter();

const Test = () => {
  const trigger1 = useRef();
  const trigger2 = useRef();
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      content: "#scroll-smoother-container",
      smooth: 3,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      //preventDefault: true,
      ease: "power4.out",
      smoothTouch: 0.1,
    });
    smoother.effects("img", { speed: "auto" });
  }, []);
  /*   const trigger1 = useRef();
  const trigger2 = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        content: "#content",
        wrapper: "#wrapper",
        smooth: 1,
        smoothTouch: 0.1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".accordions",
          pin: true,

          scrub: 1,
          ease: "linear",
        },
      });

      tl.to(".accordion .text", {
        height: 0,
        paddingBottom: 0,
        opacity: 0,
        stagger: 0.5,
      });
      tl.to(
        ".accordion",
        {
          marginBottom: 1,
          stagger: 0.5,
          translateY: -195,
        },
        "<"
      );

      ScrollTrigger.create({
        trigger: trigger1.current,
        animation: tl,

        scrub: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="wrapper " classNameNameName="">
      <span> safsadfasddddddddddddddd</span>
      <div id="content">
        <div classNameName="spacer"></div>
        <div classNameName="accordions">
          <div classNameName="accordion">
            <div classNameName="title">All-screen design.</div>
            <div classNameName="text">
              Lets you immerse yourself in whatever you’re reading, watching, or
              creating. The 10.9-inch Liquid Retina display features advanced
              technologies like True Tone, P3 wide color, and an antireflective
              coating.1
            </div>
          </div>
          <div classNameName="accordion">
            <div classNameName="title"> Beauty all around.</div>
            <div classNameName="text">
              The breakthrough M1 chip is now in Air. An 8-core CPU delivers up
              to 60 percent faster performance than the previous generation,
              making Air a creative and mobile gaming powerhouse. Multitask
              smoothly between powerful apps and play graphics-intensive games.
              And with M1, you can go even further with your creativity with
              apps like SketchUp.
            </div>
          </div>
          <div classNameName="accordion">
            <div classNameName="title">Take Center Stage.</div>
            <div classNameName="text">
              The 12MP Ultra Wide front camera enables Center Stage, making
              video calls more natural and content creation more fun. As you
              move around, the camera automatically pans to keep you centered in
              the shot. When others join or leave the frame, the view expands or
              zooms in.
            </div>
          </div>
          <div classNameName="accordion">
            <div classNameName="title">Pretty everywhere.</div>
            <div classNameName="text">
              Join superfast 5G wireless networks when you’re on the go.
              Download files, play multiplayer games, stream movies, check in
              with friends, and more.
            </div>
          </div>
        </div>
        <div classNameName="spacer"></div>
      </div>
    </div>
  );
}; */
  return (
    <div id="scroll-smoother-container">
      <IndicationNav />
      <div className="relative h-[90vh] w-full overflow-hidden">
        <img
          className="absolute bottom-0 mx-auto h-[140%] w-full object-cover"
          data-speed="auto"
          src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        />
      </div>

      <div className="relative px-6 lg:px-44">
        <div className="my-44 grid grid-cols-3 gap-4 border-y-2 border-dashed border-pink-500">
          <div
            className="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-lg"
            data-speed="1"
            data-lag="0.1"
          >
            <img
              className="absolute bottom-0 mx-auto h-[220%] w-full object-cover"
              data-speed="auto"
              src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
            />
          </div>
          <div
            className="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-lg"
            data-speed="1"
            data-lag="0.4"
          >
            <img
              className="absolute bottom-0 mx-auto h-[200%] w-full object-cover"
              data-speed="auto"
              src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
            />
          </div>
          <div
            className="aspect-w-1 aspect-h-1 relative overflow-hidden rounded-lg"
            data-speed="1"
            data-lag="0.8"
          >
            <img
              className="absolute bottom-0 mx-auto h-[180%] w-full object-cover"
              data-speed="auto"
              src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
            />
          </div>
        </div>

        <div className="relative my-44 flex h-96 items-center border-y-2 border-dashed border-pink-500">
          <h1 className="js-title">Smoother</h1>
          <h1 className="js-title">Smoother</h1>
          <h1 className="js-title">Smoother</h1>
        </div>

        <div className="my-44 grid grid-cols-3 gap-4 border-y-2 border-dashed border-pink-500">
          <div
            className="aspect-w-3 aspect-h-4 relative overflow-hidden rounded-lg"
            data-speed="1"
            data-lag="0.1"
          >
            <img
              className="absolute bottom-0 mx-auto h-[150%] w-full object-cover"
              data-speed="auto"
              src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
            />
          </div>
          <div
            className="aspect-w-3 aspect-h-4 relative overflow-hidden rounded-lg"
            data-speed="1"
            data-lag="0.4"
          >
            <img
              className="absolute bottom-0 mx-auto h-[150%] w-full object-cover"
              data-speed="auto"
              src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
            />
          </div>
          <div
            className="aspect-w-3 aspect-h-4 relative overflow-hidden rounded-lg"
            data-speed="1"
            data-lag="0.8"
          >
            <img
              className="absolute bottom-0 mx-auto h-[150%] w-full object-cover"
              data-speed="auto"
              src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
            />
          </div>
        </div>

        <div className="my-24 text-center">
          <h1 className="js-splittext-lines text-center text-6xl font-bold">
            Split by{" "}
            <span className="text-pink-500">
              LINES: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis gravida faucibus tincidunt. Donec a nisl dignissim, dictum
              sem in, mattis velit. Nulla nec gravida erat. Nunc scelerisque
              augue placerat lacus tristique rutrum. Vestibulum vulputate felis
              quis dolor lacinia pretium.
            </span>
          </h1>
        </div>

        <section className="container my-44 bg-white bg-opacity-5 px-0 md:flex md:items-center md:space-x-28">
          <div className="relative border-l-4 border-pink-500 py-12 pl-6 md:py-0">
            <h2 className="mb-6 text-6xl font-bold">
              <strong>Easy parallax image effects</strong>
            </h2>
            <p>
              Pop your images in a container with overflow hidden, size them a
              little larger than the container and set data-speed to auto. GSAP
              does the rest.
            </p>
          </div>
          <div className="relative h-screen w-full overflow-hidden rounded-lg">
            <img
              className="absolute bottom-0 mx-auto h-[120%] w-full object-cover"
              data-speed="auto"
              src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
              alt=""
            />
          </div>
        </section>

        <section className="container my-44 mt-12 bg-white bg-opacity-5 px-0 md:flex md:items-center md:space-x-28">
          <div className="relative h-screen w-full overflow-hidden rounded-lg">
            <img
              className="absolute bottom-0 mx-auto h-[120%] w-full object-cover"
              data-speed="auto"
              src="/images/hero-image.jpg"
              alt=""
            />
          </div>
          <div className="relative border-r-4 border-pink-500 py-12 pr-6 md:py-0">
            <h2 className="mb-6 text-6xl font-bold">
              <strong>Easy parallax image effects</strong>
            </h2>
            <p>
              Pop your images in a container with overflow hidden, size them a
              little larger than the container and set data-speed to auto. GSAP
              does the rest.
            </p>
          </div>
        </section>

        <div className="my-44 flex justify-center space-x-12">
          <div
            className="my-12 rounded-lg bg-pink-500 p-16"
            data-speed="1"
            data-lag="0.2"
          ></div>
          <div
            className="my-12 rounded-lg bg-pink-500 p-16"
            data-speed="1"
            data-lag="0.4"
          ></div>
          <div
            className="my-12 rounded-lg bg-pink-500 p-16"
            data-speed="1"
            data-lag="0.6"
          ></div>
          <div
            className="my-12 rounded-lg bg-pink-500 p-16"
            data-speed="1"
            data-lag="0.8"
          ></div>
          <div
            className="my-12 rounded-lg bg-pink-500 p-16"
            data-speed="1"
            data-lag="1"
          ></div>
        </div>

        <div className="my-44 flex justify-center space-x-12">
          <div
            className="my-12 rounded-lg bg-pink-500 p-16"
            data-speed="0.9"
          ></div>
          <div
            className="my-12 rounded-lg bg-pink-500 p-16"
            data-speed="1.1"
          ></div>
          <div
            className="my-12 rounded-lg bg-pink-500 p-16"
            data-speed="0.75"
          ></div>
          <div
            className="my-12 rounded-lg bg-pink-500 p-16"
            data-speed="1.25"
          ></div>
          <div
            className="my-12 rounded-lg bg-pink-500 p-16"
            data-speed="1.5"
          ></div>
        </div>

        <div className="relative mt-44 border-y-2 border-dashed border-pink-500">
          <h2 className="bg-pink-500 p-12 text-center text-2xl">END</h2>
        </div>
      </div>
    </div>
  );
};

export default Test;
