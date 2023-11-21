import { FORMATION, FACTION, ALLEGIANCE } from "../types";

export const formationData: FORMATION[] = [
  // ********************************************************************
  // *********************** ASTARTES FORMATIONS ************************
  // ********************************************************************
  {
    id: 1000,
    name: "Legion Demi-company",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [1000, 1002, 1001, 1001],
    optional: [1009, 1001, 1010, 1010, 1002, 1002, 1003, 1011],
    choice: [
      [1004, 1008],
      [1007, 1005, 1006],
    ],
  },
  {
    id: 1001,
    name: "Legion Garrison Force",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [1000, 1002, 1001, 1009],
    optional: [1009, 1009, 1001, 1007, 1002, 1002, 1008],
    choice: [[1006, 1007]],
  },
  {
    id: 1002,
    name: "Legion Armoured Company",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [1005, 1005, 1006],
    optional: [1004, 1005, 1005, 1006],
    choice: [[1008, 1006]],
  },
  {
    id: 1003,
    name: "Legion Aerial Assault",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [1000, 1001, 1001, 1002],
    optional: [1001, 1002, 1002, 1003, 1008, 1008],
    choice: null,
  },
  // ********************************************************************
  // ******************** KNIGHTS/TITAN FORMATIONS **********************
  // ********************************************************************
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
