import { listState } from "../../state"
import Formation from "./Formation"

const FormationDisplay = () => {
	const { list } = listState()

	const displayFormations = () => {
		if (list.formations.length) {
			return (
				<div className="pb-4 flex flex-col gap-4">
					{list.formations.map((formation) => (
						<Formation key={formation.ref_id} formation={formation} />
					))}
				</div>
			)
		}
	}

	return <div className="w-full">{displayFormations()}</div>
}

export default FormationDisplay
