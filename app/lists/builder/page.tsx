"use client";

import React from "react";
import BuilderWidgetBottom from "./components/BuilderWidgetBottom";
import BuilderWidgetSide from "./components/BuilderWidgetSide";
import ListBuilder from "./components/ListBuilder";
import Link from "next/link";
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const listParams = searchParams.get("listId");

  return (
    <div className="h-screen w-full flex flex-col">
      <BreadCrumbs>
        <Crumb href="/lists">Lists</Crumb>
        <Crumb
          href={`/lists/builder${listParams ? `?listId=${listParams}` : ""}`}
        >
          Builder
        </Crumb>
      </BreadCrumbs>
      <ListBuilder />
      <BuilderWidgetBottom />
      <BuilderWidgetSide />
    </div>
  );
};

export default page;
