import { ALLEGIANCE, FACTION, FORMATION, FORMATION_RULES, SLOT_TYPE, SUBFACTION_TYPE } from "@type/types"

const legendRules: FORMATION_RULES = {
	name: "Formation of Legend",
	text: "Each Formation of Legend consists of two elements: Standard Detachments and Expanded Detachments. When a Formation of Legend is added to your Army Roster, you can either add only the Standard Detachments for the points cost listed, or the Standard Detachments and the Expanded Detachments, paying the total points cost for the Standard Detachments, plus the additional points cost for the Expanded Detachments. A player may choose not to include every Detachment listed under the Expanded Detachments section, but the points cost is not reduced if they do so. You can only include each Formation of Legend once in your army.",
}

// 7000-7999
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
	},
]
