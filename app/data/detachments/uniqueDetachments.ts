import { DETACHMENT, DETACHMENT_TYPE, FACTION } from "@type/types"
import { optionsArray } from "@data/utils"

// unique detachments 9000-9999
// mostly for dedicated transports

export const uniqueDetachments: DETACHMENT[] = [
	{
		id: 9000,
		name: "Demi-company Rhinos",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.transport],
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
				options: optionsArray(30, 10, 1),
			},
		],
		loadout_options: [
			{
				location: "Pintle",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Havoc launcher", cost: 5 },
					{ name: "Multi-melta", cost: 5 },
				],
			},
			{
				location: "Hull",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Hunter-killer", cost: 5 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Rhino may be equipped with one of the following:",
				options: [
					{ text: "Pintle mounted havoc launcher", cost: 5 },
					{ text: "Pintle mounted multi-melta", cost: 5 },
				],
			},
			{ text: "A Rhino may be equipped with one hunter-killed missile for +5 points per model." },
		],
	},
	{
		id: 9001,
		name: "Storm Eagle Dedicated Transports",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.dedicated],
		base_cost: 85,
		base_size: 1,
		max_size: 10,
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
				options: optionsArray(9, 85, 1, 0),
			},
		],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 9002,
		name: "Thunderhawk Dedicated Transports",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.dedicated],
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
				options: optionsArray(9, 150, 1, 0),
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
		detachment_type: [DETACHMENT_TYPE.hq],
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
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 10,
		base_size: 1,
		max_size: 31,
		break_strength: 0,
		main_unit: [1025],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Turret Mounted twin bolter"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Drop Pod",
				unit_ref: 1025,
				options: optionsArray(39, 10, 1, 0),
			},
		],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 9005,
		name: "Dreadnought Drop Pod Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 12,
		base_size: 1,
		max_size: 31,
		break_strength: 0,
		main_unit: [1026],
		related_unit: [1027],
		dataslate_loadout: [
			{
				text_option: ["Turret Mounted twin bolter"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Drop Pod",
				unit_ref: 1026,
				options: optionsArray(29, 12, 1, 0),
			},
		],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 9006,
		name: "Auxilia Dracosan Detachment",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.dedicated],
		base_cost: 42,
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
				options: optionsArray(29, 42, 1),
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
		id: 9007,
		name: "Legion Spartan Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 70,
		base_size: 1,
		max_size: 20,
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
				options: optionsArray(19, 70, 1),
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
					{ name: "Lascannon", cost: 0 },
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
		id: 9008,
		name: "Legion Land Raider Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 35,
		base_size: 1,
		max_size: 20,
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
				options: optionsArray(19, 35, 1),
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
		id: 9009,
		name: "Legion Termite Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 14,
		base_size: 1,
		max_size: 30,
		main_unit: [1032],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Termite twin-linked bolters"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Termites",
				unit_ref: 1032,
				options: optionsArray(29, 14, 1),
			},
		],
		loadout_options: [],
		datasheet_info: [],
	},
]
