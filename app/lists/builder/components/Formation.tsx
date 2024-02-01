import { useState } from "react"
import { listState } from "@/app/lists/state"
import { ListFormation } from "@/app/types"
import FormationToggle from "./FormationToggle"
import FormationDelete from "./FormationDelete"
import FormationSelector from "./FormationSelector"
import { FormationGroup } from "./FormationGroup"

interface properties {
	formation: ListFormation
}

const Formation = ({ formation }: properties) => {
	const [viewFormation, setViewFormation] = useState<boolean>(true)
	const { list } = listState()

	const formationGroupHTML = formation.detachment_groups.map((group) => (
		<FormationGroup key={group.id} formationGroup={group} />
	))

	return (
		<div id={formation.id} className="sm:border-4 border-primary-950 sm:rounded-xl flex flex-col items-center">
			<div className="w-full banner_background sm:rounded-t-lg flex flex-wrap  justify-center sm:justify-between items-center text-center px-2">
				<FormationToggle view={viewFormation} toggle={setViewFormation} />
				<FormationSelector formation={formation} />
				<FormationDelete formation={formation} />
			</div>
			{viewFormation && <>{formationGroupHTML}</>}
			{/* {viewFormation ? <div className="text-black flex flex-col gap-2 ">{formationHTML}</div> : null} */}
		</div>
	)
}

export default Formation
