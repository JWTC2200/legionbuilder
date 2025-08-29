import { detachmentData } from "@/app/data/detachment_data"
import {
	List,
	ListDetachment,
	ListDetachmentSlot,
	ListLoadout,
	ListLoadouts,
	ListUpgrade,
	ListUpgrades,
} from "@type/listTypes"
import { ALLEGIANCE, DETACHMENT, DETACHMENT_LOADOUT, SUBFACTION_TYPE } from "@type/types"
import { emptyDetachment, emptyLoadouts, emptyUpgrade } from "@/app/data/empty_objects"
import { toast } from "react-toastify"

export const getSelectorIdArray = (detachmentSlot: ListDetachmentSlot): DETACHMENT[] => {
	if (detachmentSlot.restricted) {
		return detachmentSlot.options
			.map((option) => detachmentData.filter((detachment) => detachment.id === option))
			.flat()
	}
	return detachmentData
		.filter(
			(detachment) =>
				detachment.detachment_type.includes(detachmentSlot.type) &&
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

export const filterByAllegiance = (
	detachmentList: DETACHMENT[],
	listAllegiance: ALLEGIANCE,
	currentDetachment: ListDetachment
): DETACHMENT[] => {
	return detachmentList.filter((detachment) => {
		return (
			detachment.allegiance === listAllegiance ||
			detachment.allegiance === null ||
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
			: newDetachmentObject(currentDetachment, detachmentData, list)

	const upgradeUpdate =
		detachmentData === "clear" ? resetUpgrade(currentUpgrade) : requiredUpgrades(currentUpgrade, detachmentData)

	const loadoutUpdate =
		detachmentData === "clear"
			? resetLoadout(currentLoadouts)
			: { ...requiredLoadouts(currentLoadouts, detachmentData), id: detachmentData.id }

	return {
		...list,
		detachments: updateDetachmentArray(list, detachmentUpdate),
		upgrades: updateUpgradeArray(list, upgradeUpdate),
		loadouts: updateLoadoutsArray(list, loadoutUpdate),
	}
}

// check if the first upgrade option is marked required and adds it automatically
const requiredUpgrades = (current: ListUpgrades, detachment: DETACHMENT): ListUpgrades => {
	const required = (): ListUpgrade[] => {
		return detachment.upgrade_options
			.filter((upgrade) => {
				if (upgrade.options[0].required) return upgrade.options[0]
			})
			.map((result) => {
				return { name: result.name, unit_ref: result.unit_ref, ...result.options[0] }
			})
	}

	return { ...resetUpgrade(current), id: detachment.id, upgrades: required() }
}

// check if there are any required loadouts to be applied
const requiredLoadouts = (current: ListLoadouts, detachment: DETACHMENT): ListLoadouts => {
	const required = detachment.loadout_options.filter((location) => {
		if (location.required) return location
	})

	console.log(required)

	const listLoadouts = (required: DETACHMENT_LOADOUT[]) => {
		const id = required
			.map((location) =>
				String(location.options[0].name + location.location)
					.replaceAll(" ", "")
					.trim()
			)
			.sort()
			.join("")

		const loadouts: ListLoadout[] = [
			{
				id: id,
				number: required[0].required!,
				weapons: required.map((location) => {
					return { location: location.location, weapon: location.options[0].name, cost: 0 }
				}),
			},
		]
		return { id: detachment.id, loadouts, formation_id: current.formation_id, slot_id: current.slot_id }
	}

	if (required.length) return listLoadouts(required)

	return { ...resetLoadout(current) }
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

const newDetachmentObject = (currentDetachment: ListDetachment, data: DETACHMENT, list: List): ListDetachment => {
	const cost = list.gamemode === "titandeath" && data.td_ek ? data.base_cost + data.td_ek : data.base_cost

	return {
		...currentDetachment,
		id: data.id,
		name: data.name,
		faction: data.faction,
		allegiance: data.allegiance,
		subfaction: data.subfaction,
		cost: cost,
		size: data.base_size,
		max_size: data.max_size,
		break_strength: data.break_strength,
	}
}

export const createLoadout = (
	list: List,
	formArray: { location: string; weapon: FormDataEntryValue }[],
	loadoutSlot: ListLoadouts,
	detachmentInfo: DETACHMENT,
	id: string
): List => {
	const newLoadout: ListLoadout = {
		id: id,
		number: loadoutSlot.loadouts.length ? 1 : currentDetachmentSize(list, loadoutSlot.slot_id),
		weapons: formArray.map((entry) => {
			const locationOptions = detachmentInfo.loadout_options.find((option) => option.location === entry.location)!
			const weapon = locationOptions.options.find((weapon) => weapon.name === entry.weapon)!
			const cost = weapon.cost
			const tdcost = weapon.td_ek ? cost + weapon.td_ek : cost

			return {
				location: entry.location,
				weapon: entry.weapon as string,
				cost: list.gamemode === "titandeath" ? tdcost : cost,
			}
		}),
	}

	const newLoadoutSlot = {
		...loadoutSlot,
		loadouts: [...loadoutSlot.loadouts.filter((loadout) => loadout.id !== newLoadout.id), newLoadout],
	}

	return updateListLoadouts(list, newLoadoutSlot)
}

export const incrementLoadout = (list: List, loadoutSlot: ListLoadouts, id: string, value = 1): List => {
	if (loadoutCount(list, loadoutSlot.slot_id) >= currentDetachmentSize(list, loadoutSlot.slot_id) && value > 0) {
		toast.warning("Cannot add any more")
		return list
	}

	console.log(loadoutSlot)

	const newLoadoutSlot = {
		...loadoutSlot,
		loadouts: [
			...loadoutSlot.loadouts
				.map((loadout) => {
					if (loadout.id === id) {
						return { ...loadout, number: loadout.number + value }
					}
					return loadout
				})
				.filter((loadout) => loadout.number > 0),
		],
	}

	return updateListLoadouts(list, newLoadoutSlot)
}

const updateListLoadouts = (list: List, updatedLoadout: ListLoadouts): List => {
	return {
		...list,
		loadouts: list.loadouts.map((slot) => {
			if (slot.slot_id === updatedLoadout.slot_id) {
				return updatedLoadout
			}
			return slot
		}),
	}
}

export const loadoutPoints = (loadout: ListLoadout): number => {
	return loadout.weapons.reduce((acc, sum) => acc + sum.cost, 0)
}

export const totalLoadoutPoints = (list: List, slot_id: string): number => {
	return list.loadouts
		.filter((loadout) => loadout.slot_id === slot_id)
		.map((loadouts) => loadouts.loadouts.reduce((acc, sum) => acc + loadoutPoints(sum) * sum.number, 0))
		.reduce((acc, sum) => acc + sum, 0)
}

export const loadoutCount = (list: List, slot_id: string): number => {
	return list.loadouts
		.filter((loadout) => loadout.slot_id === slot_id)
		.map((loadouts) => loadouts.loadouts.reduce((acc, sum) => acc + sum.number, 0))
		.reduce((acc, sum) => acc + sum, 0)
}

export const upgradeSizeCount = (list: List, slot_id: string): number => {
	return list.upgrades
		.filter((upgrade) => upgrade.slot_id === slot_id)
		.map((upgrades) => upgrades.upgrades.reduce((acc, sum) => acc + sum.size, 0))
		.reduce((acc, sum) => acc + sum, 0)
}

export const upgradeTotalPoints = (list: List, slot_id: string): number => {
	return list.upgrades
		.filter((upgrade) => upgrade.slot_id === slot_id)
		.map((upgrades) =>
			upgrades.upgrades.reduce(
				(acc, sum) => acc + sum.cost + (sum.td_ek && list.gamemode === "titandeath" ? sum.td_ek : 0),
				0
			)
		)
		.reduce((acc, sum) => acc + sum, 0)
}

export const detachmentPoints = (list: List, slot_id: string): number => {
	return list.detachments
		.filter((detachment) => detachment.slot_id === slot_id)
		.reduce((acc, sum) => acc + sum.cost, 0)
}

export const totalDetachmentPoints = (list: List, slot_id: string): number => {
	return detachmentPoints(list, slot_id) + upgradeTotalPoints(list, slot_id) + totalLoadoutPoints(list, slot_id)
}

export const currentDetachmentSize = (list: List, slot_id: string): number => {
	return (
		list.detachments
			.filter((detachment) => detachment.slot_id === slot_id)
			.reduce((acc, sum) => acc + sum.size, 0) + upgradeSizeCount(list, slot_id)
	)
}
