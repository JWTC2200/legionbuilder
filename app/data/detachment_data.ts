import { DETACHMENT, FACTION, ALLEGIANCE, DETACHMENT_TYPE, SUBFACTION_TYPE } from "../types/types"

// astartes 1000-1999, solar 2000-2999, knights-titans 4000-4999, unique detachments 9000-9999

// Detachments require a unique key if they're one-offs. E.g. dedicated transports like multiple Thunderhawks that break standard detachment rules. id: 9000+

export const detachmentData: DETACHMENT[] = [
	// ********************************************************************
	// *********************** ASTARTES DETACHMENTS ***********************
	// ********************************************************************
	{
		id: 1000,
		name: "Legion Command Squad",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.hq,
		base_cost: 25,
		base_size: 1,
		max_size: 1,
		main_unit: [1000],
		related_unit: [],
		dataslate_loadout: [],
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
		detachment_type: DETACHMENT_TYPE.transport,
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
		detachment_type: DETACHMENT_TYPE.core,
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
				unit_ref: 1005,
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
		detachment_type: DETACHMENT_TYPE.support,
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
		detachment_type: DETACHMENT_TYPE.support,
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
		detachment_type: DETACHMENT_TYPE.support,
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
		detachment_type: DETACHMENT_TYPE.support,
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
		detachment_type: DETACHMENT_TYPE.support,
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
		detachment_type: DETACHMENT_TYPE.support,
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
		detachment_type: DETACHMENT_TYPE.support,
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
		detachment_type: DETACHMENT_TYPE.bastion,
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
		detachment_type: DETACHMENT_TYPE.bastion,
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
		detachment_type: DETACHMENT_TYPE.battle,
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
		detachment_type: DETACHMENT_TYPE.battle,
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
		detachment_type: DETACHMENT_TYPE.heavy,
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
		detachment_type: DETACHMENT_TYPE.air,
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
		detachment_type: DETACHMENT_TYPE.air,
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
		detachment_type: DETACHMENT_TYPE.air,
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
				text: "A Legion Storm Eagle Squadron can purchase the following upgrades:",
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
		detachment_type: DETACHMENT_TYPE.air,
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
		detachment_type: DETACHMENT_TYPE.vanguard,
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
		detachment_type: DETACHMENT_TYPE.vanguard,
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
		detachment_type: DETACHMENT_TYPE.vanguard,
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
				location: "weapons",
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
		detachment_type: DETACHMENT_TYPE.vanguard,
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
				location: "sponsons",
				options: [
					{ name: "lascannons", cost: 0 },
					{ name: "missile launcher", cost: 2 },
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
		detachment_type: DETACHMENT_TYPE.transport,
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
				location: "hull",
				options: [
					{ name: "heavy bolter", cost: 0 },
					{ name: "lascannon", cost: 2 },
				],
			},
			{
				location: "pintle",
				options: [
					{ name: "none", cost: 0 },
					{ name: "multi-melta", cost: 5 },
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
		detachment_type: DETACHMENT_TYPE.transport,
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
				location: "pintle",
				options: [
					{ name: "none", cost: 0 },
					{ name: "multi-melta", cost: 5 },
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
		detachment_type: DETACHMENT_TYPE.transport,
		base_cost: 6,
		base_size: 1,
		max_size: 8,
		break_strength: 0,
		main_unit: [1025],
		related_unit: [1027],
		dataslate_loadout: [
			{
				text_option: ["Turrent Mounted twin bolter"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Drop Pod",
				unit_ref: 1025,
				options: [
					{ number: 1, cost: 6, size: 1, break_strength: 0 },
					{ number: 2, cost: 12, size: 2, break_strength: 0 },
					{ number: 4, cost: 18, size: 4, break_strength: 0 },
					{ number: 5, cost: 24, size: 5, break_strength: 0 },
					{ number: 3, cost: 30, size: 3, break_strength: 0 },
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
		detachment_type: DETACHMENT_TYPE.transport,
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
					{ number: 4, cost: 21, size: 4, break_strength: 0 },
					{ number: 5, cost: 28, size: 5, break_strength: 0 },
					{ number: 3, cost: 35, size: 3, break_strength: 0 },
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
		detachment_type: DETACHMENT_TYPE.support,
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
				unit_ref: 1022,
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
	// ********************************************************************
	// ********************** SOlAR AUXLIA DETACHMENTS ********************
	// ********************************************************************
	{
		id: 2000,
		name: "Legate Commander Detachment",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.hq,
		base_cost: 16,
		base_size: 1,
		max_size: 1,
		main_unit: [2000],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Archeotech pistol", "Volkite chargers"],
			},
		],
		upgrade_options: [],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 2001,
		name: "Auxilia Tactical Command",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.hq,
		base_cost: 10,
		base_size: 1,
		max_size: 1,
		main_unit: [2001],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Auxillia lasrifles"],
			},
		],
		upgrade_options: [],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 2002,
		name: "Auxilia Lasrifle Tercio",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.core,
		base_cost: 30,
		base_size: 4,
		max_size: 16,
		main_unit: [2002],
		related_unit: [9000, 9001],
		dataslate_loadout: [
			{
				text_option: ["Auxillia lasrifles"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Auxiliaries",
				unit_ref: 2002,
				options: [
					{ number: 2, cost: 12, size: 2 },
					{ number: 4, cost: 24, size: 4 },
					{ number: 6, cost: 36, size: 6 },
					{ number: 8, cost: 48, size: 8 },
					{ number: 10, cost: 60, size: 10 },
					{ number: 12, cost: 72, size: 12 },
				],
			},
			{
				name: "Additional Auxiliaries with Flamers",
				unit_ref: 9002,
				options: [
					{ number: 2, cost: 12, size: 2 },
					{ number: 4, cost: 24, size: 4 },
					{ number: 6, cost: 36, size: 6 },
					{ number: 8, cost: 48, size: 8 },
					{ number: 10, cost: 60, size: 10 },
					{ number: 12, cost: 72, size: 12 },
				],
			},
			{
				name: "Additional Veletarii",
				unit_ref: 9000,
				options: [
					{ number: 2, cost: 12, size: 2 },
					{ number: 4, cost: 24, size: 4 },
					{ number: 6, cost: 36, size: 6 },
					{ number: 8, cost: 48, size: 8 },
					{ number: 10, cost: 60, size: 10 },
					{ number: 12, cost: 72, size: 12 },
				],
			},
			{
				name: "Additional Charonite Ogryns",
				unit_ref: 9001,
				options: [
					{ number: 2, cost: 15, size: 2 },
					{ number: 4, cost: 30, size: 4 },
					{ number: 6, cost: 45, size: 6 },
					{ number: 8, cost: 60, size: 8 },
					{ number: 10, cost: 75, size: 10 },
					{ number: 12, cost: 90, size: 12 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Auxilia Lasrifle Tercio can purchase up to six upgrades. It may purchase the same upgrade multiple times: Each upgrade increases the Detachment size by 2.",
				options: [
					{ text: "Auxiliaries", cost: 12 },
					{ text: "Auxiliaries with Flamers", cost: 12 },
					{ text: "Veletarii", cost: 12 },
					{ text: "Charonite Ogryns", cost: 15 },
				],
			},
		],
	},
	{
		id: 2003,
		name: "Auxilia Ogryn Charonite Section",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.support,
		base_cost: 50,
		base_size: 4,
		max_size: 8,
		main_unit: [2004],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Charonite claws"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Charonite Ogryn",
				unit_ref: 2004,
				options: [
					{ number: 2, cost: 15, size: 2 },
					{ number: 4, cost: 30, size: 4 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Auxilia Charonite Ogryn Section can purchase the following upgrades:",
				options: [
					{ text: "2 additional Charonite Ogryn", cost: 15 },
					{ text: "4 additional Charonite Ogryn", cost: 30 },
				],
			},
		],
	},
	{
		id: 2004,
		name: "Auxilia Veletaris Storm Section",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.support,
		base_cost: 40,
		base_size: 4,
		max_size: 8,
		main_unit: [2003],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Auxilia laspistols", "Power axes"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Veletarii",
				unit_ref: 2003,
				options: [
					{ number: 2, cost: 10, size: 2 },
					{ number: 4, cost: 20, size: 4 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Auxilia Veletaris Storm Section can purchase the following upgrades:",
				options: [
					{ text: "2 additional Veletarii", cost: 10 },
					{ text: "4 additional Veletarii", cost: 20 },
				],
			},
		],
	},
	{
		id: 2005,
		name: "Auxilia Rapier Battery",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.bastion,
		base_cost: 50,
		base_size: 3,
		max_size: 9,
		main_unit: [2005],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Laser destroyer array, quad-launcher or mole mortar"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Rapier",
				unit_ref: 2005,
				options: [
					{ number: 3, cost: 40, size: 3 },
					{ number: 6, cost: 70, size: 6 },
				],
			},
		],
		loadout_options: [
			{
				location: "Main",
				options: [
					{ name: "Laser destroyer array", cost: 0 },
					{ name: "Quad-launcher", cost: 0 },
					{ name: "Mole mortar", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Auxilia Rapier Battery can purchase the following upgrades:",
				options: [
					{ text: "3 additional Rapier", cost: 40 },
					{ text: "6 additional Rapier", cost: 70 },
				],
			},
		],
	},
	{
		id: 2006,
		name: "Auxilia Tarantula Battery",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.bastion,
		base_cost: 36,
		base_size: 4,
		max_size: 8,
		break_strength: 0,
		main_unit: [2006],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Tarantula lascannon battery or Hyperios air-defence missile launcher"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Tarantula",
				unit_ref: 2006,
				options: [
					{ number: 2, cost: 15, size: 2, break_strength: 0 },
					{ number: 4, cost: 25, size: 4, break_strength: 0 },
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
				text: "An Auxilia Tarantula Battery can purchase the following upgrades:",
				options: [
					{ text: "2 additional Tarantula", cost: 15 },
					{ text: "4 additional Tarantula", cost: 25 },
				],
			},
		],
	},
	{
		id: 2007,
		name: "Auxilia Aethon Heavy Sentinel Patrol",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.vanguard,
		base_cost: 35,
		base_size: 2,
		max_size: 8,
		main_unit: [2007],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Multi-laser", "Sentinel missile launcher"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Sentinel",
				unit_ref: 2007,
				options: [
					{ number: 2, cost: 25, size: 2 },
					{ number: 4, cost: 45, size: 4 },
					{ number: 6, cost: 65, size: 6 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Auxilia Aethon Heavy Sentinel Patrol can purchase the following upgrades:",
				options: [
					{ text: "2 additional Sentinel", cost: 25 },
					{ text: "4 additional Sentinel", cost: 45 },
					{ text: "6 additional Sentinel", cost: 65 },
				],
			},
		],
	},
	{
		id: 2008,
		name: "Leman Russ Strike Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.battle,
		base_cost: 175,
		base_size: 4,
		max_size: 10,
		main_unit: [2008],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Leman Russ battlecannon or Vanquisher battlecannon",
					"Hull Mounted heavy bolter or Hull Mounted lascannon",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Leman Russ",
				unit_ref: 2008,
				options: [
					{ number: 2, cost: 85, size: 2 },
					{ number: 4, cost: 160, size: 4 },
					{ number: 6, cost: 220, size: 6 },
				],
			},
		],
		loadout_options: [
			{
				location: "Turret",
				options: [
					{ name: "Leman Russ battlecannon", cost: 0 },
					{ name: "Vanquisher battlecannon", cost: 0 },
				],
			},
			{
				location: "Hull",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Leman Russ Strike Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 85 },
					{ text: "4 additional Leman Russ", cost: 160 },
					{ text: "6 additional Leman Russ", cost: 220 },
				],
			},
		],
	},
	{
		id: 2009,
		name: "Malcador Tank Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.battle,
		base_cost: 165,
		base_size: 2,
		max_size: 6,
		main_unit: [2009],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Malcador battlecannon or Malcador Vanquisher battlecannon or Malcador lascannon turret",
					"Hull Mounted heavy bolter or Hull Mounted lascannon or Hull Mounted autocannon or Hull Mounted demolisher cannon",
					"Malcador heavy bolter sponsons or Malcador lascannon sponsons or Malcador autocannon sponsons",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Malcador",
				unit_ref: 2009,
				options: [
					{ number: 1, cost: 70, size: 1 },
					{ number: 2, cost: 130, size: 2 },
					{ number: 3, cost: 200, size: 3 },
					{ number: 4, cost: 240, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Turret",
				options: [
					{ name: "Malcador battlecannon", cost: 0 },
					{ name: "Vanquisher battlecannon", cost: 0 },
					{ name: "Lascannon turret", cost: 0 },
				],
			},
			{
				location: "Hull",
				options: [
					{ name: "Heavy bolter", cost: 0 },
					{ name: "Lascannon", cost: 0 },
					{ name: "Autocannon", cost: 0 },
					{ name: "Demolisher cannon", cost: 0 },
				],
			},
			{
				location: "Sponsons",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Lascannons", cost: 0 },
					{ name: "Autocannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Malcador Tank Squadron can purchase any of the following upgrades: The same upgrade may be taken more than once.",
				options: [
					{ text: "1 additional Malcador", cost: 70 },
					{ text: "2 additional Malcador", cost: 130 },
					{ text: "4 additional Malcador", cost: 240 },
				],
			},
		],
	},
	{
		id: 2010,
		name: "Auxilia Super-Heavy Tank Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.heavy,
		base_cost: 100,
		base_size: 1,
		max_size: 6,
		main_unit: [2010],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Hull Mounted demolisher cannon and Hull Mounted heavy bolter",
					"Baneblade cannon with Co-axial autocannon or Hellhammer cannon with Co-axial autocannon",
					"Baneblade heavy bolter sponsons or Baneblade autocannon sponsons or Baneblade heavy flamer sponsons",
					"Lascannon sponson turrets",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Super-heavy",
				unit_ref: 2010,
				options: [
					{ number: 1, cost: 90, size: 1 },
					{ number: 2, cost: 180, size: 2 },
					{ number: 3, cost: 255, size: 3 },
					{ number: 4, cost: 345, size: 4 },
					{ number: 5, cost: 390, size: 5 },
				],
			},
		],
		loadout_options: [
			{
				location: "Turret",
				options: [
					{ name: "Baneblade cannon", cost: 0 },
					{ name: "Hellhammer cannon", cost: 0 },
				],
			},
			{
				location: "Sponsons",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Heavy flamers", cost: 0 },
					{ name: "Autocannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Auxilia Super-Heavy Tank Squadron can purchase any of the following upgrades: The same upgrade may be taken more than once.",
				options: [
					{ text: "1 additional Super-heavy", cost: 90 },
					{ text: "3 additional Super-heavy", cost: 255 },
					{ text: "5 additional Super-heavy", cost: 390 },
				],
			},
		],
	},
	{
		id: 2011,
		name: "Auxilia Thunderbolt Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.air,
		base_cost: 80,
		base_size: 1,
		max_size: 4,
		main_unit: [2011],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Quad autocannon",
					"Thunderbolt twin-linked lascannon",
					"Hellstrike missiles or Skystrike missiles or Wing bombs",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Thunderbolt",
				unit_ref: 2011,
				options: [
					{ number: 1, cost: 80, size: 1 },
					{ number: 2, cost: 150, size: 2 },
					{ number: 3, cost: 210, size: 3 },
				],
			},
		],
		loadout_options: [
			{
				location: "Nose",
				options: [
					{ name: "Quad autocannon", cost: 0 },
					{ name: "Avenger bolt cannon upgrade", cost: 3 },
				],
			},
			{
				location: "Wing",
				options: [
					{ name: "Hellstrike missiles", cost: 0 },
					{ name: "Skystrike missiles", cost: 0 },
					{ name: "Wing bombs", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "Any Thunderbolt Fighter can exchange its Quad autocannon for an Avenger bolt cannon for +3pts per model",
			},
			{
				text: "An Auxilia Thunderbolt Squadron can purchase the following upgrades:",
				options: [
					{ text: "1 additional Thunderbolt", cost: 80 },
					{ text: "2 additional Thunderbolt", cost: 150 },
					{ text: "3 additional Thunderbolt", cost: 210 },
				],
			},
		],
	},
	{
		id: 2012,
		name: "Auxilia Avenger Strike Fighter Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.air,
		base_cost: 85,
		base_size: 1,
		max_size: 4,
		main_unit: [2012],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Avenger bolt cannon",
					"Heavy stubber tail gun",
					"Avenger lascannon or Avenger autocannon",
					"Hellstrike missiles or Skystrike missiles or Wing bombs",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Avenger",
				unit_ref: 2012,
				options: [
					{ number: 1, cost: 85, size: 1 },
					{ number: 2, cost: 160, size: 2 },
					{ number: 3, cost: 220, size: 3 },
				],
			},
		],
		loadout_options: [
			{
				location: "Nose",
				options: [
					{ name: "Avenger lascannon", cost: 0 },
					{ name: "Avenger autocannon", cost: 0 },
				],
			},
			{
				location: "Wing",
				options: [
					{ name: "Hellstrike missiles", cost: 0 },
					{ name: "Skystrike missiles", cost: 0 },
					{ name: "Wing bombs", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Auxilia Avenger Strike Fighter Squadron can purchase the following upgrades:",
				options: [
					{ text: "1 additional Avenger", cost: 85 },
					{ text: "2 additional Avenger", cost: 160 },
					{ text: "3 additional Avenger", cost: 220 },
				],
			},
		],
	},
	{
		id: 2013,
		name: "Auxilia Lightning Fighter Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.air,
		base_cost: 85,
		base_size: 1,
		max_size: 4,
		main_unit: [2013],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Lightning twin lascannons or Lightning twin multi-laser",
					"Any two of the following: Hellstrike missiles, Skyfire missiles or Phosphex bomb clusters",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Lightning",
				unit_ref: 2013,
				options: [
					{ number: 1, cost: 85, size: 1 },
					{ number: 2, cost: 160, size: 2 },
					{ number: 3, cost: 220, size: 3 },
				],
			},
		],
		loadout_options: [
			{
				location: "Hull",
				options: [
					{ name: "Lightning twin lascannons", cost: 0 },
					{ name: "Lightning twin multi-laser", cost: 0 },
				],
			},
			{
				location: "Wing 1",
				options: [
					{ name: "Hellstrike missiles", cost: 0 },
					{ name: "Skyfire missiles", cost: 0 },
					{ name: "Phosphex bomb clusters", cost: 0 },
				],
			},
			{
				location: "Wing 2",
				options: [
					{ name: "Hellstrike missiles", cost: 0 },
					{ name: "Skyfire missiles", cost: 0 },
					{ name: "Phosphex bomb clusters", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Auxilia Lightning Fighter Squadron can purchase the following upgrades:",
				options: [
					{ text: "1 additional Lightning", cost: 85 },
					{ text: "2 additional Lightning", cost: 160 },
					{ text: "3 additional Lightning", cost: 220 },
				],
			},
		],
	},
	{
		id: 2014,
		name: "Auxilia Marauder Bomber Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.air,
		base_cost: 85,
		base_size: 1,
		max_size: 4,
		main_unit: [2014],
		related_unit: [2015, 2016, 2017],
		dataslate_loadout: [
			{
				text_option: [
					"Nose Mounted lascannon",
					"Marauder heavy bolter turrets",
					"Marauder bomb bay",
					"Any two of the following: Hellstrike missiles, Skystrike missiles or Wing bombs",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Marauder",
				unit_ref: 2014,
				options: [
					{ number: 1, cost: 85, size: 1 },
					{ number: 2, cost: 160, size: 2 },
					{ number: 3, cost: 220, size: 3 },
				],
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Marauder Bomber", cost: 0 },
					{ name: "Marauder Pathfinder", cost: 0 },
					{ name: "Marauder Colossus", cost: 0 },
					{ name: "Marauder Destroyer", cost: 10 },
				],
			},
			{
				location: "Wing 1",
				options: [
					{ name: "Hellstrike missiles", cost: 0 },
					{ name: "Skystrike missiles", cost: 0 },
					{ name: "Wing bombs", cost: 0 },
				],
			},
			{
				location: "Wing 2",
				options: [
					{ name: "Hellstrike missiles", cost: 0 },
					{ name: "Skystrike missiles", cost: 0 },
					{ name: "Wing bombs", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "Any Marauder be upgraded to  one of the following Marauder variants:",
				options: [
					{ text: "Marauder Pathfinder", cost: 0 },
					{ text: "Marauder Colossus", cost: 0 },
					{ text: "Marauder Destroyer", cost: 10 },
				],
			},
			{
				text: "An Auxilia Marauder Bomber Squadron can purchase the following upgrades:",
				options: [
					{ text: "1 additional Marauder", cost: 85 },
					{ text: "2 additional Marauder", cost: 160 },
					{ text: "3 additional Marauder", cost: 220 },
				],
			},
		],
	},
	{
		id: 2015,
		name: "Auxilia Arvus Lighter",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.transport,
		base_cost: 12,
		base_size: 1,
		max_size: 20,
		main_unit: [2018],
		related_unit: [],
		dataslate_loadout: [],
		upgrade_options: [
			{
				name: "Additional Arvus Lighter",
				unit_ref: 2018,
				options: [
					{ number: 1, cost: 12, size: 1 },
					{ number: 2, cost: 24, size: 2 },
					{ number: 3, cost: 36, size: 3 },
					{ number: 4, cost: 48, size: 4 },
					{ number: 5, cost: 60, size: 5 },
					{ number: 6, cost: 72, size: 6 },
					{ number: 7, cost: 84, size: 7 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "Additional Arvus Lighter +12pts per model",
			},
		],
	},
	{
		id: 2016,
		name: "Auxilia Dracosan Detachment",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.transport,
		base_cost: 37,
		base_size: 1,
		max_size: 8,
		main_unit: [2019],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Hull Mounted twin lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Dracosan",
				unit_ref: 2019,
				options: [
					{ number: 1, cost: 37, size: 1 },
					{ number: 2, cost: 74, size: 2 },
					{ number: 3, cost: 111, size: 3 },
					{ number: 4, cost: 148, size: 4 },
					{ number: 5, cost: 185, size: 5 },
					{ number: 6, cost: 222, size: 6 },
					{ number: 7, cost: 259, size: 7 },
				],
			},
		],
		loadout_options: [
			{
				location: "Hull",
				options: [
					{ name: "Twin lascannons", cost: 0 },
					{ name: "Demolisher Cannon", cost: 5 },
				],
			},
		],
		datasheet_info: [
			{
				text: "Any Dracosan may exchange its Hull Mounted twin lascannon for a Hull Mounted demolisher cannon for +5pts per model. Any model that does replaces its Transport (4) special rule with the Transport (2) special rule",
			},
		],
	},
	{
		id: 2017,
		name: "Auxilia Cyclops Detachment",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.support,
		base_cost: 40,
		base_size: 2,
		max_size: 6,
		main_unit: [2020],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Demolition charge or an incineration charge. All models in the Detachment must be equipped with the same weapons",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Cyclops",
				unit_ref: 2020,
				options: [
					{ number: 2, cost: 40, size: 2 },
					{ number: 4, cost: 80, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Charge",
				options: [
					{ name: "Demolition charge", cost: 0 },
					{ name: "Incineration charge", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Auxilia Cyclops Battery can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 2", cost: 40 },
					{ text: "Increase the Detachment size by 5", cost: 80 },
				],
			},
		],
	},
	{
		id: 2018,
		name: "Auxilia Malcador Infernus Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.battle,
		base_cost: 70,
		base_size: 1,
		max_size: 3,
		main_unit: [2021],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Malcador inferno gun", "Malcador autocannon sponsons or Malcador lascannon sponsons"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Malcador",
				unit_ref: 2021,
				options: [
					{ number: 1, cost: 70, size: 1 },
					{ number: 2, cost: 140, size: 2 },
				],
			},
		],
		loadout_options: [
			{
				location: "Sponsons",
				options: [
					{ name: "Lascannons", cost: 0 },
					{ name: "Autocannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Malcador Infernus Squadron can purchase one of the following upgrades.",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 70 },
					{ text: "Increase the Detachment size by 2", cost: 140 },
				],
			},
		],
	},
	{
		id: 2019,
		name: "Auxilia Valdor Infernus Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.battle,
		base_cost: 70,
		base_size: 1,
		max_size: 3,
		main_unit: [2022],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Neutron beam laser", "Malcador autocannon sponsons or Malcador lascannon sponsons"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Valdor",
				unit_ref: 2022,
				options: [
					{ number: 1, cost: 70, size: 1 },
					{ number: 2, cost: 140, size: 2 },
				],
			},
		],
		loadout_options: [
			{
				location: "Sponsons",
				options: [
					{ name: "Lascannons", cost: 0 },
					{ name: "Autocannons", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Auxilia Valdor Squadron can purchase one of the following upgrades.",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 70 },
					{ text: "Increase the Detachment size by 2", cost: 140 },
				],
			},
		],
	},
	{
		id: 2020,
		name: "Auxilia Stormhammer Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.heavy,
		base_cost: 100,
		base_size: 1,
		max_size: 3,
		main_unit: [2023],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Stormhammer cannon with Co-axial multi-laser",
					"Dual battlecannon",
					"Hull Mounted lascannon",
					"Stormhammer multi-laser sponsons",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Stormhammer",
				unit_ref: 2023,
				options: [
					{ number: 1, cost: 100, size: 1 },
					{ number: 2, cost: 200, size: 2 },
				],
			},
		],
		loadout_options: [
			{
				location: "Sponsons",
				options: [
					{ name: "Multi-lasers", cost: 0 },
					{ name: "Lascannons", cost: 4 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Auxilia Stormhammer Squadron can purchase one of the following upgrades.",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 100 },
					{ text: "Increase the Detachment size by 2", cost: 200 },
				],
			},
			{
				text: "Any Stormhammer may exchange its Stormhammer multi-laser sponsons for Stormhammer lascannon sponsons for +4pts per model",
			},
		],
	},
	{
		id: 2021,
		name: "Auxilia Medusa Battery",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.artillery,
		base_cost: 130,
		base_size: 4,
		max_size: 12,
		main_unit: [2024],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Medusa siege gun"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Medusa",
				unit_ref: 2024,
				options: [
					{ number: 4, cost: 130, size: 4 },
					{ number: 8, cost: 260, size: 8 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Auxilia Medusa Battery can purchase one of the following upgrades.",
				options: [
					{ text: "Increase the Detachment size by 4", cost: 100 },
					{ text: "Increase the Detachment size by 8", cost: 200 },
				],
			},
		],
	},
	{
		id: 2022,
		name: "Auxilia Basilisk Battery",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.artillery,
		base_cost: 140,
		base_size: 4,
		max_size: 12,
		main_unit: [2025],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Earthshaker cannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Basilisk",
				unit_ref: 2025,
				options: [
					{ number: 4, cost: 130, size: 4 },
					{ number: 8, cost: 260, size: 8 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Auxilia Basilisk Battery can purchase one of the following upgrades.",
				options: [
					{ text: "Increase the Detachment size by 4", cost: 140 },
					{ text: "Increase the Detachment size by 8", cost: 280 },
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.knight,
		base_cost: 180,
		base_size: 1,
		max_size: 6,
		break_strength: 3,
		main_unit: [4000],
		related_unit: [4001, 4002, 4003, 4004],
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
			{
				name: "Armiger Talon",
				unit_ref: 4003,
				options: [{ number: 1, cost: 180, td_ek: 30, size: 3, break_strength: 2 }],
			},
			{
				name: "Moriax Talon",
				unit_ref: 4004,
				options: [{ number: 1, cost: 200, size: 3, break_strength: 2 }],
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Knight Errant", cost: 0, td_ek: 10 },
					{ name: "Knight Warden", cost: 0 },
					{ name: "Knight Crusader", cost: 0 },
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
			{
				text: "In addition, a Questoris Knight Banner may purchase one of the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.knight,
		base_cost: 250,
		base_size: 1,
		max_size: 5,
		break_strength: 3,
		main_unit: [4005],
		related_unit: [4003, 4004],
		dataslate_loadout: [
			{
				text_option: [
					"Two Twin magana lascannon",
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
			{
				name: "Armiger Talon",
				unit_ref: 4003,
				options: [{ number: 1, cost: 180, td_ek: 30, size: 3, break_strength: 2 }],
			},
			{
				name: "Moriax Talon",
				unit_ref: 4004,
				options: [{ number: 1, cost: 200, size: 3, break_strength: 2 }],
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Two Twin magana lascannon", cost: 0 },
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
			{
				text: "In addition, a Acastus Knight Banner may purchase one of the following upgrades:",
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
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.titan,
		base_cost: 330,
		base_size: 1,
		max_size: 3,
		break_strength: 4,
		main_unit: [4006],
		related_unit: [],
		dataslate_loadout: [
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
				unit_ref: 4006,
				options: [
					{ number: 1, cost: 330, size: 1, break_strength: 4 },
					{ number: 2, cost: 640, size: 2, break_strength: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Arm 1",
				options: [
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastgun", cost: 0 },
					{ name: "Graviton eradicator", cost: 0 },
					{ name: "Conversion beam dissolutor", cost: 0 },
					{ name: "Ursus claw", cost: 0 },
					{ name: "Natrix shock lance", cost: 0 },
					{ name: "Incisor pattern melta lance", cost: 0, td_ek: 20 },
					{ name: "Volkite eradicator", cost: 0 },
					{ name: "Warhound shudder missiles", cost: 0 },
					{ name: "Warhound swamer missles", cost: 0 },
				],
			},
			{
				location: "Arm 2",
				options: [
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastgun", cost: 0 },
					{ name: "Graviton eradicator", cost: 0 },
					{ name: "Conversion beam dissolutor", cost: 0 },
					{ name: "Ursus claw", cost: 0 },
					{ name: "Natrix shock lance", cost: 0 },
					{ name: "Incisor pattern melta lance", cost: 0, td_ek: 20 },
					{ name: "Volkite eradicator", cost: 0 },
					{ name: "Warhound shudder missiles", cost: 0 },
					{ name: "Warhound swamer missles", cost: 0 },
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
	{
		id: 4003,
		name: "Dire Wolf Heavy Scout Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.titan,
		base_cost: 385,
		base_size: 1,
		max_size: 1,
		break_strength: 4,
		main_unit: [4007],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Ardex mega-bolters", "Neutron laser or Volcano cannon or Conversion beam dissipator"],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Back",
				options: [
					{ name: "Neutron laser", cost: 0 },
					{ name: "Volcano cannon", cost: 0, td_ek: 20 },
					{ name: "Conversion beam dissipator", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4004,
		name: "Reaver Battle Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.titan,
		base_cost: 415,
		base_size: 1,
		max_size: 1,
		break_strength: 5,
		main_unit: [4008],
		related_unit: [],
		dataslate_loadout: [
			{
				text: "Reaver Titans have two weapons chosen from the list below - it may choose two of the same weapon",
				text_option: [
					"Reaver laser blaster",
					"Reaver gatling blaster",
					"Reaver volcano cannon",
					"Reaver melta cannon",
					"Reaver power fist",
					"Reaver chainfist",
				],
			},
			{
				text: "Reaver Titans also have one weapon chosen from the list below:",
				text_option: [
					"Reaver apocalypse missile launcher",
					"Reaver vulcan mega-bolter",
					"Reaver titan warp missile",
					"Reaver turbo-laser destructor",
					"Reaver volkite eradicator",
					"Reaver graviton eradicator",
					"Reaver conversion beam dissolutor",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Arm 1",
				options: [
					{ name: "Reaver laser blaster", cost: 0 },
					{ name: "Reaver gatling blaster", cost: 0 },
					{ name: "Reaver volcano cannon", cost: 0, td_ek: 30 },
					{ name: "Reaver melta cannon", cost: 0, td_ek: 40 },
					{ name: "Reaver power fist", cost: 0 },
					{ name: "Reaver chainfist", cost: 0 },
				],
			},
			{
				location: "Arm 1",
				options: [
					{ name: "Reaver laser blaster", cost: 0 },
					{ name: "Reaver gatling blaster", cost: 0 },
					{ name: "Reaver volcano cannon", cost: 0, td_ek: 30 },
					{ name: "Reaver melta cannon", cost: 0, td_ek: 40 },
					{ name: "Reaver power fist", cost: 0 },
					{ name: "Reaver chainfist", cost: 0 },
				],
			},
			{
				location: "Carapace",
				options: [
					{ name: "Reaver apocalypse missile launcher", cost: 0 },
					{ name: "Reaver vulcan mega-bolter", cost: 0 },
					{ name: "Reaver titan warp missile", cost: 0, td_ek: 30 },
					{ name: "Reaver turbo-laser destructor", cost: 0 },
					{ name: "Reaver volkite eradicator", cost: 0 },
					{ name: "Reaver graviton eradicator", cost: 0 },
					{ name: "Reaver conversion beam dissolutor", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4005,
		name: "Warbringer Nemesis Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.titan,
		base_cost: 525,
		base_size: 1,
		max_size: 1,
		break_strength: 5,
		main_unit: [4009],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Anvillus pattern defence batteries",
					"Ardex-defensor mauler bolt cannon turrets",
					"Mori quake cannon or Belicosa volcano cannon",
				],
			},
			{
				text: "In addition, a Warbringer Nemesis Titan has two weapons chosen from the list below - it may choose two of the same weapon:",
				text_option: [
					"Reaver laser blaster",
					"Reaver gatling blaster",
					"Reaver volcano cannon",
					"Reaver melta cannon",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Arm 1",
				options: [
					{ name: "Reaver laser blaster", cost: 0 },
					{ name: "Reaver gatling blaster", cost: 0 },
					{ name: "Reaver volcano cannon", cost: 0, td_ek: 30 },
					{ name: "Reaver melta cannon", cost: 0, td_ek: 40 },
				],
			},
			{
				location: "Arm 2",
				options: [
					{ name: "Reaver laser blaster", cost: 0 },
					{ name: "Reaver gatling blaster", cost: 0 },
					{ name: "Reaver volcano cannon", cost: 0, td_ek: 30 },
					{ name: "Reaver melta cannon", cost: 0, td_ek: 40 },
				],
			},
			{
				location: "Carapace",
				options: [
					{ name: "Mori quake cannon", cost: 0 },
					{ name: "Belicosa volcano cannon", cost: 0, td_ek: 40 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4006,
		name: "Warlord Battle Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.titan,
		base_cost: 600,
		base_size: 1,
		max_size: 1,
		break_strength: 6,
		main_unit: [4010],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Ardex-defensor mauler bolt cannon turrets", "Ardex-defensor lascannon turrets"],
			},
			{
				text: "In addition, a Warlord Battle Titan has two weapons chosen from the list below - it may choose two of the same weapon:",
				text_option: [
					"Belicosa volcano cannon",
					"Sunfury plasma annihilator",
					"Macro-gatling blaster",
					"Mori quake cannon",
					"Arioch power claw",
					"Volkite destructor",
					"Warlord graviton ruinator",
					"Conversion beam extripator",
				],
			},
			{
				text: "Warlord Battle Titans also have one weapon chosen from the list below:",
				text_option: [
					"Apocalypse missile launchers",
					"Paired gatling blasters",
					"Paired turbo-laser destructors",
					"Vulcan mega-bolter array",
					"Paired laser blasters",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Arm 1",
				options: [
					{ name: "Belicosa Volcano Cannon", cost: 0, td_ek: 40 },
					{ name: "Sunfury plasma annihilator", cost: 0 },
					{ name: "Macro-gatling blaster", cost: 0 },
					{ name: "Mori quake cannon", cost: 0 },
					{ name: "Arioch power claw", cost: 0 },
					{ name: "Volkite destructor", cost: 0 },
					{ name: "Warlord graviton ruinator", cost: 0 },
					{ name: "Conversion beam extripator", cost: 0 },
				],
			},
			{
				location: "Arm 2",
				options: [
					{ name: "Belicosa Volcano Cannon", cost: 0, td_ek: 40 },
					{ name: "Sunfury plasma annihilator", cost: 0 },
					{ name: "Macro-gatling blaster", cost: 0 },
					{ name: "Mori quake cannon", cost: 0 },
					{ name: "Arioch power claw", cost: 0 },
					{ name: "Volkite destructor", cost: 0 },
					{ name: "Warlord graviton ruinator", cost: 0 },
					{ name: "Conversion beam extripator", cost: 0 },
				],
			},
			{
				location: "Carapace",
				options: [
					{ name: "Apocalypse missile launchers", cost: 0 },
					{ name: "Paired gatling blasters", cost: 0 },
					{ name: "Paired turbo-laser destructors", cost: 0 },
					{ name: "Vulcan mega-bolter array", cost: 0 },
					{ name: "Paired laser blasters", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4007,
		name: "Warlord-Sinister Battle Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: ALLEGIANCE.loyalist,
		unique: false,
		detachment_type: DETACHMENT_TYPE.titan,
		base_cost: 675,
		base_size: 1,
		max_size: 1,
		break_strength: 6,
		main_unit: [4011],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Sinistramanus Tenebrae",
					"Arioch Power Claw",
					"Death Pulse",
					"Antipathic tempest",
					"Ardex-defensor mauler bolt cannon turrets",
					"Ardex-defensor lascannon turrets",
				],
			},
			{
				text: "In addition, a Warlord-Sinister Battle Titan has one weapon chosen from the list below",
				text_option: [
					"Apocalypse missile launchers",
					"Paired gatling blasters",
					"Paired turbo-laser destructors",
					"Vulcan mega-bolter array",
					"Paired laser blasters",
				],
			},
			{
				text: "Warlord-Sinister Battle Titans may exchange its Arioch power claw for one of the following:",
				text_option: [
					"Belicosa volcano cannon",
					"Sunfury plasma annihilator",
					"Macro-gatling blaster",
					"Mori quake cannon",
					"Volkite destructor",
					"Warlord graviton ruinator",
					"Conversion beam extripator",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Arm weapon",
				options: [
					{ name: "Arioch power claw", cost: 0 },
					{ name: "Belicosa Volcano Cannon", cost: 0, td_ek: 40 },
					{ name: "Sunfury plasma annihilator", cost: 0 },
					{ name: "Macro-gatling blaster", cost: 0 },
					{ name: "Mori quake cannon", cost: 0 },
					{ name: "Volkite destructor", cost: 0 },
					{ name: "Warlord graviton ruinator", cost: 0 },
					{ name: "Conversion beam extripator", cost: 0 },
				],
			},
			{
				location: "Carapace",
				options: [
					{ name: "Apocalypse missile launchers", cost: 0 },
					{ name: "Paired gatling blasters", cost: 0 },
					{ name: "Paired turbo-laser destructors", cost: 0 },
					{ name: "Vulcan mega-bolter array", cost: 0 },
					{ name: "Paired laser blasters", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4008,
		name: "Warmaster Heavy Battle Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.titan,
		base_cost: 750,
		td_ek: 40,
		base_size: 1,
		max_size: 1,
		break_strength: 7,
		main_unit: [4012],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Two Suzerain class plasma destructors",
					"Revalator missile launcher",
					"Ardex-defensor mauler bolt cannon turrets",
					"Ardex-defensor lascannon turrets",
					"Anvilus pattern defence batteries or Ardex-defensor bomard turrets",
				],
			},
			{
				text: "In addition, a Warmaster Titan has two weapons chosen from the list below - it may choose two of the same weapon",
				text_option: [
					"Apocalypse missile array",
					"Melta cannon",
					"Inferno gun",
					"Vulcan mega-bolter",
					"Turbo-laser destructor",
					"Plasma blastun",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Shoulder 1",
				options: [
					{ name: "Apocalypse missile array", cost: 0 },
					{ name: "Melta cannon", cost: 0, td_ek: 20 },
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastun", cost: 0 },
				],
			},
			{
				location: "Shoulder 2",
				options: [
					{ name: "Apocalypse missile array", cost: 0 },
					{ name: "Melta cannon", cost: 0, td_ek: 20 },
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastun", cost: 0 },
				],
			},
			{
				location: "Turrets",
				options: [
					{ name: "Anvilus pattern defence batteries", cost: 0 },
					{ name: "Ardex-defensor bomard turrets", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4009,
		name: "Warmaster Iconoclast Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.titan,
		base_cost: 750,
		base_size: 1,
		max_size: 1,
		break_strength: 7,
		main_unit: [4013],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Desolator chainsword",
					"Kirius siege drill",
					"Ardex-defensor mauler bolt cannon turrets",
					"Ardex-defensor lascannon turrets",
					"Anvilus pattern defence batteries or Ardex-defensor bomard turrets",
					"Cruciator gatling array",
				],
			},
			{
				text: "In addition, a Warmaster Iconoclast has two weapons chosen from the list below - it may choose two of the same weapon",
				text_option: [
					"Apocalypse missile array",
					"Melta cannon",
					"Inferno gun",
					"Vulcan mega-bolter",
					"Turbo-laser destructor",
					"Plasma blastun",
				],
			},
			{
				text: "A Warmaster Iconoclast can exchange its Kirus siege drill for a Kirus grav imploder for +10pts",
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Arm",
				options: [
					{ name: "Kirus siege drill", cost: 0 },
					{ name: "Kirus grav imploder", cost: 10 },
				],
			},
			{
				location: "Shoulder 1",
				options: [
					{ name: "Apocalypse missile array", cost: 0 },
					{ name: "Melta cannon", cost: 0, td_ek: 20 },
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastun", cost: 0 },
				],
			},
			{
				location: "Shoulder 2",
				options: [
					{ name: "Apocalypse missile array", cost: 0 },
					{ name: "Melta cannon", cost: 0, td_ek: 20 },
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastun", cost: 0 },
				],
			},
			{
				location: "Turrets",
				options: [
					{ name: "Anvilus pattern defence batteries", cost: 0 },
					{ name: "Ardex-defensor bomard turrets", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4010,
		name: "Cerastus Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: DETACHMENT_TYPE.knight,
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
			{
				name: "Armiger Talon",
				unit_ref: 4003,
				options: [{ number: 1, cost: 180, td_ek: 30, size: 3, break_strength: 2 }],
			},
			{
				name: "Moriax Talon",
				unit_ref: 4004,
				options: [{ number: 1, cost: 200, size: 3, break_strength: 2 }],
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
			{
				text: "In addition, a Cerastus Knight Banner may purchase one of the following upgrades:",
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
	// ********************************************************************
	// ************************* UNIQUE DETACHMENTS ***********************
	// ********************************************************************
	{
		id: 9000,
		name: "Demi-company Rhinos",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: DETACHMENT_TYPE.transport,
		base_cost: 10,
		base_size: 1,
		max_size: 31,
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
					{ number: 8, cost: 80, size: 8 },
					{ number: 9, cost: 90, size: 9 },
					{ number: 10, cost: 100, size: 10 },
					{ number: 11, cost: 110, size: 11 },
					{ number: 12, cost: 120, size: 12 },
					{ number: 13, cost: 130, size: 13 },
					{ number: 14, cost: 140, size: 14 },
					{ number: 15, cost: 150, size: 15 },
					{ number: 16, cost: 160, size: 16 },
					{ number: 17, cost: 170, size: 17 },
					{ number: 18, cost: 180, size: 18 },
					{ number: 19, cost: 190, size: 19 },
					{ number: 20, cost: 200, size: 20 },
					{ number: 21, cost: 210, size: 21 },
					{ number: 22, cost: 220, size: 22 },
					{ number: 23, cost: 230, size: 23 },
					{ number: 24, cost: 240, size: 24 },
					{ number: 25, cost: 250, size: 25 },
					{ number: 26, cost: 260, size: 26 },
					{ number: 27, cost: 270, size: 27 },
					{ number: 28, cost: 280, size: 28 },
					{ number: 29, cost: 290, size: 29 },
					{ number: 30, cost: 300, size: 30 },
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
		id: 9001,
		name: "Storm Eagle Dedicated Transports",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: DETACHMENT_TYPE.air,
		base_cost: 100,
		base_size: 1,
		max_size: 10,
		main_unit: [1016],
		related_unit: [],
		dataslate_loadout: [
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
				unit_ref: 1016,
				options: [
					{ number: 1, cost: 100, size: 1 },
					{ number: 2, cost: 200, size: 2 },
					{ number: 3, cost: 300, size: 3 },
					{ number: 4, cost: 400, size: 4 },
					{ number: 5, cost: 500, size: 5 },
					{ number: 6, cost: 600, size: 6 },
					{ number: 7, cost: 700, size: 7 },
					{ number: 8, cost: 800, size: 8 },
					{ number: 9, cost: 900, size: 9 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Storm Eagle Squadron can purchase the following upgrades:",
				options: [
					{ text: "1 additional Storm Eagle", cost: 100 },
					{ text: "2 additional Storm Eagle", cost: 200 },
				],
			},
		],
	},
	{
		id: 9002,
		name: "Thunderhawk Dedicated Transports",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: DETACHMENT_TYPE.air,
		base_cost: 150,
		base_size: 1,
		max_size: 10,
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
					{ number: 2, cost: 300, size: 2 },
					{ number: 3, cost: 450, size: 3 },
					{ number: 4, cost: 600, size: 4 },
					{ number: 5, cost: 750, size: 5 },
					{ number: 6, cost: 900, size: 6 },
					{ number: 7, cost: 1050, size: 7 },
					{ number: 8, cost: 1200, size: 8 },
					{ number: 9, cost: 1350, size: 9 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Legion Storm Eagle Squadron can purchase the following upgrades:",
				options: [
					{ text: "1 additional Thunderhawk Gunship", cost: 150 },
					{ text: "2 additional Thunderhawk Gunship", cost: 280 },
				],
			},
		],
	},
	{
		id: 9003,
		name: "Tank Commander",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: DETACHMENT_TYPE.hq,
		base_cost: 10,
		base_size: 1,
		max_size: 1,
		break_strength: 0,
		main_unit: [],
		related_unit: [],
		dataslate_loadout: [],
		upgrade_options: [],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 9004,
		name: "Legion Drop Pod Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: DETACHMENT_TYPE.transport,
		base_cost: 6,
		base_size: 1,
		max_size: 31,
		break_strength: 0,
		main_unit: [1025],
		related_unit: [1027],
		dataslate_loadout: [
			{
				text_option: ["Turrent Mounted twin bolter"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Drop Pod",
				unit_ref: 1025,
				options: [
					{ number: 1, cost: 6, size: 1 },
					{ number: 2, cost: 12, size: 2 },
					{ number: 3, cost: 18, size: 3 },
					{ number: 4, cost: 24, size: 4 },
					{ number: 5, cost: 30, size: 5 },
					{ number: 6, cost: 36, size: 6 },
					{ number: 7, cost: 42, size: 7 },
					{ number: 8, cost: 48, size: 8 },
					{ number: 9, cost: 54, size: 9 },
					{ number: 10, cost: 60, size: 10 },
					{ number: 11, cost: 66, size: 11 },
					{ number: 12, cost: 72, size: 12 },
					{ number: 13, cost: 78, size: 13 },
					{ number: 14, cost: 84, size: 14 },
					{ number: 15, cost: 90, size: 15 },
					{ number: 16, cost: 96, size: 16 },
					{ number: 17, cost: 102, size: 17 },
					{ number: 18, cost: 108, size: 18 },
					{ number: 19, cost: 114, size: 19 },
					{ number: 20, cost: 120, size: 20 },
					{ number: 21, cost: 126, size: 21 },
					{ number: 22, cost: 132, size: 22 },
					{ number: 23, cost: 138, size: 23 },
					{ number: 24, cost: 144, size: 24 },
					{ number: 25, cost: 150, size: 25 },
					{ number: 26, cost: 156, size: 26 },
					{ number: 27, cost: 162, size: 27 },
					{ number: 28, cost: 168, size: 28 },
					{ number: 29, cost: 174, size: 29 },
					{ number: 30, cost: 180, size: 30 },
				],
			},
			{
				name: "Palisade Drop Pod",
				unit_ref: 1027,
				options: [
					{ number: 1, cost: 32, size: 1 },
					{ number: 2, cost: 64, size: 2 },
					{ number: 3, cost: 96, size: 3 },
					{ number: 4, cost: 128, size: 4 },
					{ number: 5, cost: 160, size: 5 },
					{ number: 6, cost: 192, size: 6 },
					{ number: 7, cost: 224, size: 7 },
					{ number: 8, cost: 256, size: 8 },
					{ number: 9, cost: 288, size: 9 },
					{ number: 10, cost: 320, size: 10 },
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
		id: 9005,
		name: "Dreadnought Drop Pod Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: DETACHMENT_TYPE.transport,
		base_cost: 6,
		base_size: 1,
		max_size: 31,
		break_strength: 0,
		main_unit: [1026],
		related_unit: [1027],
		dataslate_loadout: [
			{
				text_option: ["Turrent Mounted twin bolter"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Drop Pod",
				unit_ref: 1025,
				options: [
					{ number: 1, cost: 7, size: 1 },
					{ number: 2, cost: 14, size: 2 },
					{ number: 3, cost: 21, size: 3 },
					{ number: 4, cost: 28, size: 4 },
					{ number: 5, cost: 35, size: 5 },
					{ number: 6, cost: 42, size: 6 },
					{ number: 7, cost: 49, size: 7 },
					{ number: 8, cost: 56, size: 8 },
					{ number: 9, cost: 63, size: 9 },
					{ number: 10, cost: 70, size: 10 },
					{ number: 11, cost: 77, size: 11 },
					{ number: 12, cost: 84, size: 12 },
					{ number: 13, cost: 91, size: 13 },
					{ number: 14, cost: 98, size: 14 },
					{ number: 15, cost: 105, size: 15 },
					{ number: 16, cost: 112, size: 16 },
					{ number: 17, cost: 119, size: 17 },
					{ number: 18, cost: 126, size: 18 },
					{ number: 19, cost: 133, size: 19 },
					{ number: 20, cost: 140, size: 20 },
					{ number: 21, cost: 147, size: 21 },
					{ number: 22, cost: 154, size: 22 },
					{ number: 23, cost: 161, size: 23 },
					{ number: 24, cost: 168, size: 24 },
					{ number: 25, cost: 175, size: 25 },
					{ number: 26, cost: 182, size: 26 },
					{ number: 27, cost: 189, size: 27 },
					{ number: 28, cost: 196, size: 28 },
					{ number: 29, cost: 203, size: 29 },
					{ number: 30, cost: 210, size: 30 },
				],
			},
			{
				name: "Palisade Drop Pod",
				unit_ref: 1027,
				options: [
					{ number: 1, cost: 32, size: 1 },
					{ number: 2, cost: 64, size: 2 },
					{ number: 3, cost: 96, size: 3 },
					{ number: 4, cost: 128, size: 4 },
					{ number: 5, cost: 160, size: 5 },
					{ number: 6, cost: 192, size: 6 },
					{ number: 7, cost: 224, size: 7 },
					{ number: 8, cost: 256, size: 8 },
					{ number: 9, cost: 288, size: 9 },
					{ number: 10, cost: 320, size: 10 },
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
		id: 9006,
		name: "Auxilia Dracosan Detachment",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: DETACHMENT_TYPE.dedicated,
		base_cost: 37,
		base_size: 1,
		max_size: 30,
		main_unit: [2019],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Hull Mounted twin lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Dracosan",
				unit_ref: 2019,
				options: [
					{ number: 1, cost: 37, size: 1 },
					{ number: 2, cost: 74, size: 2 },
					{ number: 3, cost: 111, size: 3 },
					{ number: 4, cost: 148, size: 4 },
					{ number: 5, cost: 185, size: 5 },
					{ number: 6, cost: 222, size: 6 },
					{ number: 7, cost: 259, size: 7 },
					{ number: 8, cost: 296, size: 8 },
					{ number: 9, cost: 333, size: 9 },
					{ number: 10, cost: 370, size: 10 },
					{ number: 11, cost: 407, size: 11 },
					{ number: 12, cost: 444, size: 12 },
					{ number: 13, cost: 481, size: 13 },
					{ number: 14, cost: 518, size: 14 },
					{ number: 15, cost: 555, size: 15 },
					{ number: 16, cost: 592, size: 16 },
					{ number: 17, cost: 629, size: 17 },
					{ number: 18, cost: 666, size: 18 },
					{ number: 19, cost: 703, size: 19 },
					{ number: 20, cost: 704, size: 20 },
					{ number: 21, cost: 777, size: 21 },
					{ number: 22, cost: 814, size: 22 },
					{ number: 23, cost: 851, size: 23 },
					{ number: 24, cost: 888, size: 24 },
					{ number: 25, cost: 925, size: 25 },
					{ number: 26, cost: 962, size: 26 },
					{ number: 27, cost: 999, size: 27 },
					{ number: 28, cost: 1036, size: 28 },
					{ number: 29, cost: 1073, size: 29 },
				],
			},
		],
		loadout_options: [
			{
				location: "Hull",
				options: [
					{ name: "Twin lascannons", cost: 0 },
					{ name: "Demolisher Cannon", cost: 5 },
				],
			},
		],
		datasheet_info: [
			{
				text: "Any Dracosan may exchange its Hull Mounted twin lascannon for a Hull Mounted demolisher cannon for +5pts per model. Any model that does replaces its Transport (4) special rule with the Transport (2) special rule",
			},
		],
	},
]
