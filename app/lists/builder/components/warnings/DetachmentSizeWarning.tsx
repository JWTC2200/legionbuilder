import { currentDetachmentSize } from "../detachment/utils"
import { findDetachmentBySlotId } from "../../utils"
import { listState } from "@/app/lists/state"
import SimpleWarning from "./SimpleWarning"

interface properties {
	slot_id: string
}

const DetachmentSizeWarning = ({ slot_id }: properties) => {
	const { list } = listState()
	const detachment = findDetachmentBySlotId(list, slot_id)
	if (detachment) {
		return currentDetachmentSize(list, slot_id) > detachment.max_size ? (
			<SimpleWarning>Detachment too large</SimpleWarning>
		) : null
	}
	return null
}

export default DetachmentSizeWarning
