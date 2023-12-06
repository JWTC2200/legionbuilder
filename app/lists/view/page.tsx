"use client";

import React from "react";
import { listState } from "../builder/state";
import { listPointTotals, formationPoints } from "../utils";
import { formationHTML } from "./utils";

const page = () => {
  const { list } = listState();
  const { mainFactionPoints, allyFactionPoints, armyTotalPoints } =
    listPointTotals(list);

  return (
    <main className="w-full min-h-screen bg-slate-50 text-primary-950 p-4 flex justify-center">
      {list ? (
        <div className="w-full max-w-screen-sm">
          <div className="mb-2">
            <h1 className="font-bold font-subrayada text-xl">
              {list.list_name}
            </h1>
            <h2 className="font-bold font-graduate">
              List total: {armyTotalPoints} points
            </h2>
            <h2 className="font-bold font-graduate">
              Main faction: {list.main_faction}
            </h2>
          </div>
          {list.formations.map((formation, index) => (
            <div key={"formaton" + index} className="text-sm mb-2">
              <h3 className="text-base">
                <strong>Formation {index + 1}</strong>: {formation.name}
                {", "}
                {formationPoints(formation)}points
              </h3>
              {formationHTML(formation)}
            </div>
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
