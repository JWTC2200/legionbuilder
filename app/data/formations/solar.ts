import { FACTION, FORMATION, SLOT_TYPE } from "@type/types"

// ********************************************************************
// ******************* SOLAR AUXILIA FORMATIONS **********************
// ********************************************************************

// 2000-2999

export const solar: FORMATION[] = [
	{
		id: 2000,
		name: "Solar Auxilia Sub-Cohort",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [2000, 9003, 9003, 2002] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [2010, 2010, 2010, 2002, 2002, 2005, 2001] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [2004, 2003], text: "Up to one of the following" },
			{ slot_type: SLOT_TYPE.choice, slot_id: [2007, 2005, 2008], text: "Up to one of the following" },
		],
		rules: [
			{
				name: "Disciplined Ranks",
				text: " Compulsory Core Detachment slots within this Formation must be filled with Auxilia Lasrifle Tercio Detachments",
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
			{ slot_type: SLOT_TYPE.choice, slot_id: [2005, 2007, 2008], text: "Up to one of the following" },
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
			{ slot_type: SLOT_TYPE.choice, slot_id: [2005, 2007, 2008], text: "Up to one of the following" },
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
	{
		id: 2006,
		name: "Solar Auxilia Leman Russ Spearhead",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [9004, 9015, 9015, 9015] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [2004, 2005, 2006, 2008] },
		],
		rules: [
			{
				name: "Armored Company",
				text: "Leman Russ slots in this Formation must be filled with Leman Russ Strike Squadrons, Leman Russ Executioner Squadrons, Leman Russ Demolisher Squadrons, Leman Russ Annihilator Squadrons or Leman Russ Exterminator Squadrons",
			},
			{
				name: "Tank Commander",
				text: " One Vehicle model from a Compulsory Detachment must be upgraded to a Tank Commander for +10 points (see page 178 of the Legions Imperialis Rulebook).",
			},
		],
	},
	{
		id: 2007,
		name: "Solar Auxilia Titan Hunter Company",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [9004, 9016, 9016, 9016] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [2006, 2006] },
		],
		rules: [
			{
				name: "Tank Commander",
				text: " One Super-heavy Vehicle model from a Compulsory Detachment must be upgraded to a Tank Commander for +10 points (see page 178 of the Legions Imperialis Rulebook).",
			},
			{
				name: "Titan Hunters",
				text: "If an Auxilia Shadowsword Detachment from this Formation that is issued with a First Fire Order is firing at a Titan Detachment, volcano cannon that models in the Auxilia Shadowsword Detachment are equipped with are treated as having the Accurate weapon trait",
			},
		],
	},
]
