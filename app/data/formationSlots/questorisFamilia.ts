import { DETACHMENT_TYPE, FACTION, FORMATION_SLOT } from "@type/types"

// ********************************************************************
// *************** QUESTORIS FAMILIA FORMATION SLOTS ******************
// ********************************************************************

// 8000-8100

export const questorisFamilia: FORMATION_SLOT[] = [
	{
		id: 8100,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [8102, 8015],
		description: "Questoris Knight Banner",
	},
	{
		id: 8101,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [8103, 8106],
		description: "Cerastus Knight Banner",
	},
	{
		id: 8102,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [8104, 8107],
		description: "Acastus Knight Banner",
	},
	{
		id: 8103,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [8100, 8101],
		description: "Armiger Knight Banner",
	},
	{
		id: 8104,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [8101],
		description: "Knight Moirax Talon",
	},
	{
		id: 8105,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [8105],
		description: "Knight Styrix/Magaera",
	},

	// unique slots

	{
		id: 8106,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [8102, 8103, 8104],
		description: "Knight",
	},
	{
		id: 8107,
		type: DETACHMENT_TYPE.vanguard,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [3011, 3012],
		description: "Knight Household Retainer Cohorts",
	},
	{
		id: 8108,
		type: DETACHMENT_TYPE.support,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [3007, 3008, 3009],
		description: "Knight Household Aegis Cohorts",
	},
	{
		id: 8109,
		type: DETACHMENT_TYPE.bastion,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [3013],
		description: "Knight Household Aegis Cohorts",
	},
]
