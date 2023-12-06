import React from "react";
import { listState } from "../../builder/state";
import { listPointTotals } from "../../utils";

const ListInfoHtml = () => {
  const { list } = listState();
  const { mainFactionPoints, allyFactionPoints, armyTotalPoints } =
    listPointTotals(list);

  return (
    <div className="mb-2">
      <h1 className="font-bold font-subrayada text-xl">{list.list_name}</h1>
      <h2 className="font-bold font-graduate">
        List total: {armyTotalPoints} points
      </h2>
      <h2 className="font-bold font-graduate">
        Main faction: {list.main_faction}
      </h2>
    </div>
  );
};

export default ListInfoHtml;
