import { useState } from "react"
import { ListFormation } from "@type/listTypes"
import { FACTION } from "@type/types"
import FormationToggle from "./FormationToggle"
import FormationDelete from "./FormationDelete"
import FormationSelector from "./FormationSelector"
import { FormationGroup } from "./FormationGroup"
import SubfactionSelector from "./SubfactionSelector"
import FormationBreakPoints from "./FormationBreakPoints"
import FormationNickname from "./FormationNickname"
import { totalFormationPoints } from "@lists/builder/utils"
import { listState } from "@/app/lists/state"
import ResizingBox from "@/app/components/ResizingBox"
import SimpleWarning from "@lists/builder/components/warnings/SimpleWarning"
import FormationShift from "@lists/builder/components/formation/FormationShift"
import FormationDuplicate from "@lists/builder/components/formation/FormationDuplicate"

interface properties {
	formation: ListFormation
}

const Formation = ({ formation }: properties) => {
	const [viewFormation, setViewFormation] = useState<boolean>(true)
	const { list } = listState()

	const formationGroupHTML = formation.detachment_groups.map((group) => (
		<FormationGroup key={group.id} formationGroup={group} />
	))

	return (
		<div
			id={formation.id}
			className={`sm:rounded-xl flex flex-grow flex-col min-w-0 items-center overflow-hidden ${viewFormation && "pb-4"}`}>
			<div
				className={`w-full font-graduate builder_title_background sm:rounded-t-lg flex justify-around sm:justify-between items-center text-center p-1 sm:p-2 sm:px-6 z-10 sm:gap-2 ${!viewFormation && "sm:rounded-b-lg"}`}>
				<FormationToggle view={viewFormation} toggle={setViewFormation} />
				<FormationSelector formation={formation} />
				<div className={"flex gap-1 sm:gap-2 items-center"}>
					<FormationDuplicate formation={formation} />
					<FormationShift formation={formation} />
					<FormationDelete formation={formation} />
				</div>
			</div>
			<div className="overflow-hidden w-full">
				<ResizingBox
					toggle={viewFormation}
					className={
						viewFormation
							? "sm:border-b-2 sm:border-l-2 sm:border-r-2 rounded-b-xl border-backgrounds-900 pb-2"
							: ""
					}>
					<>
						<div className={"flex flex-col justify-center items-center py-2 gap-2"}>
							{formation.allegiance !== null && formation.allegiance !== list.allegiance ? (
								<SimpleWarning>{formation.allegiance} only formation!</SimpleWarning>
							) : null}
							<div className="flex flex-wrap gap-2 items-center justify-center">
								<FormationNickname formation={formation} />
								{formation.faction === FACTION.astartes ? (
									<SubfactionSelector formation={formation} />
								) : null}
							</div>
							<h3 className="bg-inherit sm:rounded-t-lg sm:text-xl font-graduate text-center text-tertiary-00 font-bold">
								{totalFormationPoints(list, formation)} points
							</h3>
							<FormationBreakPoints
								formation={formation}
								className=" flex flex-wrap gap-2 font-graduate justify-center"
							/>
						</div>
						{formationGroupHTML}
					</>
				</ResizingBox>
			</div>
		</div>
	)
}

export default Formation
