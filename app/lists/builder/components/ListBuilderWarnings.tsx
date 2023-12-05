"use client";
import React from "react";
import { listState } from "../state";
import { listPointTotals } from "../../utils";

const ListBuilderWarnings = () => {
  const { list } = listState();
  const { allyFactionPoints, armyTotalPoints } = listPointTotals(list);
  return (
    <>
      {allyFactionPoints > list.points * 0.3 ? (
        <div className="text-red-600 font-bold text-xl font-graduate text-center">
          Ally points have exceeded 30% of the list.
        </div>
      ) : null}
      {armyTotalPoints > list.points ? (
        <div className="text-red-600 font-bold text-xl font-graduate text-center">
          Total points for list has exceeded game size!
        </div>
      ) : null}
    </>
  );
};

export default ListBuilderWarnings;
