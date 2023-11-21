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
          { number: 3, cost: 20, size: 2 },
          { number: 2, cost: 30, size: 3 },
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
        name: "Additional Tactial Legionaries",
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
