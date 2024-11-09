import { FACTION, FORMATION, SLOT_TYPE } from "@type/types"
import { supportFormationText } from "@data/formations/formationRules"

// ********************************************************************
// ****************** COLLEGIA TITANICA FORMATIONS ********************
// ********************************************************************

// 8000-8099

export const collegiaTitanica: FORMATION[] = [
	{
		id: 8000,
		name: "Axiom Battleline Maniple",
		faction: FACTION.collegiaTitanica,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [8002, 8003, 8001] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [8003, 4000, 4000] },
		],
		rules: [],
	},
	{
		id: 8001,
		name: "Lupercal Light Maniple",
		faction: FACTION.collegiaTitanica,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [8001, 8001] },
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [8000, 8000, 4000],
			},
		],
		rules: [],
	},
	{
		id: 8002,
		name: "Purgiatus Heavy Maniple",
		faction: FACTION.collegiaTitanica,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [8005] },
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [8005, 8002, 8004, 8004],
			},
		],
		rules: [],
	},
	{
		id: 8003,
		name: "Ruptura Battleline Maniple",
		faction: FACTION.collegiaTitanica,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [8004, 8004] },
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [8003, 8003, 8003, 4000],
			},
		],
		rules: [],
	},
	{
		id: 8004,
		name: "Ferrox Light Maniple",
		faction: FACTION.collegiaTitanica,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [8003, 8001] },
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [8003, 8000, 4000],
			},
		],
		rules: [],
	},
	{
		id: 8005,
		name: "Corsair Battleline Maniple",
		faction: FACTION.collegiaTitanica,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [8003, 8003] },
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [8003, 8003, 8003, 4000],
			},
		],
		rules: [],
	},
	{
		id: 8006,
		name: "Collegia Titanica Support Cohorts",
		faction: FACTION.collegiaTitanica,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [4001, 8006, 8006] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [3001, 3001, 4001, 4001] },
			{
				slot_type: SLOT_TYPE.choice,
				slot_id: [8006, 8006, 8007, 8007],
				text: "TWO Support slots or TWO Bastion slots",
			},
		],
		rules: [
			supportFormationText(FACTION.collegiaTitanica),
			{
				name: "Bound Taghma",
				text:
					"All slots within this Support Formation, apart from Titan Detachment slots, must be filled\n" +
					"by Detachments taken from the Mechanicum Taghmata Army List. Non-Core Detachments taken from the\n" +
					"Mechanicum Taghmata Army List must have the Cybernetica Cortex (X) special rule",
			},
			{
				name: "Cortex Controller",
				text:
					"All Titan Detachments within this Support Formation gain the Cortex Controller special rule. A Titan model\n" +
					'from this Support Formation counts its Tactical Strength as equal to its remaining Wounds while within 3" of a\n' +
					"non-Titan Detachment from this Support Formation.",
			},
		],
	},
]
