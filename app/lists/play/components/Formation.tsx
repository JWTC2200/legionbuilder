// "use client"

import { ListDetachment, ListFormation } from "@/app/types/listTypes"
import { listState } from "@lists/state"
import FormationBreakPoints from "../../builder/components/formation/FormationBreakPoints"
import OrdersSelector from "./OrdersSelector"

interface properties {
	formation: ListFormation
	detachments: ListDetachment[]
}

const Formation = ({ formation, detachments }: properties) => {
	const { list } = listState()
	if (!detachments.length) {
		return null
	}

	return (
		<div className="font-graduate">
			<h2 className="text-xl underline">{formation.name}</h2>
			<FormationBreakPoints formation={formation} className="flex gap-2" />
			<div className="flex flex-col items-start justify-center gap-1">
				{detachments.map((detachment) => (
					<div key={detachment.slot_id} className="flex flex-col gap-1 items-start">
						{detachment.name}
						<OrdersSelector slotId={detachment.slot_id} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Formation
