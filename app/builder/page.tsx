"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BUILDER_FORMATION, BUILDER_LIST, FACTION } from "../types";
import BuilderFormation from "./components/BuilderFormation";
import { listPoints } from "./utils";
import { nanoid } from "nanoid";
import { FiPlus, FiSave } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";
import { ImBin } from "react-icons/im";

import { FiPrinter } from "react-icons/fi";

const page = () => {
  const router = useRouter();
  const [armyList, setArmyList] = useState<BUILDER_LIST>({
    points: 3000,
    main_faction: FACTION.astartes,
    formations: [],
  });
  const armyPoints = listPoints(armyList);

  const gameSizes: number[] = [3000, 2500, 2000, 1500, 1000];
  const [infoWidget, setInfoWidget] = useState(true);
  const [sideWidget, setSideWidget] = useState(false);

  const widgetHeight = infoWidget ? "h-24" : "h-10";
  const widgetWidth = sideWidget ? "w-80" : "w-12";

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

  const returnToTop = () => {
    if (typeof window !== undefined) {
      window.scroll({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (savedList) {
      const list = JSON.parse(savedList);
      setArmyList(list);
    }
  }, []);

  return (
    <main className="flex flex-col gap-2 w-full max-w-screen-2xl items-center dataslate_background mt-4 mb-20 sm:p-4 rounded-xl">
      {/* NOTICES / WARNINGS */}
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
      {/* INFORMATION WIDGET BOTTOM */}
      <div
        className={`fixed w-full max-w-screen-2xl bg-stone-800 text-stone-50 font-graduate bottom-0 p-2 flex text-sm sm:text-lg shadow-[0_-3px_4px_0px_#292524] transition-all ${
          " " + widgetHeight
        }`}
      >
        <div className="w-1/2 sm:w-5/12 flex flex-col justify-center items-center">
          <div>
            {infoWidget ? <p>{armyList.main_faction}</p> : null}
            <p>Formations: {armyList.formations.length}</p>
            {infoWidget ? (
              <p>
                Allies:{" "}
                {
                  armyList.formations.filter(
                    (formation) => formation.faction !== armyList.main_faction
                  ).length
                }
              </p>
            ) : null}
          </div>
        </div>
        <div className="w-4/12 sm:w-5/12 flex flex-col justify-center items-center">
          <div>
            <p>
              Total:{" "}
              {armyPoints.allyFactionPoints + armyPoints.mainFactionPoints}
              pts
            </p>
            {infoWidget ? <p>Main: {armyPoints.mainFactionPoints}pts</p> : null}
            {infoWidget ? (
              <p>Allies: {armyPoints.allyFactionPoints}pts</p>
            ) : null}
          </div>
        </div>
        <div className="w-2/12 flex flex-col justify-evenly items-center py-2">
          <button
            type="button"
            onClick={() => {
              setInfoWidget((prev) => !prev);
            }}
            className="hover:text-cyan-700 active:text-cyan-700 focus:text-cyan-700"
          >
            {infoWidget ? <FaChevronDown /> : <FaChevronUp />}
          </button>
          <button
            type="button"
            onClick={returnToTop}
            className="hover:text-cyan-700 active:text-cyan-700 focus:text-cyan-700 text-xl"
          >
            {infoWidget ? <MdKeyboardDoubleArrowUp /> : null}
          </button>
        </div>
      </div>

      {/* INFORMATION WIDGET SIDE */}
      <div
        className={
          `fixed flex flex-wrap justify-center items-center lg:hidden bg-green-950 bg-opacity-30 text-black h-24  right-0 bottom-32 rounded-l-lg text-3xl transition-all z-20` +
          " " +
          widgetWidth
        }
      >
        {sideWidget ? (
          <div className="flex flex-wrap justify-evenly items-center text-center w-10/12 transition-all">
            <button
              onClick={handleSaveList}
              className="bg-white p-2 rounded-full hover:bg-cyan-700 active:bg-cyan-700 focus:bg-cyan-600 z-50"
            >
              <FiSave />
            </button>
            <button
              onClick={handlePrintList}
              className="bg-white p-2 rounded-full hover:bg-cyan-700 active:bg-cyan-700 focus:bg-cyan-600 z-50"
            >
              <FiPrinter />
            </button>
            <button
              onClick={handleClearList}
              className="bg-white p-2 rounded-full hover:bg-cyan-700 active:bg-cyan-700 focus:bg-cyan-600 z-50"
            >
              <ImBin />
            </button>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => {
            setSideWidget((prev) => !prev);
          }}
          className={
            "p-2 rounded-full hover:text-cyan-700 active:text-cyan-700 focus:text-cyan-600 text-white"
          }
        >
          {sideWidget ? <TbChevronCompactRight /> : <TbChevronCompactLeft />}
        </button>
      </div>

      {/* SAVE LIST BUTTONS */}
      <div className="w-full flex flex-wrap gap-4 justify-center text-center">
        <button
          onClick={handleSaveList}
          className=" bg-green-950 text-green-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-cyan-700"
        >
          SAVE LIST
        </button>
        <button
          onClick={handlePrintList}
          className=" bg-green-950 text-green-50 px-2 py-1 mx-2 font-bold font-graduate rounded-lg hover:text-cyan-700"
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
            Main faction:{" "}
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

      {/* FORMATION DISPLAY */}
      <div className="w-full text-green-50 flex flex-col justify-center gap-2 ">
        <div className="bg-green-950 flex flex-wrap justify-center items-center text-center gap-4">
          {/* <h2 className="text-center bg-green-950 font-graduate text-lg sm:text-2xl">
            FORMATIONS
          </h2> */}
          <button
            onClick={addFormation}
            className="p-1 hover:text-cyan-700 font-graduate sm:text-xl flex items-center gap-1"
          >
            <FiPlus /> Add formation
            <FiPlus />
          </button>
        </div>
        {armyList.formations.length ? (
          <div className="pb-4 sm:p-4 flex flex-col gap-4">
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
