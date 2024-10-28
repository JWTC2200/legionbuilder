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
		options: [8102],
		description: "Questoris Knight Banner",
	},
	{
		id: 8101,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [8103],
		description: "Cerastus Knight Banner",
	},
	{
		id: 8102,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [8104],
		description: "Acastus Knight Banner",
	},
	{
		id: 8103,
		type: DETACHMENT_TYPE.knight,
		faction: FACTION.questorisFamilia,
		restricted: true,
		options: [8100, 8101],
		description: "Armiger",
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
]
