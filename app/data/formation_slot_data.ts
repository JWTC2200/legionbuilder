import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "@type/types"
import { astartes } from "@data/formationSlots/astartes"
import { solar } from "@data/formationSlots/solar"
import { uniqueSlots } from "@data/formationSlots/uniqueSlots"
import { legends } from "@data/formationSlots/legends"

export const formationSlotData: FORMATION_SLOT[] = [
	...astartes,
	...solar,
	...uniqueSlots,
	...legends,

	// ********************************************************************
	// ************************* KNIGHTS/TITAN SLOTS **********************
	// ********************************************************************
	{
		id: 4000,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.strategic,
		restricted: false,
		options: [],
	},
	{
		id: 4001,
		type: DETACHMENT_TYPE.titan,
		faction: FACTION.strategic,
		restricted: false,
		options: [],
	},
	// ********************************************************************
	// ************************ QUICK STARTER SLOTS ***********************
	// ********************************************************************
	{
		id: 1,
		type: DETACHMENT_TYPE.hq,
		faction: FACTION.astartes,
		restricted: true,
		options: [1000],
		description: "Legion",
	},
	{
		id: 2,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.astartes,
		restricted: true,
		options: [1002],
		description: "Legion",
	},
	{
		id: 3,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.astartes,
		restricted: true,
		options: [1012, 1013],
		description: "Legion",
	},
	{
		id: 4,
		type: DETACHMENT_TYPE.hq,
		faction: FACTION.solar,
		restricted: true,
		options: [2000, 2001],
		description: "Solar",
	},
	{
		id: 5,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.solar,
		restricted: true,
		options: [2002],
		description: "Solar",
	},
	{
		id: 6,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.solar,
		restricted: true,
		options: [2008, 2009],
		description: "Solar",
	},
	{
		id: 7,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.astartes,
		restricted: true,
		options: [1009],
		description: "Legion",
	},
	{
		id: 8,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.solar,
		restricted: true,
		options: [2007],
		description: "Solar",
	},
]
