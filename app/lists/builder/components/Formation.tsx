import { useState } from "react"
import { listDetails } from "@/app/lists/state"
import { ListFormation, FACTION } from "@/app/types"
import FormationToggle from "./FormationToggle"
import FormationDelete from "./FormationDelete"
import FormationSelector from "./FormationSelector"
import { FormationGroup } from "./FormationGroup"
import SubfactionSelector from "./SubfactionSelector"
import FormationBreakPoints from "./FormationBreakPoints"
import DetailsToggle from "./DetailsToggle"

interface properties {
	formation: ListFormation
}

const Formation = ({ formation }: properties) => {
	const [viewFormation, setViewFormation] = useState<boolean>(true)

	const formationGroupHTML = formation.detachment_groups.map((group) => (
		<FormationGroup key={group.id} formationGroup={group} />
	))

	return (
		<div id={formation.id} className="sm:border-4 border-primary-950 sm:rounded-xl flex flex-col items-center">
			<div className="w-full banner_background sm:rounded-t-lg flex flex-wrap  justify-center sm:justify-between items-center text-center px-2">
				<div className="flex gap-2 items-center font-graduate">
					<FormationToggle view={viewFormation} toggle={setViewFormation} />
					<DetailsToggle formation={formation} />
				</div>

				<FormationSelector formation={formation} />
				<FormationDelete formation={formation} />
			</div>

			{viewFormation && (
				<>
					<div className="flex flex-col justify-center items-center py-2 gap-2">
						{formation.faction === FACTION.astartes ? <SubfactionSelector formation={formation} /> : null}
						<FormationBreakPoints
							formation={formation}
							className="text-black flex flex-wrap gap-2 font-graduate justify-center"
						/>
					</div>
					{formationGroupHTML}
				</>
			)}
		</div>
	)
}

export default Formation
