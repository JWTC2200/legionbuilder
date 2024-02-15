import { currentDetachmentSize, totalDetachmentPoints } from "./utils"
import { listState, dataslateSideWidget } from "@/app/lists/state"
import { ListDetachmentSlot } from "@type/listTypes"
import { findDetachmentBySlotId } from "../../utils"
import { detachmentData } from "@/app/data/detachment_data"
import { FaCircleQuestion } from "react-icons/fa6"

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
			if (visible === true && unitReference[0]?.id !== dataslate?.id) {
				setVisible(true)
			} else {
				setVisible(!visible)
			}
			setDataslate(unitReference[0])
		}
	}

	return (
		<div className="w-full flex flex-wrap gap-2 sm:gap-4 justify-center items-center relative py-1">
			{unitReference[0] && !unitReference[0].unique ? (
				<button
					onClick={handleDetachmentSideWidget}
					className="font-graduate text-xl sm:text-2xl font-bold text-tertiary-300 hover:text-primary-300 active:text-tertiary-500 p-1">
					<FaCircleQuestion />
				</button>
			) : null}
			<p className="sm:text-lg font-graduate ">
				Detachment size: {currentDetachmentSize(list, detachmentSlot.id)}
			</p>
			<p className="sm:text-lg font-graduate font-bold border-b border-primary-50">
				{totalDetachmentPoints(list, detachmentSlot.id)}
				<span className="font-normal">pts</span>
			</p>
		</div>
	)
}

export default DetachmentInfo
