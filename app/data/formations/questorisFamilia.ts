import { FACTION, FORMATION, SLOT_TYPE } from "@type/types"

// ********************************************************************
// ****************** QUESTORIS FAMILIA FORMATIONS ********************
// ********************************************************************

// 8100-8199

export const questorisFamilia: FORMATION[] = [
	{
		id: 8100,
		name: "Barony Guard Lance",
		faction: FACTION.questorisFamilia,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [8100, 8100, 8101] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [8101, 8100, 8103, 8103] },
		],
		rules: [
			{
				name: "Seneschal",
				text: "After this Formation is deployed, or after all deployment is finished if the Formation is deployed in Reserve, choose one model that is part of a Compulsory Detachment to be upgraded to a Baron for free. A model upgraded in this way increases its CAF by +2 and its Wounds characteristic by 1",
			},
		],
	},
	{
		id: 8101,
		name: "Vanguard Lance",
		faction: FACTION.questorisFamilia,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [8101, 8101, 8103] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [8101, 8101, 8103, 8103] },
		],
		rules: [
			{
				name: "Household Spear",
				text: "All Detachments within this Formation gain the Forward Deployment special rule.",
			},
		],
	},
	{
		id: 8102,
		name: "Bastion Lance",
		faction: FACTION.questorisFamilia,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [8102, 8102, 8100] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [8100, 8103, 8103] },
		],
		rules: [],
	},
	{
		id: 8103,
		name: "Bonded Household Lance",
		faction: FACTION.questorisFamilia,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [8105, 8105] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [8105, 8102, 8101, 8104, 8104] },
		],
		rules: [
			{
				name: "Favoured by the Omnissiah",
				text: "All Questoris Knights in this Formation must have the Knight Styrix or Knight Magaera weapon loadout. All Armiger slots must be filled with Mechanicum Knight Moirax Talons",
			},
		],
	},
]
