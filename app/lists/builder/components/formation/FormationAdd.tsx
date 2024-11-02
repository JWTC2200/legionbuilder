import { listState } from "@/app/lists/state"
import { toast } from "react-toastify"
import { FiPlus } from "react-icons/fi"
import { emptyFormation } from "@/app/data/empty_objects"
import { nanoid } from "nanoid"
import { setFormation } from "@lists/builder/components/formation/utils"
import { useState } from "react"
import { FACTION, factionsWitFormations } from "@type/types"
import { formationData } from "@data/formation_data"

const FormationAdd = () => {
	const { list, setList } = listState()

	const [select, setSelect] = useState({ faction: FACTION.astartes, formation: 1000 })

	const addFormation = () => {
		const newFormation = { ...emptyFormation, id: nanoid() }
		const newList = { ...list, formations: [...list.formations, newFormation] }
		setList(newList)

		toast.success("Added formation")

		return { newFormation, newList }
	}

	const fillFormation = () => {
		const newFormation = addFormation()
		setFormation(select.formation, newFormation.newFormation, newFormation.newList, setList)
	}

	const handleFactionChange = (faction: FACTION) => {
		setSelect({
			faction: faction,
			formation: formationData
				.filter((formation) => formation.faction === faction)
				.filter((formation) => formation.allegiance === list.allegiance || formation.allegiance === null)[0].id,
		})
	}

	const filteredFactions = formationData
		.filter((formation) => formation.faction === select.faction)
		.filter((formation) => formation.allegiance === list.allegiance || formation.allegiance === null)

	return (
		<div className="text-primary-50 flex flex-wrap items-center justify-center gap-4 max-w-full sm:px-4 rounded-full py-2 bg-secondary-800 ">
			{/* <Filter /> */}
			<select
				value={select.faction}
				onChange={(e) => handleFactionChange(e.target.value as FACTION)}
				className="bg-inherit clip-path-halfagon-md sm:text-xl px-2 font-graduate text-center lg:max-w-full outline-none hover:text-primary-400 active:text-primary-400">
				{factionsWitFormations.map((faction) => (
					<option value={faction}>{faction}</option>
				))}
			</select>
			<select
				value={select.formation}
				onChange={(e) => setSelect({ ...select, formation: Number(e.target.value) })}
				className="max-w-full bg-inherit clip-path-halfagon-md sm:text-xl px-2 font-graduate lg:max-w-full outline-none hover:text-primary-400 active:text-primary-400 text-center">
				{filteredFactions.map((entry) => (
					<option value={entry.id} className={"text-right"}>
						{entry.name}
					</option>
				))}
			</select>
			<div className="builder_title_background flex flex-wrap justify-center items-center text-center gap-4 w-max mx-auto rounded-full px-3 border-4 border-backgrounds-950 hover:border-primary-400">
				<button
					onClick={fillFormation}
					className="p-1 hover:text-primary-400 font-graduate sm:text-xl flex items-center gap-1">
					<FiPlus /> Add formation
					<FiPlus />
				</button>
			</div>
		</div>
	)
}

export default FormationAdd
