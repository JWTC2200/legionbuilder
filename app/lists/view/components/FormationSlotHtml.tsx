import { BUILDER_FORMATION_SLOT } from "@/app/types"
import { slotHTML, detachmentsTaken } from "../utils"

const FormationSlotHtml = ({ slotArray, type }: { slotArray: BUILDER_FORMATION_SLOT[] | null; type: string }) => {
	const html = slotArray ? slotArray.map((slot) => slotHTML(slot)) : null

	return (
		<>
			{html && detachmentsTaken(html) ? (
				<div className="mb-1">
					<h3 className="font-graduate">{type}:</h3>
					<ul className="">{html}</ul>
				</div>
			) : null}
		</>
	)
}

export default FormationSlotHtml
