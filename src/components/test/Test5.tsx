import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Test5() {
  const scroller = useRef(null);
  const skills = useRef(null);

  useEffect(() => {
    const skillSet = gsap.utils.toArray(".skill-set");

    const to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: true,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        anticipatePin: 1,

        snap: 1 / (skillSet.length - 1),

        /*   end: () => "+=" + window.innerWidth, */
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <>
      <div className="overflow-hidden ">
        <div
          id="skills"
          ref={scroller}
          className=" relative m-0 flex h-screen w-[400vw] overflow-x-hidden  bg-gray-900 text-white"
        >
          <section
            ref={skills}
            className="skill-set ns-horizontal-section__item z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <Image
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="1st image"
              layout="fill"
              objectFit="contain"
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
          <section
            ref={skills}
            className="skill-set ns-horizontal-section__item z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <Image
              src="https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
          <section
            ref={skills}
            className="skill-set ns-horizontal-section__item z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <Image
              src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
          <section
            ref={skills}
            className="skill-set ns-horizontal-section__item z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <Image
              src="https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              layout="fill"
              objectFit="contain"
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default Test5;
