import { BUILDER_LIST, BUILDER_FORMATION, BUILDER_DETACHMENT_UNIT } from "../types"
import { toast } from "react-toastify"
import { sum } from "../utils/math"

export const addToClipboard = (link: string) => {
	navigator.clipboard.writeText(link)
	toast.success("Link added to clipboard")
}

export const listPointTotals = (list: BUILDER_LIST) => {
	const mainFactionPoints = sum(
		list.formations
			.filter((formation) => formation.faction === list.main_faction)
			.map((formation2) => formationPoints(formation2))
	)

	const allyFactionPoints = sum(
		list.formations
			.filter((formation) => formation.faction !== list.main_faction)
			.map((formation2) => formationPoints(formation2))
	)

	return {
		mainFactionPoints,
		allyFactionPoints,
		armyTotalPoints: mainFactionPoints + allyFactionPoints,
	}
}

export const formationPoints = (formation: BUILDER_FORMATION) => {
	const points = formation.formation_slots.map((slot) =>
		sum(
			slot.slot.map((detachment) => {
				if (detachment.selected_unit) {
					return detachmentPoints(detachment.selected_unit)
				}
				return 0
			})
		)
	)
	return sum(points)
}

export const detachmentPoints = (detachment: BUILDER_DETACHMENT_UNIT) => {
	return detachment.base_cost + detachment.upgrade_options.reduce((acc, pts) => acc + pts.cost, 0)
}

export const detachmentSize = (detachment: BUILDER_DETACHMENT_UNIT) => {
	return detachment.base_size + detachment.upgrade_options.reduce((acc, size) => acc + size.size, 0)
}
