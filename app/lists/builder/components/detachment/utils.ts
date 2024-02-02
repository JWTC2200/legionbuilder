import { detachmentData } from "@/app/data/detachment_data"
import {
	DETACHMENT,
	List,
	ListDetachment,
	ListDetachmentSlot,
	ListUpgrades,
	ListLoadouts,
	SUBFACTION_TYPE,
} from "@/app/types"
import { emptyDetachment, emptyUpgrade, emptyLoadouts } from "@/app/data/empty_objects"

export const getSelectorIdArray = (detachmentSlot: ListDetachmentSlot): DETACHMENT[] => {
	if (detachmentSlot.restricted) {
		return detachmentSlot.options
			.map((option) => detachmentData.filter((detachment) => detachment.id === option))
			.flat()
	}
	return detachmentData
		.filter(
			(detachment) =>
				detachment.detachment_type === detachmentSlot.type &&
				detachment.faction === detachmentSlot.faction &&
				!detachment.unique
		)
		.concat(detachmentData.filter((extras) => detachmentSlot.options.includes(extras.id)))
}

export const filterBySubfactions = (
	detachmentList: DETACHMENT[],
	formationSubfaction: SUBFACTION_TYPE | null,
	currentDetachment: ListDetachment
): DETACHMENT[] => {
	return detachmentList.filter((detachment) => {
		return (
			detachment.subfaction === formationSubfaction ||
			detachment.subfaction === null ||
			detachment.id === currentDetachment.id
		)
	})
}

export const updateAllSlotInfo = (
	list: List,
	currentDetachment: ListDetachment,
	detachmentData: DETACHMENT | "clear"
): List => {
	const currentUpgrade = list.upgrades.find((upgrade) => upgrade.slot_id === currentDetachment.slot_id)!
	const currentLoadouts = list.loadouts.find((loadout) => loadout.slot_id === currentDetachment.slot_id)!

	const detachmentUpdate =
		detachmentData === "clear"
			? resetDetachment(currentDetachment)
			: newDetachmentObject(currentDetachment, detachmentData)

	const upgradeUpdate =
		detachmentData === "clear"
			? resetUpgrade(currentUpgrade)
			: { ...resetUpgrade(currentUpgrade), id: detachmentData.id }

	const loadoutUpdate =
		detachmentData === "clear"
			? resetLoadout(currentLoadouts)
			: {
					...resetLoadout(currentLoadouts),
					id: detachmentData.id,
				}

	return {
		...list,
		detachments: updateDetachmentArray(list, detachmentUpdate),
		upgrades: updateUpgradeArray(list, upgradeUpdate),
		loadouts: updateLoadoutsArray(list, loadoutUpdate),
	}
}

const updateDetachmentArray = (list: List, newDetachment: ListDetachment): ListDetachment[] => {
	return [
		...list.detachments.map((detachment) => {
			if (detachment.slot_id === newDetachment.slot_id) {
				return newDetachment
			}
			return detachment
		}),
	]
}

const updateUpgradeArray = (list: List, newUpgrade: ListUpgrades): ListUpgrades[] => {
	return [
		...list.upgrades.map((upgrade) => {
			if (upgrade.slot_id === newUpgrade.slot_id) {
				return newUpgrade
			}
			return upgrade
		}),
	]
}

const updateLoadoutsArray = (list: List, newLoadouts: ListLoadouts): ListLoadouts[] => {
	return [
		...list.loadouts.map((loadout) => {
			if (loadout.slot_id === newLoadouts.slot_id) {
				return newLoadouts
			}
			return loadout
		}),
	]
}

const resetDetachment = (detachment: ListDetachment): ListDetachment => {
	return {
		...emptyDetachment,
		slot_id: detachment.slot_id,
		formation_id: detachment.formation_id,
	}
}

const resetUpgrade = (upgrade: ListUpgrades): ListUpgrades => {
	return { ...emptyUpgrade, slot_id: upgrade.slot_id, formation_id: upgrade.formation_id }
}

const resetLoadout = (loadouts: ListLoadouts): ListLoadouts => {
	return { ...emptyLoadouts, slot_id: loadouts.slot_id, formation_id: loadouts.formation_id }
}

const newDetachmentObject = (currentDetachment: ListDetachment, data: DETACHMENT): ListDetachment => {
	return {
		...currentDetachment,
		id: data.id,
		name: data.name,
		faction: data.faction,
		allegiance: data.allegiance,
		subfaction: data.subfaction,
		cost: data.base_cost,
		size: data.base_size,
		max_size: data.max_size,
		break_strength: data.break_strength,
	}
}
