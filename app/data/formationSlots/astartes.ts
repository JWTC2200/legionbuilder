import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "@type/types"

// ********************************************************************
// ******************** ASTARTES FORMATION SLOTS **********************
// ********************************************************************

// 1000-1999

export const astartes: FORMATION_SLOT[] = [
	{
		id: 1000,
		type: DETACHMENT_TYPE.hq,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},
	{
		id: 1001,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},
	{
		id: 1002,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},
	{
		id: 1003,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},
	{
		id: 1004,
		type: DETACHMENT_TYPE.light,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},
	{
		id: 1005,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},
	{
		id: 1006,
		type: DETACHMENT_TYPE.heavy,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},
	{
		id: 1007,
		type: DETACHMENT_TYPE.artillery,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},
	{
		id: 1008,
		type: DETACHMENT_TYPE.air,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},
	{
		id: 1009,
		type: DETACHMENT_TYPE.bastion,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},
	{
		id: 1010,
		type: DETACHMENT_TYPE.transport,
		faction: FACTION.astartes,
		restricted: false,
		options: [],
	},

	// unique slots

	{
		id: 1011,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.astartes,
		restricted: true,
		options: [1002, 3003],
		description: "Brethren of Iron",
	},
	{
		id: 1012,
		type: DETACHMENT_TYPE.bastion,
		faction: FACTION.astartes,
		restricted: true,
		options: [3013],
		description: "Brethren of Iron",
	},
	{
		id: 1013,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.astartes,
		restricted: true,
		options: [3007, 3008, 3009],
		description: "Brethren of Iron",
	},
	{
		id: 1014,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.astartes,
		restricted: true,
		options: [3011, 3012],
		description: "Brethren of Iron",
	},

	// Legion Armoured Company HQ
	{
		id: 1015,
		type: DETACHMENT_TYPE.hq,
		faction: FACTION.astartes,
		restricted: true,
		options: [1032, 1033, 1034],
	},
]
