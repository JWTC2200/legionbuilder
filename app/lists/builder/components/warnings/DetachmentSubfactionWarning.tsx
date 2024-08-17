import { listState } from "@lists/state"
import { findDetachmentBySlotId } from "@lists/builder/utils"
import SimpleWarning from "@lists/builder/components/warnings/SimpleWarning"

interface properties {
	slot_id: string
}

const DetachmentSubfactionWarning = ({ slot_id }: properties) => {
	const { list } = listState()
	const detachment = findDetachmentBySlotId(list, slot_id)

	if (detachment) {
		const formationSubfaction = list.formations.find(
			(formation) => formation.id === detachment?.formation_id
		)!.subfaction

		return detachment.subfaction !== null && detachment.subfaction !== formationSubfaction ? (
			<SimpleWarning>{detachment.subfaction} only detachment!</SimpleWarning>
		) : null
	}

	return null
}

export default DetachmentSubfactionWarning
