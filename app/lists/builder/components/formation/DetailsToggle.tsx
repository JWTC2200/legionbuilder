import { ListFormation } from "@type/listTypes"
import { listDetails } from "@lists/state"

interface properties {
	formation: ListFormation
}

const DetailsToggle = ({ formation }: properties) => {
	const { visible, setVisibility } = listDetails()

	const handleVisibility = () => {
		if (visible.includes(formation.id)) {
			setVisibility(visible.filter((entry) => entry !== formation.id))
		} else {
			setVisibility([...visible, formation.id])
		}
	}

	return <button onClick={handleVisibility}>{visible.includes(formation.id) ? "Simple" : "Detailed"}</button>
}

export default DetailsToggle
