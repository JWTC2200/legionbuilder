import { emptyFormation } from "@/app/data/empty_objects"
import { formationData } from "@/app/data/formation_data"
import { formationSlotData } from "@/app/data/formation_slot_data"
import { newFormation } from "@/app/listsold/builder/utils"
import {
	List,
	ListFormation,
	ListDetachment,
	ListUpgrade,
	ListLoadouts,
	ListDetachmentGroup,
	FORMATION,
} from "@/app/types"

export const createFormation = (id: number, formation: ListFormation): ListFormation | null => {
	const findFormation = formationData.find((formation) => formation.id === id)

	if (findFormation) {
		const detachmentGroups = createDetachmentGroups(findFormation)

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

const createDetachmentGroups = (formation: FORMATION): ListDetachmentGroup[] => {
	const newDetachmentGroup = formation.formation_slots.map((slot) => {
		return {
			type: slot.slot_type,
			detachment_slots: slot.slot_id.map((id) => {
				const data = formationSlotData.find((data) => data.id === id)
				if (data) {
					return { id: "", formation_id: formation.id, data_id: id, type: data.type }
				}
			}),
		}
	})

	return []
}

export const resetFormation = (list: List, formation: ListFormation): List => {
	const newFormations = list.formations.map((form) => {
		if (form.id === formation.id) {
			return emptyFormation
		}
		return form
	})
	const newList: List = {
		...list,
		formations: newFormations,
		detachments: removeDetachmentsByFormationID(list, formation),
		upgrades: removeUpgradesByFormationID(list, formation),
		loadouts: removeLoadoutsByFormationID(list, formation),
	}
	return newList
}

export const removeFormation = (list: List, formation: ListFormation): List => {
	const newFormations = list.formations.filter((form) => form.id !== formation.id)
	const newList: List = {
		...list,
		formations: newFormations,
		detachments: removeDetachmentsByFormationID(list, formation),
		upgrades: removeUpgradesByFormationID(list, formation),
		loadouts: removeLoadoutsByFormationID(list, formation),
	}
	return newList
}

export const removeDetachmentsByFormationID = (list: List, formation: ListFormation): ListDetachment[] => {
	return list.detachments.filter((entry) => entry.formation_id !== formation.id)
}

export const removeUpgradesByFormationID = (list: List, formation: ListFormation): ListUpgrade[] => {
	return list.upgrades.filter((entry) => entry.formation_id !== formation.id)
}

export const removeLoadoutsByFormationID = (list: List, formation: ListFormation): ListLoadouts[] => {
	return list.loadouts.filter((entry) => entry.formation_id !== formation.id)
}
