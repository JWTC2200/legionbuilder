import { ALLEGIANCE, FACTION, UNIT_DATASHEET, UNIT_TYPE } from "../types";

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999

export const unitData: UNIT_DATASHEET[] = [
  // ********************************************************************
  // *************************ASTARTES UNITS ****************************
  // ********************************************************************
  {
    id: 1000,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Command Squad",
    movement: 5,
    save: 4,
    caf: 4,
    morale: 2,
    wounds: 1,
    weapons: [1000],
    special_rules: [
      "Commander",
      'Inspire (5")',
      "Invulnerable Save (6+)",
      "Master Tactitian",
      "Medicae",
    ],
  },
  {
    id: 1001,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Rhino",
    movement: 9,
    save: 4,
    caf: 0,
    morale: 3,
    wounds: 1,
    weapons: [1001, 1002, 1003],
    special_rules: ["Transport (2)"],
  },
  {
    id: 1002,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Tactical Legionaries",
    movement: 5,
    save: 5,
    caf: 2,
    morale: 3,
    wounds: 1,
    weapons: [1004, 1005, 1006],
    special_rules: [],
  },
  {
    id: 1003,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Legion Terminators",
    movement: 5,
    save: 4,
    caf: 4,
    morale: 3,
    wounds: 1,
    weapons: [1000],
    special_rules: [
      "Bulky",
      "Deep Strike",
      "Implacable",
      "Invulnerable Save (6+)",
      "Steadfast",
    ],
  },
  {
    id: 1004,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Assault Marines",
    movement: 7,
    save: 5,
    caf: 3,
    morale: 3,
    wounds: 1,
    weapons: [1007],
    special_rules: ["Independant", "Jump Packs"],
  },
  {
    id: 1005,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Support Legionaries (plasma)",
    movement: 7,
    save: 5,
    caf: 3,
    morale: 3,
    wounds: 1,
    weapons: [1005],
    special_rules: [],
  },
  {
    id: 1006,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Support Legionaries (missile)",
    movement: 7,
    save: 5,
    caf: 3,
    morale: 3,
    wounds: 1,
    weapons: [1006],
    special_rules: [],
  },
  {
    id: 1007,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Legion Rapier",
    movement: 4,
    save: 5,
    caf: 1,
    morale: 3,
    wounds: 1,
    weapons: [1008, 1009],
    special_rules: ["Bulky"],
  },
  {
    id: 1008,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.walker, value: 1 },
    name: "Leviathan Dreadnought",
    movement: 5,
    save: 4,
    caf: 5,
    morale: 3,
    wounds: 1,
    weapons: [1010, 1011, 1012, 1013],
    special_rules: ["Armoured", "Invunerable Save (5+)"],
  },
  {
    id: 1009,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.walker, value: 1 },
    name: "Contemptor Dreadnought",
    movement: 5,
    save: 4,
    caf: 5,
    morale: 3,
    wounds: 1,
    weapons: [1014, 1015, 1016],
    special_rules: ["Armoured", "Invunerable Save (6+)"],
  },
  {
    id: 1010,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.infantry, value: 1 },
    name: "Legion Tarantula Battery",
    movement: 0,
    save: 5,
    caf: 1,
    morale: null,
    wounds: 1,
    weapons: [1017, 1018],
    special_rules: ["Automated Sentry"],
  },
  {
    id: 1011,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.walker, value: 1 },
    name: "Deredeo Dreadnought",
    movement: 5,
    save: 4,
    caf: 2,
    morale: 3,
    wounds: 1,
    weapons: [1019, 1020, 1021, 1022],
    special_rules: ["Armoured", "Invunerable Save (5+)", "Tracking Array"],
  },
  {
    id: 1012,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Legion Predator",
    movement: 9,
    save: 3,
    caf: 2,
    morale: 3,
    wounds: 1,
    weapons: [1023, 1024, 1025, 1026],
    special_rules: [],
  },
  {
    id: 1013,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Legion Sicaran",
    movement: 10,
    save: 3,
    caf: 2,
    morale: 3,
    wounds: 1,
    weapons: [1027, 1028, 1029, 1024, 1026],
    special_rules: [],
  },
  {
    id: 1014,
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
    name: "Legion Kratos",
    movement: 8,
    save: 3,
    caf: 2,
    morale: 3,
    wounds: 2,
    weapons: [1030, 1031, 1032, 1027, 1024, 1026, 1033, 1034],
    special_rules: [],
  },

  // ********************************************************************
  // ************************** KNIGHT TITAN UNITS **********************
  // ********************************************************************
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
  {
    id: 4003,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Questoris Knight Armiger",
    movement: 8,
    save: 3,
    caf: 6,
    morale: 2,
    wounds: 2,
    weapons: [4014, 4015, 4016],
    special_rules: ["Ion Shields (5+)", "Nimble"],
  },
  {
    id: 4004,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Mechanicum Knight Moirax",
    movement: 8,
    save: 3,
    caf: 6,
    morale: 2,
    wounds: 2,
    weapons: [4017, 4018, 4019],
    special_rules: ["Ionic Flare Shield", "Ion Shields (5+)", "Nimble"],
  },
  {
    id: 4005,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.knight, value: 4 },
    name: "Acastus Knight",
    movement: 8,
    save: 3,
    caf: 7,
    morale: 2,
    wounds: 2,
    weapons: [4020, 4021, 4022, 4023, 4024, 4025, 4026, 4027],
    special_rules: [
      "Blessed Auto-simulacra",
      "Independant",
      "Ion Shields (4+)",
    ],
  },
  {
    id: 4006,
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    unit_type: { type: UNIT_TYPE.titan, value: 5 },
    name: "Warhound Titan",
    movement: 7,
    save: 2,
    caf: 10,
    morale: null,
    wounds: 4,
    weapons: [
      4028, 4029, 4030, 4031, 4032, 4033, 4034, 4035, 4036, 4037, 4038, 4039,
    ],
    special_rules: ["Agile", "Void Shields (2)"],
  },
];
