import { DETACHMENT, DETACHMENT_TYPE, FACTION } from "@type/types"

// unique detachments 9000-9999

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
		detachment_type: [DETACHMENT_TYPE.air],
		base_cost: 100,
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
		detachment_type: [DETACHMENT_TYPE.air],
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
		base_cost: 6,
		base_size: 1,
		max_size: 31,
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
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 7,
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
		detachment_type: [DETACHMENT_TYPE.dedicated],
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
	{
		id: 9007,
		name: "Legion Spartan Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 80,
		base_size: 1,
		max_size: 10,
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
					{ number: 8, cost: 640, size: 8 },
					{ number: 9, cost: 720, size: 9 },
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
		id: 9008,
		name: "Legion Land Raider Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 40,
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
				options: [
					{ number: 1, cost: 40, size: 1 },
					{ number: 2, cost: 80, size: 2 },
					{ number: 3, cost: 120, size: 3 },
					{ number: 4, cost: 160, size: 4 },
					{ number: 5, cost: 200, size: 5 },
					{ number: 6, cost: 240, size: 6 },
					{ number: 7, cost: 280, size: 7 },
					{ number: 8, cost: 320, size: 8 },
					{ number: 9, cost: 360, size: 9 },
					{ number: 10, cost: 400, size: 10 },
					{ number: 11, cost: 440, size: 11 },
					{ number: 12, cost: 480, size: 12 },
					{ number: 13, cost: 520, size: 13 },
					{ number: 14, cost: 560, size: 14 },
					{ number: 15, cost: 600, size: 15 },
					{ number: 16, cost: 640, size: 16 },
					{ number: 17, cost: 680, size: 17 },
					{ number: 18, cost: 720, size: 18 },
					{ number: 19, cost: 760, size: 19 },
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
		id: 9009,
		name: "Legion Termite Detachment",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 18,
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
				options: [
					{ number: 1, cost: 18, size: 1 },
					{ number: 2, cost: 36, size: 2 },
					{ number: 3, cost: 54, size: 3 },
					{ number: 4, cost: 72, size: 4 },
					{ number: 5, cost: 90, size: 5 },
					{ number: 6, cost: 108, size: 6 },
					{ number: 7, cost: 126, size: 7 },
					{ number: 8, cost: 144, size: 8 },
					{ number: 9, cost: 162, size: 9 },
					{ number: 10, cost: 180, size: 10 },
					{ number: 11, cost: 198, size: 11 },
					{ number: 12, cost: 216, size: 12 },
					{ number: 13, cost: 234, size: 31 },
					{ number: 14, cost: 252, size: 41 },
					{ number: 15, cost: 270, size: 15 },
					{ number: 16, cost: 288, size: 16 },
					{ number: 17, cost: 306, size: 17 },
					{ number: 18, cost: 324, size: 18 },
					{ number: 19, cost: 342, size: 19 },
					{ number: 20, cost: 360, size: 20 },
					{ number: 21, cost: 378, size: 21 },
					{ number: 22, cost: 396, size: 22 },
					{ number: 23, cost: 414, size: 23 },
					{ number: 24, cost: 432, size: 24 },
					{ number: 25, cost: 450, size: 25 },
					{ number: 26, cost: 468, size: 26 },
					{ number: 27, cost: 486, size: 27 },
					{ number: 28, cost: 504, size: 28 },
					{ number: 29, cost: 522, size: 29 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [],
	},
]
