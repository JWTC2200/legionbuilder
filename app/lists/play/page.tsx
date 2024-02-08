"use client"

import { ListDetachment } from "@/app/types/listTypes"
import { listState } from "../state"
import { findDetachmentBySlotId, findFormationDetachmentSlotIds } from "@lists/builder/utils"
import { emptyDetachment } from "@/app/data/empty_objects"
import Formation from "./components/Formation"

const page = () => {
	const { list } = listState()

	const listFormations = list.formations.filter((formation) => formation.data_id)

	if (!listFormations.length) {
		return <div>Nothing to play with</div>
	}

	const listSlots = listFormations.map((formation) => findFormationDetachmentSlotIds(formation)).flat()

	const filteredDetachments = listSlots
		.map((slotId) => {
			const result = findDetachmentBySlotId(list, slotId)
			if (!result) {
				return emptyDetachment
			}
			return result
		})
		.filter((slot) => slot && slot.id)

	const formationDetachments = (formationId: string, detachmentArray: ListDetachment[]): ListDetachment[] => {
		return detachmentArray.filter((detachment) => detachment.formation_id === formationId)
	}

	return (
		<div>
			<div className="flex flex-col items-start justify-center gap-2">
				{list.formations.map((formation) => (
					<Formation
						key={formation.id}
						formation={formation}
						detachments={formationDetachments(formation.id, filteredDetachments)}
					/>
				))}
			</div>
			{/* <pre>{JSON.stringify(filteredDetachments, null, 2)}</pre> */}
		</div>
	)
}

export default page
