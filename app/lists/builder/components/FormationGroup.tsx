import { ListFormationGroup } from "@/app/types"
import React from "react"
import DetachmentSlot from "./detachment/DetachmentSlot"

interface properties {
	formationGroup: ListFormationGroup
}

export const FormationGroup = ({ formationGroup }: properties) => {
	const { type, detachment_slots } = formationGroup

	return (
		<div className="w-full">
			<div className="w-full text-backgrounds-950 flex flex-col items-center">
				<h1 className="w-full text-center bg-backgrounds-950 text-backgrounds-50 font-graduate">
					~ {type} slots ~
				</h1>
				{/* {sectionType === SLOT_TYPE.compulsory ? <FormationCompulsoryWarning array={formationSection} /> : null}
				{sectionType === SLOT_TYPE.choice ? <FormationChoiceWarning array={formationSection!} /> : null} */}
				<div className="flex flex-wrap gap-2 py-2 sm:px-2 justify-center">
					{detachment_slots.map((slot) => (
						<DetachmentSlot key={slot.id} detachmentSlot={slot} />
					))}
				</div>
			</div>
		</div>
	)
}
