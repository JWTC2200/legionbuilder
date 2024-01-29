import { BUILDER_FORMATION_SLOT, SUBFACTION_TYPE } from "@/app/types"
import SizeWarning from "./SizeWarning"
import SubfactionWarning from "./SubfactionWarning"
import Details from "./Details"

interface properties {
	detachmentSlot: BUILDER_FORMATION_SLOT
	formationSubfaction: SUBFACTION_TYPE | null
}

const SelectedUnit = ({ detachmentSlot, formationSubfaction }: properties) => {
	if (detachmentSlot.selected_unit) {
		return (
			<>
				<SubfactionWarning
					selectedUnit={detachmentSlot.selected_unit}
					formationSubfaction={formationSubfaction}
				/>
				<SizeWarning selectedUnit={detachmentSlot.selected_unit} />
				<Details selectedUnit={detachmentSlot.selected_unit} />
			</>
		)
	}
}

export default SelectedUnit
