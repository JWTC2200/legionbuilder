import { DETACHMENT, DETACHMENT_TYPE, FACTION } from "@type/types"
import { oneFollowingUpgrade, optionsArray, pintleStubberLd, pintleStubberTxt } from "@data/utils"

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
				text_option: ["Volkite chargers"],
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
		related_unit: [9000, 9001, 9002],
		dataslate_loadout: [
			{
				text_option: ["Auxillia lasrifles"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Auxiliaries",
				unit_ref: 2002,
				options: optionsArray(6, 12, 2),
			},
			{
				name: "Additional Auxiliaries with Flamers",
				unit_ref: 9002,
				options: optionsArray(6, 12, 2),
			},
			{
				name: "Additional Veletarii",
				unit_ref: 9000,
				options: optionsArray(6, 12, 2),
			},
			{
				name: "Additional Charonite Ogryns",
				unit_ref: 9001,
				options: optionsArray(6, 30, 2),
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Auxilia Lasrifle Tercio can purchase up to six upgrades from the list below. It may purchase the same upgrade multiple times: Each upgrade increases the Detachment size by 2, by adding the respective models:",
				options: [
					{ text: "Auxiliaries", cost: 12 },
					{ text: "Auxiliaries with Flamers", cost: 12 },
					{ text: "Veletarii", cost: 12 },
					{ text: "Charonite Ogryns", cost: 30 },
				],
				info: "*Models added via these upgrades use the respective profiles below.",
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
		base_cost: 70,
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
				options: optionsArray(2, 30, 2),
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: oneFollowingUpgrade("Auxilia Ogryn Charonite Section"),
				options: [
					{ text: "2 additional Charonite Ogryn", cost: 30 },
					{ text: "4 additional Charonite Ogryn", cost: 60 },
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
				options: optionsArray(2, 15, 2),
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: oneFollowingUpgrade("Veletaris Storm Section"),
				options: [
					{ text: "2 additional Veletarii", cost: 15 },
					{ text: "4 additional Veletarii", cost: 30 },
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
		base_cost: 60,
		base_size: 4,
		max_size: 12,
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
				options: optionsArray(2, 50, 4),
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
					{ text: "4 additional Rapier", cost: 50 },
					{ text: "7 additional Rapier", cost: 100 },
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
		base_cost: 30,
		base_size: 3,
		max_size: 9,
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
				options: optionsArray(2, 25, 3, 0),
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
					{ text: "3 additional Tarantula", cost: 25 },
					{ text: "6 additional Tarantula", cost: 50 },
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
		base_cost: 160,
		base_size: 4,
		max_size: 10,
		main_unit: [2008],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Leman Russ battlecannon", "Hull Mounted heavy bolter or Hull Mounted lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Leman Russ",
				unit_ref: 2008,
				options: optionsArray(3, 70, 2),
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "A Leman Russ Strike Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 70 },
					{ text: "4 additional Leman Russ", cost: 140 },
					{ text: "6 additional Leman Russ", cost: 210 },
				],
			},
			{
				text: pintleStubberTxt("Leman Russ Tank"),
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
		base_cost: 150,
		base_size: 2,
		max_size: 6,
		main_unit: [2009],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Malcador battlecannon",
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
					{ number: 2, cost: 140, size: 2 },
					{ number: 3, cost: 210, size: 3 },
					{ number: 4, cost: 260, size: 4 },
				],
			},
		],
		loadout_options: [
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "A Malcador Tank Squadron can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 6.",
				options: [
					{ text: "1 additional Malcador", cost: 70 },
					{ text: "2 additional Malcador", cost: 140 },
					{ text: "4 additional Malcador", cost: 260 },
				],
			},
			{
				text: pintleStubberTxt("Malcador Tank"),
			},
		],
	},
	{
		id: 2010,
		name: "Auxilia Baneblade Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.heavy],
		base_cost: 100,
		base_size: 1,
		max_size: 3,
		main_unit: [2010],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Hull Mounted demolisher cannon",
					"Hull Mounted heavy bolter turret",
					"Baneblade cannon with Co-axial autocannon",
					"Super-heavy heavy bolter sponsons or super-heavy flamer sponsons or super-heavy autocannon sponsons",
					"Lascannon sponson turrets",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Super-heavy",
				unit_ref: 2010,
				options: optionsArray(2, 90, 1),
			},
		],
		loadout_options: [
			{
				location: "Sponsons",
				options: [
					{ name: "Heavy bolters", cost: 0 },
					{ name: "Heavy flamers", cost: 0 },
					{ name: "Autocannons", cost: 0 },
				],
			},
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: oneFollowingUpgrade("Auxilia Baneblade Squadron"),
				options: [
					{ text: "Increase the Detachment size by 1", cost: 90 },
					{ text: "Increase the Detachment size by 1", cost: 180 },
				],
			},
			{
				text: pintleStubberTxt("Auxilia Baneblade"),
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
				text: "Any Marauder Bomber can be upgraded o a Marauder Pathfinder, Marauder Colossus or Marauder Destroyer, using the respective profile shown below, for free",
			},
			{
				text: "An Auxilia Marauder Squadron Squadron can purchase one of the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 85 },
					{ text: "Increase the Detachment size by 2", cost: 160 },
					{ text: "Increase the Detachment size by 3", cost: 220 },
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
				options: optionsArray(7, 12, 1),
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
		base_cost: 42,
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
				options: optionsArray(7, 42, 1),
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
			{
				location: "Pintle",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Multi-laser", cost: 5 },
				],
			},
		],
		datasheet_info: [
			{
				text: "Any Dracosan may exchange its Hull Mounted twin lascannon for a Hull Mounted demolisher cannon for +5pts per model. Any model that does replaces its Transport (4) special rule with the Transport (2) special rule",
			},
			{
				text: "Any Dracosan may be equipped with one Pintle Mounted multi-laser for +5 points per model",
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
				options: optionsArray(2, 35, 2),
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
				text: oneFollowingUpgrade("Auxilia Cyclops Battery"),
				options: [
					{ text: "Increase the Detachment size by 2", cost: 35 },
					{ text: "Increase the Detachment size by 5", cost: 70 },
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
		base_cost: 60,
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
				options: optionsArray(2, 55, 1),
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "A Malcador Infernus Squadron can purchase one of the following upgrades.",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 55 },
					{ text: "Increase the Detachment size by 2", cost: 110 },
				],
			},
			{ text: pintleStubberTxt("Malcador Infernus") },
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
		base_cost: 60,
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
				options: optionsArray(2, 55, 1),
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "An Auxilia Valdor Squadron can purchase one of the following upgrades.",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 70 },
					{ text: "Increase the Detachment size by 2", cost: 140 },
				],
			},
			{
				text: pintleStubberTxt("Auxilia Valdor"),
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
				options: optionsArray(2, 90, 1),
			},
		],
		loadout_options: [
			{
				location: "Sponsons",
				options: [
					{ name: "Multi-lasers", cost: 0 },
					{ name: "Lascannons", cost: 5 },
				],
			},
			{
				location: "Pintle",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Multi-laser", cost: 5 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Auxilia Stormhammer Squadron can purchase one of the following upgrades.",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 90 },
					{ text: "Increase the Detachment size by 2", cost: 180 },
				],
			},
			{
				text: "Any Stormhammer may exchange its Stormhammer multi-laser sponsons for Stormhammer lascannon sponsons for +5pts per model",
			},
			{
				text: "Any Stormhammer may be equipped with one Pintle Mounted multi-laser for +5 points per model.",
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
		base_cost: 120,
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
				options: optionsArray(2, 110, 4),
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Auxilia Medusa Battery can purchase one of the following upgrades.",
				options: [
					{ text: "Increase the Detachment size by 4", cost: 110 },
					{ text: "Increase the Detachment size by 8", cost: 220 },
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
		base_cost: 130,
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
				options: optionsArray(2, 120, 4),
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Auxilia Basilisk Battery can purchase one of the following upgrades.",
				options: [
					{ text: "Increase the Detachment size by 4", cost: 120 },
					{ text: "Increase the Detachment size by 8", cost: 240 },
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
		base_cost: 160,
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
				options: optionsArray(3, 70, 2),
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "A Leman Russ Exterminator Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 70 },
					{ text: "4 additional Leman Russ", cost: 140 },
					{ text: "6 additional Leman Russ", cost: 210 },
				],
			},
			{
				text: pintleStubberTxt("Leman Russ Exterminator"),
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
		base_cost: 160,
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
				options: optionsArray(3, 70, 2),
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "A Leman Russ Executioner Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 70 },
					{ text: "4 additional Leman Russ", cost: 140 },
					{ text: "6 additional Leman Russ", cost: 210 },
				],
			},
			{
				text: pintleStubberTxt("Leman Russ Executioner"),
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
		base_cost: 165,
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
				options: optionsArray(3, 75, 2),
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "A Leman Russ Demolisher Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 75 },
					{ text: "4 additional Leman Russ", cost: 150 },
					{ text: "6 additional Leman Russ", cost: 225 },
				],
			},
			{
				text: pintleStubberTxt("Leman Russ Demolisher"),
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
		base_cost: 170,
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
				options: optionsArray(3, 75, 2),
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "A Leman Russ Annihilator Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 75 },
					{ text: "4 additional Leman Russ", cost: 150 },
					{ text: "6 additional Leman Russ", cost: 225 },
				],
			},
			{
				text: pintleStubberTxt("Leman Russ Demolisher"),
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
		base_cost: 120,
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
				options: optionsArray(2, 110, 1),
			},
		],
		loadout_options: [pintleStubberLd],
		datasheet_info: [
			{
				text: "A Auxilia Shadowsword Squadron can purchase the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 110 },
					{ text: "Increase the Detachment size by 2", cost: 220 },
				],
			},
			{
				text: pintleStubberTxt("Shadowsword"),
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
				options: optionsArray(2, 90, 1),
			},
		],
		loadout_options: [pintleStubberLd],
		datasheet_info: [
			{
				text: "A Auxilia Stormsword Squadron can purchase the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 90 },
					{ text: "Increase the Detachment size by 2", cost: 180 },
				],
			},
			{
				text: pintleStubberTxt("Stormsword"),
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
		base_cost: 110,
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
				options: optionsArray(2, 100, 1),
			},
		],
		loadout_options: [pintleStubberLd],
		datasheet_info: [
			{
				text: "A Auxilia Stormblade Squadron can purchase the following upgrades:",
				options: [
					{ text: "Increase the Detachment size by 1", cost: 110 },
					{ text: "Increase the Detachment size by 2", cost: 220 },
				],
			},
		],
	},
	{
		id: 2030,
		name: "Leman Russ Vanquisher Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 175,
		base_size: 4,
		max_size: 10,
		main_unit: [2033],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Vanquisher battlecannon", "Hull Mounted heavy bolter or Hull Mounted lascannon"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Leman Russ",
				unit_ref: 2033,
				options: [
					{ number: 2, cost: 85, size: 2 },
					{ number: 4, cost: 170, size: 4 },
					{ number: 6, cost: 230, size: 6 },
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "A Leman Russ Vanquisher Squadron can purchase the following upgrades:",
				options: [
					{ text: "2 additional Leman Russ", cost: 85 },
					{ text: "4 additional Leman Russ", cost: 170 },
					{ text: "6 additional Leman Russ", cost: 230 },
				],
			},
			{
				text: pintleStubberTxt("Leman Russ Vanquisher"),
			},
		],
	},
	{
		id: 2031,
		name: "Malcador Vanquisher Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 160,
		base_size: 2,
		max_size: 6,
		main_unit: [2034],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Malcador Vanquisher Battlecanon",
					"Hull Mounted heavy bolter or Hull Mounted lascannon or Hull Mounted autocannon or Hull Mounted demolisher cannon",
					"Malcador heavy bolter sponsons or Malcador lascannon sponsons or Malcador autocannon sponsons",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Malcador",
				unit_ref: 2034,
				options: [...optionsArray(3, 75, 1), { number: 4, cost: 280, size: 4 }],
			},
		],
		loadout_options: [
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "A Malcador Vanquisher Squadron can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 6.",
				options: [
					{ text: "1 additional Malcador", cost: 75 },
					{ text: "2 additional Malcador", cost: 150 },
					{ text: "4 additional Malcador", cost: 280 },
				],
			},
			{
				text: pintleStubberTxt("Malcador Vanquisher"),
			},
		],
	},
	{
		id: 2032,
		name: "Malcador Annihilator Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 160,
		base_size: 2,
		max_size: 6,
		main_unit: [2035],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Malcador Annihilator Battlecanon",
					"Hull Mounted heavy bolter or Hull Mounted lascannon or Hull Mounted autocannon or Hull Mounted demolisher cannon",
					"Malcador heavy bolter sponsons or Malcador lascannon sponsons or Malcador autocannon sponsons",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Malcador",
				unit_ref: 2035,
				options: [...optionsArray(3, 70, 1), { number: 4, cost: 260, size: 4 }],
			},
		],
		loadout_options: [
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
			pintleStubberLd,
		],
		datasheet_info: [
			{
				text: "A Malcador Annihilator Squadron can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 6.",
				options: [
					{ text: "1 additional Malcador", cost: 70 },
					{ text: "2 additional Malcador", cost: 140 },
					{ text: "4 additional Malcador", cost: 260 },
				],
			},
			{
				text: pintleStubberTxt("Malcador Annihilator"),
			},
		],
	},
	{
		id: 2033,
		name: "Auxilia Hellhammer Squadron",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.heavy],
		base_cost: 100,
		base_size: 1,
		max_size: 3,
		main_unit: [2036],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Hull Mounted demolisher cannon",
					"Hull Mounted heavy bolter turret",
					"Hellhammer cannon with Co-axial autocannon",
					"Super-heavy heavy bolter sponsons or super-heavy flamer sponsons or super-heavy autocannon sponsons",
					"Lascannon sponson turrets",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Super-heavy",
				unit_ref: 2036,
				options: optionsArray(2, 90, 1),
			},
		],
		loadout_options: [
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
				text: oneFollowingUpgrade("Auxilia Hellhammer Squadron"),
				options: [
					{ text: "Increase the Detachment size by 1", cost: 90 },
					{ text: "Increase the Detachment size by 1", cost: 180 },
				],
			},
			{
				text: pintleStubberTxt("Auxilia Hellhammer"),
			},
		],
	},
]
