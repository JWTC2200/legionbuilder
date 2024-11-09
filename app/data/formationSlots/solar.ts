import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "@type/types"

// ********************************************************************
// ************************* SOLAR AUXILIA SLOTS **********************
// ********************************************************************

// 2000-2999

export const solar: FORMATION_SLOT[] = [
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
	// unique slots

	{
		id: 2011,
		type: DETACHMENT_TYPE.core,
		faction: FACTION.solar,
		restricted: true,
		options: [2002, 3003],
		description: "Iron Cohort",
	},
	{
		id: 2012,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.solar,
		restricted: true,
		options: [3004],
		description: "Tech-Priest Auxilia",
	},
	{
		id: 2013,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.solar,
		restricted: true,
		options: [3011, 3012],
		description: "Iron Cohort",
	},
	{
		id: 2014,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.solar,
		restricted: true,
		options: [3007, 3008, 3009],
		description: "Iron Cohort",
	},
	{
		id: 2015,
		type: DETACHMENT_TYPE.bastion,
		faction: FACTION.solar,
		restricted: true,
		options: [3013],
		description: "Iron Cohort",
	},
]
