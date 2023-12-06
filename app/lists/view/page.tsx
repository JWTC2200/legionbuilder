"use client";

import React, { useState } from "react";
import { listState } from "../builder/state";
import { listPointTotals } from "../utils";
import { listCards } from "./utils";
import ListInfoHtml from "./components/ListInfoHtml";
import FormationHtml from "./components/FormationHtml";
// import { MdListAlt } from "react-icons/md";
// import { PiCardsLight } from "react-icons/pi";
// import { unitData } from "@/app/data/unit_data";
// import UnitDataslate from "@/app/components/UnitDataslate";

const page = () => {
  const { list } = listState();
  // const [showCards, setShowCards] = useState(false);
  const { mainFactionPoints, allyFactionPoints, armyTotalPoints } =
    listPointTotals(list);

  return (
    <main className="w-full min-h-screen text-stone-100 p-4 flex justify-center">
      {list ? (
        <div className="w-full max-w-screen-sm">
          {/* <button
              type="button"
              onClick={() => setShowCards((prev) => !prev)}
              className="text-xl"
            >
              {showCards ? <PiCardsLight /> : <MdListAlt />}
            </button> */}
          <ListInfoHtml />
          {list.formations.map((formation, index) => (
            <FormationHtml
              key={"formation" + index}
              formation={formation}
              index={index}
            />
          ))}

          {/* {showCards ? (
            <div className="break-inside-avoid-page">
              {listCards(list).map((id) => {
                const data = unitData.find((unit) => unit.id == id)!;
                return <UnitDataslate key={"card" + id} {...data} />;
              })}
            </div>
          ) : null} */}
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
