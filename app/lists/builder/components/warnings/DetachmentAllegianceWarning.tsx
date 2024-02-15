import SimpleWarning from "./SimpleWarning"
import { findDetachmentBySlotId } from "../../utils"
import { listState } from "@/app/lists/state"

interface properties {
	slot_id: string
}

const DetachmentAllegianceWarning = ({ slot_id }: properties) => {
	const { list } = listState()
	const detachment = findDetachmentBySlotId(list, slot_id)
	if (detachment) {
		return detachment.allegiance !== null && detachment.allegiance !== list.allegiance ? (
			<SimpleWarning>Detachment allegiance different from list</SimpleWarning>
		) : null
	}

	return null
}
export default DetachmentAllegianceWarning
