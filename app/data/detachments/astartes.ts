// astartes 1000-1999

// ********************************************************************
// *********************** ASTARTES DETACHMENTS ***********************
// ********************************************************************

import { DETACHMENT, DETACHMENT_TYPE, FACTION } from "@type/types"

export const astartes: DETACHMENT[] = [
	{
		id: 1000,
		name: "Legion Command Squad",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.hq],
		base_cost: 25,
		base_size: 1,
		max_size: 1,
		main_unit: [1000],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Legion combi-bolters"] }],
		upgrade_options: [],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 1001,
		name: "Legion Rhino Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 10,
		base_size: 1,
		max_size: 20,
		main_unit: [1001],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Pintle Mounted twin-linked bolter"] }],
		upgrade_options: [
			{
				name: "Additional Rhino",
				unit_ref: 1001,
				options: [
					{ number: 1, cost: 10, size: 1 },
					{ number: 2, cost: 20, size: 2 },
					{ number: 3, cost: 30, size: 3 },
					{ number: 4, cost: 40, size: 4 },
					{ number: 5, cost: 50, size: 5 },
					{ number: 6, cost: 60, size: 6 },
					{ number: 7, cost: 70, size: 7 },
				],
			},
		],
		loadout_options: [
			{
				location: "Hull",
				options: [
					{ name: "Havoc launcher", cost: 2 },
					{ name: "Multi-melta", cost: 4 },
				],
			},
		],
		datasheet_info: [
			{ text: "Additional Rhino at 10pts per model." },
			{
				text: "A Rhino may change its Pintle Mounted twin-linked bolter for one of the following",
				options: [
					{ text: "Pintle mounted havoc launcher", cost: 2 },
					{ text: "Pintle mounted multi-melta", cost: 4 },
				],
			},
		],
	},
	{
		id: 1002,
		name: "Legion Tactical Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.core],
		base_cost: 35,
		base_size: 4,
		max_size: 12,
		main_unit: [1002],
		related_unit: [1003, 1004],
		dataslate_loadout: [{ text_option: ["Legion bolters"] }],
		upgrade_options: [
			{
				name: "Additional Tactical Legionaries",
				unit_ref: 1002,
				options: [
					{ number: 2, cost: 12, size: 2 },
					{ number: 4, cost: 24, size: 4 },
					{ number: 6, cost: 36, size: 6 },
					{ number: 8, cost: 48, size: 8 },
				],
			},
			{
				name: "Additional Plasma Support",
				unit_ref: 1005,
				options: [
					{ number: 2, cost: 15, size: 2 },
					{ number: 4, cost: 30, size: 4 },
					{ number: 6, cost: 45, size: 6 },
					{ number: 8, cost: 60, size: 8 },
				],
			},
			{
				name: "Additional Missile Support",
				unit_ref: 1006,
				options: [
					{ number: 2, cost: 15, size: 2 },
					{ number: 4, cost: 30, size: 4 },
					{ number: 6, cost: 45, size: 6 },
					{ number: 8, cost: 60, size: 8 },
				],
			},
			{
				name: "Additional Legion Terminators",
				unit_ref: 1003,
				options: [
					{ number: 2, cost: 15, size: 2 },
					{ number: 4, cost: 30, size: 4 },
					{ number: 6, cost: 45, size: 6 },
					{ number: 8, cost: 60, size: 8 },
				],
			},
			{
				name: "Additional Assault Marines",
				unit_ref: 1004,
				options: [
					{ number: 2, cost: 12, size: 2 },
					{ number: 4, cost: 24, size: 4 },
					{ number: 6, cost: 36, size: 6 },
					{ number: 8, cost: 48, size: 8 },
				],
			},
		],
		loadout_options: [],
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 35,
		base_size: 4,
		max_size: 8,
		main_unit: [1005],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Plasma gun"] }],
		upgrade_options: [
			{
				name: "Additional Legionaries",
				unit_ref: 1005,
				options: [
					{ number: 2, cost: 15, size: 2 },
					{ number: 4, cost: 30, size: 4 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Plasma Gun Support Detachment can purchase the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 40,
		base_size: 4,
		max_size: 8,
		main_unit: [1006],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Missile launchers"] }],
		upgrade_options: [
			{
				name: "Additional Legionaries",
				unit_ref: 1006,
				options: [
					{ number: 2, cost: 15, size: 2 },
					{ number: 4, cost: 30, size: 4 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Missile Launcher Support Detachment can purchase the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 30,
		base_size: 4,
		max_size: 8,
		main_unit: [1004],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Legion bolt pistols"] }],
		upgrade_options: [
			{
				name: "Additional Assault Marines",
				unit_ref: 1004,
				options: [
					{ number: 2, cost: 12, size: 2 },
					{ number: 4, cost: 24, size: 4 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Assault Detachment can purchase the following upgrades:",
				options: [
					{ text: "2 additional Assault Marines", cost: 12 },
					{ text: "4 additional Assault Marines", cost: 24 },
				],
			},
		],
	},
	{
		id: 1006,
		name: "Legion Terminator Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 50,
		base_size: 4,
		max_size: 8,
		main_unit: [1003],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Legion combi-bolters"] }],
		upgrade_options: [
			{
				name: "Additional Terminators",
				unit_ref: 1003,
				options: [
					{ number: 2, cost: 15, size: 2 },
					{ number: 4, cost: 30, size: 4 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Terminator Detachment can purchase the following upgrades:",
				options: [
					{ text: "2 additional Terminators", cost: 15 },
					{ text: "4 additional Terminators", cost: 30 },
				],
			},
		],
	},
	{
		id: 1007,
		name: "Legion Rapier Battery Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 40,
		base_size: 2,
		max_size: 8,
		main_unit: [1007],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Laser destroyer array or quad launcher"] }],
		upgrade_options: [
			{
				name: "Additional Rapiers",
				unit_ref: 1007,
				options: [
					{ number: 2, cost: 30, size: 2 },
					{ number: 4, cost: 60, size: 4 },
					{ number: 6, cost: 90, size: 6 },
				],
			},
		],
		loadout_options: [
			{
				location: "Main",
				options: [
					{ name: "Laser destroyer array", cost: 0 },
					{ name: "Quad-launcher", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Legion Rapier Battery Detachment can purchase the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 75,
		base_size: 4,
		max_size: 8,
		main_unit: [1008],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Leviathan storm cannon or Cyclone melta lance",
					"Twin-linked volkite caliver",
					"Leviathan siege claw",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Leviathan",
				unit_ref: 1008,
				options: [
					{ number: 2, cost: 35, size: 2 },
					{ number: 4, cost: 70, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Arm",
				options: [
					{ name: "Leviathan storm cannon", cost: 0 },
					{ name: "Cyclone melta lance", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Leviathan Siege Dreadnought Detachment can purchase the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 70,
		base_size: 4,
		max_size: 10,
		main_unit: [1009],
		related_unit: [1008],
		dataslate_loadout: [
			{
				text_option: ["Kheres assault cannon or Twin-linked lascannons", "In-built twin-linked bolters"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Contemptor",
				unit_ref: 1009,
				options: [
					{ number: 2, cost: 30, size: 2 },
					{ number: 4, cost: 60, size: 4 },
					{ number: 6, cost: 90, size: 6 },
				],
			},
			{
				name: "Additional Leviathan",
				unit_ref: 1008,
				options: [
					{ number: 2, cost: 35, size: 2 },
					{ number: 4, cost: 70, size: 4 },
					{ number: 6, cost: 105, size: 6 },
				],
			},
		],
		loadout_options: [
			{
				location: "Arm",
				options: [
					{ name: "Kheres assault cannon", cost: 0 },
					{ name: "Twin-linked lascannons", cost: 0 },
					{ name: "Leviathan storm cannon", cost: 0 },
					{ name: "Cyclone melta lance", cost: 0 },
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.bastion],
		base_cost: 36,
		base_size: 4,
		max_size: 8,
		break_strength: 0,
		main_unit: [1010],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Tarantula lascannon battery or Hyperios air-defence missile launcher"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Tarantulas",
				unit_ref: 1010,
				options: [
					{ number: 2, cost: 15, size: 2, break_strength: 0 },
					{ number: 4, cost: 30, size: 4, break_strength: 0 },
				],
			},
		],
		loadout_options: [
			{
				location: "Main",
				options: [
					{ name: "Tarantula lascannon battery", cost: 0 },
					{ name: "Hyperios air-defence missile launcher", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Legion Tarantula Battery can purchase the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.bastion],
		base_cost: 85,
		base_size: 4,
		max_size: 8,
		main_unit: [1011],
		related_unit: [],
		dataslate_loadout: [
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
				unit_ref: 1011,
				options: [
					{ number: 2, cost: 40, size: 2 },
					{ number: 4, cost: 80, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Main",
				options: [
					{ name: "Hellfire plasma cannonade", cost: 0 },
					{ name: "Anvilus autocannon battery", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Legion Deredeo Dreadnought Detachment can purchase the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 115,
		base_size: 3,
		max_size: 9,
		main_unit: [1012],
		related_unit: [],
		dataslate_loadout: [
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
				unit_ref: 1012,
				options: [
					{ number: 1, cost: 35, size: 1 },
					{ number: 2, cost: 70, size: 2 },
					{ number: 3, cost: 95, size: 3 },
					{ number: 4, cost: 130, size: 4 },
					{ number: 5, cost: 165, size: 5 },
					{ number: 6, cost: 185, size: 6 },
				],
			},
		],
		loadout_options: [
			{
				location: "Turret",
				options: [
					{ name: "Predator cannon", cost: 0 },
					{ name: "Predator lascannon", cost: 0 },
				],
			},
			{
				location: "Sponsons",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Legion Predator Squadron can purchase the following upgrades: The same upgrade may be taken more than once",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 105,
		base_size: 2,
		max_size: 6,
		main_unit: [1013],
		related_unit: [],
		dataslate_loadout: [
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
				unit_ref: 1013,
				options: [
					{ number: 1, cost: 40, size: 1 },
					{ number: 2, cost: 70, size: 2 },
					{ number: 3, cost: 110, size: 3 },
					{ number: 4, cost: 140, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Turret",
				options: [
					{ name: "Twin-linked accelerator autocannon", cost: 0 },
					{ name: "Omega plasma array", cost: 0 },
				],
			},
			{
				location: "Sponsons",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Legion Sicaran Squadron can purchase the following upgrades: The same upgrade may be taken more than once",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.heavy],
		base_cost: 150,
		base_size: 2,
		max_size: 6,
		main_unit: [1014],
		related_unit: [],
		dataslate_loadout: [
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
				unit_ref: 1014,
				options: [
					{ number: 1, cost: 60, size: 1 },
					{ number: 2, cost: 110, size: 2 },
					{ number: 3, cost: 170, size: 3 },
					{ number: 4, cost: 200, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Turret",
				options: [
					{ name: "Kratos battlecannon", cost: 0 },
					{ name: "Melta blastgun", cost: 0 },
				],
			},
			{
				location: "Sponson",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
				],
			},
			{
				location: "Hull",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
					{ name: "Autocannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Legion Kratos Squadron can purchase the following upgrades: The same upgrade may be taken more than once",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.air],
		base_cost: 95,
		base_size: 1,
		max_size: 4,
		main_unit: [1015],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Xiphon lascannon array", "Xiphon rotary missile launcher"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Xiphon",
				unit_ref: 1015,
				options: [
					{ number: 1, cost: 85, size: 1 },
					{ number: 2, cost: 160, size: 2 },
					{ number: 3, cost: 215, size: 3 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Xiphon Interceptor Squadron can purchase the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.air],
		base_cost: 100,
		base_size: 1,
		max_size: 4,
		main_unit: [1016],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Storm Eagle heavy bolter", "Vengeance launcher", "Wing Mounted lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Storm Eagle",
				unit_ref: 1016,
				options: [
					{ number: 1, cost: 100, size: 1 },
					{ number: 2, cost: 190, size: 2 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Storm Eagle Squadron can purchase the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.air],
		base_cost: 100,
		base_size: 1,
		max_size: 4,
		main_unit: [1017],
		related_unit: [],
		dataslate_loadout: [
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
				unit_ref: 1017,
				options: [
					{ number: 1, cost: 100, size: 1 },
					{ number: 2, cost: 190, size: 2 },
				],
			},
		],
		loadout_options: [
			{
				location: "Turrets",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
					{ name: "Autocannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Legion Fire Raptor Squadron can purchase the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.air],
		base_cost: 150,
		base_size: 1,
		max_size: 4,
		main_unit: [1018],
		related_unit: [],
		dataslate_loadout: [
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
				unit_ref: 1018,
				options: [
					{ number: 1, cost: 150, size: 1 },
					{ number: 2, cost: 280, size: 2 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Thunderhawk Squadron can purchase the following upgrades:",
				options: [
					{ text: "1 additional Thunderhawk Gunship", cost: 150 },
					{ text: "2 additional Thunderhawk Gunship", cost: 280 },
				],
			},
		],
	},
	{
		id: 1019,
		name: "Legion Outrider Squadron",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.vanguard],
		base_cost: 30,
		base_size: 2,
		max_size: 6,
		main_unit: [1019],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Twin-linked bolters", "Twin plasma guns"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Outriders",
				unit_ref: 1019,
				options: [
					{ number: 2, cost: 30, size: 2 },
					{ number: 4, cost: 60, size: 4 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Outrider Squadron can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 2", cost: 30 },
					{ text: "Increase the Detachment size by 4", cost: 60 },
				],
			},
		],
	},
	{
		id: 1020,
		name: "Legion Scimitar Jetbike Squadron",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.vanguard],
		base_cost: 35,
		base_size: 3,
		max_size: 9,
		main_unit: [1020],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Scimitar heavy bolter"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Jetbike",
				unit_ref: 1020,
				options: [
					{ number: 3, cost: 35, size: 3 },
					{ number: 6, cost: 70, size: 6 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Scimitar Jetbike Squadron can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 3", cost: 35 },
					{ text: "Increase the Detachment size by 6", cost: 70 },
				],
			},
		],
	},
	{
		id: 1021,
		name: "Legion Land Speeder Squadron",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.vanguard],
		base_cost: 30,
		base_size: 2,
		max_size: 6,
		main_unit: [1021],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Plasma cannon", "Heavy bolter"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Land Speeder",
				unit_ref: 1021,
				options: [
					{ number: 2, cost: 30, size: 2 },
					{ number: 4, cost: 60, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Weapon pair",
				options: [
					{ name: "Plasma/bolter", cost: 0 },
					{ name: "Melta/flamer", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "One in every two Landspeeders can exchange its plasma cannon and heavy bolter for a Nose Mounted heavy flamer and a Multi-melta for no additional cost",
			},
			{
				text: "A Legion Land Speeder Squadron can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 2", cost: 30 },
					{ text: "Increase the Detachment size by 4", cost: 60 },
				],
			},
		],
	},
	{
		id: 1022,
		name: "Legion Javelin Squadron",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.vanguard],
		base_cost: 33,
		base_size: 2,
		max_size: 6,
		main_unit: [1022],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Nose Mounted heavy flamer", "Sponson Mounted lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Javelin",
				unit_ref: 1022,
				options: [
					{ number: 2, cost: 33, size: 2 },
					{ number: 4, cost: 66, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Sponsons",
				options: [
					{ name: "Lascannons", cost: 0 },
					{ name: "Missile launcher", cost: 2 },
				],
			},
		],
		datasheet_info: [
			{
				text: "Any Javelin may exchange its Sponson Mounted lascannon for a Cyclone missile launcher for +2pts per model",
			},
			{
				text: "A Legion Javelin Squadron can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 2", cost: 33 },
					{ text: "Increase the Detachment size by 4", cost: 66 },
				],
			},
		],
	},
	{
		id: 1023,
		name: "Legion Spartan Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 80,
		base_size: 1,
		max_size: 8,
		main_unit: [1023],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Sponson Mounted quad lascannon or Sponson Mounted laser destroyers",
					"Hull Mounted heavy bolters",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Spartan",
				unit_ref: 1023,
				options: [
					{ number: 1, cost: 80, size: 1 },
					{ number: 2, cost: 160, size: 2 },
					{ number: 3, cost: 240, size: 3 },
					{ number: 4, cost: 320, size: 4 },
					{ number: 5, cost: 400, size: 5 },
					{ number: 6, cost: 480, size: 6 },
					{ number: 7, cost: 560, size: 7 },
				],
			},
		],
		loadout_options: [
			{
				location: "Sponsons",
				options: [
					{ name: "Quad lascannons", cost: 0 },
					{ name: "Laser destroyers", cost: 0 },
				],
			},
			{
				location: "Hull",
				options: [
					{ name: "Heavy bolter", cost: 0 },
					{ name: "Lascannon", cost: 2 },
				],
			},
			{
				location: "Pintle",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Multi-melta", cost: 5 },
				],
			},
		],
		datasheet_info: [
			{
				text: "Any Spartan may exchange its Hull Mounted heavy bolter for a Hull Mounted lascannon  for +2pts per model",
			},
			{
				text: "Any Spartan may be equipped with one of the following:",
				options: [{ text: "Pintle Mounted multi-melta", cost: 5 }],
			},
		],
	},
	{
		id: 1024,
		name: "Legion Land Raider Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 40,
		base_size: 1,
		max_size: 8,
		main_unit: [1024],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Sponson Mounted twin-linked lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Land Raider",
				unit_ref: 1024,
				options: [
					{ number: 1, cost: 40, size: 1 },
					{ number: 2, cost: 80, size: 2 },
					{ number: 3, cost: 120, size: 3 },
					{ number: 4, cost: 160, size: 4 },
					{ number: 5, cost: 200, size: 5 },
					{ number: 6, cost: 240, size: 6 },
					{ number: 7, cost: 280, size: 7 },
				],
			},
		],
		loadout_options: [
			{
				location: "Pintle",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Multi-melta", cost: 5 },
				],
			},
		],
		datasheet_info: [
			{
				text: "For every three Land Raiders in the Detachment, one Land Raider can be equipped with a Pintle Mounted multi-melta for +5pts per model.",
			},
		],
	},
	{
		id: 1025,
		name: "Legion Drop Pod Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 6,
		base_size: 1,
		max_size: 8,
		break_strength: 0,
		main_unit: [1025],
		related_unit: [1027],
		dataslate_loadout: [
			{
				text_option: ["Turret Mounted twin bolter"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Drop Pod",
				unit_ref: 1025,
				options: [
					{ number: 1, cost: 6, size: 1, break_strength: 0 },
					{ number: 2, cost: 12, size: 2, break_strength: 0 },
					{ number: 3, cost: 18, size: 3, break_strength: 0 },
					{ number: 4, cost: 24, size: 4, break_strength: 0 },
					{ number: 5, cost: 30, size: 5, break_strength: 0 },
					{ number: 6, cost: 36, size: 6, break_strength: 0 },
					{ number: 7, cost: 42, size: 7, break_strength: 0 },
				],
			},
			{
				name: "Palisade Drop Pod",
				unit_ref: 1027,
				options: [
					{ number: 1, cost: 32, size: 1, break_strength: 0 },
					{ number: 2, cost: 64, size: 2, break_strength: 0 },
					{ number: 3, cost: 96, size: 3, break_strength: 0 },
					{ number: 4, cost: 128, size: 4, break_strength: 0 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Drop Pod Detachment can purchase one Palisade Drop Pod for each Drop Pod in this Detachment for +32pts per model.",
			},
		],
	},
	{
		id: 1026,
		name: "Dreadnought Drop Pod Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 7,
		base_size: 1,
		max_size: 8,
		break_strength: 0,
		main_unit: [1026],
		related_unit: [1027],
		dataslate_loadout: [],
		upgrade_options: [
			{
				name: "Additional Drop Pod",
				unit_ref: 1026,
				options: [
					{ number: 1, cost: 7, size: 1, break_strength: 0 },
					{ number: 2, cost: 14, size: 2, break_strength: 0 },
					{ number: 3, cost: 21, size: 3, break_strength: 0 },
					{ number: 4, cost: 28, size: 4, break_strength: 0 },
					{ number: 5, cost: 35, size: 5, break_strength: 0 },
					{ number: 6, cost: 42, size: 6, break_strength: 0 },
					{ number: 7, cost: 49, size: 7, break_strength: 0 },
				],
			},
			{
				name: "Palisade Drop Pod",
				unit_ref: 1027,
				options: [
					{ number: 1, cost: 32, size: 1, break_strength: 0 },
					{ number: 2, cost: 64, size: 2, break_strength: 0 },
					{ number: 3, cost: 96, size: 3, break_strength: 0 },
					{ number: 4, cost: 128, size: 4, break_strength: 0 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Dreadnought Drop Pod Detachment can purchase one Palisade Drop Pod for each Drop Pod in this Detachment for +32pts per model.",
			},
		],
	},
	{
		id: 1027,
		name: "Legion Deathstorm Drop Pod Battery",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 32,
		base_size: 2,
		max_size: 6,
		main_unit: [1028],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Deathstorm missile launcher"],
			},
		],
		upgrade_options: [
			{
				name: "Additional drop pod",
				unit_ref: 1028,
				options: [
					{ number: 2, cost: 32, size: 2 },
					{ number: 4, cost: 64, size: 4 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Deathstorm Drop Pod Battery can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 2", cost: 32 },
					{ text: "Increase the Detachment size by 4", cost: 64 },
				],
			},
		],
	},
	{
		id: 1028,
		name: "Legion Sicaran Punisher Squadron",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 110,
		base_size: 2,
		max_size: 6,
		main_unit: [1029],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Hull Mounted heavy bolter",
					"Punisher rotary cannon",
					"Sponson Mounted heavy bolters or Sponson Mounted lascannon",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Sicaran",
				unit_ref: 1029,
				options: [
					{ number: 1, cost: 50, size: 1 },
					{ number: 2, cost: 100, size: 2 },
					{ number: 3, cost: 150, size: 3 },
					{ number: 4, cost: 200, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Sponsons",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Legion Sicaran Punisher Squadron can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 6:",
				options: [
					{ text: "1 additional Sicaran", cost: 50 },
					{ text: "2 additional Sicaran", cost: 100 },
					{ text: "4 additional Sicaran", cost: 200 },
				],
			},
		],
	},
	{
		id: 1029,
		name: "Legion Sicaran Arcus Squadron",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 115,
		base_size: 2,
		max_size: 6,
		main_unit: [1030],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Hull Mounted heavy bolter",
					"Arcus missile launcher",
					"Sponson Mounted heavy bolters or Sponson Mounted lascannon",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Sicaran",
				unit_ref: 1030,
				options: [
					{ number: 1, cost: 60, size: 1 },
					{ number: 2, cost: 110, size: 2 },
					{ number: 3, cost: 170, size: 3 },
					{ number: 4, cost: 220, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Sponsons",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Legion Sicaran Punisher Squadron can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 6:",
				options: [
					{ text: "1 additional Sicaran", cost: 60 },
					{ text: "2 additional Sicaran", cost: 110 },
					{ text: "4 additional Sicaran", cost: 220 },
				],
			},
		],
	},
	{
		id: 1030,
		name: "Legion Sabre Squadron",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.light],
		base_cost: 120,
		base_size: 4,
		max_size: 8,
		main_unit: [1031],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Hull Mounted neutron blaster or Hull Mounted Anvilus autocannon",
					"Hull Mounted heavy bolter or Hull Mounted multi-melta",
					"Sabre missiles",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Sabre",
				unit_ref: 1031,
				options: [
					{ number: 2, cost: 55, size: 2 },
					{ number: 4, cost: 110, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Main",
				options: [
					{ name: "Neutron blaster", cost: 0 },
					{ name: "Anvilus autocannon", cost: 0 },
				],
			},
			{
				location: "hull",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Multi-melta", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Legion Sabre Squadron can purchase any of the following upgrades:",
				options: [
					{ text: "2 additional Sabre", cost: 55 },
					{ text: "4 additional Sabre", cost: 110 },
				],
			},
		],
	},
	{
		id: 1031,
		name: "Legion Termite Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 18,
		base_size: 1,
		max_size: 8,
		main_unit: [1032],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Termite twin-linked bolters"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Termite",
				unit_ref: 1032,
				options: [
					{ number: 1, cost: 18, size: 1 },
					{ number: 2, cost: 36, size: 2 },
					{ number: 3, cost: 54, size: 3 },
					{ number: 4, cost: 72, size: 4 },
					{ number: 5, cost: 90, size: 5 },
					{ number: 6, cost: 108, size: 6 },
					{ number: 7, cost: 126, size: 7 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 1032,
		name: "Legion Kratos Commander",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.hq, DETACHMENT_TYPE.heavy],
		base_cost: 100,
		base_size: 1,
		max_size: 1,
		main_unit: [1033],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Kratos battlecannon with Co-axial autocannon or Melta blastgun with Co-axial autocannon",
					"Two Hull Mounted heavy bolter or two Kratos lascannon or two Kratos autocannon",
					"Sponson Mounted heavy bolters or Sponson Mounted lascannon",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Turret",
				options: [
					{ name: "Kratos battlecannon", cost: 0 },
					{ name: "Melta blastgun", cost: 0 },
				],
			},
			{
				location: "Sponson",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
				],
			},
			{
				location: "Hull",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
					{ name: "Autocannons", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 1033,
		name: "Legion Sicaran Commander",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.hq, DETACHMENT_TYPE.battle],
		base_cost: 70,
		base_size: 1,
		max_size: 1,
		main_unit: [1034],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Hull Mounted heavy bolter",
					"Twin-linked accelerator autocannon or Omega plasma array or Punisher rotary cannon",
					"Sponson Mounted heavy bolters or Sponson Mounted lascannon",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Turret",
				options: [
					{ name: "Twin-linked accelerator autocannon", cost: 0 },
					{ name: "Omega plasma array", cost: 0 },
					{ name: "Punisher rotary cannon", cost: 0 },
				],
			},
			{
				location: "Sponsons",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 1034,
		name: "Legion Predator Commander",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.hq, DETACHMENT_TYPE.battle],
		base_cost: 60,
		base_size: 1,
		max_size: 1,
		main_unit: [1035],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Predator cannon or Predator lascannon",
					"Sponson Mounted heavy bolters or Sponson Mounted lascannon",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Turret",
				options: [
					{ name: "Predator cannon", cost: 0 },
					{ name: "Predator lascannon", cost: 0 },
				],
			},
			{
				location: "Sponsons",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
]
