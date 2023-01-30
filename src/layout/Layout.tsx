import { NextRouter } from "next/router";
import React, { ReactElement, ReactNode } from "react";
import { Footer } from "../components/footer";
import { HeaderMegaMenu } from "../components/navbar";
import PageTransition from "../components/transition/PageTransition";

const Layout = ({
  children,
  routingPageOffset,
}: {
  children: ReactElement;
  routingPageOffset?: number;
}) => {
  return (
    </*   className="   flex h-screen w-full flex-col overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/images/hero-image.jpg")`,
      }} */>
      <HeaderMegaMenu />
      <PageTransition routingPageOffset={routingPageOffset}>
        {children}
      </PageTransition>

      {/*    <Footer /> */}
    </>
  );
};

export default Layout;
