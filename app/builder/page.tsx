"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BUILDER_FORMATION, BUILDER_LIST, FACTION } from "../types";
import BuilderFormation from "./components/BuilderFormation";
import { listPoints } from "./utils";
import { nanoid } from "nanoid";

const page = () => {
  const router = useRouter();
  const [armyList, setArmyList] = useState<BUILDER_LIST>({
    points: 3000,
    main_faction: FACTION.astartes,
    formations: [],
  });
  const armyPoints = listPoints(armyList);

  const gameSizes: number[] = [3000, 2500, 2000, 1500, 1000];

  const savedList =
    typeof window !== "undefined"
      ? localStorage.getItem("legionbuilder")
      : null;

  const addFormation = () => {
    const newFormation: BUILDER_FORMATION = {
      name: "",
      ref_id: `formation${nanoid()}`,
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

  const handleSaveList = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("legionbuilder", JSON.stringify(armyList));
    }
  };

  const handlePrintList = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("legionbuilder", JSON.stringify(armyList));
      router.push("/print");
    }
  };

  const handleClearList = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      setArmyList({
        points: 3000,
        main_faction: FACTION.astartes,
        formations: [],
      });
    }
  };

  useEffect(() => {
    if (savedList) {
      const list = JSON.parse(savedList);
      setArmyList(list);
    }
  }, []);

  return (
    <main className="relative flex flex-col gap-2 w-full max-w-screen-2xl items-center dataslate_background mt-4 p-4 rounded-xl border-2 border-black">
      <div className="text-red-600 text-center">
        <ul>
          <li>
            I should have fixed the detachment swapping issue. If it still pops
            up please let me know!{" "}
          </li>
          <li>
            Print List will automatically save the list and take you to a new
            blank page with a formatted list that should be easier to read.
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 justify-center text-center">
        <button
          onClick={handleSaveList}
          className=" bg-green-950 text-green-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-cyan-700"
        >
          SAVE LIST
        </button>
        <button
          onClick={handlePrintList}
          className=" bg-green-950 text-green-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-cyan-700"
        >
          PRINT LIST
        </button>
        <button
          onClick={handleClearList}
          className=" bg-green-950 text-green-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-cyan-700"
        >
          CLEAR LIST
        </button>
      </div>

      {/* MAIN LIST OPTIONS */}
      <div className="w-full mx-4 p-4 bg-green-950 text-green-50 flex flex-wrap justify-center gap-4 text-center">
        <div>
          <label htmlFor="game_size" className="sm:text-xl font-graduate mr-1">
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
            className="bg-green-950 rounded-sm p-1 sm:text-lg font-semibold "
          >
            {gameSizes.map((size) => (
              <option value={size} key={"gameSize" + size}>
                {size}pts
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="faction_selector"
            className="text-lg sm:text-xl font-graduate mr-1"
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
            className="bg-green-950 rounded-sm p-1 sm:text-lg font-graduate"
          >
            <option value="Legiones Astartes">Legiones Astartes</option>
            <option value="Solar Auxillia">Solar Auxillia</option>
          </select>
        </div>
      </div>

      {/* ARMYLIST POINTS */}
      <div className="w-full mt-4 p-4 bg-green-950 text-green-50 flex flex-wrap justify-center gap-4">
        <div className="flex flex-col justify-center items-center gap-1 border-2">
          <p className="font-graduate sm:text-xl">
            {armyList.main_faction} : {armyPoints.mainFactionPoints}pts
          </p>
          <p className="font-graduate sm:text-xl">
            Allies : {armyPoints.allyFactionPoints}pts
          </p>
        </div>
        {armyPoints.allyFactionPoints > armyList.points * 0.3 ? (
          <p className="text-red-600 text-center text-xl font-graduate font-bold">
            Too many allies!
          </p>
        ) : null}
        <div className="flex flex-col items-center justify-center gap-2 border-2">
          <p className="font-graduate sm:text-xl">
            Formations: {armyList.formations.length}
          </p>
          <div className="flex flex-wrap gap-4">
            <p className="font-graduate sm:text-xl">
              {armyList.main_faction}:{" "}
              {
                armyList.formations.filter(
                  (formation) => formation.faction === armyList.main_faction
                ).length
              }
            </p>
            <p className="font-graduate sm:text-xl">
              Allies:{" "}
              {
                armyList.formations.filter(
                  (formation) => formation.faction !== armyList.main_faction
                ).length
              }
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div></div>

      {/* FORMATION DISPLAY */}
      <div className="w-full mt-4 text-green-50 border-2 border-black flex flex-col justify-center gap-2">
        <div className="bg-green-950 flex flex-wrap justify-center items-center text-center gap-4">
          {/* <h2 className="text-center bg-green-950 font-graduate text-lg sm:text-2xl">
            FORMATIONS
          </h2> */}
          <button
            onClick={addFormation}
            className="p-1 hover:text-cyan-700 font-graduate sm:text-xl"
          >
            Add formation
          </button>
        </div>
        {armyList.formations.length ? (
          <div className="py-4 sm:p-4">
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

      {/* <pre className="w-full border-2 border-green-950 text-green-950 p-8 font-semibold text-lg">
        {JSON.stringify(armyList, null, " ")}
      </pre> */}
    </main>
  );
};

export default page;
