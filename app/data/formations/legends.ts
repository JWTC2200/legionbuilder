import { ALLEGIANCE, FACTION, FORMATION, FORMATION_RULES, SLOT_TYPE, SUBFACTION_TYPE } from "@type/types"

const legendRules: FORMATION_RULES = {
	name: "Formation of Legend",
	text: "Each Formation of Legend consists of two elements: Standard Detachments and Expanded Detachments. When a Formation of Legend is added to your Army Roster, you can either add only the Standard Detachments for the points cost listed, or the Standard Detachments and the Expanded Detachments, paying the total points cost for the Standard Detachments, plus the additional points cost for the Expanded Detachments. A player may choose not to include every Detachment listed under the Expanded Detachments section, but the points cost is not reduced if they do so. You can only include each Formation of Legend once in your army.",
}

// 7000-7999

// CONTENTS //

// 7000 - Astartes - Seeker-Killer Clave Ultor
// 7001 - Astartes - Proioxis Macro-Assault Wing
// 7002 - Astartes - Harrow Group Arcadus
// 7003 - Solar - Tallarn Reborn Carmine Ambush Tercio
// 7004 - Solar - Galibed Oathsworn Thyreos Siege Breaker Company
// 7005 - Mechanicum - Demi-manaple Aeterna
// 7006 - Mechanicum - Exsomnis-tertia Cybernetica Cohort
// 7007 - DarkMech - Sibilans Taghma
// 7008 - Astartes - Death Guard Reaping Host
// 7009 - Astartes - White Scars Chogorian Warband
// 7010 - Astartes - Legion Tactical Strike Force
// 7011 - Astartes - Legion Stonebreaker Siege Force
// 7012 - Astartes - Legion Speartip Assault
// 7013 - Solar - Solar Pattern Sub-Cohort
// 7014 - Solar - Ultima Pattern Sub-Cohort
// 7015 - Solar - Mechanised Pattern Sub-Cohort
// 7016 - Solar - Cthonian Headhunters Sub-Cohort
// 7017 - Solar - Theta-Garmon Deathless Sub-Cohort
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
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7029, 7030, 7030, 7031, 7032, 7033] },
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
	{
		id: 7010,
		name: "Legion Tactical Strike Force",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7047, 7048, 7044, 7045, 7044, 7045] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7049, 7052, 7050, 7053, 7051] },
		],
		rules: [
			legendRules,
			{
				name: "Officer of the Line",
				text: "The Command Squad model in this Formation can use the Master Tactician special rule twice when it is activated, but it if does, both Detachments selected to have their order replaced must be from this Formation",
			},
			{
				name: "Backbone of the Legion",
				text: "Legion Tactical Detachments from this Formation have the Line special rule.",
			},
		],
		legend: true,
	},
	{
		id: 7011,
		name: "Legion Stonebreaker Siege Force",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7054, 7044, 7055, 7056] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7057, 7058, 7059, 7056] },
		],
		rules: [
			legendRules,
			{
				name: "Shattering Barrage",
				text: "When making a Fight roll for an enemy model that is Garrisoned within a Structure that is in a Fight against an Infantry model from this Formation, the controlling player does not gain the Structure Bonus to that model's CAF if that Structure has lost any wounds",
			},
		],
		legend: true,
	},
	{
		id: 7012,
		name: "Legion Speartip Assault",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7060, 7061, 7062, 7061, 7062, 7063] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7064, 7066, 7065, 7066, 7063] },
		],
		rules: [
			legendRules,
			{
				name: "Tip of the Spear",
				text: "All Detachments in this Formation must start the battle deployed within their Dedicated Transports. WHen a Detachment from this Formation Deep Strikes, after placing the first model, that model does not Scatter",
			},
		],
		legend: true,
	},
	{
		id: 7013,
		name: "Solar Pattern Sub-Cohort",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7067, 7068, 7069, 7070, 7069, 7070] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7067, 7068, 7071, 7070, 7069, 7070] },
		],
		rules: [
			legendRules,
			{
				name: "Elite Commander",
				text: "Legate Commander Detachments from the Expanded Detachments in this Formation do not count towards the maximum number permitted in an Army.",
			},
		],
		legend: true,
	},
	{
		id: 7014,
		name: "Ultima Pattern Sub-Cohort",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7072, 7073, 7074, 7074, 7074] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7073, 7075, 7075, 7075] },
		],
		rules: [
			legendRules,
			{
				name: "Volley Fire",
				text: "While an Auxilia Lasrile Tercio Detachment in this Formation contains 5 or more Auxiliaries models, Auxilia lasrifles that models in that Detachment are equipped with have the Rapid Fire rule",
			},
		],
		legend: true,
	},
	{
		id: 7015,
		name: "Mechanised Pattern Sub-Cohort",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7076, 7077, 7078] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7079, 7080, 7081] },
		],
		rules: [
			legendRules,
			{
				name: "Mechanised Tercios",
				text: "While a Detachment from this Formation contains a Tank Commander model, that Detachment has the Nimble and Steadfast special rules.",
			},
		],
		legend: true,
	},
	{
		id: 7016,
		name: "Cthonian Headhunters Sub-Cohort",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7082, 7083, 7084, 7085, 7086] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7082, 7083, 7084, 7085, 7087] },
		],
		rules: [
			legendRules,
			{
				name: "Favoured of the Warmaster",
				text: "This Formation can only be included in an Army with the Traitor Allegiance",
			},
			{
				name: "Overwhelming Aggression",
				text: "Infantry and Walker Detachments in this Formation gain the Furious Charge special rule",
			},
		],
		legend: true,
	},
	{
		id: 7017,
		name: "Theta-Garmon Deathless Sub-Cohort",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: ALLEGIANCE.loyalist,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [7088, 7089, 7089, 7089, 7090] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7091, 7090, 7092, 7092] },
		],
		rules: [
			legendRules,
			{
				name: "Defenders of Beta-Garmon",
				text: "This Formation can only be included in an Army with the Loyalist Allegiance.",
			},
			{
				name: "Deathless",
				text: 'Detachments in this Formation gain the Feel No Pain special rule while any models from that Detachment are within 10" of any enemy Deatchments in an Army with the Traitor Allegiance.',
			},
		],
		legend: true,
	},
]
