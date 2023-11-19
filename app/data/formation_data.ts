import { FORMATION, FACTION, ALLEGIANCE } from "../types";

export const formationData: FORMATION[] = [
  {
    id: 1000,
    name: "Legion Demi-company",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [1000, 1002, 1001, 1001],
    optional: [1009, 1001, 1010, 1010, 1002, 1002, 1003],
    choice: [
      [1004, 1008],
      [1007, 1005, 1006],
    ],
  },
  {
    id: 4000,
    name: "Knight Household Lance",
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [4000],
    optional: null,
    choice: null,
  },
  {
    id: 4001,
    name: "Legion Support",
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [4001],
    optional: null,
    choice: null,
  },
];
