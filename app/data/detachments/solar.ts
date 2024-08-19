import { DETACHMENT, DETACHMENT_TYPE, FACTION } from "@type/types"

// solar 2000-2999,
export const solar: DETACHMENT[] = [
	{
		id: 2000,
		name: "Legate Commander Detachment",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.hq],
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
		detachment_type: [DETACHMENT_TYPE.hq],
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
		detachment_type: [DETACHMENT_TYPE.core],
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
		detachment_type: [DETACHMENT_TYPE.support],
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
		detachment_type: [DETACHMENT_TYPE.support],
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
		detachment_type: [DETACHMENT_TYPE.bastion],
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
		detachment_type: [DETACHMENT_TYPE.bastion],
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
		detachment_type: [DETACHMENT_TYPE.vanguard],
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
		detachment_type: [DETACHMENT_TYPE.battle],
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
		detachment_type: [DETACHMENT_TYPE.battle],
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
		detachment_type: [DETACHMENT_TYPE.heavy],
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
		detachment_type: [DETACHMENT_TYPE.air],
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
		detachment_type: [DETACHMENT_TYPE.air],
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
		detachment_type: [DETACHMENT_TYPE.air],
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
		detachment_type: [DETACHMENT_TYPE.air],
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
		detachment_type: [DETACHMENT_TYPE.transport],
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
		detachment_type: [DETACHMENT_TYPE.transport],
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
		detachment_type: [DETACHMENT_TYPE.support],
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
		detachment_type: [DETACHMENT_TYPE.battle],
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
		name: "Auxilia Valdor Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
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
		detachment_type: [DETACHMENT_TYPE.heavy],
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
		detachment_type: [DETACHMENT_TYPE.artillery],
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
					{ text: "Increase the Detachment size by 4", cost: 130 },
					{ text: "Increase the Detachment size by 8", cost: 260 },
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
		detachment_type: [DETACHMENT_TYPE.artillery],
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
					{ number: 4, cost: 140, size: 4 },
					{ number: 8, cost: 280, size: 8 },
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
	{
		id: 2023,
		name: "Leman Russ Exterminator Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 175,
		base_size: 4,
		max_size: 10,
		main_unit: [2026],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Exterminator autocannon", "Hull Mounted heavy bolter or Hull Mounted lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Leman Russ",
				unit_ref: 2026,
				options: [
					{ number: 2, cost: 85, size: 2 },
					{ number: 4, cost: 160, size: 4 },
					{ number: 6, cost: 220, size: 6 },
				],
			},
		],
		loadout_options: [
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
				text: "A Leman Russ Exterminator Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 85 },
					{ text: "4 additional Leman Russ", cost: 160 },
					{ text: "6 additional Leman Russ", cost: 220 },
				],
			},
		],
	},
	{
		id: 2024,
		name: "Leman Russ Executioner Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 175,
		base_size: 4,
		max_size: 10,
		main_unit: [2027],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Executioner plasma cannon", "Hull Mounted heavy bolter or Hull Mounted lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Leman Russ",
				unit_ref: 2027,
				options: [
					{ number: 2, cost: 85, size: 2 },
					{ number: 4, cost: 160, size: 4 },
					{ number: 6, cost: 220, size: 6 },
				],
			},
		],
		loadout_options: [
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
				text: "A Leman Russ Executioner Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 85 },
					{ text: "4 additional Leman Russ", cost: 160 },
					{ text: "6 additional Leman Russ", cost: 220 },
				],
			},
		],
	},
	{
		id: 2025,
		name: "Leman Russ Demolisher Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 175,
		base_size: 4,
		max_size: 10,
		main_unit: [2028],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Demolisher cannon", "Hull Mounted heavy bolter or Hull Mounted lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Leman Russ",
				unit_ref: 2028,
				options: [
					{ number: 2, cost: 85, size: 2 },
					{ number: 4, cost: 160, size: 4 },
					{ number: 6, cost: 220, size: 6 },
				],
			},
		],
		loadout_options: [
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
				text: "A Leman Russ Demolisher Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 85 },
					{ text: "4 additional Leman Russ", cost: 160 },
					{ text: "6 additional Leman Russ", cost: 220 },
				],
			},
		],
	},
	{
		id: 2026,
		name: "Leman Russ Annihilator Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 175,
		base_size: 4,
		max_size: 10,
		main_unit: [2029],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Annihilator twin lascannon", "Hull Mounted heavy bolter or Hull Mounted lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Leman Russ",
				unit_ref: 2029,
				options: [
					{ number: 2, cost: 85, size: 2 },
					{ number: 4, cost: 160, size: 4 },
					{ number: 6, cost: 220, size: 6 },
				],
			},
		],
		loadout_options: [
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
				text: "A Leman Russ Annihilator Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 85 },
					{ text: "4 additional Leman Russ", cost: 160 },
					{ text: "6 additional Leman Russ", cost: 220 },
				],
			},
		],
	},
	{
		id: 2027,
		name: "Auxilia Shadowsword Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.heavy],
		base_cost: 140,
		base_size: 1,
		max_size: 3,
		main_unit: [2030],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Volcano cannnon",
					"Hull Mounted heavy bolter turret",
					"Shadowsword heavy bolter sponsons",
					"Lascannon sponson turrets",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Shadowsword",
				unit_ref: 2030,
				options: [
					{ number: 1, cost: 130, size: 1 },
					{ number: 2, cost: 260, size: 2 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Auxilia Shadowsword Squadron can purchase the following upgrades:",
				options: [
					{ text: "1 additional Shadowsword", cost: 130 },
					{ text: "2 additional Shadowsword", cost: 260 },
				],
			},
		],
	},
	{
		id: 2028,
		name: "Auxilia Stormsword Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.heavy],
		base_cost: 100,
		base_size: 1,
		max_size: 3,
		main_unit: [2031],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Stormsword siege cannon",
					"Hull Mounted heavy bolter turret",
					"Shadowsword heavy bolter sponsons",
					"Lascannon sponson turrets",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Stormsword",
				unit_ref: 2031,
				options: [
					{ number: 1, cost: 90, size: 1 },
					{ number: 2, cost: 180, size: 2 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Auxilia Stormsword Squadron can purchase the following upgrades:",
				options: [
					{ text: "1 additional Stormsword", cost: 90 },
					{ text: "2 additional Stormsword", cost: 180 },
				],
			},
		],
	},
	{
		id: 2029,
		name: "Auxilia Stormblade Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.heavy],
		base_cost: 120,
		base_size: 1,
		max_size: 3,
		main_unit: [2032],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Plasma blastgun",
					"Hull Mounted heavy bolter turret",
					"Shadowsword heavy bolter sponsons",
					"Lascannon sponson turrets",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Stormblade",
				unit_ref: 2032,
				options: [
					{ number: 1, cost: 110, size: 1 },
					{ number: 2, cost: 220, size: 2 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Auxilia Stormblade Squadron can purchase the following upgrades:",
				options: [
					{ text: "1 additional Stormblade", cost: 110 },
					{ text: "2 additional Stormblade", cost: 220 },
				],
			},
		],
	},
]
