import React from "react"
import { formationSlotData } from "@data/formation_slot_data"
import { getDetachmentIcon } from "@app/utils/detachmentIcons"

interface properties {
	slotId: number
}
function FormationSlot({ slotId }: properties) {
	const slot = formationSlotData.find((slot) => slot.id === slotId)

	return slot ? (
		<div className="flex flex-col justify-center items-center text-center bg-primary-950 text-primary-950 w-40 h-32 p-2 border-2 border-black rounded-xl bg-dataslate">
			{getDetachmentIcon(slot.type)}
			<p className="font-semibold font-graduate">{slot.type}</p>
			{slot.description ? <p className="italic text-sm">{slot.description}</p> : null}
		</div>
	) : null
}

export default FormationSlot
