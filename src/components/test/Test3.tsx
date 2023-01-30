/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from "react";

import { gsap, Power3 } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    title: "Architecto aliquam",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.",
  },
  {
    title: "Ceritatis placeat",
    subtitle:
      "Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?",
  },
  {
    title: "Vitae voluptates",
    subtitle:
      "In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.",
  },
];

const Test3 = () => {
  let t1 = gsap.timeline({ delay: 0.3 });
  useEffect(() => {
    t1.from(
      ".bannerMain-rgt",

      { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2, duration: 1 }
    );
    t1.from(
      ".text",

      { y: 30, ease: Power3.easeOut, opacity: 0, duration: 1, stagger: 0.15 }
    )
      .from(
        ".btn-primary",

        {
          y: 20,
          opacity: 0,
          ease: Power3.easeOut,
          delay: 0.4,
          duration: 1,
          stagger: 0.15,
        }
      )
      .from(".paragraphAnimation", {
        y: 10,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.2,
        stagger: 0.35,
        duration: 1,
      })
      .from("nav", {
        y: -10,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.2,
        duration: 1,
      });
    gsap.from(".content", {
      duration: 3,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".content-main",
        markers: true,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete reverse reset",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  });

  return (
    <div className="App">
      <div>
        <nav>
          <div className="nav-logo">PAPERO .</div>
          <div className="nav-items">
            <ul>
              <li>
                <a href="javascript.void()">Home</a>
              </li>
              <li>
                <a href="javascript.void()">Products</a>
              </li>
              <li>
                <a href="javascript.void()">Pricing</a>
              </li>
              <li>
                <a href="javascript.void()">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          {" "}
          <section className="bannerMain">
            <div className="bannerMain-lft">
              <div className="bannerMain-lft__inner">
                <h2>
                  <div className="textWrapper">
                    <span className="text">Go paperless </span>
                  </div>
                  <div className="textWrapper">
                    <span className="text">with our App</span>
                  </div>
                </h2>
                <p className="paragraphAnimation">
                  We provide seemeless integration with <br /> multiple devices
                  so that you can take <br /> notes even better.
                </p>
              </div>
              <button className="btn-primary">request access</button>
            </div>
            <div className="bannerMain-rgt">
              <img
                src={
                  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
                }
                alt="doodle"
              />
            </div>
          </section>
        </div>
      </div>
      <div className="content">
        <div className="container ">
          <main className="content-main">
            {panels.map(({ title, subtitle }, index) => (
              <div key={index}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Test3;
