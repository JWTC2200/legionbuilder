import { DETACHMENT, FACTION, ALLEGIANCE, DETACHMENT_TYPE } from "../types";

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999

export const detachmentData: DETACHMENT[] = [
  // ********************************************************************
  // *********************** ASTARTES DETACHMENTS ***********************
  // ********************************************************************
  {
    id: 1000,
    name: "Legion Command Squad",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.hq,
    base_cost: 25,
    base_size: 1,
    max_size: 1,
    main_unit: [1000],
    related_unit: [],
    loadout: [],
    upgrade_options: [],
    datasheet_info: [],
  },
  {
    id: 1001,
    name: "Legion Rhino Detachment",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.transport,
    base_cost: 10,
    base_size: 1,
    max_size: 20,
    main_unit: [1001],
    related_unit: [],
    loadout: [{ text_option: ["Pintle Mounted twin-linked bolter"] }],
    upgrade_options: [
      {
        name: "Additional Rhino",
        options: [
          { number: 1, cost: 10, size: 1 },
          { number: 2, cost: 20, size: 2 },
          { number: 3, cost: 30, size: 3 },
          { number: 4, cost: 40, size: 4 },
          { number: 5, cost: 50, size: 5 },
          { number: 6, cost: 60, size: 6 },
          { number: 7, cost: 70, size: 7 },
          { number: 8, cost: 80, size: 8 },
          { number: 9, cost: 90, size: 9 },
        ],
      },
      {
        name: "Havoc launcher",
        options: [
          { number: 1, cost: 2, size: 0 },
          { number: 3, cost: 4, size: 0 },
          { number: 2, cost: 6, size: 0 },
          { number: 4, cost: 8, size: 0 },
          { number: 5, cost: 10, size: 0 },
          { number: 6, cost: 12, size: 0 },
          { number: 7, cost: 14, size: 0 },
          { number: 8, cost: 16, size: 0 },
          { number: 9, cost: 18, size: 0 },
          { number: 10, cost: 20, size: 0 },
        ],
      },
      {
        name: "Multi-melta",
        options: [
          { number: 1, cost: 5, size: 0 },
          { number: 3, cost: 10, size: 0 },
          { number: 2, cost: 15, size: 0 },
          { number: 4, cost: 20, size: 0 },
          { number: 5, cost: 25, size: 0 },
          { number: 6, cost: 30, size: 0 },
          { number: 7, cost: 35, size: 0 },
          { number: 8, cost: 30, size: 0 },
          { number: 9, cost: 45, size: 0 },
          { number: 10, cost: 50, size: 0 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Rhino may change its Pintle Mounted twin-linked bolter for one of the following",
        options: [
          { text: "Pintle mounted havoc launcher", cost: 2 },
          { text: "Pintle mounted multi-melta", cost: 5 },
        ],
      },
    ],
  },
  {
    id: 1002,
    name: "Legion Tactical Detachment",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.core,
    base_cost: 35,
    base_size: 4,
    max_size: 12,
    main_unit: [1002],
    related_unit: [1003, 1004],
    loadout: [{ text_option: ["Legion bolters"] }],
    upgrade_options: [
      {
        name: "Additional Tactical Legionaries",
        options: [
          { number: 2, cost: 12, size: 2 },
          { number: 4, cost: 24, size: 4 },
          { number: 6, cost: 36, size: 6 },
          { number: 8, cost: 48, size: 8 },
        ],
      },
      {
        name: "Additional Plasma Support",
        options: [
          { number: 2, cost: 15, size: 2 },
          { number: 4, cost: 30, size: 4 },
          { number: 6, cost: 45, size: 6 },
          { number: 8, cost: 60, size: 8 },
        ],
      },
      {
        name: "Additional Heavy Support",
        options: [
          { number: 2, cost: 15, size: 2 },
          { number: 4, cost: 30, size: 4 },
          { number: 6, cost: 45, size: 6 },
          { number: 8, cost: 60, size: 8 },
        ],
      },
      {
        name: "Additional Legion Terminators",
        options: [
          { number: 2, cost: 15, size: 2 },
          { number: 4, cost: 30, size: 4 },
          { number: 6, cost: 45, size: 6 },
          { number: 8, cost: 60, size: 8 },
        ],
      },
      {
        name: "Additional Assault Marines",
        options: [
          { number: 2, cost: 12, size: 2 },
          { number: 4, cost: 24, size: 4 },
          { number: 6, cost: 36, size: 6 },
          { number: 8, cost: 48, size: 8 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Legion Tactical Detachment can purchase up to four upgrades. It may purchase the same upgrade multiple times: Each upgrade increases the Detachment size by 2.",
        options: [
          { text: "Tactical Legionaries", cost: 12 },
          { text: "Plasma Tactical Suport Legionaries", cost: 15 },
          { text: "Missile Launcher Heavy Support Legionaries", cost: 15 },
          { text: "Legion Terminators", cost: 15 },
          { text: "Assault Marines", cost: 12 },
        ],
      },
    ],
  },
  {
    id: 1003,
    name: "Legion Plasma Gun Support Detachment",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.support,
    base_cost: 35,
    base_size: 4,
    max_size: 8,
    main_unit: [1005],
    related_unit: [],
    loadout: [{ text_option: ["Plasma gun"] }],
    upgrade_options: [
      {
        name: "Additional Legionaries",
        options: [
          { number: 2, cost: 15, size: 2 },
          { number: 4, cost: 30, size: 4 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Legion Plasma Gun Support Detachment can purchase the following upgrades.",
        options: [
          { text: "2 additional Legionaries", cost: 15 },
          { text: "4 additional Legionaries", cost: 30 },
        ],
      },
    ],
  },
  {
    id: 1004,
    name: "Legion Missile Launcher Support Detachment",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.support,
    base_cost: 35,
    base_size: 4,
    max_size: 8,
    main_unit: [1006],
    related_unit: [],
    loadout: [{ text_option: ["Missile launchers"] }],
    upgrade_options: [
      {
        name: "Additional Legionaries",
        options: [
          { number: 2, cost: 15, size: 2 },
          { number: 4, cost: 30, size: 4 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Legion Missile Launcher Support Detachment can purchase the following upgrades.",
        options: [
          { text: "2 additional Legionaries", cost: 15 },
          { text: "4 additional Legionaries", cost: 30 },
        ],
      },
    ],
  },
  {
    id: 1005,
    name: "Legion Assault Detachment",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.support,
    base_cost: 30,
    base_size: 4,
    max_size: 8,
    main_unit: [1004],
    related_unit: [],
    loadout: [{ text_option: ["Legion bolt pistols"] }],
    upgrade_options: [
      {
        name: "Additional Legionaries",
        options: [
          { number: 2, cost: 12, size: 2 },
          { number: 4, cost: 24, size: 4 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Legion Assault Detachment can purchase the following upgrades.",
        options: [
          { text: "2 additional Legionaries", cost: 12 },
          { text: "4 additional Legionaries", cost: 24 },
        ],
      },
    ],
  },
  {
    id: 1006,
    name: "Legion Terminator Detachment",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.support,
    base_cost: 50,
    base_size: 4,
    max_size: 8,
    main_unit: [1003],
    related_unit: [],
    loadout: [{ text_option: ["Legion combi-bolters"] }],
    upgrade_options: [
      {
        name: "Additional Legionaries",
        options: [
          { number: 2, cost: 15, size: 2 },
          { number: 4, cost: 30, size: 4 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Legion Terminator Detachment can purchase the following upgrades.",
        options: [
          { text: "2 additional Legionaries", cost: 15 },
          { text: "4 additional Legionaries", cost: 30 },
        ],
      },
    ],
  },
  {
    id: 1007,
    name: "Legion Rapier Battery Detachment",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.support,
    base_cost: 40,
    base_size: 2,
    max_size: 8,
    main_unit: [1007],
    related_unit: [],
    loadout: [{ text_option: ["Laser destroyer array or quad launcher"] }],
    upgrade_options: [
      {
        name: "Additional Rapiers",
        options: [
          { number: 2, cost: 30, size: 2 },
          { number: 4, cost: 60, size: 4 },
          { number: 6, cost: 90, size: 6 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Legion Rapier Battery Detachment can purchase the following upgrades.",
        options: [
          { text: "2 additional Rapiers", cost: 30 },
          { text: "4 additional Rapiers", cost: 60 },
          { text: "6 additional Rapiers", cost: 90 },
        ],
      },
    ],
  },
  {
    id: 1008,
    name: "Leviathan Siege Dreadnought Detachment",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.support,
    base_cost: 75,
    base_size: 4,
    max_size: 8,
    main_unit: [1008],
    related_unit: [],
    loadout: [
      {
        text_option: [
          "Leviathan storm cannon or cyclone melta lance",
          "Twin-linked volkite caliver",
          "Leviathan siege claw",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Leviathan",
        options: [
          { number: 2, cost: 35, size: 2 },
          { number: 4, cost: 70, size: 4 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Leviathan Siege Dreadnought Detachment can purchase the following upgrades.",
        options: [
          { text: "2 Additional Leviathan", cost: 35 },
          { text: "4 Additional Leviathan", cost: 70 },
        ],
      },
    ],
  },
  {
    id: 1009,
    name: "Legion Dreadnought Talon",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.support,
    base_cost: 70,
    base_size: 4,
    max_size: 10,
    main_unit: [1009],
    related_unit: [1008],
    loadout: [
      {
        text_option: [
          "Kheres assault cannon or Twin-linked lascannons",
          "In-built twin-linked bolters",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Contemptor",
        options: [
          { number: 2, cost: 30, size: 2 },
          { number: 4, cost: 60, size: 4 },
          { number: 6, cost: 90, size: 6 },
        ],
      },
      {
        name: "Additional Leviathan",
        options: [
          { number: 2, cost: 35, size: 2 },
          { number: 4, cost: 70, size: 4 },
          { number: 6, cost: 105, size: 6 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Legion Dreadnought Talon can purchase up to three upgrades. It may purchase the same upgrade multiple times: Each upgrade increases the Detachment size by 2.",
        options: [
          { text: "2 Additional Contemptors", cost: 30 },
          { text: "2 Additional Leviathans", cost: 35 },
        ],
      },
    ],
  },
  {
    id: 1010,
    name: "Legion Tarantula Battery",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.bastion,
    base_cost: 36,
    base_size: 4,
    max_size: 8,
    main_unit: [1010],
    related_unit: [],
    loadout: [
      {
        text_option: [
          "Tarantula lascannon battery or Hyperios air-defence missile launcher",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Tarantulas",
        options: [
          { number: 2, cost: 15, size: 2 },
          { number: 4, cost: 30, size: 4 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Legion Tarantula Battery can purchase the following upgrades.",
        options: [
          { text: "2 additional Tarantulas", cost: 15 },
          { text: "4 additional Tarantulas", cost: 30 },
        ],
      },
    ],
  },
  {
    id: 1011,
    name: "Legion Deredeo Dreadnought Detachment",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.bastion,
    base_cost: 85,
    base_size: 4,
    max_size: 8,
    main_unit: [1011],
    related_unit: [],
    loadout: [
      {
        text_option: [
          "Hellfire plasma cannonade or Anvilus autocannon battery",
          "Aiolos missile launcher",
          "Sarcophagus Mounted weapons",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Deredeo",
        options: [
          { number: 2, cost: 40, size: 2 },
          { number: 4, cost: 80, size: 4 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Legion Deredeo Dreadnought Detachmentcan purchase the following upgrades.",
        options: [
          { text: "2 Additional Deredeo", cost: 40 },
          { text: "4 Additional Deredeo", cost: 80 },
        ],
      },
    ],
  },
  {
    id: 1012,
    name: "Legion Predator Squadron",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.battle,
    base_cost: 115,
    base_size: 3,
    max_size: 9,
    main_unit: [1012],
    related_unit: [],
    loadout: [
      {
        text_option: [
          "Predator cannon or Predator lascannon",
          "Sponson Mounted heavy bolters or Sponson Mounted lascannon",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Predators",
        options: [
          { number: 1, cost: 35, size: 2 },
          { number: 3, cost: 95, size: 4 },
          { number: 6, cost: 185, size: 6 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "Legion Predator Squadron can purchase the following upgrades.",
        options: [
          { text: "1 additional Predator", cost: 35 },
          { text: "3 additional Predator", cost: 95 },
          { text: "6 additional Predator", cost: 185 },
        ],
      },
    ],
  },
  {
    id: 1013,
    name: "Legion Sicaran Squadron",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.battle,
    base_cost: 105,
    base_size: 2,
    max_size: 6,
    main_unit: [1013],
    related_unit: [],
    loadout: [
      {
        text_option: [
          "Hull Mounted heavy bolter",
          "Twin-linked accelerator autocannon or Omega plasma array",
          "Sponson Mounted heavy bolters or Sponson Mounted lascannon",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Sicaran",
        options: [
          { number: 1, cost: 40, size: 1 },
          { number: 2, cost: 70, size: 2 },
          { number: 4, cost: 140, size: 4 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "Legion Sicaran Squadron can purchase the following upgrades.",
        options: [
          { text: "1 additional Sicaran", cost: 40 },
          { text: "2 additional Sicaran", cost: 70 },
          { text: "4 additional Sicaran", cost: 140 },
        ],
      },
    ],
  },
  {
    id: 1014,
    name: "Legion Kratos Squadron",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.heavy,
    base_cost: 150,
    base_size: 2,
    max_size: 6,
    main_unit: [1014],
    related_unit: [],
    loadout: [
      {
        text_option: [
          "Kratos battlecannon with Co-axial autocannon or Melta blastgun with Co-axial autocannon",
          "Two Hull Mounted heavy bolter or two Kratos lascannon or two Kratos autocannon",
          "Sponson Mounted heavy bolters or Sponson Mounted lascannon",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Kratos",
        options: [
          { number: 1, cost: 60, size: 1 },
          { number: 2, cost: 110, size: 2 },
          { number: 4, cost: 200, size: 4 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "Legion Kratos Squadron can purchase the following upgrades.",
        options: [
          { text: "1 additional Kratos", cost: 60 },
          { text: "2 additional Kratos", cost: 110 },
          { text: "4 additional Kratos", cost: 200 },
        ],
      },
    ],
  },
  {
    id: 1015,
    name: "Legion Xiphon Interceptor Squadron",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.air,
    base_cost: 95,
    base_size: 1,
    max_size: 4,
    main_unit: [1015],
    related_unit: [],
    loadout: [
      {
        text_option: [
          "Xiphon lascannon array",
          "Xiphon rotary missile launcher",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Xiphon",
        options: [
          { number: 1, cost: 60, size: 1 },
          { number: 2, cost: 110, size: 2 },
          { number: 3, cost: 200, size: 3 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "Legion Xiphon Interceptor Squadron can purchase the following upgrades.",
        options: [
          { text: "1 additional Xiphon", cost: 85 },
          { text: "2 additional Xiphon", cost: 160 },
          { text: "3 additional Xiphon", cost: 215 },
        ],
      },
    ],
  },
  {
    id: 1016,
    name: "Legion Storm Eagle Squadron",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.air,
    base_cost: 100,
    base_size: 1,
    max_size: 4,
    main_unit: [1016],
    related_unit: [],
    loadout: [
      {
        text_option: [
          "Storm Eagle heavy bolter",
          "Vengeance launcher",
          "Wing Mounted lascannon",
          "Tempest rockets",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Storm Eagle",
        options: [
          { number: 1, cost: 100, size: 1 },
          { number: 2, cost: 190, size: 2 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "Legion Storm Eagle Squadron can purchase the following upgrades.",
        options: [
          { text: "1 additional Storm Eagle", cost: 100 },
          { text: "2 additional Storm Eagle", cost: 190 },
        ],
      },
    ],
  },
  {
    id: 1017,
    name: "Legion Fire Raptor Squadron",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.air,
    base_cost: 100,
    base_size: 1,
    max_size: 4,
    main_unit: [1017],
    related_unit: [],
    loadout: [
      {
        text_option: [
          "Avenger bolt cannon",
          "Tempest rockets",
          "Quad heavy bolter batteries, Lascannon batteries or Gravis autocannon batteries",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Fire Raptor",
        options: [
          { number: 1, cost: 100, size: 1 },
          { number: 2, cost: 190, size: 2 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "Legion Storm Eagle Squadron can purchase the following upgrades.",
        options: [
          { text: "1 additional Fire Raptor", cost: 100 },
          { text: "2 additional Fire Raptor", cost: 190 },
        ],
      },
    ],
  },
  {
    id: 1018,
    name: "Legion Thunderhawk Gunship",
    faction: FACTION.astartes,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.air,
    base_cost: 150,
    base_size: 1,
    max_size: 4,
    main_unit: [1018],
    related_unit: [],
    loadout: [
      {
        text_option: [
          "Turbo-laser destructor",
          "Thunderhawk heavy bolters",
          "Thunderhawk lascannon",
          "Hellstrike missiles",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Thunderhawk Gunship",
        options: [
          { number: 1, cost: 150, size: 1 },
          { number: 2, cost: 280, size: 2 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "Legion Storm Eagle Squadron can purchase the following upgrades.",
        options: [
          { text: "1 additional Thunderhawk Gunship", cost: 150 },
          { text: "2 additional Thunderhawk Gunship", cost: 280 },
        ],
      },
    ],
  },
  // ********************************************************************
  // *********************KNIGHT & TITAN DETACHMENTS ********************
  // ********************************************************************
  {
    id: 4000,
    name: "Questoris Knight Banner",
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.knight,
    base_cost: 180,
    base_size: 1,
    max_size: 6,
    main_unit: [4000],
    related_unit: [4001, 4002, 4003, 4004],
    loadout: [
      {
        text: "Each Questoris Knight has one of the following weapon loadouts:",
        text_option: [
          "Knight Errant: Thermal Cannon, heavy stubber and a Reaper chainsword*",
          "Knight Paladin: Rapid-fire battlecannon, heavy stubber and a Reaper chainsword*",
          "Knight Warden: Questoris-avenger gatling cannon, meltagun and a Reaper chainsword*",
          "Knight Gallant: Thunderstrike gauntlet, meltagun and a Reaper chainsword*",
          "Knight Crusader: Heavy stubber and either a Questoris-avenger gatling cannon and thermal cannon, or a rapid-fire battlecannon and thermal cannon*",
        ],
      },
      {
        text: "For +15pts, a Questoris Knight may have one of the following weapon loadouts instead:",
        text_option: ["Knight Styrix", "Knight magaera"],
      },
      {
        itallic_text:
          "* A Questoris Knight with this loadout may also be equipped with rocket pods for +5 points",
      },
    ],
    upgrade_options: [
      {
        name: "Additional Knight",
        options: [
          { number: 1, cost: 180, size: 1 },
          { number: 2, cost: 340, size: 2 },
        ],
      },
      {
        name: "Knight Styrix/Magaera upgrade",
        options: [
          { number: 1, cost: 15, size: 0 },
          { number: 2, cost: 30, size: 0 },
          { number: 3, cost: 45, size: 0 },
        ],
      },
      {
        name: "Rocket pods",
        options: [
          { number: 1, cost: 5, size: 0 },
          { number: 2, cost: 10, size: 0 },
          { number: 3, cost: 15, size: 0 },
        ],
      },
      {
        name: "Thunderstrike gauntlets",
        options: [
          { number: 1, cost: 2, size: 0 },
          { number: 2, cost: 4, size: 0 },
          { number: 3, cost: 6, size: 0 },
        ],
      },
      {
        name: "Armiger Talon",
        options: [{ number: 1, cost: 180, size: 3 }],
      },
      {
        name: "Moriax Talon",
        options: [{ number: 1, cost: 200, size: 3 }],
      },
    ],
    datasheet_info: [
      {
        text: "Questoris Knights can exchange their Reaper chainsword for a thunderstrike gauntlet for +2 points per model.",
      },
      {
        text: "A Questoris Knight Banner can purchase one of the following upgrades:",
        options: [
          {
            text: "1 additional Knight",
            cost: 180,
          },
          { text: "2 additional Knights", cost: 340 },
        ],
      },
      {
        text: "In addition, a Questoris Knight Banner may purchase one of the following upgrades",
        options: [
          {
            text: "Questoris Knight Armiger Talon",
            cost: 180,
          },
          { text: "Mechanicum Knight Moriax Talon", cost: 200 },
        ],
        info: "This upgrade increases the Detachment size by 3",
      },
    ],
  },
  {
    id: 4001,
    name: "Acastus Knight Banner",
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.knight,
    base_cost: 250,
    base_size: 1,
    max_size: 5,
    main_unit: [4005],
    related_unit: [4003, 4004],
    loadout: [
      {
        text_option: [
          "Two Twin magana lascannon",
          "Acastus lascannon or Acastus autocannon",
          "Ironstorm missile pod or Helios defence missiles",
        ],
      },
      {
        text: "Any Acastus Knight may exchange all of its weapons for the following, for +20pts",
        text_option: [
          "Two conversion beam cannon",
          "Volkite culverin",
          "Karacnos mortar battery",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Knight",
        options: [{ number: 1, cost: 250, size: 1 }],
      },
      {
        name: "Knight Porphyrion upgrade",
        options: [
          { number: 1, cost: 20, size: 0 },
          { number: 2, cost: 40, size: 0 },
        ],
      },
      {
        name: "Armiger Talon",
        options: [{ number: 1, cost: 180, size: 3 }],
      },
      {
        name: "Moriax Talon",
        options: [{ number: 1, cost: 200, size: 3 }],
      },
    ],
    datasheet_info: [
      {
        text: "An Acastus Knight Banner can increase its Detachment size by 1 for +250pts",
      },
      {
        text: "In addition, a Acastus Knight Banner may purchase one of the following upgrades",
        options: [
          {
            text: "Questoris Knight Armiger Talon",
            cost: 180,
          },
          { text: "Mechanicum Knight Moriax Talon", cost: 200 },
        ],
        info: "This upgrade increases the Detachment size by 3",
      },
    ],
  },
  {
    id: 4002,
    name: "Warhound Hunting Pack",
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    detachment_type: DETACHMENT_TYPE.titan,
    base_cost: 330,
    base_size: 1,
    max_size: 3,
    main_unit: [4006],
    related_unit: [],
    loadout: [
      {
        text: "Warhound Titans have two weapons chosen from the list below - it may choose two of the same weapon",
        text_option: [
          "Inferno gun",
          "Vulcan mega-bolter",
          "Turbo-laser destructor",
          "Plasma blastgun",
          "Graviton eradicator",
          "Conversion beam dissolutor",
          "Ursus claw",
          "Natrix shock lance",
          "Incisor pattern melta lance",
          "Volkite eradicator",
          "Warhound shudder missiles",
          "Warhound swamer missles",
        ],
      },
    ],
    upgrade_options: [
      {
        name: "Additional Warhound",
        options: [
          { number: 1, cost: 330, size: 1 },
          { number: 2, cost: 640, size: 2 },
        ],
      },
    ],
    datasheet_info: [
      {
        text: "A Warhound Hunting pack can purchase one of the following upgrades:",
        options: [
          {
            text: "Increase the Detachment size by 1",
            cost: 330,
          },
          {
            text: "Increase the Detachment size by 2",
            cost: 640,
          },
        ],
      },
    ],
  },
];
