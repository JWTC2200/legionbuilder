import FormationCompulsoryWarning from "./CompulsoryWarning"
import Detachment from "../detachment/Detachment"
import { BUILDER_FORMATION_SLOT, SLOT_TYPE, SUBFACTION_TYPE } from "@/app/types"
import FormationChoiceWarning from "./ChoiceWarning"

interface properties {
	formationSubfaction: SUBFACTION_TYPE | null
	formationSection: BUILDER_FORMATION_SLOT[]
	sectionType: SLOT_TYPE
}

export const Sections = ({ formationSubfaction, formationSection, sectionType }: properties) => {
	return (
		<div className="w-full">
			<div className="w-full text-backgrounds-950 flex flex-col items-center">
				<h1 className="w-full text-center bg-backgrounds-950 text-backgrounds-50 font-graduate">
					~ {sectionType} slots ~
				</h1>
				{sectionType === SLOT_TYPE.compulsory ? <FormationCompulsoryWarning array={formationSection} /> : null}
				{sectionType === SLOT_TYPE.choice ? <FormationChoiceWarning array={formationSection!} /> : null}
				<div className="flex flex-wrap gap-2 py-2 sm:px-2 justify-center">
					{formationSection.map((slot) => (
						<Detachment
							key={slot.slot_ref}
							formationSubfaction={formationSubfaction}
							detachmentSlot={slot}
							slotSet={sectionType}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Sections
