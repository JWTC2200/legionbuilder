import { listState } from "../../state"
import Formation from "./Formation"

const FormationDisplay = () => {
	const { list } = listState()

	const html = list.formations.length ? (
		<div className="pb-4 flex flex-col gap-4">
			{list.formations.map((formation) => (
				<Formation key={formation.ref_id} formation={formation} />
			))}
		</div>
	) : null

	return <div className="w-full">{html}</div>
}

export default FormationDisplay
