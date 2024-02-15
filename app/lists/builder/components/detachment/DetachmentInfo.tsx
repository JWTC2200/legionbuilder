import { currentDetachmentSize, totalDetachmentPoints } from "./utils"
import { listState } from "@/app/lists/state"
import { ListDetachmentSlot } from "@type/listTypes"
import { findDetachmentBySlotId } from "../../utils"
import { detachmentData } from "@/app/data/detachment_data"
import { dataslateSideWidget } from "@/app/lists/state"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentInfo = ({ detachmentSlot }: properties) => {
	const { list } = listState()
	const { dataslate, visible, setVisible, setDataslate } = dataslateSideWidget()

	const selectedUnit = findDetachmentBySlotId(list, detachmentSlot.id)

	const unitReference = detachmentData.filter((detachment) => detachment.id === selectedUnit?.id)

	const handleDetachmentSideWidget = () => {
		if (unitReference[0]) {
			setDataslate(unitReference[0])
			setVisible(true)
		}
	}

	return (
		<div className="w-full flex flex-wrap gap-2 sm:gap-4 justify-center items-center relative">
			{unitReference[0] ? (
				<button onClick={handleDetachmentSideWidget} className="font-graduate">
					?
				</button>
			) : null}
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
