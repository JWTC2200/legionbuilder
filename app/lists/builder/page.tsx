"use client";

import React from "react";
import BuilderWidgetBottom from "./components/BuilderWidgetBottom";
import BuilderWidgetSide from "./components/BuilderWidgetSide";
import ListBuilder from "./components/ListBuilder";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Link
        href="/lists"
        className="text-xl ml-4 my-2 hover:text-lime-400"
      >{`< return to lists`}</Link>
      <ListBuilder />
      <BuilderWidgetBottom />
      <BuilderWidgetSide />
    </div>
  );
};

export default page;
