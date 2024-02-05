import { ListFormationGroup, List } from "@/app/types"

interface properties {
	list: List
	formationGroup: ListFormationGroup
}

const FormationGroup = ({ list, formationGroup }: properties) => {
	const groupIds = formationGroup.detachment_slots.map((slot) => slot.id)
	const detachmentSlots = list.detachments
		.filter((detachment) => groupIds.includes(detachment.slot_id))
		.filter((detachment) => detachment.id)

	if (!detachmentSlots.length) {
		return null
	}

	return (
		<div>
			<h4>{formationGroup.type}</h4>
		</div>
	)
}

export default FormationGroup
