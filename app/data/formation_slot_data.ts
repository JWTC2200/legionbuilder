import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "@type/types"
import { astartes } from "@data/formationSlots/astartes"
import { solar } from "@data/formationSlots/solar"
import { uniqueSlots } from "@data/formationSlots/uniqueSlots"
import { legends } from "@data/formationSlots/legends"
import { mechanicum } from "@data/formationSlots/mechanicum"
import { collegiaTitanica } from "@data/formationSlots/collegiaTitanica"
import { questorisFamilia } from "@data/formationSlots/questorisFamilia"
import { darkMechanicum } from "@data/formationSlots/darkMechanicum"

export const formationSlotData: FORMATION_SLOT[] = [
	...astartes, // 1000-1999
	...solar, //2000-2999
	...mechanicum, //3000-3999
	...darkMechanicum, //5000-5999
	...collegiaTitanica, //8000-8099
	...questorisFamilia, //8100-8199
	...uniqueSlots, //9000-9999
	...legends, //7000-7999

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
