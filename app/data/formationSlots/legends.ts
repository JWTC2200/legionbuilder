import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "@type/types"

// ********************************************************************
// *************************** LEGEND SLOTS ***************************
// ********************************************************************

// 7000-7999
export const legends: FORMATION_SLOT[] = [
	// Iron Hands Seeker-Killer Clave Ultor
	{
		id: 7000,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.astartes,
		restricted: true,
		options: [7000],
	},
	{
		id: 7001,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.astartes,
		restricted: true,
		options: [7001],
	},
	{
		id: 7002,
		type: DETACHMENT_TYPE.light,
		faction: FACTION.astartes,
		restricted: true,
		options: [7002],
	},

	//Iron Warriors Proioxis Macro-Assault Wing
	{
		id: 7003,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.astartes,
		restricted: true,
		options: [7003],
	},
	{
		id: 7004,
		type: DETACHMENT_TYPE.dedicated,
		faction: FACTION.astartes,
		restricted: true,
		options: [7004],
	},
	{
		id: 7005,
		type: DETACHMENT_TYPE.heavy,
		faction: FACTION.astartes,
		restricted: true,
		options: [7005],
	},

	// Alpha Legion Harrow Group Arcadus
	{
		id: 7006,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.astartes,
		restricted: true,
		options: [7006],
	},
	{
		id: 7007,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.astartes,
		restricted: true,
		options: [7007],
	},
	{
		id: 7008,
		type: DETACHMENT_TYPE.dedicated,
		faction: FACTION.astartes,
		restricted: true,
		options: [7008],
	},
	{
		id: 7009,
		type: DETACHMENT_TYPE.light,
		faction: FACTION.astartes,
		restricted: true,
		options: [7009],
	},
]
