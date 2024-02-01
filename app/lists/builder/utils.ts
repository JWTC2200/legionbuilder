import { emptyFormation, emptyDetachment } from "@/app/data/empty_objects"
import { formationData } from "@/app/data/formation_data"
import { formationSlotData } from "@/app/data/formation_slot_data"
import {
	List,
	ListFormation,
	ListDetachment,
	ListUpgrade,
	ListLoadouts,
	ListDetachmentGroup,
	ListDetachmentSlot,
	FORMATION,
} from "@/app/types"

export const createFormation = (id: number, formation: ListFormation): ListFormation | null => {
	const findFormation = formationData.find((formation) => formation.id === id)

	if (findFormation) {
		const detachmentGroups = createDetachmentGroups(findFormation, formation)

		return {
			...formation,
			name: findFormation.name,
			data_id: id,
			faction: findFormation.faction,
			allegiance: findFormation.allegiance,
			subfaction: findFormation.subfaction,
			detachment_groups: detachmentGroups,
		}
	}

	return null
}

const createDetachmentGroups = (formationData: FORMATION, formation: ListFormation): ListDetachmentGroup[] => {
	const newDetachmentGroup = formationData.formation_slots.map((slot, index) => {
		return {
			id: `${formation.id}index${index}`,
			type: slot.slot_type,
			detachment_slots: createDetachmentSlots(slot.slot_id, formation, `${formation.id}index${index}`),
		}
	})

	return newDetachmentGroup
}

const createDetachmentSlots = (ids: number[], formation: ListFormation, idString: string): ListDetachmentSlot[] => {
	const newSlotArray = ids.map((id) => {
		return formationSlotData
			.filter((slot) => slot.id === id)
			.map((entry, index) => {
				return {
					...entry,
					id: `${idString}${entry.type}${index}`,
					formation_id: formation.id,
				} as ListDetachmentSlot
			})
	})

	return newSlotArray.flat()
}

export const createNewDetachments = (formation: ListFormation, list: List): ListDetachment[] => {
	const newDetachments = formation.detachment_groups
		.map((group) => group.detachment_slots)
		.flat()
		.map((slot) => {
			return {
				...emptyDetachment,
				slot_id: slot.id,
				formation_id: formation.id,
			}
		})
	const removeOldDetachments = list.detachments.filter((detachment) => detachment.formation_id !== formation.id)

	return [...removeOldDetachments, ...newDetachments]
}

export const resetFormation = (list: List, prevFormation: ListFormation): List => {
	const newFormations = list.formations.map((formation) => {
		if (formation.id === prevFormation.id) {
			return emptyFormation
		}
		return formation
	})
	const newList: List = {
		...removeTrioByFormationID(list, prevFormation),
		formations: newFormations,
	}
	return newList
}

export const removeFormation = (list: List, formation: ListFormation): List => {
	const newFormations = list.formations.filter((form) => form.id !== formation.id)
	const newList: List = {
		...removeTrioByFormationID(list, formation),
		formations: newFormations,
		detachments: list.detachments.filter((detachment) => detachment.formation_id !== formation.id),
	}
	return newList
}

const removeTrioByFormationID = (list: List, formation: ListFormation): List => {
	return {
		...list,
		detachments: removeDetachmentsByFormationID(list, formation),
		upgrades: removeUpgradesByFormationID(list, formation),
		loadouts: removeLoadoutsByFormationID(list, formation),
	}
}

const removeDetachmentsByFormationID = (list: List, formation: ListFormation): ListDetachment[] => {
	return list.detachments.filter((entry) => entry.formation_id !== formation.id)
}

const removeUpgradesByFormationID = (list: List, formation: ListFormation): ListUpgrade[] => {
	return list.upgrades.filter((entry) => entry.formation_id !== formation.id)
}

const removeLoadoutsByFormationID = (list: List, formation: ListFormation): ListLoadouts[] => {
	return list.loadouts.filter((entry) => entry.formation_id !== formation.id)
}
