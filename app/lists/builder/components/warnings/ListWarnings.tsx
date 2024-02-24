import { listState } from "@/app/lists/state"
import { totalListPoints } from "../../utils"
import SimpleWarning from "./SimpleWarning"

const ListWarnings = () => {
	const { list } = listState()

	const { subFactionPoints, totalPoints } = totalListPoints(list)

	const allegianceArray = list.detachments
		.map((detachment) => detachment.allegiance)
		.filter((allegiance) => allegiance !== null && allegiance !== list.allegiance)

	return (
		<div className="text-red-600 font-graduate">
			{totalPoints > list.points && <SimpleWarning>Total points for list has exceeded game size</SimpleWarning>}
			{subFactionPoints > list.points * 0.3 && list.gamemode !== "titandeath" && (
				<SimpleWarning>Ally points more than 30% of list</SimpleWarning>
			)}
			{allegianceArray.length ? <SimpleWarning>Detachments with wrong allegiance</SimpleWarning> : null}
		</div>
	)
}

export default ListWarnings
