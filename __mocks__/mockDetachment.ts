import { BUILDER_FORMATION_SLOT, DETACHMENT_TYPE, FACTION, BUILDER_DETACHMENT_UNIT, ALLEGIANCE } from "@/app/types"

export const testDetachmentSlot: BUILDER_FORMATION_SLOT = {
	ref_id: "test",
	slot_ref: "test",
	id: 1,
	type: DETACHMENT_TYPE.core,
	faction: FACTION.astartes,
	options: [],
	description: "test text",
	selected_unit: null,
}

export const testDetachmentUnit: BUILDER_DETACHMENT_UNIT = {
	id: 1,
	name: "testunit",
	faction: FACTION.astartes,
	allegiance: ALLEGIANCE.loyalist,
	base_cost: 10,
	base_size: 1,
	max_size: 3,
	upgrade_options: [],
}
