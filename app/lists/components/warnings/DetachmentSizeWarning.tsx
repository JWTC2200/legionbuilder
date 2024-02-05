import { currentDetachmentSize } from "../../builder/components/detachment/utils"
import { findDetachmentBySlotId } from "../../builder/utils"
import { listState } from "@/app/lists/state"

interface properties {
	slot_id: string
}

const DetachmentSizeWarning = ({ slot_id }: properties) => {
	const { list } = listState()
	const detachment = findDetachmentBySlotId(list, slot_id)
	if (detachment) {
		return currentDetachmentSize(list, slot_id) > detachment.max_size ? (
			<div className="text-red-500 font-graduate text-center">Detachment too large!</div>
		) : null
	}
	return null
}

export default DetachmentSizeWarning
