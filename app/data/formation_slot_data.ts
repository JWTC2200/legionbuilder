import { FaC } from "react-icons/fa6"
import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "../types/types"

export const formationSlotData: FORMATION_SLOT[] = [
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

	// ********************************************************************
	// ************************* SOLAR AUXILIA SLOTS **********************
	// ********************************************************************
	{
		id: 2000,
		type: DETACHMENT_TYPE.hq,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},
	{
		id: 2001,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},
	{
		id: 2002,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},
	{
		id: 2003,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},
	{
		id: 2004,
		type: DETACHMENT_TYPE.light,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},
	{
		id: 2005,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},
	{
		id: 2006,
		type: DETACHMENT_TYPE.heavy,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},
	{
		id: 2007,
		type: DETACHMENT_TYPE.artillery,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},
	{
		id: 2008,
		type: DETACHMENT_TYPE.air,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},
	{
		id: 2009,
		type: DETACHMENT_TYPE.bastion,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},
	{
		id: 2010,
		type: DETACHMENT_TYPE.transport,
		faction: FACTION.solar,
		restricted: false,
		options: [],
	},

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

	// ********************************************************************
	// ******************************* UNIQUE SLOTS ***********************
	// ********************************************************************
	{
		id: 9000,
		type: DETACHMENT_TYPE.dedicated,
		faction: FACTION.astartes,
		restricted: true,
		options: [9000],
		description: "Dedicated transport Rhinos",
	},
	{
		id: 9001,
		type: DETACHMENT_TYPE.dedicated,
		faction: FACTION.astartes,
		restricted: true,
		options: [9001],
		description: "Dedicated transport Storm Eagles",
	},
	{
		id: 9002,
		type: DETACHMENT_TYPE.dedicated,
		faction: FACTION.astartes,
		restricted: true,
		options: [9002],
		description: "Dedicated transport Thunderhawks",
	},
	{
		id: 9003,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.solar,
		restricted: true,
		options: [2002],
		description: "Lasrifle detachment",
	},
	{
		id: 9004,
		type: DETACHMENT_TYPE.hq,
		faction: FACTION.solar,
		restricted: true,
		options: [9003],
		description: "Tank Commander",
	},
	{
		id: 9005,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.solar,
		restricted: true,
		options: [2004],
		description: "Storm Section",
	},
	{
		id: 9006,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.astartes,
		restricted: true,
		options: [1020, 1021, 1022],
		description: "Rapid Reaction Force",
	},
	{
		id: 9007,
		type: DETACHMENT_TYPE.dedicated,
		faction: FACTION.astartes,
		restricted: true,
		options: [9004],
		description: "Dedicated transport Drop Pods",
	},
	{
		id: 9008,
		type: DETACHMENT_TYPE.dedicated,
		faction: FACTION.astartes,
		restricted: true,
		options: [9005],
		description: "Dedicated transport Dreadnought Drop Pods",
	},
	{
		id: 9009,
		type: DETACHMENT_TYPE.dedicated,
		faction: FACTION.solar,
		restricted: true,
		options: [9006],
		description: "Dedicated transport Dracosans",
	},
]
