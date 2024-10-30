import { useState } from "react"
import { BsFilterLeft } from "react-icons/bs"
import { factionFilterState, listState } from "@lists/state"

const Filter = () => {
	const [open, setOpen] = useState(false)
	const { list } = listState()
	const { mainFaction, alliedFaction, legends, setAlliedFaction, setMainFaction, setLegends } = factionFilterState()

	return (
		<div className={"font-graduate cursor-pointer"}>
			<button
				className={`flex items-center hover:text-tertiary-400 active:text-tertiary-400 cursor-pointer ${open ? "text-tertiary-400" : ""}`}
				onClick={() => setOpen(!open)}>
				<BsFilterLeft className={"text-[24px] "} />
			</button>
			<div
				className={`absolute z-50 ${open ? "" : "max-h-0"} builder_title_background clip-path-halfagon-md overflow-hidden transition-all`}>
				<ol className="p-2 space-y-1">
					<li className={"flex gap-1"} onClick={() => setMainFaction(!mainFaction)}>
						<input type={"checkbox"} id={"filter_main_faction"} checked={mainFaction} />{" "}
						<label htmlFor={"main_faction"}>{list.faction}</label>
					</li>
					<li className={"flex gap-1"} onClick={() => setAlliedFaction(!alliedFaction)}>
						<input type={"checkbox"} id={"filter_allied_faction"} checked={alliedFaction} />
						<label htmlFor={"filter_allied_faction"}>Allies</label>
					</li>
					<li className={"flex gap-1"} onClick={() => setLegends(!legends)}>
						<input type={"checkbox"} id={"filter_legends"} checked={legends} />
						<label>Formations of Legend</label>
					</li>
				</ol>
			</div>
		</div>
	)
}

export default Filter
