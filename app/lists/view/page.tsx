"use client";

import React from "react";
import Main from "@/app/components/Main";
import { listState } from "../builder/state";
import ListInfoHtml from "./components/ListInfoHtml";
import FormationHtml from "./components/FormationHtml";
import ViewLinkButton from "./components/ViewLinkButton";
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs";
import { useSearchParams } from "next/navigation";

const page = () => {
  const { list } = listState();
  const searchParams = useSearchParams();
  const listParams = searchParams.get("listId");

  return (
    <div className="min-h-screen p-4 flex justify-center">
      {list ? (
        <div className="w-full max-w-screen-sm">
          <BreadCrumbs>
            <Crumb href="/lists">Lists</Crumb>
            <Crumb
              href={`/lists/builder${
                listParams ? `?listId=${listParams}` : ""
              }`}
            >
              Builder
            </Crumb>
            <Crumb
              href={`/lists/view${listParams ? `?listId=${listParams}` : ""}`}
            >
              View
            </Crumb>
          </BreadCrumbs>
          <ViewLinkButton className="flex gap-2 mb-4 hover:text-lime-400 active:text-lime-100 items-center">
            Save link to clipboard
          </ViewLinkButton>
          <ListInfoHtml />
          {list.formations.map((formation, index) => (
            <FormationHtml
              key={"formation" + index}
              formation={formation}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="w-full min-h-screen bg-slate-50 justify-center items-center text-center">
          <h2>No list found</h2>
        </div>
      )}
    </div>
  );
};

export default page;
