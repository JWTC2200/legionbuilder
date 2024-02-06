import { ListFormationGroup, List } from "@/app/types"
import Detachment from "./Detachment"

interface properties {
	list: List
	formationGroup: ListFormationGroup
}

const FormationGroup = ({ list, formationGroup }: properties) => {
	const groupIds = formationGroup.detachment_slots.map((slot) => slot.id)
	const detachments = list.detachments
		.filter((detachment) => groupIds.includes(detachment.slot_id))
		.filter((detachment) => detachment.id)

	if (!detachments.length) {
		return null
	}

	return (
		<div className="pt-1 flex flex-col gap-1">
			<h4 className="font-bold capitalize font-graduate">{formationGroup.type}</h4>
			{detachments.map((detachment, index) => (
				<Detachment key={`${formationGroup.id}detachment${index}`} list={list} detachment={detachment} />
			))}
		</div>
	)
}

export default FormationGroup
