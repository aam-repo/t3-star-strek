import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PageTransition = ({
  children,
  routingPageOffset,
}: {
  children: React.ReactNode;
  routingPageOffset?: number;
}) => {
  const router = useRouter();
  const translateY = (routingPageOffset?: number) => {
    /*     if (routingPageOffset) {
      const offset = `translate-y-${routingPageOffset}`;
      return offset;
    } */
    return "";
  };

  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={router.asPath} timeout={1000} classNames="page">
          <main className={`main ${translateY(routingPageOffset)}`}>
            <div className="page-transition-inner relative">{children}</div>
          </main>
        </CSSTransition>
      </TransitionGroup>
      <div className="wipe"></div>
    </>
  );
};

export default PageTransition;
