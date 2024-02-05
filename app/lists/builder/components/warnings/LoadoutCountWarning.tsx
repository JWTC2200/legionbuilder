import { loadoutCount, currentDetachmentSize } from "../detachment/utils"
import { listState } from "@/app/lists/state"

interface properties {
	slot_id: string
}

const LoadoutCountWarning = ({ slot_id }: properties) => {
	const { list } = listState()

	return loadoutCount(list, slot_id) > currentDetachmentSize(list, slot_id) ? (
		<div className="text-red-500 font-graduate text-center">Loadouts exceed detachment size!</div>
	) : null
}

export default LoadoutCountWarning
