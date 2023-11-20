"use client";

import React, { useState } from "react";
import { formationData } from "../data/formation_data";
import { BUILDER_FORMATION, BUILDER_LIST, FACTION } from "../types";
import { createBuilderFormation } from "./utils";
import BuilderFormation from "./components/BuilderFormation";

const page = () => {
  const [armyList, setArmyList] = useState<BUILDER_LIST>({
    points: 3000,
    main_faction: FACTION.astartes,
    formations: [],
  });
  const [selectedFormation, setSelectedFormation] = useState<number>(0);
  const [formationCounter, setFormationCounter] = useState(0);

  const addFormation = () => {
    const formationInfo = formationData.find(
      (formation) => formation.id === selectedFormation
    );
    if (!formationInfo) {
      return;
    }
    setFormationCounter((prev) => prev + 1);
    const newFormation = createBuilderFormation(
      formationInfo,
      formationCounter
    );
    setArmyList((prev) => {
      return { ...prev, formations: [...prev.formations, newFormation] };
    });
  };

  return (
    <main className="flex flex-col gap-2 w-full max-w-screen-xl items-center dataslate_background mt-4 p-4 rounded-xl border-2 border-black">
      {/* MAIN LIST OPTIONS */}
      <div className="w-full mx-4 p-4 bg-green-950 text-green-50 flex flex-wrap justify-center gap-8 ">
        <div>
          <label htmlFor="game_size" className="text-xl font-graduate mr-1">
            Game size:
          </label>
          <select
            id="game_size"
            value={armyList.points}
            onChange={(e) =>
              setArmyList((prev) => {
                return { ...prev, points: Number(e.target.value) };
              })
            }
            className="bg-green-950 rounded-sm p-1 text-lg "
          >
            <option value={3000}>3000pts</option>
            <option value={2500}>2500pts</option>
            <option value={2000}>2000pts</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="faction_selector"
            className="text-xl font-graduate mr-1"
          >
            Select main faction:{" "}
          </label>
          <select
            id="faction_selector"
            value={armyList.main_faction}
            onChange={(e) =>
              setArmyList((prev) => {
                return { ...prev, main_faction: e.target.value as FACTION };
              })
            }
            className="bg-green-950 rounded-sm p-1 text-lg "
          >
            <option value="Legiones Astartes">Legiones Astartes</option>
            <option value="Solar Auxillia">Solar Auxillia</option>
          </select>
        </div>
      </div>
      {/* DETACHMENT SELECTION */}
      <div className="w-full mt-4 p-4 bg-green-950 text-green-50 flex flex-wrap justify-center gap-8">
        <select
          value={selectedFormation}
          onChange={(e) => setSelectedFormation(Number(e.target.value))}
          className="bg-green-950 rounded-sm p-1 text-lg font-graduate"
        >
          <option value={0}>Select formation:</option>
          {formationData.map((formation) => (
            <option key={formation.name + formation.id} value={formation.id}>
              {formation.name}
            </option>
          ))}
        </select>
        <button onClick={addFormation} className="border-2 rounded-full p-1">
          Add formation
        </button>
      </div>
      {/* FORMATION DISPLAY */}
      <div className="w-full mt-4 text-green-50 border-2 border-black flex flex-col justify-center gap-2">
        <h1 className="text-center bg-green-950 font-graduate text-2xl">
          FORMATIONS
        </h1>
        {armyList.formations.length ? (
          <div className="p-4">
            {armyList.formations.map((formation) => (
              <BuilderFormation
                key={formation.id}
                formation={formation}
                setArmyList={setArmyList}
              />
            ))}
          </div>
        ) : null}
      </div>
      {/* object display */}
      <hr className="w-full border-2 my-8" />
      <pre className="w-full border-2 border-green-950 text-green-950 p-8 font-semibold text-lg">
        {JSON.stringify(armyList, null, " ")}
      </pre>
    </main>
  );
};

export default page;
