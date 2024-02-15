"use client"

import { ListDetachment } from "@/app/types/listTypes"
import { findDetachmentBySlotId, findFormationDetachmentSlotIds } from "@lists/builder/utils"
import { emptyDetachment } from "@/app/data/empty_objects"
import Formation from "./components/Formation"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import { GrPowerReset } from "react-icons/gr"
import { playState } from "./state"
import Scoreboard from "./components/Scoreboard"
const page = () => {
	const { playList, clearOrders, viewMode, setView } = playState()

	const listFormations = playList.formations.filter((formation) => formation.data_id)

	if (!listFormations.length) {
		return <div>Nothing to play with</div>
	}

	const listSlots = listFormations.map((formation) => findFormationDetachmentSlotIds(formation)).flat()

	const filteredDetachments = listSlots
		.map((slotId) => {
			const result = findDetachmentBySlotId(playList, slotId)
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
		<div className="sm:px-4">
			<BreadCrumbs>
				<Crumb href="/lists">Lists</Crumb>
				<Crumb href="/lists/play">Play</Crumb>
			</BreadCrumbs>
			<Scoreboard/>
			<div className="flex flex-col items-center w-full justify-center gap-4 py-4 font-graduate text-sm sm:text-md">
				<div className="w-full p-2 builder_title_background sm:clip-path-octagon-lg text-primary-50 flex flex-wrap justify-around gap-4 text-center py-2">
					<button onClick={clearOrders} className="text-xl hover:text-primary-500 active:text-primary-400 flex items-center gap-2">
						<GrPowerReset/> Orders
					</button>
					<h2 className="text-2xl">{playList.name}</h2>
					<button onClick={setView} className="w-20 text-xl hover:text-primary-500 active:text-primary-400">{viewMode ? "Detailed" : "Simple"}</button>
				</div>
				<div className="flex flex-col gap-2">
					{playList.formations.map((formation) => (
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
