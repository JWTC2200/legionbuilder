"use client"

import { ListDetachment } from "@/app/types/listTypes"
import { listState } from "../state"
import { findDetachmentBySlotId, findFormationDetachmentSlotIds } from "@lists/builder/utils"
import { emptyDetachment } from "@/app/data/empty_objects"
import Formation from "./components/Formation"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import { GrPowerReset } from "react-icons/gr"
import { ordersState } from "./state"

const page = () => {
	const { list } = listState()
	const { clearOrders } = ordersState()

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
			<BreadCrumbs>
				<Crumb href="/lists">Lists</Crumb>
				<Crumb href="/lists/play">Play</Crumb>
			</BreadCrumbs>
			<div className="flex flex-col items-center w-full justify-center gap-2 py-4 font-graduate">
				<div className="w-full p-2 builder_title_background sm:clip-path-octagon-lg text-primary-50 flex flex-wrap justify-around gap-4 text-center py-2">
					<button onClick={clearOrders} className="text-xl hover:text-primary-500 active:text-primary-400">
						<GrPowerReset />
					</button>
					<h2 className="text-2xl">{list.name}</h2>
					<div></div>
				</div>
				<div className="flex flex-col gap-2">
					{list.formations.map((formation) => (
						<Formation
							key={formation.id}
							formation={formation}
							detachments={formationDetachments(formation.id, filteredDetachments)}
						/>
					))}
				</div>
			</div>
			{/* <pre>{JSON.stringify(filteredDetachments, null, 2)}</pre> */}
		</div>
	)
}

export default page
