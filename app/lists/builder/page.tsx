"use client";

import React from "react";
import BuilderWidgetBottom from "./components/BuilderWidgetBottom";
import ListBuilder from "./components/ListBuilder";

const page = () => {
  return (
    <div className="h-screen w-full ">
      <ListBuilder />
      <BuilderWidgetBottom />
    </div>
  );
};

export default page;
