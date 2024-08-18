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

	// Tallarn Reborn Carmine Ambush Tercio
	{
		id: 7010,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.solar,
		restricted: true,
		options: [7010],
	},
	{
		id: 7011,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.solar,
		restricted: true,
		options: [7011],
	},
	{
		id: 7012,
		type: DETACHMENT_TYPE.battle,
		faction: FACTION.solar,
		restricted: true,
		options: [7012],
	},
	{
		id: 7013,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.solar,
		restricted: true,
		options: [7013],
	},

	// Galibed Oathsworn Thyreos Siege Breaker Company
	{
		id: 7014,
		type: DETACHMENT_TYPE.heavy,
		faction: FACTION.solar,
		restricted: true,
		options: [7014],
	},
	{
		id: 7015,
		type: DETACHMENT_TYPE.artillery,
		faction: FACTION.solar,
		restricted: true,
		options: [7015],
	},
	{
		id: 7016,
		type: DETACHMENT_TYPE.artillery,
		faction: FACTION.solar,
		restricted: true,
		options: [7016],
	},
]
