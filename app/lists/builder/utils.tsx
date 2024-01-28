import {
	BUILDER_FORMATION,
	FORMATION_SLOT,
	BUILDER_FORMATION_SLOT,
	BUILDER_LIST,
	FORMATION_SLOTS,
	SLOTSET,
} from "@/app/types"
import { formationData } from "@/app/data/formation_data"
import { formationSlotData } from "@/app/data/formation_slot_data"
import { toast } from "react-toastify"

export const setBuilderDetachment = (formationID: number, formationRef: string): BUILDER_FORMATION | null => {
	const findFormation = formationData.find((formation) => formation.id === formationID)
	if (findFormation) {
		return {
			...findFormation,
			ref_id: formationRef,
			id: formationID,
			formation_slots: formationSlotHTML(findFormation.formation_slots, formationRef),
		}
	}
	return null
}

const formationSlotHTML = (formationSlots: FORMATION_SLOTS[], formationRef: string) => {
	return formationSlots.map((entry) => {
		return { slot_type: entry.slot_type, slot: getSlots(entry.slot_id, formationRef, entry.slot_type) }
	})
}

const getSlots = (slotArray: number[], formationRef: string, typeRef: SLOTSET) => {
	if (slotArray) {
		const slots: FORMATION_SLOT[] = slotArray
			.sort()
			.map((id) => formationSlotData.find((slot) => slot.id === id))
			.filter((exists) => {
				return exists !== undefined
			}) as FORMATION_SLOT[]

		const returnedSlots = slots.map((slot, index) => {
			return {
				...slot,
				ref_id: formationRef,
				slot_ref: formationRef + typeRef + index,
				selected_unit: null,
			}
		})
		return returnedSlots
	}
	return slotArray
}

export const handleSaveList = (list: BUILDER_LIST) => {
	localStorage.setItem("legionbuilder", JSON.stringify(list))
	toast.success("List saved locally")
}
