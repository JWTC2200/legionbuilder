import { WEAPON_DATASHEET } from "../types";

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999

export const weaponData: WEAPON_DATASHEET[] = [
  // ********************************************************************
  // *************************ASTARTES WEAPONS **************************
  // ********************************************************************
  {
    id: 1000,
    name: "Legion combi-bolters",
    profiles: [
      {
        range: '8"',
        dice: 1,
        to_hit: 5,
        ap: 0,
        traits: ["Accurate", "Assault", "Light"],
      },
    ],
  },
  {
    id: 1001,
    name: "Pintle Mounted twin-linked bolter",
    profiles: [
      {
        range: '8"',
        dice: 1,
        to_hit: 5,
        ap: 0,
        traits: ["Arc (Front)", "Assault", "Light", "Point Defence"],
      },
    ],
  },
  {
    id: 1002,
    name: "Pintle Mounted multi-melta",
    profiles: [
      {
        range: '5"',
        dice: 1,
        to_hit: 5,
        ap: 3,
        traits: ["Anti-tank", "Arc (Front)"],
      },
    ],
  },
  {
    id: 1003,
    name: "Pintle Mounted havoc launcher",
    profiles: [
      {
        range: '15"',
        dice: 1,
        to_hit: 4,
        ap: 0,
        traits: ["Arc (Front)", "Light AT", "Point Defence"],
      },
    ],
  },
  {
    id: 1004,
    name: "Legion bolter",
    profiles: [
      {
        range: '8"',
        dice: 1,
        to_hit: 5,
        ap: 0,
        traits: ["Assault", "Light"],
      },
    ],
  },
  {
    id: 1005,
    name: "Plasma gun",
    profiles: [
      {
        range: '10"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: ["Light AT"],
      },
    ],
  },
  {
    id: 1006,
    name: "Missile launcher",
    profiles: [
      {
        range: '20"',
        dice: 1,
        to_hit: 4,
        ap: 0,
        traits: ["Ignores Cover", "Light"],
      },
      {
        range: '20"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank"],
      },
    ],
  },
  {
    id: 1007,
    name: "Legion bolt pistols",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: 5,
        ap: 0,
        traits: ["Light"],
      },
    ],
  },
  {
    id: 1008,
    name: "Laser destroyer array",
    profiles: [
      {
        range: '15"',
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: ["Anti-tank"],
      },
    ],
  },
  {
    id: 1009,
    name: "Quad launcher",
    profiles: [
      {
        range: '6"-30"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Barrage", "Light"],
      },
      {
        range: '16"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Demolisher", "Light AT"],
      },
    ],
  },
  {
    id: 1010,
    name: "Leviathan storm cannon",
    profiles: [
      {
        range: '10"',
        dice: 2,
        to_hit: 5,
        ap: 1,
        traits: ["Light AT", "Rapid Fire"],
      },
    ],
  },
  {
    id: 1011,
    name: "Cyclone melta lance",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: 4,
        ap: 3,
        traits: ["Anti-tank", "Demolisher"],
      },
    ],
  },
  {
    id: 1012,
    name: "Twin-linked volkite caliver",
    profiles: [
      {
        range: '12"',
        dice: 1,
        to_hit: 4,
        ap: 0,
        traits: ["Accurate", "Deflagrate", "Light"],
      },
    ],
  },
  {
    id: 1013,
    name: "Leviathan siege claw",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 4,
        traits: ["Rend", "Wrecker (2)"],
      },
    ],
  },
  {
    id: 1014,
    name: "Kheres assault cannon",
    profiles: [
      {
        range: '10"',
        dice: 1,
        to_hit: 5,
        ap: 1,
        traits: ["Light AT", "Rapid Fire"],
      },
    ],
  },
  {
    id: 1015,
    name: "Twin-linked lascannon",
    profiles: [
      {
        range: '22"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: ["Accurate", "Anti-tank"],
      },
    ],
  },
  {
    id: 1016,
    name: "In-built twin-linked bolter",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: 5,
        ap: 0,
        traits: ["Assault", "Light", "Point Defence"],
      },
    ],
  },
  {
    id: 1017,
    name: "Tarantula lascannon battery",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 5,
        ap: 4,
        traits: ["Anti-tank"],
      },
    ],
  },
  {
    id: 1018,
    name: "Hyperios air-defence missile launcher",
    profiles: [
      {
        range: '20"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: ["Skyfire", "Tracking"],
      },
    ],
  },
  {
    id: 1019,
    name: "Sarcophagus Mounted weapons",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: 6,
        ap: 0,
        traits: ["Light", "Point Defence"],
      },
    ],
  },
  {
    id: 1020,
    name: "Aiolus missile launcher",
    profiles: [
      {
        range: '25"',
        dice: 1,
        to_hit: 4,
        ap: 2,
        traits: ["Anti-tank", "Skyfire"],
      },
    ],
  },
  {
    id: 1021,
    name: "Hellfire plasma canonnade",
    profiles: [
      {
        range: '14"',
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: ["Light-AT"],
      },
    ],
  },
  {
    id: 1022,
    name: "Anvilus autocannon battery",
    profiles: [
      {
        range: '16"',
        dice: 2,
        to_hit: 5,
        ap: 1,
        traits: ["Accurate", "Light-AT"],
      },
    ],
  },
  // ********************************************************************
  // ***********************KNIGHT & TITAN WEAPONS **********************
  // ********************************************************************
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
        ap: "-",
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
        traits: ["Arc (Front)", "Deflagrate", "Light AT", "Shieldbane"],
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
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)", "Light AT"],
      },
    ],
  },
  {
    id: 4014,
    name: "Thermal spear",
    profiles: [
      {
        range: '8"',
        dice: 1,
        to_hit: 3,
        ap: 3,
        traits: ["Arc (Front)", "Demolisher", "Engine Killer (1)"],
      },
    ],
  },
  {
    id: 4015,
    name: "Reaper chain-cleaver",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: "-",
        traits: ["Rend"],
      },
    ],
  },
  {
    id: 4016,
    name: "Armiger autocannon",
    profiles: [
      {
        range: '16"',
        dice: 2,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT"],
      },
    ],
  },
  {
    id: 4017,
    name: "Armiger lightning locks",
    profiles: [
      {
        range: '12"',
        dice: 2,
        to_hit: 5,
        ap: 2,
        traits: ["Arc (Front)"],
      },
    ],
  },
  {
    id: 4018,
    name: "Volkite veuglaire",
    profiles: [
      {
        range: '14"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Deflagrate", "Light AT"],
      },
    ],
  },
  {
    id: 4019,
    name: "Gyges siege claw",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 4,
        traits: ["Rend", "Wrecker (2)"],
      },
    ],
  },
  {
    id: 4020,
    name: "Twin magna lascannon",
    profiles: [
      {
        range: '25"',
        dice: 2,
        to_hit: 4,
        ap: 3,
        traits: ["Accurate", "Anti-tank", "Arc (Front)"],
      },
    ],
  },
  {
    id: 4021,
    name: "Ionstorm missile pod",
    profiles: [
      {
        range: '25"',
        dice: 3,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Light AT"],
      },
    ],
  },
  {
    id: 4022,
    name: "Helios defence missiles",
    profiles: [
      {
        range: '25"',
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: ["Anti-tank", "Arc (Front)", "Skyfire", "Tracking"],
      },
    ],
  },
  {
    id: 4023,
    name: "Acastus lascanon",
    profiles: [
      {
        range: '22"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank", "Arc (Front)"],
      },
    ],
  },
  {
    id: 4024,
    name: "Conversion beam cannon",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)"],
      },
      {
        range: '6"-18"',
        dice: 1,
        to_hit: 3,
        ap: 3,
        traits: ["Arc (Front)", "Demolisher"],
      },
      {
        range: '18"-35"',
        dice: 2,
        to_hit: 3,
        ap: 4,
        traits: ["Arc (Front)", "Demolisher"],
      },
    ],
  },
  {
    id: 4025,
    name: "Volkite culverin",
    profiles: [
      {
        range: '14"',
        dice: 2,
        to_hit: 4,
        ap: 0,
        traits: ["Arc (Front)", "Deflagrate", "Light"],
      },
    ],
  },
  {
    id: 4026,
    name: "Karacnos mortar battery",
    profiles: [
      {
        range: '30"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Barrage", "Ignores Cover"],
      },
    ],
  },
  {
    id: 4027,
    name: "Acastus autocannon",
    profiles: [
      {
        range: '16"',
        dice: 3,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT"],
      },
    ],
  },
  {
    id: 4028,
    name: "Vulcan mega-bolter",
    profiles: [
      {
        range: '22"',
        dice: 10,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Rapid Fire", "Shieldbane"],
      },
    ],
  },
  {
    id: 4029,
    name: "Turbo-laser destructor",
    profiles: [
      {
        range: '40"',
        dice: 2,
        to_hit: 4,
        ap: 3,
        traits: ["Accurate", "Arc (Front)"],
      },
    ],
  },
  {
    id: 4030,
    name: "Plasma blastgun",
    profiles: [
      {
        range: '20"',
        dice: 2,
        to_hit: 3,
        ap: 3,
        traits: ["Arc (Front)"],
      },
    ],
  },
  {
    id: 4031,
    name: "Inferno gun",
    profiles: [
      {
        range: "T",
        dice: 0,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)", "Firestorm", "Light AT", "Shieldbane"],
      },
    ],
  },
  {
    id: 4032,
    name: "Incisor pattern melta lance",
    profiles: [
      {
        range: '14"',
        dice: 1,
        to_hit: 4,
        ap: 3,
        traits: ["Accurate", "Anti-tank", "Arc (Front)", "Demolisher"],
      },
      {
        range: '6"',
        dice: 1,
        to_hit: 3,
        ap: 4,
        traits: [
          "Accurate",
          "Anti-tank",
          "Arc (Front)",
          "Demolisher",
          "Engine Killer (2)",
        ],
      },
    ],
  },
  {
    id: 4033,
    name: "Volkite eradicator",
    profiles: [
      {
        range: '16"',
        dice: 3,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)", "Beam", "Deflagrate", "Light AT", "Shieldbane"],
      },
    ],
  },
  {
    id: 4034,
    name: "Warhound shudder missiles",
    profiles: [
      {
        range: '35"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Barrage", "Quake"],
      },
    ],
  },
  {
    id: 4035,
    name: "Warhound swarmer missiles",
    profiles: [
      {
        range: '35"',
        dice: 8,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Rapid Fire", "Shieldbane"],
      },
    ],
  },
  {
    id: 4036,
    name: "Ursus claw",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: 4,
        ap: "SP",
        traits: ["Impale"],
      },
    ],
  },
  {
    id: 4037,
    name: "Natrix shock lance",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: 2,
        ap: 1,
        traits: ["Bypass", "Shock Pulse"],
      },
    ],
  },
  {
    id: 4038,
    name: "Graviton eradicator",
    profiles: [
      {
        range: '30"',
        dice: 2,
        to_hit: null,
        ap: 2,
        traits: ["Arc(Front)", "Demolisher", "Graviton Pulse"],
      },
    ],
  },
  {
    id: 4039,
    name: "Conversion beam dissolutor",
    profiles: [
      {
        range: '6"',
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: ["Arc(Front)"],
      },
      {
        range: '6"-18"',
        dice: 2,
        to_hit: 3,
        ap: 3,
        traits: ["Arc(Front)", "Demolisher"],
      },
      {
        range: '18"-35"',
        dice: 2,
        to_hit: 2,
        ap: 4,
        traits: ["Arc(Front)", "Demolisher"],
      },
    ],
  },
];

// {
//   id:,
//   name: ,
//   profiles: [
//     {
//   range:,
//   dice:,
//   to_hit: ,
//   ap: ,
//   traits: ["Arc (Front)"]
// },
//   ]
// }
