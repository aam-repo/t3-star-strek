/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";

// register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}
const Test4 = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const component = document.querySelectorAll("#component");
    const testContainer: HTMLElement | null =
      document.querySelector("#test-container");
    if (!testContainer) return;
    const offset = testContainer ? testContainer.offsetWidth : 0;
    console.log("offset", offset);
    console.log("components", component);

    gsap.to(component, {
      xPercent: -100 * (component.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: testContainer,

        pin: true,
        scrub: 1,

        snap: 1 / (component.length - 1),
      /*   end: "+=" + testContainer.offsetWidth, */
      },
    });
  }, []);

  return (
    <div ref={ref} id="test-container" className="flex ">
      <div id="component" className="w-screen bg-blue-300">
        first
      </div>

      <div id="component" className="w-screen bg-slate-900">
        second
      </div>

      <div id="component" className="w-screen bg-gray-600">
        third
      </div>

      <div id="component" className="w-screen bg-red-400">
        four
      </div>

      <div id="component" className="w-screen bg-slate-600">
        five
      </div>
    </div>
  );
};

export default Test4;
