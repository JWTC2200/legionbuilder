import { useState, useRef, useEffect } from "react"
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

interface properties {
	formation: ListFormation
}

const Formation = ({ formation }: properties) => {
	const [viewFormation, setViewFormation] = useState<boolean>(true)
	const [height, setHeight] = useState<number>(0)
	const [width, setWidth] = useState(window.innerWidth)
	const { list } = listState()
	const outerRef = useRef<HTMLDivElement>(null)
	const innerRef = useRef<HTMLDivElement>(null)

	const formationGroupHTML = formation.detachment_groups.map((group) => (
		<FormationGroup key={group.id} formationGroup={group} />
	))

	useEffect(() => {
		if (innerRef.current?.clientHeight) {
			setHeight(innerRef.current.clientHeight)
		}

		const handleResize = () => {
			setWidth(window.innerWidth)
		}
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [list, width])

	return (
		<div
			id={formation.id}
			className={`sm:rounded-xl flex flex-col items-center sm:border-2 border-backgrounds-900 overflow-hidden ${viewFormation && "pb-4"}`}>
			<div className="w-full font-graduate builder_title_background sm:rounded-t-lg flex sm:flex-row flex-col justify-center sm:justify-between items-center text-center py-2 px-6 z-10 gap-2">
				<FormationToggle view={viewFormation} toggle={setViewFormation} className="hidden sm:block" />
				<FormationSelector formation={formation} />
				<FormationDelete formation={formation} className="hidden sm:block" />
				<div className="sm:hidden flex justify-between items-center gap-8">
					<FormationToggle view={viewFormation} toggle={setViewFormation} />
					<FormationDelete formation={formation} />
				</div>
			</div>

			<div className="overflow-hidden">
				<div
					ref={outerRef}
					style={{ height: viewFormation ? height + "px" : "0px" }}
					className="transition-all duration-300">
					<div ref={innerRef}>
						<div className={"flex flex-col justify-center items-center py-2 gap-2"}>
							<div className="flex flex-wrap gap-2 items-center justify-center">
								<FormationNickname formation={formation} />
								{formation.faction === FACTION.astartes ? (
									<SubfactionSelector formation={formation} />
								) : null}
							</div>

							<h3 className="bg-inherit sm:rounded-t-lg sm:text-xl font-graduate text-center">
								{totalFormationPoints(list, formation)} points
							</h3>
							<FormationBreakPoints
								formation={formation}
								className=" flex flex-wrap gap-2 font-graduate justify-center"
							/>
						</div>
						{formationGroupHTML}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Formation
