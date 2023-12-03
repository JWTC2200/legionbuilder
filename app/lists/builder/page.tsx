"use client";

import React from "react";
import { listState } from "./state";
import BuilderWidgetBottom from "./components/BuilderWidgetBottom";

const page = () => {
  const { list, setList, clearList } = listState();
  return (
    <div className="h-screen w-full ">
      builder <BuilderWidgetBottom />
    </div>
  );
};

export default page;
