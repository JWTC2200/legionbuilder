import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "../types";

export const formationSlotData: FORMATION_SLOT[] = [
  {
    id: 1000,
    type: DETACHMENT_TYPE.hq,
    options: [],
  },
  {
    id: 1001,
    type: DETACHMENT_TYPE.core,
    options: [],
  },
  {
    id: 1002,
    type: DETACHMENT_TYPE.support,
    options: [],
  },
  {
    id: 1003,
    type: DETACHMENT_TYPE.vanguard,
    options: [],
  },
  {
    id: 1004,
    type: DETACHMENT_TYPE.light,
    options: [],
  },
  {
    id: 1005,
    type: DETACHMENT_TYPE.battle,
    options: [],
  },
  {
    id: 1006,
    type: DETACHMENT_TYPE.heavy,
    options: [],
  },
  {
    id: 1007,
    type: DETACHMENT_TYPE.artillery,
    options: [],
  },
  {
    id: 1008,
    type: DETACHMENT_TYPE.air,
    options: [],
  },
  {
    id: 1009,
    type: DETACHMENT_TYPE.bastion,
    options: [],
  },
  {
    id: 1010,
    type: DETACHMENT_TYPE.transport,
    options: [],
  },
  {
    id: 1011,
    type: DETACHMENT_TYPE.transport,
    restricted: true,
    options: [1001],
    description: "Demi-company bonus transports",
  },
  {
    id: 4000,

    type: DETACHMENT_TYPE.knight,
    options: [],
  },
  {
    id: 4001,
    type: DETACHMENT_TYPE.titan,
    options: [],
  },
];
