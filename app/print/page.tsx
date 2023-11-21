"use client";

import React from "react";
import { BUILDER_LIST } from "../types";

const page = () => {
  const armyList = localStorage.getItem("legionbuilder");
  if (armyList) {
    const listJson: BUILDER_LIST = JSON.parse(armyList);

    const listHTML = (
      <div>
        <div className="mb-4">
          <h2 className="font-bold text-lg">Game size: {listJson.points}</h2>
          <h2 className="font-bold text-lg">
            Main faction: {listJson.main_faction}
          </h2>
        </div>
        {listJson.formations.map((formation, index) => (
          <div key={"formaton" + index}>
            Formation {index + 1}: <strong>{formation.name}</strong>
          </div>
        ))}
      </div>
    );

    return (
      <main className="w-full min-h-screen bg-slate-50 text-green-950">
        {listHTML}
        <hr className="border-2 border-black my-4" />
        <pre className="w-full text-green-950 p-8">
          {JSON.stringify(listJson, null, " ")}
        </pre>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-slate-50 justify-center items-center text-center">
      <h2>No list found</h2>
    </main>
  );
};

export default page;
