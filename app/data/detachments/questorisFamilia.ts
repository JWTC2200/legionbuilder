import { DETACHMENT, DETACHMENT_TYPE, FACTION } from "@type/types"
import { optionsArray } from "@data/utils"

// ********************************************************************
// ****************** QUESTORIS FAMILIA DETACHMENTS *******************
// ********************************************************************

// 8100-8199

export const questorisFamilia: DETACHMENT[] = [
	{
		id: 8100,
		name: "Knight Armiger Talon",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 120,
		base_size: 3,
		max_size: 3,
		break_strength: 2,
		main_unit: [4003],
		related_unit: [],
		dataslate_loadout: [
			{
				text: "Thermal spear and Reaper chain-cleaver or Armiger autocannon",
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Weapons",
				options: [
					{ name: "Thermal spear and Reaper chain-cleaver", cost: 0 },
					{ name: "Armiger autocannon", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 8101,
		name: "Mechanicum Knight Moirax Talon",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 135,
		base_size: 3,
		max_size: 3,
		break_strength: 2,
		main_unit: [4004],
		related_unit: [],
		dataslate_loadout: [
			{
				text: "Armiger lightning locks or a Volkite veuglaire and a Gyges siege claw",
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight Moirax",
				unit_ref: 4004,
				options: [
					{ number: 3, cost: 180, size: 3, break_strength: 2 },
					{ number: 6, cost: 360, size: 6, break_strength: 2 },
				],
			},
		],
		loadout_options: [
			{
				location: "weapons",
				options: [
					{ name: "Armiger lightning locks", cost: 0 },
					{ name: "Volkite veuglaire and Siege claw", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 8102,
		name: "Questoris Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 130,
		base_size: 1,
		max_size: 3,
		break_strength: 3,
		main_unit: [4000],
		related_unit: [4001, 4002],
		dataslate_loadout: [
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
				unit_ref: 4000,
				options: optionsArray(2, 120, 1, 3),
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Knight Errant", cost: 0, td_ek: 10 },
					{ name: "Knight Warden", cost: 0 },
					{ name: "Knight Crusader", cost: 0, td_ek: 10 },
					{ name: "Knight Paladin", cost: 0 },
					{ name: "Knight Gallant", cost: 0 },
					{ name: "Knight Styrix", cost: 15 },
					{ name: "Knight Magaera", cost: 15 },
				],
			},
			{
				location: "Back",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Rocket Pods", cost: 5 },
				],
			},
			{
				location: "Arm",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Thunderstrike Gauntlet", cost: 10 },
				],
			},
		],
		datasheet_info: [
			{
				text: "Questoris Knights can exchange their Reaper chainsword for a thunderstrike gauntlet for +10 points per model.",
			},
			{
				text: "Any Questoris Knight may be equipped with rocket pods for +5 points.",
			},
			{
				text: "A Questoris Knight Banner can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 120 },
					{ text: "Increase the Detachment size by 2", cost: 240 },
				],
			},
		],
	},
	{
		id: 8103,
		name: "Cerastus Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 160,
		base_size: 1,
		max_size: 3,
		break_strength: 3,
		main_unit: [4014],
		related_unit: [],
		dataslate_loadout: [
			{
				text: "Each Cerastus Knight has one of the following weapon loadouts:",
				text_option: [
					"Knight Acheron: Acheron pettern flame cannon, Reaper chainfist and in-build twin-linked heavy bolters",
					"Knight Castigator: Castigator pattern bolt cannon and a Tempest Warblade",
					"Knight Lancer: Shock Lance and an Ion gauntlet shield",
				],
			},
			{
				itallic_text: "A Knight Lancer exchanges the Ion Shield (3+) special rule for Ion Shield (2+)",
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4014,
				options: optionsArray(2, 150, 1, 3),
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Knight Acheron", cost: 0 },
					{ name: "Knight Castigator", cost: 0 },
					{ name: "Knight Lancer", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Cerastus Knight Banner can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 150 },
					{ text: "Increase the Detachment size by 2", cost: 300 },
				],
			},
		],
	},
	{
		id: 8104,
		name: "Acastus Knight Porphyrion Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 230,
		base_size: 1,
		max_size: 2,
		break_strength: 4,
		main_unit: [4005],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Two Twin magna lascannon",
					"Acastus lascannon or Acastus autocannon",
					"Ironstorm missile pod or Helios defence missiles",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4005,
				options: [{ number: 1, cost: 220, size: 1, break_strength: 4 }],
			},
		],
		loadout_options: [
			{
				location: "Back",
				options: [
					{ name: "Ironstorm missile pod", cost: 0 },
					{ name: "Helios defence missiles", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Acastus Knight Porphyrion Banner can increase its Detachment size by 1 for +220pts",
			},
		],
	},
	{
		id: 8105,
		name: "Questoris Mechanicum Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 140,
		base_size: 1,
		max_size: 3,
		break_strength: 3,
		main_unit: [4001],
		related_unit: [],
		dataslate_loadout: [
			{
				text: "Each Questoris Knight has one of the following weapon loadouts:",
				text_option: [
					"Knight Styrix: Volkite chieorovile, Hekaton siege claw, graviton gun",
					"Knight Magaera: Lightning cannon, Hekaton siege claw, phased plasma-fusil",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4000,
				options: optionsArray(2, 130, 1, 3),
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Knight Styrix", cost: 0 },
					{ name: "Knight Magaera", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Questoris Knight Banner can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 130 },
					{ text: "Increase the Detachment size by 2", cost: 260 },
				],
			},
		],
	},
	{
		id: 8106,
		name: "Cerastus Knight Atropos Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 180,
		base_size: 1,
		max_size: 3,
		break_strength: 3,
		main_unit: [4015],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Graviton Singularity cannon", "Atropos lascutter"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4014,
				options: optionsArray(2, 170, 1, 3),
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Cerastus Knight Atrapos Banner can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 170 },
					{ text: "Increase the Detachment size by 2", cost: 340 },
				],
			},
		],
	},
	{
		id: 8107,
		name: "Acastus Knight Asterius Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 240,
		base_size: 1,
		max_size: 2,
		break_strength: 4,
		main_unit: [4016],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Twin conversion beam cannon", "Volkite culverin", "Karacnos mortar battery"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4005,
				options: [{ number: 1, cost: 230, size: 1, break_strength: 4 }],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Acastus Knight Asterius Banner can increase its Detachment size by 1 for +220pts",
			},
		],
	},
]
