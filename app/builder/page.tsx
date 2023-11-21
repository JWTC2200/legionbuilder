"use client";

import React, { useState } from "react";
import { formationData } from "../data/formation_data";
import {
  BUILDER_DETACHMENT_UNIT,
  BUILDER_FORMATION,
  BUILDER_LIST,
  FACTION,
} from "../types";
import BuilderFormation from "./components/BuilderFormation";

const page = () => {
  const [armyList, setArmyList] = useState<BUILDER_LIST>({
    points: 3000,
    main_faction: FACTION.astartes,
    formations: [],
  });
  const [formationCounter, setFormationCounter] = useState(0);

  const addFormation = () => {
    setFormationCounter((prev) => prev + 1);
    const newFormation: BUILDER_FORMATION = {
      name: "",
      ref_id: `formation${formationCounter}`,
      id: 0,
      faction: null,
      choice: null,
      compulsory: null,
      optional: null,
    };
    setArmyList((prev) => {
      return { ...prev, formations: [...prev.formations, newFormation] };
    });
  };

  const calculatepoints = () => {
    const validFormations = armyList.formations.filter(
      (formation) => formation.faction !== armyList.main_faction
    );

    const points = validFormations
      .map((formation) => formation.compulsory)
      .map((form2) =>
        form2?.map((form3) => {
          if (form3.selected_unit) {
            form3.selected_unit.base_cost +
              form3.selected_unit.upgrade_options.reduce(
                (acc, pts) => acc + pts.cost,
                0
              );
          }
        })
      );

    console.log(points);
  };

  return (
    <main className="flex flex-col gap-2 w-full max-w-screen-2xl items-center dataslate_background mt-4 p-4 rounded-xl border-2 border-black">
      <button onClick={calculatepoints} className="text-red-500">
        ALLY POINTS
      </button>
      {/* MAIN LIST OPTIONS */}
      <div className="w-full mx-4 p-4 bg-green-950 text-green-50 flex flex-wrap justify-center gap-8 text-center">
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
            className="bg-green-950 rounded-sm p-1 text-lg font-graduate"
          >
            <option value="Legiones Astartes">Legiones Astartes</option>
            <option value="Solar Auxillia">Solar Auxillia</option>
          </select>
        </div>
      </div>
      {/* ARMYLIST POINTS */}
      <div className="w-full mt-4 p-4 bg-green-950 text-green-50 flex flex-wrap justify-center gap-8">
        <p className="font-graduate text-xl">
          Formations: {armyList.formations.length}
        </p>
        <p className="font-graduate text-xl">
          Main faction:{" "}
          {
            armyList.formations.filter(
              (formation) => formation.faction === armyList.main_faction
            ).length
          }
        </p>
      </div>
      {/* FORMATION DISPLAY */}
      <div className="w-full mt-4 text-green-50 border-2 border-black flex flex-col justify-center gap-2">
        <div className="bg-green-950 flex flex-wrap justify-center text-center gap-4">
          <h2 className="text-center bg-green-950 font-graduate text-2xl">
            FORMATIONS
          </h2>
          <button
            onClick={addFormation}
            className="p-1 hover:text-cyan-700 font-graduate"
          >
            Add formation
          </button>
        </div>
        {armyList.formations.length ? (
          <div className="p-4">
            {armyList.formations.map((formation) => (
              <BuilderFormation
                key={formation.ref_id}
                formation={formation}
                setArmyList={setArmyList}
              />
            ))}
          </div>
        ) : null}
      </div>
      {/* object display */}

      <pre className="w-full border-2 border-green-950 text-green-950 p-8 font-semibold text-lg">
        {JSON.stringify(armyList, null, " ")}
      </pre>
    </main>
  );
};

export default page;
