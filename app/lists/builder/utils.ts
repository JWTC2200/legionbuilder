import { emptyFormation, emptyDetachment, emptyUpgrade, emptyLoadouts } from "@/app/data/empty_objects"
import { formationData } from "@/app/data/formation_data"
import { formationSlotData } from "@/app/data/formation_slot_data"
import {
	List,
	ListFormation,
	ListDetachment,
	ListUpgrades,
	ListLoadouts,
	ListFormationGroup,
	ListDetachmentSlot,
	FORMATION,
	DETACHMENT_TYPE,
} from "@/app/types"
import { totalDetachmentPoints } from "./components/detachment/utils"
import { sum } from "@/app/utils/math"

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

const createDetachmentGroups = (formationData: FORMATION, formation: ListFormation): ListFormationGroup[] => {
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
	const newSlotArray = ids.map((id, mainIndex) => {
		return formationSlotData
			.filter((slot) => slot.id === id)
			.map((entry, index) => {
				return {
					...entry,
					id: `${idString}${entry.type}${mainIndex}`,
					formation_id: formation.id,
				} as ListDetachmentSlot
			})
	})

	return newSlotArray.flat()
}

const getGroupSlots = (formation: ListFormation) => {
	return formation.detachment_groups.map((group) => group.detachment_slots).flat()
}

export const createNewDetachments = (formation: ListFormation, list: List): ListDetachment[] => {
	const newDetachments = getGroupSlots(formation).map((slot) => {
		return {
			...emptyDetachment,
			slot_id: slot.id,
			formation_id: formation.id,
			slot_type: slot.type,
		}
	})

	const removeOldDetachments = list.detachments.filter((detachment) => detachment.formation_id !== formation.id)

	return [...removeOldDetachments, ...newDetachments]
}

export const createNewUpgrades = (formation: ListFormation, list: List): ListUpgrades[] => {
	const newUpgrades = getGroupSlots(formation).map((slot) => {
		return {
			...emptyUpgrade,
			slot_id: slot.id,
			formation_id: formation.id,
		}
	})

	const removeOldUpgrades = list.upgrades.filter((upgrade) => upgrade.formation_id !== formation.id)

	return [...removeOldUpgrades, ...newUpgrades]
}
export const createNewLoadouts = (formation: ListFormation, list: List): ListLoadouts[] => {
	const newLoadouts = getGroupSlots(formation).map((slot) => {
		return {
			...emptyLoadouts,
			slot_id: slot.id,
			formation_id: formation.id,
		}
	})

	const removeOldLoadouts = list.loadouts.filter((loadout) => loadout.formation_id !== formation.id)

	return [...removeOldLoadouts, ...newLoadouts]
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

const removeUpgradesByFormationID = (list: List, formation: ListFormation): ListUpgrades[] => {
	return list.upgrades.filter((entry) => entry.formation_id !== formation.id)
}

const removeLoadoutsByFormationID = (list: List, formation: ListFormation): ListLoadouts[] => {
	return list.loadouts.filter((entry) => entry.formation_id !== formation.id)
}

export const findUpgradeBySlotId = (list: List, id: string): ListUpgrades | undefined => {
	return list.upgrades.find((upgrade) => upgrade.slot_id === id)
}

export const findLoadoutBySlotId = (list: List, id: string): ListLoadouts | undefined => {
	return list.loadouts.find((loadout) => loadout.slot_id === id)
}

export const findDetachmentBySlotId = (list: List, id: string): ListDetachment | undefined => {
	return list.detachments.find((detachment) => detachment.slot_id === id)
}

export const findFormationDetachmentBreakSlotIds = (formation: ListFormation): string[] => {
	return formation.detachment_groups
		.map((group) =>
			group.detachment_slots.filter((type) => type.type !== DETACHMENT_TYPE.dedicated).map((slot) => slot.id)
		)
		.flat()
}

export const findFormationDetachmentSlotIds = (formation: ListFormation): string[] => {
	return formation.detachment_groups.map((group) => group.detachment_slots.map((slot) => slot.id)).flat()
}

export const totalFormationPoints = (list: List, formation: ListFormation): number => {
	const slotIds = findFormationDetachmentSlotIds(formation)

	const detachmentPoints = slotIds.map((id) => totalDetachmentPoints(list, id))

	return sum(detachmentPoints)
}

export const totalListPoints = (list: List) => {
	const mainFactionPoints = sum(
		list.formations
			.filter((formation) => formation.faction === list.faction)
			.map((formation) => totalFormationPoints(list, formation))
	)

	const subFactionPoints = sum(
		list.formations
			.filter((formation) => formation.faction !== list.faction)
			.map((formation) => totalFormationPoints(list, formation))
	)

	const totalListPoints = mainFactionPoints + subFactionPoints

	return { mainFactionPoints: mainFactionPoints, subFactionPoints: subFactionPoints, totalPoints: totalListPoints }
}

export const formationGroupSlots = (formationGroup: ListFormationGroup): string[] => {
	return formationGroup.detachment_slots.map((slot) => slot.id)
}

export const formationSlotsFilled = (list: List, slotIds: string[]) => {
	return list.detachments
		.filter((detachment) => slotIds.includes(detachment.slot_id))
		.filter((detachment) => detachment.id).length
}
