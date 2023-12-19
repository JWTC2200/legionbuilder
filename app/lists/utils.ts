import { BUILDER_LIST, BUILDER_FORMATION, BUILDER_DETACHMENT_UNIT, DB_ENTRY } from "../types"
import { toast } from "react-toastify"

export const addToClipboard = (link: string) => {
	navigator.clipboard.writeText(link)
	toast.success("Link added to clipboard")
}

export const listPointTotals = (list: BUILDER_LIST) => {
	const mainFactionPoints = list.formations
		.filter((formation) => formation.faction === list.main_faction)
		.map((formation2) => formationPoints(formation2))
		.reduce((acc, pts) => acc + pts, 0)

	const allyFactionPoints = list.formations
		.filter((formation) => formation.faction !== list.main_faction)
		.map((formation2) => formationPoints(formation2))
		.reduce((acc, pts) => acc + pts, 0)

	return {
		mainFactionPoints,
		allyFactionPoints,
		armyTotalPoints: mainFactionPoints + allyFactionPoints,
	}
}

export const formationPoints = (formation: BUILDER_FORMATION) => {
	const compulsorySlotPoints = formation.compulsory ? formation.compulsory.map((detachment) => (detachment.selected_unit ? detachmentPoints(detachment.selected_unit) : 0)).reduce((acc, pts) => acc + pts, 0) : 0
	const optionalSlotPoints = formation.optional ? formation.optional.map((detachment) => (detachment.selected_unit ? detachmentPoints(detachment.selected_unit) : 0)).reduce((acc, pts) => acc + pts, 0) : 0
	const choiceSlotPoints = formation.choice
		? formation.choice
				.map((choice) =>
					choice.map((detachment) => {
						const dpoints = detachment.selected_unit ? detachmentPoints(detachment.selected_unit) : 0
						return dpoints
					})
				)
				.flat()
				.reduce((acc, pts) => acc + pts, 0)
		: 0

	return choiceSlotPoints + compulsorySlotPoints + optionalSlotPoints
}

export const detachmentPoints = (detachment: BUILDER_DETACHMENT_UNIT) => {
	return detachment.base_cost + detachment.upgrade_options.reduce((acc, pts) => acc + pts.cost, 0)
}

export const detachmentSize = (detachment: BUILDER_DETACHMENT_UNIT) => {
	return detachment.base_size + detachment.upgrade_options.reduce((acc, size) => acc + size.size, 0)
}
