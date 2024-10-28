import { FACTION, FORMATION, SLOT_TYPE } from "@type/types"

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
]
