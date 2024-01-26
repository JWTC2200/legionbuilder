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
	const compulsoryHTML = formation.compulsory ? (
		<Sections
			formationSubfaction={formation.subfaction}
			formationSection={formation.compulsory}
			sectionType={SLOTSET.compulsory}
			index={0}
		/>
	) : null
	const optionalHtml = formation.optional ? (
		<Sections
			formationSubfaction={formation.subfaction}
			formationSection={formation.optional}
			sectionType={SLOTSET.optional}
			index={0}
		/>
	) : null
	const choiceHtml = formation.choice ? (
		<div className="w-full flex flex-col">
			{formation.choice.map((choiceArray, index) => (
				<Sections
					key={formation.ref_id + "choiceSet" + index}
					formationSubfaction={formation.subfaction}
					formationSection={choiceArray}
					sectionType={SLOTSET.choice}
					index={index}
				/>
			))}
		</div>
	) : null

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
					{compulsoryHTML}
					{optionalHtml}
					{choiceHtml}
				</>
			) : null}
		</div>
	)
}

export default Formation
