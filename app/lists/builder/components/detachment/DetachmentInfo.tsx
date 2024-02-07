import { unitData } from "@/app/data/unit_data"
import { currentDetachmentSize, totalDetachmentPoints } from "./utils"
import { listState } from "@/app/lists/state"
import { ListDetachmentSlot } from "@type/listTypes"
import { findDetachmentBySlotId } from "../../utils"
import ReferencePopup from "./ReferencePopup"
import { detachmentData } from "@/app/data/detachment_data"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentInfo = ({ detachmentSlot }: properties) => {
	const { list } = listState()

	const selectedUnit = findDetachmentBySlotId(list, detachmentSlot.id)

	const unitReference = detachmentData.filter((detachment) => detachment.id === selectedUnit?.id)

	return (
		<div className="w-full flex flex-wrap gap-2 sm:gap-4 justify-center items-center relative">
			<p className="text-sm sm:text-base font-graduate ">
				Detachment size: {currentDetachmentSize(list, detachmentSlot.id)}
			</p>
			<p className="text-sm font-graduate font-bold border-b border-primary-50">
				{totalDetachmentPoints(list, detachmentSlot.id)}
				<span className="font-normal">pts</span>
			</p>
		</div>
	)
}

export default DetachmentInfo
