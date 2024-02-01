import { BUILDER_FORMATION } from "@/app/types"
import { formationData } from "@/app/data/formation_data"

interface properties {
	formation: BUILDER_FORMATION
}

const SubfactionWarning = ({ formation }: properties) => {
	const formationSubfaction = formationData.find((data) => data.id === formation.id)?.subfaction
	return (
		<>
			{formationSubfaction && formation.subfaction ? (
				formationSubfaction !== formation.subfaction ? (
					<p className="text-center text-red-600 pt-2 font-semibold">
						This formation is a {formationSubfaction} formation. You have selected {formation.subfaction}
					</p>
				) : null
			) : null}
		</>
	)
}

export default SubfactionWarning
