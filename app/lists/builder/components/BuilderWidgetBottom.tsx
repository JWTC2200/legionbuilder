import React from "react";
import { listState } from "../state";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { builderBottomWidget } from "../state";
import { listPointTotals } from "../../utils";
import { returnToTop } from "@/app/utils/scrolltotop";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const BuilderWidgetBottom = () => {
  const { list } = listState();
  const { widget, toggleWidget } = builderBottomWidget();

  const { mainFactionPoints, allyFactionPoints, armyTotalPoints } =
    listPointTotals(list);

  const widgetHeight = widget ? "h-24 sm:h-36" : "h-12 sm:h-20";

  return (
    <div
      className={`fixed w-full max-w-screen-2xl bg-stone-800 text-stone-50 font-graduate bottom-0 px-2 flex flex-col text-xs sm:text-lg transition-all${
        " " + widgetHeight
      }`}
    >
      <div className="text-center">
        <button
          type="button"
          onClick={toggleWidget}
          className="hover:text-cyan-700 active:text-cyan-700"
        >
          {widget ? <FaChevronDown /> : <FaChevronUp />}
        </button>
      </div>
      <div className="flex ">
        <div className="w-1/2 sm:w-5/12 flex flex-col justify-center items-center">
          <div>
            {widget ? <p>{list.main_faction}</p> : null}
            <p>Formations: {list.formations.length}</p>
            {widget ? (
              <p>
                {
                  list.formations.filter(
                    (formation) => formation.faction !== list.main_faction
                  ).length
                }
              </p>
            ) : null}
          </div>
        </div>
        <div className="w-4/12 sm:w-5/12 flex flex-col justify-center items-center">
          <div>
            <p>
              Total: {armyTotalPoints}
              pts
            </p>
            {widget ? <p>Main: {mainFactionPoints}pts</p> : null}
            {widget ? <p>Allies: {allyFactionPoints}pts</p> : null}
          </div>
        </div>
        <div className="w-2/12 flex flex-col justify-evenly items-center py-2">
          <button
            type="button"
            onClick={returnToTop}
            className="hover:text-cyan-700 active:text-cyan-700 flex flex-col items-center"
          >
            {widget ? (
              <>
                <MdKeyboardDoubleArrowUp className="text-4xl sm:text-6xl" /> To
                Top{" "}
              </>
            ) : null}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuilderWidgetBottom;
