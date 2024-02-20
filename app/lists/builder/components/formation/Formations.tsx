import { listState } from "../../../state"
import Formation from "./Formation"

const Formations = () => {
	const { list } = listState()

	const formationHTML = () => {
		if (list.formations.length) {
			return (
				<div className="flex flex-col gap-4">
					{list.formations.map((formation) => (
						<Formation formation={formation} key={formation.id} />
					))}
				</div>
			)
		}
		return null
	}

	return <div className="w-full">{formationHTML()}</div>
}

export default Formations
