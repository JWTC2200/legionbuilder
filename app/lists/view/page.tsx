"use client";

import React from "react";
import { listState } from "../builder/state";
import { listPointTotals } from "../utils";
import ListInfoHtml from "./components/ListInfoHtml";
import FormationHtml from "./components/FormationHtml";
import ViewLinkButton from "./components/ViewLinkButton";

const page = () => {
  const { list } = listState();

  const { mainFactionPoints, allyFactionPoints, armyTotalPoints } =
    listPointTotals(list);

  return (
    <main className="w-full max-w-xl text-stone-100 p-4 flex justify-center">
      {list ? (
        <div className="w-full max-w-screen-sm">
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
    </main>
  );
};

export default page;
