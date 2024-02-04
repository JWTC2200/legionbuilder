import { ListDetachmentSlot } from "@/app/types"
import LoadoutCountWarning from "../warnings/LoadoutCountWarning"
import DetachmentSizeWarning from "../warnings/DetachmentSizeWarning"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentWarnings = ({ detachmentSlot }: properties) => {
	const slot_id = detachmentSlot.id
	return (
		<>
			<DetachmentSizeWarning slot_id={slot_id} />
			<LoadoutCountWarning slot_id={slot_id} />
		</>
	)
}

export default DetachmentWarnings
