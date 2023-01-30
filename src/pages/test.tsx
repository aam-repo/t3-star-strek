import React from "react";

import dynamic from "next/dynamic";

const Test6 = dynamic(() => import("../components/test/Test6"), { ssr: false });
const test = () => {
  return (
    <div className=" overflow-hidden text-gray-900">
      {/*       <div className=" font-bungee flex h-screen w-screen items-center justify-center  bg-black text-7xl text-purple-500">
        <p className="animate-bounce">Scroll down</p>
      </div>
      <Test5 />
      <div className="font-bungee flex h-screen w-screen items-center justify-center bg-black text-7xl text-purple-500">
        <p className="animate-bounce">The end</p>
      </div>{" "} */}

      <Test6 />
    </div>
  );
};

export default test;
