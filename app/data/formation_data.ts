import { FORMATION, FACTION, SLOT_TYPE } from "@type/types"

export const formationData: FORMATION[] = [
	{
		id: 1,
		name: "Legion Astranii Class Augumented Spearhead",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [1, 2, 3, 4, 5, 6] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7, 8] },
		],
		rules: [],
	},

	// ********************************************************************
	// *********************** ASTARTES FORMATIONS ************************
	// ********************************************************************
	{
		id: 1000,
		name: "Legion Demi-company",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [1000, 1002, 1001, 1001] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [1009, 1001, 1010, 1010, 1002, 1002, 1003, 9000] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [1004, 1008] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [1007, 1005, 1006] },
		],
		rules: [
			{
				name: "Dedicated Transports",
				text: "Any Legiones Astartes Detachment within the Formation that contains only Infantry models may be upgraded with Legion Rhinos as Dedicated Transports.",
			},
			{
				name: "Heart of the Legion",
				text: "Compulsory Core Detachment slots in this Formation must be filled with Legion Tactical Detachments. All non-Infantry models within this Formation increase their Tactical Strength by 1 when contesting an Objective marker that an Infantry model within this Formation is also contesting.",
			},
		],
	},
	{
		id: 1001,
		name: "Legion Garrison Force",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [1000, 1002, 1001, 1009] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [1009, 1009, 1001, 1007, 1002, 1002, 1008] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [1006, 1007] },
		],
		rules: [],
	},
	{
		id: 1002,
		name: "Legion Armoured Company",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [1005, 1005, 1006] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [1004, 1005, 1005, 1006] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [1008, 1006] },
		],
		rules: [],
	},
	{
		id: 1003,
		name: "Legion Aerial Assault",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [1000, 1001, 1001, 1002] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [1001, 1002, 1002, 1003, 1008, 1008, 9001, 9002] },
		],
		rules: [
			{
				name: "Dedicated Transports",
				text: "Any Legiones Astartes Detachment within a Legion Aerial Assault Formation can be upgraded with Legion Storm Eagles or Legion Thunderhawks as Dedicated Transports, at a cost of +100 points per Storm Eagle and +150 points per Legion Thunderhawk",
			},
			{
				name: "Aerial Assault",
				text: "All Detachments within the Formation that do no have the Flyer special rule must bein the game Embarked upon a Transport with the Flyer special rule.",
			},
		],
	},
	{
		id: 1004,
		name: "Legion Sky-hunter Phalanx",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [9006, 9006, 9006, 9006] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [1004, 1004, 1008, 1003] },
		],
		rules: [
			{
				name: "Rapid Reaction Force",
				text: "Compulsory Vanguard Detachment slots in this Formation must be filled with Legion Scimitar Jetbike Squadron, Legion Land Speeder Squadron or Legion Javelin Squadron Detachments",
			},
			{
				name: "Swift Assault",
				text: "All Legion Scimitar Jetbike Squadron, Legion Land Speeder Squadron or Legion Javelin Squadron in this Formation gain the Outflank special rule",
			},
		],
	},
	{
		id: 1005,
		name: "Legion Drop Pod Assault",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [1000, 1001, 1001, 1002] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [1001, 1001, 1002, 1002, 1008, 9007, 9008] },
		],
		rules: [
			{
				name: "Dedicated Transports",
				text: "All Legiones Astartes Detachments within the Formation that contain only Infantry models (excluding models with the Deep Strike special rule) must be upgraded with Legion Drop Pods as Dedicated Transports, and all Legiones Astartes Detachments within the Formation that contain only Walker models (excluding models with the Deep Strike special rule) must be upgraded with Dreadnought Drop Pods as Dedicated Transports.",
			},
		],
	},
	// ********************************************************************
	// ******************* SOLAR AUXILIA FORMATIONS **********************
	// ********************************************************************
	{
		id: 2000,
		name: "Solar Auxilia Sub-Cohort",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [2000, 9003, 9003, 2002] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [2010, 2010, 2010, 2002, 2002, 2005, 2001] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [2004, 2003] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [2007, 2005, 2008] },
		],
		rules: [
			{
				name: "Disciplined Ranks",
				text: " Compulsory COre Detachment slots within this Formation must be filled with Auxilia Lasrifle Tercio Detachments",
			},
		],
	},
	{
		id: 2001,
		name: "Solar Auxilia Armoured Company",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [9004, 2005, 2005, 2006] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [2005, 2005, 2006] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [2005, 2007, 2008] },
		],
		rules: [
			{
				name: "Tank Commander",
				text: "One Vehicle model from a Compulsory Detachment must be upgraded to a Tank Commander for +10 points (see page 178).",
			},
		],
	},
	{
		id: 2002,
		name: "Solar Auxilia Pioneer Company",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [2000, 9005, 2009, 2009] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [2002, 2001, 2008, 2003, 2003] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [2005, 2007, 2008] },
		],
		rules: [
			{
				name: "Forward Positions",
				text: "Compulsory Core Detachment slots in this Formation must be filled with Auxilia Veletaris Storm Sections. All Solar Auxilia Detachments within a Solar Auxilia Pioneer Company that consist entirely of Infantry models gain the Infiltrate special rule. All other Solar Auxilia Detachments within the Solar Auxilia Pioneer Company gain the Forward Deployment special rule",
			},
		],
	},
	{
		id: 2003,
		name: "Solar Auxilia Artillery Company",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [2000, 2007, 2007, 2007] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [2002, 2002, 2009, 2009] },
		],
		rules: [
			{
				name: "Pulverising Volleys",
				text: "Earthshaker cannon and Medusa siege guns that models in this Formation are equipped with do not suffer a -1 penalty to all Hit rolls when firing against a target they cannot draw line of sight to.",
			},
		],
	},
	{
		id: 2004,
		name: "Solar Auxilia Mechanised Infantry Sub-cohort",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [2000, 2001, 2001, 2002] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [2003, 2003, 2002, 2008, 9009] },
		],
		rules: [
			{
				name: "Dedicated Transports",
				text: "All Solar Auxilia Detachments within the Formation that contain only Infantry models (excluding models with the Deep Strike special rule) must be upgraded with Dracosans as Dedicated Transports.",
			},
		],
	},
	{
		id: 2005,
		name: "Solar Auxilia Super-heavy Company",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [9004, 2006, 2006, 2006] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [2006, 2006] },
		],
		rules: [
			{
				name: "Tank Commander",
				text: " One Super-heavy Vehicle model from a Compulsory Detachment must be upgraded to a Tank Commander for +10 points (see page 178 of the Legions Imperialis Rulebook).",
			},
			{
				name: "Mobile Fortifications",
				text: "While two or more models from this Formation are within range of the same Objective marker, increase the Tactical Strength of each model from this Formation that is within range of that Objective marker by 1 when determining which player captures that Objective marker.",
			},
		],
	},
	// ********************************************************************
	// ******************** KNIGHTS/TITAN FORMATIONS **********************
	// ********************************************************************
	{
		id: 4000,
		name: "Knight Household Lance",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		formation_slots: [{ slot_type: SLOT_TYPE.compulsory, slot_id: [4000] }],
		rules: [
			{
				name: "Paragon of Duty",
				text: "Each Knight scion is a master of battle, trained in the tactics of their Household. As such each Knight model within this Formation that has the Independat Special rule always form its own Independent Unit, even if there are several models within a Detachment that have the same name.",
			},
		],
	},

	{
		id: 4001,
		name: "Legion Support",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		formation_slots: [{ slot_type: SLOT_TYPE.compulsory, slot_id: [4001] }],
		rules: [],
	},
]
