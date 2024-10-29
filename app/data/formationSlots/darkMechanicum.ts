// ********************************************************************
// ***************** DARK MECHANICUM FORMATION SLOTS ******************
// ********************************************************************

// 5000-5999

import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "@type/types"

export const darkMechanicum: FORMATION_SLOT[] = [
	{
		id: 5000,
		type: DETACHMENT_TYPE.hq,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 5001,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 5002,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 5003,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 5004,
		type: DETACHMENT_TYPE.light,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 5005,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 5006,
		type: DETACHMENT_TYPE.heavy,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 5007,
		type: DETACHMENT_TYPE.artillery,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 5008,
		type: DETACHMENT_TYPE.air,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 5009,
		type: DETACHMENT_TYPE.bastion,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},
	{
		id: 5010,
		type: DETACHMENT_TYPE.transport,
		faction: FACTION.darkMechanicum,
		restricted: false,
		options: [],
	},

	// unique slots

	{
		id: 5900,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.darkMechanicum,
		restricted: true,
		options: [5012],
		description: "Errax",
	},
	{
		id: 5901,
		type: DETACHMENT_TYPE.hq,
		faction: FACTION.darkMechanicum,
		restricted: true,
		options: [5900],
		description: "Harpax Controller Host",
	},
	{
		id: 5902,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.darkMechanicum,
		restricted: true,
		options: [5002],
		description: "Adsecularis Tech-thrall Covenant",
	},
	{
		id: 5903,
		type: DETACHMENT_TYPE.dedicated,
		faction: FACTION.darkMechanicum,
		restricted: true,
		options: [5901],
		description: "Triaros Armoured Conveyors",
	},
]
