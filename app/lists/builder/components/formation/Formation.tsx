"use client"

import { BUILDER_FORMATION, FACTION, SLOTSET } from "@/app/types"
import { useState } from "react"
import Selector from "./Selector"
import Toggle from "./Toggle"
import RemoveBtn from "./RemoveBtn"
import BreakHtml from "../../../view/components/FormationBreakHtml"
import Sections from "./Sections"
import SubfactionSelector from "./SubfactionSelector"
import SubfactionWarning from "./SubfactionWarning"
import DuplicateBtn from "./DuplicateBtn"

const Formation = ({ formation }: { formation: BUILDER_FORMATION }) => {
	const [viewFormation, setViewFormation] = useState<boolean>(true)

	const formationSlotHTML = formation.formation_slots.map((slot, index) => (
		<Sections
			key={formation.ref_id + slot.slot_type + index}
			formationSubfaction={formation.subfaction}
			formationSection={slot.slot}
			sectionType={slot.slot_type}
		/>
	))

	return (
		<div id={formation.ref_id} className="sm:border-4 border-primary-950 sm:rounded-xl flex flex-col items-center">
			<div className="w-full banner_background sm:rounded-t-lg flex flex-wrap  justify-center sm:justify-between items-center text-center px-2">
				<Toggle view={viewFormation} toggle={setViewFormation} />
				<Selector formation={formation} />
				<div className="flex gap-2">
					<DuplicateBtn formation={formation} />
					<RemoveBtn formation={formation} />
				</div>
			</div>
			<SubfactionWarning formation={formation} />

			{viewFormation ? (
				<>
					{formation.faction === FACTION.astartes ? <SubfactionSelector formation={formation} /> : null}
					<BreakHtml
						formation={formation}
						className="text-black my-2 flex flex-wrap gap-2 font-graduate justify-center"
					/>
					{formation.formation_slots ? formationSlotHTML : null}
				</>
			) : null}
		</div>
	)
}

export default Formation
