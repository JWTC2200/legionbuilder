// ********************************************************************
// *************** COLLEGIA TITANICA FORMATION SLOTS ******************
// ********************************************************************

// 8000-8100

import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "@type/types"

export const collegiaTitanica: FORMATION_SLOT[] = [
	{
		id: 8000,
		type: DETACHMENT_TYPE.titan,
		faction: FACTION.collegiaTitanica,
		restricted: true,
		options: [4003],
		description: "Dire Wolf",
	},
	{
		id: 8001,
		type: DETACHMENT_TYPE.titan,
		faction: FACTION.collegiaTitanica,
		restricted: true,
		options: [4002],
		description: "Warhound",
	},
	{
		id: 8002,
		type: DETACHMENT_TYPE.titan,
		faction: FACTION.collegiaTitanica,
		restricted: true,
		options: [4006],
		description: "Warlord",
	},
	{
		id: 8003,
		type: DETACHMENT_TYPE.titan,
		faction: FACTION.collegiaTitanica,
		restricted: true,
		options: [4004],
		description: "Reaver",
	},
	{
		id: 8004,
		type: DETACHMENT_TYPE.titan,
		faction: FACTION.collegiaTitanica,
		restricted: true,
		options: [4005],
		description: "Warbringer",
	},
	{
		id: 8005,
		type: DETACHMENT_TYPE.titan,
		faction: FACTION.collegiaTitanica,
		restricted: true,
		options: [4008],
		description: "Warmaster",
	},
]
