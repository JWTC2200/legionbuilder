import { ListDetachmentSlot } from "@/app/types/listTypes"
import LoadoutCountWarning from "./LoadoutCountWarning"
import DetachmentSizeWarning from "./DetachmentSizeWarning"
import DetachmentAllegianceWarning from "./DetachmentAllegianceWarning"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentWarnings = ({ detachmentSlot }: properties) => {
	return (
		<>
			<DetachmentSizeWarning slot_id={detachmentSlot.id} />
			<LoadoutCountWarning slot_id={detachmentSlot.id} />
			<DetachmentAllegianceWarning slot_id={detachmentSlot.id} />
		</>
	)
}

export default DetachmentWarnings
