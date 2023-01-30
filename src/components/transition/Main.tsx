import React from "react";

const Main = ({
  children,
  routingPageOffset,
}: {
  children: React.ReactNode;
  routingPageOffset: number;
}) => {
  return <main className="main">{children}</main>;
};

export default Main;
