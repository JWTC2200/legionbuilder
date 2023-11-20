"use client";
import React, { useState } from "react";
import BuilderFormation from "../builder/components/BuilderFormation";
import {
  FACTION,
  BUILDER_LIST,
  BUILDER_FORMATION,
  DETACHMENT_TYPE,
} from "../types";

const page = () => {
  const [armyList, setArmyList] = useState<BUILDER_LIST>({
    points: 3000,
    main_faction: FACTION.astartes,
    formations: [],
  });
  const test: BUILDER_FORMATION = {
    name: "Knight Household Lance",
    ref_id: "formation0",
    id: 4000,
    choice: null,
    compulsory: [
      {
        id: 4000,
        type: DETACHMENT_TYPE.knight,
        options: [],
        slot_ref: "formation0compulsorySlot0",
        selected_unit: null,
      },
    ],
    optional: null,
  };
  return <BuilderFormation formation={test} setArmyList={setArmyList} />;
};

export default page;
