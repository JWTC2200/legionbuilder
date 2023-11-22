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
    name: "Quad-launcher",
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
  {
    id: 1023,
    name: "Predator cannon",
    profiles: [
      {
        range: '18"',
        dice: 2,
        to_hit: 5,
        ap: 1,
        traits: ["Light-AT"],
      },
    ],
  },
  {
    id: 1024,
    name: "Sponson Mounted heavy bolter",
    profiles: [
      {
        range: '12"',
        dice: 2,
        to_hit: 5,
        ap: 0,
        traits: ["Arc (Front)", "Light", "Point Defence"],
      },
    ],
  },
  {
    id: 1025,
    name: "Predator lascannon",
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
    id: 1026,
    name: "Sponson Mounted lascannon",
    profiles: [
      {
        range: '22"',
        dice: 1,
        to_hit: 5,
        ap: 0,
        traits: ["Arc (Front)", "Anti-tank"],
      },
    ],
  },
  {
    id: 1027,
    name: "Hull Mounted heavy bolter",
    profiles: [
      {
        range: '12"',
        dice: 2,
        to_hit: 5,
        ap: 0,
        traits: ["Arc (Front)", "Light", "Point Defence"],
      },
    ],
  },
  {
    id: 1028,
    name: "Twin-linked accelerator autocannon",
    profiles: [
      {
        range: '16"',
        dice: 3,
        to_hit: 5,
        ap: 1,
        traits: ["Tracking"],
      },
    ],
  },
  {
    id: 1029,
    name: "Omega plasma array",
    profiles: [
      {
        range: '12"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Accurate"],
      },
    ],
  },
  {
    id: 1030,
    name: "Kratos battlecannon",
    profiles: [
      {
        range: '20"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: [],
      },
      {
        range: '10"',
        dice: 1,
        to_hit: 4,
        ap: 4,
        traits: ["Anti-tank", "Armourbane"],
      },
    ],
  },
  {
    id: 1031,
    name: "Co-axial autocannon",
    profiles: [
      {
        range: '16"',
        dice: 2,
        to_hit: 5,
        ap: 1,
        traits: ["Co-axial", "Light AT"],
      },
    ],
  },
  {
    id: 1032,
    name: "Melta blastgun",
    profiles: [
      {
        range: '8"',
        dice: 1,
        to_hit: 4,
        ap: 4,
        traits: ["Anti-tank", "Armourbane", "Bunker Buster"],
      },
    ],
  },
  {
    id: 1033,
    name: "Kratos autocannon",
    profiles: [
      {
        range: '16"',
        dice: 2,
        to_hit: 5,
        ap: 1,
        traits: ["Accurate", "Arc (Front)", "Light AT"],
      },
    ],
  },
  {
    id: 1034,
    name: "Kratos lascannon",
    profiles: [
      {
        range: '22"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: ["Accurate", "Arc (Front)", "Anti-tank"],
      },
    ],
  },
  {
    id: 1035,
    name: "Xiphon lascannon array",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Accurate", "Anti-tank", "Skyfire"],
      },
    ],
  },
  {
    id: 1036,
    name: "Xiphon rotary missile launcher",
    profiles: [
      {
        range: '24"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Skyfire", "Tracking"],
      },
    ],
  },
  {
    id: 1037,
    name: "Storm Eagle heavy bolter",
    profiles: [
      {
        range: '12"',
        dice: 3,
        to_hit: 5,
        ap: 0,
        traits: ["Arc (Front)", "Light", "Point defence", "Skyfire"],
      },
    ],
  },
  {
    id: 1038,
    name: "Vengeance launcher",
    profiles: [
      {
        range: '15"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Light AT"],
      },
    ],
  },
  {
    id: 1039,
    name: "Tempest rockets",
    profiles: [
      {
        range: '35"',
        dice: 1,
        to_hit: 2,
        ap: 2,
        traits: ["Arc (Front)", "Skyfire"],
      },
    ],
  },
  {
    id: 1040,
    name: "Wing Mounted lascannon",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank", "Arc (Front)", "Skyfire"],
      },
    ],
  },
  {
    id: 1041,
    name: "Avenger bolt cannon",
    profiles: [
      {
        range: '16"',
        dice: 5,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Rapid Fire", "Skyfire"],
      },
    ],
  },
  {
    id: 1042,
    name: "Quad heavy bolter batteries",
    profiles: [
      {
        range: '12"',
        dice: 4,
        to_hit: 5,
        ap: 0,
        traits: ["Light", "Point Defence", "Skyfire"],
      },
    ],
  },
  {
    id: 1043,
    name: "Gravis autocannon batteries",
    profiles: [
      {
        range: '16"',
        dice: 3,
        to_hit: 5,
        ap: 1,
        traits: ["Light AT", "Skyfire"],
      },
    ],
  },
  {
    id: 1044,
    name: "Lascannon batteries ",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank", "Skyfire"],
      },
    ],
  },
  {
    id: 1045,
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
    id: 1046,
    name: "Thunderhawk heavy bolters",
    profiles: [
      {
        range: '12"',
        dice: 3,
        to_hit: 5,
        ap: 0,
        traits: ["Arc (Front)", "Light", "Point Defence", "Skyfire"],
      },
    ],
  },
  {
    id: 1047,
    name: "Thunderhawk lascannon",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank", "Arc (Front)", "Skyfire"],
      },
    ],
  },
  {
    id: 1048,
    name: "Hellstrike missiles",
    profiles: [
      {
        range: '30"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Armourbane"],
      },
    ],
  },
  // ********************************************************************
  // ************************ SOlAR AUXLIA WEAPONS **********************
  // ********************************************************************
  {
    id: 2000,
    name: "Archeotech istol",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: 5,
        ap: 1,
        traits: ["Accurate", "Light"],
      },
    ],
  },
  {
    id: 2001,
    name: "Volkite chargers",
    profiles: [
      {
        range: '8"',
        dice: 1,
        to_hit: 5,
        ap: 0,
        traits: ["Deflagrate", "Light"],
      },
    ],
  },
  {
    id: 2002,
    name: "Auxillia lasrifles",
    profiles: [
      {
        range: '10"',
        dice: 1,
        to_hit: 5,
        ap: 0,
        traits: ["Light"],
      },
    ],
  },
  {
    id: 2003,
    name: "Flamers",
    profiles: [
      {
        range: '6"',
        dice: 1,
        to_hit: 4,
        ap: 0,
        traits: ["Ignores Cover", "Light"],
      },
    ],
  },
  {
    id: 2004,
    name: "Auxilia laspistols",
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
    id: 2005,
    name: "Power axes",
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
    id: 2006,
    name: "Charonite claws",
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
    id: 2007,
    name: "Mole mortar",
    profiles: [
      {
        range: '20"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: ["Burrowing"],
      },
    ],
  },
  {
    id: 2008,
    name: "Multi-laser",
    profiles: [
      {
        range: '24"',
        dice: 2,
        to_hit: 5,
        ap: 0,
        traits: ["Light AT"],
      },
    ],
  },
  {
    id: 2009,
    name: "Sentinel missile launcher",
    profiles: [
      {
        range: '20"',
        dice: 2,
        to_hit: 4,
        ap: 0,
        traits: ["Light", "Ignores Cover"],
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
    id: 2010,
    name: "Leman Russ battlecannon",
    profiles: [
      {
        range: '25"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: [],
      },
    ],
  },
  {
    id: 2011,
    name: "Vanquisher battlecannon",
    profiles: [
      {
        range: '32"',
        dice: 1,
        to_hit: 4,
        ap: 2,
        traits: ["Anti-tank", "Armourbane"],
      },
    ],
  },
  {
    id: 2012,
    name: "Hull Mounted lascannon",
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
    id: 2013,
    name: "Malcador battlecannon",
    profiles: [
      {
        range: '25"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)"],
      },
    ],
  },
  {
    id: 2014,
    name: "Malcador Vanquisher battlecannon",
    profiles: [
      {
        range: '32"',
        dice: 1,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)", "Anti-tank", "Armourbane"],
      },
    ],
  },
  {
    id: 2015,
    name: "Malcador lascannon turret",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Anti-tank"],
      },
    ],
  },
  {
    id: 2016,
    name: "Malcador heavy bolter sponsons",
    profiles: [
      {
        range: '12"',
        dice: 2,
        to_hit: 5,
        ap: 0,
        traits: ["Light", "Point Defence"],
      },
    ],
  },
  {
    id: 2017,
    name: "Malcador lascannon sponsons",
    profiles: [
      {
        range: '22"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank"],
      },
    ],
  },
  {
    id: 2018,
    name: "Malcador autocannon sponsons",
    profiles: [
      {
        range: '16"',
        dice: 2,
        to_hit: 5,
        ap: 1,
        traits: ["Light AT"],
      },
    ],
  },
  {
    id: 2019,
    name: "Hull Mounted autocannon",
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
    id: 2020,
    name: "Hull Mounted demolisher cannon",
    profiles: [
      {
        range: '12"',
        dice: 1,
        to_hit: 4,
        ap: 3,
        traits: ["Arc (Front)", "Demolisher", "Ignores Cover"],
      },
    ],
  },
  {
    id: 2021,
    name: "Baneblade cannon",
    profiles: [
      {
        range: '25"',
        dice: 1,
        to_hit: 4,
        ap: 3,
        traits: [],
      },
    ],
  },
  {
    id: 2022,
    name: "Hellhammer cannon",
    profiles: [
      {
        range: '14"',
        dice: 1,
        to_hit: 4,
        ap: 3,
        traits: ["Demolisher", "Ignores Cover"],
      },
    ],
  },
  {
    id: 2023,
    name: "Lascannon sponson turrets",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank"],
      },
    ],
  },
  {
    id: 2024,
    name: "Baneblade heavy bolter sponsons",
    profiles: [
      {
        range: '12"',
        dice: 4,
        to_hit: 5,
        ap: 0,
        traits: ["Light", "Point Defence"],
      },
    ],
  },
  {
    id: 2025,
    name: "Baneblade autocannon sponsons",
    profiles: [
      {
        range: '16"',
        dice: 2,
        to_hit: 5,
        ap: 1,
        traits: ["Light AT", "Point Defence"],
      },
    ],
  },
  {
    id: 2026,
    name: "Baneblade heavy flamer sponsons",
    profiles: [
      {
        range: '6"',
        dice: 2,
        to_hit: 4,
        ap: 0,
        traits: ["Light", "Ignores Cover", "Point Defence"],
      },
    ],
  },
  {
    id: 2027,
    name: "Quad autocannons",
    profiles: [
      {
        range: '16"',
        dice: 4,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Skyfire"],
      },
    ],
  },
  {
    id: 2028,
    name: "Thunderbolt twin-linked lascannon",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank", "Arc (Front)", "Skyfire"],
      },
    ],
  },
  {
    id: 2029,
    name: "Avenger bolt cannon",
    profiles: [
      {
        range: '16"',
        dice: 5,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Skyfire", "Rapid Fires"],
      },
    ],
  },
  {
    id: 2030,
    name: "Hellstrike missiles",
    profiles: [
      {
        range: '30"',
        dice: 2,
        to_hit: 4,
        ap: 4,
        traits: ["Arc (Front)", "Armourbane"],
      },
    ],
  },
  {
    id: 2031,
    name: "Skystrike missiles",
    profiles: [
      {
        range: '30"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank", "Arc (Front)", "Skyfire", "Tracking"],
      },
    ],
  },
  {
    id: 2032,
    name: "Wing bombs",
    profiles: [
      {
        range: "-",
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: ["Anti-tank", "Arc (Rear)", "Bombing Run"],
      },
    ],
  },
  {
    id: 2033,
    name: "Avenger autocannon",
    profiles: [
      {
        range: '16"',
        dice: 4,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Skyfire"],
      },
    ],
  },
  {
    id: 2034,
    name: "Avenger lascannon",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank", "Arc (Front)", "Skyfire"],
      },
    ],
  },
  {
    id: 2035,
    name: "Heavy stubber tail gun",
    profiles: [
      {
        range: '14"',
        dice: 2,
        to_hit: 6,
        ap: 0,
        traits: ["Arc (Rear)", "Light AT", "Point Defence", "Skyfire"],
      },
    ],
  },
  {
    id: 2036,
    name: "Lightning twin lascannon",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank", "Arc (Front)", "Skyfire"],
      },
    ],
  },
  {
    id: 2037,
    name: "Lightning twin multi-laser",
    profiles: [
      {
        range: '14"',
        dice: 4,
        to_hit: 5,
        ap: 0,
        traits: ["Arc (Front)", "Light AT", "Skyfire"],
      },
    ],
  },
  {
    id: 2038,
    name: "Phosphex bomb clusters",
    profiles: [
      {
        range: "-",
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Rear)", "Bombing Run", "Light AT", "Ignores Cover"],
      },
    ],
  },
  {
    id: 2039,
    name: "Nose Mounted lascannon",
    profiles: [
      {
        range: '22"',
        dice: 2,
        to_hit: 4,
        ap: 1,
        traits: ["Anti-tank", "Arc (Front)", "Skyfire"],
      },
    ],
  },
  {
    id: 2040,
    name: "Marauder heavy bolter turrets",
    profiles: [
      {
        range: '12"',
        dice: 3,
        to_hit: 6,
        ap: 0,
        traits: ["Arc (Rear)", "Light AT", "Point Defence", "Skyfire"],
      },
    ],
  },
  {
    id: 2041,
    name: "Marauder bomb bay",
    profiles: [
      {
        range: "-",
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Rear)", "Bombing Run"],
      },
    ],
  },
  {
    id: 2042,
    name: "Nose Mounted heavy bolter",
    profiles: [
      {
        range: '12"',
        dice: 3,
        to_hit: 6,
        ap: 0,
        traits: ["Arc (Front)", "Light AT", "Point Defence", "Skyfire"],
      },
    ],
  },
  {
    id: 2043,
    name: "Rear Mounted heavy bolter",
    profiles: [
      {
        range: '12"',
        dice: 3,
        to_hit: 6,
        ap: 0,
        traits: ["Arc (Rear)", "Light AT", "Point Defence", "Skyfire"],
      },
    ],
  },
  {
    id: 2044,
    name: "Colossus bomb",
    profiles: [
      {
        range: "-",
        dice: 6,
        to_hit: 3,
        ap: 4,
        traits: ["Arc (Rear)", "Bombing Run", "Bunker Buster", "Limited (1)"],
      },
    ],
  },
  {
    id: 2045,
    name: "Nose Mounted autocannon array",
    profiles: [
      {
        range: '16"',
        dice: 6,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Skyfire"],
      },
    ],
  },
  {
    id: 2046,
    name: "Marauder assault cannons",
    profiles: [
      {
        range: '12"',
        dice: 3,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Rapid Fire", "Skyfire"],
      },
    ],
  },
  {
    id: 2047,
    name: "Destroyer bomb bay",
    profiles: [
      {
        range: "-",
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Rear)", "Bombing Run"],
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
  {
    id: 4040,
    name: "Neutron laser",
    profiles: [
      {
        range: '38"',
        dice: 1,
        to_hit: 4,
        ap: 3,
        traits: ["Arc(Front)", "Shock Pulse"],
      },
    ],
  },
  {
    id: 4041,
    name: "Volcano cannon",
    profiles: [
      {
        range: '70"',
        dice: 1,
        to_hit: 3,
        ap: 4,
        traits: ["Arc(Front)", "Engine Killer(2)"],
      },
    ],
  },
  {
    id: 4042,
    name: "Ardex mega-bolter",
    profiles: [
      {
        range: '12"',
        dice: 9,
        to_hit: 5,
        ap: 1,
        traits: ["Light AT", "Point Defence", "Rapid Fire", "Shieldbane"],
      },
    ],
  },
  {
    id: 4043,
    name: "Coversion beam dissipator",
    profiles: [
      {
        range: '6"',
        dice: 2,
        to_hit: 3,
        ap: 2,
        traits: ["Arc (Front)", "Accurate"],
      },
      {
        range: '6"-18"',
        dice: 3,
        to_hit: 3,
        ap: 3,
        traits: ["Arc (Front)", "Accurate", "Demolisher"],
      },
      {
        range: '18"-35"',
        dice: 3,
        to_hit: 3,
        ap: 4,
        traits: ["Arc (Front)", "Accurate", "Demolisher"],
      },
    ],
  },
  {
    id: 4044,
    name: "Reaver laser blaster",
    profiles: [
      {
        range: '40"',
        dice: 3,
        to_hit: 4,
        ap: 3,
        traits: ["Arc (Front)"],
      },
    ],
  },
  {
    id: 4045,
    name: "Reaver gatling blaster",
    profiles: [
      {
        range: '35"',
        dice: 4,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)"],
      },
    ],
  },
  {
    id: 4046,
    name: "Reaver volcano cannon",
    profiles: [
      {
        range: '60"',
        dice: 1,
        to_hit: 2,
        ap: 4,
        traits: ["Arc (Front)", "Engine Killer (3)"],
      },
    ],
  },
  {
    id: 4047,
    name: "Reaver melta cannon",
    profiles: [
      {
        range: '14"',
        dice: 2,
        to_hit: 4,
        ap: 3,
        traits: ["Anti-tank", "Arc (Front)", "Demolisher"],
      },
      {
        range: '8"',
        dice: 2,
        to_hit: 3,
        ap: 4,
        traits: ["Anti-tank", "Arc (Front)", "Demolisher", "Engine Killer (4)"],
      },
    ],
  },
  {
    id: 4048,
    name: "Reaver power fist",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 4,
        traits: ["Engine Killer (1)", "Rend", "Wrecker(4)"],
      },
    ],
  },
  {
    id: 4049,
    name: "Reaver chain fist",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 4,
        traits: ["Engine Killer (2)", "Rend", "Wrecker(4)"],
      },
    ],
  },
  {
    id: 4050,
    name: "Reaver volkite eradicator",
    profiles: [
      {
        range: '16"',
        dice: 3,
        to_hit: 4,
        ap: 2,
        traits: ["Beam", "Deflagrate", "Light AT", "Shieldbane"],
      },
    ],
  },
  {
    id: 4051,
    name: "Reaver apocalypse missile launcher",
    profiles: [
      {
        range: '8"-100"',
        dice: 5,
        to_hit: 4,
        ap: 1,
        traits: ["Heavy Barrage"],
      },
    ],
  },
  {
    id: 4052,
    name: "Reaver vulcan mega-bolter",
    profiles: [
      {
        range: '22"',
        dice: 9,
        to_hit: 5,
        ap: 1,
        traits: ["Light AT", "Rapid Fire", "Shieldbane"],
      },
    ],
  },
  {
    id: 4053,
    name: "Reaver turbo-laser destructor",
    profiles: [
      {
        range: '40"',
        dice: 2,
        to_hit: 4,
        ap: 3,
        traits: ["Accurate"],
      },
    ],
  },
  {
    id: 4054,
    name: "Reaver titan warp missile",
    profiles: [
      {
        range: '8"-75"',
        dice: null,
        to_hit: 2,
        ap: 3,
        traits: ["Arc (Front)", "Engine Killer (3)", "Limited (1)", "Warp"],
      },
    ],
  },
  {
    id: 4055,
    name: "Reaver graviton eradicator",
    profiles: [
      {
        range: '30"',
        dice: 2,
        to_hit: null,
        ap: 2,
        traits: ["Demolisher", "Graviton Pulse"],
      },
    ],
  },
  {
    id: 4056,
    name: "Reaver conversion beam dissolutor",
    profiles: [
      {
        range: '6"',
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: [],
      },
      {
        range: '6"-18"',
        dice: 2,
        to_hit: 3,
        ap: 3,
        traits: ["Demolisher"],
      },
      {
        range: '18"-35',
        dice: 2,
        to_hit: 3,
        ap: 4,
        traits: ["Demolisher"],
      },
    ],
  },
  {
    id: 4057,
    name: "Mori quake cannon",
    profiles: [
      {
        range: '80"',
        dice: 1,
        to_hit: 3,
        ap: 2,
        traits: ["Arc (Front)", 'Blast (5")', "Quake"],
      },
    ],
  },
  {
    id: 4058,
    name: "Belicosa volcano cannon",
    profiles: [
      {
        range: '70"',
        dice: 1,
        to_hit: 2,
        ap: 5,
        traits: ["Arc (Front)", "Engine Killer (4)"],
      },
    ],
  },
  {
    id: 4059,
    name: "Ardex-defensor mauler bolt cannon turrets",
    profiles: [
      {
        range: '8"',
        dice: 5,
        to_hit: 5,
        ap: 2,
        traits: ["Light AT", "Point Defence"],
      },
    ],
  },
  {
    id: 4060,
    name: "Anvillus pattern defence batteries",
    profiles: [
      {
        range: '20"',
        dice: 5,
        to_hit: 5,
        ap: 1,
        traits: ["Point Defence", "Skyfire"],
      },
    ],
  },
  {
    id: 4061,
    name: "Sunfury plasma annihilator",
    profiles: [
      {
        range: '25"',
        dice: 3,
        to_hit: 3,
        ap: 3,
        traits: ["Arc (Front)"],
      },
    ],
  },
  {
    id: 4062,
    name: "Macro-gatling blaster",
    profiles: [
      {
        range: '35"',
        dice: 5,
        to_hit: 3,
        ap: 2,
        traits: ["Arc (Front)", "Rapid Fire"],
      },
    ],
  },
  {
    id: 4063,
    name: "Arioch power claw",
    profiles: [
      {
        range: '18"',
        dice: 8,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Rapid Fire", "Shieldbane"],
      },
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 4,
        traits: ["Engine Killer (1)", "Rend", "Wrecker"],
      },
    ],
  },
  {
    id: 4064,
    name: "Apocalypse missile launcher",
    profiles: [
      {
        range: '8"-100"',
        dice: 10,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Heavy Barrage"],
      },
    ],
  },
  {
    id: 4065,
    name: "Paired gatling blasters",
    profiles: [
      {
        range: '35"',
        dice: 8,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)"],
      },
    ],
  },
  {
    id: 4066,
    name: "Paired turbo-laser destructors",
    profiles: [
      {
        range: '40"',
        dice: 4,
        to_hit: 4,
        ap: 3,
        traits: ["Accurate", "Arc (Front)"],
      },
    ],
  },
  {
    id: 4067,
    name: "Vulcan mega-bolter array",
    profiles: [
      {
        range: '22"',
        dice: 20,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Rapid Fire", "Shieldbane"],
      },
    ],
  },
  {
    id: 4068,
    name: "Paired laser blasters",
    profiles: [
      {
        range: '40"',
        dice: 6,
        to_hit: 4,
        ap: 3,
        traits: ["Arc (Front)"],
      },
    ],
  },
  {
    id: 4069,
    name: "Ardex-defensor lascannon turrets",
    profiles: [
      {
        range: '16"',
        dice: 2,
        to_hit: 5,
        ap: 1,
        traits: ["Anti-tank", "Arc (Rear)", "Point Defence"],
      },
    ],
  },
  {
    id: 4070,
    name: "Warlord graviton ruinator",
    profiles: [
      {
        range: '30"',
        dice: 3,
        to_hit: null,
        ap: 3,
        traits: ["Arc (Front)", "Demolisher", "Gaviton Pulse"],
      },
    ],
  },
  {
    id: 4071,
    name: "Conversion beam extripator",
    profiles: [
      {
        range: '6"',
        dice: 2,
        to_hit: 3,
        ap: 2,
        traits: ["Arc (Front)"],
      },
      {
        range: '6"-18"',
        dice: 3,
        to_hit: 3,
        ap: 3,
        traits: ["Arc (Front)", "Demolisher"],
      },
      {
        range: '18"-35"',
        dice: 3,
        to_hit: 3,
        ap: 4,
        traits: ["Arc (Front)", "Demolisher"],
      },
    ],
  },
  {
    id: 4072,
    name: "Volkite destructor",
    profiles: [
      {
        range: '16"',
        dice: 4,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)", "Beam", "Deflagrate", "Light AT", "Shieldbane"],
      },
    ],
  },
  {
    id: 4073,
    name: "Sinistramanus Tenebrae",
    profiles: [
      {
        range: '40"',
        dice: 3,
        to_hit: 4,
        ap: 4,
        traits: ["Arc (Front)", "Heavy Beam", "Psi"],
      },
    ],
  },
  {
    id: 4074,
    name: "Death pulse",
    profiles: [
      {
        range: '7"',
        dice: "D3+1",
        to_hit: 4,
        ap: 1,
        traits: ["Psi", "Saturaton Fire"],
      },
    ],
  },
  {
    id: 4075,
    name: "Antipathic tempest",
    profiles: [
      {
        range: '20"',
        dice: 1,
        to_hit: 4,
        ap: 1,
        traits: ["Blast (5)", "Ignores Cover", "Psi", "Quake"],
      },
    ],
  },
  {
    id: 4076,
    name: "Suzerain class plasma destructor",
    profiles: [
      {
        range: '26"',
        dice: 4,
        to_hit: 3,
        ap: 4,
        traits: ["Arc (Front)", "Demolisher"],
      },
      {
        range: '16"',
        dice: 2,
        to_hit: 2,
        ap: 4,
        traits: ["Arc (Front)", "Demolisher", "Engine Killer (2)"],
      },
    ],
  },
  {
    id: 4077,
    name: "Revalator missile launcher",
    profiles: [
      {
        range: '40"',
        dice: 2,
        to_hit: 4,
        ap: 2,
        traits: ["Arc (Front)", "Blast (5)"],
      },
    ],
  },
  {
    id: 4078,
    name: "Apocalypse missile array",
    profiles: [
      {
        range: '8"-100"',
        dice: 4,
        to_hit: 4,
        ap: 1,
        traits: ["Arc (Front)", "Heavy Barrage"],
      },
    ],
  },
  {
    id: 4079,
    name: "Melta cannon",
    profiles: [
      {
        range: '14"',
        dice: 2,
        to_hit: 4,
        ap: 3,
        traits: ["Anti-tank", "Arc (Front)", "Demolisher"],
      },
      {
        range: '8"',
        dice: 2,
        to_hit: 3,
        ap: 4,
        traits: ["Anti-tank", "Arc (Front)", "Demolisher", "Engine Killer (2)"],
      },
    ],
  },
  {
    id: 4080,
    name: "Ardex-defensor bombard turrets",
    profiles: [
      {
        range: '15"',
        dice: 4,
        to_hit: 5,
        ap: 2,
        traits: ["Barrage", "Light AT", "Ignores Cover"],
      },
    ],
  },
  {
    id: 4081,
    name: "Anvilus pattern defence batteries",
    profiles: [
      {
        range: '20"',
        dice: 5,
        to_hit: 5,
        ap: 1,
        traits: ["Point Defence", "Skyfire"],
      },
    ],
  },
  {
    id: 4082,
    name: "Desolator chainsword",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: "-",
        traits: ["Engine Killer (2)", "Reach", "Rend"],
      },
    ],
  },
  {
    id: 4083,
    name: "Kirus siege drill",
    profiles: [
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 7,
        traits: ["Rend", "Wrecker (8)"],
      },
    ],
  },
  {
    id: 4084,
    name: "Cruciator gatling array",
    profiles: [
      {
        range: '24"',
        dice: 14,
        to_hit: 5,
        ap: 1,
        traits: ["Arc (Front)", "Light AT", "Shieldbane", "Shred"],
      },
    ],
  },
  {
    id: 4085,
    name: "Kirus grav imploder",
    profiles: [
      {
        range: '6"',
        dice: 2,
        to_hit: 3,
        ap: 3,
        traits: ["Demolisher", "Ignores Cover", "Quake"],
      },
      {
        range: "-",
        dice: null,
        to_hit: null,
        ap: 5,
        traits: ["Rend", "Wrecker (5)"],
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
