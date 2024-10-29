// ********************************************************************
// ********************** MECHANICUM FORMATIONS ***********************
// ********************************************************************

// 3000-3999

import { FACTION, FORMATION, SLOT_TYPE } from "@type/types"

export const mechanicum: FORMATION[] = [
	{
		id: 3000,
		name: "Autokratorii Regiment",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [3005, 3005, 3005] },
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3012, 3000, 3010, 3010, 3002, 3002, 3011, 3005],
			},
			{
				slot_type: SLOT_TYPE.choice,
				slot_id: [4001, 4000, 4000],
				text: "ONE Titan slot or TWO Knight slots",
			},
		],
		rules: [
			{
				name: "Cortex Controller",
				text: "One Vehicle model from a Compulsory Detachment may be upgraded with the Cortex Controllers special rule for + 10 points",
			},
		],
	},
	{
		id: 3001,
		name: "Legio Cybernetica Cohort",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [3000, 3001, 3013, 3013] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [3000, 3000, 3013, 3014, 3001, 3001, 3010, 3010] },
			{
				slot_type: SLOT_TYPE.choice,
				slot_id: [3013, 3013, 3014, 3014],
				text: "TWO Support slots or TWO Vanguard slots",
			},
			{ slot_type: SLOT_TYPE.optional, slot_id: [4001] },
		],
		rules: [
			{
				name: "Legio Cybernetica",
				text: `All slots within this Formation, apart from Core, Transport and Titan slots, must be filled with Detachments that have either the Cortex Controller or Cybernetica Cortex (X) special rule. The range of Cortex Controller's effects for all models within the Formation is 12" instead of 9"`,
			},
		],
	},
	{
		id: 3002,
		name: "Taghma Sub-covenant",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [3000, 3015, 3015, 3002, 3002] },
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3000, 3001, 3002, 3009, 3003, 3005, 3010, 3016],
			},
			{
				slot_type: SLOT_TYPE.choice,
				slot_id: [4001, 4000, 4000],
				text: "One Titan slot or TWO Knight slots",
			},
		],
		rules: [
			{
				name: "Dedicated Transports",
				text: "Detachments within the Formation that contain only Infantry or Walker models may be upgraded with Triaros Armoured Conveyors as Dedicated Transports",
			},
		],
	},
	{
		id: 3003,
		name: "Ordo Reductor Subdivision",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [3000, 3002, 3009, 3009] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [3000, 3002, 3002, 3009, 3005] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [4001, 8102], text: "One of the following" },
		],
		rules: [],
	},
]
