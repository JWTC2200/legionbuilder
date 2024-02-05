import { listState } from "@/app/lists/state"
import { totalListPoints } from "../../builder/utils"
import SimpleWarning from "./SimpleWarning"

const ListWarnings = () => {
	const { list } = listState()

	const { mainFactionPoints, subFactionPoints, totalPoints } = totalListPoints(list)

	return (
		<div className="text-red-600 font-graduate font-bold">
			{totalPoints > list.points && <SimpleWarning>Total points for list has exceeded game size</SimpleWarning>}
			{subFactionPoints > list.points * 0.3 && <SimpleWarning>Ally points more than 30% of list</SimpleWarning>}
		</div>
	)
}

export default ListWarnings
