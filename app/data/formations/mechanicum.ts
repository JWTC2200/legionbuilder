// ********************************************************************
// ********************** MECHANICUM FORMATIONS ***********************
// ********************************************************************

// 3000-3999

import { FACTION, FORMATION, SLOT_TYPE } from "@type/types"
import { supportFormationText } from "@data/formations/formationRules"

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
	{
		id: 3004,
		name: "Itnerant Cybernetica Cohort (support)",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [3017, 3017, 3017] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [3017, 3017, 3018, 3018] },
		],
		rules: [
			{
				name: "Legionbuilder note",
				text: "There is only one Itnerant Cybernetica Cohort formation but it lets you choose between having three support detachments or vanguard detachments as the compulsory slots. So I have split them into two different formations as a work around",
			},
			supportFormationText(FACTION.mechanicum),
			{
				name: "Order Cascade",
				text: `Whenever a Detachment in this Support Formation is activated, the controlling player may choose another friendly Detachment from this Support Formation within 6" of the activated Detachment that has already revealed its Order this round. The activated Detachment may discard its Order token and replace it with a new Order chosen from those shown in the Cybernetica Cortex (X) special rule of the chosen friendly Detachment.`,
			},
			{
				name: "Cybernetica Cortex",
				text: `All Detachments included in this Support Formation must have the Cybernetica Cortex (X) special rule. Detachments within this Support Formation cannot benefit from the Cortex Controller special rule – they cannot be issued Orders other than those from their variant of the Cybernetica Cortex (X) special rule or another variant through the Order Cascade special rule.`,
			},
		],
	},
	{
		id: 3004,
		name: "Itnerant Cybernetica Cohort (vanguard)",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [3018, 3018, 3018] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [3017, 3017, 3018, 3018] },
		],
		rules: [
			{
				name: "Legionbuilder note",
				text: "There is only one Itnerant Cybernetica Cohort formation but it lets you choose between having three support detachments or vanguard detachments as the compulsory slots. So I have split them into two different formations as a work around",
			},
			supportFormationText(FACTION.mechanicum),
			{
				name: "Order Cascade",
				text: `Whenever a Detachment in this Support Formation is activated, the controlling player may choose another friendly Detachment from this Support Formation within 6" of the activated Detachment that has already revealed its Order this round. The activated Detachment may discard its Order token and replace it with a new Order chosen from those shown in the Cybernetica Cortex (X) special rule of the chosen friendly Detachment.`,
			},
			{
				name: "Cybernetica Cortex",
				text: `All Detachments included in this Support Formation must have the Cybernetica Cortex (X) special rule. Detachments within this Support Formation cannot benefit from the Cortex Controller special rule – they cannot be issued Orders other than those from their variant of the Cybernetica Cortex (X) special rule or another variant through the Order Cascade special rule.`,
			},
		],
	},
]
