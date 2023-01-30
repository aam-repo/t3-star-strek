import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IconBorderRadius } from "@tabler/icons";

function Test6() {
  const ref = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        ".box",
        { duration: 2, scale: 0.5, x: 0, y: 22, opacity: 0 },
        {
          opacity: 1,
          delay: 1,
          scale: 0.3,
          x: 600,
          duration: 6,
          y: 22,

          rotateZ: 180,
          autoAlpha: 0.5,
          perspective: 400,
          backgroundColor: "blue",
          BorderRadius: "50%",
          ease: "bounce",
        }
      );
      gsap.from("h1", {
        opacity: 0,
        y: 100,
        ease: "power3",
        duration: 2,
        delay: 1.1,
        onStart: () => {
          anim.pause();
        },
        onComplete: () => {
          anim.play();
        },
      });
    }, wrapperRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <div className="box absolute mt-44 h-44 w-44 bg-red-500"></div>
      <h1 className="header-text mt-44 text-[2rem] text-amber-400">
        Header text
      </h1>
    </div>
  );
}

export default Test6;
