// ********************************************************************
// ******************* MECHANICUM FORMATION SLOTS *********************
// ********************************************************************

// 3000-3999

import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "@type/types"

export const mechanicum: FORMATION_SLOT[] = [
	{
		id: 3000,
		type: DETACHMENT_TYPE.hq,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 3001,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 3002,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 3003,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 3004,
		type: DETACHMENT_TYPE.light,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 3005,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 3006,
		type: DETACHMENT_TYPE.heavy,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 3007,
		type: DETACHMENT_TYPE.artillery,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 3008,
		type: DETACHMENT_TYPE.air,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 3009,
		type: DETACHMENT_TYPE.bastion,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 3010,
		type: DETACHMENT_TYPE.transport,
		faction: FACTION.mechanicum,
		restricted: false,
		options: [],
	},

	// unique slots

	{
		id: 3011,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.mechanicum,
		restricted: true,
		options: [3004],
		description: "Tech-Priest Auxilia",
	},
	{
		id: 3012,
		type: DETACHMENT_TYPE.hq,
		faction: FACTION.mechanicum,
		restricted: true,
		options: [3901],
		description: "Cortex Controller",
	},
	{
		id: 3013,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.mechanicum,
		restricted: true,
		options: [3004, 3007, 3008, 3009],
		description: "Legio Cybernetica",
	},
	{
		id: 3014,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.mechanicum,
		restricted: true,
		options: [3011, 3012],
		description: "Legio Cybernetica",
	},
	{
		id: 3015,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.mechanicum,
		restricted: true,
		options: [3002],
		description: "Adsecularis Tech-thrall Covenant",
	},
	{
		id: 3016,
		type: DETACHMENT_TYPE.dedicated,
		faction: FACTION.mechanicum,
		restricted: true,
		options: [3902],
		description: "Triaros Armoured Conveyors",
	},
]
