import React from "react";
import {
  BUILDER_FORMATION,
  FACTION,
  SUBFACTION_TYPE,
  subfactionTypeArray,
} from "@/app/types";
import { listState } from "../state";

interface properties {
  formation: BUILDER_FORMATION;
}
export const ListBuilderFormationSubfactionSelector = ({
  formation,
}: properties) => {
  const { list, setList } = listState();

  const changeSubfaction = (subfaction: string) => {
    if (subfaction) {
      setList({
        ...list,
        formations: [...list.formations].map((forma) => {
          if (forma.ref_id === formation.ref_id) {
            return { ...forma, subfaction: subfaction as SUBFACTION_TYPE };
          }
          return forma;
        }),
      });
    } else {
      setList({
        ...list,
        formations: [...list.formations].map((forma) => {
          if (forma.ref_id === formation.ref_id) {
            return { ...forma, subfaction: undefined };
          }
          return forma;
        }),
      });
    }
  };

  return (
    <div>
      <select
        className="w-[280px] text-center mt-2 py-1 px-2 border border-green-950 font-graduate text-black"
        value={formation.subfaction}
        onChange={(e) => changeSubfaction(e.target.value)}
      >
        <option value="" className="text-green-950">
          {formation.faction === FACTION.astartes ? "Choose Legion" : null}
        </option>
        {subfactionTypeArray.map((subfaction) => (
          <option
            key={subfaction + formation.id}
            value={subfaction}
            className="text-green-950"
          >
            {subfaction}
          </option>
        ))}
      </select>
    </div>
  );
};