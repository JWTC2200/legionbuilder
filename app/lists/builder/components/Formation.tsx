import { useState } from "react"
import { ListFormation } from "@/app/types"
import FormationToggle from "./FormationToggle"
import FormationDelete from "./FormationDelete"
import FormationSelector from "./FormationSelector"

interface properties {
	formation: ListFormation
}

const Formation = ({ formation }: properties) => {
	const [viewFormation, setViewFormation] = useState<boolean>(true)
	return (
		<div id={formation.id} className="sm:border-4 border-primary-950 sm:rounded-xl flex flex-col items-center">
			<div className="w-full banner_background sm:rounded-t-lg flex flex-wrap  justify-center sm:justify-between items-center text-center px-2">
				<FormationToggle view={viewFormation} toggle={setViewFormation} />
				<FormationSelector formation={formation} />
				<FormationDelete formation={formation} />
			</div>
			{viewFormation ? <div>Hello there</div> : null}
		</div>
	)
}

export default Formation
