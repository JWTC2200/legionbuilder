import { currentDetachmentSize, totalDetachmentPoints } from "./utils"
import { listState } from "@/app/lists/state"
import { ListDetachmentSlot } from "@type/listTypes"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentInfo = ({ detachmentSlot }: properties) => {
	const { list } = listState()
	return (
		<div className="w-full flex flex-wrap gap-2 sm:gap-4 justify-center items-center relative">
			{/* <ReferencePopup detachmentId={selectedUnit.id} /> */}
			<p>Ss</p>
			<p className="text-sm sm:text-base font-graduate ">
				Detachment size: {currentDetachmentSize(list, detachmentSlot.id)}
			</p>
			<p className="text-sm font-graduate font-bold border-b underline">
				{totalDetachmentPoints(list, detachmentSlot.id)}
				<span className="font-normal">pts</span>
			</p>
		</div>
	)
}

export default DetachmentInfo
