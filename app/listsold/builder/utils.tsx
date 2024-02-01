import {
	BUILDER_FORMATION,
	FORMATION_SLOT,
	BUILDER_FORMATION_SLOT,
	BUILDER_LIST,
	FORMATION_SLOTS,
	SLOT_TYPE,
} from "@/app/types"
import { formationData } from "@/app/data/formation_data"
import { formationSlotData } from "@/app/data/formation_slot_data"
import { toast } from "react-toastify"

export const newFormation = (formationID: number, formationRef: string): BUILDER_FORMATION | null => {
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
	return formationSlots.map((entry, index) => {
		return { slot_type: entry.slot_type, slot: getSlots(entry.slot_id, formationRef, entry.slot_type, index) }
	})
}

const getSlots = (slotArray: number[], formationRef: string, typeRef: SLOT_TYPE, formationIndex: number) => {
	const slots = slotArray
		.map((id, index) => {
			const newSlots = formationSlotData
				.filter((data) => data.id === id)
				.map((slot) => {
					return {
						...slot,
						ref_id: formationRef,
						slot_ref: formationRef + typeRef + formationIndex + "_" + index,
						selected_unit: null,
					}
				})
			return newSlots
		})
		.flat()

	return slots
}

export const handleSaveList = (list: BUILDER_LIST) => {
	localStorage.setItem("legionbuilder", JSON.stringify(list))
	toast.success("List saved locally")
}
