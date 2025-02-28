// ********************************************************************
// *********************** OPEN FORMATION SLOTS ***********************
// ********************************************************************

// 2-5

import { FACTION, FORMATION, SLOT_TYPE } from "@type/types"

const rules = {
	name: "Custom formation",
	text: "This formation is for people who want to use the list builder to create their own custom Formations.",
}

export const customFormations: FORMATION[] = [
	{
		id: 2,
		name: "Custom Legion Formation",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{
				slot_type: SLOT_TYPE.compulsory,
				slot_id: [],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1000, 1000, 1000, 1000, 1000, 1000],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1001, 1001, 1001, 1001, 1001, 1001],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1002, 1002, 1002, 1002, 1002, 1002],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1003, 1003, 1003, 1003, 1003, 1003],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1004, 1004, 1004, 1004, 1004, 1004],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1005, 1005, 1005, 1005, 1005, 1005],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1006, 1006, 1006, 1006, 1006, 1006],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1007, 1007, 1007, 1007, 1007, 1007],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1008, 1008, 1008, 1008, 1008, 1008],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1009, 1009, 1009, 1009, 1009, 1009],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [1010, 1010, 1010, 1010, 1010, 1010],
			},
		],
		rules: [rules],
	},
	{
		id: 3,
		name: "Custom Solar Formation",
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{
				slot_type: SLOT_TYPE.compulsory,
				slot_id: [],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2000, 2000, 2000, 2000, 2000, 2000],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2001, 2001, 2001, 2001, 2001, 2001],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2002, 2002, 2002, 2002, 2002, 2002],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2003, 2003, 2003, 2003, 2003, 2003],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2004, 2004, 2004, 2004, 2004, 2004],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2005, 2005, 2005, 2005, 2005, 2005],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2006, 2006, 2006, 2006, 2006, 2006],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2007, 2007, 2007, 2007, 2007, 2007],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2008, 2008, 2008, 2008, 2008, 2008],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2009, 2009, 2009, 2009, 2009, 2009],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [2010, 2010, 2010, 2010, 2010, 2010],
			},
		],
		rules: [rules],
	},
	{
		id: 4,
		name: "Custom Mechanicum Formation",
		faction: FACTION.mechanicum,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{
				slot_type: SLOT_TYPE.compulsory,
				slot_id: [],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3000, 3000, 3000, 3000, 3000, 3000],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3001, 3001, 3001, 3001, 3001, 3001],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3002, 3002, 3002, 3002, 3002, 3002],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3003, 3003, 3003, 3003, 3003, 3003],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3004, 3004, 3004, 3004, 3004, 3004],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3005, 3005, 3005, 3005, 3005, 3005],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3006, 3006, 3006, 3006, 3006, 3006],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3007, 3007, 3007, 3007, 3007, 3007],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3008, 3008, 3008, 3008, 3008, 3008],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3009, 3009, 3009, 3009, 3009, 3009],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [3010, 3010, 3010, 3010, 3010, 3010],
			},
		],
		rules: [rules],
	},
	{
		id: 5,
		name: "Custom Dark Mechanicum Formation",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{
				slot_type: SLOT_TYPE.compulsory,
				slot_id: [],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5000, 5000, 5000, 5000, 5000, 5000],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5001, 5001, 5001, 5001, 5001, 5001],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5002, 5002, 5002, 5002, 5002, 5002],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5003, 5003, 5003, 5003, 5003, 5003],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5004, 5004, 5004, 5004, 5004, 5004],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5005, 5005, 5005, 5005, 5005, 5005],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5006, 5006, 5006, 5006, 5006, 5006],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5007, 5007, 5007, 5007, 5007, 5007],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5008, 5008, 5008, 5008, 5008, 5008],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5009, 5009, 5009, 5009, 5009, 5009],
			},
			{
				slot_type: SLOT_TYPE.optional,
				slot_id: [5010, 5010, 5010, 5010, 5010, 5010],
			},
		],
		rules: [rules],
	},
]
