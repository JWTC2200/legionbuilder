import { FORMATION, FACTION, ALLEGIANCE } from "../types";

export const formationData: FORMATION[] = [
  {
    id: 1,
    name: "Legion Astranii Class Augumented Spearhead",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [1, 2, 3, 4, 5, 6],
    optional: [7, 8],
    choice: null,
  },

  // ********************************************************************
  // *********************** ASTARTES FORMATIONS ************************
  // ********************************************************************
  {
    id: 1000,
    name: "Legion Demi-company",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [1000, 1002, 1001, 1001],
    optional: [1009, 1001, 1010, 1010, 1002, 1002, 1003, 9000],
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
    optional: [1001, 1002, 1002, 1003, 1008, 1008, 9001, 9002],
    choice: null,
  },
  // ********************************************************************
  // ******************* SOLAR AUXILIA FORMATIONS **********************
  // ********************************************************************
  {
    id: 2000,
    name: "Solar Auxilia Sub-Cohort",
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [1000, 9003, 9003, 1002],
    optional: [1010, 1010, 1010, 1002, 1002, 1005, 1001],
    choice: [
      [1004, 1003],
      [1007, 1005, 1008],
    ],
  },
  {
    id: 2001,
    name: "Solar Auxilia Armoured Company",
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [1005, 1005, 1006],
    optional: [1005, 1005, 1006, 9004],
    choice: [[1005, 1007, 1008]],
  },
  {
    id: 2002,
    name: "Solar Auxilia Pioneer Company",
    faction: FACTION.solar,
    allegiance: ALLEGIANCE.neutral,
    compulsory: [1000, 9005, 1009, 1009],
    optional: [1002, 1001, 1008, 1003, 1003],
    choice: [[1005, 1007, 1008]],
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
