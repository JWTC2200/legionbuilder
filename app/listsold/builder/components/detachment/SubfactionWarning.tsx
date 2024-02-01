import { BUILDER_DETACHMENT_UNIT, SUBFACTION_TYPE } from "@/app/types"

interface properties {
	selectedUnit: BUILDER_DETACHMENT_UNIT
	formationSubfaction: SUBFACTION_TYPE | null
}

const SubfactionWarning = ({ selectedUnit, formationSubfaction }: properties) => {
	const warning = () => {
		if (selectedUnit.subfaction !== formationSubfaction) {
			return (
				<p className="text-center text-red-600 pt-2 font-semibold">
					This detachment is a {selectedUnit.subfaction} detachment.Your formation is {formationSubfaction}.
				</p>
			)
		}
	}

	return selectedUnit.subfaction && formationSubfaction ? warning() : null
}

export default SubfactionWarning
