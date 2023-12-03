"use client";

import React from "react";
import BuilderWidgetBottom from "./components/BuilderWidgetBottom";
import BuilderWidgetSide from "./components/BuilderWidgetSide";
import ListBuilder from "./components/ListBuilder";

const page = () => {
  return (
    <div className="h-screen w-full ">
      <ListBuilder />
      <BuilderWidgetBottom />
      <BuilderWidgetSide />
    </div>
  );
};

export default page;
