// ********************************************************************
// ******************* DARK MECHANICUM DETACHMENTS ********************
// ********************************************************************

// 5000-5999

import { ALLEGIANCE, DETACHMENT, DETACHMENT_TYPE, FACTION } from "@type/types"

export const darkMechanicum: DETACHMENT[] = [
	{
		id: 5000,
		name: "Archmagos Prime",
		faction: FACTION.darkMechanicum,
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
		id: 5001,
		name: "Archmagos Prime on Abeyant",
		faction: FACTION.darkMechanicum,
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
		id: 5002,
		name: "Adsecularis Tech-thrall Covenant",
		faction: FACTION.darkMechanicum,
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
		id: 5003,
		name: "Thallax Cohort",
		faction: FACTION.darkMechanicum,
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
		id: 5004,
		name: "Tech-Priest Auxilia",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 15,
		base_size: 1,
		max_size: 3,
		main_unit: [3004],
		related_unit: [],
		dataslate_loadout: [],
		upgrade_options: [
			{
				name: "Additional Tech-Priest",
				unit_ref: 3004,
				options: [
					{ number: 1, cost: 15, size: 1 },
					{ number: 2, cost: 30, size: 2 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 5005,
		name: "Myrmidon Secutor Host",
		faction: FACTION.darkMechanicum,
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
		id: 5006,
		name: "Myrmidon Destructor Host",
		faction: FACTION.darkMechanicum,
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
		id: 5007,
		name: "Ursarax Cohort",
		faction: FACTION.darkMechanicum,
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
		id: 5008,
		name: "Karacnos Assault-tank Squadron",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 40,
		base_size: 1,
		max_size: 4,
		main_unit: [3014],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Lightning locks", "Karacnos mortar battery", "Shock ram"] }],
		upgrade_options: [
			{
				name: "Additional Karacnos",
				unit_ref: 3014,
				options: [
					{ number: 1, cost: 40, size: 1 },
					{ number: 2, cost: 70, size: 2 },
					{ number: 3, cost: 100, size: 3 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [
			{
				text: "A Karacnos Assault-tank Squadron can purchase one of the following upgrades:",
				options: [
					{ text: "1 additional Karacnos", cost: 40 },
					{ text: "2 additional Karacnos", cost: 70 },
					{ text: "3 additional Karacnos", cost: 100 },
				],
			},
		],
	},
	{
		id: 5009,
		name: "Krios Battle-tank Squadron",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 100,
		base_size: 3,
		max_size: 9,
		main_unit: [3015],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Krios lightning cannon or Irad-scourer", "Volkite caliver sponsons"] }],
		upgrade_options: [
			{
				name: "Additional Krios",
				unit_ref: 3015,
				options: [
					{ number: 3, cost: 90, size: 3 },
					{ number: 6, cost: 170, size: 6 },
				],
			},
		],
		loadout_options: [
			{
				location: "Hull",
				options: [
					{ name: "Lightning cannon", cost: 0 },
					{ name: "Irad-scourer", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Krios Battle-tank Squadron can purchase one of the following upgrades:",
				options: [
					{ text: "3 additional Krios", cost: 90 },
					{ text: "6 additional Krios", cost: 170 },
				],
			},
		],
	},
	{
		id: 5010,
		name: "Triaros Armoured Conveyor",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 15,
		base_size: 1,
		max_size: 20,
		main_unit: [3017],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Twin-linked volkite calivers", "Twin-linked mauler bolt cannon"] }],
		upgrade_options: [
			{
				name: "Additional Triaros",
				unit_ref: 3017,
				options: [
					{ number: 1, cost: 15, size: 1 },
					{ number: 2, cost: 30, size: 2 },
					{ number: 3, cost: 45, size: 3 },
					{ number: 4, cost: 60, size: 4 },
					{ number: 5, cost: 75, size: 5 },
					{ number: 6, cost: 90, size: 6 },
					{ number: 7, cost: 105, size: 7 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [{ text: "Additional Triaros at 15pts per model." }],
	},
	{
		id: 5011,
		name: "Scintillax 'Cyclops' Noospheric Stalker Network",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.hq],
		base_cost: 75,
		base_size: 1,
		max_size: 6,
		main_unit: [5000],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Scintillax lascutter or Exo-planar cannon or Storm laser"] }],
		upgrade_options: [
			{
				name: "Additional Scintillax",
				unit_ref: 5000,
				options: [
					{ number: 1, cost: 70, size: 1 },
					{ number: 2, cost: 130, size: 2 },
					{ number: 3, cost: 190, size: 3 },
					{ number: 4, cost: 260, size: 4 },
					{ number: 5, cost: 320, size: 5 },
				],
			},
		],
		loadout_options: [
			{
				location: "hull",
				options: [
					{ name: "Scintillax lascutter", cost: 0 },
					{ name: "Exo-planar cannon", cost: 0 },
					{ name: "Storm laser", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Scintillax 'Cyclops' Noospheric Stalker Network can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 6",
				options: [
					{ text: "1 additional Scintillax", cost: 70 },
					{ text: "2 additional Scintillax", cost: 130 },
					{ text: "3 additional Scintillax", cost: 190 },
				],
			},
		],
	},
	{
		id: 5012,
		name: "Errax 'Butcher' Assault Stalker Company",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.core],
		base_cost: 45,
		base_size: 1,
		max_size: 9,
		main_unit: [5001],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Errax meltagun or Stalker maxima bolters or Errax lascutters"] }],
		upgrade_options: [
			{
				name: "Additional Errax",
				unit_ref: 5001,
				options: [
					{ number: 1, cost: 45, size: 1 },
					{ number: 2, cost: 80, size: 2 },
					{ number: 3, cost: 115, size: 3 },
					{ number: 4, cost: 160, size: 4 },
					{ number: 5, cost: 195, size: 5 },
					{ number: 6, cost: 230, size: 6 },
					{ number: 7, cost: 275, size: 7 },
					{ number: 8, cost: 310, size: 8 },
				],
			},
		],
		loadout_options: [
			{
				location: "hull",
				options: [
					{ name: "Errax meltagun", cost: 0 },
					{ name: "Stalker maxima bolters", cost: 0 },
					{ name: "Errax lascutters", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Errax 'Butcher' Assault Stalker Company can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 9",
				options: [
					{ text: "1 additional Errax", cost: 45 },
					{ text: "2 additional Errax", cost: 80 },
					{ text: "3 additional Errax", cost: 115 },
				],
			},
		],
	},
	{
		id: 5013,
		name: "Harpax 'Swarmer' Scout Host",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.vanguard],
		base_cost: 30,
		base_size: 4,
		max_size: 10,
		main_unit: [5002],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Exo-planar repeaters or Harpax lascutters"] }],
		upgrade_options: [
			{
				name: "Additional Harpax",
				unit_ref: 5002,
				options: [
					{ number: 2, cost: 15, size: 2 },
					{ number: 4, cost: 25, size: 4 },
					{ number: 6, cost: 35, size: 6 },
				],
			},
		],
		loadout_options: [
			{
				location: "Weapon",
				options: [
					{ name: "Exo-planar repeaters", cost: 0 },
					{ name: "Harpax Lascutter", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Harpax 'Swarmer' Scout Host can purchase one of the following upgrades:",
				options: [
					{ text: "2 additional Harpax", cost: 15 },
					{ text: "4 additional Harpax", cost: 25 },
					{ text: "6 additional Harpax", cost: 35 },
				],
			},
		],
	},
	{
		id: 5014,
		name: "Tenebrax 'Archer' Battle Stalker Company",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.light],
		base_cost: 35,
		base_size: 1,
		max_size: 6,
		main_unit: [5003],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Storm laser flenser",
					"Exo-planar cannon or Stalker maxima bolters or Volkite culverins",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Tenebrax",
				unit_ref: 5003,
				options: [
					{ number: 1, cost: 35, size: 1 },
					{ number: 2, cost: 65, size: 2 },
					{ number: 3, cost: 90, size: 3 },
					{ number: 4, cost: 125, size: 4 },
					{ number: 5, cost: 155, size: 5 },
				],
			},
		],
		loadout_options: [
			{
				location: "hull",
				options: [
					{ name: "Exo-planar cannon", cost: 0 },
					{ name: "Stalker maxma bolters", cost: 0 },
					{ name: "Volkite culverins", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Tenebrax 'Archer' Battle Stalker Company can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 6",
				options: [
					{ text: "1 additional Tenebrax", cost: 35 },
					{ text: "2 additional Tenebrax", cost: 65 },
					{ text: "3 additional Tenebrax", cost: 90 },
				],
			},
		],
	},
	{
		id: 5015,
		name: "Serperos 'Overlord' Heavy Stalker Maniple",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.heavy],
		base_cost: 175,
		base_size: 2,
		max_size: 6,
		main_unit: [5004],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Exo-planar bombard or Storm laser array", "Serperos lascutters or Irradiation engine"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Serperos",
				unit_ref: 5003,
				options: [
					{ number: 1, cost: 85, size: 1 },
					{ number: 2, cost: 150, size: 2 },
					{ number: 3, cost: 230, size: 3 },
					{ number: 4, cost: 300, size: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Hull",
				options: [
					{ name: "Exo-planar bombard", cost: 0 },
					{ name: "Storm laser array", cost: 0 },
				],
			},
			{
				location: "Belly",
				options: [
					{ name: "Serperos lascutters", cost: 0 },
					{ name: "Irradiation engine", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Serperos 'Overlord' Heavy Stalker Maniple can purchase any of the following upgrades. It may purchase the same upgrade multiple times, to a maximum Detachment size of 6",
				options: [
					{ text: "1 additional Serperos", cost: 85 },
					{ text: "2 additional Serperos", cost: 150 },
					{ text: "3 additional Serperos", cost: 230 },
				],
			},
		],
	},

	// unique detachments
	{
		id: 5900,
		name: "Controller Host",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.hq],
		base_cost: 15,
		base_size: 1,
		max_size: 1,
		break_strength: 0,
		main_unit: [],
		related_unit: [],
		dataslate_loadout: [],
		upgrade_options: [
			{
				name: "Additional Controller Hosts",
				unit_ref: 5002,
				options: [
					{ number: 1, cost: 15, size: 0 },
					{ number: 2, cost: 30, size: 0 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 5901,
		name: "Triaros Armoured Conveyor",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: null,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.dedicated],
		base_cost: 15,
		base_size: 1,
		max_size: 20,
		main_unit: [3017],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Twin-linked volkite calivers", "Twin-linked mauler bolt cannon"] }],
		upgrade_options: [
			{
				name: "Additional Triaros",
				unit_ref: 3017,
				options: [
					{ number: 1, cost: 15, size: 1 },
					{ number: 2, cost: 30, size: 2 },
					{ number: 3, cost: 45, size: 3 },
					{ number: 4, cost: 60, size: 4 },
					{ number: 5, cost: 75, size: 5 },
					{ number: 6, cost: 90, size: 6 },
					{ number: 7, cost: 105, size: 7 },
					{ number: 8, cost: 120, size: 8 },
					{ number: 9, cost: 135, size: 9 },
					{ number: 10, cost: 150, size: 10 },
					{ number: 11, cost: 165, size: 11 },
					{ number: 12, cost: 180, size: 12 },
					{ number: 13, cost: 195, size: 13 },
					{ number: 14, cost: 210, size: 14 },
					{ number: 15, cost: 225, size: 15 },
					{ number: 16, cost: 240, size: 16 },
					{ number: 17, cost: 255, size: 17 },
					{ number: 18, cost: 270, size: 18 },
					{ number: 19, cost: 285, size: 19 },
					{ number: 20, cost: 300, size: 20 },
					{ number: 21, cost: 315, size: 21 },
				],
			},
		],
		loadout_options: [],
		datasheet_info: [{ text: "Additional Triaros at 15pts per model." }],
	},
]
