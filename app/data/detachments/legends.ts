import { ALLEGIANCE, DETACHMENT, DETACHMENT_TYPE, FACTION, SUBFACTION_TYPE } from "@type/types"

export const legends: DETACHMENT[] = [
	// Iron Hands Seeker-Killer Clave Ultor
	// Standard Detachments
	{
		id: 7000,
		name: "Legion Sicaran Squadron",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.ironHands,
		allegiance: ALLEGIANCE.loyalist,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 270,
		base_size: 4,
		max_size: 4,
		main_unit: [1013],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Hull Mounted heavy bolter",
					"Twin-linked accelerator autocannon",
					"Sponson Mounted lascannon",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Turret",
				options: [{ name: "Twin-linked accelerator autocannon", cost: 0 }],
			},
			{
				location: "Sponsons",
				options: [{ name: "Lascannons", cost: 0 }],
			},
		],
		datasheet_info: [],
	},
	{
		id: 7001,
		name: "Legion Sicaran Squadron",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.ironHands,
		allegiance: ALLEGIANCE.loyalist,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 180,
		base_size: 4,
		max_size: 4,
		main_unit: [1013],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Hull Mounted heavy bolter", "Omega plasma array", "Sponson Mounted lascannon"],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Turret",
				options: [{ name: "Omega plasma array", cost: 0 }],
			},
			{
				location: "Sponsons",
				options: [{ name: "Lascannons", cost: 0 }],
			},
		],
		datasheet_info: [],
	},
	{
		id: 7002,
		name: "Legion Sabre Squadron",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.ironHands,
		allegiance: ALLEGIANCE.loyalist,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.light],
		base_cost: 0,
		base_size: 4,
		max_size: 4,
		main_unit: [1031],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Hull Mounted neutron blaster", "Hull Mounted multi-melta", "Sabre missiles"],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Main",
				options: [{ name: "Neutron blaster", cost: 0 }],
			},
			{
				location: "Hull",
				options: [{ name: "Multi-melta", cost: 0 }],
			},
		],
		datasheet_info: [],
	},

	// Iron Warriors Proioxis Macro-Assault Wing
	{
		id: 7003,
		name: "Legion Terminator Detachment",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.ironWar,
		allegiance: ALLEGIANCE.traitor,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 200,
		base_size: 4,
		max_size: 4,
		main_unit: [1003],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Legion combi-bolters"] }],
		upgrade_options: [],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 7004,
		name: "Legion Spartan Detachment",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.ironWar,
		allegiance: ALLEGIANCE.traitor,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 0,
		base_size: 2,
		max_size: 2,
		main_unit: [1023],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Sponson Mounted quad lascannon", "Hull Mounted lascannon"],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Sponsons",
				options: [{ name: "Quad lascannons", cost: 0 }],
			},
			{
				location: "Hull",
				options: [{ name: "Lascannon", cost: 0 }],
			},
			{
				location: "Pintle",
				options: [{ name: "None", cost: 0 }],
			},
		],
		datasheet_info: [],
	},
	{
		id: 7005,
		name: "Legion Kratos Squadron",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.ironWar,
		allegiance: ALLEGIANCE.traitor,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.heavy],
		base_cost: 200,
		base_size: 3,
		max_size: 3,
		main_unit: [1014],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Kratos battlecannon with Co-axial autocannon ",
					"Two Kratos lascannon",
					"Sponson Mounted lascannon",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Turret",
				options: [{ name: "Kratos battlecannon", cost: 0 }],
			},
			{
				location: "Sponson",
				options: [{ name: "Lascannons", cost: 0 }],
			},
			{
				location: "Hull",
				options: [{ name: "Lascannons", cost: 0 }],
			},
		],
		datasheet_info: [],
	},

	// Alpha Legion Harrow Group Arcadus
	{
		id: 7006,
		name: "Legion Sicaran Punisher Squadron",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.alphaLegion,
		allegiance: ALLEGIANCE.traitor,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.battle],
		base_cost: 165,
		base_size: 4,
		max_size: 4,
		main_unit: [1029],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Hull Mounted heavy bolter", "Punisher rotary cannon", "Sponson Mounted heavy bolters"],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Sponsons",
				options: [{ name: "Heavy bolters", cost: 0 }],
			},
		],
		datasheet_info: [],
	},
	{
		id: 7007,
		name: "Legion Plasma Gun Support Detachment",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.alphaLegion,
		allegiance: ALLEGIANCE.traitor,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.support],
		base_cost: 300,
		base_size: 8,
		max_size: 8,
		main_unit: [1005],
		related_unit: [],
		dataslate_loadout: [{ text_option: ["Plasma gun"] }],
		upgrade_options: [],
		loadout_options: [],
		datasheet_info: [],
	},
	{
		id: 7008,
		name: "Legion Land Raider Detachment",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.alphaLegion,
		allegiance: ALLEGIANCE.traitor,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.transport],
		base_cost: 0,
		base_size: 4,
		max_size: 4,
		main_unit: [1024],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Sponson Mounted twin-linked lascannon"],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Pintle",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Multi-melta", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 7009,
		name: "Legion Sabre Squadron",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.alphaLegion,
		allegiance: ALLEGIANCE.traitor,
		unique: true,
		detachment_type: [DETACHMENT_TYPE.light],
		base_cost: 0,
		base_size: 4,
		max_size: 4,
		main_unit: [1031],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Hull Mounted Anvilus autocannon", "Hull Mounted heavy bolter", "Sabre missiles"],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Main",
				options: [{ name: "Anvilus autocannon", cost: 0 }],
			},
			{
				location: "hull",
				options: [{ name: "Heavy bolters", cost: 0 }],
			},
		],
		datasheet_info: [],
	},
]
