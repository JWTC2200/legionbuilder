import { DETACHMENT, FACTION, ALLEGIANCE } from "../types";

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999

export const detachmentData: DETACHMENT[] = [
  {
    id: 4000,
    name: "Questoris Knight Banner",
    faction: FACTION.strategic,
    allegiance: ALLEGIANCE.neutral,
    base_cost: 180,
    base_size: 1,
    max_size: 6,
    main_unit: [4000],
    related_unit: [4001, 4002],
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
];
