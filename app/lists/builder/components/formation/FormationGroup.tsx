import { ListFormationGroup } from "@/app/types/listTypes"
import { SLOT_TYPE } from "@/app/types/types"
import { listState } from "@/app/lists/state"
import DetachmentSlot from "../detachment/DetachmentSlot"
import { formationSlotsFilled, formationGroupSlots } from "../../utils"
import SimpleWarning from "../warnings/SimpleWarning"

interface properties {
	formationGroup: ListFormationGroup
}

export const FormationGroup = ({ formationGroup }: properties) => {
	const { type, detachment_slots } = formationGroup
	const { list } = listState()

	const groupIds = formationGroupSlots(formationGroup)
	const slotsUsed = formationSlotsFilled(list, groupIds)

	return (
		<div className="w-full mb-2">
			<div className="w-full text-backgrounds-950 flex flex-col gap-2 items-center">
				<h1 className="w-full text-center bg-backgrounds-950 text-backgrounds-50 font-graduate">
					~ {type} slots ~
				</h1>
				{formationGroup.type === SLOT_TYPE.compulsory && slotsUsed < groupIds.length ? (
					<SimpleWarning>Empty compulsory slots!</SimpleWarning>
				) : null}
				{formationGroup.type === SLOT_TYPE.choice && slotsUsed > 1 ? (
					<SimpleWarning>Too many detachments</SimpleWarning>
				) : null}
				<div className="flex flex-wrap gap-2 sm:px-2 justify-center">
					{detachment_slots.map((slot) => (
						<DetachmentSlot key={slot.id} detachmentSlot={slot} />
					))}
				</div>
			</div>
		</div>
	)
}
