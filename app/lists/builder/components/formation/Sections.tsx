import React from "react"
import FormationCompulsoryWarning from "./CompulsoryWarning"
import Detachment from "../detachment/Detachment"
import { BUILDER_DETACHMENT_SLOT, SLOTSET, SUBFACTION_TYPE } from "@/app/types"
import FormationChoiceWarning from "./ChoiceWarning"

interface properties {
	formationSubfaction?: SUBFACTION_TYPE
	formationSection: BUILDER_DETACHMENT_SLOT[]
	sectionType: SLOTSET
	index: number
}

export const Sections = ({ formationSubfaction, formationSection, sectionType, index }: properties) => {
	return (
		<div className="w-full">
			<div className="w-full text-backgrounds-950 flex flex-col items-center">
				<h1 className="w-full text-center bg-backgrounds-950 text-backgrounds-50 font-graduate">~ {sectionType} slots ~</h1>
				{sectionType === SLOTSET.compulsory ? <FormationCompulsoryWarning array={formationSection} /> : null}
				{sectionType === SLOTSET.choice ? <FormationChoiceWarning array={formationSection!} index={index} /> : null}
				<div className="flex flex-wrap gap-2 py-2 sm:px-2 justify-center">
					{formationSection.map((slot) => (
						<Detachment key={slot.slot_ref} formationSubfaction={formationSubfaction} detachmentSlot={slot} slotSet={sectionType} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Sections
