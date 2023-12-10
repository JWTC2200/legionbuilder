import React from "react";
import { listState } from "../state";
import { FACTION } from "@/app/types";

const ListBuilderGameSize = () => {
  const { list, setList } = listState();

  const handlePoints = (e: string) => {
    setList({ ...list, points: Number(e) });
  };

  const gameSizes: number[] = [3000, 2500, 2000, 1500, 1000];

  return (
    <div className="w-full mx-4 p-4 builder_head_background text-primary-50 flex flex-wrap justify-center gap-4 text-center ">
      <div>
        <label htmlFor="game_size" className="sm:text-xl font-graduate mr-1">
          Game size:
        </label>
        <select
          id="game_size"
          value={list.points}
          onChange={(e) => handlePoints(e.target.value)}
          className="bg-transparent rounded-sm p-1 sm:text-lg font-semibold hover:text-primary-400 active:text-primary-400"
        >
          {gameSizes.map((size) => (
            <option
              value={size}
              key={"gameSize" + size}
              className="text-primary-950"
            >
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
          value={list.main_faction}
          onChange={(e) =>
            setList({ ...list, main_faction: e.target.value as FACTION })
          }
          className="bg-transparent rounded-sm p-1 sm:text-lg font-graduate hover:text-primary-400 active:text-primary-400"
        >
          <option value="Legiones Astartes" className="text-primary-950">
            Legiones Astartes
          </option>
          <option value="Solar Auxillia" className="text-primary-950">
            Solar Auxillia
          </option>
        </select>
      </div>
    </div>
  );
};

export default ListBuilderGameSize;
