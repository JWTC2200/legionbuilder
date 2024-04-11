import { listState } from "@/app/lists/state"
import { totalListPoints } from "../../utils"
import SimpleWarning from "./SimpleWarning"

const ListWarnings = () => {
	const { list } = listState()

	const { mainFactionPoints, totalPoints } = totalListPoints(list)

	const allegianceArray = list.detachments
		.map((detachment) => detachment.allegiance)
		.filter((allegiance) => allegiance !== null && allegiance !== list.allegiance)

	return (
		<div className="text-red-600 font-graduate">
			{totalPoints > list.points && <SimpleWarning>Total points for list has exceeded game size</SimpleWarning>}
			{mainFactionPoints < list.points * 0.7 && list.gamemode !== "titandeath" && (
				<SimpleWarning>Main faction must be at least 70% of list</SimpleWarning>
			)}
			{allegianceArray.length ? <SimpleWarning>Detachments with wrong allegiance</SimpleWarning> : null}
		</div>
	)
}

export default ListWarnings
