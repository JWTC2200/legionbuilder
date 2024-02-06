import { FORMATION, FACTION, ALLEGIANCE, SUBFACTION_TYPE, SLOT_TYPE } from "../types/types"

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
	},

	{
		id: 4001,
		name: "Legion Support",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		formation_slots: [{ slot_type: SLOT_TYPE.compulsory, slot_id: [4001] }],
	},
]
