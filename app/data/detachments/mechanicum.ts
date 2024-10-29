// ********************************************************************
// ********************** MECHANICUM DETACHMENTS **********************
// ********************************************************************

// mechanicum 3000-3999

import { DETACHMENT, DETACHMENT_TYPE, FACTION } from "@type/types"

export const mechanicum: DETACHMENT[] = [
	{
		id: 3000,
		name: "Archmagos Prime",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.hq],
		base_cost: 25,
		base_size: 1,
		max_size: 1,
		main_unit: [3000],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Volkite Serpenta"] }],
		upgrade_options: [],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 3001,
		name: "Archmagos Prime on Abeyant",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.hq],
		base_cost: 45,
		base_size: 1,
		max_size: 1,
		main_unit: [3001],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Volkite Serpenta", "Meltagun"] }],
		upgrade_options: [],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 3002,
		name: "Adsecularis Tech-thrall Covenant",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.core],
		base_cost: 30,
		base_size: 4,
		max_size: 10,
		main_unit: [3002],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Las-locks"] }],
		upgrade_options: [
			{
				name: "Additional Tech-Thralls",
				unit_ref: 3002,
				options: [
					{ number: 2, cost: 12, size: 2 },
					{ number: 4, cost: 22, size: 4 },
					{ number: 6, cost: 30, size: 6 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Adsecularis Tech-thrall Covenant can purchase one of the following upgrades:",
				options: [
					{ text: "2 additional Tech-Thralls", cost: 12 },
					{ text: "4 additional Tech-Thralls", cost: 22 },
					{ text: "6 additional Tech-Thralls", cost: 30 },
				],
			},
		],
	},
	{
		id: 3003,
		name: "Thallax Cohort",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.core],
		base_cost: 25,
		base_size: 2,
		max_size: 8,
		main_unit: [3003],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Lightning guns", "Thallax plasma-fusil"] }],
		upgrade_options: [
			{
				name: "Additional Thallax",
				unit_ref: 3003,
				options: [
					{ number: 2, cost: 25, size: 2 },
					{ number: 4, cost: 40, size: 4 },
					{ number: 6, cost: 60, size: 6 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Thallax Cohort can purchase one of the following upgrades:",
				options: [
					{ text: "2 additional Thallax", cost: 25 },
					{ text: "4 additional Thallax", cost: 40 },
					{ text: "6 additional Thallax", cost: 60 },
				],
			},
		],
	},
	{
		id: 3004,
		name: "Tech-Priest Auxilia",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 15,
		base_size: 1,
		max_size: 1,
		main_unit: [3004],
		related_unit: [],
		dataslate_loadout: [],
		upgrade_options: [],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 3005,
		name: "Myrmidon Secutor Host",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 30,
		base_size: 2,
		max_size: 8,
		main_unit: [3005],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Maxima bolters"] }],
		upgrade_options: [
			{
				name: "Additional Myrmidon",
				unit_ref: 3005,
				options: [
					{ number: 2, cost: 25, size: 2 },
					{ number: 4, cost: 40, size: 4 },
					{ number: 6, cost: 60, size: 6 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Myrmidon Secutor Host can purchase one of the following upgrades:",
				options: [
					{ text: "2 additional Myrmidon", cost: 25 },
					{ text: "4 additional Myrmidon", cost: 40 },
					{ text: "6 additional Myrmidon", cost: 60 },
				],
			},
		],
	},
	{
		id: 3006,
		name: "Myrmidon Destructor Host",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 30,
		base_size: 2,
		max_size: 8,
		main_unit: [3006],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Myrmidon volkites or conversion beamers"] }],
		upgrade_options: [
			{
				name: "Additional Myrmidon",
				unit_ref: 3006,
				options: [
					{ number: 2, cost: 25, size: 2 },
					{ number: 4, cost: 40, size: 4 },
					{ number: 6, cost: 60, size: 6 },
				],
			},
		],
		loadout_options: [
			{
				location: "Arm",
				options: [
					{ name: "Myrmidon volkites", cost: 0 },
					{ name: "Conversion beamers", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Myrmidon Destructor Host can purchase one of the following upgrades:",
				options: [
					{ text: "2 additional Myrmidon", cost: 25 },
					{ text: "4 additional Myrmidon", cost: 40 },
					{ text: "6 additional Myrmidon", cost: 60 },
				],
			},
		],
	},
	{
		id: 3007,
		name: "Arlatax Battle-automata Maniple",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 40,
		base_size: 1,
		max_size: 6,
		main_unit: [3007],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Autocannon", "Plasma cannon"] }],
		upgrade_options: [
			{
				name: "Additional Arlatax",
				unit_ref: 3007,
				options: [
					{ number: 1, cost: 35, size: 1 },
					{ number: 2, cost: 65, size: 2 },
					{ number: 3, cost: 100, size: 3 },
					{ number: 4, cost: 110, size: 4 },
					{ number: 5, cost: 145, size: 5 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Arlatax Battle-automata Maniple can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 6",
				options: [
					{ text: "1 additional Arlatax", cost: 35 },
					{ text: "2 additional Arlatax", cost: 65 },
					{ text: "3 additional Arlatax", cost: 100 },
					{ text: "4 additional Arlatax", cost: 110 },
					{ text: "5 additional Arlatax", cost: 145 },
				],
			},
		],
	},
	{
		id: 3008,
		name: "Domitar Battle-automata Maniple",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 35,
		base_size: 1,
		max_size: 6,
		main_unit: [3008],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Missile launchers", "Graviton hammers"] }],
		upgrade_options: [
			{
				name: "Additional Domitar",
				unit_ref: 3008,
				options: [
					{ number: 1, cost: 30, size: 1 },
					{ number: 2, cost: 55, size: 2 },
					{ number: 3, cost: 85, size: 3 },
					{ number: 4, cost: 105, size: 4 },
					{ number: 5, cost: 135, size: 5 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "An Domitar Battle-automata Maniple can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 6",
				options: [
					{ text: "1 additional Domitar", cost: 30 },
					{ text: "2 additional Domitar", cost: 55 },
					{ text: "4 additional Domitar", cost: 105 },
				],
			},
		],
	},
	{
		id: 3009,
		name: "Castellax Battle-automata Maniple",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 70,
		base_size: 2,
		max_size: 8,
		main_unit: [3009],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Mauler bolt cannon", "In-built bolters"] }],
		upgrade_options: [
			{
				name: "Additional Castellax",
				unit_ref: 3009,
				options: [
					{
						number: 2,
						cost: 70,
						size: 2,
					},
					{
						number: 4,
						cost: 130,
						size: 4,
					},
					{
						number: 6,
						cost: 180,
						size: 6,
					},
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Castellax Battle-automata Maniple can purchase one of the following upgrades:",
				options: [
					{
						text: "2 additional Castellax",
						cost: 70,
					},
					{
						text: "4 additional Castellax",
						cost: 130,
					},
					{
						text: "6 additional Castellax",
						cost: 180,
					},
				],
			},
		],
	},
	{
		id: 3010,
		name: "Ursarax Cohort",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.vanguard],
		base_cost: 20,
		base_size: 2,
		max_size: 8,
		main_unit: [3010],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Volkite incinerators"] }],
		upgrade_options: [
			{
				name: "Additional Ursarax",
				unit_ref: 3010,
				options: [
					{ number: 2, cost: 20, size: 2 },
					{ number: 4, cost: 35, size: 4 },
					{ number: 6, cost: 50, size: 6 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Ursarax Cohort can purchase one of the following upgrades:",
				options: [
					{ text: "2 additional Ursarax", cost: 20 },
					{ text: "4 additional Ursarax", cost: 35 },
					{ text: "6 additional Ursarax", cost: 50 },
				],
			},
		],
	},
	{
		id: 3011,
		name: "Vorax Battle-automata Maniple",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.vanguard],
		base_cost: 40,
		base_size: 1,
		max_size: 4,
		main_unit: [3011],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Rotor cannon", "Lightning gun", "Power blade arrays"] }],
		upgrade_options: [
			{
				name: "Additional Vorax",
				unit_ref: 3011,
				options: [
					{ number: 1, cost: 40, size: 1 },
					{ number: 2, cost: 70, size: 2 },
					{ number: 3, cost: 105, size: 3 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Vorax Battle-automata Maniple can purchase one of the following upgrades:",
				options: [
					{ text: "1 additional Vorax", cost: 40 },
					{ text: "2 additional Vorax", cost: 70 },
					{ text: "3 additional Vorax", cost: 105 },
				],
			},
		],
	},
	{
		id: 3012,
		name: "Vultarax Stratos-automata Squadron",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.vanguard],
		base_cost: 35,
		base_size: 1,
		max_size: 4,
		main_unit: [3012],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Arc blasters", "Vultarax havoc launcher"] }],
		upgrade_options: [
			{
				name: "Additional Vultarax",
				unit_ref: 3012,
				options: [
					{ number: 1, cost: 35, size: 1 },
					{ number: 2, cost: 60, size: 2 },
					{ number: 3, cost: 85, size: 3 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Vultarax Stratos-automata Squadron can purchase one of the following upgrades:",
				options: [
					{ text: "1 additional Vultarax", cost: 35 },
					{ text: "2 additional Vultarax", cost: 60 },
					{ text: "3 additional Vultarax", cost: 85 },
				],
			},
		],
	},
	{
		id: 3013,
		name: "Thanatar Siege-automata Maniple",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.bastion],
		base_cost: 110,
		base_size: 2,
		max_size: 8,
		main_unit: [3013],
		related_unit: [],
		dataslate_loadout: [
			{
				text: "Each Thanatar is equipped with the following",
				text_option: ["Plasma mortar", "Mauler bolt cannon"],
			},
			{
				text: "For +5points, a Thanatar may instead be equipped with the following.",
				text_option: ["Sollex heavy-las", "Mauler bolt cannon", "Graviton ram"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Thanatar",
				unit_ref: 3013,
				options: [
					{ number: 1, cost: 55, size: 1 },
					{ number: 2, cost: 100, size: 2 },
					{ number: 3, cost: 155, size: 3 },
					{ number: 4, cost: 185, size: 4 },
					{ number: 5, cost: 240, size: 5 },
				],
			},
		],
		loadout_options: [
			{
				location: "Weapons",
				options: [
					{ name: "Plasma mortar", cost: 0 },
					{ name: "Sollex heavy-las", cost: 5 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Thanatar Siege-automata Maniple can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 8",
				options: [
					{ text: "1 additional Thanatar", cost: 55 },
					{ text: "2 additional Thanatar", cost: 100 },
					{ text: "4 additional Thanatar", cost: 185 },
				],
			},
		],
	},
]
