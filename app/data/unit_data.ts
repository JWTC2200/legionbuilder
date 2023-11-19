import { ALLEGIANCE, FACTION, UNIT_DATASHEET, UNIT_TYPE } from "../types";

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999

export const unitData: UNIT_DATASHEET[] = [
  {
    id: 4000,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Questoris Knight",
    movement: 8,
    save: 3,
    caf: 8,
    morale: 2,
    wounds: 3,
    weapons: [4000, 4001, 4002, 4003, 4004, 4005, 4006, 4007],
    special_rules: ["Independant", "Ion Shields (4+)", "Nimble"],
  },
  {
    id: 4001,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Knight Styrix",
    movement: 8,
    save: 3,
    caf: 8,
    morale: 2,
    wounds: 3,
    weapons: [4008, 4009, 4010],
    special_rules: [
      "Blessed Auto-simulacra",
      "Independant",
      "Ionic Flare Shield",
      "Ion Shields (4+)",
      "Nimble",
    ],
  },
  {
    id: 4002,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Knight Magaera",
    movement: 8,
    save: 3,
    caf: 8,
    morale: 2,
    wounds: 3,
    weapons: [4008, 4009, 4010],
    special_rules: [
      "Blessed Auto-simulacra",
      "Independant",
      "Ionic Flare Shield",
      "Ion Shields (4+)",
      "Nimble",
    ],
  },
];