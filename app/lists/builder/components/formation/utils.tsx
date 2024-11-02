import { List, ListDetachment, ListFormation } from "@type/listTypes"
import {
	createFormation,
	createNewDetachments,
	createNewLoadouts,
	createNewUpgrades,
	resetFormation,
} from "@lists/builder/utils"
import {
	filterByAllegiance,
	filterBySubfactions,
	getSelectorIdArray,
	updateAllSlotInfo,
} from "@lists/builder/components/detachment/utils"
import { detachmentData } from "@data/detachment_data"
import { DETACHMENT } from "@type/types"

interface SlotOptions {
	id: DETACHMENT | null
	detachment: ListDetachment
}

export const setFormation = (id: number, formation: ListFormation, list: List, setList: (update: List) => void) => {
	console.log(id)

	if (!id) {
		setList(resetFormation(list, formation))
	} else {
		const newFormation = createFormation(id, formation)
		if (newFormation) {
			const updatedFormations = list.formations.map((form) => {
				if (form.id === formation.id) {
					return newFormation
				}
				return form
			})

			const newList = {
				...list,
				formations: updatedFormations,
				detachments: createNewDetachments(newFormation, list),
				upgrades: createNewUpgrades(newFormation, list),
				loadouts: createNewLoadouts(newFormation, list),
			}

			// find formation id of new formation. Get all compulsory slots.

			const listCompSlots = newList.formations
				.find((formation) => formation.id === newFormation.id)!
				.detachment_groups.find((group) => group.type === "compulsory")!.detachment_slots

			const SlotOptions: SlotOptions[] = listCompSlots.map((slot) => {
				const detachment = newList.detachments.find((det) => det.slot_id === slot.id)!

				const subfactionsFiltered = filterBySubfactions(
					getSelectorIdArray(slot),
					newFormation.subfaction,
					detachment
				)

				const allegianceFiltered = filterByAllegiance(subfactionsFiltered, newList.allegiance, detachment)

				if (allegianceFiltered.length === 1) {
					return { id: allegianceFiltered[0], detachment: detachment }
				} else {
					return { id: null, detachment: detachment }
				}
			})

			const listUpdate = (list: List, options: SlotOptions[], rounds: number): List => {
				if (rounds >= options.length) return list

				if (options[rounds].id) {
					const data = detachmentData.find((det) => det.id === options[rounds].id!.id)!

					return listUpdate(updateAllSlotInfo(list, options[rounds].detachment, data), options, rounds + 1)
				}

				return listUpdate(list, options, rounds + 1)
			}

			setList(listUpdate(newList, SlotOptions, 0))
		}
	}
}
