import { WEAPON_DATASHEET } from "../types";

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999

export const weaponData: WEAPON_DATASHEET[] = [
  {
    id: 4000,
    name: "Thermal Cannon",
    profiles: [
      {
        range: '12"',
        dice: 2,
        to_hit: 4,
        ap: 3,
        traits: ["Anti-tank", "Arc (Front)", "Demolisher"],
      },
      {
        range: '6"',
        dice: 1,
        to_hit: 3,
        ap: 4,
        traits: ["Anti-tank", "Arc (Front)", "Demolisher", "Engine Killer (1)"],
      },
    ],
  },
  {
    id: 4001,
    name: "Rapid-fire battlecannon",
    profiles: [
      {
        range: '28"',
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)", "Rapid Fire"],
      },
    ],
  },
  {
    id: 4002,
    name: "Questoris-avenger gatling cannon",
    profiles: [
      {
        range: '16"',
        dice: 5,
        to_hit: 5,
        ap: 2,
        traits: ["Arc (Front)", "LightAT", "Rapid Fire"],
      },
    ],
  },
  {
    id: 4003,
    name: "Heavy stubber",
    profiles: [
      {
        range: '14"',
        dice: 1,
        to_hit: 5,
        ap: 0,
        traits: ["Arc (Front)", "light", "Point Defence"],
      },
    ],
  },
  {
    id: 4004,
    name: "Meltagun",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: 4,
        ap: 3,
        traits: ["Anti-tank", "Arc (Front)"],
      },
    ],
  },
  {
    id: 4005,
    name: "Reaper chainsword",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 0,
        traits: ["Rend"],
      },
    ],
  },
  {
    id: 4006,
    name: "Thundestrike gauntlet",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 0,
        traits: ["Rend", "Wrecker (1)"],
      },
    ],
  },
  {
    id: 4007,
    name: "Rocket pods",
    profiles: [
      {
        range: '16"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Barrage"],
      },
    ],
  },
  {
    id: 4008,
    name: "Volkite chicorovile",
    profiles: [
      {
        range: '12"',
        dice: 3,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)", "Deflagrate", "Light AT", "Sheildbane"],
      },
    ],
  },
  {
    id: 4009,
    name: "Hekaton sige claw",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 5,
        traits: ["Rend", "Wrecker (3)"],
      },
    ],
  },
  {
    id: 4010,
    name: "Graviton gun",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: null,
        ap: 1,
        traits: ["Arc (Front)", "Graviton Pulse"],
      },
    ],
  },
  {
    id: 4011,
    name: "Lightning cannone",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 5,
        ap: 2,
        traits: ["Arc (Front)", 'Blast (3")'],
      },
    ],
  },
  {
    id: 4012,
    name: "Hekaton siege claw",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 5,
        traits: ["Rend", "Wrecker (3)"],
      },
    ],
  },
  {
    id: 4013,
    name: "Phased plasma-fusil",
    profiles: [
      {
        range: '10"',
        dice: 1,
        to_hit: 1,
        ap: 2,
        traits: ["Arc (Front)", "Light AT"],
      },
    ],
  },
];
