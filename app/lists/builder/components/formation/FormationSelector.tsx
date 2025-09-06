import { ListFormation } from "@type/listTypes"
import { formationData } from "@/app/data/formation_data"
import { listState } from "@/app/lists/state"
import { FaCircleQuestion } from "react-icons/fa6"
import { dataslateSideWidget } from "@/app/lists/state"
import { sortFormationFactions } from "@app/utils/sorting"
import { setFormation } from "@lists/builder/components/formation/utils"
import factionColours from "@app/utils/factionColours"

interface FormationSelector {
	formation: ListFormation
}

const FormationSelector = ({ formation }: FormationSelector) => {
	const { list, setList } = listState()
	const sideWidget = dataslateSideWidget()

	const filteredFormations = () => {
		const gameModeFormations =
			list.gamemode === "titandeath"
				? formationData.filter((formation) => formation.id >= 4000 && formation.id <= 4999)
				: formationData

		return gameModeFormations.filter((formation) => {
			if (formation.allegiance === null || formation.allegiance === list.allegiance) return formation
		})
	}

	const handleFormationSideWidget = () => {
		const formationInfo = formationData.find((formationData) => formationData.id === formation.data_id)
		if (formationInfo) {
			if (sideWidget.formation?.id === formationInfo.id) {
				sideWidget.setVisible(!sideWidget.visible)
			} else {
				sideWidget.setVisible(true)
			}
			sideWidget.setFormation(formationInfo)
		}
	}

	const selectFormation = (e: number) => {
		setFormation(e, formation, list, setList)
	}

	return (
		<div className="flex sm:gap-4 items-center justify-center ">
			<select
				id={`formation_selector_${formation.id}`}
				name={`formation_selector_${formation.id}`}
				className={
					"bg-secondary-800 sm:text-xl p-2 font-graduate text-center max-w-[60vw] sm:max-w-[70vw] lg:max-w-full outline-none " +
					(formation.faction ? factionColours(formation.faction) : "")
				}
				value={formation.data_id ? formation.data_id : ""}
				onChange={(e) => {
					selectFormation(Number(e.target.value))
				}}>
				<option value="0" className="text-primary-50">
					SELECT FORMATION
				</option>
				{sortFormationFactions(filteredFormations()).map((format) => (
					<option
						key={formation.id + format.name}
						value={format.id}
						className={factionColours(format.faction)}>
						{format.legend && "IF: "}
						{format.subfaction ? `${format.subfaction} ` : ""}
						{format.name}
					</option>
				))}
			</select>
			<button
				onClick={handleFormationSideWidget}
				className="font-graduate text-xl sm:text-2xl font-bold text-tertiary-300 hover:text-primary-300 active:text-tertiary-500 p-1">
				<FaCircleQuestion />
			</button>
		</div>
	)
}

export default FormationSelector
