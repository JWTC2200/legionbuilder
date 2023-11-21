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
        id: 1000,
        type: DETACHMENT_TYPE.hq,
        options: [],
        slot_ref: "formation0compulsorySlot0",
        selected_unit: {
          id: 4000,
          name: "Questoris Knight Banner",
          upgrade_options: [
            {
              name: "Additional Knight",
              number: 0,
              cost: 0,
              size: 0,
            },
            {
              name: "Knight Styrix/Magaera upgrade",
              number: 0,
              cost: 0,
              size: 0,
            },
            {
              name: "Rocket pods",
              number: 0,
              cost: 0,
              size: 0,
            },
            {
              name: "Thunderstrike gauntlets",
              number: 1,
              cost: 2,
              size: 0,
            },
            {
              name: "Armiger Talon",
              number: 1,
              cost: 180,
              size: 3,
            },
            {
              name: "Moriax Talon",
              number: 0,
              cost: 0,
              size: 0,
            },
          ],
        },
      },
    ],
    optional: null,
  };
  return <BuilderFormation formation={test} setArmyList={setArmyList} />;
};

export default page;
