import React from "react"
import { FORMATION_SLOTS } from "@type/types"
import FormationSlot from "@app/reference/formations/[name]/FormationSlot"

interface properties {
	formationSlots: FORMATION_SLOTS
}
function FormationGroups({ formationSlots }: properties) {
	return (
		<div className="flex flex-col items-center">
			<h2 className="text-2xl w-full text-center font-graduate font-bold bg-primary-950 text-primary-50 py-1 px-3 mb-2">
				{`${formationSlots.slot_type} Detachments`}
			</h2>
			{formationSlots.text ? (
				<div className={"text-primary-950 flex flex-wrap justify-center items-center text-md italic "}>
					{formationSlots.text}
				</div>
			) : null}
			<div className="text-primary-950 flex flex-wrap justify-center items-center gap-4 m-2">
				{formationSlots.slot_id.map((slotId, index) => {
					return <FormationSlot slotId={slotId} key={slotId + formationSlots.slot_type + index} />
				})}
			</div>
		</div>
	)
}

export default FormationGroups
