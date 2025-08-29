import { ALLEGIANCE, FACTION, FORMATION, FORMATION_RULES, SLOT_TYPE, SUBFACTION_TYPE } from "@type/types"

const legendRules: FORMATION_RULES = {
	name: "Formation of Legend",
	text: "Each Formation of Legend consists of two elements: Standard Detachments and Expanded Detachments. When a Formation of Legend is added to your Army Roster, you can either add only the Standard Detachments for the points cost listed, or the Standard Detachments and the Expanded Detachments, paying the total points cost for the Standard Detachments, plus the additional points cost for the Expanded Detachments. A player may choose not to include every Detachment listed under the Expanded Detachments section, but the points cost is not reduced if they do so. You can only include each Formation of Legend once in your army.",
}

// 7000-7999
// 7000 - Astartes - Seeker-Killer Clave Ultor
// 7001 - Astartes - Proioxis Macro-Assault Wing
// 7002 - Astartes - Harrow Group Arcadus
// 7003 - Solar - Tallarn Reborn Carmine Ambush Tercio
// 7004 - Solar - Galibed Oathsworn Thyreos Siege Breaker Company
// 7005 - Mechanicum - Demi-manaple Aeterna
// 7006 - Mechanicum - Exsomnis-tertia Cybernetica Cohort
// 7007 - DarkMech - Sibilans Taghma
// 7008 - Astartes - Death Guard Reaping Host
export const legends: FORMATION[] = [
	{
		id: 7000,
		name: "Seeker-Killer Clave Ultor",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.ironHands,
		allegiance: ALLEGIANCE.loyalist,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7000, 7001, 7002] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7000, 7002] },
		],
		rules: [
			legendRules,
			{
				name: "Sons of Ferrus Manus",
				text: "This Formation must be from the Iron Hands Legion and can only be included in an Army with the Loyalist Allegiance.",
			},
			{
				name: "Seeker-killers",
				text: "Detachments from this Formation have the Macro-extinction Targeting Protocols special rule.",
			},
		],
		legend: true,
	},
	{
		id: 7001,
		name: "Proioxis Macro-Assault Wing",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.ironWar,
		allegiance: ALLEGIANCE.traitor,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7003, 7004, 7003, 7004] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7003, 7004, 7005] },
		],
		rules: [
			legendRules,
			{
				name: "Sons of Perturabo",
				text: "This Formation must be from the Iron Warriors Legion and can only be included in an Army with the Traitor Allegiance",
			},
			{
				name: "Hammerblow Assault",
				text: "Legion Terminator models from this Formation increase their CAF by 2 during any round in which they Disembarked form a Spartan model form this Formation.",
			},
		],
		legend: true,
	},
	{
		id: 7002,
		name: "Harrow Group Arcadus",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.alphaLegion,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7006, 7006, 7007, 7008] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7009, 7007, 7008] },
		],
		rules: [
			legendRules,
			{
				name: "Protean Instrument",
				text: "This Formation must be from the Alpha Legion",
			},
			{
				name: "Obfuscation Protocols",
				text: "Detachments from this Formation have the Outflank and Scout special rules.",
			},
		],
		legend: true,
	},
	{
		id: 7003,
		name: "Tallarn Reborn Carmine Ambush Tercio",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: ALLEGIANCE.loyalist,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [9004, 7010, 7011, 7012] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7013, 7013] },
		],
		rules: [
			legendRules,
			{
				name: "Defenders of Tallarn",
				text: "This formation can only be included in an Army with the Loyalist Allegiance",
			},
			{
				name: "Ambush Tercio",
				text: "Detachments from this Formation have the Forward Deployment and Scout special rules",
			},
		],
		legend: true,
	},
	{
		id: 7004,
		name: "Galibed Oathsworn Thyreos Siege Breaker Company",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7014, 7015, 7016] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7014, 7015] },
		],
		rules: [
			legendRules,
			{
				name: "Despoilers of Tallarn",
				text: "This formation can only be included in an Army with the Traitor Allegiance",
			},
		],
		legend: true,
	},
	{
		id: 7005,
		name: "Demi-maniple Aeterna",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.loyalist,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7017, 7018, 7019] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7020, 7021, 7022] },
		],
		rules: [
			legendRules,
			{
				name: "Defenders of Magma City",
				text: "This Formation can only be included in an Army with the Loyalist Allegiance",
			},
			{
				name: "Children of the Storm",
				text: "Once per game, when a Titan from this Formation finishes its activation during the Combat phase, it may immediately fire one of its weapons again.",
			},
		],
		legend: true,
	},
	{
		id: 7006,
		name: "Exsomnis-tertia Cybernetica Cohort",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.loyalist,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7023, 7024, 7025, 7025, 7026] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7027, 7025, 7025, 7024, 7026, 7028] },
		],
		rules: [
			legendRules,
			{
				name: "Defenders of Magma City",
				text: "This Formation can only be included in an Army with the Loyalist Allegiance",
			},
		],
		legend: true,
	},
	{
		id: 7007,
		name: "Sibilans Taghma",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7029, 7030, 7030, 7031, 7032] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7034, 7032, 7032, 7031] },
		],
		rules: [
			legendRules,
			{
				name: "Servants of Kelbor-Hal",
				text: "This Formation can only be included in an Army with the Traitor Allegiance",
			},
			{
				name: "Protocol - Scourge",
				text: `While a Detachment from this Formation with the Networked Anima special rule is within 8" of a model with the Noosphere Controller special rule from this Formation, all models in that Detachment increase the range of their weapons by 4"`,
			},
		],
		legend: true,
	},
	{
		id: 7008,
		name: "Death Guard Reaping Host",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.deathGuard,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7035, 7036, 7037, 7038] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7036, 7039, 7039, 7037, 7038] },
		],
		rules: [
			legendRules,
			{
				name: "Sons of the Pale King",
				text: "This Formation must be from the Death Guard Legion.",
			},
			{
				name: "Shattering Volleys",
				text: "Missile Launchers models in this Formation are equipped with gain the Demolisher special rule while their Detachment is not Garrisoned within a Structure.",
			},
		],
		legend: true,
	},
	{
		id: 7009,
		name: "White Scars Chogorian Warband",
		faction: FACTION.astartes,
		subfaction: SUBFACTION_TYPE.whiteScars,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7040, 7040, 7041, 7042] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7043, 7044, 7045, 7046] },
		],
		rules: [
			legendRules,
			{ name: "Sons of the Khan", text: "This Formation must be from the White Scars Legion." },
			{
				name: "Ride the Wind",
				text: "Standard Detachments in this Formation gain the Forward Deployment special rule.",
			},
		],
		legend: true,
	},
]
