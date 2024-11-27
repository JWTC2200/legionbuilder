import { DETACHMENT, DETACHMENT_TYPE, FACTION } from "@type/types"

// ********************************************************************
// ****************** QUESTORIS FAMILIA DETACHMENTS *******************
// ********************************************************************

// 8100-8199

export const questorisFamilia: DETACHMENT[] = [
	{
		id: 8100,
		name: "Questoris Knight Armiger Talon",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 180,
		base_size: 3,
		max_size: 9,
		break_strength: 2,
		main_unit: [4003],
		related_unit: [],
		dataslate_loadout: [
			{
				text: "A Questoris Knight Armiger is armed with a Thermal spear and Reaper chain-cleaver or Armiger autocannon",
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight Armigers",
				unit_ref: 4003,
				options: [
					{ number: 3, cost: 160, size: 3, break_strength: 2 },
					{ number: 6, cost: 320, size: 6, break_strength: 2 },
				],
			},
		],
		loadout_options: [
			{
				location: "Weapons",
				options: [
					{ name: "Thermal spear and Reaper chain-cleaver", cost: 0 },
					{ name: "Armiger autocannon", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Mechanicum Knight Armigers Talon may purchase up to two upgrades. It may purchase the same upgrade multiple times: Each upgrade increases the Detachment size by 3.",
				options: [
					{
						text: "3 Additional Knight Armigers",
						cost: 160,
					},
				],
			},
		],
	},
	{
		id: 8101,
		name: "Mechanicum Knight Moirax Talon",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 200,
		base_size: 3,
		max_size: 9,
		break_strength: 2,
		main_unit: [4004],
		related_unit: [],
		dataslate_loadout: [
			{
				text: "Each Knight Moirax is armed with Armiger lightning locks or a Volkite veuglaire and a Gyges siege claw",
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
		datasheet_info: [
			{
				text: "A Mechanicum Knight Moirax Talon may purchase up to two upgrades. It may purchase the same upgrade multiple times: Each upgrade increases the Detachment size by 3.",
				options: [
					{
						text: "3 Additional Knight Moirax",
						cost: 180,
					},
				],
			},
		],
	},
	{
		id: 8102,
		name: "Questoris Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 180,
		base_size: 1,
		max_size: 6,
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
				options: [
					{ number: 1, cost: 180, size: 1, break_strength: 3 },
					{ number: 2, cost: 340, size: 2, break_strength: 3 },
				],
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
					{ name: "Thunderstrike Gauntlet", cost: 2 },
				],
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
		],
	},
	{
		id: 8103,
		name: "Cerastus Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 215,
		base_size: 1,
		max_size: 6,
		break_strength: 3,
		main_unit: [4014],
		related_unit: [4015, 4003, 4004],
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
				text: "For +20 points, a Cerastus Knight may have one of the following loadouts instead:",
				text_option: ["Cerastus Knight Atrapos"],
			},
			{
				itallic_text: "A Knight Lancer exchanges the Ion Shield (4+) special rule for Ion Shield (3+)",
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4014,
				options: [
					{ number: 1, cost: 200, size: 1, break_strength: 3 },
					{ number: 2, cost: 390, size: 2, break_strength: 3 },
				],
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Knight Acheron", cost: 0 },
					{ name: "Knight Castigator", cost: 0 },
					{ name: "Knight Lancer", cost: 0 },
					{ name: "Knight Atropos", cost: 20 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Cerastus Knight Banner can purchase one of the following upgrades:",
				options: [
					{
						text: "1 additional Knight",
						cost: 200,
					},
					{ text: "2 additional Knights", cost: 390 },
				],
			},
		],
	},
	{
		id: 8104,
		name: "Acastus Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 250,
		base_size: 1,
		max_size: 5,
		break_strength: 3,
		main_unit: [4005],
		related_unit: [4003, 4004],
		dataslate_loadout: [
			{
				text_option: [
					"Two Twin magna lascannon",
					"Acastus lascannon or Acastus autocannon",
					"Ironstorm missile pod or Helios defence missiles",
				],
			},
			{
				text: "Any Acastus Knight may exchange all of its weapons for the following, for +20pts",
				text_option: ["Two conversion beam cannon", "Volkite culverin", "Karacnos mortar battery"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4005,
				options: [{ number: 1, cost: 250, size: 1, break_strength: 3 }],
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Two Twin magna lascannon", cost: 0 },
					{ name: "Two conversion beam cannon", cost: 20 },
				],
			},
			{
				location: "Chest",
				options: [
					{ name: "Acastus lascannon", cost: 0 },
					{ name: "Acastus autocannon", cost: 0 },
					{ name: "Volkite culverin", cost: 0 },
				],
			},
			{
				location: "Back",
				options: [
					{ name: "Ironstorm missile pod", cost: 0 },
					{ name: "Helios defence missiles", cost: 0 },
					{ name: "Karacnos mortar battery", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Acastus Knight Banner can increase its Detachment size by 1 for +250pts",
			},
		],
	},
	{
		id: 8105,
		name: "Bonded Questoris Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 195,
		base_size: 1,
		max_size: 3,
		break_strength: 3,
		main_unit: [4000],
		related_unit: [4001, 4002],
		dataslate_loadout: [
			{
				text: "Each Questoris Knight has one of the following weapon loadouts:",
				text_option: ["Knight Styrix", "Knight Magaera"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4000,
				options: [
					{ number: 1, cost: 195, size: 1, break_strength: 3 },
					{ number: 2, cost: 370, size: 2, break_strength: 3 },
				],
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
					{ text: "1 additional Knight", cost: 195 },
					{ text: "2 additional Knights", cost: 370 },
				],
			},
		],
	},
]
